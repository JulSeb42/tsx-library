/*=============================================== CodeContainer component ===============================================*/

import { forwardRef, useState } from "react"
import type { ForwardedRef } from "react"
import SyntaxHighlighter from "react-syntax-highlighter"
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs"

import { ButtonIcon } from "../../"
import { ClipboardIcon, CheckIcon } from "../../icons"

import * as Styles from "./styles"
import type { CodeContainerProps } from "./types"

const CodeContainer = forwardRef(
    (
        {
            children,
            language = "javascript",
            style = atomOneDark,
            copyButton = true,
            backgroundColor,
            textColor,
            ...rest
        }: CodeContainerProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        const [hasCopied, setHasCopied] = useState(false)

        const copyToClipboard = () => {
            children && navigator.clipboard.writeText(children.toString())

            setHasCopied(true)

            setTimeout(() => setHasCopied(false), 1000)
        }

        return (
            <Styles.StyledCodeContainer
                ref={ref}
                $backgroundColor={backgroundColor}
                $textColor={textColor}
                as={backgroundColor || textColor ? "pre" : "div"}
            >
                <Styles.Code
                    language={language}
                    style={style}
                    as={
                        textColor || backgroundColor
                            ? "code"
                            : SyntaxHighlighter
                    }
                    $textColor={textColor}
                    {...rest}
                >
                    {children}
                </Styles.Code>

                {copyButton && (
                    <ButtonIcon
                        icon={
                            hasCopied ? (
                                typeof copyButton === "object" &&
                                copyButton?.iconCopied ? (
                                    copyButton?.iconCopied
                                ) : (
                                    <CheckIcon size={32 * 0.7} />
                                )
                            ) : typeof copyButton === "object" &&
                              copyButton?.iconCopy ? (
                                copyButton?.iconCopy
                            ) : (
                                <ClipboardIcon size={32 * 0.7} />
                            )
                        }
                        color={
                            hasCopied
                                ? typeof copyButton === "object"
                                    ? copyButton.colorCopied
                                    : "success"
                                : typeof copyButton === "object"
                                ? copyButton.colorCopy
                                : "white"
                        }
                        onClick={copyToClipboard}
                        size={32}
                        position={{
                            position: "absolute",
                            top: "s",
                            right: "m",
                        }}
                        label={
                            typeof copyButton === "object"
                                ? copyButton.label
                                : "Copy"
                        }
                    />
                )}
            </Styles.StyledCodeContainer>
        )
    }
)

export default CodeContainer
