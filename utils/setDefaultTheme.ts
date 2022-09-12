/*=============================================== Set default theme ===============================================*/

import { ThemeLight } from "../Variables"

const setDefaultTheme = (arr: any) =>
    arr.forEach(
        (component: any) =>
            (component.defaultProps = {
                theme: ThemeLight,
            })
    )

export default setDefaultTheme
