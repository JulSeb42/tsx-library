/*=============================================== InputPage ===============================================*/

import { useState, useRef } from "react"
import type { ChangeEvent } from "react"

import { Page } from "../../components"
import { Input } from "../../lib"
import type { ValidationTypes } from "../../lib/types"

const InputPage = () => {
    const [color, setColor] = useState("#000000")
    const handleColor = (e: ChangeEvent<HTMLInputElement>) =>
        setColor(e.target.value)

    const [search, setSearch] = useState("Search")
    const handleSearch = (e: ChangeEvent<HTMLInputElement>) =>
        setSearch(e.target.value)
    const clearSearch = () => setSearch("")

    const [counter, setCounter] = useState("")
    const handleCounter = (e: ChangeEvent<HTMLInputElement>) =>
        setCounter(e.target.value)

    const [max, setMax] = useState("")
    const handleMax = (e: ChangeEvent<HTMLInputElement>) =>
        setMax(e.target.value)

    const [textarea, setTextarea] = useState("")
    const handleTextarea = (e: ChangeEvent<HTMLTextAreaElement>) =>
        setTextarea(e.target.value)

    const [validate, setValidate] = useState("")
    const [validation, setValidation] = useState<ValidationTypes>("not-passed")

    const handleValidate = (e: ChangeEvent<HTMLInputElement>) => {
        setValidate(e.target.value)

        if (e.target.value.length > 3) {
            setValidation("passed")
        } else {
            setValidation("not-passed")
        }
    }

    const ref = useRef<any>(null)

    const handleClick = () => ref.current.focus()

    const [url, setUrl] = useState("")
    const handleUrl = (e: ChangeEvent<HTMLInputElement>) =>
        setUrl(e.target.value)

    return (
        <Page title="Input">
            <button onClick={handleClick}>Focus</button>
            <Input
                id="input-text"
                placeholder="Text"
                autoFocus
                accentColor="secondary"
            />
            <Input
                id="input-email"
                placeholder="Email"
                type="email"
                ref={ref}
            />
            <Input
                id="input-color"
                type="color"
                value={color}
                onChange={handleColor}
            />
            <Input id="input-number" placeholder="Number" type="number" />
            <Input id="input-tel" placeholder="Tel" type="tel" />
            <Input id="input-file" type="file" />
            <Input
                id="input-file-not-passed"
                type="file"
                validation={{ status: "not-passed" }}
            />
            <Input
                id="input-file-passed"
                type="file"
                validation={{ status: "passed" }}
            />
            <Input id="input-file-disabled" type="file" disabled />
            <Input id="input-password" password defaultValue="Password" />
            <Input
                id="input-password-disabled"
                password
                defaultValue="Password"
                disabled
                button={{ iconHide: "hide", iconShow: "hide" }}
            />
            <Input
                id="input-url"
                placeholder="Url"
                type="url"
                value={url}
                onChange={handleUrl}
            />
            <Input
                id="input-url-disabled"
                placeholder="Url"
                type="url"
                icon="mail"
                disabled
            />
            <Input
                id="input-search"
                type="search"
                value={search}
                onChange={handleSearch}
                clearSearch={clearSearch}
            />
            <Input
                id="input-search-disabled"
                type="search"
                value={search}
                onChange={handleSearch}
                clearSearch={clearSearch}
                disabled
                icon="search"
            />
            <Input id="input-date" type="date" />
            <Input id="input-datetime" type="datetime-local" />
            <Input id="input-month" type="month" />
            <Input id="input-week" type="week" />
            <Input id="input-time" type="time" />
            <Input id="select" type="select">
                <option value="1">1</option>
            </Input>
            <Input id="select-disabled" type="select" disabled>
                <option value="1">1</option>
            </Input>
            <Input id="input-text-icon" placeholder="Text" icon="mail" />
            <Input
                id="input-text-icon-disabled"
                placeholder="Text"
                icon="mail"
                disabled
            />
            <Input
                id="label"
                label="Label"
                helper="Helper"
                helperBottom={{
                    text: "Helper bottom",
                    icon: "close-circle",
                    iconColor: "danger",
                }}
            />
            <Input
                id="counter"
                value={counter}
                onChange={handleCounter}
                counter
            />
            <Input
                id="counter-max"
                value={max}
                onChange={handleMax}
                counter
                maxLength={140}
            />
            <Input
                id="validation"
                validation={{ status: validation }}
                value={validate}
                onChange={handleValidate}
                helperBottom={validation === "not-passed" ? "Not passed" : ""}
            />
            <Input
                id="input-password-validation"
                password
                defaultValue="Password"
                validation={{ status: "passed" }}
            />
            <Input
                id="textarea"
                type="textarea"
                counter
                label="Textarea"
                maxLength={140}
                value={textarea}
                onChange={handleTextarea}
            />
        </Page>
    )
}

export default InputPage
