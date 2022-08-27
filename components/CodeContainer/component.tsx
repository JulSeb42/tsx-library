/*=============================================== CodeContainer ===============================================*/

import React, { useState } from "react"
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs"

import Icon from "../Icon"
import ClipboardIcon from "../../icons/ClipboardIcon"
import CheckIcon from "../../icons/CheckIcon"

import * as Styles from "./styles"
import { CodeContainerProps } from "./types"

const CodeContainer = ({
    children,
    language = "javascript",
    options = {
        copyButton: true,
    },
    ...props
}: CodeContainerProps) => {
    const [hasCopied, setHasCopied] = useState(false)

    const copyToClipboard = () => {
        navigator.clipboard.writeText(children)

        setHasCopied(true)

        setTimeout(() => setHasCopied(false), 1000)
    }

    return (
        <Styles.StyledCodeContainer>
            <Styles.Code
                language={language}
                style={options?.style || atomOneDark}
                {...props}
            >
                {children}
            </Styles.Code>

            {(options?.copyButton ||
                options?.iconCopy ||
                options?.iconCopied) && (
                <Styles.Button $hasCopied={hasCopied} onClick={copyToClipboard}>
                    {hasCopied ? (
                        options?.iconCopied ? (
                            <Icon src={options.iconCopied} size={24} />
                        ) : (
                            <CheckIcon size={24} />
                        )
                    ) : options?.iconCopy ? (
                        <Icon src={options.iconCopy} size={24} />
                    ) : (
                        <ClipboardIcon size={24} />
                    )}
                </Styles.Button>
            )}
        </Styles.StyledCodeContainer>
    )
}

export default CodeContainer
