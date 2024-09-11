import { cardSquare } from "./CardArrays";
import { list_func } from "./HomeArray";

export const payments: list_func[] = [
    { id: 1, img_url: require('../assets/images/Electricity.png'), title: 'Electric' },
    { id: 2, img_url: require('../assets/images/waterDrop.png'), title: 'Water' },
    { id: 3, img_url: require('../assets/images/smartphone.png'), title: 'Postpaid mobile' },
    { id: 4, img_url: require('../assets/images/internet.png'), title: 'Internet' },
    { id: 5, img_url: require('../assets/images/phoneplus.png'), title: 'Phone Topup' },
    { id: 6, img_url: require('../assets/images/tax.png'), title: 'Tax' },
    { id: 7, img_url: require('../assets/images/vetc.png'), title: 'VETC' },
    { id: 8, img_url: require('../assets/images/epass.png'), title: 'ePass' },
]

export const transfers: cardSquare[] = [
    { imgUrl: require('../assets/images/cardRate.png'), title: 'Domestic' },
    { imgUrl: require('../assets/images/cardRate.png'), title: 'Foreign' },
    { imgUrl: require('../assets/images/cardRate.png'), title: 'Partner' },
]