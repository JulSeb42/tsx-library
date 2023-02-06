/*=============================================== MarkdownEditor component ===============================================*/

import React, { useState } from "react"

import { InputContainer } from "../InputContainer"

import * as Styles from "./styles"
import { MarkdownEditorProps } from "./types"

const MarkdownEditor = ({
    id,
    setValue,
    value,
    label,
    helper,
    helperBottom,
    accentColor = "primary",
    commands,
    extraCommands,
    backgroundColor = "light",
    preview = "live",
    validation,
    ...rest
}: MarkdownEditorProps) => {
    const [isFocus, setIsFocus] = useState(false)

    const inputFn = () => (
        <Styles.StyledContainer
            $accentColor={accentColor}
            data-color-mode={backgroundColor}
        >
            <Styles.Editor
                id={id}
                onChange={setValue}
                value={value}
                preview={preview}
                commands={commands}
                extraCommands={extraCommands}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                $isFocus={isFocus}
                $accentColor={accentColor}
                $backgroundColor={backgroundColor}
                $validation={validation}
                {...rest}
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
            {inputFn()}
        </InputContainer>
    ) : (
        inputFn()
    )
}

export default MarkdownEditor
