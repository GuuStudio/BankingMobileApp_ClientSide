import { ImageSourcePropType } from "react-native"

export type profileFunction = {
    id: number
    imgUrl: ImageSourcePropType,
    title: string
}

export const profileFunctions: profileFunction[] = [
    { id: 1, imgUrl: require('../assets/images/scanUser.png'), title: 'Identification Level' },
    { id: 2, imgUrl: require('../assets/images/phoneUser.png'), title: 'Identification documents' },
    { id: 3, imgUrl: require('../assets/images/mail.png'), title: 'Email' },
    { id: 4, imgUrl: require('../assets/images/changepassword.png'), title: 'Change password' },
] 