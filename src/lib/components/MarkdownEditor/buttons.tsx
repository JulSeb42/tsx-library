/*=============================================== Buttons ===============================================*/

import React from "react"
import {
    ImageIcon,
    BoldIcon,
    CodeBlockIcon,
    CodeIcon,
    CommentIcon,
    ItalicIcon,
    LinkIcon,
    OrderedListIcon,
    QuoteIcon,
    SeparatorIcon,
    StrikethroughIcon,
    UnorderedListIcon,
    EditorCodeIcon,
    EditorLiveIcon,
    EditorPreviewIcon,
} from "../../icons"
import type { ShowTypes, PossibleTitlesTypes } from "./types"

const ICON_SIZE = 16 * 0.8

export const buttonNames = [
    "bold",
    "italic",
    "strikethrough",
    "ul",
    "ol",
    "link",
    "quote",
    "hr",
    "code",
    "codeBlock",
    "comment",
    "image",
]

export const buttons = {
    bold: {
        name: "bold",
        code: "** **",
        defaultIcon: <BoldIcon size={ICON_SIZE} />,
    },
    italic: {
        name: "italic",
        code: "* *",
        defaultIcon: <ItalicIcon size={ICON_SIZE} />,
    },
    strikethrough: {
        name: "strikethrough",
        code: "~~ ~~",
        defaultIcon: <StrikethroughIcon size={ICON_SIZE} />,
    },
    ul: {
        name: "unordered list",
        code: "- ",
        defaultIcon: <UnorderedListIcon size={ICON_SIZE} />,
    },
    ol: {
        name: "ordered list",
        code: "1. ",
        defaultIcon: <OrderedListIcon size={ICON_SIZE} />,
    },
    link: {
        name: "link",
        code: "[](URL here)",
        defaultIcon: <LinkIcon size={ICON_SIZE} />,
    },
    quote: {
        name: "blockquote",
        code: "> ",
        defaultIcon: <QuoteIcon size={ICON_SIZE} />,
    },
    hr: {
        name: "hr",
        code: "\n\n---\n\n",
        defaultIcon: <SeparatorIcon size={ICON_SIZE} />,
    },
    code: {
        name: "code",
        code: "``",
        defaultIcon: <CodeIcon size={ICON_SIZE} />,
    },
    codeBlock: {
        name: "code block",
        code: "```\n\n```",
        defaultIcon: <CodeBlockIcon size={ICON_SIZE} />,
    },
    comment: {
        name: "comment",
        code: "<!--  -->",
        defaultIcon: <CommentIcon size={ICON_SIZE} />,
    },
    image: {
        name: "image",
        code: "![](https://example.com/your-image.png)",
        defaultIcon: <ImageIcon size={ICON_SIZE} />,
    },
}

export const editorButtonNames: ShowTypes[] = [
    "editorCode",
    "editorLive",
    "editorPreview",
]

export const editorButtons = {
    editorCode: {
        name: "editorCode",
        defaultIcon: <EditorCodeIcon size={ICON_SIZE} />,
    },
    editorLive: {
        name: "editorLive",
        defaultIcon: <EditorLiveIcon size={ICON_SIZE} />,
    },
    editorPreview: {
        name: "editorPreview",
        defaultIcon: <EditorPreviewIcon size={ICON_SIZE} />,
    },
}

export const titleNames = ["h1", "h2", "h3", "h4", "h5", "h6"]

export const titles = {
    h1: {
        text: "Title 1",
        code: "# ",
    },
    h2: {
        text: "Title 2",
        code: "## ",
    },
    h3: {
        text: "Title 3",
        code: "### ",
    },
    h4: {
        text: "Title 4",
        code: "#### ",
    },
    h5: {
        text: "Title 5",
        code: "##### ",
    },
    h6: {
        text: "Title 6",
        code: "###### ",
    },
}

export const getFontSizeButton = (tag: PossibleTitlesTypes) => {
    switch (tag) {
        case "h6":
            return 12
        case "h5":
            return 13
        case "h4":
            return 14
        case "h3":
            return 15
        case "h2":
            return 16
        default:
            return 17
    }
}
