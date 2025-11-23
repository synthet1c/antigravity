import { palette } from '../palette';

export const theme = {
    name: 'Spotlight',
    locales: ['au', 'nz', 'sg', 'my'],
    theme: {
        primary: palette.primary.oxfordBlue,
        primaryAltTwo: palette.primary.spotlightBlue,
        primaryAltThree: palette.primary.midBlue,

        secondary: palette.secondary.steelBlue,
        secondaryAltTwo: palette.secondary.weldonBlue,
        secondaryAltThree: palette.secondary.solitudeBlue,
        secondaryAltFour: palette.secondary.waterBlue,
        secondaryAltFive: palette.secondary.casperBlue,

        focusSuccess: palette.focus.successGreen,
        focusSuccessLight: palette.focus.honeyDew,
        focusBlue: palette.focus.azureBlue,

        background: palette.standard.white,
        text: palette.text.default,
        blue: palette.primary.oxfordBlue,
        green: palette.focus.successGreen,
        orange: palette.accents.clearanceOrange,
        red: palette.accents.brightRed,
        white: palette.standard.white,
        black: palette.standard.black,
    },
}