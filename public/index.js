const app = new Vue({
  el: "main",
  data: {
    airports: [
      {
        name: "東京（羽田）",
        code: "RJTT"
      },{
        name: "大阪（関西）",
        code: "RJBB"
      },{
        name: "台湾（桃園）",
        code: "RCTP"
      },{
        name: "サンフランシスコ",
        code: "KSFO"
      },
    ],
    airplanes: ["B787-9", "A350-900", "B777-200ER", "B787-10"],
    members: [
      {
        name: "乱健",
        position: "社長・旅客部長",
        id: "RaNKeN_TNT",
      },{
        name: "ヒロシ",
        position: "貨物部長",
        id: "freedomsky231",
      },{
        name: "ふぃじーく",
        id: "Fizik_JPN",
      },{
        name: "みそぴー",
        id: "MISOP_29",
      },{
        name: "村上太郎",
        id: "murakami_taro1",
      },{
        name: "誰かの友達",
        id: "DarekanoTo_JPN",
      },{
        name: "pehalute",
        id: "pehalute",
      },
    ]
  }
})