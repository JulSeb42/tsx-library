/*=============================================== MarkdownEditor ===============================================*/

import React, { useState } from "react"

import InputContainer from ".././InputContainer"

import * as Styles from "./styles"
import { MarkdownEditorProps } from "./types"

const MarkdownEditor = ({
    id,
    onChange,
    value,
    label,
    helper,
    helperBottom,
    accentColor = "primary",
    commands,
    extraCommands,
    colorMode = "dark",
    preview = "edit",
    validation,
    ...props
}: MarkdownEditorProps) => {
    const [isFocus, setIsFocus] = useState(false)

    const inputFunction = () => (
        <Styles.StyledContainer
            $accentColor={accentColor}
            data-color-mode={colorMode}
        >
            <Styles.Editor
                id={id}
                onChange={onChange}
                value={value}
                preview={preview}
                commands={commands}
                extraCommands={extraCommands}
                $validation={validation}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                $isFocus={isFocus}
                $accentColor={accentColor}
                {...props}
            />
        </Styles.StyledContainer>
    )

    return label || helper || helperBottom ? (
        <InputContainer
            id={id}
            label={label}
            helper={helper}
            helperBottom={helperBottom}
            accentColor={accentColor}
        >
            {inputFunction()}
        </InputContainer>
    ) : (
        inputFunction()
    )
}

export default MarkdownEditor
