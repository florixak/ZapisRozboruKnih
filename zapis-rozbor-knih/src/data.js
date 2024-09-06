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
    birth_year: 1622,
    art_direction: "Klasicismus",
    interest: [
      "Slavný francouzský dramatik, herec (hrál ve vlastních hrách)",
      "33 divadelních her",
      "Psal v nízkém žánru (komedie)",
      "Pokládán za Zakladatele moderní francouzské komedie",
      "Pseudonym - Jean-Baptiste Poquel (herectví nebylo moc uznáváno)",
      "Cestoval a později si založil vlastní divadlo",
      "Tvořil za vlády Ludvíka XIV., byl pozván na dvůr",
      "Zemřel na tuberkulózu na scéně během hry (Zdravý nemocný) => odmítli ho pohřbít",
    ],
    main_chars: [
      "Kritizoval církev a šlechty / vyšších vrstev.",
      "Také kritizoval lidské vlastnosti (Lakomec) a snobství, doktory/lékaře.",
      "Pravidelná herecká účast ve svých dílech.",
      "Celá jeho tvorba ovlivněna měšťanským původem.",
    ],
    what_he_wrote: ["Nízký žánr (drama)", "Komedie", "Frašky"],
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
    birth_year: 1810,
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
    birth_year: 1810,
    art_direction: "Romantismus",
    interest: [
      "Český básník, prozaik, herec, dramatik a největší představil českého romantismu",
      "Psal do novin, dělal amatérské divadlo.",
      "Zakladatel české moderní poezie.",
      "Studoval na gymnáziu, později filozofii a práva.",
      "Jediným pravým českým romantickým hrdinou.",
    ],
    main_chars: [
      "Jeho díla byla ovlivněna jeho životem a láskou k Julii (Máj).",
      "Kladl důraz na cit, individualitu, tajemství a prožitky.",
      "Romantický hrdina se bouří proti společnosti, silný člověk, většinou loupežník, zbojník, tulák, žebrák.",
      "Romantismus se projevuje i v popisu jeho přírody a krajiny.",
    ],
    what_he_wrote: ["Próza", "Drama", "Poezie"],
    authors: [
      "Josef Jungmann (spisovatel, jazykovědec - Slovník česko německý)",
      "Karel Jaromír Erben (Kytice)",
      "Josef Kajetán Tyl (Fidlovačka aneb Žádný hněv a žádná rvačka)",
    ],
    works: [
      {
        name: "Máj",
        url: "/books/" + deformatName("Máj"),
      },
      {
        name: "Cikáni",
      },
      {
        name: "Obrazy ze života mého",
      },
    ],
  },
  {
    id: 4,
    name: "Karel Jaromír Erben",
    birth_year: 1810,
  },
  {
    id: 6,
    name: "Alois Jirásek",
    birth_year: 1810,
  },
  {
    id: 7,
    name: "Oscar Wilde",
    birth_year: 1810,
  },
  {
    id: 8,
    name: "Edgar Allan Poe",
    birth_year: 1810,
  },
  {
    id: 9,
    name: "Karel Havlíček Borovský",
    birth_year: 1810,
  },
  {
    id: 10,
    name: "Guy de Maupassant",
    birth_year: 1810,
  },
  {
    id: 11,
    name: "Nikolaj Vasiljevič Gogol",
    birth_year: 1810,
  },
  {
    id: 12,
    name: "John Steinback",
    birth_year: 1810,
  },
  {
    id: 13,
    name: "Arthur Conan Doyle",
    birth_year: 1810,
  },
  {
    id: 14,
    name: "Raymond Douglas Bradbury",
    birth_year: 1810,
  },
  {
    id: 15,
    name: "Antoine De Saint-Exupéry",
    birth_year: 1810,
  },
  {
    id: 16,
    name: "Vítěslav Nezval",
    birth_year: 1810,
  },
  {
    id: 17,
    name: "Franz Kafka",
    birth_year: 1810,
  },
  {
    id: 18,
    name: "Viktor Dyk",
    birth_year: 1810,
  },
  {
    id: 19,
    name: "Karel Čapek",
    birth_year: 1890,
  },
];

export const art_directions = [
  {
    id: 1,
    name: "Antická literatura",
    time_period: "",
  },
  {
    id: 2,
    name: "Renesance",
  },
  {
    id: 3,
    name: "Klasicismus",
  },
  {
    id: 4,
    name: "Národní obrození",
    time_period: "Konec 18. a první polovina 19. století",
    what_is_it: "Etapa a proces formování novodobého českého národa.",
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
    id: 4,
    name: "Romantismus",
    time_period: "Konec 18. a první polovina 19. století",
    characteristic_features: [
      "City a emoce",
      "Svoboda",
      "Fantazie",
      "Mysterióznost",
      "Příroda",
      "Individualita, tvůrčí svoboda",
      "Romatický hrdina = bouří se proti společnosti, trpí, vyděděnec (většinou tulák, kat, poutník, zloděj...)",
    ],
    main_chars: [""],
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
