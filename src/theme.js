import { createMuiTheme } from '@material-ui/core'
import colors from 'colors.css'

export default createMuiTheme({
    palette: {
        primary: {
            light: colors.blue300,
            main: colors.blue500,
            dark: colors.blue700
        }
    }
})