/*=============================================== MarkdownEditor types ===============================================*/

import React from "react"

import { InputContainerProps } from "../InputContainer/types"
import { ValidationTypes } from "../../utils/common-types"

export interface MarkdownEditorProps
    extends React.HTMLAttributes<HTMLInputElement>,
        InputContainerProps {
    id: string
    value: string
    onChange: any
    commands?: any
    extraCommands?: any
    children?: never
    colorMode?: "light" | "dark"
    preview?: "live" | "edit" | "preview"
    validation?: ValidationTypes
}
