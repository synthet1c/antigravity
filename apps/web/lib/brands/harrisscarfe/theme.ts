import { palette } from "../palette"

const hs = {
    ...palette,
    primary: {
        classicGreen: '#449C2D',
        darkGreen: '#004D23',
        confidence: '#49B54A',
        celadon: '#B7D8BA',
        jade: '#8ED38E',
    },
    secondary: {
        dimGrey: '#636C71',
        battleShipGrey: '#898989',
        aliceGrey: '#F20304',
        snow: '#FBFBFB',
        tea: '#D4F5CC',
        spring: '#EDEFB5',
        leaf: '#F6F7DA'
    },
    focus: {
        brightGrey: '#E7E9EB',
        peach: '#FFEEEA',
        champaigne: '#F9E1CC',
    },
    accents: {
        navy: '#00193C',
        spaceBlue: '#102B52',
        lime: '#D7DF23',
        pumpkin: '#F36522',
        red: '#E7131A',
    }
}

export const theme = {
    primary: hs.primary.classicGreen,
    primaryAltTwo: hs.primary.darkGreen,
    primaryAltThree: hs.primary.confidence,

    secondary: hs.secondary.dimGrey,
    secondaryAltTwo: hs.secondary.battleShipGrey,
    secondaryAltThree: hs.secondary.aliceGrey,
    secondaryAltFour: hs.secondary.snow,
    secondaryAltFive: hs.secondary.tea,

    focusSuccess: hs.focus.brightGrey,
    focusSuccessLight: hs.focus.peach,
    focusBlue: hs.focus.champaigne,

    background: palette.standard.white,
    text: palette.text.default,
    blue: hs.primary.classicGreen,
    green: hs.primary.darkGreen,
    orange: hs.primary.confidence,
    red: hs.accents.red,
    white: palette.standard.white,
    black: palette.standard.black,
}