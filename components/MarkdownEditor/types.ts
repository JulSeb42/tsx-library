/*=============================================== MarkdownEditor types ===============================================*/

import type { HTMLAttributes, ElementType, TextareaHTMLAttributes } from "react"

import type { ExtendedInputContainerProps } from "../InputContainer/types"
import type { InputBackgroundTypes } from "../InputComponents/types"
import type { buttonNames } from "./buttons"

export type ShowTypes = "editorCode" | "editorLive" | "editorPreview"
export type ButtonNamesTypes =
    | "titles"
    | keyof typeof buttonNames
    | "editorCode"
    | "editorLive"
    | "editorPreview"
export type PossibleTitlesTypes = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

type IconType = string | JSX.Element

export type EditorButtonType = {
    name: string
    defaultIcon: JSX.Element
}

export type ButtonType = EditorButtonType & {
    code: string
}

export type TitleType = {
    text: PossibleTitlesTypes
    code: string
}

export interface MarkdownEditorProps
    extends TextareaHTMLAttributes<HTMLTextAreaElement>,
        HTMLAttributes<HTMLTextAreaElement>,
        ExtendedInputContainerProps {
    as?: ElementType
    value: string
    setValue: (value: string) => void
    onChange?: never
    backgroundColor?: InputBackgroundTypes
    defaultEditor?: ShowTypes
    showButtons?: {
        titles?: boolean
        bold?: boolean
        italic?: boolean
        strikethrough?: boolean
        ul?: boolean
        ol?: boolean
        link?: boolean
        quote?: boolean
        hr?: boolean
        code?: boolean
        codeBlock?: boolean
        comment?: boolean
        image?: boolean
        editorCode?: boolean
        editorLive?: boolean
        editorPreview?: boolean
    }
    icons?: {
        bold?: IconType
        italic?: IconType
        strikethrough?: IconType
        ul?: IconType
        ol?: IconType
        link?: IconType
        quote?: IconType
        hr?: IconType
        code?: IconType
        codeBlock?: IconType
        comment?: IconType
        image?: IconType
        editorCode?: IconType
        editorLive?: IconType
        editorPreview?: IconType
    }
}
