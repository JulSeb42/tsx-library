/*=============================================== Set default theme ===============================================*/

import { ThemeLight } from "../Variables"

export const setDefaultTheme = (arr: any) =>
    arr.forEach(
        (component: any) =>
            (component.defaultProps = {
                theme: ThemeLight,
            })
    )
