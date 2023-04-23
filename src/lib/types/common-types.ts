/*=============================================== Common types ===============================================*/

import type { RequireAtLeastOne, typeValues } from "./"

/*==================== Colors ====================*/

/* Library colors */

export type LibColorsTypes = keyof typeof typeValues.libColors

/* Colors hover */

export type ColorsHoverTypes = keyof typeof typeValues.colorsHover

/* Colors input */

export type ColorsInputTypes =
    | keyof typeof typeValues.colorsInput
    | ColorsHoverTypes

/* Colors short */

export type ColorsShortTypes =
    | keyof typeof typeValues.colorsShort
    | ColorsInputTypes

/* Overlays */

export type OverlayTypes = keyof typeof typeValues.overlays

/* All colors */

export type AllColorsTypes = LibColorsTypes | ColorsShortTypes

/*==================== Font families ====================*/

export type FontFamiliesTypes = keyof typeof typeValues.fontFamilies

/*==================== Font sizes ====================*/

export type FontSizeTypes = keyof typeof typeValues.fontSizes

/*==================== Font weights ====================*/

export type FontWeightTypes = keyof typeof typeValues.weights | number

/*==================== Line heights ====================*/

export type LineHeightsTypes = keyof typeof typeValues.lineHeights | number

/*==================== Shadows ====================*/

export type ShadowsTypes = keyof typeof typeValues.shadows | null

export type BoxShadowProps = {
    default: ShadowsTypes
    hover: ShadowsTypes
    active: ShadowsTypes
}

/*==================== Radiuses ====================*/

export type RadiusesTypes =
    | keyof typeof typeValues.radiuses
    | number
    | {
          topLeft?: keyof typeof typeValues.radiuses | number | null
          topRight?: keyof typeof typeValues.radiuses | number | null
          bottomRight?: keyof typeof typeValues.radiuses | number | null
          bottomLeft?: keyof typeof typeValues.radiuses | number | null
      }
    | null

/*==================== Text align ====================*/

export type TextAlignTypes = keyof typeof typeValues.textAlign

/*==================== Vertical align ====================*/

export type VerticalAlignTypes = keyof typeof typeValues.vAlign

/*==================== Spacers ====================*/

export type SpacersTypes = keyof typeof typeValues.spacers | number | null

/*==================== Paddings ====================*/

export type PaddingTypes =
    | SpacersTypes
    | {
          left?: SpacersTypes
          top?: SpacersTypes
          right?: SpacersTypes
          bottom?: SpacersTypes
          leftRight?: SpacersTypes
          topBottom?: SpacersTypes
      }

/*==================== Transitions ====================*/

export type TransitionTypes = keyof typeof typeValues.transitions

/*==================== Text decoration ====================*/

export type TextDecorationTypes = keyof typeof typeValues.textDecorations

/*==================== Custom position ====================*/

export type PositionsTypes = keyof typeof typeValues.positions

export type ObjectPositionTypes = {
    position?: PositionsTypes
    left?: SpacersTypes
    top?: SpacersTypes
    right?: SpacersTypes
    bottom?: SpacersTypes
    zIndex?: number
}

/*==================== Grid ====================*/

/* Justify items */

export type GridJustifyItemsTypes =
    | keyof typeof typeValues.gridJustifyItems
    | null

/* Align items */

export type GridAlignItemsTypes = keyof typeof typeValues.gridAlignItems | null

/* Justify content */

export type GridJustifyContentTypes =
    | keyof typeof typeValues.gridJustifyContent
    | null

/* Align content */

export type GridAlignContentTypes =
    | keyof typeof typeValues.gridAlignContent
    | null

/*==================== Flexbox ====================*/

/* Direction */

export type FlexDirectionTypes = keyof typeof typeValues.flexDirection | null

/* Wrap */

export type FlexWrapTypes = keyof typeof typeValues.flexWrap | null

/* Justify content */

export type FlexJustifyContentTypes =
    | keyof typeof typeValues.flexJustifyContent
    | null

/* Align items */

export type FlexAlignItemsTypes = keyof typeof typeValues.flexAlignItems | null

/* Justify items */

export type FlexJustifyItemsTypes =
    | keyof typeof typeValues.flexJustifyItems
    | null

/* Align content */

export type FlexAlignContentTypes =
    | keyof typeof typeValues.flexAlignContent
    | null

/*==================== Object fit ====================*/

export type ObjectFitTypes = keyof typeof typeValues.objectFit | null

/*==================== Inputs ====================*/

/* Validation */

export type ValidationTypes = keyof typeof typeValues.validation | undefined

/*==================== Cursor ====================*/

export type CursorTypes = keyof typeof typeValues.cursors

/*==================== Border styles ====================*/

export type BorderStylesTypes = keyof typeof typeValues.borderStyles

/*==================== Border ====================*/

export type BorderTypes = {
    style?: BorderStylesTypes
    width?: number
    color?: AllColorsTypes
}

/*==================== Links ====================*/

type LinkType1 = {
    href?: never
    to?: string
}

type LinkType2 = {
    href?: string
    to?: never
}

export type LinkTypes = LinkType1 | LinkType2

export type LinkTypesRequire = RequireAtLeastOne<LinkTypes, "href" | "to">

export type LinkTypesBlank = LinkTypes & { blank?: boolean }

export type LinkTypesBlankRequire = LinkTypesRequire & { blank?: boolean }

/*==================== ButtonLinks ====================*/

type ButtonLinkType1 = {
    onClick?: () => void
    href?: never
    to?: never
    blank?: never
}

type ButtonLinkType2 = {
    onClick?: never
    href?: string
    to?: never
    blank?: boolean
}

type ButtonLinkType3 = {
    onClick?: never
    href?: never
    to?: string
    blank?: boolean
}

export type ButtonLinkTypes =
    | ButtonLinkType1
    | ButtonLinkType2
    | ButtonLinkType3

export type ButtonLinkTypesRequire = RequireAtLeastOne<
    ButtonLinkTypes,
    "href" | "to" | "onClick"
>

/*==================== ButtonLinksDisabled ====================*/

type ButtonLinkDisabledType1 = {
    onClick?: () => void
    disabled?: boolean
    href?: never
    to?: never
    blank?: never
}

type ButtonLinkDisabledType2 = {
    onClick?: never
    disabled?: never
    href?: string
    to?: never
    blank?: boolean
}

type ButtonLinkDisabledType3 = {
    onClick?: never
    disabled?: never
    href?: never
    to?: string
    blank?: boolean
}

export type ButtonLinkDisabledTypes =
    | ButtonLinkDisabledType1
    | ButtonLinkDisabledType2
    | ButtonLinkDisabledType3

export type ButtonLinkTypesDisabledRequire = RequireAtLeastOne<
    ButtonLinkTypes,
    "href" | "to" | "onClick"
>
