import { router } from "expo-router";

export const navigateTo = {
    signIn: () => router.push('/signIn'),
    signUp: () => router.push('/signUp'),
    home: () => router.push('/home'),
    card: () => router.push('/card'),
    payment: () => router.push('/payment'),
    voucher: () => router.push('/voucher'),
    more: () => router.push('/voucher'),
    profile: () => router.push('/profile'),

}