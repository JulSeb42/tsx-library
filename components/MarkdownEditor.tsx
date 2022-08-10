/*=============================================== MarkdownEditor ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled from "styled-components"
import MDEditor from "@uiw/react-md-editor"

import InputContainer from "./InputContainer"

/*==================== Component ====================*/

const MarkdownEditor = ({ id, onChange, value, options, commands, extraCommands, ...props }: Props) => {
    return options?.label || options?.helper || options?.helperBottom ? (
        <InputContainer id={id} label={options.label} helper={options.helper} helperBottom={options.helperBottom}>
            <StyledMarkdownEditor data-color-mode={options?.colorMode || "light"}>
                <MDEditor
                    id={id}
                    onChange={onChange}
                    value={value}
                    preview={options?.preview || "edit"}
                    commands={commands}
                    extraCommands={extraCommands}
                    {...props}
                />
            </StyledMarkdownEditor>
        </InputContainer>
    ) : (
        <StyledMarkdownEditor data-color-mode={options?.colorMode || "light"}>
            <MDEditor id={id} onChange={onChange} value={value} preview={options?.preview || "edit"} {...props} />
        </StyledMarkdownEditor>
    )
}

export default MarkdownEditor

/*==================== Types ====================*/

interface Props extends React.HTMLAttributes<HTMLInputElement> {
    id: string
    value: any
    onChange: any
    commands?: any
    extraCommands?: any

    options?: {
        colorMode?: "light" | "dark"
        label?: string
        helper?: string
        helperBottom?: string
        preview?: "live" | "edit" | "preview"
    }
}

/*==================== Styles ====================*/

const StyledMarkdownEditor = styled.div``
