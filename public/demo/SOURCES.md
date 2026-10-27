# Public Roma / Condesa concept-map data

`roma-map.json` is a deliberately small, public OpenStreetMap extract for an illustrative product demo. It contains no user account, saved-note, private itinerary, reservation, or browser-profile data. Retrieval date: **2026-10-26** (America/Mexico_City).

## Attribution and scope

Map data © [OpenStreetMap contributors](https://www.openstreetmap.org/copyright), available under the [Open Database License 1.0](https://opendatacommons.org/licenses/odbl/1-0/). Retain the visible `© OpenStreetMap contributors` credit linked to the copyright page next to the rendered map. This derived JSON remains available with its ODbL attribution and license reference.

Bounding box, in longitude/latitude order: `[-99.185, 19.402, -99.147, 19.433]`. Geometry is actual public OSM street and park geometry, simplified for illustration. It is **not** a routing graph, current traffic feed, travel-time source, or navigation product. Any route line, order, duration, or appointment in the landing-page demo is authored sample behavior; this dataset provides no evidence that such planning has been implemented in the product.

## Reproduce the source fetch

The full box exceeded OSM's 50,000-node map-request limit, so it was retrieved as four adjacent tiles through the public OSM 0.6 Map API. No credentials are required. The failed Overpass requests contributed no data.

```sh
curl -L 'https://api.openstreetmap.org/api/0.6/map?bbox=-99.185,19.402,-99.166,19.4175' -o roma-0.osm
curl -L 'https://api.openstreetmap.org/api/0.6/map?bbox=-99.166,19.402,-99.147,19.4175' -o roma-1.osm
curl -L 'https://api.openstreetmap.org/api/0.6/map?bbox=-99.185,19.4175,-99.166,19.433' -o roma-2.osm
curl -L 'https://api.openstreetmap.org/api/0.6/map?bbox=-99.166,19.4175,-99.147,19.433' -o roma-3.osm
```

Re-fetching naturally reflects subsequent community edits. Transformation used for this snapshot:

1. Parse the four OSM XML files; deduplicate by `(element type, OSM id)`; join each way's `nd ref` to the corresponding node coordinate.
2. Retain streets whose `highway` is `primary`, `secondary`, `tertiary`, `residential`, `pedestrian`, `living_street`, `unclassified`, `primary_link`, `secondary_link`, or `tertiary_link` and that have at least one vertex inside the bounding box.
3. Retain closed `leisure=park` ways and `leisure=garden` polygons larger than 750 m², with at least one vertex inside the box. Garden area is the polygon shoelace area in degrees multiplied by `111320² × cos(midpoint latitude)`.
4. Round coordinates to six decimals, then simplify each way with Ramer–Douglas–Peucker tolerance `0.000015` degrees, using perpendicular distance to the bounded segment. Preserve the first and last point. The source ways can extend outside the box; the renderer should clip to its view.
5. Preserve only numeric way ID, name, kind, and coordinates. Discard XML author/user/editor metadata and all other tags. The current extract has **2,066 street segments and 103 park/garden polygons** (319,179 bytes uncompressed).

## JSON contract

```text
{
  version: 1,
  bbox: [west, south, east, north],
  coordinateSystem: "WGS84; longitude, latitude",
  attribution, attributionUrl, licenseUrl, retrievedOn, purpose, processing,
  streets: [{ id: OSM_way_id, name: string, kind: highway_tag,
              coordinates: [[longitude, latitude], ...] }],
  parks:   [{ id: OSM_way_id, name: string, kind: "park" | "garden",
              coordinates: [[longitude, latitude], ...] }],
  places:  [{ id: demo_id, name, coordinates: [longitude, latitude],
              coordinateMethod, address, sourceUrl }]
}
```

For an SVG, use a local equirectangular projection or Web Mercator consistently for both streets and markers. Longitude is x; latitude is y (inverted for SVG). The bounding box is a framing limit, not a routing restriction. All marker coordinates were read from the fetched OSM entities. Node coordinates are used directly; polygon markers use the arithmetic mean of distinct vertices (a display location, not a verified entrance).

## Six example places

| Demo ID | Place / branch | Coordinate `[lon, lat]` | Exact public source |
|---|---|---|---|
| `bakery` | Panadería Rosetta, Colima 179 | `[-99.160610, 19.419974]` | [OSM way 1421204673](https://www.openstreetmap.org/way/1421204673), bakery building polygon |
| `modo` | MODO, Colima 145 | `[-99.159070, 19.420215]` | [OSM node 2133330366](https://www.openstreetmap.org/node/2133330366) |
| `plaza` | Plaza Río de Janeiro | `[-99.160454, 19.421126]` | [OSM way 30160210](https://www.openstreetmap.org/way/30160210), park polygon |
| `park` | Parque México | `[-99.169562, 19.411605]` | [OSM way 4758891](https://www.openstreetmap.org/way/4758891), park polygon |
| `cibeles` | Fuente de Cibeles | `[-99.166309, 19.420019]` | [OSM way 659613395](https://www.openstreetmap.org/way/659613395), fountain polygon |
| `rosetta` | Restaurant Rosetta, Colima 166 | `[-99.159705, 19.419821]` | [OSM node 4370393693](https://www.openstreetmap.org/node/4370393693) |

The bakery is explicitly the **Colima 179 branch**, distinct from Panadería Rosetta's Havre and Puebla locations and from Restaurant Rosetta at Colima 166. They must not be merged by name. MODO's street address is also corroborated by Mexico's [Sistema de Información Cultural](https://sic.cultura.gob.mx/ficha.php?estado_id=9&table=museo&table_id=1469); that page's displayed map point is close to, but not identical with, the OSM point. No opening-hours, menus, booking availability, or visitor ratings are claimed here.

No third-party photographs are included in this dataset.
