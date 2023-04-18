/*=============================================== CodeContainer component ===============================================*/

import React, { forwardRef, useState } from "react"
import type { ForwardedRef } from "react"
import SyntaxHighlighter from "react-syntax-highlighter"
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs"

import { ClipboardIcon, CheckIcon } from "../../icons"

import { StyledCodeContainer, Code, StyledButtonIcon } from "./styles"
import type { CodeContainerProps } from "./types"

const CodeContainer = forwardRef(
    (
        {
            children,
            language = "javascript",
            style = atomOneDark,
            copyButton = true,
            color,
            className,
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
            <StyledCodeContainer
                ref={ref}
                as={color ? "pre" : "div"}
                $color={color}
                className={className}
            >
                <Code
                    language={language}
                    style={style}
                    as={color ? "code" : SyntaxHighlighter}
                    className="code-container-content"
                    $color={color}
                    {...rest}
                >
                    {children}
                </Code>

                {copyButton && (
                    <StyledButtonIcon
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
                        color={hasCopied ? "success" : "white"}
                        onClick={copyToClipboard}
                        size={32}
                        label={
                            hasCopied
                                ? typeof copyButton === "object"
                                    ? copyButton?.labelCopied
                                    : "Copied!"
                                : typeof copyButton === "object"
                                ? copyButton?.labelCopy
                                : "Copy"
                        }
                        className="code-container-button"
                    />
                )}
            </StyledCodeContainer>
        )
    }
)

export default CodeContainer
