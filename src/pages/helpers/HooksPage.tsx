/*=============================================== HooksPage ===============================================*/

import React, { useState, useRef, useEffect } from "react"
import type { ChangeEvent } from "react"
import axios from "axios"

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
    useDebounce,
    Input,
    Image,
    uuid,
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

    // useDebounce
    const [search, setSearch] = useState<string>("")
    const [result, setResult] = useState<any[] | string | undefined>(undefined)

    const debouncedSearch = useDebounce<string>(search, 500)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
        setSearch(e.target.value)

    useEffect(() => {
        if (search?.length) {
            axios
                .get(
                    `https://rickandmortyapi.com/api/character/?name=${search}`
                )
                .then(res => {
                    if (res) {
                        setResult(res.data.results)
                    } else {
                        setResult("No result")
                    }
                })
                .catch(err => {
                    if (err.code === "ERR_BAD_REQUEST") {
                        setResult("No result")
                    } else {
                        console.log(err)
                    }
                })
        } else {
            setResult("No result")
        }
        // eslint-disable-next-line
    }, [debouncedSearch])

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

            <Flexbox flexDirection="column" gap="xs" alignItems="stretch">
                <Input
                    id="name"
                    label="Name"
                    value={search}
                    onChange={handleChange}
                />

                <Text>Value: {search}</Text>
                <Text>Debounced: {debouncedSearch}</Text>

                {typeof result === "string" ? (
                    <Text>{result}</Text>
                ) : (
                    result?.map(item => (
                        <Image src={item.image} alt={item.name} key={uuid()} />
                    ))
                )}
            </Flexbox>
        </Page>
    )
}

export default HooksPage
