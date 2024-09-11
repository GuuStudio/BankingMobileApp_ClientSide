
type cardHorizon = {
    title1: string,
    title2: string,
    imgUrl: string
}
type linkCard = {
    title: string,
    imgUrl: string
}
export const card_Horizons: cardHorizon[] = [
    { title1: 'JCB CREDIT | *** 5215', title2: '0', imgUrl: require('../assets/images/creditCard.png') },
    { title1: 'VISA DEBIT NORMAL | *** 9228', title2: '6,000,000', imgUrl: require('../assets/images/credit-card-black.png') },
]
export const linkCards: linkCard[] = [
    { title: 'Iternational creadit card linked: MB and SHOPEEFOOD', imgUrl: require('../assets/images/poster-horizon1.jpg') },
    { title: 'Hybrid card linked: MB and EVIP CARE', imgUrl: require('../assets/images/poster-horizon-2.jpg') },

]
export const vouchers = [
    require('../assets/images/voucher-horizon-1.png'),
    require('../assets/images/voucher-horizon-2.png'),
    require('../assets/images/voucher-horizon-3.png'),
]



export type cardSquare = {
    imgUrl: string,
    title: string
}

export const card_Squares_1: cardSquare[] = [
    { imgUrl: require('../assets/images/cardRate.png'), title: '0% Instalment' },
    { imgUrl: require('../assets/images/coin.png'), title: 'Card payment' },
    { imgUrl: require('../assets/images/cardDentify.png'), title: 'Dentification' },
    { imgUrl: require('../assets/images/cardPlus.png'), title: 'Card issuance' },
]

export const card_Vertical_1 = [
    require('../assets/images/credit-cart-vercical1.png'),
    require('../assets/images/credit-cart-vercical2.png'),
    require('../assets/images/credit-cart-vercical3.png'),
    require('../assets/images/credit-cart-vercical4.png'),
    require('../assets/images/credit-cart-vercical5.png'),
    require('../assets/images/credit-cart-vercical6.png'),
]

