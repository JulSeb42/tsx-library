/*=============================================== MarkdownEditor ===============================================*/

import React from "react"
import MDEditor from "@uiw/react-md-editor"

import InputContainer from ".././InputContainer"

import * as Styles from "./styles"
import { MarkdownEditorProps } from "./types"

const MarkdownEditor = ({
    id,
    onChange,
    value,
    options,
    commands,
    extraCommands,
    ...props
}: MarkdownEditorProps) => {
    const inputFunction = () => (
        <Styles.StyledMarkdownEditor
            data-color-mode={options?.colorMode || "light"}
        >
            <MDEditor
                id={id}
                onChange={onChange}
                value={value}
                preview={options?.preview || "edit"}
                commands={commands}
                extraCommands={extraCommands}
                {...props}
            />
        </Styles.StyledMarkdownEditor>
    )

    return options?.label || options?.helper || options?.helperBottom ? (
        <InputContainer
            id={id}
            label={options.label}
            helper={options.helper}
            helperBottom={options.helperBottom}
        >
            {inputFunction()}
        </InputContainer>
    ) : (
        inputFunction()
    )
}

export default MarkdownEditor
