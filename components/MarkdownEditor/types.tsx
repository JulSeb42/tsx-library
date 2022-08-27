/*=============================================== MarkdownEditor types ===============================================*/

import React from "react"

import { LibColorsTypes, ColorsShortTypes } from "../../utils/common-types"

export interface MarkdownEditorProps
    extends React.HTMLAttributes<HTMLInputElement> {
    id: string
    value: any
    onChange: any
    commands?: any
    extraCommands?: any

    options?: {
        colorMode?: "light" | "dark"
        label?: string
        helper?: string
        helperBottom?:
            | string
            | {
                  text: string
                  icon?: string
                  iconColor?: LibColorsTypes | ColorsShortTypes | string
              }
        preview?: "live" | "edit" | "preview"
    }
}
