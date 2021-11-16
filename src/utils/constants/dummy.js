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

export const trendingCurrencies = [
	{
		id: 1,
		currency: "Bitcoin",
		code: "BTC",
		image: require("../assets/images/bitcoin.png"),
		amount: "29,455.74",
		changes: "+7.24%",
		type: "I", // I - Increased, D - Decreased
		description:
			"Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto. The currency began use in 2009 when its implementation was released as open-source software.",
		chartData: [
			{ x: 1, y: 2.5 },
			{ x: 1.5, y: 2 },
			{ x: 2, y: 2.3 },
			{ x: 2.5, y: 1.4 },
			{ x: 3, y: 1.5 },
			{ x: 3.5, y: 2.3 },
			{ x: 4, y: 2.8 },
		],
		wallet: {
			value: "170435.86",
			crypto: "5.1",
		},
		transactionHistory: [
			{
				id: 1,
				description: "Sold Bitcoin",
				amount: -2.0034,
				currency: "BTC",
				type: "S", // S - Sold, B - Bought
				date: "14:20 12 Apr",
			},
			{
				id: 2,
				description: "Bought Bitcoin",
				amount: 2.0034,
				currency: "BTC",
				type: "B",
				date: "14:20 12 Apr",
			},
			{
				id: 3,
				description: "Sold Bitcoin",
				amount: -2.0034,
				currency: "BTC",
				type: "S",
				date: "14:20 12 Apr",
			},
			{
				id: 4,
				description: "Bought Bitcoin",
				amount: 2.0034,
				currency: "BTC",
				type: "B",
				date: "14:20 12 Apr",
			},
			{
				id: 5,
				description: "Bought Bitcoin",
				amount: 2.0034,
				currency: "BTC",
				type: "B",
				date: "14:20 12 Apr",
			},

			{
				id: 6,
				description: "Bought Bitcoin",
				amount: 2.0034,
				currency: "BTC",
				type: "B",
				date: "14:20 12 Apr",
			},
			{
				id: 7,
				description: "Bought Bitcoin",
				amount: 2.0034,
				currency: "BTC",
				type: "B",
				date: "14:20 12 Apr",
			},
			{
				id: 8,
				description: "Bought Bitcoin",
				amount: 2.0034,
				currency: "BTC",
				type: "B",
				date: "14:20 12 Apr",
			},
			{
				id: 9,
				description: "Bought Bitcoin",
				amount: 2.0034,
				currency: "BTC",
				type: "B",
				date: "14:20 12 Apr",
			},
		],
	},
	{
		id: 2,
		currency: "Ethereum",
		code: "ETH",
		image: require("../assets/images/ethereum.png"),
		amount: "919.03",
		changes: "-0.73%",
		type: "D",
		description:
			"Ethereum is a decentralized, open-source blockchain featuring smart contract functionality. Ether is the native cryptocurrency of the platform. It is the second-largest cryptocurrency by market capitalization, after Bitcoin. Ethereum is the most actively used blockchain.",
		chartData: [
			{ x: 1, y: 2 },
			{ x: 1.5, y: 2.3 },
			{ x: 2, y: 2 },
			{ x: 2.5, y: 2.2 },
			{ x: 3, y: 1.5 },
			{ x: 3.5, y: 2.1 },
			{ x: 4, y: 2.5 },
		],
		wallet: {
			value: "18409.24",
			crypto: "13.7",
		},
		transactionHistory: [
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
		],
	},
	{
		id: 3,
		currency: "Litecoin",
		code: "LTC",
		image: require("../assets/images/litecoin.png"),
		amount: "118.33",
		changes: "+1.73%",
		type: "I",
		description:
			"Litecoin is a peer-to-peer cryptocurrency and open-source software project released under the MIT/X11 license. Litecoin was an early bitcoin spinoff or altcoin, starting in October 2011. In technical details, Litecoin is nearly identical to Bitcoin.",
		chartData: [
			{ x: 1, y: 2.6 },
			{ x: 1.5, y: 2.2 },
			{ x: 2, y: 2 },
			{ x: 2.5, y: 2.2 },
			{ x: 3, y: 1.6 },
			{ x: 3.5, y: 2.1 },
			{ x: 4, y: 2.5 },
		],
		wallet: {
			value: "13139.23",
			crypto: "100.2",
		},
		transactionHistory: [
			{
				id: 1,
				description: "Sold Litecoin",
				amount: -2.0034,
				currency: "LTC",
				type: "S", // S - Sold, B - Bought
				date: "14:20 12 Apr",
			},
			{
				id: 2,
				description: "Bought Litecoin",
				amount: 2.0034,
				currency: "LTC",
				type: "B",
				date: "14:20 12 Apr",
			},
			{
				id: 3,
				description: "Sold Litecoin",
				amount: -2.0034,
				currency: "LTC",
				type: "S",
				date: "14:20 12 Apr",
			},
			{
				id: 4,
				description: "Bought Litecoin",
				amount: 2.0034,
				currency: "LTC",
				type: "B",
				date: "14:20 12 Apr",
			},
			{
				id: 5,
				description: "Bought Litecoin",
				amount: 2.0034,
				currency: "LTC",
				type: "B",
				date: "14:20 12 Apr",
			},
			{
				id: 6,
				description: "Bought Litecoin",
				amount: 2.0034,
				currency: "LTC",
				type: "B",
				date: "14:20 12 Apr",
			},
			{
				id: 7,
				description: "Bought Litecoin",
				amount: 2.0034,
				currency: "LTC",
				type: "B",
				date: "14:20 12 Apr",
			},
			{
				id: 8,
				description: "Bought Litecoin",
				amount: 2.0034,
				currency: "LTC",
				type: "B",
				date: "14:20 12 Apr",
			},
			{
				id: 9,
				description: "Bought Litecoin",
				amount: 2.0034,
				currency: "LTC",
				type: "B",
				date: "14:20 12 Apr",
			},
		],
	},
	{
		id: 4,
		currency: "Ripple",
		code: "XRP",
		image: require("../assets/images/ripple.png"),
		amount: "0.24",
		changes: "-0.51%",
		type: "D",
		description:
			"Ripple is a real-time gross settlement system, currency exchange and remittance network created by Ripple Labs Inc., a US-based technology company.",
		chartData: [
			{ x: 1, y: 2.3 },
			{ x: 1.5, y: 2.3 },
			{ x: 2, y: 2.5 },
			{ x: 2.5, y: 2.1 },
			{ x: 3, y: 2.2 },
			{ x: 3.5, y: 1.8 },
			{ x: 4, y: 2.5 },
		],
		wallet: {
			value: "2000.0",
			crypto: "6000.0",
		},
		transactionHistory: [
			{
				id: 1,
				description: "Sold Ripple",
				amount: -2.0034,
				currency: "XRP",
				type: "S", // S - Sold, B - Bought
				date: "14:20 12 Apr",
			},
			{
				id: 2,
				description: "Bought Ripple",
				amount: 2.0034,
				currency: "XRP",
				type: "B",
				date: "14:20 12 Apr",
			},
			{
				id: 3,
				description: "Sold Ripple",
				amount: -2.0034,
				currency: "XRP",
				type: "S",
				date: "14:20 12 Apr",
			},
			{
				id: 4,
				description: "Bought Ripple",
				amount: 2.0034,
				currency: "XRP",
				type: "B",
				date: "14:20 12 Apr",
			},
			{
				id: 5,
				description: "Bought Ripple",
				amount: 2.0034,
				currency: "XRP",
				type: "B",
				date: "14:20 12 Apr",
			},
			{
				id: 6,
				description: "Bought Ripple",
				amount: 2.0034,
				currency: "XRP",
				type: "B",
				date: "14:20 12 Apr",
			},
			{
				id: 7,
				description: "Bought Ripple",
				amount: 2.0034,
				currency: "XRP",
				type: "B",
				date: "14:20 12 Apr",
			},
			{
				id: 8,
				description: "Bought Ripple",
				amount: 2.0034,
				currency: "XRP",
				type: "B",
				date: "14:20 12 Apr",
			},
			{
				id: 9,
				description: "Bought Ripple",
				amount: 2.0034,
				currency: "XRP",
				type: "B",
				date: "14:20 12 Apr",
			},
		],
	},
];

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
		text: `Sprawdź Allegro Pay`,
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
	trendingCurrencies,
	categoriesData,
	transactionHistory,
	chartOptions,
	categories,
};

export default dummyData;
