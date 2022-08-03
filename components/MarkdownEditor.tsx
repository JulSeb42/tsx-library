/*=============================================== MarkdownEditor ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled from "styled-components"
import MDEditor from "@uiw/react-md-editor"

import InputContainer from "./InputContainer"

/*==================== Component ====================*/

const MarkdownEditor = ({
    colorMode = "light",
    onChange,
    value,
    label,
    helper,
    helperBottom,
    preview = "edit",
    id,
    ...props
}: Props) => {
    return label || helper || helperBottom ? (
        <InputContainer id={id} label={label} helper={helper} helperBottom={helperBottom}>
            <Container data-color-mode={colorMode}>
                <MDEditor id={id} onChange={onChange} value={value} preview={preview} {...props} />
            </Container>
        </InputContainer>
    ) : (
        <Container data-color-mode={colorMode}>
            <MDEditor id={id} onChange={onChange} value={value} preview={preview} {...props} />
        </Container>
    )
}

export default MarkdownEditor

/*==================== Types ====================*/

interface Props extends React.HTMLAttributes<HTMLInputElement> {
    colorMode?: "light" | "dark"
    value: any
    onChange: any
    label?: string
    helper?: string
    helperBottom?: string
    id: string
    preview?: "live" | "edit" | "preview"
}

/*==================== Styles ====================*/

const Container = styled.div``
