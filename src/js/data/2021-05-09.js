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
        "img": "https://i.imgur.com/c5DqpgX.png",
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
        "img": "https://i.imgur.com/tJnkSzK.png",
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
        "img": "https://cdn.discordapp.com/attachments/217126063803727872/1151955250173984848/deadchamp.png",
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
        "img": "https://i.imgur.com/NWlZud3.png",
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
        "img": "https://i.imgur.com/qdveFSy.png",
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
        "img": "https://i.imgur.com/ptGp0x4.png",
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
        "img": "https://i.imgur.com/vBKdDm4.png",
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
        "img": "https://i.imgur.com/A7ZnuHo.png",
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
        "img": "https://i.imgur.com/sgZPf11.png",
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
        "img": "https://i.imgur.com/8UX7hKE.png",
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
        "img": "https://i.imgur.com/OhaDcnc.png",
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
        "img": "https://i.imgur.com/MgzqjFK.png",
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
        "img": "https://i.imgur.com/ohmetZh.png",
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
        "img": "https://i.imgur.com/aDIf0pN.png",
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
        "img": "https://i.imgur.com/2Pr8b2N.png",
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
        "img": "https://i.imgur.com/htOMdDQ.png",
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
        "img": "https://i.imgur.com/PrRPujP.png",
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
        "img": "https://i.imgur.com/ze79bFC.png",
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
        "img": "https://i.imgur.com/WMjyRLJ.png",
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
        "img": "https://i.imgur.com/VT9mTGb.png",
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
        "img": "https://i.imgur.com/rshnJPV.png",
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
        "img": "https://i.imgur.com/qsceD4I.png",
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
        "img": "https://i.imgur.com/pLdMjQ3.png",
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
        "img": "https://i.imgur.com/8DLUAPf.png",
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
        "img": "https://i.imgur.com/6KyhLqE.png",
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
        "img": "https://i.imgur.com/99w0Chm.png",
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
        "img": "https://i.imgur.com/yqNfNje.png",
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
        "img": "https://i.imgur.com/PrYzRcC.png",
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
        "img": "https://i.imgur.com/ceo4DhK.png",
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
        "img": "https://i.imgur.com/2YDuTk3.png",
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
        "img": "https://i.imgur.com/3zo4VKV.png",
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
        "img": "https://i.imgur.com/8TLXMST.png",
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
        "img": "https://i.imgur.com/IImsp7K.png",
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
        "img": "https://i.imgur.com/MZXJQq5.png",
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
        "img": "https://i.imgur.com/aX4WIH8.png",
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
        "img": "https://i.imgur.com/nPBvatH.png",
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
        "img": "https://i.imgur.com/3pDRgvR.png",
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
        "img": "https://i.imgur.com/bV0DaN7.png",
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
        "img": "https://i.imgur.com/J11NjNj.png",
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
        "img": "https://i.imgur.com/4Ufced2.png",
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
        "img": "https://i.imgur.com/qGMjnYk.png",
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
        "img": "https://i.imgur.com/ATTRSWU.png",
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
        "img": "https://i.imgur.com/nQ78Lz7.png",
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
        "img": "https://i.imgur.com/yJaD5ZV.png",
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
        "img": "https://i.imgur.com/xgAlECj.png",
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
        "img": "https://i.imgur.com/tZLYivt.png",
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
        "img": "https://i.imgur.com/VgJgaEf.png",
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
        "img": "https://i.imgur.com/sqgJ2St.png",
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
        "img": "https://i.imgur.com/lkoAJod.png",
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
        "img": "https://i.imgur.com/tDO653L.png",
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
        "img": "https://i.imgur.com/dup7Nt6.png",
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
        "img": "https://i.imgur.com/uQjbw1W.png",
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
        "img": "https://i.imgur.com/DfdaXPW.png",
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
        "img": "https://i.imgur.com/wVCcens.png",
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
        "img": "https://i.imgur.com/EpHQbiY.png",
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
        "img": "https://i.imgur.com/kJbv4dc.png",
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
        "img": "https://i.imgur.com/Fyn5yVx.png",
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
        "img": "https://i.imgur.com/39KYpvW.png",
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
        "img": "https://i.imgur.com/5yihisu.png",
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
        "img": "https://i.imgur.com/2ppPxny.png",
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
        "img": "https://i.imgur.com/zL4S8Mj.png",
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
        "img": "https://i.imgur.com/LgvoTaJ.png",
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
        "img": "https://i.imgur.com/VbqXiB6.png",
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
        "img": "https://i.imgur.com/OBqgP48.png",
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
        "img": "https://i.imgur.com/sNw61ap.png",
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
        "img": "https://i.imgur.com/sLiqEBA.png",
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
        "img": "https://i.imgur.com/6jq6eh6.png",
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
        "img": "https://i.imgur.com/090hLPL.png",
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
        "img": "https://i.imgur.com/y0UXwFO.png",
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
        "img": "https://i.imgur.com/WTZ97LE.png",
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
        "img": "https://i.imgur.com/3Xiqd22.png",
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
        "img": "https://i.imgur.com/gMpWdmA.png",
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
        "img": "https://i.imgur.com/fxCGmUk.png",
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
        "img": "https://i.imgur.com/brWCLVx.png",
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
        "img": "https://i.imgur.com/VAMLiJD.png",
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
        "img": "https://i.imgur.com/qwwL0bB.png",
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
        "img": "https://i.imgur.com/vWNeMaH.png",
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
        "img": "https://i.imgur.com/EJFQHQN.png",
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
        "img": "https://i.imgur.com/16RUacj.png",
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
        "img": "https://i.imgur.com/Zl2tN7W.png",
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
        "img": "https://i.imgur.com/SLLEccR.png",
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
        "img": "https://i.imgur.com/mc7ICW6.png",
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
        "img": "https://i.imgur.com/0ra00WG.png",
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
        "img": "https://i.imgur.com/xQOsFlZ.png",
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
        "img": "https://i.imgur.com/rGS7dyn.png",
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
        "img": "https://i.imgur.com/HLT338X.png",
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
        "img": "https://i.imgur.com/9Jje7ZQ.jpg",
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
        "img": "https://i.imgur.com/NsfLZjY.jpg",
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
        "img": "https://i.imgur.com/EH3Ulol.png",
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
        "img": "https://i.imgur.com/ql5KxJH.png",
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
        "img": "https://i.imgur.com/gYFhJ3Y.png",
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
        "img": "https://i.imgur.com/wWUStkF.png",
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
        "img": "https://i.imgur.com/wrPVhAo.png",
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
        "img": "https://i.imgur.com/8w9gAy2.png",
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
        "img": "https://i.imgur.com/DesAqAC.png",
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
        "img": "https://i.imgur.com/icWvMyo.png",
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
        "img": "https://i.imgur.com/LenxXR4.png",
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
        "img": "https://i.imgur.com/V9OznT1.png",
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
        "img": "https://i.imgur.com/Ke3316E.png",
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
        "img": "https://i.imgur.com/ru2vIIW.png",
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
        "img": "https://i.imgur.com/QTQt0ZL.png",
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
        "img": "https://i.imgur.com/CzcIMxF.png",
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
        "img": "https://i.imgur.com/GxeziYO.png",
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
        "img": "https://i.imgur.com/Z4jclTi.png",
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
        "img": "https://i.imgur.com/H2v2GPy.png",
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
        "img": "https://i.imgur.com/FltSdtv.png",
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
        "img": "https://i.imgur.com/Aaq99GQ.png",
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
        "img": "https://i.imgur.com/DKupiv1.png",
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
        "img": "https://i.imgur.com/BHwfCAQ.png",
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
        "img": "https://i.imgur.com/KNy3FZq.png",
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
        "img": "https://i.imgur.com/QA63m27.png",
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
        "img": "https://i.imgur.com/Ga4AYtv.png",
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
        "img": "https://i.imgur.com/iH2wqbd.png",
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
        "img": "https://i.imgur.com/ogONuLZ.png",
        "opts": {
            "series": [
                "book"
            ],
            "stage": []
        }
    },
    {
        "name": "Alpine Peak",
        "img": "https://i.imgur.com/Y4maOc8.png",
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
        "img": "https://i.imgur.com/cWjCo2j.png",
        "opts": {
            "series": [
                "book"
            ],
            "stage": []
        }
    },
    {
        "name": "Luigi's Island",
        "img": "https://i.imgur.com/uEBxsEX.png",
        "opts": {
            "series": [
                "book"
            ],
            "stage": []
        }
    },
    {
        "name": "Concord Town",
        "img": "https://i.imgur.com/Txu2P7S.png",
        "opts": {
            "series": [
                "book"
            ],
            "stage": []
        }
    },
    {
        "name": "Wetland Woods",
        "img": "https://i.imgur.com/XUI9vPo.png",
        "opts": {
            "series": [
                "book"
            ],
            "stage": []
        }
    },
    {
        "name": "Pianta Shore",
        "img": "https://i.imgur.com/1P5EXRt.png",
        "opts": {
            "series": [
                "book"
            ],
            "stage": []
        }
    },
    {
        "name": "Mystic Tangle",
        "img": "https://i.imgur.com/dQHnPPe.png",
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
        "img": "https://i.imgur.com/jEsJJo8.png",
        "opts": {
            "series": [
                "book"
            ],
            "stage": []
        }
    },
    {
        "name": "Canyon Run",
        "img": "https://i.imgur.com/a5V63gx.png",
        "opts": {
            "series": [
                "book"
            ],
            "stage": []
        }
    },
    {
        "name": "Festival Town",
        "img": "https://i.imgur.com/IZsGAMS.png",
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
        "img": "https://i.imgur.com/KuPiR2k.png",
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
        "img": "https://i.imgur.com/odH03t2.png",
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
        "img": "https://i.imgur.com/ytnL1xd.png",
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
        "img": "https://i.imgur.com/fX2Kqik.png",
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
        "img": "https://i.imgur.com/Wyc7YFw.png",
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
        "img": "https://i.imgur.com/dg9jLHv.png",
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
        "img": "https://i.imgur.com/02Xb4pU.png",
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
        "img": "https://i.imgur.com/p529JgT.png",
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
        "img": "https://i.imgur.com/wxE7cBm.png",
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
        "img": "https://i.imgur.com/3iNNL0c.png",
        "opts": {
            "series": [
                "PoDD"
            ],
            "stage": []
        }
    },
    {
        "name": "Melody Sanctum",
        "img": "https://i.imgur.com/kRSGtpq.png",
        "opts": {
            "series": [
                "PoDD"
            ],
            "stage": []
        }
    },
    {
        "name": "GBA Riverside Park",
        "img": "https://i.imgur.com/rBvKMk5.png",
        "opts": {
            "series": [
                "PoDD"
            ],
            "stage": []
        }
    },
    {
        "name": "Camp Kartigan",
        "img": "https://i.imgur.com/VIf5gUK.png",
        "opts": {
            "series": [
                "PoDD"
            ],
            "stage": []
        }
    },
    {
        "name": "SNES Mario Circuit 2",
        "img": "https://i.imgur.com/tZFBycy.png",
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
        "img": "https://i.imgur.com/c9rnG3n.png",
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
        "img": "https://i.imgur.com/dko67SJ.png",
        "opts": {
            "series": [
                "PoDD"
            ],
            "stage": []
        }
    },
    {
        "name": "N64 Wario Stadium",
        "img": "https://i.imgur.com/m8wXE5U.png",
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
        "img": "https://i.imgur.com/0rvq1ph.png",
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
        "img": "https://i.imgur.com/iIPftHn.png",
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
        "img": "https://i.imgur.com/ivUSwxp.png",
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
        "img": "https://i.imgur.com/bYA9E16.png",
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
        "img": "https://i.imgur.com/TIOTtV9.png",
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
        "img": "https://i.imgur.com/2QUbCrU.png",
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
        "img": "https://i.imgur.com/nDM5aB6.png",
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
        "img": "https://i.imgur.com/KaBuRTW.png",
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
        "img": "https://i.imgur.com/FfcmDgp.png",
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
        "img": "https://i.imgur.com/r6w7TX1.png",
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
        "img": "https://i.imgur.com/PcPqkdO.png",
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
        "img": "https://i.imgur.com/0YT7QlS.png",
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
        "img": "https://i.imgur.com/gPE95S7.png",
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
        "img": "https://cdn.discordapp.com/attachments/1137316728024604723/1151958653167992852/BsVAClC.png",
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
        "img": "https://cdn.discordapp.com/attachments/1137316728024604723/1151958653528715344/0f5IHG7.png",
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
        "img": "https://cdn.discordapp.com/attachments/1137316728024604723/1151958653897801908/3v0pPH1.png",
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
        "img": "https://i.imgur.com/qdveFSy.png",
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
        "img": "https://cdn.discordapp.com/attachments/1137316728024604723/1151958654157861014/06c9efca6f2e16d7d28b41554445127d.png",
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
        "img": "https://cdn.discordapp.com/attachments/1137316728024604723/1151958654501802015/9pww5pzvlp981.png",
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
        "img": "https://cdn.discordapp.com/attachments/1137316728024604723/1151958654942183505/9yqdO5R.png",
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
        "img": "https://cdn.discordapp.com/attachments/1137316728024604723/1151958654942183505/9yqdO5R.png",
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
        "img": "https://cdn.discordapp.com/attachments/1137316728024604723/1151958655319683112/48jjhgpad8y51.jpg",
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
        "img": "https://cdn.discordapp.com/attachments/1137316728024604723/1151958655663603712/422ba474a0506609819fb9887b13581f.jpg",
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
        "img": "https://cdn.discordapp.com/attachments/1137316728024604723/1151958656074657884/9fFjVMk.png",
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
        "img": "https://cdn.discordapp.com/attachments/1137316728024604723/1151958729995067454/104724.jpg",
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
        "img": "https://cdn.discordapp.com/attachments/1137316728024604723/1151958730259312751/ck6qgI1.png",
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
        "img": "https://cdn.discordapp.com/attachments/1137316728024604723/1151958730506784909/e0593987ac4fb40b2aba0d8e0df76915.jpg",
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
        "img": "https://cdn.discordapp.com/attachments/1137316728024604723/1151958730762625105/EHUS1SKUUAEk8VM.png",
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
        "img": "https://cdn.discordapp.com/attachments/1137316728024604723/1151958731031064617/893e974e5a26934392af1d3f1eba0afe.jpg",
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
        "img": "https://cdn.discordapp.com/attachments/1137316728024604723/1151958731274342440/104720.jpg",
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
        "img": "https://cdn.discordapp.com/attachments/1137316728024604723/1151958731484045392/104721.jpg",
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
        "img": "https://cdn.discordapp.com/attachments/1137316728024604723/1151958731706347630/104722.jpg",
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
        "img": "https://cdn.discordapp.com/attachments/1137316728024604723/1151958731928653994/104723.jpg",
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
        "img": "https://cdn.discordapp.com/attachments/1137316728024604723/1151958759028035604/Fkyux24WIAA84nz.png",
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
        "img": "https://cdn.discordapp.com/attachments/1137316728024604723/1151958759283896370/FQvYCbc.png",
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
        "img": "https://cdn.discordapp.com/attachments/1137316728024604723/1151958759522963586/FVLDavHWUAEragh.jpg",
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
        "img": "https://cdn.discordapp.com/attachments/1137316728024604723/1151958759816572948/image.png",
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
        "img": "https://cdn.discordapp.com/attachments/1137316728024604723/1151958760210829474/images_1.jpg",
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
        "img": "https://cdn.discordapp.com/attachments/1137316728024604723/1151958760642838548/IMG_8386.jpg",
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
        "img": "https://cdn.discordapp.com/attachments/1137316728024604723/1151958760928063579/jKRu0xZ.png",
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
        "img": "https://cdn.discordapp.com/attachments/1137316728024604723/1151958761192296488/Eww65JeUYAkUjZT.jpg",
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
        "img": "https://cdn.discordapp.com/attachments/1137316728024604723/1151958761523654686/F2KtF_aaoAEAf9n.jpg",
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
        "img": "https://cdn.discordapp.com/attachments/1137316728024604723/1151958798974586880/May.jpg",
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
        "img": "https://cdn.discordapp.com/attachments/1137316728024604723/1151958799343702056/May2.png",
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
        "img": "https://cdn.discordapp.com/attachments/1137316728024604723/1151958799691821076/May4.jpg",
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
        "img": "https://cdn.discordapp.com/attachments/1137316728024604723/1151958800102871070/May5.png",
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
        "img": "https://cdn.discordapp.com/attachments/1137316728024604723/1151958800379686974/Minnie-May-Hopkins-Gunsmith-Cats-manga-f.jpg",
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
        "img": "https://cdn.discordapp.com/attachments/1137316728024604723/1151958800698445834/mugi.png",
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
        "img": "https://cdn.discordapp.com/attachments/1137316728024604723/1151958801017221130/mzbLkiN.png",
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
        "img": "https://cdn.discordapp.com/attachments/1137316728024604723/1151958801331785829/mamimiPray.png",
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
        "img": "https://cdn.discordapp.com/attachments/1137316728024604723/1151958802032242718/mamimiWAAAAAH.png",
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
        "img": "https://cdn.discordapp.com/attachments/1137316728024604723/1151958824891195442/slgOLYI.png",
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
        "img": "https://cdn.discordapp.com/attachments/1137316728024604723/1151958825134473286/ttDbdVY.png",
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
        "img": "https://cdn.discordapp.com/attachments/1137316728024604723/1151958825369337976/y4F86vq.png",
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
        "img": "https://cdn.discordapp.com/attachments/1137316728024604723/1151958825658753045/2I6T6aO.png",
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
        "img": "https://cdn.discordapp.com/attachments/1137316728024604723/1151958825906225272/5a2bar.png",
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
        "img": "https://cdn.discordapp.com/attachments/1137316728024604723/1151958826208198676/6sfmsp0w6xe61.jpg",
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
        "img": "https://cdn.discordapp.com/attachments/1137316728024604723/1151958826497613884/osaka5.png",
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
        "img": "https://cdn.discordapp.com/attachments/217126063803727872/1151955585332432896/ybsad.png",
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
        "img": "https://cdn.discordapp.com/attachments/217126063803727872/1151955157123346473/alivechamp.png",
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
        "img": "https://cdn.discordapp.com/attachments/1137316728024604723/1151958826774446150/ranma9.jpg",
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
        "img": "https://cdn.discordapp.com/attachments/1137316728024604723/1151958827038670920/shampoo.jpg",
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
        "img": "https://cdn.discordapp.com/attachments/1139612639572541460/1150471823968976916/RDT_20230910_140502965415887357621413.jpg",
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
        "img": "https://cdn.discordapp.com/attachments/1137316728024604723/1151958847007768646/FQEbE-cXMAAprlE.jpg",
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
        "img": "https://cdn.discordapp.com/attachments/1137316728024604723/1151958849008435231/ETOOTz9.png",
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
        "img": "https://cdn.discordapp.com/attachments/1137316728024604723/1151961857641422929/trollato.png",
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
        "img": "https://cdn.discordapp.com/attachments/1137316728024604723/1151958861977231470/tumblr_bbe71d78235bd0b684cb83a3b171b361_85c8a245_640.jpg",
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
        "img": "https://cdn.discordapp.com/attachments/1137316728024604723/1151958863210348644/ranma5.jpg",
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
        "img": "https://cdn.discordapp.com/attachments/1137316728024604723/1151961828050616350/osF.png",
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
        "img": "https://cdn.discordapp.com/attachments/1137316728024604723/1151961827815723098/oie.png",
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
        "img": "https://cdn.discordapp.com/attachments/1137316728024604723/1151961858807447693/YoshinoSleepy.png",
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
        "img": "https://cdn.discordapp.com/attachments/1137316728024604723/1151962228380143627/copium.png",
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
        "img": "https://cdn.discordapp.com/attachments/1137316728024604723/1151961857918255124/wearybread.png",
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
        "img": "https://cdn.discordapp.com/attachments/1137316728024604723/1151961829501845575/ree.png",
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
        "img": "https://cdn.discordapp.com/attachments/1137316728024604723/1151958848756789248/cbe8f8c23b0d0e0ebe85d0903ecc990c.jpg",
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
        "img": "https://cdn.discordapp.com/attachments/1137316728024604723/1151958849272692737/F5hZHrzXoAAFF8Y.jpg",
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
