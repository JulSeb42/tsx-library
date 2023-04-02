/*=============================================== HooksPage ===============================================*/

import React, { useState, useRef } from "react"

import { Page } from "../../components"
import {
    useClickOutside,
    useCopyToClipboard,
    // useFetch,
    // useForm,
    useKeyPress,
    useMaxWidth,
    useMinWidth,
    useTranslation,
    useTouchScreen,
    // usePaginatedData,
    // useExportData,
    Text,
    Flexbox,
    Button,
} from "../../lib"

const translations = {
    fr: {
        greetings: "Bonjour",
    },
    en: {
        greetings: "Hello",
    },
    es: {
        greetings: "Hola",
    },
}

const HooksPage = () => {
    const isMobile = useMaxWidth(900)
    const isHigher = useMinWidth(900)

    const [count, setCount] = useState(0)
    const ref = useRef<HTMLButtonElement>(null)

    const onClickInside = () => setCount(count - 1)
    const onClickOutside = () => setCount(count + 1)

    useClickOutside(ref, onClickOutside)

    const [value, copy] = useCopyToClipboard()

    const { translate, setLanguage, language } = useTranslation(translations)

    const [isVisible, setIsVisible] = useState(false)
    useKeyPress(() => setIsVisible(!isVisible), ["Command", "KeyK"])

    const touch = useTouchScreen()

    return (
        <Page title="Hooks">
            <Text>{isMobile ? "Mobile" : "Not mobile"}</Text>

            <Text>{isHigher ? "Is higher" : "Smaller"}</Text>

            <Flexbox>
                <button ref={ref} onClick={onClickInside}>
                    Click me {count}
                </button>
            </Flexbox>

            <Flexbox
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="flex-start"
            >
                <Button onClick={() => copy("Prout")}>Copy this text</Button>

                <Text>Copied: {value}</Text>
            </Flexbox>

            <Flexbox flexDirection="column" alignItems="flex-start">
                <Text>{translate("greetings")}</Text>

                <Button
                    onClick={() => setLanguage(language === "en" ? "fr" : "en")}
                >
                    Switch language to {language === "fr" ? "EN" : "FR"}
                </Button>
            </Flexbox>

            <Flexbox flexDirection="column" alignItems="flex-start">
                {isVisible && "Visible"}
            </Flexbox>

            <Flexbox>
                <Text>It's {touch ? "" : "not "}a touch screen</Text>
            </Flexbox>

            {/* Add useExportData */}
        </Page>
    )
}

export default HooksPage
