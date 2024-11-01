import { deformatName } from "./utils";

export const books = [
  {
    name: "Médeia",
    author: "Euripidés",
    year_of_publication: "5. st. př. n. l.",
    pages: "",
    literary_genre: "Tragédie",
    literary_form: "Próza",
    literary_druh: "Drama",
    summary:
      "Zabití vlastních dětí pro pomstu. Kritizuje postavení žen ve společnosti.",
    themes: [""],
    space_time: [
      "město Korint, pravděpodobně Řecko",
      "Antika (5. století př. n. l.)",
    ],
    composition:
      "5 dějství (podle pravidel antického dramatu: expozice, kolize, peripetie, katastrofa, rozuzlení), chronologická",
    narrator: "Nevyskytuje se",
    dictionary: {
      language: ["Archaismy, Inverze, Řečnické otázky"],
      tropy: ["Metonymie, Přirovnání, Synekdocha"],
      figury: [""],
    },
    main_characters: [
      {
        name: "Médeia",
        description:
          "Hlavní postava, žena cizího původu, zrazená manželka, krutá, nelítostná, zabije vlastní děti kvůli pomstě",
      },
      {
        name: "Iáson",
        description: "Manžel Médeie, podvedl ji, oženil se s dcerou Kreóna",
      },
      {
        name: "Kreón",
        description: "Král Korintu, otec Glauky, nařídil vyhnání Médeie",
      },
      {
        name: "Děti",
        description: "2 synové Médeie a Iásona, oběti pomsty",
      },
      {
        name: "Glauka",
        description: "Dcera Kreóna, nová manželka Iásona",
      },
      {
        name: "Aigeus",
        description: "Král Athén, nabídne Médeii útočiště po jejím činu",
      },
    ],
    plot_summary: "",
    literary_context: "",
    main_message: "",
  },
  {
    name: "Lakomec",
    author: "Moliere",
    year_of_publication: 1668,
    pages: 128,
    literary_genre: "Komedie",
    literary_form: "Próza",
    literary_druh: "Drama",
    summary:
      "Varování před penězi, jak deformují lidský charakter, ničí vztahy a vazby mezi lidmi",
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
    year_of_publication: "1836 (závěr tvorby, romantismus)",
    literary_genre: "báseň, básnická povídka",
    literary_form: "poezie",
    literary_druh: "lyricko-epická skladba",
    rhyme: "jamb, obkročný rým ABBA, střídavý ABAB, sdružený AABB",
    themes: [
      "láska",
      "příroda",
      "smrt",
      "tragičnost",
      "vina",
      "trest",
      "pomstychtivost",
    ],
    space_time: [
      "Příroda nedaleko hradu Bezděz a jezera v Doksech, střední Čechy",
      "Čas není určen",
    ],
    composition: "4x zpěvy, 2x intermezzo",
    dictionary: {
      language: ["Zastaralý jazyk, Knižní/Básnické výrazy"],
      tropy: [
        "Personifikace, Metafory, Básnické přívlastky, Přirovnání, Oxymoron, Symboly (poutník - svoboda, vězeň Vilém - uvěznění)",
      ],
      figury: [
        "Apostrofa",
        "Epanastrofa (opakování slov na konci a na začátku verše)",
      ],
    },
    narrator:
      "er forma (vnější pozorovatel děje) a v závěru ich forma (poutník Hynek)",
    main_characters: [
      {
        name: "Vilém",
        description:
          "typický romantický hrdina, vůdce loupežníků, vnitřně rozervaný, rozpolcený, nešťastný, pomstychtivý, pochybovačný a hluboce zamiovaný do Jarmily",
      },
      {
        name: "Jarmila",
        description:
          "osamělá, nešťastná, krásná, komplikovaná, svedena Vilémovým otcem, spáchá sebevraždu",
      },
      {
        name: "poutník Hynek",
        description:
          "připomíná autora, poutník v závěru, přemýšlivý, volný, svobodný, pochybovačný",
      },
      { name: "Otec Viléma", description: "utajený Vilémův otec" },
    ],
    plot_summary:
      "1. Zpěv: Jarmila čeká na Viléma u jezera, od převozníka se dozvídá, že má být popraven za vraždu, zdrcená Jarmila se poté zabije skokem do jezera. 2. Zpěv: Vilém ve vězení s Dozorcem, vzpomíná na svou minulost, jak byl vyhozen z domu, přidal se k loupežníkům, zamiloval se do Jarmily, zabil svůdníka Jarmily (svého otce, to se dozvěděl až poté), odmítá svou vinu, cítí se být obětí. 1. Intermezzo: Popisuje duchy, které čekají na popravišti na svého nového mrtvého kolegu Viléma. 3. Zpěv: Vilémova poprava spolu v kontrastu s krásnou Májovou přírodou. 2. Intermezzo: Žalozpěv loupežníků nad ztrátou svého vůdce. 4. Zpěv: Po 7 letech na místo popravy přichází poutník Hynek, připodobňující autora, dozvídá se co se zde stalo a lituje Viléma, Jarmilu i sebe - svůj osud (Hynku! Viléme! Jarmilo!)",
    main_message:
      "V díle autor řeší složité otázky života, vyjadřuje obava ze smrti",
  },
  {
    name: "Kytice",
    author: "Karel Jaromír Erben",
    year_of_publication: "1853 (český romantismus)",
    literary_genre: "balada",
    literary_form: "poezie",
    literary_druh: "lyriko-epika",
    rhyme:
      "střídavý - ABAB, sdružený - AABB, přerývaný - ABCB, obkročný - ABBA",
    themes: ["trest", "vina", "láska", "smrt"],
    space_time: ["Čas není určen,", "Prostor se liší podle balady"],
    composition:
      "13 balad, chronologické, 1. podobná 13., 2. podobná 12., atd...",
    dictionary: {
      language: [
        "Spisovná zastaralá čeština, archaismy, zdrobněliny, citoslovce",
      ],
      tropy: ["Personifikace"],
      figury: ["Anafora"],
    },
    narrator: "er forma (vnější pozorovatel děje)",
    main_characters: [
      {
        name: "Většinou bezejmenné postavy (otec, matka, dítě...)",
        description: "",
      },
    ],
    plot_summary:
      "1. Kytice; 2. Poklad - matka, dítě a zlato v jeskyni; 3. Svatební košile - dívka, umrlec; 4. Polednice - matka, synek, polednice, otec; 5. Zlatý kolovrat - matka, dcera, dora, král, kluk, starý dědeček; 6. Štědrý večer - Hana s Marií nad jezerem chtějí znát svůj osud; 7. Lilie - dívka se převtělí do kytky lilie, v noci se mění zpět, pánova matka zabije ji i jejich dítě; 8. Holoubek - žena smutní nad hrobem svého milého, kterého otrávila, jiný ji svede, nakonec se sama utopí; 9. Záhořovo lože - ; 10. Vodník; 11. Vrba - dívka se převtěluje v noci do vrby, muž pokácí tu vrbu, umírá i manželka; 12. Dceřina kletba - nechtěné dítě, dcera proklíná za to matku, že ji nechala až moc volna; 13. Věštkyně - autor píše o budoucnosti národa, spíše lyrika",
    main_message: "vina a trest, vztah matky a dcery",
  },
  {
    name: "Lucerna",
    author: "Alois Jirásek",
    year_of_publication: "1905",
    literary_genre: "Dramatická báchorka",
    literary_form: "Próza",
    literary_druh: "Drama",
    rhyme: "-",
    summary: "Touha po svobodě, síla a důstojnost lidu, boj proti útlaku",
    themes: ["lucerna", "lípa", "les", "suplika"],
    space_time: ["český venkov, mlýn, zámek", "2. polovina 19. století"],
    composition: "4 dějství, chronologická",
    dictionary: {
      language: [
        "spisovný jazyk, hovorové výrazy, archaismy, přechodníky (ukazujíc, odcházeje)",
      ],
      tropy: [
        "inverze (pořadí slov ve větě je obrácené), hyperbola (nadsázka), metafora",
      ],
      figury: [""],
    },
    narrator: "Nevyskytuje se",
    main_characters: [
      {
        name: "Mlynář Libor",
        description:
          "udatný, nebojácný, bojuje za svobodu a svoje práva, miluje Haničku",
      },
      {
        name: "Hanička",
        description: "milé děvče, sirotek, miluje mlynáře Libora",
      },
      {
        name: "Kněžna",
        description: "milá, vlídná, ohleduplná",
      },
      {
        name: "Dvořan",
        description: "ješitný, nadřazený, kněžnina pravá ruka",
      },
      {
        name: "Vrchní",
        description: "velmi podobný dvořanu, má strach a respekt z kněžny",
      },
      {
        name: "vodníci Michal a Ivan",
        description:
          "Michal - starší, miluje haničku, Ivan - mladší, chce klid",
      },
      {
        name: "Zajíček, Klásek a paní Klásková, Sejtko, Zima",
        description: "",
      },
      {
        name: "Babička",
        description: "milá a moudrá",
      },
      {
        name: "Braha",
        description:
          "podobný mlynáři Liborovi, bydlí spolu s Haničkou, Liborem a babičkou ve mlýně",
      },
    ],
    plot_summary: "",
    main_message: "",
  },
  {
    name: "Obraz Doriana Graye",
    author: "Oscar Wilde",
    year_of_publication:
      "1890 (pozdní období autorovy tvorby, dekadence - pesimistické nálady, bohemistický život, pocit prázdnoty a beznaděje)",
    literary_genre: "román (epický žánr delšího rozsahu a komplikovanější děj)",
    literary_form: "próza",
    literary_druh: "epika",
    rhyme: "",
    summary:
      "Varování před morálním úpadkem, povrchností, posedlostí krásou, bezohledností a dokonalostí",
    themes: ["mládí", "stáří", "krása", "povrchnost", "hřích"],
    space_time: ["Anglie", "během 19. století"],
    composition: "předmluva a 20 kapitol, chronologicky",
    dictionary: {
      language: [
        "Spisovný, až noblesní jazyk, knižní výrazy, hovorový jazyk, zastaralé výrazy",
      ],
      tropy: ["Personifikace"],
      figury: ["Anafora", "Epizeuxis (opakování slov po sobě)"],
    },
    narrator: "er forma",
    main_characters: [
      {
        name: "Dorian Graye",
        description:
          "Mladý pohledný šlechtic, nevinný --> povrchní, zlý, egoistický, nevyrovnaný",
      },
      { name: "Lord Henry Wotton", description: "Povrchní, sexistický" },
      {
        name: "Basil Hallward",
        description: "Malíř okouzlený Dorianem, prakticky zamilovaný, naivní",
      },
      {
        name: "Sibyla Vaneová",
        description:
          "Mladá, talentovaná herečka, co se změní poté co pozná Doriana",
      },
      {
        name: "James Vane",
        description: "Neotesaný bratr, má starost o svou sestru",
      },
    ],
    plot_summary:
      "Dorian Gray vyřkne přání, aby obraz co namaloval Basil Hallward stárl místo něj a přání se mu splní. Uplyne několik let a obraz stárne a odráží se na něj všechny Dorianovy špatnosti. Jednou to Dorian nevydrží obraz zničí a tím zabije i sám sebe, nachází ho starého v pokoji mrtvého s dýkou v srdci a na obraze je mladík.",
    main_message: "Jistá inspirace upsání se ďáblu, Faust",
  },
  {
    name: "Havran",
    author: "Edar Allan Poe",
    year_of_publication: "1845 (závěr jeho tvorby), romantismus",
    literary_genre: "balada (báseň s ponurým dějem a koncem)",
    literary_form: "poezie",
    literary_druh: "lyricko-epika",
    rhyme: "8stopý trochej",
    summary: "Muž truchlící nad smrtí své milé (Lenory)",
    themes: ["smrt", "osamělost", "ztráta", "smutek", "zlo"],
    space_time: ["Mužův/básníkův pokoj", "prosinecový den, půlnoc"],
    composition: "18 slok, 6 veršů",
    dictionary: {
      language: [
        "Archaismy, spisovný jazyk, zastaralé výrazy, knižní výrazy, přímá řeč",
      ],
      tropy: [
        "Personifikace, Symbol (Havran symbolem zla/smrti), Metafora (vyndej zobák z mého srdce = ukonči mé trápení)",
      ],
      figury: ["Epifora, Epizeuxis"],
    },
    narrator:
      "ich forma (sám autor převtělený do postavy básníka, dílo psal když mu umírala manželka)",
    main_characters: [
      {
        name: "Muž",
        description:
          "Nešťastný, osamělý, nemocný, neklidný, lituje smrti své ženy Lenory",
      },
      {
        name: "Havran",
        description: "děsivý, tajemný, představuje zlo",
      },
    ],
    plot_summary:
      "Vypravěč, osamělý, nemocný muž vzpomíná na svou zesnulou ženu Lenoru. V tom do jeho pokoje vletí havran, muž mu klade různé otázky, ale havranova odpověď je pokaždé stejná: 'never more'",
    main_message: "",
  },
  {
    name: "Jáma a kyvadlo a jiné povídky",
    author: "Edgar Allan Poe",
    year_of_publication: "",
    literary_genre: "",
    literary_form: "",
    literary_druh: "",
    rhyme: "",
    summary: "",
    themes: [""],
    space_time: [],
    composition: "",
    dictionary: {
      language: [""],
      tropy: [""],
      figury: [""],
    },
    narrator: "",
    main_characters: [
      {
        name: "",
        description: "",
      },
    ],
    plot_summary: "",
    main_message: "",
  },
  {
    name: "Král Lávra",
    author: "Karel Havlíček Borovský",
    year_of_publication:
      "1870 (po jeho smrtí, napsáno ve vyhnanství v Brixenu, vrchol/závěr jeho tvorby, realismus)",
    literary_genre: "alegorická satira (kritika pomocí humoru)",
    literary_form: "poezie",
    literary_druh: "epika",
    rhyme: "nepravidelný verš - 1. a 3. verš se nerýmuj, ABCBDDB",
    summary:
      "Satirická kritika hlouposti a krutosti panovníka, kvůli kterému umírají lidé.",
    themes: ["tajemství", "nespravedlnost", "moc", "krutost", "strach"],
    space_time: ["Irsko", "Neznámý čas"],
    composition: "34 slok 7 veršů, chronologická",
    dictionary: {
      language: [
        "Lidový a jednoduchý jazyk, archaismy (nyní je pro ně nový název bál - ples, hudci - muzikanti), hovorové a knižní výrazy",
      ],
      tropy: ["Personifikace", "Přirovnání", "Epiteton", "Hyperbola"],
      figury: ["Anafora"],
    },
    narrator: "er forma (vnější pozorovatel děje)",
    main_characters: [
      {
        name: "král Lávra",
        description: "oblíbený, hodný, občas krutý kvůli svým oslím uším",
      },
      {
        name: "Kukulín",
        description: "králův holič, mladý, prostý, nezkušený",
      },
      {
        name: "Další postavy:",
        description:
          "Červíček - český muzikant, Kukulínova matka - milující matka, poustevník - řekne Kukulínovi o vrbě",
      },
    ],
    plot_summary:
      "Oblíbený král Lávra má oslí uši, tají to, každý rok se nechává ostříhat, holiče potom popraví, tentokrát to vyšlo na holiče Kukolína, jeho matka se za něj modlí, aby ho poté nepopravil a prosí ho o milost, král se rozhodne, že Kukolína nechá naživu pod podmínkou, že Kukolín u něj zůstane jako holič a bude oslí uši tajit. Kukolín to po čase nemůže vydržet, na radu matky navštíví poustevníka, který mu poradí, aby vše řekl staré vrbě. Po nějakém čase se u krále koná hostina, jsou pozvaní i čeští muzikanti, Červíček ztratí basový kolík, takže si ho uřeže z vrby. Poté když na hostině zahraje, tak basa vše řekne a všichni to slyší. Poté se král Lávra rozhodne s tajemstvím skončit a nosit ušit hrdě venku.",
    main_message:
      "Kritika tehdejší Habsburské monarchie, hloupého panovníka kvůli kterému zbytečně umírají lidé",
  },
  {
    name: "Kulička",
    author: "Guy de Maupassant",
    year_of_publication:
      "1880 (rané období autorovy tvorby, realismus, naturalismus (zobrazení nezkreslené reality))",
    literary_genre: "povídka (kratší prozaická próza s jednodušším dějem)",
    literary_form: "próza",
    literary_druh: "epika",
    rhyme: "",
    summary:
      "I obyčejná prostitutka dokáže být hrdinkou a zahanbit bohaté a urozené, ale ti jí i tak opovrhují.",
    themes: [
      "hrdinství",
      "odvaha",
      "sebeobětování",
      "vlastenectví",
      "válka",
      "sobeckost",
    ],
    space_time: [
      "Francie, Normandie",
      "v období prusko-francouzské války (1870-1871)",
    ],
    composition: "chronologické, bez kapitol (jedno celé vyprávění)",
    dictionary: {
      language: [
        "Spisovný jazyk, knižní výrazy, řeč Kuličky méně spisovná, vulgarismy",
      ],
      tropy: [
        "Epiteton konstans (stálý přívlastek, zdůrazňuje běžné zjevné vlastnosti, např.: bledé tváře, lesklý rosol, veliké kapky)",
        "Personifikace",
        "Přirovnání (časte s jako)",
        "Oxymorón",
      ],
      figury: ["Řečnické otázky (Otázky, na které se nečeká odpověď)"],
    },
    narrator: "er forma (vnější pozorovatel děje)",
    main_characters: [
      {
        name: "Alžběta 'Kulička' Roussetová",
        description:
          "dobromyslná, obtloustlá, hezká, milá, vstřícná, upřípná, hrdá, odvážná a především velká vlastenka",
      },
      {
        name: "Cornudet",
        description: "cestuje s Kuličkou, je chvástavý",
      },
      {
        name: "hrabě de Bréville + manželka",
        description: "cestujou s Kuličkou",
      },
      {
        name: "pan Carré-Lamadon + manželka",
        description: "cestujou s Kuličkou, továrník",
      },
      {
        name: "pan Loiseau + manželka",
        description: "cestuje s kuličkou, obchodník s vínem",
      },
      { name: "2 jeptišky", description: "tíché, věřící, neustále se modlí" },
    ],
    plot_summary:
      "Skupinka opouští své město v dostavníku, v dostavníku jsou 3 páry, jeptišky i Alžběta 'Kulička' Rusetová. Aristokraté a měšťané jsou namyšlení a kuličku přehlížejí, poté dostanou hlad a Kulička je jediná co si s sebou vzala jídlo a také se se všemi mile rozděli. Ubytují se v hostinci, kde se ubytují, další den je nechce pustit pruský důstojník a dává jim podmínku, že je pustí až když dostane Kuličku, nejprve ho všichni odmítají, ale poté je to začne štvát a začnou k tomu Kuličku manipulovat. Kulička se nakonec podvolí a důstojník je pustí. Kuliččce se poté všichni vyhýbají, pomlouvají a pohrdají a při čase oběda jí nikdo nedá ani sousto.",
    main_message:
      "Odsuzuje válku a násili, ukazuje, jak se vyšší vrstvy chovají k těm nižším.",
  },
  {
    name: "Revizor",
    author: "Nikolaj Vasiljevič Gogol",
    year_of_publication: "1836",
    literary_genre: "komedie",
    literary_form: "próza",
    literary_druh: "drama",
    rhyme: "-",
    summary: "Kritika ruské byrokracie, korupce, carského Ruska",
    themes: ["podvod", "korupce", "byrokracie", "lidská hloupost"],
    space_time: [
      "Blíže nespecifikované městečko v Rusku",
      "30. léta 19. století",
    ],
    composition: "5 dějství, chronologická",
    dictionary: {
      language: ["Spisovný, hovorový jazyk, vulgarismy, archaismy"],
      tropy: ["Personifikace"],
      figury: [
        "epizeuxis (opakování slov za sebou)",
        "hyperbola (zveličení)",
        "anafora",
      ],
    },
    narrator: "- (nevyskytuje se)",
    main_characters: [
      {
        name: "Chlestakov",
        description:
          "Falešný revizor, každý se mu snaží podlézat, nikdo netuší, že je falešný, je to úředník z Petěrburgu",
      },
      {
        name: "Osip",
        description: "Chlestakovův sluha",
      },
      {
        name: "Hejtman, policejní direktor (Anton Antonovič)",
        description: "Krutý, naivní, mocný, podplácí, nemorální",
      },
      {
        name: "Anna Andrejevna a Marja Antonovna",
        description: "Matka a dcera, snaží se zalíbit Chlestakovovi",
      },
      {
        name: "Statkáři Dobčinskij a Bobčinskij",
        description: "Podlézaví, naivní, hloupí",
      },
      {
        name: "poštmistr Špekin, soudce Ljapkin Ťapkin, školní inspektor Chlopov, kurátor Zemljanika, lékař Ginber",
        description: "",
      },
    ],
    plot_summary:
      "1. dějství: Hejtman se dopisem dozví, že má příjet revizor 2. dějství: Chlestakov v hostinci nemá na zaplacení, Hejtman pozve Chlestakova domu. 3. dějství: Žena s dcerou se baví s Chlestakovem. 4. dějství: Všichni se domlouvají jak na revizora, začne si od všech půjčovat peníze, požádá o ruku hejtmanovi dcery. 5. dějství: Hejtman a jeho žena přemýšlí jak budou mít krásný život v Petěrburgu, později však přijde poštmistr s dopisem, že to nebyl žádný revizor, ale pouhý úředník, na konci přijde četník a oznámí, že přijel pravý revizor z Petěrburgu.",
    main_message: "",
  },
  {
    name: "O myších a lidech",
    author: "John Steinbeck",
    year_of_publication: "1937 (americký realismus)",
    literary_genre: "sociální novela (jedna dějová linie, závěrečná pointa)",
    literary_form: "próza",
    literary_druh: "epika",
    rhyme: "",
    summary:
      "Zobrazení tehdejší americké společnosti, následky hospodářské krize, rasismu, chudoba, těžké podmínky.",
    themes: [
      "samota (každý na té farmě je sám)",
      "přátelství",
      "sen",
      "velká hospodářská krize",
    ],
    space_time: [
      "nedaleko města Soledad (samota) v Kalifornii",
      "30. léta za Velké hospodářské krize",
    ],
    composition: "6 kapitol, chronologická (děj na sebe časově navazuje)",
    dictionary: {
      language: [
        "Spisovný jazyk, nespisovný jazyk, slangové výrazy, zdrobněliny, přímá řeč, hovorový jazyk",
      ],
      tropy: [
        "personifikace",
        "hyperbola",
        "epiteton konstans (přívlatek stálý, který přikládá důraz zjevným vlastnostem)",
      ],
      figury: ["elipsa (vynechání části věty, která je z kontextu zřejmá)"],
    },
    narrator: "er forma (vnější pozorovatel děje)",
    main_characters: [
      {
        name: "George Milton",
        description: "starostlivý, chytrý, chrání Lennieho",
      },
      {
        name: "Lennie Small",
        description:
          "velký, silný, neohrabaný, mentálně zaostalý, poslušný, má rád hebké věci, nechtěně zabije myš, psa a Curleyho ženu",
      },
      {
        name: "Candy",
        description:
          "dobrosrdečný invalida bez ruky, má starého pejska, má rád Lennieho a George, připojí se k jejich snu o vlastní farmě",
      },
      {
        name: "Curleyovi",
        description:
          "Manželka Curleyova (nespokojená, krásná, svádí zaměstnance na farmě) a syn Curley (malý, agresivní, zakomplexovaný)",
      },
    ],
    plot_summary: "",
    main_message:
      "George a Lennie chodí po farmách a hledají práci, mají sen vlastní farmy a Lennie tam chce králíčky. Na jednom ranči se setkají s Candy, který se připojí k jejich snu. Lennie nechtěně zabije Curleyho ženu, protože jí chce pohladit vlasy, ale přitom ji omylem zlomí krk. George se rozhodne, že je lepší zabít Lennieho, než aby ho chytili a mučili. George pak Lennieho zastřelí, aby mu ušetřil bolesti.",
  },
  {
    name: "1984",
    author: "George Orwell",
    year_of_publication: "",
    literary_genre: "",
    literary_form: "",
    literary_druh: "",
    rhyme: "",
    summary: "",
    themes: [""],
    space_time: [],
    composition: "",
    dictionary: {
      language: [""],
      tropy: [""],
      figury: [""],
    },
    narrator: "",
    main_characters: [
      {
        name: "",
        description: "",
      },
    ],
    plot_summary: "",
    main_message: "",
  },
  {
    name: "Farma zvířat",
    author: "George Orwell",
    year_of_publication: "1945 (závěr autorovy tvorby)",
    literary_genre:
      "satirický román, bajka (krátký příběh se zvířaty s ponaučením), novela",
    literary_form: "próza",
    literary_druh: "epika",
    rhyme: "",
    summary:
      "Kritika totalitního režimu (komunismu), přeměna společnosti, zvířata se bouří proti lidem, nastolení komunismu",
    themes: ["Diktatura", "totalita", "komunismus", "revoluce", "moc"],
    space_time: [
      "Anglie, fiktivní farma pana Jonese, (Panská farma / Farma zvířat)",
      "Nespecifikovaný čas, připomíná proces nástupu komunismu v Rusku 1. polovina 20. století",
    ],
    composition: "10 kapitol, chronologická",
    dictionary: {
      language: ["spisovný jazyk, přímá řeč, monology vypravěče"],
      tropy: ["Personifikace", "Alegorie (přenesení významu)"],
      figury: [
        "Eufemismus (zjemnění skutečnosti), hyperbola (nadsázka, zveličení)",
      ],
    },
    narrator: "er forma (vnější pozorovatel děje)",
    main_characters: [
      {
        name: "Napoleon",
        description:
          "prase, vůdce, vyhnal Kuliše, zrádný, chytrý, manipulativní, zneužívá své moci, představuje Stalina",
      },
      {
        name: "Kuliš",
        description:
          "prase, plánuje zmodernizovat farmu, dobré úmysly, představuje Trockého",
      },
      {
        name: "Major",
        description:
          "prase, staré, zemře na začátku, představuje Lenina, nabudí zvířata svým snem k převratu",
      },
      {
        name: "Pištík",
        description: "prase, věrný Napoleonovi, přesvědčivý, manipulativní",
      },
      {
        name: "pan Jones a paní Jonesová",
        description: "majitelé farmy, zvířata se proti nim bouří",
      },
      {
        name: "Benjamin",
        description:
          "osel, pesimista, chytrý, nevěří na změnu, vše je pro něj stejné",
      },
      {
        name: "Boxer",
        description:
          "kůň, silný, pracovitý, ne moc chytrý, dobromyslný, důvěřivý, oddaný, později zabit",
      },
      {
        name: "Psi",
        description:
          "Napoleonovi strážci, tajná policie, vycvičení Napoleonem, který je odebral po narození, zastrašující",
      },
      {
        name: "Ovce",
        description:
          "hloupé, snadno ovlivnitelné a manipulovatelné, Napoleonovi stoupenci, pouze přikyvují",
      },
      {
        name: "Lupina (kůň), slepice, krkavec, krysy, kočka...",
        description: "kůň",
      },
      {
        name: "Další lidé: Whymper (prostředník), Frederick, Pilkington (majitelé cizích farem)",
      },
    ],
    plot_summary: "",
    main_message: "",
  },
  {
    name: "Malý princ",
    author: "Antoine de Saint-Exupéry",
    year_of_publication: "1943 (závěr autorovy tvorby)",
    literary_genre: "filozofická pohádka",
    literary_form: "próza",
    literary_druh: "epika",
    rhyme: "",
    summary:
      "Zobrazení dětského vnímání světa dospělých. Kritika lidských vlastností.",
    themes: [""],
    space_time: [
      "africká poušť, Sahara (poté i jiné fiktivní planety)",
      "neurčený čas, během 9 dní, zmíněné, že uplynulo 6 let",
    ],
    composition: "27 kapitol, chronologické i retrospektivní",
    dictionary: {
      language: [
        "Spisovný jazyk, přímá řeč, hovorový jazyk, zdrobněliny, nepřímá řeč",
      ],
      tropy: [
        "Symboly (růže - krásu, liška - moudrost, chytrost)",
        "Personifika",
        "Alegorie",
        "Přirovnání",
      ],
      figury: ["Hyperbola"],
    },
    narrator: "ich forma a er forma",
    main_characters: [
      {
        name: "Pilot",
        description:
          "má autobiografické prvky autora, má pořád dětskou duši a myšlení",
      },
      {
        name: "Malý princ",
        description:
          "z planetky B612, cestuje po planetách, dětský, nedokáže pochopit svět dospělých",
      },
      {
        name: "Růže",
        description:
          "na planetce malého prince, je pyšná, panovačná, sebestředná",
      },
      {
        name: "1. Král",
        description: "rádoby důležitý",
      },
      {
        name: "2. Domýšlivec",
        description: "chtěl být všemi obdivován a respektován",
      },
      {
        name: "3. Pijan",
        description:
          "osamělý, zapomnětlivý, pije, aby zapomněl na stud, že pije",
      },
      {
        name: "4. Byznysmen",
        description: "počítá hvězdy a říká, že je vlastní",
      },
      {
        name: "5. Lampář",
        description:
          "rozsvěcel a zhasínal lampu, rychle se mu střídal den a noc",
      },
      {
        name: "6. Zeměpisec",
        description: "Místo cestování jenom zapisuje mapy",
      },
      {
        name: "7. Liška",
        description: "Znuděná, moudrá, chytrá, nechá se ochočit malým princem",
      },
      {
        name: "Výhybkář",
        description: "opravuje vlaky",
      },
      {
        name: "Obchodník",
        description: "prodává pilulky proti žízni",
      },
      {
        name: "Žlutý jedovatý had",
        description: "uštke malého prince a ten zemře",
      },
    ],
    plot_summary: "",
    main_message: "",
  },
  {
    name: "Edison",
    author: "Vítěslav Nezval",
    year_of_publication: "1928",
    literary_genre: "báseň",
    literary_form: "poezie",
    literary_druh: "lyriko-epicka",
    rhyme: "volný verš, sdružený rým (AABB), bez interpunkce",
    summary:
      "Otázky smyslu života, co po sobě člověk zanechá, Edison toho zanechal spoustu, v protikladu hazardní hráč nic.",
    themes: [""],
    space_time: ["Praha", "v noci"],
    composition:
      "5 zpěvů, které se nadále dělí na sloky, rámcová kompozice (několik příběhů)",
    dictionary: {
      language: [""],
      tropy: [
        "Symbol (sebevrah = beznaděj)",
        "Metafora",
        "Metonymie",
        "Personifikace",
      ],
      figury: ["Anafora", "Aliterace", "Zvukomalba"],
    },
    narrator:
      "nejdříve ich forma, poté o Edisonovi er forma (vnější pozorovatel)",
    main_characters: [
      {
        name: "Nezval",
        description: "",
      },
      {
        name: "Edison",
        description: "Symbol úspěšného člověka a zástupce pokroku techniky",
      },
      {
        name: "Sebevrah",
        description: "Protiklad ku Edisonovi, je neúspěšný a beznadějný",
      },
    ],
    plot_summary: "",
    main_message: "",
  },
  {
    name: "Proměna",
    author: "Franz Kafka",
    year_of_publication: "1915",
    literary_genre: "Existenciální povídka/novela",
    literary_form: "próza",
    literary_druh: "epika",
    rhyme: "",
    summary: "",
    themes: ["smrt, bezmoc, existenci/přetvářku, proměna"],
    space_time: ["městský byt Řehořovy rodiny", "neurčený čas"],
    composition: "chronologická, 3 kapitoly",
    dictionary: {
      language: ["Spisovná hovorová čeština, vulgarismů minimum, archaismy"],
      tropy: ["Přirovnání"],
      figury: ["Řečnická otázka"],
    },
    narrator: "er forma (vnější pozorovatel děje)",
    main_characters: [
      {
        name: "Řehoř Samsa",
        description:
          "Hlavní postava, mladý ochodník, hodný, hodně pracovitý, racionalní (klasický hrdina Kafkových děl)",
      },
      {
        name: "Sestra Markéta",
        description:
          "17letá sestra, citlivá, chápavá, později lhostejná a nenávistná, považuje Řehoře za zvíře a za přítěž",
      },
      { name: "Matka", description: "naivní, mimo realitu, bojí se Řehoře" },
      { name: "Otec", description: "znechucený, zlý" },
      {
        name: "Grete",
        description: "svérázná, nebojácná, mluví o Řehořovi ve středním rodě",
      },
    ],
    plot_summary: "",
    main_message: "Kritika povrchního měšťanského chování",
  },
  {
    name: "Krysař",
    author: "Viktor Dyk",
    year_of_publication: "1915",
    pages: 128,
    literary_genre: "historická novela (kratší próza s jasně daným příběhem)",
    literary_form: "próza",
    literary_druh: "epika",
    summary: "Kritika společnosti, morální zkaženosti.",
    themes: ["zrada", "smrt", "láska"],
    space_time: ["německé město Hameln", "středověk (krysí mor)"],
    composition: "26 kapitol, chronologická",
    narrator: "er forma (vnější pozorovatel děje)",
    dictionary: {
      language: [
        "Spisovná hovorová čeština, cizojazyčné prvky, archaismy, historismy",
      ],
      tropy: [
        "Symbol (dítě = symbol lepšího života)",
        "Metafora",
        "Personifikace",
        "Hyperbola",
      ],
      figury: [
        "inverze (nezvyklý slovosled vět), řečnická otázka (neočekává se symbol)",
      ],
    },
    main_characters: [
      {
        name: "Krysař",
        description:
          "necitlivý, chladnokrevný, klidný, introvertní, samotář, lhostejný, majitel kouzelné píšťaly, která dokáže ovládat bytosti",
      },
      {
        name: "Agnes",
        description:
          "mladá a krásná měšťanka, zamiluje se do Krysaře a on do ní",
      },
      {
        name: "Sepp Jörgen",
        description:
          "prostý, chudý, nevzdělaný, pomalejší, zaostalejší, lidé si z něj utahují",
      },
      {
        name: "Městští radní",
        description:
          "nedodrží slib zaplatit Krysaři za jeho služby vyvedení krys z města",
      },
      {
        name: "Dlouhý Kristián",
        description:
          "vysoký, agresivní, bývalý milenec Agnes, Agnes s ním čeká dítě",
      },
    ],
    plot_summary:
      "Krysař je povolán do města, aby zahubil přemnožené krysy. Ve městě pozná dívku jménem Agnes a zamiluje se do ní. Po vyvedení krys mu radní odmítnou zaplatit a Agnes čeká dítě s jejím bývalým milencem Kristiánem, znechuceně poté odchází z města, odmítl i nabídku ďáblova pomocníka, který ho nabádál k využití píšťaly proti lidem. Když se po nějaké době vrátí, tak zjistí, že se Agnes zabila. Jediný přeživší je rybář Sepp Jörgen a dítě, které našel a kterému pak začne hledat novou matku.",
    literary_context: "",
    main_message: "",
  },
  {
    name: "Bílá Nemoc",
    author: "Karel Čapek",
    year_of_publication: 1937,
    pages: 128,
    literary_genre: "Tragédie",
    literary_form: "Próza",
    literary_druh: "Drama (protifašistické a protiválečné dílo o 3 jednáních)",
    summary: "Varování před nesmyslností války a fašismu.",
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
    literary_druh: "Drama",
    summary:
      "Varování před nekontrolovaným rozvojem techniky a jeho možnými důsledky pro lidstvo.",
    themes: [
      "Umělý život",
      "Vzpoura",
      "Lidská přirozenost",
      "Budoucnost lidstva",
    ],
    space_time: [
      "Na ostrově, V továrně Rossum’s Universal Robots",
      "Blíže nespecifikovaná budoucnost",
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
        name: "Lakomec (drama)",
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
      "Pocházel z chudé rodiny, studoval filozofii a práva.",
      "Psal do novin, dělal amatérské divadlo (dobrovolný herec).",
      "Své první básně v němčině",
      "Zakladatel české moderní poezie",
      "Inspiroval se zahraničními romantickými autory (například Byron)",
      "Jeho dílo bylo ve své době kritizováno, ocenili ho až později generace Májovců",
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
      "V době studií se seznámil s Františkem Palackým, s nímž pak celý život spolupracoval.",
      "Je spojován s Romantismem, významný představitel 3. etapy Národního obrození",
      "Jako sekretář Českého muzea sbíral po venkovských archivech materiál, lidové písně, pohádky...",
      "Archivář města Prahy",
      "Sběratel ústní lidové slovesnosti = písně, pohádky, pověsti, říkadla",
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
    birth_year: "1851",
    art_direction: "Realismus",
    interest: [
      "Český spisovatel, dramatik a profesor historie",
      "Řadí se především ke kritickému realismu",
      "Vystodoval historii na pražské univerzitě a působil jako středoškolský profesor v Litomyšli",
      "Psal především drama a romány",
      "Věnoval se především historii českého národa a jeho nejoblíbenější období bylo husitstské období (nemálo je pozdvihl)",
      "Jeden z nejprodávanějších autorů",
      "Jeho historický pohled využivli po roce 1948, komunisté",
      "Napsal přes 50 děl",
    ],
    main_chars: [
      "Jeho hlavní hrdinové bývají často masy lidí",
      "Psal rozsáhlé románové soubory",
      "Umí poutavě popsat davové scény, především boje/válku",
      "Jeho díla jsou zdlouhavě popisná, protože v nich usiluje o co nejvěrnější zobrazení historických událostí",
      "Slabina v jeho děl je malá psychologická hloubka postav (většinou jsou jednoduché, mají jasně dané charakteristiky, které se nemění, nevyvíjejí se, jsou statické)",
    ],
    what_he_wrote: ["romány", "drama"],
    authors: [
      "Zikmund Winter",
      "Jan Neruda",
      "Svatopluk Čech",
      "Jaroslav Vrchlický",
      "Karel Václav Rais",
    ],
    works: [
      {
        name: "Lucerna",
        url: "/books/" + deformatName("Lucerna"),
      },
      {
        name: "Staré pověsti české",
      },
      {
        name: "F. L. Věk",
      },
      {
        name: "Proti všem",
      },
      {
        name: "Jan Hus",
      },
      {
        name: "Jan Žižka",
      },
      {
        name: "Psohlavci",
      },
    ],
  },
  {
    id: 7,
    name: "Oscar Wilde",
    birth_year: "1854-1900",
    art_direction: "Dekadence",
    interest: [
      "Irský dramatik, básník a spisovatel, který působil v Literární moderně",
      "Představitel dekadence",
      "Nedbal na společenské pravidla/konvence, užíval si naplno, byl silně provokativní",
      "Z bohaté rodiny, syn lékaře, studoval na Oxfordu",
      "Při studiích se seznámil se směrem - Dekadencí - která ho fascinovala svou absolutní svobodou a životem bez pravidel",
      "Byl homosexuál, což bylo v té době trestné (po odhalení jeho románku byl poslán na 2 roky do vězení a nucených prací)",
      "Spojován s prokletými básníky kvůli svému životnímu stylu a zájmu",
    ],
    main_chars: [
      "Hry charakteristické velmi bohatým jazykem (aforismy, slovní hříčky, ironie)",
      "Kritizoval tehdejší společnost v Anglii",
      "Snažil se šokovat",
      "Slovní hříčky, paradoxy, ostrá ironie, sarkasmus",
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
        name: "Obraz Doriana Graye (román)",
        url: "/books/" + deformatName("Obraz Doriana Graye"),
      },
      {
        name: "Strašidlo Cantervillské (povídka)",
      },
      {
        name: "Ideální manžel (drama)",
      },
      {
        name: "Jak je důležité míti Filipa (drama)",
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
      "Zakladatel moderní novely, detektivního a hororového žánru",
      "Narozen v kočovnické rodině. Po smrti matky adoptován rodiou Allanovými, platili mu vzdělání, studoval jazyky a psal své první básně. Nakonec skončil na vojenské akademii, odkud ho propustili a rodina ho potom už odmítla nadále podporovat a tak se začal živit literaturou. Tato situace ho uvrhla do depresí řešené alkoholem a drogami.",
      "Část života prožil v New Yorku, kde pracoval jako redaktor",
      "Kvůli své nevalné pověsti se v Americe moc neproslavil, ale v Evropě byl velmi oblíben (díky Baudelairovi)",
      "Záhadná smrt, nalezen opilý pod vlivem drog na ulici, pravděpodobně rvačka",
    ],
    main_chars: [
      "Umí vyvolat záhadnou, ponurou a zároveň poetickou atmosféru, která čtenáře vtáhne do děje a která hraničí s halucinacemi",
      "Ve čtenářích rád vyvolával pocit hrůzy a strachu",
    ],
    what_he_wrote: ["Básně (poezie)", "Povídky (próza)"],
    authors: [
      "Walter Scott",
      "George Gordon Byron",
      "Victor Hugo",
      "Stendhal",
      "Alexandre Dumas",
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
    art_direction: "Realismus",
    interest: [
      "Český básník, spisovatel, novinář, kritik, překladatel a vlastenec",
      "Představitel realismus a jedna z klíčových osobností 4. etapy Národního obrození",
      "Narodil se v obci Borová (dnes Havličkově Brodě)",
      "Studoval gymnázium a poté filozofii v Praze",
      "Pracoval jako vychovatel/učitel v Rusku, ale zdejší společnost začal kritizovat a byl nucen se navrátit do Čech.",
      "Roku 1848 založil vlastní noviny Národní noviny, které byly kvůli jeho kritice rakouské vlády pronásledovány a nakonec uzavřeny.",
      "Pro své kritické postoje vůči rakouské vládě byl policejně sledován a nakonec zatčen a uvězněn do Tyrolského městečka Brixen pod policejní dohled.",
      "Zemřel na tuberkulózu, kterou se nakazil po smrti své manželky.",
    ],
    main_chars: [
      "Otevřeně kritizoval politické dění, zejména rakouský absolutismus",
      "Psal epigramy, což jsou krátké satirické básně",
    ],
    what_he_wrote: [
      "Satira",
      "Elegie (žalozpěv)",
      "Epigramy (krátké satirické básně)",
      "Poezie",
    ],
    authors: ["Božena Němcová", "Josef Kajetán Tyl", "Karel Jaromír Erben"],
    works: [
      {
        name: "Král Lávra - satirická báseň, inspirovaná irskou lidovou pověstí o králi Midasovi",
        url: "/books/" + deformatName("Král Lávra"),
      },
      {
        name: "Tyrolské elegie",
      },
      {
        name: "Epigramy",
      },
      {
        name: "Obrazy z Rus (kritika Ruska, zároveň i opak)",
      },
    ],
  },
  {
    id: 10,
    name: "Guy de Maupassant",
    birth_year: "1850-1893",
    art_direction: "Realismus",
    interest: [
      "Fracouzský spisovatel a novinář",
      "Jeho tvorbu ovlivnil Realismus a Naturalismus, pesimistický pohled na svět, šlechtictví, život v Normandii a ve městě, prusko-francouzská válka",
      "Šlechtického původu (aristokrat), narozen na zámku v Normandii",
      "Vyloučen z církevního internátu, studium práv mu přerušila prusko-francouzská válka do níž dobrovolně vstoupil jako voják",
      "Jeho přítel spisovatel Flaubert ho uvedl do literárního světa",
      "Napsal téměr 300 povídek a několik románů",
    ],
    main_chars: [
      "Dokázal mistrně popsat skutečnost",
      "rodná Normandie",
      "prusko-francouzská válka",
      "strachu, nemoci, šílenství, posedlost",
    ],
    what_he_wrote: [
      "Próza",
      "Povídky (Kulička, Slečna Fifi)",
      "Romány (Miláček, Petr a Jan)",
      "Novely",
    ],
    authors: [
      "Gustav Flaubert - jeho přítel",
      "Nikol Valisjevič Gogol (Revizor)",
      "Charles Dickens",
      "Émile Zola",
      "Jules Verne (Dvacet tisíc mil pod mořem)",
    ],
    works: [
      {
        name: "Kulička",
        url: "/books/" + deformatName("Kulička"),
      },
      {
        name: "Miláček (román)",
      },
      {
        name: "Příběh jednoho života",
      },
      {
        name: "Petr a Jan (román)",
      },
    ],
  },
  {
    id: 11,
    name: "Nikolaj Vasiljevič Gogol",
    birth_year: "1809",
    art_direction: "Romantismus / Realismus",
    interest: [
      "Ruský dramatik a spisovatel ukrajinského původu",
      "Zástupce ruského Romantismu a současně považovaný za zakladatele ruského Kritického Realismu",
      "Po studiích se odstěhoval do Petrohradu, kde se brzy začal věnovat literatuře",
      "Ve své tvorbě se velmi inspiroval A. S. Puškinem a ovlivnil Dostojevského",
      "Zužovali ho psychické problémy (deprese) z neúspěchu jeho tvorby",
    ],
    main_chars: [
      "Kombinuje prvky romantismu a realismu",
      "Používal satiru, sarkasmus a humor",
      "Jeho tvorbu ovlivila i vášeň jeho otce pro literaturu, nebo Puškin, ukrajinský folklór, tradice a dějiny",
      "Fantastické a mystické prvky",
    ],
    what_he_wrote: ["Drama", "Próza"],
    authors: [
      "Guy de Maupassant",
      "Gustav Flaubert",
      "Charles Dickens",
      "Lev Nikolajevič Tolstoj",
      "Fjodor Michajlovič Dostojevskij",
    ],
    works: [
      {
        name: "Revizor",
        url: "/books/" + deformatName("Revizor"),
      },
      {
        name: "Petrohradské povídky",
      },
      {
        name: "Mrtvé duše",
      },
      {
        name: "Podobizna",
      },
      {
        name: "Ženitba",
      },
    ],
  },
  {
    id: 12,
    name: "John Steinback",
    birth_year: "1902-1968 - 20. st.",
    art_direction: "Realismus",
    interest: [
      "Americký spisovatel a novinář",
      "Syn německého úředníka a irské učitelky",
      "Nositel Nobelovy ceny a Pulizerovy ceny za literaturu",
      "Působil v americkém realismu",
      "Proslavil se svými romány ze života chudých Američanů",
      "Již v mládí pracoval na farmách, proto věděl o čem píše, inspirace",
      "Tvořil v době velké hospodářské krize",
      "Proslavil se novelou Pláň Tortilla",
    ],
    main_chars: [
      "Sociální tématika,",
      "Marné hledání obživy,",
      "Často zobrazuje osudy a pocity chudáků, zemědělců, dělníků v době hospodářské krize",
      "Novely typické pro popis vztahu člověka k půdě (majetku), ukazuje negativní postoj člověka k moderní civilizaci, popisuje dobu ekonomické krize a prostředí na okraji společnosti, odsuzuje násilí a vykořisťování druhých",
    ],
    what_he_wrote: [
      "Povídky (Údolí bez konce, Nebeské Pastviny)",
      "Romány (O myších a lidech, Hrozny hněvu)",
      "Novely",
    ],
    authors: [
      "Franz Kafka (Proměna, Zámek)",
      "Antoine De Saint-Exupéry",
      "Ernest Hemingway",
      "Scott Fitzgerald",
    ],
    works: [
      {
        name: "O myších a lidech (Román)",
        url: "/books/" + deformatName("o-myších%20a%20lidech"),
      },
      {
        name: "Pláň Tortilla (Román)",
      },
      {
        name: "Hrozny hvěvu (Román)",
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
    birth_year: "1903",
    art_direction: "2. pol. 20. století",
    interest: [
      "Vlastním jménem Eric Arthur Blair, narodil se v Indii",
      "Britský prozaik, novinář, esejista",
      "Předpověděl několik událostí, vizionář",
      "Socialista a antifašista, demokrat, odpůrce totalitních režimů",
      "Žil tuláckým životem",
      "Bojoval ve Španělské občanské válce",
      "zemřel na tuberkulózu",
    ],
    main_chars: [
      "Antiutopické díla",
      "Kritika totalitních režimů",
      "Sociální tématika",
      "Tvořil eseje",
      "Vliv na jeho tvorbu měl velký odpor k totalitním režimům",
      "Ovlinili ho také práce v koloniích",
      "Také ho ovlivnila účast ve Španělské občanské válce",
    ],
    what_he_wrote: [],
    authors: [
      "Antoine De Saint-Exupéry (Albert Camus)",
      "Karel Čapek (R.U.R)",
      "Eduard Bass (Cirkus Humberto)",
    ],
    works: [
      {
        name: "1984 (antiutopický román)",
        url: "/books/" + deformatName("1984"),
      },
      {
        name: "Farma zvířat (satirický román s alegorickými prvky)",
        url: "/books/" + deformatName("Farma zvířat"),
      },
      {
        name: "Farářova dcera",
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
    birth_year: "1900–1958",
    art_direction:
      "Literární moderna – Směr avantgardy, především poetismus a surrealismus",
    interest: [
      "Významný český básník, dramatik, překladatel a přední osobnost české avantgardy.",
      "Studoval práva v Brně a později filozofii v Praze",
      "Zakládající člen avantgardního spolku Děvetsil, který sdružoval moderní umělce různých oborů.",
      "Zakladatel poetismu (spolu s Karlem Teigem) – českého avantgardního směru, který klade důraz na hravost, radost ze života, bezstarostnost a fantazii, obvykle bez interpunkce.",
      "Zakladatel české surrealistické skupiny (1934), která čerpala inspiraci z podvědomí, snů a iracionálních obrazů.",
      "Silně ovlivněn nejen poetismem a surrealismem, ale i dobovou politickou situací a socialistickými ideály.",
    ],
    main_chars: [
      "Poetismus: Optimismus, hravost, oslava každodenní radosti ze života.",
      "Surrealismus: Snové obrazy, zkoumání podvědomí, využití iracionálních prvků, automatický text.",
      "Jazyková hravost: Inovativní používání metafor, bohatá obraznost.",
      "Často bez interpunkce, což podporuje volnost a plynulost jeho poezie.",
      "Projevy politických a socialistických ideálů (zejména ve 30. a 40. letech).",
    ],
    what_he_wrote: [
      "Básně noci – Sbírka básní, obsahující např. Edison, považovaná za jedno z vrcholných děl poetismu. Téma zápasu člověka s časem, smyslem života.",
      "Podivuhodný kouzelník – Básnická skladba, základní dílo poetismu.",
      "Pantomima – Sbírka básní, která obsahuje hravé verše a využívá estetiku poezie bez interpunkce.",
    ],
    authors: [
      "Jaroslav Seifert – Básník a držitel Nobelovy ceny za literaturu, rovněž člen Děvetsilu.",
      "Karel Teige – Teoretik avantgardy, blízký spolupracovník a přítel Nezvala.",
      "Vladislav Vančura – Prozaik a dramatik, známý svým specifickým jazykovým stylem, rovněž člen Děvetsilu.",
    ],
  },
  {
    id: 17,
    name: "Franz Kafka",
    birth_year: "1883-1924",
    art_direction: "Literární Moderna",
    interest: [
      "Spisovatel a nejvýznamnější představitel pražské německé literatury",
      "Židovský původ, psal německy, ale k češtině měl silnou vazbu",
      "Měl špatný vztah se svým přísným otcem, to hodně ovlivnilo jeho otvorbu, nejlepší vztah měl se svým strýcem, ke kterému vzhlížel jako ke svému otci, a se svou sestrou Ottlou (jeho vztahy v rodině se často promítají v jeho dílech)",
      "Pracoval jako úředník, což ho ovlivnilo v jeho tvorbě (úředníci jsou všichni stejní, obyčejní, stejně jako jeho hrdinové)",
      "Ovlivnil ho umělecký směr existencialusmus, surrealismus, expresionismus, modernismus",
      "Ze svého vztahu k otci se vypsal ve svém díle Dopis otci, avšak jeho otec ho nikdy neviděl",
      "Vystudoval práva a při studiu se seznámil se Maxem Brodem, jeho nejlepším přítelem (Kafka ho po své smrti v závěti žádal, aby nevydával žádné z jeho nedokončených děl, avšak Brod ho neuposlechl a vydal je)",
      "Umírá na tuberkulózu v roce 1924",
    ],
    main_chars: [
      "Kafkův svět je absurdní svět bez logiky",
      "Děj se odehrává v ponurém nijak neurčeném a nepochopitelném světě",
      "Jeho hlavní hrdinové jsou:",
      "Průměrní lidé, kteří nejsou ničím zajímaví, naprosto běžní lidé (Vliv Kafkovo povolání úředníka, každý úředník je stejný)",
      "Kafkovi hrdninové také často nemají jméno nebo jsou označeni pouze iniciálami",
      "Jeho hrdinové nemají žádnou minulost, nic o nich nevíme",
      "Hrdinové se snaží pochopit okolní svět, avšak marně, protože Kafkův svět je nelogický a nedává smysl",
      "Hrdinové často bojují s neviditelnou silou, avšak marně",
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
    art_direction: "Česká moderna, Generace Buřičů",
    interest: [
      "Významný český básník, prozaik, publicista, dramatik a politik",
      "V mládí byl jedním z představitelů generace ANARCHISTICKÝCH BUŘIČŮ",
      "Vystudoval práva v Praze",
      "Kritik první republiky a T.G. Masaryka",
      "Podílel se aktivně na redigování časopisu Lumír",
      "Za první světové války se podílel na protirakouském odboji a byl kvůli své literární činnosti vězněn ve Vídni",
      "Redaktorem Národních listů",
      "Podílel se na založení Československé národní demokracie",
    ],
    main_chars: [
      "Využíval satiru",
      "Jasná pointa díla",
      "Úsečnost",
      "Paradoxy",
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
      "Fráňa Šrámek",
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
      {
        name: "Ondřej a drak (drama)",
      },
    ],
  },
  {
    id: 19,
    name: "Karel Čapek",
    birth_year: "1890-1938",
    art_direction: "Meziválečná literatura",
    interest: [
      "Český spisovatel, dramatik, básník, překladatel a novinář",
      "Měl dva sourozence - bratra Josefa a sestru Helenu, bratr Josef mu často pomáhal s psaním",
      "Byl velkým humanistou a pacifistou",
      "Kvůli svému zdravotnímu stavu nemohl narukovat, ale byl velkým odpůrcem války",
      "Je považován za zakladatele moderní utopické a vědeckofantastické prózy",
      "Ovlivněn pragmatismem (filosofický směr zaměřený na užitečnost a praktičnost)",
      "Předseda českého PEN klubu, což je celosvětové sdružení spisovatelů",
      "Byl několikrát navržen na Nobelovu cenu, ale nikdy ji nedostal",
      "Autor mnoha divadělních her, povídek, románů, fejetonů, knih pro děti a sloupků v novinách",
      "Vytvořil publicistický útvar - SLOUPEK",
      "Byl první kdo použil slovo ROBOT",
      "Redigoval Národní listy, později pracoval pro Lidové noviny, kde vydávál své práce",
    ],
    main_chars: [
      "Uměl velice dobře využívat českého jazyka, bohatý jazyk, vzdělaný",
      "Varoval před fašismem, nacismem, válkou a před negativními dopady technického pokroku",
      "Ovlivněn pragmatismem (praktický člověk, zda je něco prospěšné)",
      "Byl fascinován technologiemi a pokrokem => R.U.R. (zároveň varoval před nimi)",
      "Humanismus, zobrazuje víru v lidskou důstojnost",
      "Používání humoru a ironie, aby čtenářům přiblížil vážná témata",
      "Zamýšlel se nad filozofickými otázkami",
    ],
    what_he_wrote: [
      "Všestranny autor",
      "Povídky",
      "Romány",
      "Drama",
      "Fejetony",
      "Sloupky",
      "Pohádky pro děti",
    ],
    authors: [
      "Josef Čapek",
      "Vladislav Vančura",
      "Jaroslav Hašek",
      "Karel Poláček",
      "Eduard Bass",
      "Vítěslav Nezval",
      "Franz Kafka",
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
        name: "Matka (protiválečné drama)",
      },
      {
        name: "Válka s Mloky (satirický scifi román)",
      },
      {
        name: "Krakatit (vědeckofantastický román o trhavině)",
      },
      {
        name: "Boží muka",
      },
      {
        name: "Povídky z jedné a druhé kapsy",
      },
      {
        name: "Dášenka (dětská pohádka o pejskovi)",
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
      "Byl zaměřený na člověka a racionalitu",
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
    name: "Dekadence",
    time_period: "",
    characteristic_features: ["", "Především francouzští Prokletí básníci"],
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

export const ikt_questions = [
  {
    id: 1,
    question:
      "Bezpečný pohyb v kyberprostoru, argumentační fauly a dezinformace",
    answer: [
      "&lBezpečný pohyb v kyberprostoru:",
      "- Silná a jedinečná hesla, která pro různé učty.",
      "- Zabezpečení zařízení: antivirový software, Avast, AVG, ESET, McAfee, BitDefender, Norton, Microsoft Defender a pravidelná a ktualizace operačního systému.",
      "- Bezpečná komunikace, dávat pozor na phishingové útoky a neklikat na podezřelé odkazy nebo přílohy.",
      "- Ochrana osobních údajů, sdílet co nejméně osobních údajů, neukládat hesla, nezadávat osobní údaje na podezřelých stránkách.",
      " ",
      "&lArgumentační fauly:",
      "- jsou chyby v argumentaci, které mohou být použity k manipulaci nebo klamání lidí.",
      "1. Ad hominem - útok na osobu místo jejího argumentu.",
      "2. Falešné dilema - dávání na výběr pouze z extrémních možností, i když jsou na výběr i jiné možnosti.",
      "3. Šikmá plocha - tvrzení, že pokud něco uděláme, tak to budou následovat i další kroky, které nechceme bez důkazů.",
      "4. Argument z nevědomosti - tvrzení, že je něco pravda, protože není důkaz, že by to pravda nebyla.",
      "5. Apel na autoritu - tvrezní, že něco řekla vyšší autorita, i když v tom nemusí být znalá a mít odborné vědomosti.",
      "6. Apel na emoce - použítí emocí místo logických argumentů k přesvědčení publika, vyvolání strachu, hněvu, smutky, radosti.",
      " ",
      "&lDezinformace:",
      "- záměrné šíření nepravdivých informací s cílem uškodit nebo mást",
      "- rozlišujeme je od misinformací, které jsou chybné nechtěně!!",
      "- dezinformace často využívají argumentační fauly a mohou být nebezpečné, protože můžou ovlivnit veřejné mínění a rozhodování.",
    ],
  },
  {
    id: 2,
    question: "Zabezpečení dat, dokumentů, zařízení a jiných aktivit na PC",
    answer: [
      "&lZabezpečení dat:",
      "- zahrnuje ochranu citlivých informací během jejich celého životního cyklu. To zahrnuje:",
      "1. Zálohování dat - pravidelné zálohování dat, aby byla chráněna před ztrátou, či poškozením, nejlépe pravidlem 3-2-1 (3: tři kopie dat, 2: na dvou různých médiích (flash disk, HDD, SSD...), 1: jedna kopie mimo pracoviště před hrozbami).",
      "2. Šifrování dat - použití šifrovacích technologií k ochraně dat před neoprávěným přístupem.",
      "3. Řízení přístupu - nastavení oprávnění a přístupových práv k datům, aby k nim měli přístup pouze oprávnění uživatelé.",
      " ",
      "&lZabezpečení dokumentů:",
      "- zahrnuje ochranu dokumentů před neoprávěným přístupem, ztrátou nebo poškozením. To zahrnuje:",
      "1. Ochrana heslem - použití hesla k ochraně dokumentů před neoprávněným přístupem, např. v MS Wordu, Excelu, PDF... (bankovní výpisy jsou zaheslované)",
      "2. Digitální podpis - použití digitálního podpisu k ověření autenticity dokumentu a jeho obsahu.",
      "3. Klasifikace dokumentů - označení a seřazení dokumentů podle jejich citlivosti a nastavení přístupových práv",
      " ",
      "&lZabezpečení zařízení:",
      "- zahrnuje ochranu zařízení",
      "1. Aktualizace softwaru - pravidelná aktualizace operačního systému a aplikací, aby byly chráněny před známými hrozbami. (v updatech se přidávají nové funkce proti novým hrozbám)",
      "2. Antivirový software - použití antivirového programu proti škodlivému softwaru (malware, ransomware, spyware, adware...)",
      "3. Firewall - použití firewallu k ochraně zařízení před neoprávněným přístupem z internetu.",
      " ",
      "&lZabezpečení aktivit na PC:",
      "- zahrnuje ochranu aktivit na PC",
      "1. Bezpečné prohlížení internetu - používání bezpečných prohlížečů a rozšíření, které nás chrání před phishingem a malwarem.",
      "2. Bezpečné stahování - stahování souborů pouze z důvěryhodných zdrojů a ověření integrity souboru.",
      "3. Bezpečné připojení k internetu - použití VPN k šifrování internetového provozu a ochraně soukromí.",
      "4. Bezpečné e-maily - opatrnost při otevírání e-mailů a příloh, neklikání na podezřelé odkazy.",
      "5. Správa hesel - použití spolehlivého správce hesel pro generování a ukládání silných a jedinečných hesel.",
      "6. Dvoufaktorová autentizace - použití dvoufaktorového ověření k ochraně účtů před neoprávěným přístupem.",
    ],
  },
  {
    id: 3,
    question: "Zpracování dat v Excelu",
    answer: [
      "Excel je tabulkový procesor, který slouží k zpracování dat, vytváření tabulek, grafů, vzorců a funkcí.",
      "Ukládá data do buněk, které jsou označeny písmenem a číslem (např. A1, B2, C3, ...).",
      "V Excelu můžeme provádět různé operace s daty, jako je:",
      "&l1. Základní operace s daty:",
      " - vkládání dat do buněk, úprava hodnot a formátování buněk",
      " - filtrace pomocí filtrů, zobrazení pouze relevantních dat podle kritérií",
      "&l2. Funkce a vzorce:",
      " - Základní funkce - SUM, AVERAGE, MIN, MAX, COUNT",
      " - Pokročilejší funkce - IF, SUMIF, COUNTIF, INDEX, MATCH, VLOOKUP, HLOOKUP",
      "&l3. Kontingenční tabulky:",
      " - tyto tabulky slouží k rychlé sumarizaci a analýze velkého množství dat",
      " - lze je snadno upravovat, filtrovat k získání specifických informací",
      "&l4. Vizualizace dat:",
      " - převedení dat do grafické podoby, vizualizujeme pomocí:",
      " - Grafy: sloupcové, čárové, koláčové, spojnicové, kartézský graf, histogram, tabulka, mapa, stromový graf...",
      " - Podmíněné formátování: zvýraznění buněk podle podmínek",
    ],
  },
  {
    id: 4,
    question: "Multidimenzionální model a klasifikace dat",
    answer: [
      "&lMultidimenzionální model:",
      "- je model datového skladu, který zahrnuje více dimenzí, než tradiční relační databáze.",
      "- zahrnuje fakta a dimenze",
      "- FAKTA (můžeme je průměrovat, počítat, sumovat)",
      "- DIMENZE (kategorie, podle kterých data analyzujeme, produkt, čas, geografická poloha)",
      "&lKlasifikace dat:",
      "- je proces třídění dat do skupin nebo kategorií podle určitých kritérií",
    ],
  },
  {
    id: 5,
    question: "Tvorba datový struktur pomocí jazyka DAX",
    answer: [
      "&lCo je to DAX? (Data Analysis Expressions)",
      "- klíčový nástroj pro práci s datovými strukturami v Power BI, SQL Server Analysis Services a Power Pivot v Excelu",
      "- je to programovací jazyk od Microsoftu",
      "- je podobný Excelovým funkcím, ale je mnohem výkonnější a flexibilnější",
      "- byl navržen pro manipulaci s daty, výpočty a metriky",
      "- Má mnoho funkcí: SUM, AVERAGE, MIN/MAX, ABS, PI, ROUND, CALCULATE, DISTINCT, COUNT...",
      "- Syntax: název_funkce = výraz",
      "- Příklad: Total Sales = SUM('Sales'[SalesAmount])",
      "- vytváříme s ním míry, které můžeme vizualizovat, a které se mění podle filtrů a úprav",
    ],
  },
  {
    id: 6,
    question: "Vizualizační metody k řešení obchodních modelů",
    answer: [
      "- Nástroje pro řešení obchodních modelů jsou nástroje, které usnadňují pochopení, návrh a analýzu podnikových strategií",
      "- Pomáhají při plánování a řízení byznysu tím, že informace a myšlenky vizualizují do srozumitelných formátů, což usnadňuje komunikaci v týmu",
      " ",
      "&lBusiness Model Canvas:",
      "- jedna z nejpopulárnějších metod pro vizualizaci obchodního modelu",
      " ",
      "&lSWOT analýza:",
      "- metoda pro analýzu silných a slabých stránek podniku, příležitostní a hrozeb",
      "- díky vizuálnímu rozdělení do čtyř segmentů umožňuje zmapovat vnitřní a vnější faktory ovlivňující podnik",
      " ",
      "&lMapa zákaznické cesty (Customer Journey Map):",
      "- zobrazuje kroky a zkušenosti, kterými zákazník prochází od prvního kontaktu s produktem až po jeho nákup",
      "- pomáhá identifikovat klíčové body kontaktu a zlepšit zákaznický zážitek",
      " ",
      "&lMind Map (Myšlenková mapa):",
      "- slouží k brainstormingu a strukturování informací",
    ],
  },
  {
    id: 7,
    question: "Datové formáty (API, JSON, Databáze)",
    answer: [
      "- Datové formáty slouží k přenosu dat mezi různými systémy nebo aplikacemi",
      "&lAPI (Application Programming Interface)",
      "- datové formáty jsou často používány pro komunikaci mezi aplikacemi (API)",
      "- je to sada knihoven, protokolů a nástrojů, které umožňují komunikaci mezi různými aplikacemi, př.: číšník v restauraci je jako API, který přenáší objednávku od zákazníka (klienta) ke kuchaři (serveru)",
      " ",
      "&l1. JSON (JavaScript Object Notation)",
      "- datový formát, který je snadno čitelný pro lidi i počítače",
      "- syntaxe je ve formě klíč: hodnota, objekty, pole",
      "[+] snadno čitelný pro člověka i stroj, malá velikost souboru, podpora v mnoha programovacích jazycích",
      "[-] podporuje pouze základní datové typy",
      " ",
      "&l2. XML (Extensible Markup Language)",
      "- datový formát ve formě značek (tagů jako HTML)",
      "- syntaxe je ve formě značek, atributů, elementů jako HTML: <tag atribut='hodnota'>text</tag>",
      "[+] široká použitelnost, snadná čitelnost pro člověka i stroj, flexibilita (vlastní značky), kompatibilita s různými systémy, jazyky",
      "[-] složitější syntaxe, větší velikost souboru",
      " ",
      "&l3. TXT (Textový soubor)",
      "- neformátovaný textový soubor obsahující pouze text",
      "[+] malá velikost souboru",
      "[-] nevhodný pro strukturovaná data, špatně kontrolovatelný",
      " ",
      "&l4. XLSX (Excelový soubor)",
      "- komprimovaný soubor s tabulky a daty, formátované do buněk",
      "[+] snadno čitelný pro člověka, podpora vzorců a funkcí, grafy, obrázky",
      "[-] velká velikost souboru",
      " ",
      "&l5. CSV (Comma-Separated Values)",
      "- textový soubor, kde jsou data oddělená čárkou",
      "[+] jednoduchý formát, malá velikost souboru, snadno čitelný pro člověka i stroj",
      "[-] žádná hierarchická struktura, nevhodný pro složitější data",
    ],
  },
  {
    id: 8,
    question: "SŘBD (Systém řízení báze dat)",
    answer: [
      "- je známý taky jako Database Management System",
      "- je to software, který umožňuje správu a údržbu databází",
      " ",
      "&lZákladní funkce SŘBD:",
      "1. Tvorba a správa databází - umožňuje vytvářet, upravovat a mazat databáze a jejich strukturu",
      "2. Manipulace s daty - poskytuje nástroje pro práci s daty (kopírování, vkládání, aktualizace...)",
      "3. Ukládání dat - umožňuje ukládat velké množství dat",
      "4. Zajišťění integrity - definuje pravidla pro zajištění konzistence a správnosti dat (primární a cizí klíče)",
      "...",
      " ",
      "&lTypy SŘBD:",
      "1. Relační model - data jsou uložena v tabulkách, které jsou propojeny klíči, je nejpoužívanější (např. MySQL, SQL Server)",
      "2. Multidimenzionální model - data jsou uložena ve více dimenzích (např. Power BI)",
      "...",
      " ",
      "&lPříklady SŘBD:",
      "1. MySQL - open-source relační databázový systém",
      "2. Microsoft SQL Server - relační databázový systém od Microsoftu",
      "3. SQLite - open-source relační databázový systém",
      "4. Oracle - relační databázový systém od Oracle",
      "5. PostgreSQL - open-source relační databázový systém",
      "...",
    ],
  },
  {
    id: 9,
    question: "Datové modelování",
    answer: [],
  },
  {
    id: 10,
    question: "SQL – DDL (Data Definition Language)",
    answer: [
      "&l- příkazy pro definici a správu databázové struktury",
      "- PRIMARY KEY - jedinečný identifikátor řádku v tabulce",
      "- existuje mnoho příkazů:",
      "1. CREATE TABLE = vytvoří novou tabulku (CREATE TABLE studenti (id INT(100) PRIMARY KEY, ...);)",
      "2. ALTER TABLE = změní strukturu tabulky, např. přidání nového sloupce (ALTER TABLE studenti ADD jmeno VARCHAR(255);)",
      "3. DROP TABLE = smaže tabulku a všechna její data (DROP TABLE studenti;)",
      "4. TRUNCATE TABLE = smaže všechna data z tabulky, ale tabulka zůstane (TRUNCATE TABLE studenti;)",
      "5. RENAME TABLE = přejmenuje tabulku (RENAME TABLE stare_jmeno TO nove_jmeno;)",
    ],
  },
  {
    id: 11,
    question: "SQL – DML (Data Manipulation Language)",
    answer: [
      "&l- příkazy pro manipulaci s daty v databázi",
      "1. SELECT = vybere data z tabulky (SELECT jmeno, vek FROM studenti WHERE vek > 20;",
      "2. INSERT INTO = používá se pro vložení nového řádku (INSERT INTO studenti (id, jmeno, vek) VALUES (1, 'Petr', 25);",
      "3. UPDATE = aktualizuje data v tabulce (UPDATE studenti SET vek = 26 WHERE id = 1;)",
      "4. DELETE = smaže data z tabulky (DELETE FROM studenti WHERE id = 1;)",
    ],
  },
  {
    id: 12,
    question: "SQL – JOIN",
    answer: [
      "SQL Join je nám řádky v tabulkách z relační databáze podle kritérií, které určíme.",
      "Máme několik typů Joinů:",
      "&l1. INNER JOIN - spojí pouze řádky, které mají shodné hodnoty v obou tabulkách, žádné NULL hodnoty",
      "SELECT Orders.OrderID, Customers.CustomerName FROM Orders INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID;",
      " ",
      "&l2. LEFT JOIN - spojí všechny řádky z levé tabulky a shodné řádky z pravé tabulky, pokud v pravé tabulce chybí hodnota, bude NULL",
      "SELECT Customers.CustomerName, Orders.OrderID FROM Customers LEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID;",
      " ",
      "&l3. RIGHT JOIN - spojí všechny řádky z pravé tabulky a shodné řádky z levé tabulky, pokud v levé tabulce chybí hodnota, bude NULL",
      "SELECT Orders.OrderID, Customers.CustomerName FROM Orders RIGHT JOIN Customers ON Orders.CustomerID = Customers.CustomerID;",
      " ",
      "&l4. FULL JOIN - spojí všechny řádky z obou tabulek, pokud chybí hodnota, bude NULL",
      "SELECT Customers.CustomerName, Orders.OrderID FROM Customers FULL JOIN Orders ON Customers.CustomerID = Orders.CustomerID;",
    ],
  },
  {
    id: 13,
    question:
      "Počítačová grafika - principy, SW, formáty, barevné modely, terminologie - rozlišení, hloubka barev",
    answer: [
      "Dělí se nám na: BITMAPOVOU a VEKTOROVOU",
      " ",
      "&lBitmapová grafika:",
      "- je tvořena z pixelů, které mají svou barvu a polohu",
      "- je ideální pro fotografie a detailní obrázky",
      "- při zvětšení se zhoršuje kvalita",
      "- Softwary: Adobe Photoshop, Photopea.com, GIMP, Paint.NET",
      "- Formáty: JPEG, PNG, GIF, PSD, TIFF",
      " ",
      "&lVektorová grafika:",
      "- obrzek je tvořen křivkami",
      "- je ideální pro loga, ikony, fonty, ilustrace",
      "- libovolné zvětšování bez ztráty kvality",
      "- Softwary: Adobe Illustrator, Inkscape, CorelDRAW",
      "- Formáty: SVG, PDF, EPS (PostScript), AI, CDR",
      " ",
      "&lBarevné modely:",
      "- RGB (červená, zelená, modrá) - pro zobrazení na monitorech v digitální formě, barvy jsou tvořeny kombinací těchto tří barev",
      "- CMYK (cyan, magenta, yellow, key - černá) - používá se pro tisk, barvy jsou tvořeny kombinací těchto čtyř barev",
      "- HSL (hue, saturation, value) - model založený na odstínech, sytosti a jasu",
      "&lTerminologie:",
      "- Rozlišení - počet pixelů v obrázku, čím vyšší rozlišení, tím lepší kvalita, udává se jako šířka x výška (např. 1920x1080)",
      "- Hloubka barev - počet barev, které může zobrazit, udává se v bitech, např. 8 bitů = 2^8 = 256 barev",
    ],
  },
  {
    id: 14,
    question:
      "Digitální fotografie, části a parametry dig. fotoaparátu, základní kompozice obrazu, autorská práva",
    answer: [
      "Digitální fotografie je založena na digitálním snímači, který zachycuje světlo a převádí ho na elektrický signál, který se ukládá do paměti.",
      "Analógová fotografie se vyvolává.",
      " ",
      "&lČásti:",
      "- Objektiv = skládá se z čoček, které zaostřují světlo na snímač",
      "- Snímač obrazu = převádí světlo na elektrický signál, dělí se na CCD a CMOS",
      "- Procesor = zpracovává data ze snímače a převádí jej na digitální obraz",
      "- Paměť = ukládá digitální fotografie",
      "- Displej = zobrazuje náhled fotografie",
      "- Blesk = dodatečné osvětlení",
      " ",
      "&lParametry:",
      "- Rozlišení = počet pixelů, které dokáže fotoaparát zachytit, udává se v megapixelech, př. 12 Mpx",
      "- Citlivost ISO = ovlivňuje citlivost snímače na světlo, čím vyšší ISO, tím více světla, ale více šumu",
      "- Clona = ovlivňuje množství světla, které vstupuje do fotoaparátu, čím menší světlo, tím větší clona",
      "- Expoziční čas = doba, po kterou je snímač osvětlen, ovlivňuje pohyb, delší čas = rozmazaný pohyb",
      "- Ohnisková vzdálenost = vzdálenost mezi objektivem a snímačem, ovlivňuje zorný úhel",
      " ",
      "&lKompozice obrazu:",
      "- Pravidlo třetin = rozdělení obrazu pomocí dvou vodorovných a dvou svislých čar na 9 částí, důležité body umístíme na průsečíky",
      "- Zlatý řez = poměr 1:0,618, dělíme obraz, tvar ulity",
      "- Diagonála = vedení pohledu diváka diagonální linií",
      "- Rámování = vytvoření rámu kolem objektu",
      "- Perspektiva = využití hloubky a perspektivy",
      "- Symetrie = vyvážení obrazu",
      " ",
      "&lAutorská práva:",
      "- ochrana práv autora k dílu, které vzniká okamžikem jeho vytvoření",
      "- autor má právo rozhodovat o díle a jak bude použito, může dílo prodat nebo licencovat",
      "- bez svolení autora není legální dílo kopírovat, distribuovat, upravovat nebo vydávat",
    ],
  },
  {
    id: 15,
    question:
      "Audio – digitalizace, formáty a kodeky souborů, parametry audio souborů, SW, výpočty",
    answer: [
      "Digitalizace audia je proces převodu z analogového signálu na digitální podoby. Tento proces zahrnuje vzorkování, což zanmená zaznamenání hodnoty v pravidelných intervalech, a kvantování, což znamená převod analogové hodnoty na digitální.",
      " ",
      "&lFormáty audia:",
      "- WAV = bezztrátový formát, uchovává kvalitu zvuku",
      "- FLAC = bezztrátový formát, komprimuje data, ale zachovává kvalitu",
      "- MP3 = ztrátový formát, komprimuje data odstraněním méně slyšitelných částí, ale zhoršuje kvalitu",
      "- AAC = ztrátový formát, nabízí lepší kvalitu než MP3 při stejném datovém toku",
      " ",
      "&lKodeky audia:",
      "- kodek je algoritmus, který komprimuje a dekomprimuje audio soubory",
      "- ztrátové soubory, jako MP3 a AAC, odstraňují části zvuku, které nejsou slyšitelné = sníží velikost souboru",
      "- bezztrátové soubory, jako WAV a FLAC, zachovávají svou kvalitu zvuku = vyšší velikost",
      "- FLAC (Free Lossless Audio Codec) = bezztrátový formát, zachovává kvalitu",
      "- MP3 (MPEG-1 Audio Layer 3) = nejpopulárnější ztrátový formát, komprimuje data",
      "- AAC (Advanced Audio Coding) = vylepšený formát MP3, lepší kvalita",
      " ",
      "&lParametry audia:",
      "- Vzorkovací frekvence = počet vzorků za sekundu (např. 44,1 kHz pro CD kvalitu)",
      "- Bitová hloubka = počet bitů na vzorek (např. 16 bitů pro CD kvalitu)",
      "- Datový tok (bitrate) = množství dat přenesených za sekundu (v kbps) (např. 128 kbps pro MP3)",
      "- Kanály = počet zvukových kanálů (mono - 1, stereo - 2)",
      " ",
      "&lSoftware:",
      "- Audacity = open-source editor pro nahrávání a úpravu zvuku",
      "- FL Studio = software pro tvoru hudby a produkci",
      "- Adobe Audition = profesionální software pro nahrávání a úpravu zvuku",
      " ",
      "&lVýpočty:",
      "- Bitrate = vzorkovací frekvence x bitová hloubka x kanály",
      "- Velikost souboru = délka souboru x bitrate / 8",
    ],
  },
  {
    id: 16,
    question:
      "Video – kontejnerové formáty a kodeky souborů, parametry video souborů, SW, výpočty",
    answer: [
      "&lKontejnerové formáty:",
      "- MP4 = populární formát pro video a audio, podporuje různé kodeky",
      "- AVI = starší formát pro video a audio, podporuje různé kodeky",
      "- MKV = moderní formát pro video, audio a téměř jakýkoliv typ kodeku",
      "- MOV = format pro video a audio od Apple, používaný v profesionální produkci",
      " ",
      "&lKodeky videa:",
      "- kodek je algoritmus, který komprimuje a dekomprimuje video a audio data",
      "- H.264 = ztrátový kodek, velmi efektivní, používá se pro streamování a ukládání videa",
      "- H.265 = vylepšený H.264, lepší komprese a kvalita",
      "- VP9 = kodek od Google, open-source, často používaný na YouTube",
      "- AV1 = nový open-source kodek, nabízí vynikající kompresi a kvalitu",
      " ",
      "&lParametry videa:",
      "- Rozlišení = počet pixelů v obrazu (např. 1920x1080 pro Full HD)",
      "- Snímková frekvence (FPS) = počet snímků za sekundu (např. 30 FPS, 24 FPS pro filmy)",
      "- Bitrate = množství dat přenesených za sekundu (v kbps) (např. 5 Mbps pro HD)",
      "- Poměr stran = poměr šířky a výšky obrazu (např. 16:9, 4:3, 16:10)",
      " ",
      "&lSoftware:",
      "- Vegas Pro = nástroj pro profesionální úpravu videa",
      "- Adobe Premiere Pro = profesionální video editor od Adobe",
      "- Final Cut Pro = nástroj pro úpravu videa od Apple",
      "- iMovie = jednoduchý video editor pro Mac",
      "- HandBrake = open-source konvertor videa",
      " ",
      "&lVýpočty:",
      "- Velikost souboru = bitrate x délka v sekundách / 8",
    ],
  },
  {
    id: 17,
    question: "3D grafika – princip, kartézský systém, SW, 3D formáty souborů",
    answer: [
      "- 3D grafika se zaměřuje na vytváření trojrozměrných modelů, které umožňují vizualizovat objekty ve třech osách: x, y, z",
      " ",
      "&lKartézský systém:",
      "- souřadnicový systém, který se skládá ze tří os: x, y, z",
      "- 2D se skládá ze čtyř kvadrantu, 3D se skládá z 8 oktantů",
      " ",
      "&lSoftware:",
      "- AutoCAD = software primárně pro strojaře na součástky",
      "- ArchiCAD = software primárně pro architekty na návrh budov",
      "- Inventor = universální software pro technické dokumentace a výkresy",
      "- Catia = software pro modelování i fyzické simulace",
      "- Blender = software pro modelování, animaci, rendering, střih videa, odvozen od Maya",
      "- Maya = software pro modelování",
      "- 3DS Max = software pro modelování, animaci",
      "- Cinema 4D = software pro modelování, animaci, rendering",
      "- SolidWorks = software pro modelování, býval pro nábytkáře, dnes universální",
    ],
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
    answer: [""],
  },
  {
    id: 21,
    question: "Základní pojmy z elektrotechniky",
    answer: [""],
  },
  {
    id: 22,
    question: "Periferní zařízení pro IoT",
    answer: [""],
  },
  {
    id: 23,
    question: "Zpracování a vizualizace dat v IoT",
    answer: [""],
  },
  {
    id: 24,
    question: "Přenosové sítě, protokoly a sběrnice pro IoT",
    answer: [""],
  },
  {
    id: 25,
    question: "Programování IoT zařízení",
    answer: [""],
  },
];

export const vap_questions = [
  {
    id: 1,
    question: "Algoritmizace",
    answer: [
      "- Algoritmizace je proces tvorby algoritmů.",
      "- Algoritmus je přesný postup k řešení problému nebo úlohy.",
      " ",
      "&lVlastnosti algoritmu:",
      "    - Konečnost - algoritmus musí skončit po konečném počtu kroků",
      "    - Jednoznačnost - algoritmus musí být přesně definován",
      "    - Efektivnost - algoritmus musí být efektivní, tzn. rychlý a úsporný",
      "    - Vstupy - algoritmus by měl být použitelný pro jeden či více vstupů",
      "    - Výstupy - algoritmus by měl poskytnout alespoň jeden výstup",
      " ",
      "&lZákladní kroky algoritmizace:",
      "    - Analýza problému - pochopení problému a jeho požadavků",
      "    - Návrh algoritmu - vytvořit přesný popis kroků, které je třeba provést",
      "    - Zápis algoritmu - algoritmus lze zapsat v různých formách",
      "    - Testování a ladění - ověření správnosti algoritmu a jeho úprava",
      "    - Optimalizace - zlepšení efektivity, rychlosti algoritmu",
      " ",
      "&lFormy zápisu algoritmů:",
      "    - Programovací algoritmy - algoritmy pro programování",
      "    - Slovní algoritmy - algoritmy v textové podobě",
      "    - Grafické algoritmy - algoritmy v grafické podobě",
      "    - Pseudokód - zjednodušený zápis algoritmu",
      "    - Flowchart - diagram reprezentující algoritmus",
      " ",
      "&lTypy algoritmů:",
      "    - Sekvenční - postupné provádění kroků, jeden po druhém",
      "    - Podmíněný - větvení programu podle podmínky",
      "    - Cyklické algoritmy - opakování kódu",
      " ",
      "&lPříklady algoritmů:",
      "    - Řazení (bubble sort, quick sort) - uspořádání prvků v poli",
      "    - Vyhledávání (binární) - nalezení prvku v poli",
      "    - Euklidův algoritmus - hledání největšího společného dělitele",
      "    - Fibonacciho posloupnost - posloupnost čísel",
      " ",
      "- Vlastnosti algoritmu",
      "- Zápis algoritmu",
      "- Vývojové diagramy – základní značky, základní řídící struktury",
    ],
  },
  {
    id: 2,
    question: "Jazyk Java",
    answer: [
      "- Java – objektově orientovaný jazyk – vlastnosti Javy",
      "- multiplatformnost",
      "- JVM",
      "- Čtyři základní platformy",
      "- JRE/SDK",
      "- Deklarace proměnných, konstant",
      "- Datové typy, operátory, identifikátory",
      "- Vstup/výstup z terminálu",
      "- Komentáře, dokumentace",
    ],
  },
  {
    id: 3,
    question: "Java - řídící struktury",
    answer: ["- Větvení programu, logické spojky a operátory", "- cykly"],
  },
  {
    id: 4,
    question: "Java - objekty",
    answer: [
      "- Základní pojmy – třída, instance, atribut, metoda, konstruktor, …",
      "- Práce s instancí",
      "- Kvalifikace atributů a metod",
      "- Deklarace konstruktoru, metod (+ přetěžování), atributů",
    ],
  },
  {
    id: 5,
    question: "Java - pole, kolekce",
    answer: [
      "- Jednorozměrné pole",
      "- Kolekce (ArrayList, HashSet) - metody compareTo(Object o), equals(Object o), třída Collections a její metody",
    ],
  },
  {
    id: 6,
    question: "Java - soubory",
    answer: [
      "- Třída File – práce s adresáři a soubory",
      "- Proudy znaků/bajtů",
      "- Čtení dat ze souboru",
      "- Zápis dat do souboru",
      "- Třídy vlastností: BufferedWriter, PrintWriter, …",
      "- Třída Scanner",
    ],
  },
  {
    id: 7,
    question: "Java - vlastnosti OOP (dědičnost, zapouzdření, polymorfismus)",
    answer: [
      "- dědičnost - vytvoření potomka, klíčové slovo super, metody potomka, překrývání metod",
      "- zapouzdření - přístup k datům objektu pouze na základě jeho metod (přístupové metody)",
      "- polymorfismus - dědičnost, abstraktní třídy, rozhraní",
    ],
  },
  {
    id: 8,
    question: "Java-GUI - knihovny awt a swing",
    answer: [
      "- tvorba formuláře – komponenty, layouty",
      "- obsluha událostí – princip, vnitřní třídy",
    ],
  },
  {
    id: 9,
    question: "Java grafika, práce s databází",
    answer: [
      "- třída Graphics, Graphics2D - grafická primitiva a jejich vykreslení",
      "- připojení k databázi, tvorba a spuštění dotazu, zpracování výsledku",
    ],
  },
  {
    id: 10,
    question: "Java FX",
    answer: [
      "- Vlastnosti, struktura projektu, Scene Builder",
      "- FXML",
      "- Základní kontejnery, prvky",
      "- Postup při tvorbě aplikace",
    ],
  },
  {
    id: 11,
    question: "Android - XML, architektura aplikace, tvorba aplikace",
    answer: [
      "- XML – element, atribut, způsob zápisu",
      "- Architektura projektu v AndroidStudiu (java, layout, drawable, ….)",
      "- Části aplikace – aktivita, poskytovatel obsahu, ….",
      "- Postup při tvorbě aplikace – základní rozvržení, komponenty, metoda onClick(…)",
    ],
  },
  {
    id: 12,
    question: "Testování, výjimky",
    answer: [
      "- Význam testování",
      "- Unit testy",
      "- Rozdělení výjimek, zachycení a ošetření výjimky",
    ],
  },
  {
    id: 13,
    question: "Verzování aplikaci",
    answer: [],
  },
  {
    id: 14,
    question: "HTML",
    answer: [],
  },
  {
    id: 15,
    question: "CSS",
    answer: [],
  },
  {
    id: 16,
    question: "SEO",
    answer: [],
  },
  {
    id: 17,
    question: "Jazyk JavaScript",
    answer: [],
  },
  {
    id: 18,
    question: "JavaScript - DOM",
    answer: [],
  },
  {
    id: 19,
    question: "JavaScript-události, funkce",
    answer: [],
  },
  {
    id: 20,
    question: "Jazyk PHP",
    answer: [],
  },
  {
    id: 21,
    question: "PHP - objekty",
    answer: [],
  },
  {
    id: 22,
    question: "PHP - přenos dat (GET, POST, SESSION, COOKIES)",
    answer: [],
  },
  {
    id: 23,
    question: "PHP - bezpečnost aplikací",
    answer: [],
  },
  {
    id: 24,
    question: "PHP - externí data (soubory, databáze)",
    answer: [],
  },
  {
    id: 25,
    question: "Frameworky při vývoji webu",
    answer: [],
  },
];
