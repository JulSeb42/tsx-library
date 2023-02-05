/*=============================================== useTranslation ===============================================*/

import { useState, useEffect } from "react"
import { detectLanguage } from "ts-utils-julseb"

let currentLanguage = detectLanguage()

export const useTranslation = (translations: any) => {
    const [language, setLanguage] = useState<any>(currentLanguage)
    const languages = Object.keys(translations)

    useEffect(() => {
        currentLanguage = language || "en"
    }, [language])

    const translate = (key: string) => translations?.[language]?.[key]

    return {
        translate,
        setLanguage,
        language,
        languages,
    }
}
