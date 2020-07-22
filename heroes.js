const HEROES = [
    {
        id: "achates",
        name: "Achates"
    },
    {
        id: "adlay",
        name: "Adlay"
    },
    {
        id: "adventurer_ras",
        name: "Adventurer Ras"
    },
    {
        id: "ains",
        name: "Ains"
    },
    {
        id: "aither",
        name: "Aither"
    },
    {
        id: "alencia",
        name: "Alencia"
    },
    {
        id: "alexa",
        name: "Alexa"
    },
    {
        id: "all_rounder_wanda",
        name: "All-Rounder Wanda"
    },
    {
        id: "ambitious_tywin",
        name: "Ambitious Tywin"
    },
    {
        id: "angelic_montmorancy",
        name: "Angelic Montmorancy"
    },
    {
        id: "angelica",
        name: "Angelica"
    },
    {
        id: "apocalypse_ravi",
        name: "Apocalypse Ravi"
    },
    {
        id: "aramintha",
        name: "Aramintha"
    },
    {
        id: "arbiter_vildred",
        name: "Arbiter Vildred"
    },
    {
        id: "armin",
        name: "Armin"
    },
    {
        id: "arowell",
        name: "Arowell"
    },
    {
        id: "assassin_cartuja",
        name: "Assassin Cartuja"
    },
    {
        id: "assassin_cidd",
        name: "Assassin Cidd"
    },
    {
        id: "assassin_coli",
        name: "Assassin Coli"
    },
    {
        id: "auxiliary_lots",
        name: "Auxiliary Lots"
    },
    {
        id: "azalea",
        name: "Azalea"
    },
    {
        id: "baal_and_sezan",
        name: "Baal & Sezan"
    },
    {
        id: "baiken",
        name: "Baiken"
    },
    {
        id: "basar",
        name: "Basar"
    },
    {
        id: "bask",
        name: "Bask"
    },
    {
        id: "batisse",
        name: "Batisse"
    },
    {
        id: "bellona",
        name: "Bellona"
    },
    {
        id: "benevolent_romann",
        name: "Benevolent Romann"
    },
    {
        id: "blaze_dingo",
        name: "Blaze Dingo"
    },
    {
        id: "blood_blade_karin",
        name: "Blood Blade Karin"
    },
    {
        id: "blood_moon_haste",
        name: "Blood Moon Haste"
    },
    {
        id: "butcher_corps_inquisitor",
        name: "Butcher Corps Inquisitor"
    },
    {
        id: "captain_rikoris",
        name: "Captain Rikoris"
    },
    {
        id: "carmainerose",
        name: "Carmainerose"
    },
    {
        id: "carrot",
        name: "Carrot"
    },
    {
        id: "cartuja",
        name: "Cartuja"
    },
    {
        id: "cecilia",
        name: "Cecilia"
    },
    {
        id: "celeste",
        name: "Celeste"
    },
    {
        id: "celestial_mercedes",
        name: "Celestial Mercedes"
    },
    {
        id: "celine",
        name: "Celine",
    },
    {
        id: "cerise",
        name: "Cerise"
    },
    {
        id: "cermia",
        name: "Cermia"
    },
    {
        id: "challenger_dominiel",
        name: "Challenger Dominiel"
    },
    {
        id: "champion_zerato",
        name: "Champion Zerato"
    },
    {
        id: "chaos_inquisitor",
        name: "Chaos Inquisitor"
    },
    {
        id: "chaos_sect_axe",
        name: "Chaos Sect Axe"
    },
    {
        id: "charles",
        name: "Charles"
    },
    {
        id: "charlotte",
        name: "Charlotte"
    },
    {
        id: "chloe",
        name: "Chloe"
    },
    {
        id: "church_of_ilryos_axe",
        name: "Church of Ilryos Axe"
    },
    {
        id: "cidd",
        name: "Cidd"
    },
    {
        id: "clarissa",
        name: "Clarissa"
    },
    {
        id: "coli",
        name: "Coli"
    },
    {
        id: "commander_lorina",
        name: "Commander Lorina"
    },
    {
        id: "corvus",
        name: "Corvus"
    },
    {
        id: "crescent_moon_rin",
        name: "Crescent Moon Rin"
    },
    {
        id: "crimson_armin",
        name: "Crimson Armin"
    },
    {
        id: "crozet",
        name: "Crozet"
    },
    {
        id: "dark_corvus",
        name: "Dark Corvus"
    },
    {
        id: "desert_jewel_basar",
        name: "Desert Jewel Basar"
    },
    {
        id: "destina",
        name: "Destina"
    },
    {
        id: "diene",
        name: "Diene"
    },
    {
        id: "dingo",
        name: "Dingo"
    },
    {
        id: "dizzy",
        name: "Dizzy"
    },
    {
        id: "dominiel",
        name: "Dominiel"
    },
    {
        id: "doris",
        name: "Doris"
    },
    {
        id: "eaton",
        name: "Eaton"
    },
    {
        id: "elena",
        name: "Elena"
    },
    {
        id: "elson",
        name: "Elson"
    },
    {
        id: "enott",
        name: "Enott"
    },
    {
        id: "elphelt_valentine",
        name: "Elphelt Valentine"
    },
    {
        id: "faithless_lidica",
        name: "Faithless Lidica"
    },
    {
        id: "falconer_kluri",
        name: "Falconer Kluri"
    },
    {
        id: "fallen_cecilia",
        name: "Fallen Cecilia"
    },
    {
        id: "fighter_maya",
        name: "Fighter Maya"
    },
    {
        id: "free_spirit_tiera",
        name: "Free Spirit Tiera"
    },
    {
        id: "furious",
        name: "Furious"
    },
    {
        id: "general_purrgis",
        name: "General Purrgis"
    },
    {
        id: "giga_phantasma",
        name: "Giga-Phantasma"
    },
    {
        id: "gloomyrain",
        name: "Gloomyrain"
    },
    {
        id: "guider_aither",
        name: "Guider Aither"
    },
    {
        id: "gunther",
        name: "Gunther"
    },
    {
        id: "haste",
        name: "Haste"
    },
    {
        id: "hataan",
        name: "Hataan"
    },
    {
        id: "hazel",
        name: "Hazel"
    },
    {
        id: "helga",
        name: "Helga"
    },
    {
        id: "hurado",
        name: "Hurado"
    },
    {
        id: "iseria",
        name: "Iseria"
    },
    {
        id: "jecht",
        name: "Jecht"
    },
    {
        id: "jena",
        name: "Jena"
    },
    {
        id: "judge_kise",
        name: "Judge Kise"
    },
    {
        id: "judith",
        name: "Judith"
    },
    {
        id: "karin",
        name: "Karin"
    },
    {
        id: "kawerik",
        name: "Kawerik"
    },
    {
        id: "kayron",
        name: "Kayron"
    },
    {
        id: "ken",
        name: "Ken"
    },
    {
        id: "khawana",
        name: "Khawana"
    },
    {
        id: "khawazu",
        name: "Khawazu"
    },
    {
        id: "kikirat_v2",
        name: "Kikirat v2"
    },
    {
        id: "kiris",
        name: "Kiris"
    },
    {
        id: "kise",
        name: "Kise"
    },
    {
        id: "kitty_clarissa",
        name: "Kitty Clarissa"
    },
    {
        id: "kizuna_ai",
        name: "Kizuna Ai",
    },
    {
        id: "kluri",
        name: "Kluri"
    },
    {
        id: "krau",
        name: "Krau"
    },
    {
        id: "lena",
        name: "Lena"
    },
    {
        id: "leo",
        name: "Leo"
    },
    {
        id: "lidica",
        name: "Lidica"
    },
    {
        id: "lilias",
        name: "Lilias"
    },
    {
        id: "lilibet",
        name: "Lilibet"
    },
    {
        id: "little_queen_charlotte",
        name: "Little Queen Charlotte"
    },
    {
        id: "lorina",
        name: "Lorina"
    },
    {
        id: "lots",
        name: "Lots"
    },
    {
        id: "ludwig",
        name: "Ludwig"
    },
    {
        id: "luluca",
        name: "Luluca"
    },
    {
        id: "luna",
        name: "Luna"
    },
    {
        id: "maid_chloe",
        name: "Maid Chloe"
    },
    {
        id: "martial_artist_ken",
        name: "Martial Artist Ken"
    },
    {
        id: "mascot_hazel",
        name: "Mascot Hazel"
    },
    {
        id: "maya",
        name: "Maya"
    },
    {
        id: "mega_phantasma",
        name: "Mega-Phantasma"
    },
    {
        id: "melissa",
        name: "Melissa"
    },
    {
        id: "mercedes",
        name: "Mercedes"
    },
    {
        id: "mercenary_helga",
        name: "Mercenary Helga"
    },
    {
        id: "mirsa",
        name: "Mirsa"
    },
    {
        id: "mistychain",
        name: "Mistychain"
    },
    {
        id: "montmorancy",
        name: "Montmorancy"
    },
    {
        id: "mucacha",
        name: "Mucacha"
    },
    {
        id: "mui",
        name: "Mui",
    },
    {
        id: "nemunas",
        name: "Nemunas"
    },
    {
        id: "otillie",
        name: "Otillie"
    },
    {
        id: "pavel",
        name: "Pavel"
    },
    {
        id: "pearlhorizon",
        name: "Pearlhorizon"
    },
    {
        id: "purrgis",
        name: "Purrgis"
    },
    {
        id: "pyllis",
        name: "Pyllis"
    },
    {
        id: "ras",
        name: "Ras"
    },
    {
        id: "ravi",
        name: "Ravi"
    },
    {
        id: "ray",
        Name: "Ray"
    },
    {
        id: "remnant_violet",
        name: "Remnant Violet",
    },
    {
        id: "requiemroar",
        name: "Requiemroar"
    },
    {
        id: "researcher_carrot",
        name: "Researcher Carrot"
    },
    {
        id: "righteous_thief_roozid",
        name: "Righteous Thief Roozid"
    },
    {
        id: "rikoris",
        name: "Rikoris"
    },
    {
        id: "rima",
        name: "Rima"
    },
    {
        id: "rin",
        name: "Rin"
    },
    {
        id: "roaming_warrior_leo",
        name: "Roaming Warrior Leo"
    },
    {
        id: "roana",
        name: "Roana"
    },
    {
        id: "romann",
        name: "Romann"
    },
    {
        id: "roozid",
        name: "Roozid"
    },
    {
        id: "rose",
        name: "Rose"
    },
    {
        id: "ruele_of_light",
        name: "Ruele of Light"
    },
    {
        id: "sage_baal_and_sezan",
        name: "Sage Baal & Sezan"
    },
    {
        id: "schuri",
        name: "Schuri"
    },
    {
        id: "seaside_bellona",
        name: "Seaside Bellona"
    },
    {
        id: "serila",
        name: "Serila"
    },
    {
        id: "sez",
        name: "Sez"
    },
    {
        id: "shadow_rose",
        name: "Shadow Rose"
    },
    {
        id: "shooting_star_achates",
        name: "Shooting Star Achates"
    },
    {
        id: "sigret",
        name: "Sigret"
    },
    {
        id: "silk",
        name: "Silk"
    },
    {
        id: "silver_blade_aramintha",
        name: "Silver Blade Aramintha"
    },
    {
        id: "sinful_angelica",
        name: "Sinful Angelica"
    },
    {
        id: "sol",
        name: "Sol"
    },
    {
        id: "specimen_sez",
        name: "Specimen Sez"
    },
    {
        id: "specter_tenebria",
        name: "Specter Tenebria"
    },
    {
        id: "straze",
        name: "Straze"
    },
    {
        id: "surin",
        name: "Surin"
    },
    {
        id: "sven",
        name: "Sven"
    },
    {
        id: "tamarinne",
        name: "Tamarinne"
    },
    {
        id: "taranor_guard",
        name: "Taranor Guard"
    },
    {
        id: "taranor_royal_guard",
        name: "Taranor Royal Guard"
    },
    {
        id: "tempest_surin",
        name: "Tempest Surin"
    },
    {
        id: "tenebria",
        name: "Tenebria"
    },
    {
        id: "tera_phantasma",
        name: "Tera-Phantasma"
    },
    {
        id: "tieria",
        name: "Tieria"
    },
    {
        id: "troublemaker_crozet",
        name: "Troublemaker Crozet"
    },
    {
        id: "tywin",
        name: "Tywin"
    },
    {
        id: "vildred",
        name: "Vildred"
    },
    {
        id: "violet",
        name: "Violet"
    },
    {
        id: "vivian",
        name: "Vivian"
    },
    {
        id: "wanda",
        name: "Wanda"
    },
    {
        id: "wanderer_silk",
        name: "Wanderer Silk"
    },
    {
        id: "watcher_schuri",
        name: "Watcher Schuri"
    },
    {
        id: "yufine",
        name: "Yufine"
    },
    {
        id: "yuna",
        name: "Yuna"
    },
    {
        id: "zeno",
        name: "Zeno"
    },
    {
        id: "zerato",
        name: "Zerato"
    },
];
HEROES.sort(function(a, b){ return ('' + a.name).localeCompare(b.name); });

for (var i=0; i <= 6; ++i) {
    const hero_selector = document.getElementById(`enemy_${i}`);
    HEROES.map(
        (h => { $(hero_selector).append(`<option value="${h.id}">${h.name}</option>`) })
    );
}

const hero_adder = document.getElementById("hero_add");
HEROES.map(
    (h => { $(hero_adder).append(`<option value="${h.id}">${h.name}</option>`) })
);
