/*=============================================== MarkdownEditor types ===============================================*/

import React from "react"
import { MDEditorProps, PreviewType } from "@uiw/react-md-editor"

import { ValidationTypes } from "../../types"
import { InputBaseProps } from "../InputContainer/types"
import { InputBackgroundTypes } from "../InputComponents/types"

export interface MarkdownEditorProps extends MDEditorProps, InputBaseProps {
    value: string
    setValue: any
    commands?: any
    extraCommands?: any
    backgroundColor?: InputBackgroundTypes
    preview?: PreviewType
    validation?: ValidationTypes
}
