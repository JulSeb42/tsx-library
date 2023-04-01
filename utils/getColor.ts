/*=============================================== getColor function ===============================================*/

/*==================== Imports ====================*/

import { ThemeLight, ThemeDark } from "../Variables"

import { AllColorsTypes } from "../types/common-types"

/*==================== Function ====================*/

const getColor = (color: AllColorsTypes, theme?: "light" | "dark") => {
    return theme === "dark"
        ? color === "black"
            ? ThemeDark.Black
            : color === "white"
            ? ThemeDark.White
            : color === "gray-50"
            ? ThemeDark.Gray50
            : color === "gray-100"
            ? ThemeDark.Gray100
            : color === "gray-200"
            ? ThemeDark.Gray200
            : color === "gray-300"
            ? ThemeDark.Gray300
            : color === "gray-400"
            ? ThemeDark.Gray400
            : color === "gray-500"
            ? ThemeDark.Gray500
            : color === "gray-600"
            ? ThemeDark.Gray600
            : color === "gray-700"
            ? ThemeDark.Gray700
            : color === "gray-800"
            ? ThemeDark.Gray800
            : color === "gray-900"
            ? ThemeDark.Gray900
            : color === "primary-50"
            ? ThemeDark.Primary50
            : color === "primary-100"
            ? ThemeDark.Primary100
            : color === "primary-200"
            ? ThemeDark.Primary200
            : color === "primary-300"
            ? ThemeDark.Primary300
            : color === "primary-400"
            ? ThemeDark.Primary400
            : color === "primary-500"
            ? ThemeDark.Primary500
            : color === "primary-600"
            ? ThemeDark.Primary600
            : color === "primary-700"
            ? ThemeDark.Primary700
            : color === "primary-800"
            ? ThemeDark.Primary800
            : color === "primary-900"
            ? ThemeDark.Primary900
            : color === "secondary-50"
            ? ThemeDark.Secondary50
            : color === "secondary-100"
            ? ThemeDark.Secondary100
            : color === "secondary-200"
            ? ThemeDark.Secondary200
            : color === "secondary-300"
            ? ThemeDark.Secondary300
            : color === "secondary-400"
            ? ThemeDark.Secondary400
            : color === "secondary-500"
            ? ThemeDark.Secondary500
            : color === "secondary-600"
            ? ThemeDark.Secondary600
            : color === "secondary-700"
            ? ThemeDark.Secondary700
            : color === "secondary-800"
            ? ThemeDark.Secondary800
            : color === "secondary-900"
            ? ThemeDark.Secondary900
            : color === "success-50"
            ? ThemeDark.Success50
            : color === "success-100"
            ? ThemeDark.Success100
            : color === "success-200"
            ? ThemeDark.Success200
            : color === "success-300"
            ? ThemeDark.Success300
            : color === "success-400"
            ? ThemeDark.Success400
            : color === "success-500"
            ? ThemeDark.Success500
            : color === "success-600"
            ? ThemeDark.Success600
            : color === "success-700"
            ? ThemeDark.Success700
            : color === "success-800"
            ? ThemeDark.Success800
            : color === "success-900"
            ? ThemeDark.Success900
            : color === "danger-50"
            ? ThemeDark.Danger50
            : color === "danger-100"
            ? ThemeDark.Danger100
            : color === "danger-200"
            ? ThemeDark.Danger200
            : color === "danger-300"
            ? ThemeDark.Danger300
            : color === "danger-400"
            ? ThemeDark.Danger400
            : color === "danger-500"
            ? ThemeDark.Danger500
            : color === "danger-600"
            ? ThemeDark.Danger600
            : color === "danger-700"
            ? ThemeDark.Danger700
            : color === "danger-800"
            ? ThemeDark.Danger800
            : color === "danger-900"
            ? ThemeDark.Danger900
            : color === "warning-50"
            ? ThemeDark.Warning50
            : color === "warning-100"
            ? ThemeDark.Warning100
            : color === "warning-200"
            ? ThemeDark.Warning200
            : color === "warning-300"
            ? ThemeDark.Warning300
            : color === "warning-400"
            ? ThemeDark.Warning400
            : color === "warning-500"
            ? ThemeDark.Warning500
            : color === "warning-600"
            ? ThemeDark.Warning600
            : color === "warning-700"
            ? ThemeDark.Warning700
            : color === "warning-800"
            ? ThemeDark.Warning800
            : color === "warning-900"
            ? ThemeDark.Warning900
            : color === "primary"
            ? ThemeDark.Primary500
            : color === "secondary"
            ? ThemeDark.Secondary500
            : color === "success"
            ? ThemeDark.Success500
            : color === "danger"
            ? ThemeDark.Danger500
            : color === "warning"
            ? ThemeDark.Warning500
            : color === "gray"
            ? ThemeDark.Gray500
            : color === "transparent"
            ? "transparent"
            : "currentColor"
        : color === "black"
        ? ThemeLight.Black
        : color === "white"
        ? ThemeLight.White
        : color === "gray-50"
        ? ThemeLight.Gray50
        : color === "gray-100"
        ? ThemeLight.Gray100
        : color === "gray-200"
        ? ThemeLight.Gray200
        : color === "gray-300"
        ? ThemeLight.Gray300
        : color === "gray-400"
        ? ThemeLight.Gray400
        : color === "gray-500"
        ? ThemeLight.Gray500
        : color === "gray-600"
        ? ThemeLight.Gray600
        : color === "gray-700"
        ? ThemeLight.Gray700
        : color === "gray-800"
        ? ThemeLight.Gray800
        : color === "gray-900"
        ? ThemeLight.Gray900
        : color === "primary-50"
        ? ThemeLight.Primary50
        : color === "primary-100"
        ? ThemeLight.Primary100
        : color === "primary-200"
        ? ThemeLight.Primary200
        : color === "primary-300"
        ? ThemeLight.Primary300
        : color === "primary-400"
        ? ThemeLight.Primary400
        : color === "primary-500"
        ? ThemeLight.Primary500
        : color === "primary-600"
        ? ThemeLight.Primary600
        : color === "primary-700"
        ? ThemeLight.Primary700
        : color === "primary-800"
        ? ThemeLight.Primary800
        : color === "primary-900"
        ? ThemeLight.Primary900
        : color === "secondary-50"
        ? ThemeLight.Secondary50
        : color === "secondary-100"
        ? ThemeLight.Secondary100
        : color === "secondary-200"
        ? ThemeLight.Secondary200
        : color === "secondary-300"
        ? ThemeLight.Secondary300
        : color === "secondary-400"
        ? ThemeLight.Secondary400
        : color === "secondary-500"
        ? ThemeLight.Secondary500
        : color === "secondary-600"
        ? ThemeLight.Secondary600
        : color === "secondary-700"
        ? ThemeLight.Secondary700
        : color === "secondary-800"
        ? ThemeLight.Secondary800
        : color === "secondary-900"
        ? ThemeLight.Secondary900
        : color === "success-50"
        ? ThemeLight.Success50
        : color === "success-100"
        ? ThemeLight.Success100
        : color === "success-200"
        ? ThemeLight.Success200
        : color === "success-300"
        ? ThemeLight.Success300
        : color === "success-400"
        ? ThemeLight.Success400
        : color === "success-500"
        ? ThemeLight.Success500
        : color === "success-600"
        ? ThemeLight.Success600
        : color === "success-700"
        ? ThemeLight.Success700
        : color === "success-800"
        ? ThemeLight.Success800
        : color === "success-900"
        ? ThemeLight.Success900
        : color === "danger-50"
        ? ThemeLight.Danger50
        : color === "danger-100"
        ? ThemeLight.Danger100
        : color === "danger-200"
        ? ThemeLight.Danger200
        : color === "danger-300"
        ? ThemeLight.Danger300
        : color === "danger-400"
        ? ThemeLight.Danger400
        : color === "danger-500"
        ? ThemeLight.Danger500
        : color === "danger-600"
        ? ThemeLight.Danger600
        : color === "danger-700"
        ? ThemeLight.Danger700
        : color === "danger-800"
        ? ThemeLight.Danger800
        : color === "danger-900"
        ? ThemeLight.Danger900
        : color === "warning-50"
        ? ThemeLight.Warning50
        : color === "warning-100"
        ? ThemeLight.Warning100
        : color === "warning-200"
        ? ThemeLight.Warning200
        : color === "warning-300"
        ? ThemeLight.Warning300
        : color === "warning-400"
        ? ThemeLight.Warning400
        : color === "warning-500"
        ? ThemeLight.Warning500
        : color === "warning-600"
        ? ThemeLight.Warning600
        : color === "warning-700"
        ? ThemeLight.Warning700
        : color === "warning-800"
        ? ThemeLight.Warning800
        : color === "warning-900"
        ? ThemeLight.Warning900
        : color === "primary"
        ? ThemeLight.Primary500
        : color === "secondary"
        ? ThemeLight.Secondary500
        : color === "success"
        ? ThemeLight.Success500
        : color === "danger"
        ? ThemeLight.Danger500
        : color === "warning"
        ? ThemeLight.Warning500
        : color === "gray"
        ? ThemeLight.Gray500
        : color === "transparent"
        ? "transparent"
        : "currentColor"
}

export default getColor
