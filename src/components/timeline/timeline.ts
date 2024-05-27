export const timelineJSON: timelineJSONProps = [
  {
    timestamp: "2005, Dec",
    date: "2005-12-05",
    title: { ja: "誕生日", en: "Birthday" },
    description: { ja: "東京で誕生しました。", en: "I was born in Tokyo." },
  },
  {
    timestamp: "2011, March",
    date: "2011-03-01",
    title: { ja: "東日本大震災", en: "Great East Japan Earthquake" },
    description: {
      ja: "東京にて大震災を経験。",
      en: "Experienced the earthquake in Tokyo.",
    },
  },
  {
    timestamp: "2011, March",
    date: "2011-05-01",
    title: { ja: "愛媛へ引っ越し", en: "Moved to Ehime" },
    description: {
      ja: "震災の後、母の実家の愛媛へ引っ越しました。",
      en: "After the earthquake, I moved to my mother's hometown in Ehime.",
    },
  },
  {
    timestamp: "2017, Jan",
    date: "2017-01-01",
    title: { ja: "ニュージーランドへ留学", en: "Went to New Zealand" },
    description: {
      ja: "ニュージーランド、オークランドへ留学。現地の中学校へ行く。",
      en: "I went to New Zealand and went to local juniour high school in Auckland.",
    },
  },
  {
    timestamp: "2018, April",
    date: "2018-04-01",
    title: { ja: "フィリピンへ留学", en: "Went to The Phillippines" },
    description: {
      ja: "フィリピンにあるセブ島へ留学。現地の語学学校へ3ヶ月間、中学校へ1年間行く。",
      en: "I went to The Phillippines and went to English School for 3 months, then went to local juniour high school for a year in Cebu.",
    },
  },
  {
    timestamp: "2018, Aug",
    date: "2018-08-01",
    title: { ja: "ニュージーランドへ移住", en: "Went back to New Zealand" },
    description: {
      ja: "オークランドの男子校へ行く。ここで5年間過ごしました。",
      en: "I went to high school in Auckland. I went to this high school for 5 years.",
    },
  },
  {
    timestamp: "2018, October",
    date: "2018-10-01",
    title: { ja: "サッカーで膝を怪我", en: "Injury from playing soccer" },
    description: {
      ja: "膝前十字靭帯損傷（ACL）という怪我をする。\nPhysioへ通い始める。",
      en: "Anterior cruciate ligament tear (ACL)\nStarted going to Physio.",
    },
  },
  {
    timestamp: "2020, June",
    date: "2020-06-01",
    title: { ja: "2度目のACL", en: "ACL 2nd time" },
    description: {
      ja: "Physioへ一年行った結果、ほぼ回復したので軽いスポーツを始めました。見事にACL再発です。",
      en: "After going to physio for a year, I've almost recovered and started doing some light sports.\nThis resulted in a 2nd ACL.",
    },
  },
  {
    timestamp: "2020, July",
    date: "2020-07-30",
    title: { ja: "膝の手術（ACL）", en: "ACL surgery" },
    description: {
      ja: "ACLの怪我をしたので、手術をしました。",
      en: "I did an ACL surgery.",
    },
  },
  {
    timestamp: "2023, Dec",
    date: "2023-12-01",
    title: { ja: "5年ぶりに日本へ帰国", en: "Back to Japan since 5 years!" },
    description: {
      ja: "5年ぶりに日本へ帰国し、4つの企業を訪問しました。\n- マイクロソフト\n- HENNGE\n- サイボウズ\n- Soulware",
      en: "I went back to Japan since 5 years! I have visited 4 companies:\n- Microsoft\n- HENNGE\n- Cybozu\n- Soulware",
    },
  },
  {
    timestamp: "2024, January",
    date: "2024-01-01",
    title: { ja: "オークランドへ入学", en: "Got into University of Auckland" },
    description: {
      ja: "無事高校を卒業し、オークランドへ入学しました。\nComputer ScienceとIT Managementの専攻です。",
      en: "I graduated from high school and got into University of Auckland.\nI'm majoring in Computer Science and IT Management.",
    },
  },
]

export type timelineJSONProps = {
  timestamp?: string
  date: string
  title: {
    ja: string
    en: string
  }
  description: {
    ja: string
    en: string
  }
}[]
