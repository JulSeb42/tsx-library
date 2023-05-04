/*=============================================== MarkdownEditor component ===============================================*/

import React, { forwardRef, useState, useRef } from "react"
import type { ChangeEvent, ForwardedRef } from "react"
import classNames from "classnames"

import {
    Flexbox,
    uuid,
    capitalize,
    Button,
    useClickOutside,
    stringifyPx,
    useMaxWidth,
} from "../../"
import { OptionsMarkdown } from "../../utils/options-markdown"
import { InputContainer } from "../InputContainer"

import {
    TitlesDropdown,
    StyledMarkdownEditor,
    ButtonsContainer,
    TitlesDropdownContainer,
    TitleButton,
    ContainerGrid,
    Separator,
    Input,
    MarkdownContainer,
    IconButton,
} from "./styles"
import type {
    MarkdownEditorProps,
    ShowTypes,
    ButtonType,
    EditorButtonType,
    TitleType,
    PossibleTitlesTypes,
} from "./types"

import {
    buttons,
    buttonNames,
    editorButtonNames,
    editorButtons,
    titleNames,
    titles,
    getFontSizeButton,
} from "./buttons"

const InputMarkdown = forwardRef(
    (
        {
            as,
            value,
            setValue,
            id,
            backgroundColor,
            showButtons = {
                titles: true,
                bold: true,
                italic: true,
                strikethrough: true,
                ul: true,
                ol: true,
                link: true,
                quote: true,
                hr: true,
                code: true,
                codeBlock: true,
                comment: true,
                image: true,
                editorCode: true,
                editorLive: true,
                editorPreview: true,
            },
            defaultEditor = "editorLive",
            icons = {
                bold: buttons.bold.defaultIcon,
                italic: buttons.italic.defaultIcon,
                strikethrough: buttons.strikethrough.defaultIcon,
                ul: buttons.ul.defaultIcon,
                ol: buttons.ol.defaultIcon,
                link: buttons.link.defaultIcon,
                quote: buttons.quote.defaultIcon,
                hr: buttons.hr.defaultIcon,
                code: buttons.code.defaultIcon,
                codeBlock: buttons.codeBlock.defaultIcon,
                comment: buttons.comment.defaultIcon,
                image: buttons.image.defaultIcon,
                editorCode: editorButtons.editorCode.defaultIcon,
                editorLive: editorButtons.editorLive.defaultIcon,
                editorPreview: editorButtons.editorPreview.defaultIcon,
            },
            className,
            ...rest
        }: MarkdownEditorProps,
        ref?: ForwardedRef<HTMLTextAreaElement>
    ) => {
        const [show, setShow] = useState<ShowTypes>(defaultEditor)
        const [isFocused, setIsFocused] = useState(false)
        const [height, setHeight] = useState(250)

        const [isTextOpen, setIsTextOpen] = useState(false)

        const titlesDropdownRef = useRef<HTMLDivElement>(null)
        useClickOutside(titlesDropdownRef, () => setIsTextOpen(false))

        const inputRef = useRef<HTMLTextAreaElement>(null)
        const handleValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
            setValue(e.target.value)
            setHeight(e.target.scrollHeight)

            if (!e.target.value.length) setHeight(250)
        }

        const addCode = (code: string) => {
            setValue(`${value}${code}`)
            inputRef?.current?.focus()
        }

        const isMobile = useMaxWidth(600)

        return (
            <StyledMarkdownEditor
                ref={ref}
                as={as}
                className={classNames(
                    { "is-focused": isFocused },
                    "markdown-editor",
                    className
                )}
                data-background={backgroundColor}
            >
                <ButtonsContainer
                    gap={isMobile ? "none" : "xs"}
                    alignItems={isMobile ? "flex-start" : "center"}
                    justifyContent={isMobile ? "flex-start" : "space-between"}
                    padding="xs"
                    className="markdown-editor-buttons-container"
                    flexDirection={isMobile ? "column" : "row"}
                >
                    <Flexbox
                        gap="xs"
                        alignItems="center"
                        className="markdown-editor-commands"
                    >
                        {showButtons.titles !== false && (
                            <TitlesDropdownContainer className="markdown-editor-title-dropdown-container">
                                <Button
                                    color="primary"
                                    variant="transparent"
                                    size="small"
                                    noPadding
                                    onClick={() => setIsTextOpen(!isTextOpen)}
                                    className="markdown-editor-titles-dropdown-button"
                                >
                                    Titles
                                </Button>

                                <TitlesDropdown
                                    ref={titlesDropdownRef}
                                    className={classNames(
                                        { open: isTextOpen },
                                        "markdown-editor-titles-dropdown"
                                    )}
                                >
                                    {titleNames.map(
                                        // @ts-expect-error
                                        (title: PossibleTitlesTypes) => {
                                            // @ts-expect-error
                                            const button: TitleType =
                                                titles[title]

                                            return (
                                                <TitleButton
                                                    onClick={() => {
                                                        addCode(button.code)
                                                        setIsTextOpen(false)
                                                    }}
                                                    style={{
                                                        ["--title-size" as any]: `${getFontSizeButton(
                                                            title
                                                        )}px`,
                                                    }}
                                                    className="markdown-editor-button-title"
                                                    key={uuid()}
                                                >
                                                    {button.text}
                                                </TitleButton>
                                            )
                                        }
                                    )}
                                </TitlesDropdown>
                            </TitlesDropdownContainer>
                        )}

                        {buttonNames.map((item: string) => {
                            // @ts-expect-error
                            const button: ButtonType = buttons[item]

                            return (
                                <IconButton
                                    icon={
                                        // @ts-expect-error
                                        icons[item] || button.defaultIcon
                                    }
                                    size={16}
                                    variant="transparent"
                                    onClick={() => addCode(button.code)}
                                    color="primary"
                                    label={capitalize(button.name)}
                                    showLabel
                                    className={classNames(
                                        {
                                            visible:
                                                // @ts-expect-error
                                                showButtons[item] !== false,
                                        },
                                        "markdown-editor-button-command"
                                    )}
                                    key={uuid()}
                                />
                            )
                        })}
                    </Flexbox>

                    <Flexbox
                        gap="xxs"
                        className="markdown-editor-editor-buttons"
                    >
                        {editorButtonNames.map((button: string) => {
                            const editorButton: EditorButtonType =
                                // @ts-expect-error
                                editorButtons[button]

                            return (
                                <IconButton
                                    icon={
                                        // @ts-expect-error
                                        icons[button] ||
                                        editorButton.defaultIcon
                                    }
                                    size={16}
                                    variant={
                                        show === button
                                            ? "plain"
                                            : "transparent"
                                    }
                                    label={capitalize(
                                        editorButton.name.replace("editor", "")
                                    )}
                                    color="primary"
                                    showLabel
                                    // @ts-expect-error
                                    onClick={() => setShow(button)}
                                    className={classNames(
                                        {
                                            visible:
                                                // @ts-expect-error
                                                showButtons[button] !== false,
                                        },
                                        "markdown-editor-editor-button"
                                    )}
                                    key={uuid()}
                                />
                            )
                        })}
                    </Flexbox>
                </ButtonsContainer>

                <ContainerGrid
                    data-col={show === "editorLive" ? "3" : "1"}
                    className="markdown-editor-container"
                >
                    <Input
                        value={value}
                        onChange={handleValue}
                        ref={inputRef}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        style={{
                            ["--input-height" as any]: stringifyPx(height),
                        }}
                        className={classNames(
                            {
                                visible:
                                    show === "editorCode" ||
                                    show === "editorLive",
                            },
                            "markdown-editor-input"
                        )}
                        {...rest}
                    />

                    {show === "editorLive" && (
                        <Separator className="markdown-editor-separator" />
                    )}

                    <MarkdownContainer
                        options={OptionsMarkdown}
                        style={{
                            ["--input-height" as any]: stringifyPx(height),
                        }}
                        className={classNames(
                            {
                                visible: show === "editorCode" ? false : true,
                            },
                            "markdown-editor-markdown-container"
                        )}
                    >
                        {value}
                    </MarkdownContainer>
                </ContainerGrid>
            </StyledMarkdownEditor>
        )
    }
)

const MarkdownEditor = forwardRef(
    (
        {
            as,
            value,
            setValue,
            id,
            label,
            helper,
            helperBottom,
            counter,
            maxLength,
            className,
            ...rest
        }: MarkdownEditorProps,
        ref?: ForwardedRef<HTMLTextAreaElement>
    ) => {
        const inputFn = () => (
            <InputMarkdown
                as={as}
                value={value}
                setValue={setValue}
                id={id}
                ref={ref}
                maxLength={maxLength}
                className={classNames(
                    !label && !helper && !helperBottom && className
                )}
                {...rest}
            />
        )

        return label || helper || helperBottom ? (
            <InputContainer
                id={id}
                label={label}
                helper={helper}
                helperBottom={helperBottom}
                counter={counter}
                maxLength={maxLength}
                value={value}
                className={className}
            >
                {inputFn()}
            </InputContainer>
        ) : (
            inputFn()
        )
    }
)

export default MarkdownEditor
