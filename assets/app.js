(function(){
var T={
en:{role:"Senior Industrial & Product Designer",role2:"Industrial & Product Designer",loc:"Colombia · Italy",phoneCo:"Phone · Colombia",phoneIt:"Phone · Italy",save:"Save contact",more:"View full profile",less:"Hide profile",
sProfile:"Profile",profile:"More than eight years of experience across Colombia, Italy and international clients. Master’s degrees from Milan and Barcelona; former senior designer at Studio Fuksas, Rome, with hands-on experience in materials and fabrication.",
sStudio:"My studio",studio:"Design and digital fabrication studio. Founder, 2024 — present.",sExp:"Experience",expZ:"Founder · 2024 — Present",expN:"Co-founder · Remote",expF:"Rome",
sRec:"Recognition",recU:"University excellence scholarship",recT:"Distinction thesis",sEdu:"Education",eduC:"Complementary courses",sTool:"Toolkit",shop:"FDM & resin printing · plaster and silicone moulds · ceramics · concrete",
sLang:"Languages",lEs:"Spanish",lEn:"English",lIt:"Italian",lNative:"Native",sPort:"Portfolio",openP:"Open portfolio · online"},
es:{role:"Diseñadora industrial y de producto senior",role2:"Diseñadora industrial y de producto",loc:"Colombia · Italia",phoneCo:"Teléfono · Colombia",phoneIt:"Teléfono · Italia",save:"Guardar contacto",more:"Ver perfil completo",less:"Ocultar perfil",
sProfile:"Perfil",profile:"Más de ocho años de experiencia entre Colombia, Italia y clientes internacionales. Maestrías en Milán y Barcelona; ex diseñadora senior en Studio Fuksas, Roma, con experiencia práctica en materiales y fabricación.",
sStudio:"Mi estudio",studio:"Estudio de diseño y fabricación digital. Fundadora, 2024 — actualidad.",sExp:"Experiencia",expZ:"Fundadora · 2024 — Actualidad",expN:"Cofundadora · Remoto",expF:"Roma",
sRec:"Reconocimientos",recU:"Beca de excelencia universitaria",recT:"Tesis con distinción",sEdu:"Formación",eduC:"Cursos complementarios",sTool:"Herramientas",shop:"Impresión FDM y resina · moldes de yeso y silicona · cerámica · concreto",
sLang:"Idiomas",lEs:"Español",lEn:"Inglés",lIt:"Italiano",lNative:"Nativo",sPort:"Portafolio",openP:"Abrir portafolio · en línea"},
it:{role:"Industrial & Product Designer senior",role2:"Industrial & Product Designer",loc:"Colombia · Italia",phoneCo:"Telefono · Colombia",phoneIt:"Telefono · Italia",save:"Salva contatto",more:"Vedi profilo completo",less:"Nascondi profilo",
sProfile:"Profilo",profile:"Oltre otto anni di esperienza tra Colombia, Italia e clienti internazionali. Master a Milano e Barcellona; già senior designer presso Studio Fuksas, Roma, con esperienza pratica in materiali e fabbricazione.",
sStudio:"Il mio studio",studio:"Studio di design e fabbricazione digitale. Fondatrice, 2024 — oggi.",sExp:"Esperienza",expZ:"Fondatrice · 2024 — Oggi",expN:"Co-fondatrice · Remoto",expF:"Roma",
sRec:"Riconoscimenti",recU:"Borsa di eccellenza universitaria",recT:"Tesi con lode",sEdu:"Formazione",eduC:"Corsi complementari",sTool:"Strumenti",shop:"Stampa FDM e resina · stampi in gesso e silicone · ceramica · calcestruzzo",
sLang:"Lingue",lEs:"Spagnolo",lEn:"Inglese",lIt:"Italiano",lNative:"Madrelingua",sPort:"Portfolio",openP:"Apri il portfolio · online"}};
var lang="en";
function pick(){var h=(location.hash||"").replace("#","").toLowerCase();if(T[h])return h;
try{var s=localStorage.getItem("auc-lang");if(T[s])return s}catch(e){}
var n=(navigator.language||"en").slice(0,2).toLowerCase();return T[n]?n:"en"}
function apply(l){lang=l;document.documentElement.lang=l;
document.querySelectorAll("[data-i]").forEach(function(el){var k=el.getAttribute("data-i");if(T[l][k]!=null)el.textContent=T[l][k]});
document.querySelectorAll(".lang button").forEach(function(b){b.setAttribute("aria-pressed",b.dataset.lang===l)});
var tg=document.getElementById("toggle");tg.textContent=document.getElementById("wrap").classList.contains("open")?T[l].less:T[l].more;
document.getElementById("plink").href="portafolio.html#"+l;
try{localStorage.setItem("auc-lang",l)}catch(e){}}
document.querySelectorAll(".lang button").forEach(function(b){b.addEventListener("click",function(){history.replaceState(null,"","#"+b.dataset.lang);apply(b.dataset.lang)})});
var wrap=document.getElementById("wrap"),tg=document.getElementById("toggle");
tg.addEventListener("click",function(){var o=wrap.classList.toggle("open");tg.setAttribute("aria-expanded",o);tg.textContent=o?T[lang].less:T[lang].more;if(o)document.getElementById("profile").scrollIntoView({behavior:"smooth"})});
document.getElementById("save").addEventListener("click",function(){
var v=["BEGIN:VCARD","VERSION:3.0","N:Uesseler Cala;Angie;;;","FN:Angie Uesseler Cala","TITLE:Industrial & Product Designer","EMAIL;TYPE=INTERNET:angie.uc.di@gmail.com","TEL;TYPE=CELL:+573208390714","TEL;TYPE=CELL:+393482640767","URL:https://www.linkedin.com/in/angie-uesseler-cala","END:VCARD"].join("\r\n");
var a=document.createElement("a");a.href=URL.createObjectURL(new Blob([v],{type:"text/vcard"}));a.download="Angie-Uesseler-Cala.vcf";document.body.appendChild(a);a.click();setTimeout(function(){URL.revokeObjectURL(a.href);a.remove()},500)});
window.addEventListener("hashchange",function(){var h=location.hash.replace("#","");if(T[h])apply(h)});
apply(pick());
})();
