dataSetVersion = "2021-05-09"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series Entry",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: false,
    sub: [
      // { name: "Books and CDs", key: "book" },
      // { name: "The Highly Responsive to Prayers", tooltip: "01 - Reiiden", key: "HRtP" },
      // { name: "The Story of Eastern Wonderland", tooltip: "02 - Fuumaroku", key: "SoEW" },
      // { name: "Phantasmagoria of Dim.Dream", tooltip: "03 - Yumejikuu", key: "PoDD" },
      // { name: "Lotus Land Story", tooltip: "04 - Gensoukyou", key: "LLS" },
      // { name: "Mystic Square", tooltip: "05 - Kaikidan", key: "MS" },
      // { name: "Embodiment of Scarlet Devil", tooltip: "06 - Koumakan", key: "EoSD" },
      // { name: "Perfect Cherry Blossom", tooltip: "07 - Youyoumu", key: "PCB" },
      // { name: "Immaterial and Missing Power", tooltip: "07.5 - Suimusou", key: "IaMP" },
      // { name: "Imperishable Night", tooltip: "08 - Eiyashou", key: "IN" },
      // { name: "Phantasmagoria of Flower View", tooltip: "09 - Kaeidzuka", key: "PoFV" },
      // { name: "Shoot the Bullet", tooltip: "09.5 - Bunkachou", key: "StB" },
      // { name: "Mountain of Faith", tooltip: "10 - Fuujinroku", key: "MoF" },
      // { name: "Scarlet Weather Rhapsody", tooltip: "10.5 - Hisouten", key: "SWR" },
      // { name: "Subterranean Animism", tooltip: "11 - Chireiden", key: "SA" },
      // { name: "Undefined Fantastic Object", tooltip: "12 - Seirensen", key: "UFO" },
      // { name: "Touhou Hisoutensoku", tooltip: "12.3 - Hisoutensoku", key: "soku" },
      // { name: "Double Spoiler", tooltip: "12.5 - Bunkachou", key: "DS" },
      // { name: "Great Fairy Wars", tooltip: "12.8 - Daisensou", key: "GFW" },
      // { name: "Ten Desires", tooltip: "13 - Shinreibyou", key: "TD" },
      // { name: "Hopeless Masquerade", tooltip: "13.5 - Shinkirou", key: "HM" },
      // { name: "Double Dealing Character", tooltip: "14 - Kishinjou", key: "DDC" },
      // { name: "Impossible Spell Card", tooltip: "14.3 - Amanojaku", key: "ISC" },
      // { name: "Urban Legend in Limbo", tooltip: "14.5 - Shinpiroku", key: "ULiL" },
      // { name: "Legacy of Lunatic Kingdom", tooltip: "15 - Kanjuden", key: "LoLK" },
      // { name: "Antinomy of Common Flowers", tooltip: "15.5 - Hyouibana", key: "AoCF" },
      // { name: "Hidden Star in Four Seasons", tooltip: "16 - Tenkuushou", key: "HSiFS" },
      // { name: "Violet Detector", tooltip: "16.5 - Hifuu Nightmare Diary", key: "VD" },
      // { name: "Wily Beast and Weakest Creature", tooltip: "17 - Kikeijuu", key: "WBaWC" },
      // { name: "Unconnected Marketeers", tooltip: "18 - Kouryuudou", key: "UM" },
    ]
  },
  // {
  //   name: "Remove PC-98 Duplicates",
  //   key: "pc98",
  //   tooltip: "Check this to remove PC-98 characters with a Windows counterpart."
  // },
];

dataSet[dataSetVersion].characterData = [
    {
        "name": "Banished Keep",
        "img": "c5DqpgX.png",
        "opts": {
            "series": [
                "book",
                "EoSD",
                "PCB",
                "IaMP",
                "IN",
                "PoFV",
                "StB",
                "SWR",
                "MoF",
                "SA",
                "UFO",
                "soku",
                "DS",
                "TD",
                "HM",
                "DDC",
                "ISC",
                "ULiL",
                "LoLK",
                "AoCF",
                "HSiFS",
                "VD",
                "WBaWC",
                "UM"
            ],
            "stage": [
                "st4"
            ]
        }
    },
    {
        "name": "Desert Fort",
        "img": "tJnkSzK.png",
        "opts": {
            "series": [
                "book",
                "EoSD",
                "PCB",
                "IaMP",
                "IN",
                "PoFV",
                "StB",
                "SWR",
                "MoF",
                "SA",
                "UFO",
                "soku",
                "DS",
                "GFW",
                "TD",
                "HM",
                "DDC",
                "ISC",
                "ULiL",
                "LoLK",
                "AoCF",
                "HSiFS",
                "VD",
                "WBaWC",
                "UM"
            ],
            "stage": [
                "st4",
                "ex"
            ]
        }
    },
    {
        "name": "Mushroom Peaks",
        "img": "0YT7QlS.png",
        "opts": {
            "series": [
                "book",
                "EoSD",
                "StB",
                "HM"
            ],
            "stage": [
                "st1"
            ]
        }
    },
    {
        "name": "Lava Lake",
        "img": "NWlZud3.png",
        "opts": {
            "series": [
                "book",
                "EoSD"
            ],
            "stage": [
                "st2",
                "ex"
            ],
            "nameless": true
        }
    },
    {
        "name": "Glimmer Express Trains",
        "img": "qdveFSy.png",
        "opts": {
            "series": [
                "book",
                "EoSD",
                "PCB",
                "PoFV",
                "StB",
                "soku",
                "GFW",
                "HM",
                "DDC",
                "ISC",
                "HSiFS"
            ],
            "stage": [
                "st2"
            ]
        }
    },
    {
        "name": "GBA Ribbon Road",
        "img": "ptGp0x4.png",
        "opts": {
            "series": [
                "book",
                "EoSD",
                "IaMP",
                "StB",
                "soku"
            ],
            "stage": [
                "st3"
            ]
        }
    },
    {
        "name": "Final Grounds",
        "img": "vBKdDm4.png",
        "opts": {
            "series": [
                "book",
                "EoSD"
            ],
            "stage": [
                "st4"
            ],
            "nameless": true
        }
    },
    {
        "name": "Boshi Skatepark",
        "img": "A7ZnuHo.png",
        "opts": {
            "series": [
                "book",
                "EoSD",
                "IaMP",
                "StB",
                "SWR",
                "soku",
                "HM"
            ],
            "stage": [
                "st4",
                "ex"
            ]
        }
    },
    {
        "name": "GCN Yoshi Circuit",
        "img": "sgZPf11.png",
        "opts": {
            "series": [
                "book",
                "EoSD",
                "PCB",
                "IaMP",
                "IN",
                "PoFV",
                "StB",
                "SWR",
                "soku",
                "HM",
                "DDC",
                "ISC",
                "UM"
            ],
            "stage": [
                "st5",
                "st6"
            ]
        }
    },
    {
        "name": "Kinoko Cave",
        "img": "8UX7hKE.png",
        "opts": {
            "series": [
                "book",
                "EoSD",
                "IaMP",
                "IN",
                "StB",
                "SWR",
                "soku",
                "HM",
                "ISC",
                "VD"
            ],
            "stage": [
                "st6"
            ]
        }
    },
    {
        "name": "DS Airship Fortress",
        "img": "OhaDcnc.png",
        "opts": {
            "series": [
                "book",
                "EoSD",
                "StB",
                "VD"
            ],
            "stage": [
                "ex"
            ]
        }
    },
    {
        "name": "Skyline Avenue",
        "img": "MgzqjFK.png",
        "opts": {
            "series": [
                "book",
                "PCB",
                "StB",
                "HM"
            ],
            "stage": [
                "st1"
            ]
        }
    },
    {
        "name": "DS Bowser Castle",
        "img": "ohmetZh.png",
        "opts": {
            "series": [
                "book",
                "PCB",
                "IaMP",
                "StB",
                "SWR",
                "soku",
                "HM"
            ],
            "stage": [
                "st2",
                "ex"
            ]
        }
    },
    {
        "name": "DK Ruins",
        "img": "aDIf0pN.png",
        "opts": {
            "series": [
                "book",
                "PCB",
                "IaMP",
                "IN",
                "StB",
                "SWR",
                "soku",
                "HM"
            ],
            "stage": [
                "st3"
            ]
        }
    },
    {
        "name": "Luncheon Tour",
        "img": "2Pr8b2N.png",
        "opts": {
            "series": [
                "book",
                "PCB",
                "PoFV",
                "HM",
                "HSiFS"
            ],
            "stage": [
                "st4",
                "ex"
            ]
        }
    },
    {
        "name": "GBA Rainbow Road",
        "img": "htOMdDQ.png",
        "opts": {
            "series": [
                "book",
                "PCB",
                "PoFV",
                "HM",
                "AoCF"
            ],
            "stage": [
                "st4"
            ]
        }
    },
    {
        "name": "N64 Yoshi Valley",
        "img": "PrRPujP.png",
        "opts": {
            "series": [
                "book",
                "PCB",
                "PoFV",
                "HM",
                "AoCF"
            ],
            "stage": [
                "st4"
            ]
        }
    },
    {
        "name": "Midnight Museum",
        "img": "ze79bFC.png",
        "opts": {
            "series": [
                "book",
                "PCB",
                "PoFV",
                "HM",
                "AoCF"
            ],
            "stage": [
                "st4"
            ]
        }
    },
    {
        "name": "GBA Snow Land",
        "img": "WMjyRLJ.png",
        "opts": {
            "series": [
                "book",
                "PCB",
                "IaMP",
                "IN",
                "PoFV",
                "StB",
                "SWR",
                "soku",
                "TD",
                "HM",
                "ISC",
                "WBaWC"
            ],
            "stage": [
                "st5",
                "st6"
            ]
        }
    },
    {
        "name": "DS Tick-Tock Clock",
        "img": "VT9mTGb.png",
        "opts": {
            "series": [
                "book",
                "PCB",
                "IaMP",
                "IN",
                "StB",
                "SWR",
                "soku",
                "TD",
                "HM",
                "ISC",
                "VD"
            ],
            "stage": [
                "st1",
                "st6"
            ]
        }
    },
    {
        "name": "GBA Bowser Castle 4",
        "img": "rshnJPV.png",
        "opts": {
            "series": [
                "book",
                "PCB",
                "IaMP",
                "IN",
                "StB",
                "SWR",
                "soku",
                "HM",
                "VD"
            ],
            "stage": [
                "ex"
            ]
        }
    },
    {
        "name": "Candy Coaster",
        "img": "qsceD4I.png",
        "opts": {
            "series": [
                "book",
                "PCB",
                "IaMP",
                "IN",
                "StB",
                "SWR",
                "soku",
                "HM",
                "ISC",
                "AoCF",
                "VD"
            ],
            "stage": [
                "ex"
            ]
        }
    },
    {
        "name": "Bowser Jr.'s Fort",
        "img": "pLdMjQ3.png",
        "opts": {
            "series": [
                "book",
                "IaMP",
                "StB",
                "SWR",
                "soku",
                "DS",
                "HM",
                "ISC",
                "VD"
            ],
            "stage": [
                "st6"
            ]
        }
    },
    {
        "name": "Christmas Court",
        "img": "8DLUAPf.png",
        "opts": {
            "series": [
                "book",
                "IN",
                "StB",
                "HM"
            ],
            "stage": [
                "st1"
            ]
        }
    },
    {
        "name": "Northern Heights",
        "img": "6KyhLqE.png",
        "opts": {
            "series": [
                "book",
                "IN",
                "PoFV",
                "StB",
                "HM"
            ],
            "stage": [
                "st2"
            ]
        }
    },
    {
        "name": "Terra Ursae",
        "img": "99w0Chm.png",
        "opts": {
            "series": [
                "book",
                "IN",
                "StB",
                "HM",
                "ISC"
            ],
            "stage": [
                "st3",
                "ex"
            ]
        }
    },
    {
        "name": "Bowser's Termination Station",
        "img": "yqNfNje.png",
        "opts": {
            "series": [
                "book",
                "IN",
                "PoFV",
                "StB",
                "HM"
            ],
            "stage": [
                "st5"
            ]
        }
    },
    {
        "name": "Gothic Castle",
        "img": "PrYzRcC.png",
        "opts": {
            "series": [
                "book",
                "IN",
                "PoFV",
                "StB",
                "soku",
                "HM",
                "LoLK",
                "AoCF"
            ],
            "stage": [
                "st5"
            ]
        }
    },
    {
        "name": "DS Waluigi Pinball",
        "img": "ceo4DhK.png",
        "opts": {
            "series": [
                "book",
                "IN",
                "StB",
                "HM",
                "VD"
            ],
            "stage": [
                "st6"
            ]
        }
    },
    {
        "name": "Super Marine World",
        "img": "2YDuTk3.png",
        "opts": {
            "series": [
                "book",
                "IN",
                "StB",
                "HM",
                "VD"
            ],
            "stage": [
                "st6"
            ]
        }
    },
    {
        "name": "DS Rainbow Road",
        "img": "3zo4VKV.png",
        "opts": {
            "series": [
                "book",
                "IN",
                "StB",
                "HM",
                "ISC",
                "ULiL",
                "AoCF",
                "VD"
            ],
            "stage": [
                "ex"
            ]
        }
    },
    {
        "name": "Garden of Dreams",
        "img": "8TLXMST.png",
        "opts": {
            "series": [
                "book",
                "PoFV",
                "StB",
                "SWR",
                "MoF",
                "soku",
                "HM",
                "ISC",
                "HSiFS"
            ],
            "stage": [
                "st4"
            ]
        }
    },
    {
        "name": "Lunar Lights",
        "img": "IImsp7K.png",
        "opts": {
            "series": [
                "book",
                "PoFV",
                "StB",
                "HM"
            ],
            "stage": [
                "st4"
            ]
        }
    },
    {
        "name": "Cherry Blossom Garden",
        "img": "MZXJQq5.png",
        "opts": {
            "series": [
                "book",
                "PoFV",
                "StB",
                "HM"
            ],
            "stage": [
                "st5"
            ]
        }
    },
    {
        "name": "GCN Dino Dino Jungle",
        "img": "aX4WIH8.png",
        "opts": {
            "series": [
                "book",
                "PoFV",
                "StB",
                "SWR",
                "soku",
                "HM"
            ],
            "stage": [
                "st5"
            ]
        }
    },
    {
        "name": "Windy Whirl",
        "img": "nPBvatH.png",
        "opts": {
            "series": [
                "book",
                "PoFV",
                "StB",
                "HM",
                "VD"
            ],
            "stage": [
                "st6"
            ]
        }
    },
    {
        "name": "Sandstone Cliffs",
        "img": "3pDRgvR.png",
        "opts": {
            "series": [
                "MoF",
                "DS",
                "HM"
            ],
            "stage": [
                "st1"
            ]
        }
    },
    {
        "name": "Vile Isle",
        "img": "bV0DaN7.png",
        "opts": {
            "series": [
                "MoF",
                "DS",
                "HM"
            ],
            "stage": [
                "st1"
            ]
        }
    },
    {
        "name": "DS Mario Circuit",
        "img": "J11NjNj.png",
        "opts": {
            "series": [
                "MoF",
                "DS",
                "HM"
            ],
            "stage": [
                "st2"
            ]
        }
    },
    {
        "name": "Wuhu Mountain",
        "img": "4Ufced2.png",
        "opts": {
            "series": [
                "MoF",
                "DS",
                "HM",
                "ISC",
                "ULiL",
                "AoCF"
            ],
            "stage": [
                "st3"
            ]
        }
    },
    {
        "name": "Ice Cream Fortress",
        "img": "qGMjnYk.png",
        "opts": {
            "series": [
                "MoF",
                "DS",
                "ISC"
            ],
            "stage": [
                "st4"
            ]
        }
    },
    {
        "name": "N64 Royal Raceway",
        "img": "ATTRSWU.png",
        "opts": {
            "series": [
                "MoF",
                "SA",
                "UFO",
                "soku",
                "DS",
                "TD",
                "HM",
                "ISC",
                "LoLK",
                "UM"
            ],
            "stage": [
                "st5",
                "ex"
            ]
        }
    },
    {
        "name": "N64 Rainbow Road",
        "img": "nQ78Lz7.png",
        "opts": {
            "series": [
                "MoF",
                "soku",
                "DS",
                "HM",
                "ISC",
                "VD"
            ],
            "stage": [
                "st6",
                "ex"
            ]
        }
    },
    {
        "name": "GCN Baby Park",
        "img": "yJaD5ZV.png",
        "opts": {
            "series": [
                "MoF",
                "SA",
                "soku",
                "DS",
                "HM",
                "ISC",
                "VD"
            ],
            "stage": [
                "ex"
            ]
        }
    },
    {
        "name": "GBA Lakeside Park",
        "img": "xgAlECj.png",
        "opts": {
            "series": [
                "SWR",
                "soku",
                "DS",
                "HM",
                "VD"
            ],
            "stage": [
                "st5"
            ]
        }
    },
    {
        "name": "GCN Rainbow Road",
        "img": "tZLYivt.png",
        "opts": {
            "series": [
                "SWR",
                "soku",
                "DS",
                "HM",
                "ISC",
                "AoCF",
                "VD"
            ],
            "stage": [
                "st6"
            ]
        }
    },
    {
        "name": "Melting Magma Melee",
        "img": "VgJgaEf.png",
        "opts": {
            "series": [
                "SA",
                "DS"
            ],
            "stage": [
                "st1"
            ]
        }
    },
    {
        "name": "Lost Ruins",
        "img": "sqgJ2St.png",
        "opts": {
            "series": [
                "SA",
                "DS",
                "HM"
            ],
            "stage": [
                "st1"
            ]
        }
    },
    {
        "name": "New Moon Manor",
        "img": "lkoAJod.png",
        "opts": {
            "series": [
                "SA",
                "DS",
                "HM"
            ],
            "stage": [
                "st2"
            ]
        }
    },
    {
        "name": "GBA Sky Garden",
        "img": "tDO653L.png",
        "opts": {
            "series": [
                "SA",
                "DS",
                "HM"
            ],
            "stage": [
                "st3"
            ]
        }
    },
    {
        "name": "Honeybee Hideout",
        "img": "dup7Nt6.png",
        "opts": {
            "series": [
                "SA",
                "DS",
                "HM",
                "VD"
            ],
            "stage": [
                "st4"
            ]
        }
    },
    {
        "name": "Neo Koopa City",
        "img": "uQjbw1W.png",
        "opts": {
            "series": [
                "SA",
                "DS",
                "HM"
            ],
            "stage": [
                "st4",
                "st5",
                "st6"
            ]
        }
    },
    {
        "name": "Big Express City",
        "img": "DfdaXPW.png",
        "opts": {
            "series": [
                "SA",
                "soku",
                "DS",
                "HM",
                "VD"
            ],
            "stage": [
                "st6"
            ]
        }
    },
    {
        "name": "Thump Bump Forest",
        "img": "wVCcens.png",
        "opts": {
            "series": [
                "SA",
                "DS",
                "HM",
                "ULiL",
                "AoCF",
                "VD"
            ],
            "stage": [
                "ex"
            ]
        }
    },
    {
        "name": "GCN Bowser's Castle",
        "img": "EpHQbiY.png",
        "opts": {
            "series": [
                "UFO",
                "DS",
                "HM"
            ],
            "stage": [
                "st1",
                "st5"
            ]
        }
    },
    {
        "name": "Dark Matter Fortress",
        "img": "kJbv4dc.png",
        "opts": {
            "series": [
                "UFO",
                "TD",
                "DS",
                "HM"
            ],
            "stage": [
                "st2",
                "ex"
            ]
        }
    },
    {
        "name": "Superstar Dystopia",
        "img": "Fyn5yVx.png",
        "opts": {
            "series": [
                "UFO",
                "DS",
                "HM",
                "ULiL",
                "AoCF"
            ],
            "stage": [
                "st3"
            ]
        }
    },
    {
        "name": "Castle of Darkness",
        "img": "39KYpvW.png",
        "opts": {
            "series": [
                "UFO",
                "DS",
                "HM"
            ],
            "stage": [
                "st4"
            ]
        }
    },
    {
        "name": "SNES Rainbow Road",
        "img": "5yihisu.png",
        "opts": {
            "series": [
                "UFO",
                "DS",
                "HM"
            ],
            "stage": [
                "st5"
            ]
        }
    },
    {
        "name": "Dragon Burial Grounds",
        "img": "2ppPxny.png",
        "opts": {
            "series": [
                "UFO",
                "DS",
                "HM",
                "ISC",
                "ULiL",
                "AoCF",
                "VD"
            ],
            "stage": [
                "st6"
            ]
        }
    },
    {
        "name": "Obstagoon's Palace",
        "img": "zL4S8Mj.png",
        "opts": {
            "series": [
                "UFO",
                "DS",
                "TD",
                "HM",
                "VD"
            ],
            "stage": [
                "st4",
                "st6",
                "ex"
            ]
        }
    },
    {
        "name": "Coin Heaven",
        "img": "LgvoTaJ.png",
        "opts": {
            "series": [
                "DS",
                "HM",
                "ISC"
            ],
            "stage": [
                "ex"
            ]
        }
    },
    {
        "name": "Marble Towers",
        "img": "VbqXiB6.png",
        "opts": {
            "series": [
                "book",
                "GFW",
                "HM"
            ],
            "stage": [
                "st1",
                "st2",
                "st3"
            ]
        }
    },
    {
        "name": "Castle of Time",
        "img": "OBqgP48.png",
        "opts": {
            "series": [
                "book",
                "GFW",
                "HM"
            ],
            "stage": [
                "st1",
                "st2",
                "st3"
            ]
        }
    },
    {
        "name": "DS Shroom Ridge",
        "img": "sNw61ap.png",
        "opts": {
            "series": [
                "book",
                "GFW",
                "HM"
            ],
            "stage": [
                "st1",
                "st2",
                "st3"
            ]
        }
    },
    {
        "name": "Autumn Leavesway",
        "img": "sLiqEBA.png",
        "opts": {
            "series": [
                "TD",
                "HM",
                "ISC"
            ],
            "stage": [
                "st2"
            ]
        }
    },
    {
        "name": "Siberian Chateau",
        "img": "6jq6eh6.png",
        "opts": {
            "series": [
                "TD",
                "HM",
                "ISC"
            ],
            "stage": [
                "st3",
                "st4"
            ]
        }
    },
    {
        "name": "GCN Daisy Cruiser",
        "img": "090hLPL.png",
        "opts": {
            "series": [
                "TD",
                "HM",
                "ISC"
            ],
            "stage": [
                "st4"
            ]
        }
    },
    {
        "name": "Bowser's Fiery Fortress",
        "img": "y0UXwFO.png",
        "opts": {
            "series": [
                "TD",
                "HM"
            ],
            "stage": [
                "st5"
            ]
        }
    },
    {
        "name": "DS Wario Stadium",
        "img": "WTZ97LE.png",
        "opts": {
            "series": [
                "TD",
                "HM",
                "ISC",
                "ULiL",
                "AoCF"
            ],
            "stage": [
                "st5"
            ]
        }
    },
    {
        "name": "GBA Mario Circuit",
        "img": "3Xiqd22.png",
        "opts": {
            "series": [
                "TD",
                "HM",
                "ISC",
                "ULiL",
                "AoCF",
                "VD"
            ],
            "stage": [
                "st6"
            ]
        }
    },
    {
        "name": "Jungle Ruins",
        "img": "gMpWdmA.png",
        "opts": {
            "series": [
                "TD",
                "HM",
                "ISC",
                "ULiL",
                "AoCF",
                "VD"
            ],
            "stage": [
                "ex"
            ]
        }
    },
    {
        "name": "White Garden",
        "img": "fxCGmUk.png",
        "opts": {
            "series": [
                "book",
                "HM",
                "ULiL",
                "AoCF"
            ],
            "stage": [
                "st6"
            ]
        }
    },
    {
        "name": "GBA Bowser Castle 2",
        "img": "brWCLVx.png",
        "opts": {
            "series": [
                "DDC",
                "ISC"
            ],
            "stage": [
                "st1"
            ]
        }
    },
    {
        "name": "Volcanic Valley",
        "img": "VAMLiJD.png",
        "opts": {
            "series": [
                "DDC",
                "ISC"
            ],
            "stage": [
                "st2"
            ]
        }
    },
    {
        "name": "Toad Raceway",
        "img": "qwwL0bB.png",
        "opts": {
            "series": [
                "DDC",
                "ISC"
            ],
            "stage": [
                "st3"
            ]
        }
    },
    {
        "name": "DS Luigi's Mansion",
        "img": "vWNeMaH.png",
        "opts": {
            "series": [
                "DDC",
                "ISC"
            ],
            "stage": [
                "st4",
                "ex"
            ]
        }
    },
    {
        "name": "N64 Banshee Boardwalk",
        "img": "EJFQHQN.png",
        "opts": {
            "series": [
                "DDC",
                "ISC"
            ],
            "stage": [
                "st4",
                "ex"
            ]
        }
    },
    {
        "name": "Big Nature City",
        "img": "16RUacj.png",
        "opts": {
            "series": [
                "DDC",
                "ISC"
            ],
            "stage": [
                "st5",
                "st6"
            ]
        }
    },
    {
        "name": "Wolf Castlegrounds",
        "img": "Zl2tN7W.png",
        "opts": {
            "series": [
                "DDC",
                "ISC",
                "ULiL",
                "AoCF",
                "VD"
            ],
            "stage": [
                "st6"
            ]
        }
    },
    {
        "name": "Rush City Run",
        "img": "SLLEccR.png",
        "opts": {
            "series": [
                "DDC",
                "ISC",
                "AoCF",
                "VD"
            ],
            "stage": [
                "ex"
            ]
        }
    },
    {
        "name": "Sahara Hideout",
        "img": "mc7ICW6.png",
        "opts": {
            "series": [
                "ULiL",
                "AoCF",
                "VD"
            ],
            "stage": [
                "st6"
            ]
        }
    },
    {
        "name": "Amanita Abyss",
        "img": "0ra00WG.png",
        "opts": {
            "series": [
                "LoLK",
                "VD"
            ],
            "stage": [
                "st1"
            ]
        }
    },
    {
        "name": "GBA Sunset Wilds",
        "img": "xQOsFlZ.png",
        "opts": {
            "series": [
                "LoLK",
                "VD"
            ],
            "stage": [
                "st2"
            ]
        }
    },
    {
        "name": "Wuhu Island",
        "img": "rGS7dyn.png",
        "opts": {
            "series": [
                "LoLK",
                "AoCF",
                "VD"
            ],
            "stage": [
                "st3",
                "ex"
            ]
        }
    },
    {
        "name": "GBA Boo Lake",
        "img": "HLT338X.png",
        "opts": {
            "series": [
                "LoLK",
                "VD"
            ],
            "stage": [
                "st4"
            ]
        }
    },
    {
        "name": "Yoshi's Woolly Raceway",
        "img": "9Jje7ZQ.jpg",
        "opts": {
            "series": [
                "LoLK",
                "VD"
            ],
            "stage": [
                "st5"
            ]
        }
    },
    {
        "name": "Abyssal Ruins",
        "img": "NsfLZjY.jpg",
        "opts": {
            "series": [
                "LoLK",
                "VD"
            ],
            "stage": [
                "st6",
                "ex"
            ]
        }
    },
    {
        "name": "Kamek's Library",
        "img": "EH3Ulol.png",
        "opts": {
            "series": [
                "LoLK",
                "VD"
            ],
            "stage": [
                "ex"
            ]
        }
    },
    {
        "name": "DS DK Pass",
        "img": "ql5KxJH.png",
        "opts": {
            "series": [
                "HSiFS",
                "VD"
            ],
            "stage": [
                "st1"
            ]
        }
    },
    {
        "name": "Stargaze Summit",
        "img": "gYFhJ3Y.png",
        "opts": {
            "series": [
                "HSiFS",
                "VD"
            ],
            "stage": [
                "st2"
            ]
        }
    },
    {
        "name": "GBA Broken Pier",
        "img": "wWUStkF.png",
        "opts": {
            "series": [
                "HSiFS",
                "VD"
            ],
            "stage": [
                "st3"
            ]
        }
    },
    {
        "name": "Aquadrom Stage",
        "img": "wrPVhAo.png",
        "opts": {
            "series": [
                "HSiFS",
                "VD"
            ],
            "stage": [
                "st4"
            ]
        }
    },
    {
        "name": "Abandoned Boardwalk",
        "img": "8w9gAy2.png",
        "opts": {
            "series": [
                "HSiFS",
                "VD"
            ],
            "stage": [
                "st5"
            ]
        }
    },
    {
        "name": "SNES Bowser Castle 3",
        "img": "DesAqAC.png",
        "opts": {
            "series": [
                "HSiFS",
                "VD"
            ],
            "stage": [
                "st5"
            ]
        }
    },
    {
        "name": "GCN Mushroom Bridge",
        "img": "icWvMyo.png",
        "opts": {
            "series": [
                "HSiFS",
                "VD"
            ],
            "stage": [
                "st6",
                "ex"
            ]
        }
    },
    {
        "name": "Flying Kingdom",
        "img": "LenxXR4.png",
        "opts": {
            "series": [
                "AoCF"
            ],
            "stage": [
                "st6"
            ]
        }
    },
    {
        "name": "Rainbow Road: Solar Edition",
        "img": "V9OznT1.png",
        "opts": {
            "series": [
                "AoCF"
            ],
            "stage": [
                "st6"
            ]
        }
    },
    {
        "name": "DS Cheep Cheep Beach",
        "img": "Ke3316E.png",
        "opts": {
            "series": [
                "WBaWC"
            ],
            "stage": [
                "st1"
            ]
        }
    },
    {
        "name": "CTR Cortex Castle",
        "img": "ru2vIIW.png",
        "opts": {
            "series": [
                "WBaWC"
            ],
            "stage": [
                "st2"
            ]
        }
    },
    {
        "name": "Musical Motorway",
        "img": "QTQt0ZL.png",
        "opts": {
            "series": [
                "WBaWC"
            ],
            "stage": [
                "st3"
            ]
        }
    },
    {
        "name": "Jiyuu Village",
        "img": "CzcIMxF.png",
        "opts": {
            "series": [
                "WBaWC"
            ],
            "stage": [
                "st4"
            ]
        }
    },
    {
        "name": "SNES Bowser Castle 2",
        "img": "GxeziYO.png",
        "opts": {
            "series": [
                "WBaWC"
            ],
            "stage": [
                "st5"
            ]
        }
    },
    {
        "name": "Pipe Underworld",
        "img": "Z4jclTi.png",
        "opts": {
            "series": [
                "WBaWC"
            ],
            "stage": [
                "st6"
            ]
        }
    },
    {
        "name": "Mario Castle Raceway",
        "img": "H2v2GPy.png",
        "opts": {
            "series": [
                "WBaWC"
            ],
            "stage": [
                "ex"
            ]
        }
    },
    {
        "name": "Lost Fortress",
        "img": "FltSdtv.png",
        "opts": {
            "series": [
                "UM"
            ],
            "stage": [
                "st1"
            ]
        }
    },
    {
        "name": "Fungal Jungle",
        "img": "Aaq99GQ.png",
        "opts": {
            "series": [
                "UM"
            ],
            "stage": [
                "st2"
            ]
        }
    },
    {
        "name": "Hell Pyramid",
        "img": "DKupiv1.png",
        "opts": {
            "series": [
                "UM"
            ],
            "stage": [
                "st3"
            ]
        }
    },
    {
        "name": "Infernal Pipeyard",
        "img": "BHwfCAQ.png",
        "opts": {
            "series": [
                "UM"
            ],
            "stage": [
                "st4"
            ]
        }
    },
    {
        "name": "Piranha Plant Pipeline",
        "img": "KNy3FZq.png",
        "opts": {
            "series": [
                "UM"
            ],
            "stage": [
                "st5",
                "st6",
                "ex"
            ]
        }
    },
    {
        "name": "Delfino Island",
        "img": "QA63m27.png",
        "opts": {
            "series": [
                "UM"
            ],
            "stage": [
                "st5"
            ]
        }
    },
    {
        "name": "N64 Choco Mountain",
        "img": "Ga4AYtv.png",
        "opts": {
            "series": [
                "UM"
            ],
            "stage": [
                "st6"
            ]
        }
    },
    {
        "name": "Shy Guy's Market",
        "img": "iH2wqbd.png",
        "opts": {
            "series": [
                "UM"
            ],
            "stage": [
                "ex"
            ]
        }
    },
    {
        "name": "GCN Luigi Circuit",
        "img": "ogONuLZ.png",
        "opts": {
            "series": [
                "book"
            ],
            "stage": []
        }
    },
    {
        "name": "Alpine Peak",
        "img": "Y4maOc8.png",
        "opts": {
            "series": [
                "book"
            ],
            "stage": [],
            "nameless": true
        }
    },
    {
        "name": "Quaking Mad Cliffs",
        "img": "cWjCo2j.png",
        "opts": {
            "series": [
                "book"
            ],
            "stage": []
        }
    },
    {
        "name": "Luigi's Island",
        "img": "uEBxsEX.png",
        "opts": {
            "series": [
                "book"
            ],
            "stage": []
        }
    },
    {
        "name": "Concord Town",
        "img": "Txu2P7S.png",
        "opts": {
            "series": [
                "book"
            ],
            "stage": []
        }
    },
    {
        "name": "Wetland Woods",
        "img": "XUI9vPo.png",
        "opts": {
            "series": [
                "book"
            ],
            "stage": []
        }
    },
    {
        "name": "Pianta Shore",
        "img": "1P5EXRt.png",
        "opts": {
            "series": [
                "book"
            ],
            "stage": []
        }
    },
    {
        "name": "Mystic Tangle",
        "img": "dQHnPPe.png",
        "opts": {
            "series": [
                "book",
                "ULiL",
                "AoCF"
            ],
            "stage": [
                "st5"
            ]
        }
    },
    {
        "name": "Crystal Plains",
        "img": "jEsJJo8.png",
        "opts": {
            "series": [
                "book"
            ],
            "stage": []
        }
    },
    {
        "name": "Canyon Run",
        "img": "a5V63gx.png",
        "opts": {
            "series": [
                "book"
            ],
            "stage": []
        }
    },
    {
        "name": "Festival Town",
        "img": "IZsGAMS.png",
        "opts": {
            "series": [
                "HRtP",
                "SoEW",
                "PoDD",
                "LLS",
                "MS"
            ],
            "stage": [
                "st4"
            ],
            "pc98": true
        }
    },
    {
        "name": "The Rabbit Hole",
        "img": "KuPiR2k.png",
        "opts": {
            "series": [
                "HRtP"
            ],
            "stage": [
                "st1"
            ]
        }
    },
    {
        "name": "Dark Matter Shrine",
        "img": "odH03t2.png",
        "opts": {
            "series": [
                "HRtP",
                "SoEW",
                "PoDD",
                "MS"
            ],
            "stage": [
                "st3",
                "st5",
                "st6"
            ]
        }
    },
    {
        "name": "Fishdom Island",
        "img": "ytnL1xd.png",
        "opts": {
            "series": [
                "HRtP"
            ],
            "stage": [
                "st5"
            ]
        }
    },
    {
        "name": "Rock Rock Ridge",
        "img": "fX2Kqik.png",
        "opts": {
            "series": [
                "HRtP"
            ],
            "stage": [
                "st5"
            ]
        }
    },
    {
        "name": "Alpine Skyway",
        "img": "Wyc7YFw.png",
        "opts": {
            "series": [
                "HRtP"
            ],
            "stage": [
                "st6"
            ]
        }
    },
    {
        "name": "Mushroom Island",
        "img": "dg9jLHv.png",
        "opts": {
            "series": [
                "HRtP"
            ],
            "stage": [
                "st6"
            ]
        }
    },
    {
        "name": "Desert Castle Raceway",
        "img": "02Xb4pU.png",
        "opts": {
            "series": [
                "SoEW"
            ],
            "stage": [
                "st1",
                "ex"
            ]
        }
    },
    {
        "name": "Crystal Dungeon",
        "img": "p529JgT.png",
        "opts": {
            "series": [
                "SoEW"
            ],
            "stage": [
                "st2"
            ]
        }
    },
    {
        "name": "GCN Sherbet Land",
        "img": "wxE7cBm.png",
        "opts": {
            "series": [
                "SoEW",
                "PoDD",
                "LLS",
                "MS"
            ],
            "stage": [
                "st4"
            ],
            "pc98": true
        }
    },
    {
        "name": "Yoshi Lagoon",
        "img": "3iNNL0c.png",
        "opts": {
            "series": [
                "PoDD"
            ],
            "stage": []
        }
    },
    {
        "name": "Melody Sanctum",
        "img": "kRSGtpq.png",
        "opts": {
            "series": [
                "PoDD"
            ],
            "stage": []
        }
    },
    {
        "name": "GBA Riverside Park",
        "img": "rBvKMk5.png",
        "opts": {
            "series": [
                "PoDD"
            ],
            "stage": []
        }
    },
    {
        "name": "Camp Kartigan",
        "img": "VIf5gUK.png",
        "opts": {
            "series": [
                "PoDD"
            ],
            "stage": []
        }
    },
    {
        "name": "SNES Mario Circuit 2",
        "img": "tZFBycy.png",
        "opts": {
            "series": [
                "PoDD"
            ],
            "stage": [
                "st5"
            ]
        }
    },
    {
        "name": "Royal Rainbow",
        "img": "c9rnG3n.png",
        "opts": {
            "series": [
                "PoDD"
            ],
            "stage": [
                "st6"
            ]
        }
    },
    {
        "name": "Incendia Castle",
        "img": "dko67SJ.png",
        "opts": {
            "series": [
                "PoDD"
            ],
            "stage": []
        }
    },
    {
        "name": "N64 Wario Stadium",
        "img": "m8wXE5U.png",
        "opts": {
            "series": [
                "LLS"
            ],
            "stage": [
                "st1"
            ]
        }
    },
    {
        "name": "GCN Wario Colosseum",
        "img": "0rvq1ph.png",
        "opts": {
            "series": [
                "LLS"
            ],
            "stage": [
                "st2"
            ]
        }
    },
    {
        "name": "Jungle Glade",
        "img": "iIPftHn.png",
        "opts": {
            "series": [
                "LLS"
            ],
            "stage": [
                "st3"
            ]
        }
    },
    {
        "name": "Desktop Dash",
        "img": "ivUSwxp.png",
        "opts": {
            "series": [
                "LLS",
                "MS"
            ],
            "stage": [
                "st5",
                "st6"
            ],
            "pc98": true
        }
    },
    {
        "name": "Six King Labyrinth",
        "img": "bYA9E16.png",
        "opts": {
            "series": [
                "LLS"
            ],
            "stage": [
                "ex"
            ]
        }
    },
    {
        "name": "Lumpy's Lively Lair",
        "img": "TIOTtV9.png",
        "opts": {
            "series": [
                "LLS"
            ],
            "stage": [
                "ex"
            ]
        }
    },
    {
        "name": "SNES Donut Plains 3",
        "img": "2QUbCrU.png",
        "opts": {
            "series": [
                "MS"
            ],
            "stage": [
                "st1"
            ]
        }
    },
    {
        "name": "Twin Peaks",
        "img": "nDM5aB6.png",
        "opts": {
            "series": [
                "MS"
            ],
            "stage": [
                "st2",
                "st4"
            ]
        }
    },
    {
        "name": "Colour Wonderland",
        "img": "KaBuRTW.png",
        "opts": {
            "series": [
                "MS"
            ],
            "stage": [
                "st3",
                "ex"
            ],
            "pc98": true
        }
    },
    {
        "name": "N64 Frappe Snowland",
        "img": "FfcmDgp.png",
        "opts": {
            "series": [
                "MS"
            ],
            "stage": [
                "st4"
            ]
        }
    },
    {
        "name": "Jungle Cliff",
        "img": "r6w7TX1.png",
        "opts": {
            "series": [
                "MS"
            ],
            "stage": [
                "st4"
            ]
        }
    },
    {
        "name": "Celestial Ruins",
        "img": "PcPqkdO.png",
        "opts": {
            "series": [
                "MS"
            ],
            "stage": [
                "st5"
            ]
        }
    },
    {
        "name": "Dawn Township",
        "img": "gPE95S7.png",
        "opts": {
            "series": [
                "MS"
            ],
            "stage": [
                "st6"
            ]
        }
    },
    {
        "name": "Medieval Castlegrounds",
        "img": "c5DqpgX.png",
        "opts": {
            "series": [
                "book",
                "EoSD",
                "PCB",
                "IaMP",
                "IN",
                "PoFV",
                "StB",
                "SWR",
                "MoF",
                "SA",
                "UFO",
                "soku",
                "DS",
                "TD",
                "HM",
                "DDC",
                "ISC",
                "ULiL",
                "LoLK",
                "AoCF",
                "HSiFS",
                "VD",
                "WBaWC",
                "UM"
            ],
            "stage": [
                "st4"
            ]
        }
    },
    {
        "name": "Warp Pipe Island",
        "img": "tJnkSzK.png",
        "opts": {
            "series": [
                "book",
                "EoSD",
                "PCB",
                "IaMP",
                "IN",
                "PoFV",
                "StB",
                "SWR",
                "MoF",
                "SA",
                "UFO",
                "soku",
                "DS",
                "GFW",
                "TD",
                "HM",
                "DDC",
                "ISC",
                "ULiL",
                "LoLK",
                "AoCF",
                "HSiFS",
                "VD",
                "WBaWC",
                "UM"
            ],
            "stage": [
                "st4",
                "ex"
            ]
        }
    },
    {
        "name": "Koopa Shell Pipeland",
        "img": "0YT7QlS.png",
        "opts": {
            "series": [
                "book",
                "EoSD",
                "StB",
                "HM"
            ],
            "stage": [
                "st1"
            ]
        }
    },
    {
        "name": "Lava Road",
        "img": "NWlZud3.png",
        "opts": {
            "series": [
                "book",
                "EoSD"
            ],
            "stage": [
                "st2",
                "ex"
            ],
            "nameless": true
        }
    },
    {
        "name": "Musical Cliff",
        "img": "qdveFSy.png",
        "opts": {
            "series": [
                "book",
                "EoSD",
                "PCB",
                "PoFV",
                "StB",
                "soku",
                "GFW",
                "HM",
                "DDC",
                "ISC",
                "HSiFS"
            ],
            "stage": [
                "st2"
            ]
        }
    },
    {
        "name": "Rosalina's Snow World‎",
        "img": "ptGp0x4.png",
        "opts": {
            "series": [
                "book",
                "EoSD",
                "IaMP",
                "StB",
                "soku"
            ],
            "stage": [
                "st3"
            ]
        }
    },
    {
        "name": "Spectral Station",
        "img": "vBKdDm4.png",
        "opts": {
            "series": [
                "book",
                "EoSD"
            ],
            "stage": [
                "st4"
            ],
            "nameless": true
        }
    },
    {
        "name": "GCN Mushroom City",
        "img": "A7ZnuHo.png",
        "opts": {
            "series": [
                "book",
                "EoSD",
                "IaMP",
                "StB",
                "SWR",
                "soku",
                "HM"
            ],
            "stage": [
                "st4",
                "ex"
            ]
        }
    },
    {
        "name": "Underground Sky",
        "img": "sgZPf11.png",
        "opts": {
            "series": [
                "book",
                "EoSD",
                "PCB",
                "IaMP",
                "IN",
                "PoFV",
                "StB",
                "SWR",
                "soku",
                "HM",
                "DDC",
                "ISC",
                "UM"
            ],
            "stage": [
                "st5",
                "st6"
            ]
        }
    },
    {
        "name": "GCN Dry Dry Desert",
        "img": "8UX7hKE.png",
        "opts": {
            "series": [
                "book",
                "EoSD",
                "IaMP",
                "IN",
                "StB",
                "SWR",
                "soku",
                "HM",
                "ISC",
                "VD"
            ],
            "stage": [
                "st6"
            ]
        }
    },
    {
        "name": "CTR N. Gin Labs",
        "img": "OhaDcnc.png",
        "opts": {
            "series": [
                "book",
                "EoSD",
                "StB",
                "VD"
            ],
            "stage": [
                "ex"
            ]
        }
    },
    {
        "name": "N64 Koopa Troopa Beach",
        "img": "MgzqjFK.png",
        "opts": {
            "series": [
                "book",
                "PCB",
                "StB",
                "HM"
            ],
            "stage": [
                "st1"
            ]
        }
    },
    {
        "name": "Halogen Highway",
        "img": "ohmetZh.png",
        "opts": {
            "series": [
                "book",
                "PCB",
                "IaMP",
                "StB",
                "SWR",
                "soku",
                "HM"
            ],
            "stage": [
                "st2",
                "ex"
            ]
        }
    },
    {
        "name": "Daisy Hillside",
        "img": "aDIf0pN.png",
        "opts": {
            "series": [
                "book",
                "PCB",
                "IaMP",
                "IN",
                "StB",
                "SWR",
                "soku",
                "HM"
            ],
            "stage": [
                "st3"
            ]
        }
    },
    {
        "name": "Sky High Island",
        "img": "2Pr8b2N.png",
        "opts": {
            "series": [
                "book",
                "PCB",
                "PoFV",
                "HM",
                "HSiFS"
            ],
            "stage": [
                "st4",
                "ex"
            ]
        }
    },
    {
        "name": "GBA Cheese Land",
        "img": "htOMdDQ.png",
        "opts": {
            "series": [
                "book",
                "PCB",
                "PoFV",
                "HM",
                "AoCF"
            ],
            "stage": [
                "st4"
            ]
        }
    },
    {
        "name": "Sunset Forest",
        "img": "PrRPujP.png",
        "opts": {
            "series": [
                "book",
                "PCB",
                "PoFV",
                "HM",
                "AoCF"
            ],
            "stage": [
                "st4"
            ]
        }
    },
    {
        "name": "Undiscovered Offlimit",
        "img": "ze79bFC.png",
        "opts": {
            "series": [
                "book",
                "PCB",
                "PoFV",
                "HM",
                "AoCF"
            ],
            "stage": [
                "st4"
            ]
        }
    },
    {
        "name": "Thwomp Swamp",
        "img": "WMjyRLJ.png",
        "opts": {
            "series": [
                "book",
                "PCB",
                "IaMP",
                "IN",
                "PoFV",
                "StB",
                "SWR",
                "soku",
                "TD",
                "HM",
                "ISC",
                "WBaWC"
            ],
            "stage": [
                "st5",
                "st6"
            ]
        }
    },
    {
        "name": "GBA Luigi Circuit",
        "img": "VT9mTGb.png",
        "opts": {
            "series": [
                "book",
                "PCB",
                "IaMP",
                "IN",
                "StB",
                "SWR",
                "soku",
                "TD",
                "HM",
                "ISC",
                "VD"
            ],
            "stage": [
                "st1",
                "st6"
            ]
        }
    },
    {
        "name": "GBA Cheep Cheep Island",
        "img": "rshnJPV.png",
        "opts": {
            "series": [
                "book",
                "PCB",
                "IaMP",
                "IN",
                "StB",
                "SWR",
                "soku",
                "HM",
                "VD"
            ],
            "stage": [
                "ex"
            ]
        }
    },
    {
        "name": "CTR Blizzard Bluff",
        "img": "qsceD4I.png",
        "opts": {
            "series": [
                "book",
                "PCB",
                "IaMP",
                "IN",
                "StB",
                "SWR",
                "soku",
                "HM",
                "ISC",
                "AoCF",
                "VD"
            ],
            "stage": [
                "ex"
            ]
        }
    },
    {
        "name": "Jungle Jamble",
        "img": "pLdMjQ3.png",
        "opts": {
            "series": [
                "book",
                "IaMP",
                "StB",
                "SWR",
                "soku",
                "DS",
                "HM",
                "ISC",
                "VD"
            ],
            "stage": [
                "st6"
            ]
        }
    },
    {
        "name": "Summer Starville",
        "img": "8DLUAPf.png",
        "opts": {
            "series": [
                "book",
                "IN",
                "StB",
                "HM"
            ],
            "stage": [
                "st1"
            ]
        }
    },
    {
        "name": "GBA Peach Circuit",
        "img": "6KyhLqE.png",
        "opts": {
            "series": [
                "book",
                "IN",
                "PoFV",
                "StB",
                "HM"
            ],
            "stage": [
                "st2"
            ]
        }
    },
    {
        "name": "Daisy's Palace",
        "img": "99w0Chm.png",
        "opts": {
            "series": [
                "book",
                "IN",
                "StB",
                "HM",
                "ISC"
            ],
            "stage": [
                "st3",
                "ex"
            ]
        }
    },
    {
        "name": "Mansion of Madness",
        "img": "yqNfNje.png",
        "opts": {
            "series": [
                "book",
                "IN",
                "PoFV",
                "StB",
                "HM"
            ],
            "stage": [
                "st5"
            ]
        }
    },
    {
        "name": "SNES Mario Circuit 1",
        "img": "PrYzRcC.png",
        "opts": {
            "series": [
                "book",
                "IN",
                "PoFV",
                "StB",
                "soku",
                "HM",
                "LoLK",
                "AoCF"
            ],
            "stage": [
                "st5"
            ]
        }
    },
    {
        "name": "Envenom Snowstorm",
        "img": "ceo4DhK.png",
        "opts": {
            "series": [
                "book",
                "IN",
                "StB",
                "HM",
                "VD"
            ],
            "stage": [
                "st6"
            ]
        }
    },
    {
        "name": "Spike Desert",
        "img": "2YDuTk3.png",
        "opts": {
            "series": [
                "book",
                "IN",
                "StB",
                "HM",
                "VD"
            ],
            "stage": [
                "st6"
            ]
        }
    },
    {
        "name": "Tropical Factory",
        "img": "3zo4VKV.png",
        "opts": {
            "series": [
                "book",
                "IN",
                "StB",
                "HM",
                "ISC",
                "ULiL",
                "AoCF",
                "VD"
            ],
            "stage": [
                "ex"
            ]
        }
    },
    {
        "name": "Windmill Village",
        "img": "8TLXMST.png",
        "opts": {
            "series": [
                "book",
                "PoFV",
                "StB",
                "SWR",
                "MoF",
                "soku",
                "HM",
                "ISC",
                "HSiFS"
            ],
            "stage": [
                "st4"
            ]
        }
    },
    {
        "name": "N64 Kalimari Desert",
        "img": "IImsp7K.png",
        "opts": {
            "series": [
                "book",
                "PoFV",
                "StB",
                "HM"
            ],
            "stage": [
                "st4"
            ]
        }
    },
    {
        "name": "GBA Bowser Castle 1",
        "img": "MZXJQq5.png",
        "opts": {
            "series": [
                "book",
                "PoFV",
                "StB",
                "HM"
            ],
            "stage": [
                "st5"
            ]
        }
    },
    {
        "name": "Colour Circuit",
        "img": "aX4WIH8.png",
        "opts": {
            "series": [
                "book",
                "PoFV",
                "StB",
                "SWR",
                "soku",
                "HM"
            ],
            "stage": [
                "st5"
            ]
        }
    },
    {
        "name": "Unfinished Mario Circuit",
        "img": "nPBvatH.png",
        "opts": {
            "series": [
                "book",
                "PoFV",
                "StB",
                "HM",
                "VD"
            ],
            "stage": [
                "st6"
            ]
        }
    },
    {
        "name": "SNES Choco Island 2",
        "img": "3pDRgvR.png",
        "opts": {
            "series": [
                "MoF",
                "DS",
                "HM"
            ],
            "stage": [
                "st1"
            ]
        }
    },
    {
        "name": "Dragonite's Island",
        "img": "bV0DaN7.png",
        "opts": {
            "series": [
                "MoF",
                "DS",
                "HM"
            ],
            "stage": [
                "st1"
            ]
        }
    },
    {
        "name": "Haunted Gardens",
        "img": "J11NjNj.png",
        "opts": {
            "series": [
                "MoF",
                "DS",
                "HM"
            ],
            "stage": [
                "st2"
            ]
        }
    },
    {
        "name": "Aura Metropolis",
        "img": "4Ufced2.png",
        "opts": {
            "series": [
                "MoF",
                "DS",
                "HM",
                "ISC",
                "ULiL",
                "AoCF"
            ],
            "stage": [
                "st3"
            ]
        }
    },
    {
        "name": "Sakura Sanctuary",
        "img": "qGMjnYk.png",
        "opts": {
            "series": [
                "MoF",
                "DS",
                "ISC"
            ],
            "stage": [
                "st4"
            ]
        }
    },
    {
        "name": "N.I.S.W.O.E. Desert",
        "img": "ATTRSWU.png",
        "opts": {
            "series": [
                "MoF",
                "SA",
                "UFO",
                "soku",
                "DS",
                "TD",
                "HM",
                "ISC",
                "LoLK",
                "UM"
            ],
            "stage": [
                "st5",
                "ex"
            ]
        }
    },
    {
        "name": "Sky Shrine",
        "img": "nQ78Lz7.png",
        "opts": {
            "series": [
                "MoF",
                "soku",
                "DS",
                "HM",
                "ISC",
                "VD"
            ],
            "stage": [
                "st6",
                "ex"
            ]
        }
    },
    {
        "name": "Nivurbia",
        "img": "yJaD5ZV.png",
        "opts": {
            "series": [
                "MoF",
                "SA",
                "soku",
                "DS",
                "HM",
                "ISC",
                "VD"
            ],
            "stage": [
                "ex"
            ]
        }
    },
    {
        "name": "Mushroom Valley",
        "img": "xgAlECj.png",
        "opts": {
            "series": [
                "SWR",
                "soku",
                "DS",
                "HM",
                "VD"
            ],
            "stage": [
                "st5"
            ]
        }
    },
    {
        "name": "Magmatic Sanctuary",
        "img": "tZLYivt.png",
        "opts": {
            "series": [
                "SWR",
                "soku",
                "DS",
                "HM",
                "ISC",
                "AoCF",
                "VD"
            ],
            "stage": [
                "st6"
            ]
        }
    },
    {
        "name": "DS Figure-8 Circuit",
        "img": "VgJgaEf.png",
        "opts": {
            "series": [
                "SA",
                "DS"
            ],
            "stage": [
                "st1"
            ]
        }
    },
    {
        "name": "Unnamed Valley",
        "img": "sqgJ2St.png",
        "opts": {
            "series": [
                "SA",
                "DS",
                "HM"
            ],
            "stage": [
                "st1"
            ]
        }
    },
    {
        "name": "Volcano Canyon",
        "img": "lkoAJod.png",
        "opts": {
            "series": [
                "SA",
                "DS",
                "HM"
            ],
            "stage": [
                "st2"
            ]
        }
    },
    {
        "name": "N64 Luigi Raceway",
        "img": "tDO653L.png",
        "opts": {
            "series": [
                "SA",
                "DS",
                "HM"
            ],
            "stage": [
                "st3"
            ]
        }
    },
    {
        "name": "Nightlife Party",
        "img": "dup7Nt6.png",
        "opts": {
            "series": [
                "SA",
                "DS",
                "HM",
                "VD"
            ],
            "stage": [
                "st4"
            ]
        }
    },
    {
        "name": "Lunar Spaceway",
        "img": "uQjbw1W.png",
        "opts": {
            "series": [
                "SA",
                "DS",
                "HM"
            ],
            "stage": [
                "st4",
                "st5",
                "st6"
            ]
        }
    },
    {
        "name": "SNES Donut Plains 2",
        "img": "DfdaXPW.png",
        "opts": {
            "series": [
                "SA",
                "soku",
                "DS",
                "HM",
                "VD"
            ],
            "stage": [
                "st6"
            ]
        }
    },
    {
        "name": "Item Fireland",
        "img": "wVCcens.png",
        "opts": {
            "series": [
                "SA",
                "DS",
                "HM",
                "ULiL",
                "AoCF",
                "VD"
            ],
            "stage": [
                "ex"
            ]
        }
    },
    {
        "name": "Sunset Ridge",
        "img": "EpHQbiY.png",
        "opts": {
            "series": [
                "UFO",
                "DS",
                "HM"
            ],
            "stage": [
                "st1",
                "st5"
            ]
        }
    },
    {
        "name": "Desert Mushroom Ruins",
        "img": "kJbv4dc.png",
        "opts": {
            "series": [
                "UFO",
                "TD",
                "DS",
                "HM"
            ],
            "stage": [
                "st2",
                "ex"
            ]
        }
    },
    {
        "name": "Icepeak Mountain",
        "img": "Fyn5yVx.png",
        "opts": {
            "series": [
                "UFO",
                "DS",
                "HM",
                "ULiL",
                "AoCF"
            ],
            "stage": [
                "st3"
            ]
        }
    },
    {
        "name": "Dreamworld Cloudway",
        "img": "39KYpvW.png",
        "opts": {
            "series": [
                "UFO",
                "DS",
                "HM"
            ],
            "stage": [
                "st4"
            ]
        }
    },
    {
        "name": "Hellado Mountain",
        "img": "5yihisu.png",
        "opts": {
            "series": [
                "UFO",
                "DS",
                "HM"
            ],
            "stage": [
                "st5"
            ]
        }
    },
    {
        "name": "Disco Fever",
        "img": "2ppPxny.png",
        "opts": {
            "series": [
                "UFO",
                "DS",
                "HM",
                "ISC",
                "ULiL",
                "AoCF",
                "VD"
            ],
            "stage": [
                "st6"
            ]
        }
    },
    {
        "name": "Waluigi's Motocross",
        "img": "zL4S8Mj.png",
        "opts": {
            "series": [
                "UFO",
                "DS",
                "TD",
                "HM",
                "VD"
            ],
            "stage": [
                "st4",
                "st6",
                "ex"
            ]
        }
    },
    {
        "name": "Forest Creek",
        "img": "LgvoTaJ.png",
        "opts": {
            "series": [
                "DS",
                "HM",
                "ISC"
            ],
            "stage": [
                "ex"
            ]
        }
    },
    {
        "name": "Sea Stadium",
        "img": "VbqXiB6.png",
        "opts": {
            "series": [
                "book",
                "GFW",
                "HM"
            ],
            "stage": [
                "st1",
                "st2",
                "st3"
            ]
        }
    },
    {
        "name": "Star Slope",
        "img": "OBqgP48.png",
        "opts": {
            "series": [
                "book",
                "GFW",
                "HM"
            ],
            "stage": [
                "st1",
                "st2",
                "st3"
            ]
        }
    },
]
