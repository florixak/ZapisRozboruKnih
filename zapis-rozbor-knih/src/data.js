import { deformatName } from "./utils";

export const books = [
  {
    name: "Médeia",
    author: "Euripides",
  },
  {
    name: "Lakomec",
    author: "Moliere",
    year_of_publication: 1668,
    pages: 128,
    literary_genre: "Komedie",
    literary_form: "Próza",
    literary_species: "Drama",
    themes: ["Peníze", "Touha po penězích", "Láska", "Chamtivost"],
    space_time: ["Francie, Paříž, Dům Harpagona", "17. století (1670)"],
    composition: "Chronologická",
    narrator: "Nevyskytuje se",
    tropy: [
      "Personifikace (přikládání lidských vlastností neživým věcem a zvířatům)",
    ],
    figury: [],
    main_characters: [
      {
        name: "Harpagon",
        description:
          "Starý 60ti letý lichvář a vdovec, Jediné na co myslí jsou peníze a on sám. Chamtivý, Bezcitný, Protivný, Jméno odvozeno od latinského loupit",
      },
      {
        name: "Kleantes",
        description:
          "Syn Harpagona, Pravý opak Harpagona, Štědrý, Mladý, Skromný, Hodný, Miluje chudou dívku Marianu",
      },
      {
        name: "Mariana",
        description:
          "Chudá, Mladá, Krásná dívka, Miluje Kleanta (čistá láska), Harpagon se přesto o ní snaží",
      },
      {
        name: "Čipera (Kleantův sluha)",
        description:
          "Věrný, Pomáhá Kleantovi, Ukradne Harpagonovi truhlu s penězi",
      },
      {
        name: "Eliška",
        description: "Dcera Harpagona, Miluje Valéra",
      },
      {
        name: "Valér",
        description:
          "Sluha Harpagona, Miluje Elišku, Utajený syn šlechtice Anselma",
      },
      {
        name: "Anselm",
        description:
          "Bohatý šlechtic, Otec Valéra a Mariany, Má si vzít kvůli Harpagonovi Elišku proti její vůli",
      },
      {
        name: "Frosina",
        description: "Dohazovačka",
      },
    ],
    plot_summary:
      "Děj se odehrává ve francouzském hlavním městě Paříži převážně v Harpagonové domě.",
    literary_context:
      "Inspirace od Komedie o hrnci od Plauta. Dílo bylo poprvé uvedeno ve francouzském divadle Palais-Royal. Divadelní i filmové zpracování.",
    main_message:
      "Varování před penězi, jak deformují charakter, ničí vztahy a citové vazby. Zesměšňuje a kritizuje vyšší vrstvy společnosti.",
  },
  {
    name: "Máj",
    author: "Karel Hynek Mácha",
  },
  {
    name: "Kytice",
    author: "Karel Jaromír Erben",
  },
  {
    name: "Lucerna",
    author: "Alois Jirásek",
  },
  {
    name: "Obraz Doriana Graye",
    author: "Oscar Wilde",
  },
  {
    name: "Havran",
    author: "Edgar Allan Poe",
  },
  {
    name: "Jáma a kyvadlo a jiné povídky",
    author: "Edgar Allan Poe",
  },
  {
    name: "Král Lávra",
    author: "Karel Havlíček Borovský",
  },
  {
    name: "Kulička",
    author: "Guy de Maupassant",
  },
  {
    name: "Revizor",
    author: "Nikolaj Vasiljevič Gogol",
  },
  {
    name: "O myších a lidech",
    author: "John Steinbeck",
  },
  {
    name: "1984",
    author: "George Orwell",
  },
  {
    name: "Farma zvířat",
    author: "George Orwell",
  },
  {
    name: "Malý princ",
    author: "Antoine De Saint-Exupéry",
  },
  {
    name: "Edison",
    author: "Vítěslav Nezval",
  },
  {
    name: "Proměna",
    author: "Franz Kafka",
  },
  {
    name: "Krysař",
    author: "Viktor Dyk",
  },
  {
    name: "Bílá Nemoc",
    author: "Karel Čapek",
    year_of_publication: 1937,
    pages: 128,
    literary_genre: "Tragédie",
    literary_form: "Próza",
    literary_species:
      "Drama (protifašistické a protiválečné dílo o 3 jednáních)",
    themes: ["Epidemie", "Fašismus", "Válka", "Morální dilemata"],
    space_time: [
      "Neurčená země",
      "Neurčený čas, krátce po roce 23 (zřejmě 1923)",
    ],
    composition: "Chronologická",
    narrator: "Nevyskytuje se",
    main_characters: [
      {
        name: "Dr. Galén",
        description:
          "Přezdívka Doktor Dětina, mladý lékař, laskavý, pomáhá chudým, naivní (myslí si, že dokáže zastavit válku), statečný a neústupný (odporuje maršálovi i pod hrozbou vězení), jako jediný objeví lék proti bílé nemoci. Léčí ale jen chudé a lidi bez vlivu, aby tak přinutil mocné k nastolení míru.",
      },
      {
        name: "Maršál",
        description:
          "Velitel vojsk, diktátor, bezcitný, slepě vede svůj národ do války -> touží po moci a vládnutí. Naprostým opakem dr. Galéna. Nakonec také onemocní bílou nemocí.",
      },
      {
        name: "Baron Krüg",
        description:
          "Maršálův přítel, dodává mu zbraně -> majitel továrny na výrobu zbraní. Velmi podobné povahy jako maršál -> touží po úspěchu, moci, slávě.",
      },
      {
        name: "Dvorní rada Sigelius",
        description:
          "Ředitel nemocnice, touha po slávě a úspěchu, snaží se najít lék proti Bílé nemoci.",
      },
      {
        name: "Další postavy:",
        description: "Otec, Matka, Syn, Dcera",
      },
    ],
    plot_summary:
      "V jisté, blíže neurčené zemi, se rozmohla epidemie tzv. bílé nemoci. Jde pravděpodobně o jakousi formu malomocenství, která se projevuje bílými skvrnami na kůži. Šíří se dotykem a ze začátku pouze mezi chudými a starými lidmi. Zemi ovládá diktátor Maršál, který se připravuje na výbojnou válku proti menšímu sousednímu státu. V tom mu pomáhá vlastník zbrojovek baron Krüg. Mladému doktorovi Galénovi se mezitím podaří najít lék proti bílé nemoci, ale léčí jen chudé lidi, kteří nemají moc ani vliv. Těm vlivnějším Galén lék vydat odmítá. Když onemocní baron Krüg, zavolá Galéna, aby ho vyléčil. Ten mu dává podmínku - musí okamžitě zastavit zbrojení, jinak mu lék nebude vydán. Krüg žádá Maršála, aby uzavřel mír, ten však nehodlá se zbrojením přestat a Krüg ze zoufalství spáchá sebevraždu. Po jeho smrti začíná útok na sousední zemi. Avšak také Maršál na sobě zpozoruje bílou skvrnu. Maršálova dcera pozve Galéna, aby Maršála vyléčil, ten má ale stále stejnou podmínku - Maršál musí uzavřít mír. Teprve na naléhání své dcery a mladého Krüga, je ochoten uzavřít mír a splnit tak Galénovu podmínku pro poskytnutí léku. Dá zavolat Galéna, ale ten se před Maršálovým palácem střetne se skandujícím davem, a protože se snaží odporovat jejich provolávání hesla: 'Ať žije Maršál, ať žije válka!' je on i lék davem ušlapán. Dav v tu chvíli netuší, že tak vlastně zabili oslavovaného vůdce. Navíc na závěr vypuká válka. (Lék rozdupne postava syna)",
    literary_context:
      "Dílo bylo vydáno v roce 1937. Karel Čapek v něm předpověděl hrozbu fašismu v Německu a některé události 2. světové války. Zmínil se o zřizování táborů pro nakažené bílou nemocí (koncentrační tábory).",
    main_message:
      "Poukázání na nesmyslnost války a varování před hrozbou prosazujícího se fašizmu. Kontrast hodnot demokracie a diktatury.",
  },
  {
    name: "R.U.R. (Rossumovi Univerzální Roboti)",
    author: "Karel Čapek",
    year_of_publication: 1920,
    pages: 96,
    literary_genre: "Tragédie",
    literary_form: "Próza",
    literary_species: "Drama",
    themes: [
      "Umělý život",
      "Vzpoura",
      "Lidská přirozenost",
      "Budoucnost lidstva",
    ],
    space_time: [
      "Továrna Rossum’s Universal Robots",
      "Nespecifikovaná budoucnost",
    ],
    composition: "Chronologická",
    narrator: "Nevyskytuje se",
    main_characters: [
      {
        name: "Harry Domin",
        description:
          "Centrální ředitel R.U.R., věří, že Roboti osvobodí člověka od práce. K ostatním je arogantní a tvrdohlavý, má svou vlastní pravdu a zastává útočné postoje.",
      },
      {
        name: "Helena Gloryová",
        description:
          "Dcera prezidenta, původně přijíždí na ostrov jakožto členka Ligy humanity bojovat za práva Robotů. Manželka Harryho Domina. Ztělesnění ženskosti a citlivého chování.",
      },
      {
        name: "Dr. Gall",
        description:
          "Vedoucí fyziologického oddělení, experimentuje s emocemi robotů.",
      },
      {
        name: "Alquist",
        description:
          "Dělník, který jako jediný přežije vzpouru robotů díky své manuální práci. (pracuje rukama, odmítá se toho vzdát)",
      },
      {
        name: "Primus a Helena",
        description:
          "Dva Roboti, kteří znovuobjeví své city a zamilují se do sebe.",
      },
      {
        name: "Další postavy:",
        description: "Ing. Fabry, Radius",
      },
    ],
    plot_summary:
      "Příběh o robotech, které vytvoří vědec Rossum. Roboti nejsou mechanické stroje, ale jsou vytvořeni organicky. Ze začátku příběhu jsou odlidštěni, nemají emoce. V úvodní scéně dramatu přijíždí do továrny na roboty Helena, která chce roboty polidštit a naučit je nějakým citům. Původním účelem robotů mělo být osvobození člověka od nutnosti pracovat. Postupně zjišťujeme, že se roboti rozšířili a lidé je začali zneužívat k vedení válek. Později se další postavě (Dr. Gall) podaří robotům vštípit nějaké city, včetně nenávisti. Roboti se vzbouří a vyhlašují lidem válku. Roboti obklíčí továrnu a Helena zničí plány na výrobu robotů, tím vezme zbývajícím lidem možnost vyměnit plány za své životy, ale na druhou stranu znemožňuje robotům způsob se rozmnožovat, protože roboti sami nevědí, jak se vyrábějí. Nakonec všichni lidé zahynou až na jednu výjimku (Alquist). V závěrečné scéně zjistíme, že dva roboti se do sebe zamilovali (Helena a Primus) a Alquist (poslední žijící člověk, kterého si nechali roboti na živu, protože rád pracoval rukama a taky doufají, že se mu znovu povede objevit tajemství výroby robotů) pošle dva zamilované roboty, Primuse a Helenu, pryč a v závěru knihy je přirovnává k biblickému Adamovi a Evě a doufá, že jejich prostřednictvím se podaří obnovit život. ",
    literary_context:
      "Dílo bylo vydáno v roce 1920 a poprvé použilo slovo 'robot', které navrhl Čapkův bratr Josef. Hra varuje před negativními vlivy techniky na lidstvo a byla ovlivněna destrukcí první světové války.",
    main_message:
      "Varování před nekontrolovaným rozvojem techniky a jeho možnými důsledky pro lidstvo. Kontrast mezi lidskou přirozeností a umělým životem.",
  },
];

export const authors = [
  {
    id: 1,
    name: "Euripides",
    birth_year: "5. st. př. n. l.",
    art_direction: "Antická literatura",
    interest: [
      "Starořecký dramatik, filozof",
      "Působil v 5. st. před naším letopočtem, v Antice, v Klasickém období",
      "Na jeho dobu byl neobyčejně vzdělaný",
      "Za svého života byl kritizován, kvůli svým odlišným názorům a jeho tvorbě",
      "Kritizoval aktuální problémy v Athénách (kritika společnosti)",
      "Napsal okolo 90 her, z toho se do dnešní doby dochovalo pouze 18 tragédií a 1 satyrské drama",
      "Nemálo ovlidnil novodobé drama",
    ],
    main_chars: [
      "Psal převážně tragédie",
      "Nekladl důraz na bohy, ale na lidi (už jen tím se hodně lišil od ostatních autorů)",
      "Do hlavních rolí obsazoval ženy či dokonce otroky (což bylo, v té době neobvyklé)",
      "Zabývá se charaktery a psychologií postav",
      "Ve svých hrách se také zabýval kritikou společnosti",
    ],
    what_he_wrote: ["Drama", "Tragédie"],
    authors: ["Sofoklés", "Aischylos", "Herodotos", "Sokrates"],
    works: [
      {
        name: "Médea",
        url: "/books/" + deformatName("Médea"),
      },
      {
        name: "Elektra",
      },
      {
        name: "Šílený Herakles",
      },
      {
        name: "Helena",
      },
    ],
  },
  {
    id: 2,
    name: "Moliere",
    birth_year: "1622",
    art_direction: "Klasicismus",
    interest: [
      "Slavný francouzský dramatik a herec (hrál ve vlastních hrách), který působil v uměleckém směru klasicismu, za vlády Ludvíka XIV.",
      "Původně studoval práva a měl být notářem, přesto ho to táhlo k divadlu",
      "Pocházel z vyšší/vážené/uznávané měšťanské rodiny",
      "Zvolil Pseudonym, jeho pravé jméno je Jean-Baptiste Poquel (herectví bylo podřadné povolání)",
      "Založil vlastní divadlo, které se stalo velmi slavným a uznávaným",
      "Psal v nízkém žánru (komedie, frašky)",
      "Pokládán za zakladatele moderní francouzské komedie",
      "Napsal 33 divadelních her, převážně komedií",
      "Zemřel na tuberkulózu na scéně během hry (Zdravý nemocný) => odmítli ho pohřbít",
    ],
    main_chars: [
      "Kritizoval církev a šlechtu / vyšších vrstev. (zakazovali ho sledovat)",
      "Také kritizoval lidské vlastnosti (Lakomec) a snobství, doktory/lékaře.",
      "Pravidelná herecká účast ve svých dílech.",
      "Celá jeho tvorba ovlivněna měšťanským původem.",
    ],
    what_he_wrote: ["Nízký žánr", "Komedie", "Frašky"],
    authors: ["Jean Racine", "Piere Cornaille", "Jean de la Fontaine"],
    works: [
      {
        name: "Lakomec (próza)",
        url: "/books/" + deformatName("Lakomec"),
      },
      {
        name: "Tartuffe neboli Pokrytec (poezie)",
      },
      {
        name: "Misantrop (poezie)",
      },
      {
        name: "Zdravý nemocný (próza)",
      },
    ],
  },
  {
    id: 3,
    name: "Karel Hynek Mácha",
    birth_year: "1810",
    art_direction: "Romantismus",
    interest: [
      "Český básník, prozaik, dramatik a největší představil českého romantismu.",
      "Pocházel z chudé rodiny, otec byl tovaryš a matka z rodiny hudebníků.",
      "Studoval filozofii a práva.",
      "Psal do novin, dělal amatérské divadlo (dobrovolný herec).",
      "Své první básně v němčině",
      "Byl velice společenský člověk",
      "Zakladatel české moderní poezie (přinesl nové prvky, důraz na přírodu a emoce...)",
      "Jeho dílo bylo ve své době kritizováno, ocenili ho až později generace Májovců",
      "Inspiroval se zahraničními romantickými autory (například Byron)",
      "Jediný pravý český romantický autor (v Česku se romantismus moc nevyvinul)",
    ],
    main_chars: [
      "Hodně se projevuje romantismus:",
      "Emoce a city, fantazie, mysterióznost (tajemno), prostředí (příroda).",
      "Často obsahovala prvky osamocení, touhy po svobodě (individuality), lásky",
      "Romantický hrdina se bouří proti společnosti, silný člověk, většinou loupežník, zbojník, tulák, žebrák.",
      "Romantismus se projevuje i v popisu jeho přírody a krajiny.",
    ],
    what_he_wrote: ["Poezie", "Próza", "Drama"],
    authors: [
      "Karel Jaromír Erben (Kytice z pověstí národních)",
      "Josef Kajetán Tyl (Fidlovačka aneb Žádný hněv a žádná rvačka)",
      "George Gordon Byron (Childe Haroldova pouť)",
      "Victor Hugo (Ivan Hoe)",
      "Josef Jungmann (spisovatel, jazykovědec - Slovník česko německý)",
    ],
    works: [
      {
        name: "Máj",
        url: "/books/" + deformatName("Máj"),
      },
      {
        name: "Cikáni (próza - román)",
      },
      {
        name: "Obrazy ze života mého (autobiografické dílo)",
      },
      {
        name: "Kat (cyklus historických povídek nedokončen)",
      },
    ],
  },
  {
    id: 4,
    name: "Karel Jaromír Erben",
    birth_year: "1811-1870",
    art_direction: "Národní obrození",
    interest: [
      "Český básník, historik, sběratel ústní lidové slovesnoti, překladatel, novinář...",
      "Narozen v rodině kronikáře, vystudoval práva a filozofii",
      "B době studií se seznámil s Františkem Palackým, s nímž pak celý život spolupracoval.",
      "Je spojován s Romantismem, i když nerad",
      "3. fáze Národního obrození",
      "Jako sekretář Českého muzea sbíral po venkovských archivech materiál, lidové písně, pohádky...",
      "Archivář města Prahy",
      "Sběratel ústní lidové slovesnosti = písně, pohádky, pověsti, říkadla",
      "Ovlivněn bratovou smrtí po porodu -> častý motiv mrtvého dítětě v dílech",
    ],
    main_chars: [
      "Folklórní prvky (často čerpal inspiraci z lidových pověstí, pohádek, písní...)",
      "Baladická forma (často balady - báseň s pochmurným dějem a koncem)",
      "Pohádky ze starých mýtů",
      "Témata viny a následného trestu",
      "Osud a nevyhnutelnost",
      "Rodina a vztahy",
      "Témata lásky a smrti",
      "Příroda a nadpřirozeno (bytosti, jevy)",
      "Stupňuje napětí, vytváří působivé dramatické situace",
      "Často používá dialogy",
    ],
    what_he_wrote: ["Básně, Balady (poezii)", "Pohádky (prózu)", "Pověsti"],
    authors: [
      "Karel Hynek Mácha",
      "Josef Kajetán Tyl",
      "Božena Němcová",
      "George Gordon Byron",
      "Victor Hugo",
    ],
    works: [
      {
        name: "Kytice",
        url: "/books/" + deformatName("Kytice"),
      },
      {
        name: "Zlatovláska",
      },
      {
        name: "Tři zlaté vlasy děda Vševěda",
      },
      {
        name: "Dlouhý široký a bystrozraký",
      },
      {
        name: "Pták ohnivák",
      },
    ],
  },
  {
    id: 6,
    name: "Alois Jirásek",
    birth_year: "",
    art_direction: "Realismus",
    interest: [],
    main_chars: [],
    what_he_wrote: [],
    authors: [],
    works: [
      {
        name: "Lucerna",
        url: "/books/" + deformatName("Lucerna"),
      },
      {
        name: "",
      },
    ],
  },
  {
    id: 7,
    name: "Oscar Wilde",
    birth_year: "1854-1900",
    art_direction: "Dekadence",
    interest: [
      "Irský dramatik a spisovatel, působil v Literární moderně v uměleckém směru dekadence",
      "Nedbal na společenské pravidla/konvence, užíval si naplno",
      "Z bohaté rodiny, syn chirurga, studoval na Oxfordu",
      "Při studiích se seznámil se směrem - Dekadencí - která ho fascinovala svou absolutní svobodou a životem bez pravidel",
      "Byl homosexuál, což bylo v té době trestné (po odhalení jeho románku byl poslán na 2 roky do vězení a nucených prací)",
    ],
    main_chars: [
      "Hry charakteristické velmi bohatým jazykem (aforismy, slovní hříčky, ironie)",
      "Kritizoval tehdejší společnost v Anglii",
      "Snažil se šokovat",
    ],
    what_he_wrote: [
      "Drama (divadelní hry)",
      "Romány (próza)",
      "Pohádky (próza)",
    ],
    authors: [
      "Paul Verlaine (Francie)",
      "Charles Baudelaire (Francie)",
      "Jean Arthur Rimbaud (Francie)",
    ],
    works: [
      {
        name: "Obraz Doriana Graye",
        url: "/books/" + deformatName("Obraz Doriana Graye"),
      },
      {
        name: "Ideální manžel (drama)",
      },
      {
        name: "Ideální manžel (komedie)",
      },
    ],
  },
  {
    id: 8,
    name: "Edgar Allan Poe",
    birth_year: "1809-1849",
    art_direction: "Romantismus",
    interest: [
      "Americký básník, prozaik a významný představil amerického romantismu",
      "Zakladatel detektivního a hororového žánru",
      "Narozen v kočovnické rodině, po smrti matky adoptován rodiou Allanovými, platili mu vzdělání, studoval jazyky, poté šel na vojenskou akademii, odtud ho propustili a rodina ho potom už odmítla nadále podporovat a tak začal tvořit literaturu -> deprese řešené alkoholem a drogami",
      "V Americe se moc neproslavil, ale v Evropě ano -> francouzský autor Charles Baudelaire našel jeho díla a většinu přeložil",
      "Záhadná smrt, nalezen opily pod vlivem drog na ulici, pravděpodobně rvačka",
    ],
    main_chars: [
      "Umí vyvolat záhadnou, ponurou a zároveň poetickou atmosféru, která čtenáře vtáhne do děje, která hraničí s halucinacemi",
      "Ve čtenářích rád vyvolával pocit hrůzy a strachu",
    ],
    what_he_wrote: ["Básně (poezie)", "Povídky (próza)"],
    authors: [
      "Walter Scott",
      "George Gordon Byron",
      "Victor Hugo",
      "Karel Hynek Mácha",
    ],
    works: [
      {
        name: "Havran",
        url: "/books/" + deformatName("Havran"),
      },
      {
        name: "Jáma a kyvadlo a jiné povídky",
        url: "/books/" + deformatName("jáma-a%20kyvadlo%20a%20jiné%20povídky"),
      },
      {
        name: "Vražda v ulici Morgue (detektivka, povídka, vytvořil prvního detektiva Dupina)",
      },
    ],
  },
  {
    id: 9,
    name: "Karel Havlíček Borovský",
    birth_year: "1821-1856",
    art_direction: "Národní obrození",
    interest: [
      "Český básník, spisovatel, novinář, kritik, překladatel a vlastenec",
      "Narozen v rodině kupce, v obci Borová (dnes Havličkově Brodě) -> Borovský",
      "Vystudoval gymnázium a poté filozofii v Praze",
      "Jedna z klíčových osobností 3./4. etapy Národního obrození",
      "Nevyšlo mu učitelství -> začal tvořit literaturu",
      "Učitel u rodiny v Rusku -> nelíbila se mu společnost, kritizoval ji -> vyhozen, zpátky do Česka",
      "Redaktor Pražských novin",
      "Zakladatel moderní literární kritiky a tvůrce satirické poezie",
      "1848 - Založil vlastní Národní noviny (kvůli pronásledování poté zavřeny)",
      "Kvůli své kritice raukouské absolutistické vlády byl pronásledován policií a také následně převezen do tyrolského městečka Brixen pod pocilejní dohled",
      "35 let - umírá na tuberkulózu (jako jeho manželka před ním)",
    ],
    main_chars: ["Otevřeně kritizoval politické dění"],
    what_he_wrote: ["Satira", "Elegie (žalozpěv)", "Poezie"],
    authors: ["Božena Němcová", "Josef Kajetán Tyl", "Karel Jaromír Erben"],
    works: [
      {
        name: "Král Lávra",
        url: "/books/" + deformatName("Král Lávra"),
      },
      {
        name: "Tyrolské elegie",
      },
      {
        name: "Obrazy z Rus (kritika Ruska, zároveň i opak)",
      },
    ],
  },
  {
    id: 10,
    name: "Guy de Maupassant",
    birth_year: "1850-1983",
    art_direction: "Realismus",
    interest: [
      "Fracouzský spisovatel a novinář",
      "Tvorba oblivněna Realismem a Naturalismem",
      "Pocházel z vyšších vrstev, narozen na zámku v Normandii",
      "Vyloučen z církevního internátu, studium práv mu přerušila prusko-francouzská válka do níž dobrovolně vstoupil jako voják",
      "Po válce pracoval jako úředník",
      "Jeho přítel spisovatel Flaubert ho uvedl do literárního světa",
      "Napsal téměr 300 povídek a několik románů",
    ],
    main_chars: [
      "Dokázal mistrně popsat skutečnost",
      "Psal o: rodné Normandii, prusko-francouzské válce, ženách a jejich láskách, strachu, nemoci, šílenství, posedlosti",
    ],
    what_he_wrote: ["Povídky (Kulička)", "Romány (Miláček, Petr a Jan)"],
    authors: [
      "Gustav Flaubert - jeho přítel",
      "Nikol Valisjevič Gogol (Revizor)",
      "Émile Zola",
      "Jules Verne (Dvacet tisíc mil pod mořem)",
    ],
    works: [
      {
        name: "Kulička",
        url: "/books/" + deformatName("Kulička"),
      },
      {
        name: "Miláček",
      },
      {
        name: "Příběh jednoho života",
      },
      {
        name: "Petr a Jan",
      },
    ],
  },
  {
    id: 11,
    name: "Nikolaj Vasiljevič Gogol",
    birth_year: "",
    art_direction: "",
    interest: [],
    main_chars: [],
    what_he_wrote: [],
    authors: [],
    works: [
      {
        name: "",
        url: "/books/" + deformatName(""),
      },
      {
        name: "",
      },
    ],
  },
  {
    id: 12,
    name: "John Steinback",
    birth_year: "1902-1968 - 20. st.",
    art_direction: "Realismus",
    interest: [
      "Americký spisovatel",
      "Nositel Nobelovy ceny za literaturu",
      "Nositel Pulitzerovy ceny za literaturu",
      "Meziválečné období, americký realismus, sociálně kritická próza",
      "Sám v mládí pracoval na farmách, proto věděl o čem píše",
    ],
    main_chars: [
      "Doba často zasazena do hospodářské krize",
      "Často zobrazuje osudy a pocity chudáků, zemědělců, dělníků v době hospodářské krize",
      "Vystěhovatelectví",
      "Cesta na Západ",
      "Marné hledání obživy",
      "Novely typické pro popis vztahu člověka k půdě (majetku), ukazuje negativní postoj člověka k moderní civilizaci, popisuje dobu ekonomické krize a prostředí na okraji společnosti, odsuzuje násilí a vykořisťování druhých",
    ],
    what_he_wrote: [
      "Povídky (Údolí bez konce, Nebeské Pastviny)",
      "Romány (O myších a lidech, Hrozny hněvu)",
    ],
    authors: [
      "Franz Kafka (Proměna, Zámek)",
      "Ernest Hemingway",
      "Scott Fitzgerald",
    ],
    works: [
      {
        name: "O myších a lidech",
        url: "/books/" + deformatName("o-myších%20a%20lidech"),
      },
      {
        name: "Hrozny hvěvu",
      },
      {
        name: "Údolí bez konce",
      },
      {
        name: "Toulavý autobus",
      },
    ],
  },
  {
    id: 13,
    name: "George Orwell",
    birth_year: "",
    art_direction: "",
    interest: [""],
    main_chars: [""],
    what_he_wrote: ["", ""],
    authors: ["", "", ""],
    works: [
      {
        name: "1948",
        url: "/books/" + deformatName("1984"),
      },
      {
        name: "Farma zvířat",
        url: "/books/" + deformatName("Farma zvířat"),
      },
    ],
  },
  {
    id: 15,
    name: "Antoine De Saint-Exupéry",
    birth_year: "1900-1944",
    art_direction: "Meziválečná literatura",
    interest: [
      "Francouzský letec, prozaik, novinář/publicista, filozof, šlechtic",
      "Pocházel ze šlechtické rodiny => život na zámku, studoval ve Švýcarsku a v Paříži",
      "Věnoval se letectví (vyžádal si převelení ve službě armády), celoživotní záliba k letectví, velitel letiště, literatura jako koníček",
      "Vyznamenání rytíře čestné legie (nejvyšší francouzské státní vyznamenání)",
      "Ve 30. letech se věnoval reportážní práci",
      "Sestřelen německým letadlem = smrt",
    ],
    main_chars: [
      "Inspiroval se zkušenostmi pilota, i velitele letiště (v Malém princovi havaroval s letadlem)",
      "Jeho hrdinové vynikají houževnatostí a snaží se splnit svá poslání i za cenu svého života",
      "Opakovaně se objevuje motiv života v poušti (opět v Malém princi, havaroval na poušti)",
      "Humanismus - zdůrazňuje důležitost lidských vztahů",
      "Válečná tématika",
    ],
    what_he_wrote: [
      "Filozofická díla",
      "Pohádky (Malý princ - filozofická pohádka)",
      "Povídky",
      "Romány",
    ],
    authors: ["Anatole France", "Romain Rolland", "André Gide"],
    works: [
      {
        name: "Malý princ",
        url: "/books/" + deformatName("Malý princ"),
      },
      {
        name: "Letec (povídka)",
      },
      {
        name: "Noční let (román)",
      },
      {
        name: "Válečný pilot (román)",
      },
      {
        name: "Kurýr na jih (román)",
      },
    ],
  },
  {
    id: 16,
    name: "Vítěslav Nezval",
    birth_year: "1900-1958",
    art_direction: "Literární Moderna - Surrealismus",
    interest: [
      "Významný český básník, dramatik, přkladatel, zakladatel surrealistické skupiny",
      "Studoval práva v Brně a poté filozofii v Praze",
      "Vůdčí osobností spolku Děvetsil (avantgardní spolek sdružující umělce, často levicový, rozpadl se 1930)",
      "Zakladatel surrealistické skupiny (1934)",
      "Člen komunistické strany",
      "Přispíval do časopisů a novin (Lidové noviny...)",
      "Dramaturg Osvobozeného divadla a redaktor Masarykova naučného slovníku",
      "Založil nový umělecký směr - POETISMUS (hravý a veselý, zaměřuje se na obyčejné věci a všední den, bez interpunkce)",
    ],
    main_chars: [
      "Hravá a veselá povaha, radost ze života (poetismus)",
      "Téma lásky, atd...",
      "Surrealistické prvky (sny, podvědomí, iracionální obrazy)",
      "Politické názory, podpora socialismu",
      "Bohatá obraznost (vtáhnout do děje)",
    ],
    what_he_wrote: ["Básně", "Drama", "Sbírky"],
    authors: [
      "Jaroslav Seifert (básník, držitel Nobelovky)",
      "Karel Teige",
      "Vladislav Vančura",
    ],
    works: [
      {
        name: "Edison",
        url: "/books/" + deformatName("Edison"),
      },
      {
        name: "Podivuhodný kouzelník",
      },
      {
        name: "Pantomima",
      },
      {
        name: "Básně noci",
      },
    ],
  },
  {
    id: 17,
    name: "Franz Kafka",
    birth_year: "1883-1924",
    art_direction: "Literární Moderna",
    interest: [
      "Spisovate a nejvýznamnější představitel pražské německé literatury",
      "Židovský původ, psal německy, ale k češtině měl silnou vazbu",
      "Měl špatný vztah se svým přísným otcem, to hodně ovlivnilo jeho otvorbu, nejlepší vztah měl se svým strýcem, ke kterému vzhlížel jako ke svému otci, a se svou sestrou Ottlou (jeho vztahy v rodině se často promítají v jeho dílech)",
      "Ze svého vztahu k otci se vypsal ve svém díle Dopis otci, avšak jeho otec ho nikdy neviděl",
      "Vystudoval práva a při studiu se seznámil se Maxem Brodem, jeho nejlepším přítelem (Kafka ho po své smrti v závěti žádal, aby nevydával žádné z jeho nedokončených děl, avšak Brod ho naštěstí neuposlechl a všechny je vydal)",
    ],
    main_chars: [
      "Kafkův svět je fantaskní/neskutečný a absurdní svět bez logiky",
      "Děj se odehrává v ponurém nijak neurčeném a nepochopitelném světě",
      "Svět je často ovládán jakousi silou, proti které hlavní hrdina neúspěšně bojuje",
      "Hrdinové jsou:",
      "Průměrní lidé, kteří nejsou ničím zajímaví, naprosto běžní lidé (Vliv Kafkovo povolání úředníka, každý úředník je stejný)",
      "Kafkovi hrdninové také často nemají jméno nebo jsou označeni pouze iniciálami",
      "Jeho hrdinové nemají žádnou minulost, nic o nich nevíme",
      "Postavy se vždy snaží pochopit okolní svět, avšak marně, protože Kafkův svět je nelogický a nedává smysl",
      "Umírá na tuberkulózu v roce 1924",
    ],
    what_he_wrote: ["Povídky (Proměna)", "Romány (Proces)"],
    authors: [
      "Max Brod",
      "Karel Čapek",
      "Josef Čapek",
      "Vítěslav Nezval",
      "Vladislav Vančura",
    ],
    works: [
      {
        name: "Proměna",
        url: "/books/" + deformatName("Proměna"),
      },
      {
        name: "Proces",
      },
      {
        name: "Zámek",
      },
      {
        name: "Dopis otci (omluvný dopis pro jeho otce)",
      },
      {
        name: "Dopisy Mileně (jeho vysněná láska)",
      },
    ],
  },
  {
    id: 18,
    name: "Viktor Dyk",
    birth_year: "1877-1931",
    art_direction: "Generace Buřičů",
    interest: [
      "Významný český básník, prozaik, publicista, dramatik a nacionalistický (pravičácký) politik",
      "V mládí byl jedním z představitelů tzv. generace ANARCHISTICKÝCH BUŘIČŮ",
      "Vystudoval práva v Praze, ale nakonec se stal novinářem a spisovatelem",
      "Od roku 1907 se podílel na redigování časopisu Lumír",
      "Od roku 1918 byl redaktorem Národních listů, podílel se na založení Československé národní demokracie",
      "Za první světové války se podílel na protirakouském odboji a byl kvůli své literární činnosti vězněn ve Vídni",
    ],
    main_chars: [
      "Využíval satiru",
      "Jeho díla zpravidla obsahují jasnou pointu",
      "Využíval paradoxy",
      "Vliv anarchismu (Úsilí o neomezenou svobodu)",
      "Antimilitarismu (Odmítání války)",
      "Civilismu (Oslava moderní techniky a civilizace)",
      "Vitalismu (oslava života, přírody, radost)",
    ],
    what_he_wrote: [
      "Povídky",
      "Novely",
      "Básně (Poezie)",
      "Drama",
      "Satiru",
      "Poemy",
    ],
    authors: [
      "Karel Kostka Neumann",
      "Karel Toman",
      "Jaroslav Hašek",
      "Petr Bezruč",
    ],
    works: [
      {
        name: "Krysař (novela)",
        url: "/books/" + deformatName("Krysař"),
      },
      {
        name: "Satiry a sarkasmy (básnická sbírka)",
      },
      {
        name: "Devátá vlna (básnická sbírka)",
      },
      {
        name: "Milá sedmi loupežníků (poema)",
      },
      {
        name: "Zmoudření Dona Quijota (drama)",
      },
    ],
  },
  {
    id: 19,
    name: "Karel Čapek",
    birth_year: "1890-1938",
    art_direction: "Meziválečná literatura",
    interest: [
      "Slavný český spisovatel, básník, dramatik, překladatel a novinář",
      "Narozen v Malých Svatoňovicích",
      "Měl dva sourozence - bratra Josefa a sestru Helenu, bratr Josef mu často pomáhal s psaním, ze začátku dokonce psali spolu",
      "Studium gymnázia mu přerušili, musel ho dokončit v Brně, poté vystudoval filozofii v Praze",
      "Kvůli svému zdravotnímu stavu nemohl narukovat do války, ale byl velkým odpůrcem války",
      "Byl velkým pacifistou a humanistou",
      "Ovlivněn filozofickým směrem pragmatismem (praktický člověk, zda je něco prospěšné)",
      "Založil československý PEN klub (součást celosvětového sdružení spisovatelů, stal se jeho předsedou)",
      "Považován za zakladatele moderní utopické a vědecko-fantastické prózy",
      "Autor mnoha divadelních her, povídek, románů, fejetonů, divadelních her, knih pro děti, sloupky v novinách",
      "SLOUPEK - vytvořil publicistický útvar",
      "ROBOT - autor slova robot (často připisováno jeho bratrovi Josefu)",
      "Regigoval Národní listy, z nich poté odešel a až do konce svého života redigoval Lidové noviny, kde vydával své literární, dramatické a publicistické práce",
    ],
    main_chars: [
      "Uměl velice dobře využívat českého jazyka",
      "Varoval před fašismem, nacismem a válkou (pacifista)",
      "Ovlivněn pragmatismem (praktický člověk, zda je něco prospěšné)",
      "Byl fascinován technologiemi a pokrokem => R.U.R. (zároveň varoval před nimi)",
      "Humanismus, zájem o člověka, zobrazuje víru v lidskou důstojnost",
      "Humor a ironie, i přes vážná témata používal humor, aby se přiblížil čtenáři",
      "Filozofické otázky",
    ],
    what_he_wrote: [
      "Povídky",
      "Romány",
      "Drama",
      "Fejetony",
      "Sloupky",
      "Pohádky pro děti",
    ],
    authors: [
      "Josef Čapek",
      "Franz Kafka",
      "Vítěslav Nezval",
      "Jaroslav Hašek",
      "Karel Poláček",
    ],
    works: [
      {
        name: "Bílá Nemoc",
        url: "/books/" + deformatName("Bílá Nemoc"),
      },
      {
        name: "R.U.R. (Rossumovi Univerzální Roboti)",
        url:
          "/books/" + deformatName("r.u.r.-(rossumovi%20univerzální%20roboti)"),
      },
      {
        name: "Matka",
      },
      {
        name: "Válka s Mloky",
      },
      {
        name: "Krakatit",
      },
      {
        name: "Boží muka",
      },
      {
        name: "Povídky z jedné kapsy",
      },
    ],
  },
];

export const art_directions = [
  {
    name: "Antická literatura",
    time_period: "1200 př.n.l.-336 př.n.l.",
    characteristic_features: [
      "Literatura vznikající ve starověkém Řecku a Římě",
      "Dělila se na 4 období, (1. Předarchaické, 2. Archaické, 3. Klasické, 4. Helenistické)",
      "Začali se zde vymezovat jednotlivé žánry (epos, lyrika, drama)",
      "Čerpá témata z mytologie, náboženství, končí tragicky, směli hrát pouze 3 herci",
    ],
    architecture: [],
    genres: [
      "Epos - rozsáhlá epická báseň",
      "Lyrická poezie - ",
      "Ódy - slavnostní básně, oslavující osobnost, událost, vlastnost",
      "Elegie - žalozpěvy",
      "Bajky - zvířecí příběhy s morální pointou a poučením na konci",
    ],
    common_themes: [],
    main_representatives_array: [
      "Homér (Ilias a Odysseia)",
      "Ezop (bajky)",
      "Sapfo (milostná poezie)",
      "-----------------------",
      "Euripides (tragédie)",
      "Sofokles (tragédie)",
      "Aischylos (tragédie)",
      "Aristofanes (komedie)",
      "Herodotos (historik - 'Otec dějepisu')",
      "-----------------------",
      "Sokrates",
      "Platon",
    ],
    concepts: [],
  },
  {
    name: "Klasicismus",
    time_period: "17. století až do 18. století",
    characteristic_features: [
      "Umělecký směr, který vznikl v 17. století v Itálii trvající do 18. století, avšak se nejvíce rozmohl ve Francii",
      "Církev byla terčem kritiky",
      "Platili v něm velmi přísná pravidla pro literaturu:",
      "Literatura rozdělena na dva směry/žánry NÍZKÝ (komedie, frašky, bajky, satiry) a VYSOKÝ (eposy, ódy, hymny, tragédie)",
      "Trojjednota - pravidlo tří jednot (jedno místo, jedno dějství, jedna doba)",
      "Paralelně probíhá filozofický směr osvícenství",
      "Klasický = výborný, dokonalý",
      "Inspiroval se antikou, obdiv k antice",
      "Nastal po Baroku",
    ],
    architecture: [
      "Jednoduchost",
      "Trojúhelníkové štíty",
      "Antické sloupy",
      "Staví se: Banky, Úřady, Nemocnice, Divadla",
    ],
    music: [
      "Pohodová, Zábavná, Odpočinková",
      "Jednoduché melodie, snadno zapamatovatelné",
      "Beethoven, Mozart",
    ],
    genres: [
      "Epos",
      "Óda",
      "Hymna",
      "Tragédie",
      "Komedie",
      "Bajka",
      "Satira",
      "...",
    ],
    common_themes: [],
    main_representatives_object: {
      en: [],
      fr: [
        "Molière",
        "Jean de la Fontaince",
        "Jean Racine",
        "Pierre Corneille",
      ],
      usa: [],
      cz: [],
      it: ["Carlo Goldoni"],
    },
    concepts: [],
  },
  {
    name: "Národní obrození",
    time_period: "Konec 18. a první polovina 19. století",
    what_is_it: "Kulturní a politické hnutí.",
    characteristic_features: [
      "Snaha obnovit českou kulturu.",
      "Hlavním úkolem bylo pozvednutí českého jazyka.",
      "Češtinou mluvili pouze nižší a střední vrstvy, ve vyšších vrstvách se mluvilo německy a francouzsky",
    ],
    phases: {
      first: {
        name: "První fáze - defenzivní",
        description: [
          "Začátek 70. let 18. století",
          "Vědecký charakter",
          "Vydávání jazykových obran",
        ],
        main_representatives_object: [
          "Josef Dobrovský (Slovník německo-český)",
          "A. Jaroslav Puchmajer",
          "J. Š. V. Thám",
        ],
      },
      second: {
        name: "Druhá fáze - ofenzivní",
        description: [
          "Začátek 70. let 18. století",
          "Vědecký charakter",
          "Vydávání jazykových obran",
        ],
        main_representatives_object: [
          "Josef Dobrovský (Slovník německo-český)",
          "A. Jaroslav Puchmajer",
          "J. Š. V. Thám",
        ],
      },
      third: {
        name: "Třetí fáze - vrcholná",
        description: [
          "Začátek 70. let 18. století",
          "Vědecký charakter",
          "Vydávání jazykových obran",
        ],
        main_representatives_object: [
          "Josef Dobrovský (Slovník německo-český)",
          "A. Jaroslav Puchmajer",
          "J. Š. V. Thám",
        ],
      },
    },
  },
  {
    name: "Romantismus",
    time_period: "Konec 18. a první polovina 19. století",
    characteristic_features: [
      "City a emoce",
      "Individualita, tvůrčí svobodam, touha po svobodě",
      "Fantazie, Mysterióznost (mystika)",
      "Příroda",
      "Téma nešťastné lásky",
      "Autor se ztotožňuje s hrdinou",
      "Romatický hrdina = bouří se proti společnosti, trpí, vyděděnec (většinou tulák, kat, poutník, zloděj...)",
      "(v české literatuře se nikdy moc nerozvinul)",
    ],
    architecture: ["Stavba zámků", "Zahradní altány", "Umělé zříceniny"],
    music: [
      "Inspirace v lidových písních, legendách, historii",
      "Antonín Dvořák, Bedřich Smetana",
    ],
    genres: [
      "Lyrická poezie",
      "Básnická povídka (poema)",
      "Epos (moderní)",
      "Balada",
      "Pohádka",
      "Povídka",
      "Román (romantický, historický, gotický)",
      "Dramatická báseň",
    ],
    common_themes: ["měšťanská láska"],
    main_representatives_object: {
      en: [
        "Walter Scott (Ivanhoe, Weverly)",
        "George Gordon Byron (Childe Haroldova pouť, Don Juan)",
        "Percy Bysshe Shelley (Odpoutaný Prométheus)",
        "Jane Austenová (Rozum a cit, Pýcha a předsudek)",
      ],
      fr: [
        "Alexander Dumas (Tři mušketýři, Hrabě Monte Cristo)",
        "Victor Hugo (Chrám matky boží v Paříži, Ubožáci/Bídníci)",
      ],
      usa: ["Edgar Allan Poe (Havran, Černý kocour, Zrádné srdce)"],
      cz: ["Karel Hynek Mácha (Máj, Cikáni, Cyklus)"],
    },
    concepts: [
      "Poema = Básnická povídka",
      "Epos = Rozsáhlá epická báseň",
      "Balada = Lyricko-epická veršovaná báseň s ponurým dějem a koncem",
    ],
  },
  {
    name: "Meziválečná literatura",
    time_period: "",
    characteristic_features: [""],
    architecture: [],
    music: [],
    genres: [],
    common_themes: [],
    main_representatives_object: {
      en: [],
      fr: [],
      usa: [],
      cz: [],
    },
    concepts: [],
  },
  {
    name: "Anarchističtí buřiči",
    time_period: "",
    characteristic_features: [
      "https://vosaspseplzen.sharepoint.com/:p:/r/sites/Tda3.H-2023/_layouts/15/Doc2.aspx?action=edit&sourcedoc=%7B311621f2-2bcd-4f3b-943f-61daf9c13fc6%7D&wdOrigin=TEAMS-WEB.teamsSdk_ns.rwc&wdExp=TEAMS-TREATMENT&wdhostclicktime=1726166948808&web=1",
    ],
    architecture: [],
    music: [],
    genres: [],
    common_themes: [],
    main_representatives_object: {
      en: [],
      fr: [],
      usa: [],
      cz: [],
    },
    concepts: [],
  },
];

export const ikt_questions = [
  {
    id: 1,
    question:
      "Bezpečný pohyb v kyberprostoru, argumentační fauly a dezinformace",
    answer: [],
  },
  {
    id: 2,
    question: "Zabezpečení dat, dokumentů, zařízení a jiných aktivit na PC",
    answer: [],
  },
  {
    id: 3,
    question: "Zpracování dat v Excelu",
    answer: [],
  },
  {
    id: 4,
    question: "Multidimenzionální model a klasifikace dat",
    answer: [],
  },
  {
    id: 5,
    question: "Tvorba datový struktur pomocí jazyka DAX",
    answer: [],
  },
  {
    id: 6,
    question: "Vizualizační metody k řešení obchodních modelů",
    answer: [],
  },
  {
    id: 7,
    question: "Datové formáty (API, JSON, Databáze)",
    answer: [],
  },
  {
    id: 8,
    question: "SŘBD",
    answer: [],
  },
  {
    id: 9,
    question: "Datové modelování",
    answer: [],
  },
  {
    id: 10,
    question: "SQL – DDL",
    answer: [],
  },
  {
    id: 11,
    question: "SQL – DML",
    answer: [],
  },
  {
    id: 12,
    question: "SQL – JOIN",
    answer: [],
  },
  {
    id: 13,
    question:
      "Počítačová grafika - principy, SW, formáty, barevné modely, terminologie - rozlišení, hloubka barev",
    answer: [],
  },
  {
    id: 14,
    question:
      "Digitální fotografie, části a parametry dig. fotoaparátu, základní kompozice obrazu, autorská práva",
    answer: [],
  },
  {
    id: 15,
    question:
      "Audio – digitalizace, formáty a kodeky souborů, parametry audio souborů, SW, výpočty",
    answer: [],
  },
  {
    id: 16,
    question:
      "Video – kontejnerové formáty a kodeky souborů, parametry video souborů, SW, výpočty",
    answer: [],
  },
  {
    id: 17,
    question: "3D grafika – princip, kartézský systém, SW, 3D formáty souborů",
    answer: [],
  },
  {
    id: 18,
    question:
      "3D objekty – spline, vertex – edge – polygon, mesh – patch – NURBS",
    answer: [],
  },
  {
    id: 19,
    question:
      "VR – vývojové prostředí, získávání 3D objektů, skriptování, využití v praxi",
    answer: [],
  },
  {
    id: 20,
    question: "Zařízení a technologie IoT",
    answer: [],
  },
  {
    id: 21,
    question: "Základní pojmy z elektrotechniky",
    answer: [],
  },
  {
    id: 22,
    question: "Periferní zařízení pro IoT",
    answer: [],
  },
  {
    id: 23,
    question: "Zpracování a vizualizace dat v IoT",
    answer: [],
  },
  {
    id: 24,
    question: "Přenosové sítě, protokoly a sběrnice pro IoT",
    answer: [],
  },
  {
    id: 25,
    question: "Programování IoT zařízení",
    answer: [],
  },
];

export const vap_questions = [
  {
    id: 1,
    question: "",
    answer: "",
  },
];

export const genres = {
  epika: [
    {
      id: 3,
      question: "Epos",
      answer: [
        "Rozsáhlá veršovaná skladba, která chronologicky zachycuje vyprávěné události, jež jsou spojeny jednou či několika postavami",
        "(žánrové varianty: hrdinský, rytířský, duchovní epos).",
      ],
    },
    {
      id: 4,
      question: "Román",
      answer: [
        "Rozsáhlé epické vyprávění s mnoha postavami v delším časovém úseku.",
      ],
    },
    {
      id: 6,
      question: "Povídka",
      answer: [
        "příběh s relativně jednoduchým dějem a několika postavami, děj je méně rozvětvený než u románu.",
      ],
    },
    {
      id: 7,
      question: "Novela",
      answer: [
        "Prozaický útvar, středního nebo kratšího rozsahu",
        "Zakladatel Giovanni Boccaccio",
      ],
    },
    {
      id: 9,
      question: "Pohádka",
      answer: [
        "Příběh s nadpřirozenými prvky, souboj dobra a zla, morální poučení, končí šťastně",
      ],
    },
    {
      id: 5,
      question: "Legenda",
      answer: [""],
    },
    {
      id: 8,
      question: "Romaneto",
      answer: [
        "žánrová varianta novely, příběh s fantastickou a nevysvětlitelnou záhadou, která je postupně rozuzlována.",
        "Zakladatelem J. Arbes.",
      ],
    },
    {
      id: 10,
      question: "Pověst",
      answer: ["", ""],
    },
    {
      id: 11,
      question: "Báje",
      answer: [
        "příběhy, v nichž lidé ztvárnili své představy o vzniku světa, o přírodních jevech a jejich příčinách.",
      ],
    },
    {
      id: 12,
      question: "Bajka",
      answer: [
        "Alegorický příběh, v němž vystupují zvířata nebo jiné neživé předměty, má většinou poučení.",
      ],
    },
  ],
  lyrika: [
    {
      id: 1,
      question: "Píseň",
      answer: ["Skladba určená ke zpěvu"],
    },
    {
      id: 2,
      question: "Óda",
      answer: ["Oslavná báseň, oslavuje hrdiny, události, vlastnosti"],
    },
    {
      id: 4,
      question: "Elegie",
      answer: ["Žalozpěv, báseň smutného charakteru"],
    },
    {
      id: 5,
      question: "Epitaf",
      answer: ["Náhrobní nápis"],
    },
    {
      id: 6,
      question: "Epigram",
      answer: ["Krátká satirická báseň vyjadřujíci myšlenku"],
    },
    {
      id: 7,
      question: "Pásmo",
      answer: [""],
    },
    {
      id: 3,
      question: "Hymnus",
      answer: ["Chvalozpěv"],
    },
    {
      id: 8,
      question: "Sonet",
      answer: [""],
    },
  ],
};

export const tropy = [
  {
    id: 1,
    name: "Metafora",
    description:
      "Přenesení významu na základě vnější podobnosti (př. zuby pily, žloutkové věnečky)",
  },
  {
    id: 2,
    name: "Metonymie",
    description:
      "Přenesení významu na základě vnitřní, věcné podobnosti (př. Vypil dvě sklenice., Četl Čapka., Objednal si plzeň.)",
  },
  {
    id: 3,
    name: "Personifikace",
    description:
      "Přenesení lidských vlastností na neživé předměty, rostliny, zvířata (př. Slunce se usmívá., Vítr si hrál s houpačkou.)",
  },
  {
    id: 4,
    name: "Přirovnání",
    description:
      "Porovnání dvou jevů na základě společné vlastnoti (př. Byl bílý jako sníh., Byl rychlý jako blesk.)",
  },
  {
    id: 5,
    name: "Oxymorón",
    description:
      "Protimluv, slova protichůdného významu (př. tichý křik, živá mrtvola, jasná tma)",
  },
  {
    id: 6,
    name: "Hyperbola",
    description:
      "Nadsázka (př. Mám hlad jako vlk., Byl to nejlepší den mého života., Trvalo to nekonečno let.)",
  },
  {
    id: 7,
    name: "Symbol",
    description: "Zastupuje obecný pojem (př. růže - láska, kříž - křesťanství",
  },
];

export const figury = [
  {
    id: 0,
    name: "Založero na opakování slov",
    description: "",
  },
  {
    id: 1,
    name: "Aliterace",
    description: "Opakování slov začínajících stejnou hláskou",
  },
  {
    id: 2,
    name: "Anafora",
    description: "Opakování stejného slova na začátcích veršů",
  },
  {
    id: 3,
    name: "Epifora",
    description: "Opakování stejného slova na koncích veršů",
  },
  {
    id: 4,
    name: "Epizeuxis",
    description: "Opakování stejného slova za sebou",
  },
  {
    id: 5,
    name: "Gradace",
    description: "Stupňování (př. Jdu, běžím, letím. ",
  },
];
