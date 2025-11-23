import { palette } from "../palette"

const koo = {
    ...palette,
    primary: {
        charcoal: '#323E48',
        lipstick: '#993466',
        salmon: '#DE9385',
        poloBlue: '#8FB7D0',
        stream: '#B8C0D2'
    },
    secondary: {
        lapisBlue: '#2C416E',
        paleLeaf: '#BFCAAC',
        vanilla: '#D6C5B3',
        sunset: '#E5BF85',
        softMud: '#EFDFC5',
    },
    focus: {
        blush: '#CO779B',
        willow: '#E0E4D7',
        platinum: '#DEE7E8',
    },
    accents: {
        persianRed: '#C72833',
    }
}

export const theme = {
    primary: koo.primary.charcoal,
    primaryAltTwo: koo.primary.lipstick,
    primaryAltThree: koo.primary.salmon,

    secondary: koo.secondary.lapisBlue,
    secondaryAltTwo: koo.secondary.paleLeaf,
    secondaryAltThree: koo.secondary.vanilla,
    secondaryAltFour: koo.secondary.sunset,
    secondaryAltFive: koo.secondary.softMud,

    focusSuccess: koo.focus.blush,
    focusSuccessLight: koo.focus.willow,
    focusBlue: koo.focus.platinum,

    background: palette.standard.white,
    text: palette.text.default,
    blue: koo.primary.poloBlue,
    green: koo.focus.blush,
    orange: palette.standard.orange,
    red: koo.accents.persianRed,
    white: palette.standard.white,
    black: palette.standard.black,
}