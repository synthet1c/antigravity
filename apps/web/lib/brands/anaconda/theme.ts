import { palette } from "../palette"

const ana = {
    ...palette,
    primary: {
        anacondaOrange: '#F58220',
        anacondaBlue: '#00A1CB',
        anacondaGreen: '#84BD00',
    },
    secondary: {
        tangerine: '#DB741C',
        coral: '#F6C48D',
        seashell: '#FFEFE1',
        mint: '#86AC2F',
    },
    focus: {
        avocado: '#O58700',
        mist: '#F6FDFF',
        foam: '#F3F7EA',
    },
    accents: {
        clearanceOrange: '#ED4E1C',
        brightRed: '#DF3226',
        yellow: '#FFCD00',
    }
}

export const theme = {
    primary: ana.primary.anacondaOrange,
    primaryAltTwo: ana.primary.anacondaBlue,
    primaryAltThree: ana.primary.anacondaGreen,

    secondary: ana.secondary.tangerine,
    secondaryAltTwo: ana.secondary.coral,
    secondaryAltThree: ana.secondary.seashell,
    secondaryAltFour: ana.secondary.mint,
    secondaryAltFive: ana.secondary.mint,

    focusSuccess: ana.focus.avocado,
    focusSuccessLight: ana.focus.mist,
    focusBlue: ana.focus.foam,

    background: palette.standard.white,
    text: palette.text.default,
    blue: ana.primary.anacondaBlue,
    green: ana.focus.avocado,
    orange: ana.accents.clearanceOrange,
    red: ana.accents.brightRed,
    white: palette.standard.white,
    black: palette.standard.black,
}