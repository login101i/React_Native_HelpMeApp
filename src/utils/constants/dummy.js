import { COLORS } from "./theme";
import icons from "./icons";

function randomIcon() {
  var random =
    Object.keys(icons)[Math.floor(Math.random() * Object.keys(icons).length)];

  return icons[random];
}

export const portfolio = {
  balance: "12,724.33",
  changes: "+2.36%",
};

export const categoriesData = [
  {
    id: 1,
    image:
      "https://a.allegroimg.com/original/12d19d/a165831145bbb7717c71622b5342",
    text: "Allegro Smart!",
  },
  {
    id: 2,
    image:
      "https://a.allegroimg.com/original/12f06f/06c6fa154dd3a1e9728d5d0d4461",
    text: "Kup i odbierz prezent",
  },
  {
    id: 3,
    image:
      "https://a.allegroimg.com/original/122e02/aaec080448d1abf007cf4bd7a644",
    text: "Sprawdź Allegro Pay",
  },
  {
    id: 4,
    image:
      "https://a.allegroimg.com/original/12a614/8936f2e7423baecd12b6de3a3a27",
    text: "Jesienny relaks",
  },
  {
    id: 5,
    image:
      "https://a.allegroimg.com/original/121754/d83d42cd42f2a907274a5c25c39a",
    text: "Opony zimowe",
  },
  {
    id: 6,
    image:
      "https://a.allegroimg.com/original/126276/36f8a3c94a9199f94fd1c8c69d1c",
    text: "Dla Ciebie i pupila",
  },
  {
    id: 7,
    image:
      "https://a.allegroimg.com/original/12dc35/abaf45694b9ea454f515d492a763",
    text: "Super cena!",
  },
  {
    id: 8,
    image:
      "https://a.allegroimg.com/original/1216b5/8a3e5ab549859d5de2ce0f64aa83",
    text: "Światło dla Ciebie",
  },
];

export const categories = [
  {
    id: 1,
    icon: randomIcon(),
    borderColor: COLORS.red,
    categoryTitle: "Elektronika",
  },
  {
    id: 2,
    icon: randomIcon(),
    borderColor: COLORS.green,
    categoryTitle: "Moda",
  },
  {
    id: 3,
    icon: randomIcon(),
    borderColor: COLORS.yellow,
    categoryTitle: "Dom i Ogród",
  },
  {
    id: 4,
    icon: randomIcon(),
    borderColor: COLORS.allegroColor,
    categoryTitle: "Dziecko",
  },
  {
    id: 5,
    icon: randomIcon(),
    borderColor: COLORS.pink,
    categoryTitle: "Supermarket",
  },
  {
    id: 6,
    icon: randomIcon(),
    borderColor: COLORS.twitterColor,
    categoryTitle: "Uroda",
  },
  {
    id: 7,
    icon: randomIcon(),
    borderColor: COLORS.secondary,
    categoryTitle: "Zdrowie",
  },
  {
    id: 8,
    icon: randomIcon(),
    borderColor: COLORS.linkColor,
    categoryTitle: "Kultura i rozrywka",
  },
  {
    id: 8,
    icon: randomIcon(),
    borderColor: COLORS.gray,
    categoryTitle: "Sport i turystyka",
  },
  {
    id: 9,
    icon: randomIcon(),
    borderColor: COLORS.lightBlue,
    categoryTitle: "Motoryzacja",
  },
  {
    id: 10,
    icon: randomIcon(),
    borderColor: COLORS.twitterColor,
    categoryTitle: "Uroda",
  },
  {
    id: 11,
    icon: randomIcon(),
    borderColor: COLORS.secondary,
    categoryTitle: "Zdrowie",
  },
  {
    id: 12,
    icon: randomIcon(),
    borderColor: COLORS.linkColor,
    categoryTitle: "Kultura i rozrywka",
  },
  {
    id: 13,
    icon: randomIcon(),
    borderColor: COLORS.gray,
    categoryTitle: "Sport i turystyka",
  },
  {
    id: 14,
    icon: randomIcon(),
    borderColor: COLORS.lightBlue,
    categoryTitle: "Motoryzacja",
  },
];

export const transactionHistory = [
  {
    id: 1,
    description: "Sold Ethereum",
    amount: -2.0034,
    currency: "ETH",
    type: "S", // S - Sold, B - Bought
    date: "14:20 12 Apr",
  },
  {
    id: 2,
    description: "Bought Ethereum",
    amount: 2.0034,
    currency: "ETH",
    type: "B",
    date: "14:20 12 Apr",
  },
  {
    id: 3,
    description: "Sold Ethereum",
    amount: -2.0034,
    currency: "ETH",
    type: "S",
    date: "14:20 12 Apr",
  },
  {
    id: 4,
    description: "Bought Ethereum",
    amount: 2.0034,
    currency: "ETH",
    type: "B",
    date: "14:20 12 Apr",
  },
  {
    id: 5,
    description: "Bought Ethereum",
    amount: 2.0034,
    currency: "ETH",
    type: "B",
    date: "14:20 12 Apr",
  },

  {
    id: 6,
    description: "Bought Ethereum",
    amount: 2.0034,
    currency: "ETH",
    type: "B",
    date: "14:20 12 Apr",
  },
  {
    id: 7,
    description: "Bought Ethereum",
    amount: 2.0034,
    currency: "ETH",
    type: "B",
    date: "14:20 12 Apr",
  },
  {
    id: 8,
    description: "Bought Ethereum",
    amount: 2.0034,
    currency: "ETH",
    type: "B",
    date: "14:20 12 Apr",
  },
  {
    id: 9,
    description: "Bought Ethereum",
    amount: 2.0034,
    currency: "ETH",
    type: "B",
    date: "14:20 12 Apr",
  },
];

const chartOptions = [
  {
    id: 1,
    label: "1 hr",
  },
  {
    id: 2,
    label: "3 Days",
  },
  {
    id: 3,
    label: "1 Week",
  },
  {
    id: 4,
    label: "1 Month",
  },
  {
    id: 5,
    label: "3 Months",
  },
];

const dummyData = {
  portfolio,
  categoriesData,
  transactionHistory,
  chartOptions,
  categories,
};

export default dummyData;
