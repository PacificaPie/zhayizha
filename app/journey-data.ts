export type Lang = "zh" | "en";
export type Place = {id:string;name:string;zh:string;kind:string;lat:number;lon:number;source:number;note:string;noteEn:string};
export const places: Place[] = [
 {id:"park",name:"Parque México",zh:"墨西哥公园",kind:"park",lat:19.411605,lon:-99.169562,source:2,note:"把早晨留给树荫，走累了就坐一会儿。",noteEn:"A quiet morning under the trees. Leave a little room to pause."},
 {id:"cibeles",name:"Fuente de Cibeles",zh:"西贝莱斯喷泉",kind:"walk",lat:19.420019,lon:-99.166309,source:2,note:"从喷泉附近出发，慢慢走进 Roma 的小街。",noteEn:"Start by the fountain and wander into the little streets of Roma."},
 {id:"bakery",name:"Panadería Rosetta",zh:"Rosetta 面包店",kind:"food",lat:19.419974,lon:-99.16061,source:0,note:"早晨先去 Colima 街的面包店，点一份面包和咖啡。",noteEn:"Start on Colima with something from the bakery and a coffee."},
 {id:"modo",name:"MODO",zh:"MODO 物件博物馆",kind:"art",lat:19.420215,lon:-99.15907,source:1,note:"Colima 街上的小博物馆，给日常物件一点好奇心。",noteEn:"A little museum on Colima. A fresh look at everyday objects."},
 {id:"rosetta",name:"Rosetta",zh:"Rosetta 餐厅",kind:"food",lat:19.419821,lon:-99.159705,source:0,note:"这家是餐厅，和面包店分开保留；午餐留足时间。",noteEn:"The restaurant has its own pin, separate from the bakery. Take your time over lunch."},
 {id:"plaza",name:"Plaza Río de Janeiro",zh:"里约热内卢广场",kind:"walk",lat:19.421126,lon:-99.160454,source:1,note:"看完展，在附近的广场歇一歇。",noteEn:"After the museum, pause in the nearby square."},
];
export const cards = [
 {title:"在 Roma，吃一个下午。",titleEn:"An afternoon, best served slowly.",tag:"咖啡 · 面包 · 午餐",tagEn:"Coffee · Bakery · Lunch",color:"terracotta",ids:["bakery","rosetta"]},
 {title:"把好奇心留给街角。",titleEn:"A little room for curiosity.",tag:"博物馆 · 街区漫游",tagEn:"Museums · Wandering",color:"blue",ids:["modo","plaza"]},
 {title:"走进这座城的绿色里。",titleEn:"Take the greener way around.",tag:"公园 · 喷泉 · 慢慢走",tagEn:"Parks · Fountains · Slow days",color:"green",ids:["park","cibeles"]},
];
export type Stop = {id:string;time:string;duration:string;durationEn:string;fixed?:boolean};
export function makePlan(late:boolean,compact:boolean,day:number):Stop[]{
 const tomorrow:Stop[]=[{id:"plaza",time:compact?"11:00":"10:00",duration:"散步与咖啡",durationEn:"A walk & coffee"}];
 if(late||compact) tomorrow.unshift({id:"park",time:"09:00",duration:"慢慢逛公园",durationEn:"An unhurried walk"});
 if(compact) tomorrow.splice(1,0,{id:"cibeles",time:"10:00",duration:"街区漫游",durationEn:"Explore the neighborhood"});
 if(day===1)return tomorrow;
 return [
 ...(!late&&!compact?[{id:"park",time:"09:00",duration:"先去公园走走",durationEn:"Start under the trees"}]:[]),
 ...(!compact?[{id:"cibeles",time:late?"10:00":"10:00",duration:"沿途看看这座城",durationEn:"Take the scenic way"}]:[]),
 {id:"bakery",time:late?"10:30":compact?"09:30":"10:30",duration:"面包 + 一杯咖啡",durationEn:"A pastry & a coffee"},
 {id:"modo",time:late?"11:15":"11:15",duration:"给一场展览留点时间",durationEn:"Time for an exhibition"},
 {id:"rosetta",time:"13:00",duration:"已订午餐 · 时间锁定",durationEn:"Lunch reservation · locked",fixed:true},
 ];
}
