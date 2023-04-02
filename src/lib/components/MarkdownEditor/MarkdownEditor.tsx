/*=============================================== MarkdownEditor component ===============================================*/

import React, { forwardRef, useState, useRef } from "react"
import type { ChangeEvent, ForwardedRef } from "react"

import { InputContainer } from "../InputContainer"

import {
    OptionsMarkdown,
    Flexbox,
    uuid,
    capitalize,
    Button,
    useClickOutside,
} from "../../"

import * as Styles from "./styles"
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
} from "./buttons"

const InputMarkdown = forwardRef(
    (
        {
            as,
            value,
            setValue,
            id,
            accentColor = "primary",
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

        return (
            <Styles.StyledMarkdownEditor
                ref={ref}
                as={as}
                $isFocused={isFocused}
                $accentColor={accentColor}
                $backgroundColor={backgroundColor}
            >
                <Styles.ButtonsContainer
                    gap="xs"
                    alignItems="center"
                    justifyContent="space-between"
                    padding="xs"
                >
                    <Flexbox gap="xxs" alignItems="center">
                        {showButtons.titles !== false && (
                            <Styles.TitlesDropdownContainer>
                                <Button
                                    color={accentColor}
                                    variant="text"
                                    size="small"
                                    noPadding
                                    onClick={() => setIsTextOpen(!isTextOpen)}
                                >
                                    Titles
                                </Button>

                                <Styles.TitlesDropdown
                                    $isOpen={isTextOpen}
                                    $backgroundColor={backgroundColor}
                                    ref={titlesDropdownRef}
                                >
                                    {titleNames.map(
                                        // @ts-expect-error
                                        (title: PossibleTitlesTypes) => {
                                            // @ts-expect-error
                                            const button: TitleType =
                                                titles[title]

                                            return (
                                                <Styles.TitleButton
                                                    onClick={() => {
                                                        addCode(button.code)
                                                        setIsTextOpen(false)
                                                    }}
                                                    $tag={title}
                                                    $accentColor={accentColor}
                                                    key={uuid()}
                                                >
                                                    {button.text}
                                                </Styles.TitleButton>
                                            )
                                        }
                                    )}
                                </Styles.TitlesDropdown>
                            </Styles.TitlesDropdownContainer>
                        )}

                        {buttonNames.map((item: string) => {
                            // @ts-expect-error
                            const button: ButtonType = buttons[item]

                            return (
                                <Styles.IconButton
                                    icon={
                                        // @ts-expect-error
                                        icons[item] || button.defaultIcon
                                    }
                                    size={24}
                                    borderRadius="s"
                                    variant="transparent"
                                    hoverBackground
                                    onClick={() => addCode(button.code)}
                                    color={accentColor}
                                    label={capitalize(button.name)}
                                    showLabel
                                    // @ts-expect-error
                                    $isVisible={showButtons[item] !== false}
                                    key={uuid()}
                                />
                            )
                        })}
                    </Flexbox>

                    <Flexbox gap="xxs">
                        {editorButtonNames.map((button: string) => {
                            const editorButton: EditorButtonType =
                                // @ts-expect-error
                                editorButtons[button]

                            return (
                                // @ts-expect-error
                                <Styles.IconButton
                                    icon={
                                        // @ts-expect-error
                                        icons[button] ||
                                        editorButton.defaultIcon
                                    }
                                    size={24}
                                    borderRadius="s"
                                    variant={
                                        show === button
                                            ? "plain"
                                            : "transparent"
                                    }
                                    label={capitalize(
                                        editorButton.name.replace("editor", "")
                                    )}
                                    color={accentColor}
                                    showLabel
                                    // @ts-expect-error
                                    onClick={() => setShow(button)}
                                    // @ts-expect-error
                                    $isVisible={showButtons[button] !== false}
                                    key={uuid()}
                                />
                            )
                        })}
                    </Flexbox>
                </Styles.ButtonsContainer>

                <Styles.ContainerGrid $col={show === "editorLive" ? 3 : 1}>
                    <Styles.Input
                        value={value}
                        onChange={handleValue}
                        ref={inputRef}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        $isVisible={
                            show === "editorCode" || show === "editorLive"
                        }
                        $height={height}
                        {...rest}
                    />

                    {show === "editorLive" && <Styles.Separator />}

                    <Styles.MarkdownContainer
                        options={OptionsMarkdown}
                        $isVisible={show === "editorCode" ? false : true}
                        $height={height}
                    >
                        {value}
                    </Styles.MarkdownContainer>
                </Styles.ContainerGrid>
            </Styles.StyledMarkdownEditor>
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
            accentColor = "primary",
            label,
            helper,
            helperBottom,
            counter,
            maxLength,
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
                accentColor={accentColor}
                ref={ref}
                maxLength={maxLength}
                {...rest}
            />
        )

        return label || helper || helperBottom ? (
            <InputContainer
                id={id}
                label={label}
                helper={helper}
                helperBottom={helperBottom}
                accentColor={accentColor}
                counter={counter}
                maxLength={maxLength}
                value={value}
            >
                {inputFn()}
            </InputContainer>
        ) : (
            inputFn()
        )
    }
)

export default MarkdownEditor
