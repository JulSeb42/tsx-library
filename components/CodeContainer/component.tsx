/*=============================================== CodeContainer ===============================================*/

import React, { useState } from "react"
import SyntaxHighlighter from "react-syntax-highlighter"
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs"

import ButtonIcon from "../ButtonIcon"
import ClipboardIcon from "../../icons/ClipboardIcon"
import CheckIcon from "../../icons/CheckIcon"

import * as Styles from "./styles"
import { CodeContainerProps } from "./types"

const CodeContainer = ({
    children,
    language = "javascript",
    style = atomOneDark,
    copyButton = true,
    backgroundColor,
    textColor,
    ...props
}: CodeContainerProps) => {
    const [hasCopied, setHasCopied] = useState(false)

    const copyToClipboard = () => {
        navigator.clipboard.writeText(children)

        setHasCopied(true)

        setTimeout(() => setHasCopied(false), 1000)
    }

    return (
        <Styles.StyledCodeContainer
            $backgroundColor={backgroundColor}
            $textColor={textColor}
        >
            <Styles.Code
                language={language}
                style={style}
                as={textColor || backgroundColor ? "code" : SyntaxHighlighter}
                $textColor={textColor}
                {...props}
            >
                {children}
            </Styles.Code>

            {copyButton &&
                (hasCopied ? (
                    typeof copyButton === "object" && copyButton.iconCopied ? (
                        <ButtonIcon
                            icon={copyButton.iconCopied}
                            color={copyButton?.colorCopied || "success"}
                            onClick={copyToClipboard}
                            size={32}
                            position={{
                                position: "absolute",
                                top: "s",
                                right: "m",
                            }}
                        />
                    ) : (
                        <ButtonIcon
                            libicon={<CheckIcon size={32 * 0.7} />}
                            color={
                                typeof copyButton === "object"
                                    ? copyButton?.colorCopied
                                    : "success"
                            }
                            onClick={copyToClipboard}
                            size={32}
                            position={{
                                position: "absolute",
                                top: "s",
                                right: "m",
                            }}
                        />
                    )
                ) : typeof copyButton === "object" && copyButton.iconCopy ? (
                    <ButtonIcon
                        icon={copyButton.iconCopy}
                        color={copyButton?.colorCopy || "white"}
                        onClick={copyToClipboard}
                        size={32}
                        position={{
                            position: "absolute",
                            top: "s",
                            right: "m",
                        }}
                    />
                ) : (
                    <ButtonIcon
                        libicon={<ClipboardIcon size={32 * 0.7} />}
                        color={
                            typeof copyButton === "object"
                                ? copyButton?.colorCopy
                                : "white"
                        }
                        onClick={copyToClipboard}
                        size={32}
                        position={{
                            position: "absolute",
                            top: "s",
                            right: "m",
                        }}
                    />
                ))}
        </Styles.StyledCodeContainer>
    )
}

export default CodeContainer
