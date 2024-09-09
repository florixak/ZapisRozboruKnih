import { deformatName } from "./utils";

export const books = [
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
    name: "Médea",
    author: "Euripides",
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
    author: "John Steinback",
  },
  {
    name: "Pes baskervillský",
    author: "Arthur Conan Doyle",
  },
  {
    name: "451 stupňů Fahrenheita",
    author: "Raymond Douglas Bradbury",
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
    name: "Moliere",
    birth_year: "1622",
    art_direction: "Klasicismus",
    interest: [
      "Slavný francouzský dramatik, herec (hrál ve vlastních hrách)",
      "Pseudonym - Jean-Baptiste Poquel (herectví nebylo moc uznáváno)",
      "Psal v nízkém žánru (komedie, frašky)",
      "33 divadelních her",
      "Založil vlastní divadlo",
      "Tvořil za vlády Ludvíka XIV., byl pozván na dvůr",
      "Pokládán za zakladatele moderní francouzské komedie",
      "Zemřel na tuberkulózu na scéně během hry (Zdravý nemocný) => odmítli ho pohřbít",
    ],
    main_chars: [
      "Kritizoval církev a šlechtu / vyšších vrstev.",
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
    id: 2,
    name: "Euripides",
    birth_year: "5. st. př. n. l.",
    art_direction: "Antická literatura",
    interest: [
      "Starořecký dramatik, básník, filozof",
      "Působil v 5. st. před naším letopočtem",
      "Velmi vzdělaný",
      "Za svého života byl kritizován",
    ],
    main_chars: [
      "Kritizoval aktuální problémy v Athénách",
      "Témata her byly politika, kultura a další",
    ],
    what_he_wrote: ["Drama", "Tragédie"],
    authors: ["Sofoklés", "Aischylos", "Sokratés"],
    works: [
      {
        name: "Médea",
        url: "/books/" + deformatName("Médea"),
      },
      {
        name: "Šílený Herakles",
      },
      {
        name: "Elektra",
      },
      {
        name: "Helena",
      },
    ],
  },
  {
    id: 3,
    name: "Karel Hynek Mácha",
    birth_year: "1810",
    art_direction: "Romantismus",
    interest: [
      "Český básník, prozaik, herec, dramatik a největší představil českého romantismu",
      "Z chudé rodiny, vystudoval filozofii a práva",
      "Psal do novin, dělal amatérské divadlo (dobrovolný herec).",
      "Zakladatel české moderní poezie (přinesl nové prvky, důraz na přírodu a emoce...)",
      "První básně v němčině, později v češtině",
      "Jeho dílo bylo ve své době kritizováno",
      "Inspiroval se zahraničními romantickými autory (Byron)",
      "Studoval na gymnáziu, později filozofii a práva.",
      "Jediný pravý český romantický autor (v Česku se romantismus moc nevyvinul)",
    ],
    main_chars: [
      "Hodně se projevuje romantismus:",
      "Emoce a city, fantazie, mysterióznost (tajemno), prostředí (příroda).",
      "Často obsahovala prvky osamocení, touhy po svobodě (individuality), lásky",
      "Romantický hrdina se bouří proti společnosti, silný člověk, většinou loupežník, zbojník, tulák, žebrák.",
      "Romantismus se projevuje i v popisu jeho přírody a krajiny.",
    ],
    what_he_wrote: ["Próza", "Drama", "Poezie"],
    authors: [
      "Josef Jungmann (spisovatel, jazykovědec - Slovník česko německý)",
      "Karel Jaromír Erben (Kytice z pověstí národních)",
      "Josef Kajetán Tyl (Fidlovačka aneb Žádný hněv a žádná rvačka)",
      "George Gordon Byron",
      "Victor Hugo",
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
        name: "Obrazy ze života mého",
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
      "Symbolismus",
      "Témata trestu a viny",
      "Osud a nevyhnutelnost",
      "Rodina a vztahy",
      "Příroda a nadpřirozeno",
    ],
    what_he_wrote: ["Básně, Balady (poezii)", "Pohádky (prózu)", "Pověsti"],
    authors: [
      "Josef Kajetán Tyl",
      "Karel Hynek Mácha",
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
      "Irský dramatik a spisovatel",
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
    birth_year: "",
    art_direction: "Realismus",
    interest: [
      "Americký spisovatel",
      "Nositel Nobelovy ceny za literaturu",
      "Nositel Pulitzerovy ceny za literaturu",
      "Meziválečné období, americký realismus, sociálně kritická próza",
    ],
    main_chars: [
      "Doba často zasazena do hospodářské krize",
      "Zobrazuje osudy kalifornských zemědělců v době hospodářské krize",
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
    name: "Arthur Conan Doyle",
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
    id: 14,
    name: "Raymond Douglas Bradbury",
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
    id: 15,
    name: "Antoine De Saint-Exupéry",
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
    id: 16,
    name: "Vítěslav Nezval",
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
    id: 17,
    name: "Franz Kafka",
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
    id: 18,
    name: "Viktor Dyk",
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
    id: 19,
    name: "Karel Čapek",
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
];

export const art_directions = [
  {
    name: "Antická literatura",
    time_period: "",
  },
  {
    name: "Renesance",
  },
  {
    name: "Klasicismus",
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
        main_representatives: [
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
        main_representatives: [
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
        main_representatives: [
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
    main_representatives: {
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
];
