import { useState } from "react";

// ── CALENDARI ────────────────────────────────────────────────
const SCHEDULE = [
  ["2025-09-08","2025-09-12","PE",1],["2025-09-15","2025-09-19","PE",2],["2025-09-22","2025-09-26","PE",3],
  ["2025-09-29","2025-10-03","TH",1],["2025-10-06","2025-10-10","TH",2],["2025-10-13","2025-10-17","TH",3],
  ["2025-10-20","2025-10-24","TH",4],["2025-10-27","2025-10-31","TH",5],["2025-11-03","2025-11-07","TH",6],
  ["2025-11-10","2025-11-14","TH",7],["2025-11-17","2025-11-21","TH",8],["2025-11-24","2025-11-28","TH",1],
  ["2025-12-01","2025-12-05","TH",2],["2025-12-09","2025-12-12","TH",3],["2025-12-15","2025-12-19","TH",4],
  ["2026-01-08","2026-01-09","TH",5],["2026-01-12","2026-01-16","TH",6],["2026-01-19","2026-01-23","TH",7],
  ["2026-01-26","2026-01-30","TH",8],["2026-02-02","2026-02-06","TH",1],["2026-02-09","2026-02-13","TH",2],
  ["2026-02-16","2026-02-20","TH",3],["2026-02-23","2026-02-27","TH",4],["2026-03-02","2026-03-06","TH",5],
  ["2026-03-09","2026-03-13","TH",6],["2026-03-16","2026-03-20","TH",7],["2026-03-23","2026-03-27","TH",8],
  ["2026-04-07","2026-04-10","PE",1],["2026-04-13","2026-04-17","PE",2],["2026-04-20","2026-04-24","PE",3],
  ["2026-04-27","2026-04-30","PE",4],["2026-05-04","2026-05-08","PE",5],["2026-05-11","2026-05-15","PE",6],
  ["2026-05-18","2026-05-22","PE",7],["2026-05-26","2026-05-29","PE",8],["2026-06-01","2026-06-05","PE",1],
  ["2026-06-08","2026-06-12","PE",2],["2026-06-15","2026-06-19","PE",3],["2026-06-22","2026-06-26","PE",4],
  ["2026-06-29","2026-07-03","PE",5],["2026-07-06","2026-07-10","PE",6],
];

// ── MENÚ (en català, font oficial) ───────────────────────────
const ESMORZAR = {
  1:"Llet amb flocs de cereals",
  2:"Fruita del temps i pa amb oli",
  3:"Iogurt natural sense sucre amb flocs de cereals",
  4:"Fruita del temps i pa amb oli",
  5:"Llet amb flocs de cereals",
};
const BERENAR_COLE = {
  1:"Fruita i pa amb oli",
  2:"Iogurt natural sense sucre i bastonets integrals",
  3:"Fruita i pa amb oli",
  4:"Llet i bastonets integrals",
  5:"Pa amb oli i formatge",
};
const DINAR_PE = {
  1:{1:{p:"Arros amb tomaquet",s:"Truita francesa"},2:{p:"Carbasso patata i ceba",s:"Cigrons estofats amb mongeta verda i pastanaga"},3:{p:"Espaguetis amb salsa de verdures",s:"Formatge fresc"},4:{p:"Pure de mongeta blanca i pastanaga",s:"Peix al forn amb patates"},5:{p:"Sopa de brou de pollastre i pasta",s:"Pollastre al forn"}},
  2:{1:{p:"Arros amb pastanaga i carbasso",s:"Truita de paisana"},2:{p:"Crema de porros",s:"Vedella estofada"},3:{p:"Macarrons a la norma",s:"Formatge fresc"},4:{p:"Llenties estofades amb patata i pebrot",s:"Peix a la planxa amb tomaquet al forn"},5:{p:"Sopa minestrone",s:"Pollastre al forn"}},
  3:{1:{p:"Arros amb broquil i carbassa",s:"Truita de carbasso i patata"},2:{p:"Mongeta verda patata i pastanaga",s:"Llenties a la jardinera"},3:{p:"Espirals amb sofregit de tomaquet i ceba",s:"Formatge fresc"},4:{p:"Cigrons amb hortalisses",s:"Peix al forn amb llit de patata i ceba"},5:{p:"Sopa de brou de pollastre i pasta",s:"Pollastre arrebossat"}},
  4:{1:{p:"Amanida d'arros amb pesol tomaquet i blat de moro",s:"Truita de patata i ceba"},2:{p:"Pure de carbasso",s:"Estofat de gall dindi"},3:{p:"Fideus guisats amb mongeta verda pastanaga i ceba",s:"Formatge fresc"},4:{p:"Llenties estofades amb arros i verdures",s:"Peix al forn amb samfaina"},5:{p:"Sopa de brou vegetal i pasta",s:"Pollastre al forn"}},
  5:{1:{p:"Arros amb tomaquet",s:"Truita francesa"},2:{p:"Mongeta verda i patata",s:"Cigrons estofats amb carbassa"},3:{p:"Espaguetis amb carbasso",s:"Formatge fresc"},4:{p:"Mongetes blanques estofades amb hortalisses",s:"Peix amb ceba i tomaquet al forn"},5:{p:"Sopa de brou de pollastre i pasta",s:"Pollastre al forn"}},
  6:{1:{p:"Arros amb pesols mongeta verda i pastanaga",s:"Truita de patata i ceba"},2:{p:"Pure de verdures",s:"Vedella estofada"},3:{p:"Macarrons a la napolitana",s:"Formatge fresc"},4:{p:"Llenties guisades amb patata i pastanaga",s:"Peix a la planxa amb daus d'alberginia"},5:{p:"Sopa juliana amb verdures i pasta",s:"Pollastre al forn"}},
  7:{1:{p:"Arros amb sofregit de tomaquet i ceba",s:"Truita de carbasso i patata"},2:{p:"Broquil patata i pastanaga al vapor",s:"Llenties estofades amb verduretes"},3:{p:"Espirals amb xampinyons",s:"Formatge fresc"},4:{p:"Cigrons amb verdures i arros",s:"Peix al forn amb samfaina"},5:{p:"Sopa de brou de pollastre i pasta",s:"Pollastre arrebossat"}},
  8:{1:{p:"Arros caldos amb mongeta verda",s:"Truita de patata i ceba"},2:{p:"Crema de carbasso",s:"Estofat de gall dindi"},3:{p:"Fideus guisats amb verdures de temporada",s:"Formatge fresc"},4:{p:"Llenties a la jardinera",s:"Peix al forn amb patates"},5:{p:"Sopa de brou vegetal i pasta",s:"Pollastre al forn"}},
};
const DINAR_TH = {
  1:{1:{p:"Arros amb pesols i carbassa",s:"Pit de pollastre a la planxa"},2:{p:"Carbasso patata i ceba",s:"Cigrons estofats"},3:{p:"Espaguetis amb tomaquet",s:"Formatge fresc"},4:{p:"Pure de verdures",s:"Peix al forn amb patates"},5:{p:"Sopa juliana",s:"Pollastre al forn"}},
  2:{1:{p:"Arros amb verdures",s:"Conill al forn"},2:{p:"Crema de porros",s:"Vedella estofada"},3:{p:"Macarrons bolonya",s:"Formatge fresc"},4:{p:"Llenties amb patata i pebrot",s:"Peix a la planxa"},5:{p:"Sopa minestrone",s:"Pollastre al forn"}},
  3:{1:{p:"Arros a la cassola",s:"Pollastre arrebossat"},2:{p:"Mongeta verda i patata",s:"Bacalla amb tomaquet"},3:{p:"Espaguetis pesto",s:"Formatge fresc"},4:{p:"Cigrons amb hortalisses",s:"Peix al forn"},5:{p:"Sopa de brou de pollastre i pasta",s:"Pollastre al forn"}},
  4:{1:{p:"Arros amb bolets",s:"Pollastre al forn"},2:{p:"Pure de carbassa",s:"Estofat de gall dindi"},3:{p:"Macarrons gratinats",s:"Formatge fresc"},4:{p:"Llenties amb verdures",s:"Peix al forn amb samfaina"},5:{p:"Sopa de brou vegetal i pasta",s:"Pollastre al forn"}},
  5:{1:{p:"Arros amb pesols",s:"Pollastre guisat"},2:{p:"Mongeta verda i patata",s:"Cigrons estofats amb carbassa"},3:{p:"Fideus a la cassola",s:"Formatge fresc"},4:{p:"Mongetes blanques estofades amb hortalisses",s:"Peix amb ceba i tomaquet al forn"},5:{p:"Sopa de brou de pollastre i pasta",s:"Pollastre al forn"}},
  6:{1:{p:"Arros amb carbassa i porro",s:"Conill guisat"},2:{p:"Pure de verdures",s:"Vedella estofada"},3:{p:"Espaguetis bolonya",s:"Formatge fresc"},4:{p:"Llenties guisades",s:"Peix a la planxa"},5:{p:"Sopa juliana",s:"Pollastre al forn"}},
  7:{1:{p:"Arros blanc amb verdures",s:"Pollastre a l'ast"},2:{p:"Broquil patata i pastanaga al vapor",s:"Llenties estofades"},3:{p:"Macarrons amb pesto",s:"Formatge fresc"},4:{p:"Cigrons amb verdures i arros",s:"Peix al forn"},5:{p:"Sopa de brou de pollastre i pasta",s:"Pollastre arrebossat"}},
  8:{1:{p:"Arros tres delicies",s:"Gall dindi arrebossat"},2:{p:"Crema de carbasso",s:"Estofat de gall dindi"},3:{p:"Fideus guisats amb verdures de temporada",s:"Formatge fresc"},4:{p:"Llenties a la jardinera",s:"Peix al forn amb patates"},5:{p:"Sopa de brou vegetal i pasta",s:"Pollastre al forn"}},
};

// ── DICCIONARI DE PLATS ───────────────────────────────────────
// Clau: text en català · Valor: { es, en }
const DISH = {
  // Esmorzars
  "Llet amb flocs de cereals":                          {es:"Leche con copos de cereales",                        en:"Milk with cereal flakes"},
  "Fruita del temps i pa amb oli":                      {es:"Fruta del tiempo y pan con aceite",                  en:"Seasonal fruit and bread with olive oil"},
  "Iogurt natural sense sucre amb flocs de cereals":    {es:"Yogur natural sin azúcar con copos de cereales",     en:"Natural yogurt without sugar with cereal flakes"},
  // Berenars cole
  "Fruita i pa amb oli":                                {es:"Fruta y pan con aceite",                             en:"Fruit and bread with olive oil"},
  "Iogurt natural sense sucre i bastonets integrals":   {es:"Yogur natural sin azúcar y palitos integrales",      en:"Natural yogurt without sugar and wholegrain sticks"},
  "Llet i bastonets integrals":                         {es:"Leche y palitos integrales",                         en:"Milk and wholegrain sticks"},
  "Pa amb oli i formatge":                              {es:"Pan con aceite y queso",                             en:"Bread with olive oil and cheese"},
  // Amanida / postres
  "Amanida":                                            {es:"Ensalada",                                           en:"Salad"},
  "Fruita del temps":                                   {es:"Fruta del tiempo",                                   en:"Seasonal fruit"},
  // Primers PE
  "Arros amb tomaquet":                                 {es:"Arroz con tomate",                                   en:"Rice with tomato"},
  "Arros amb pastanaga i carbasso":                     {es:"Arroz con zanahoria y calabacín",                    en:"Rice with carrot and courgette"},
  "Arros amb broquil i carbassa":                       {es:"Arroz con brócoli y calabaza",                       en:"Rice with broccoli and pumpkin"},
  "Amanida d'arros amb pesol tomaquet i blat de moro":  {es:"Ensalada de arroz con guisante tomate y maíz",       en:"Rice salad with peas tomato and sweetcorn"},
  "Arros amb pesols mongeta verda i pastanaga":         {es:"Arroz con guisantes judía verde y zanahoria",        en:"Rice with peas green beans and carrot"},
  "Arros amb sofregit de tomaquet i ceba":              {es:"Arroz con sofrito de tomate y cebolla",              en:"Rice with tomato and onion sofrito"},
  "Arros caldos amb mongeta verda":                     {es:"Arroz caldoso con judía verde",                      en:"Soupy rice with green beans"},
  "Carbasso patata i ceba":                             {es:"Calabacín patata y cebolla",                         en:"Courgette potato and onion"},
  "Crema de porros":                                    {es:"Crema de puerros",                                   en:"Leek cream soup"},
  "Mongeta verda patata i pastanaga":                   {es:"Judía verde patata y zanahoria",                     en:"Green beans potato and carrot"},
  "Pure de carbasso":                                   {es:"Puré de calabacín",                                  en:"Courgette purée"},
  "Mongeta verda i patata":                             {es:"Judía verde y patata",                               en:"Green beans and potato"},
  "Pure de verdures":                                   {es:"Puré de verduras",                                   en:"Vegetable purée"},
  "Broquil patata i pastanaga al vapor":                {es:"Brócoli patata y zanahoria al vapor",                en:"Steamed broccoli potato and carrot"},
  "Crema de carbasso":                                  {es:"Crema de calabacín",                                 en:"Courgette cream soup"},
  "Espaguetis amb salsa de verdures":                   {es:"Espaguetis con salsa de verduras",                   en:"Spaghetti with vegetable sauce"},
  "Macarrons a la norma":                               {es:"Macarrones a la norma (berenjena cebolla tomate)",   en:"Pasta alla norma (aubergine onion tomato)"},
  "Espirals amb sofregit de tomaquet i ceba":           {es:"Espirales con sofrito de tomate y cebolla",          en:"Pasta spirals with tomato and onion sofrito"},
  "Fideus guisats amb mongeta verda pastanaga i ceba":  {es:"Fideos guisados con judía verde zanahoria y cebolla",en:"Stewed noodles with green beans carrot and onion"},
  "Espaguetis amb carbasso":                            {es:"Espaguetis con calabacín",                           en:"Spaghetti with courgette"},
  "Macarrons a la napolitana":                          {es:"Macarrones a la napolitana",                         en:"Neapolitan macaroni"},
  "Espirals amb xampinyons":                            {es:"Espirales con champiñones",                          en:"Pasta spirals with mushrooms"},
  "Fideus guisats amb verdures de temporada":           {es:"Fideos guisados con verduras de temporada",          en:"Stewed noodles with seasonal vegetables"},
  "Pure de mongeta blanca i pastanaga":                 {es:"Puré de judía blanca y zanahoria",                   en:"White bean and carrot purée"},
  "Llenties estofades amb patata i pebrot":             {es:"Lentejas estofadas con patata y pimiento",           en:"Stewed lentils with potato and pepper"},
  "Cigrons amb hortalisses":                            {es:"Garbanzos con hortalizas",                           en:"Chickpeas with vegetables"},
  "Llenties estofades amb arros i verdures":            {es:"Lentejas estofadas con arroz y verduras",            en:"Stewed lentils with rice and vegetables"},
  "Mongetes blanques estofades amb hortalisses":        {es:"Judías blancas estofadas con hortalizas",            en:"Stewed white beans with vegetables"},
  "Llenties guisades amb patata i pastanaga":           {es:"Lentejas guisadas con patata y zanahoria",           en:"Stewed lentils with potato and carrot"},
  "Cigrons amb verdures i arros":                       {es:"Garbanzos con verduras y arroz",                     en:"Chickpeas with vegetables and rice"},
  "Llenties a la jardinera":                            {es:"Lentejas a la jardinera",                            en:"Gardener's lentils"},
  "Sopa de brou de pollastre i pasta":                  {es:"Sopa de caldo de pollo y pasta",                    en:"Chicken broth soup with pasta"},
  "Sopa minestrone":                                    {es:"Sopa minestrone",                                    en:"Minestrone soup"},
  "Sopa de brou vegetal i pasta":                       {es:"Sopa de caldo vegetal y pasta",                      en:"Vegetable broth soup with pasta"},
  "Sopa juliana amb verdures i pasta":                  {es:"Sopa juliana con verduras y pasta",                  en:"Julienne soup with vegetables and pasta"},
  "Sopa juliana":                                       {es:"Sopa juliana",                                       en:"Julienne soup"},
  // Primers TH
  "Arros amb pesols i carbassa":                        {es:"Arroz con guisantes y calabaza",                     en:"Rice with peas and pumpkin"},
  "Arros amb verdures":                                 {es:"Arroz con verduras",                                 en:"Rice with vegetables"},
  "Arros a la cassola":                                 {es:"Arroz a la cazuela",                                 en:"Casserole rice"},
  "Arros amb bolets":                                   {es:"Arroz con setas",                                    en:"Rice with mushrooms"},
  "Arros amb pesols":                                   {es:"Arroz con guisantes",                                en:"Rice with peas"},
  "Arros amb carbassa i porro":                         {es:"Arroz con calabaza y puerro",                        en:"Rice with pumpkin and leek"},
  "Arros blanc amb verdures":                           {es:"Arroz blanco con verduras",                          en:"White rice with vegetables"},
  "Arros tres delicies":                                {es:"Arroz tres delicias",                                en:"Three delicacies rice"},
  "Espaguetis amb tomaquet":                            {es:"Espaguetis con tomate",                              en:"Spaghetti with tomato"},
  "Espaguetis pesto":                                   {es:"Espaguetis al pesto",                                en:"Pesto spaghetti"},
  "Espaguetis bolonya":                                 {es:"Espaguetis a la boloñesa",                           en:"Bolognese spaghetti"},
  "Macarrons bolonya":                                  {es:"Macarrones a la boloñesa",                           en:"Bolognese macaroni"},
  "Macarrons gratinats":                                {es:"Macarrones gratinados",                              en:"Gratinated macaroni"},
  "Macarrons amb pesto":                                {es:"Macarrones al pesto",                                en:"Pesto macaroni"},
  "Fideus a la cassola":                                {es:"Fideos a la cazuela",                                en:"Casserole noodles"},
  "Fideus guisats amb verdures de temporada":           {es:"Fideos guisados con verduras de temporada",          en:"Stewed noodles with seasonal vegetables"},
  "Fideus amb verdures":                                {es:"Fideos con verduras",                                en:"Noodles with vegetables"},
  "Pure de carbassa":                                   {es:"Puré de calabaza",                                   en:"Pumpkin purée"},
  "Llenties amb patata i pebrot":                       {es:"Lentejas con patata y pimiento",                     en:"Lentils with potato and pepper"},
  "Llenties amb verdures":                              {es:"Lentejas con verduras",                              en:"Lentils with vegetables"},
  "Llenties guisades":                                  {es:"Lentejas guisadas",                                  en:"Stewed lentils"},
  "Sopa de brou i pasta":                               {es:"Sopa de caldo y pasta",                              en:"Broth soup with pasta"},
  "Sopa de brou vegetal":                               {es:"Sopa de caldo vegetal",                              en:"Vegetable broth soup"},
  // Segons
  "Truita francesa":                                    {es:"Tortilla francesa",                                  en:"Plain omelette"},
  "Truita de paisana":                                  {es:"Tortilla paisana",                                   en:"Country-style omelette"},
  "Truita de carbasso i patata":                        {es:"Tortilla de calabacín y patata",                     en:"Courgette and potato omelette"},
  "Truita de patata i ceba":                            {es:"Tortilla de patata y cebolla",                       en:"Potato and onion omelette"},
  "Cigrons estofats amb mongeta verda i pastanaga":     {es:"Garbanzos estofados con judía verde y zanahoria",    en:"Stewed chickpeas with green beans and carrot"},
  "Vedella estofada":                                   {es:"Ternera estofada",                                   en:"Stewed veal"},
  "Estofat de gall dindi":                              {es:"Estofado de pavo",                                   en:"Turkey stew"},
  "Formatge fresc":                                     {es:"Queso fresco",                                       en:"Fresh cheese"},
  "Peix al forn amb patates":                           {es:"Pescado al horno con patatas",                       en:"Baked fish with potatoes"},
  "Peix a la planxa amb tomaquet al forn":              {es:"Pescado a la plancha con tomate al horno",           en:"Grilled fish with baked tomato"},
  "Peix al forn amb llit de patata i ceba":             {es:"Pescado al horno sobre cama de patata y cebolla",    en:"Baked fish on a bed of potato and onion"},
  "Peix al forn amb samfaina":                          {es:"Pescado al horno con samfaina",                      en:"Baked fish with ratatouille"},
  "Pollastre al forn":                                  {es:"Pollo al horno",                                     en:"Roast chicken"},
  "Pollastre arrebossat":                               {es:"Pollo rebozado",                                     en:"Breaded chicken"},
  "Cigrons estofats amb carbassa":                      {es:"Garbanzos estofados con calabaza",                   en:"Stewed chickpeas with pumpkin"},
  "Cigrons estofats":                                   {es:"Garbanzos estofados",                                en:"Stewed chickpeas"},
  "Peix amb ceba i tomaquet al forn":                   {es:"Pescado con cebolla y tomate al horno",              en:"Fish with onion and baked tomato"},
  "Peix a la planxa amb daus d'alberginia":             {es:"Pescado a la plancha con dados de berenjena",        en:"Grilled fish with aubergine cubes"},
  "Llenties estofades amb verduretes":                  {es:"Lentejas estofadas con verduritas",                  en:"Stewed lentils with vegetables"},
  "Pit de pollastre a la planxa":                       {es:"Pechuga de pollo a la plancha",                      en:"Grilled chicken breast"},
  "Conill al forn":                                     {es:"Conejo al horno",                                    en:"Roast rabbit"},
  "Bacalla amb tomaquet":                               {es:"Bacalao con tomate",                                 en:"Cod with tomato"},
  "Peix a la planxa":                                   {es:"Pescado a la plancha",                               en:"Grilled fish"},
  "Peix al forn":                                       {es:"Pescado al horno",                                   en:"Baked fish"},
  "Llenties estofades":                                 {es:"Lentejas estofadas",                                 en:"Stewed lentils"},
  "Gall dindi arrebossat":                              {es:"Pavo rebozado",                                      en:"Breaded turkey"},
  "Pollastre guisat":                                   {es:"Pollo guisado",                                      en:"Stewed chicken"},
  "Conill guisat":                                      {es:"Conejo guisado",                                     en:"Stewed rabbit"},
  "Pollastre a l'ast":                                  {es:"Pollo al ast",                                       en:"Spit-roast chicken"},
};

function tr(text, lang) {
  if (lang === "ca") return text;
  var d = DISH[text];
  if (d && d[lang]) return d[lang];
  return text; // fallback: mostra l'original
}

// ── TRADUCCIONS UI ────────────────────────────────────────────
const T = {
  ca:{
    title:"Menu d'Ainet",sub:"Escola Bressol · Ausolan 2025-26",
    today:"Avui",weekend:"Cap de setmana!",weekendMsg:"La Ainet descansa avui!",
    holiday:"Festiu o vacances",holidayMsg:"Avui no hi ha escola",
    noSched:"Fora del calendari",noSchedMsg:"Possibles vacances o festiu escolar.",
    noDinar:"Dinar no disponible",
    esmorzar:"Esmorzar",primer:"1r plat",segon:"2n plat",
    amanida:"Amanida",postre:"Fruita del temps",
    berenarCole:"Berenar (cole)",berenarCasa:"Berenar a casa",
    sopar:"Sopar proposat",atHome:"A CASA",
    veg:"Verdura",prot:"Proteina",hid:"Hidrats",post:"Postres",
    timing:"Sopar 7-8 pm · dormir 1.5h despres",
    thWarn:"El menu Tardor-Hivern es aproximat. Puja el PDF oficial per tenir les dades exactes.",
    thLabel:"Tardor-Hivern",peLabel:"Primavera-Estiu",week:"Setmana",
    dies:["Diumenge","Dilluns","Dimarts","Dimecres","Dijous","Divendres","Dissabte"],
    mesos:["Gener","Febrer","Marc","Abril","Maig","Juny","Juliol","Agost","Setembre","Octubre","Novembre","Desembre"],
    soparItems:{
      1:{veg:"Crema de carbassa i ceba",prot:"Ou a la copa (2 ous)",hid:"Pa integral torrat",post:"Iogurt natural",kcal:"~350 kcal"},
      2:{veg:"Broquil al vapor amb oli",prot:"Filet de lluc al vapor",hid:"Pure de patata lleuger",post:"Platan petit",kcal:"~320 kcal"},
      3:{veg:"Pastanaga i carbasso saltats",prot:"Pit de pollastre desfilat",hid:"Arros bullit",post:"Pera cuita",kcal:"~340 kcal"},
      4:{veg:"Mongetes tendres amb oli",prot:"Truita francesa (2 ous)",hid:"Pa de motlle integral",post:"Iogurt natural",kcal:"~310 kcal"},
      5:{veg:"Crema de pesols suau",prot:"Salmo al vapor amb llimona",hid:"Pa integral",post:"Fruita del temps",kcal:"~330 kcal"},
    },
    bcItems:{1:["Iogurt natural amb platan","Aigua sense sucre"],2:["Llet tebia amb pa integral","Fruita de temporada"],3:["Fruita de temporada variada","Galetes d'avena sense sucre"],4:["Batut de llet i platan"],5:["Formatge fresc amb pa integral","Fruita del temps"]},
    bcTips:{1:"Evita dolcos: ja ha berenat al cole",2:"Porcio petita, el sopar es aviat",3:"La fruita fresca hidrata i omple be",4:"Batut lleuger, el sopar es aviat",5:"Divendres! Merienda suau a casa"},
    altProt:{pollo:"Filet de lluc al vapor",peix:"Ou a la copa (2 ous)",ou:"Pit de pollastre desfilat"},
  },
  es:{
    title:"Menú de Ainet",sub:"Escola Bressol · Ausolan 2025-26",
    today:"Hoy",weekend:"¡Fin de semana!",weekendMsg:"¡Ainet descansa hoy!",
    holiday:"Festivo o vacaciones",holidayMsg:"Hoy no hay cole",
    noSched:"Fuera del calendario",noSchedMsg:"Posibles vacaciones o festivo escolar.",
    noDinar:"Almuerzo no disponible",
    esmorzar:"Desayuno",primer:"1er plato",segon:"2º plato",
    amanida:"Ensalada",postre:"Fruta del tiempo",
    berenarCole:"Merienda (cole)",berenarCasa:"Merienda en casa",
    sopar:"Cena propuesta",atHome:"EN CASA",
    veg:"Verdura",prot:"Proteína",hid:"Hidratos",post:"Postre",
    timing:"Cenar 7-8 pm · dormir 1.5h después",
    thWarn:"El menú Otoño-Invierno es aproximado. Sube el PDF oficial para tener los datos exactos.",
    thLabel:"Otoño-Invierno",peLabel:"Primavera-Verano",week:"Semana",
    dies:["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"],
    mesos:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],
    soparItems:{
      1:{veg:"Crema de calabaza y cebolla",prot:"Huevo pasado por agua (2 uds)",hid:"Pan integral tostado",post:"Yogur natural",kcal:"~350 kcal"},
      2:{veg:"Brócoli al vapor con aceite",prot:"Filete de merluza al vapor",hid:"Puré de patata ligero",post:"Plátano pequeño",kcal:"~320 kcal"},
      3:{veg:"Zanahoria y calabacín salteados",prot:"Pechuga de pollo desmenuzada",hid:"Arroz hervido",post:"Pera cocida",kcal:"~340 kcal"},
      4:{veg:"Judías verdes con aceite",prot:"Tortilla francesa (2 huevos)",hid:"Pan de molde integral",post:"Yogur natural",kcal:"~310 kcal"},
      5:{veg:"Crema de guisantes suave",prot:"Salmón al vapor con limón",hid:"Pan integral",post:"Fruta del tiempo",kcal:"~330 kcal"},
    },
    bcItems:{1:["Yogur natural con plátano","Agua sin azúcar"],2:["Leche tibia con pan integral","Fruta de temporada"],3:["Fruta de temporada variada","Galletas de avena sin azúcar"],4:["Batido de leche y plátano"],5:["Queso fresco con pan integral","Fruta del tiempo"]},
    bcTips:{1:"Evita dulces: ya ha merendado en el cole",2:"Porción pequeña, la cena es pronto",3:"La fruta fresca hidrata y llena bien",4:"Batido ligero, la cena es pronto",5:"Viernes! Merienda suave en casa"},
    altProt:{pollo:"Filete de merluza al vapor",peix:"Huevo pasado por agua (2 uds)",ou:"Pechuga de pollo desmenuzada"},
  },
  en:{
    title:"Ainet's Menu",sub:"Escola Bressol · Ausolan 2025-26",
    today:"Today",weekend:"Weekend!",weekendMsg:"Ainet is resting today!",
    holiday:"Public holiday",holidayMsg:"No school today",
    noSched:"Outside the calendar",noSchedMsg:"Possible vacation or school holiday.",
    noDinar:"Lunch not available",
    esmorzar:"Breakfast",primer:"1st course",segon:"2nd course",
    amanida:"Salad",postre:"Seasonal fruit",
    berenarCole:"School snack",berenarCasa:"Home snack",
    sopar:"Suggested dinner",atHome:"AT HOME",
    veg:"Vegetable",prot:"Protein",hid:"Carbs",post:"Dessert",
    timing:"Dinner 7-8 pm · sleep 1.5h later",
    thWarn:"The Autumn-Winter menu is approximate. Upload the official PDF for exact data.",
    thLabel:"Autumn-Winter",peLabel:"Spring-Summer",week:"Week",
    dies:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
    mesos:["January","February","March","April","May","June","July","August","September","October","November","December"],
    soparItems:{
      1:{veg:"Pumpkin and onion cream",prot:"Soft-boiled eggs (x2)",hid:"Toasted wholegrain bread",post:"Natural yogurt",kcal:"~350 kcal"},
      2:{veg:"Steamed broccoli with olive oil",prot:"Steamed hake fillet",hid:"Light mashed potato",post:"Small banana",kcal:"~320 kcal"},
      3:{veg:"Sautéed carrot and courgette",prot:"Shredded chicken breast",hid:"Boiled rice",post:"Stewed pear",kcal:"~340 kcal"},
      4:{veg:"Green beans with olive oil",prot:"Plain omelette (2 eggs)",hid:"Wholegrain sliced bread",post:"Natural yogurt",kcal:"~310 kcal"},
      5:{veg:"Smooth pea cream",prot:"Steamed salmon with lemon",hid:"Wholegrain bread",post:"Seasonal fruit",kcal:"~330 kcal"},
    },
    bcItems:{1:["Natural yogurt with banana","Water, no sugar"],2:["Warm milk with wholegrain bread","Seasonal fruit"],3:["Seasonal fresh fruit","Oat biscuits, no added sugar"],4:["Milk and banana smoothie"],5:["Fresh cheese with wholegrain bread","Seasonal fruit"]},
    bcTips:{1:"Avoid sweets: she already snacked at school",2:"Small portion, dinner is soon",3:"Fresh fruit hydrates and fills well",4:"Light smoothie, dinner is soon",5:"Friday! Light snack at home"},
    altProt:{pollo:"Steamed hake fillet",peix:"Soft-boiled eggs (x2)",ou:"Shredded chicken breast"},
  },
};

// ── HELPERS ───────────────────────────────────────────────────
function parseDate(s){var p=s.split("-").map(Number);return new Date(p[0],p[1]-1,p[2]);}
function getWeekInfo(date){
  var d=new Date(date.getFullYear(),date.getMonth(),date.getDate());
  for(var i=0;i<SCHEDULE.length;i++){var r=SCHEDULE[i];if(d>=parseDate(r[0])&&d<=parseDate(r[1]))return{type:r[2],week:r[3]};}
  return null;
}
function getDinar(wi,dow){if(!wi)return null;var t=wi.type==="PE"?DINAR_PE:DINAR_TH;return(t[wi.week]||{})[dow]||null;}
function smartSopar(dow,dinar,t){
  var s=Object.assign({},t.soparItems[dow]);
  if(!dinar)return s;
  var seg=dinar.s.toLowerCase();
  var isPollo=seg.includes("pollastre")||seg.includes("gall")||seg.includes("conill");
  var isPeix=seg.includes("peix")||seg.includes("lluc")||seg.includes("bacalla")||seg.includes("salmo");
  var isOu=seg.includes("truita")||seg.includes("ou")||seg.includes("croquete");
  if(isPollo)s.prot=t.altProt.pollo;
  if(isPeix)s.prot=t.altProt.peix;
  if(isOu)s.prot=t.altProt.ou;
  return s;
}

// ── FLAG ──────────────────────────────────────────────────────
function SenyeraFlag(){
  return(
    <div style={{width:26,height:17,borderRadius:3,overflow:"hidden",border:"1px solid rgba(0,0,0,0.2)",display:"flex",flexDirection:"column",flexShrink:0}}>
      {[0,1,2,3,4,5,6,7,8].map(function(i){return <div key={i} style={{flex:1,background:i%2===0?"#FCDD09":"#C1001F"}}/>;})}
    </div>
  );
}

// ── COMPONENTS ────────────────────────────────────────────────
function Card(props){
  return(
    <div style={{background:props.bg,border:"2px solid "+props.border,borderRadius:20,padding:"14px 18px",marginBottom:12,boxShadow:"0 4px 16px rgba(0,0,0,0.05)"}}>
      <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:10}}>
        <span style={{fontSize:22}}>{props.icon}</span>
        <span style={{fontWeight:800,fontSize:13,color:props.border,textTransform:"uppercase",letterSpacing:"0.5px"}}>{props.title}</span>
      </div>
      {props.children}
    </div>
  );
}
function Row(props){return <div style={{fontSize:15,color:"#374151",fontWeight:props.bold?700:400,marginBottom:3,lineHeight:1.4}}>{props.text}</div>;}
function Divider(props){
  return(
    <div style={{display:"flex",alignItems:"center",gap:10,margin:"20px 0 14px"}}>
      <div style={{flex:1,height:1,background:"#E5E7EB"}}></div>
      <div style={{background:"linear-gradient(135deg,#667eea,#764ba2)",color:"white",borderRadius:20,padding:"5px 14px",fontSize:12,fontWeight:800,boxShadow:"0 2px 8px rgba(102,126,234,0.3)"}}>{props.label}</div>
      <div style={{flex:1,height:1,background:"#E5E7EB"}}></div>
    </div>
  );
}

// ── APP ───────────────────────────────────────────────────────
export default function App(){
  var today=new Date();
  var ds=useState(today);var date=ds[0];var setDate=ds[1];
  var ls=useState("ca"); var lang=ls[0];var setLang=ls[1];
  var t=T[lang];

  var dow=date.getDay();
  var school=[1,2,3,4,5].includes(dow);
  var wi=getWeekInfo(date);
  var dinar=school&&wi?getDinar(wi,dow):null;
  var sopar=school?smartSopar(dow,dinar,t):null;
  var bcasa=school?{items:t.bcItems[dow],tip:t.bcTips[dow]}:null;
  var isToday=date.toDateString()===today.toDateString();

  function shift(n){var d=new Date(date);d.setDate(d.getDate()+n);setDate(d);}

  var navBtn={background:"#F3F4F6",border:"none",borderRadius:12,width:40,height:40,fontSize:20,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",color:"#374151"};

  var langs=[
    {code:"ca",flag:<SenyeraFlag/>,label:"CA"},
    {code:"es",flag:"🇪🇸",label:"ES"},
    {code:"en",flag:"🇬🇧",label:"EN"},
  ];

  return(
    <div style={{minHeight:"100vh",background:"linear-gradient(135deg,#FFF8E7 0%,#FFF0F5 50%,#F0F4FF 100%)",fontFamily:"'Nunito','Segoe UI',sans-serif",paddingBottom:40}}>

      {/* HEADER */}
      <div style={{background:"linear-gradient(135deg,#FF6B9D,#FF8E53)",padding:"20px 20px 18px",borderRadius:"0 0 32px 32px",boxShadow:"0 8px 32px rgba(255,107,157,0.3)",textAlign:"center",color:"white"}}>
        <div style={{fontSize:36}}>🌟</div>
        <h1 style={{margin:"4px 0 2px",fontSize:26,fontWeight:900}}>{t.title}</h1>
        <p style={{margin:"0 0 14px",fontSize:12,opacity:0.9}}>{t.sub}</p>
        <div style={{display:"flex",justifyContent:"center",gap:8}}>
          {langs.map(function(l){
            var active=lang===l.code;
            return(
              <button key={l.code} onClick={function(){setLang(l.code);}} style={{display:"flex",alignItems:"center",gap:6,padding:"6px 14px",background:active?"white":"rgba(255,255,255,0.25)",border:active?"none":"1px solid rgba(255,255,255,0.4)",borderRadius:20,cursor:"pointer",boxShadow:active?"0 2px 10px rgba(0,0,0,0.15)":"none",transition:"all 0.2s"}}>
                {typeof l.flag==="string"?<span style={{fontSize:18,lineHeight:1}}>{l.flag}</span>:l.flag}
                <span style={{fontSize:12,fontWeight:800,color:active?"#FF6B9D":"white",letterSpacing:"0.5px"}}>{l.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div style={{maxWidth:420,margin:"0 auto",padding:"0 16px"}}>

        {/* DATE NAV */}
        <div style={{display:"flex",alignItems:"center",gap:8,margin:"20px 0 16px",background:"white",borderRadius:20,padding:"12px 16px",boxShadow:"0 4px 20px rgba(0,0,0,0.08)"}}>
          <button onClick={function(){shift(-1);}} style={navBtn}>{"<"}</button>
          <div style={{textAlign:"center",flex:1}}>
            <div style={{fontWeight:900,fontSize:15,color:"#1F2937"}}>{t.dies[dow]}, {date.getDate()} {t.mesos[date.getMonth()]} {date.getFullYear()}</div>
            {wi&&<div style={{fontSize:12,color:"#6B7280",marginTop:2}}>{t.week+" "+wi.week+" · "+(wi.type==="PE"?t.peLabel:t.thLabel)}</div>}
            {isToday
              ?<div style={{display:"inline-block",marginTop:4,background:"#FF6B9D",color:"white",borderRadius:10,padding:"2px 10px",fontSize:11,fontWeight:700}}>{t.today} ✓</div>
              :<button onClick={function(){setDate(new Date());}} style={{marginTop:6,background:"#FF6B9D",color:"white",border:"none",borderRadius:10,padding:"3px 10px",fontSize:11,cursor:"pointer",fontWeight:700}}>{t.today}</button>
            }
          </div>
          <button onClick={function(){shift(1);}} style={navBtn}>{">"}</button>
        </div>

        {!school&&(
          <div style={{textAlign:"center",padding:"40px 20px",background:"white",borderRadius:24,boxShadow:"0 4px 20px rgba(0,0,0,0.08)"}}>
            <div style={{fontSize:56}}>{(dow===0||dow===6)?"🏖️":"🎄"}</div>
            <h2 style={{color:"#374151",marginTop:12}}>{(dow===0||dow===6)?t.weekend:t.holiday}</h2>
            <p style={{color:"#9CA3AF",fontSize:14}}>{(dow===0||dow===6)?t.weekendMsg:t.holidayMsg}</p>
          </div>
        )}

        {school&&!wi&&(
          <div style={{textAlign:"center",padding:"40px 20px",background:"white",borderRadius:24,boxShadow:"0 4px 20px rgba(0,0,0,0.08)"}}>
            <div style={{fontSize:56}}>📅</div>
            <h2 style={{color:"#374151",marginTop:12}}>{t.noSched}</h2>
            <p style={{color:"#9CA3AF",fontSize:14}}>{t.noSchedMsg}</p>
          </div>
        )}

        {school&&wi&&(
          <div>
            <Card bg="#FFF3CD" border="#F59E0B" icon="🌅" title={t.esmorzar}>
              <Row text={tr(ESMORZAR[dow],lang)} bold/>
            </Card>

            {dinar?(
              <div>
                <Card bg="#D1FAE5" border="#10B981" icon="🥣" title={t.primer}>
                  <Row text={tr(dinar.p,lang)} bold/>
                </Card>
                <Card bg="#DBEAFE" border="#3B82F6" icon="🍽️" title={t.segon}>
                  <Row text={tr(dinar.s,lang)} bold/>
                </Card>
                <Card bg="#FEE2E2" border="#EF4444" icon="🥗" title={t.amanida+" + "+t.postre}>
                  <Row text={t.amanida} bold/>
                  <Row text={t.postre}/>
                </Card>
              </div>
            ):(
              <div style={{background:"white",borderRadius:20,padding:20,marginBottom:12,textAlign:"center",color:"#9CA3AF"}}>{t.noDinar}</div>
            )}

            <Card bg="#EDE9FE" border="#8B5CF6" icon="🌤️" title={t.berenarCole}>
              <Row text={tr(BERENAR_COLE[dow],lang)} bold/>
            </Card>

            <Divider label={t.atHome}/>

            {bcasa&&(
              <Card bg="#FEF3C7" border="#D97706" icon="🏠" title={t.berenarCasa}>
                {bcasa.items.filter(function(x){return x.length>0;}).map(function(x,i){return <Row key={i} text={x} bold={i===0}/>;}) }
                <div style={{marginTop:8,fontSize:12,color:"#92400E",background:"#FEF9C3",borderRadius:8,padding:"5px 10px"}}>{"💡 "+bcasa.tip}</div>
              </Card>
            )}

            {sopar&&(
              <div style={{background:"white",border:"2px solid #6366F1",borderRadius:20,padding:"14px 18px",marginBottom:12,boxShadow:"0 4px 16px rgba(99,102,241,0.1)"}}>
                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:12}}>
                  <div style={{display:"flex",alignItems:"center",gap:8}}>
                    <span style={{fontSize:22}}>🌙</span>
                    <span style={{fontWeight:800,fontSize:13,color:"#6366F1",textTransform:"uppercase"}}>{t.sopar}</span>
                  </div>
                  <span style={{fontSize:11,background:"#EEF2FF",color:"#6366F1",borderRadius:8,padding:"2px 8px",fontWeight:700}}>{sopar.kcal}</span>
                </div>
                {[
                  {icon:"🥦",label:t.veg, val:sopar.veg},
                  {icon:"🍗",label:t.prot,val:sopar.prot},
                  {icon:"🍞",label:t.hid, val:sopar.hid},
                  {icon:"🍓",label:t.post,val:sopar.post},
                ].map(function(row){return(
                  <div key={row.label} style={{display:"flex",alignItems:"flex-start",gap:10,padding:"7px 0",borderBottom:"1px solid #F3F4F6"}}>
                    <span style={{fontSize:18,marginTop:1}}>{row.icon}</span>
                    <div>
                      <div style={{fontSize:11,color:"#9CA3AF",fontWeight:600,textTransform:"uppercase"}}>{row.label}</div>
                      <div style={{fontSize:15,color:"#1F2937",fontWeight:700,lineHeight:1.3}}>{row.val}</div>
                    </div>
                  </div>
                );})}
                <div style={{marginTop:10,fontSize:12,color:"#6B7280"}}>{t.timing}</div>
              </div>
            )}

            {wi.type==="TH"&&(
              <div style={{marginTop:8,background:"#FFFBEB",border:"1px solid #FCD34D",borderRadius:16,padding:"10px 14px",fontSize:12,color:"#92400E"}}>{"⚠️ "+t.thWarn}</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

