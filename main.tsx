import {createRoot} from "react-dom/client";
import JourneySite from "./app/journey-site";
import ProductSite from "./app/product-site";
import "./app/globals.css";
import "./app/public.css";

const query=new URLSearchParams(location.search);
const lang=query.get("lang")==="en"?"en":"zh";
const view=query.get("view");
createRoot(document.getElementById("root")!).render(
  view==="film"||view==="get"||view==="desk"
    ?<ProductSite initialLanguage={lang} initialView={view}/>
    :<JourneySite initialLanguage={lang}/>
);
