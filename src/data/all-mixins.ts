type mixin = {
    name: string
    effect: string
    variables: string
    example: string
}

export const allMixins: mixin[] = [
    {
        name: "LibColors",
        effect: "Short code for every colors of the library",
        variables: "$color",
        example: 'Mixins.LibColors({\n    $color: "secondary-500",\n})',
    },
    {
        name: "ColorsShort",
        effect: "Short names for main colors",
        variables: "$color",
        example: 'Mixins.ColorsShort({\n    $color: "secondary",\n})',
    },
    {
        name: "AllColors",
        effect: "Function joining LibColors and ColorsShort",
        variables: "$color",
        example: 'Mixins.AllColors({\n    $color: "success",\n})',
    },
    {
        name: "ColorsHoverDefault",
        effect: "Default colors for element which change colors on hover",
        variables: "$color (To add inside the component and not the styles)",
        // eslint-disable-next-line
        example: "color: ${Mixins.ColorsHoverDefault}",
    },
    {
        name: "ColorsHoverHover",
        effect: "Hover colors for element which change colors on hover",
        variables: "$color (To add inside the component and not the styles)",
        // eslint-disable-next-line
        example: "&:hover {\n    color: ${Mixins.ColorsHoverHover};\n}",
    },
    {
        name: "ColorsHoverActive",
        effect: "Active colors for element which change colors on hover",
        variables: "$color (To add inside the component and not the styles)",
        // eslint-disable-next-line
        example: "&:active {\n    color: ${Mixins.ColorsHoverActive};\n}",
    },
    {
        name: "ColorsGhostDefault",
        effect: "Default colors for buttons with ghost variant",
        variables: "$color (To add inside the component and not the styles)",
        // eslint-disable-next-line
        example: "color: ${Mixins.ColorsGhostDefault}",
    },
    {
        name: "ColorsGhostHover",
        effect: "Hover colors for buttons with ghost variant",
        variables: "$color (To add inside the component and not the styles)",
        // eslint-disable-next-line
        example: "&:hover {\n    color: ${Mixins.ColorsGhostHover};\n}",
    },
    {
        name: "ColorsGhostActive",
        effect: "Active colors for buttons with ghost variant",
        variables: "$color (To add inside the component and not the styles)",
        // eslint-disable-next-line
        example: "&:active {\n    color: ${Mixins.ColorsGhostActive};\n}",
    },
    {
        name: "Overlay",
        effect: "Add an overlay",
        variables: "$overlay",
        // eslint-disable-next-line
        example: '${Mixins.Overlay({ $overlay: "gradient-black" })}',
    },
    {
        name: "BorderRadius",
        effect: "Sets border radiuses on all sides",
        variables: "$borderRadius",
        example:
            'Mixins.BorderRadius({\n    $borderRadius: {\n        topLeft: "m",\n    },\n})',
    },
    {
        name: "Shadow",
        effect: "Adds shadows",
        variables:
            "$shadow, $shadowDefault, $shadowHover, $shadowActive, $isExtended",
        example:
            'Mixins.Shadow({\n    $isExtended: true,\n    $shadowDefault: "s",\n    $shadowHover: "m",\n    $shadowActive: "xs",\n})',
    },
    {
        name: "Spacers",
        effect: "Shortcut for spacers",
        variables: "$spacer",
        // eslint-disable-next-line
        example: 'margin-left: ${Mixins.Spacers({\n    $spacer: "xs",\n})}',
    },
    {
        name: "HideScrollbar",
        effect: "Hides scrollbars on element",
        variables: "-",
        example: "Mixins.HideScrollbar",
    },
    {
        name: "Padding",
        effect: "Add paddings on element",
        variables: "$padding",
        example:
            'Mixins.Padding({\n    $padding: {\n        top: "xs",\n    }\n})',
    },
    {
        name: "Position",
        effect: "For position props",
        variables: "$position, $left, $top, $right, $bottom, $zIndex",
        example:
            'Mixins.Position({\n    $position: "fixed",\n    $right: "5vw",\n    $bottom: "xs",\n    $zIndex: 999,\n})',
    },
    {
        name: "Grid",
        effect: "Add a CSS grid",
        variables:
            "$inline, $col, $gap, $columnGap, $rowGap, $justifyItems, $alignItems, $justifyContent, $alignContent, $padding",
        // eslint-disable-next-line
        example: '${Mixins.Grid({ \n    $col: 4, \n    $gap: "s" \n})}',
    },
    {
        name: "Flexbox",
        effect: "Add a flexbox",
        variables:
            "$inline, $direction, $wrap, $justify, $align, $gap, $rowGap, $columnGap",
        example:
            // eslint-disable-next-line
            '${Mixins.Flexbox({ \n    $inline: true, \n    $align: "center", \n    $justify: "flex-end", \n})}',
    },
    {
        name: "Icon",
        effect: "Add an icon",
        variables: "$name, $color, $size",
        example:
            // eslint-disable-next-line
            '&:before { \n    ${Mixins.Icon({ \n        $name: "chevron-down", \n        $color: "primary", \n        $size: 24, \n    })}; \n}',
    },
]
