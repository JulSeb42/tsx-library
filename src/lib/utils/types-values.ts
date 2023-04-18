/*=============================================== CSS values ===============================================*/

export const typeValues = {
    /*==================== Colors ====================*/

    /* Library colors */

    libColors: {
        black: "black",
        white: "white",
        "gray-50": "gray-50",
        "gray-100": "gray-100",
        "gray-200": "gray-200",
        "gray-300": "gray-300",
        "gray-400": "gray-400",
        "gray-500": "gray-500",
        "gray-600": "gray-600",
        "gray-700": "gray-700",
        "gray-800": "gray-800",
        "gray-900": "gray-900",
        "primary-50": "primary-50",
        "primary-100": "primary-100",
        "primary-200": "primary-200",
        "primary-300": "primary-300",
        "primary-400": "primary-400",
        "primary-500": "primary-500",
        "primary-600": "primary-600",
        "primary-700": "primary-700",
        "primary-800": "primary-800",
        "primary-900": "primary-900",
        "secondary-50": "secondary-50",
        "secondary-100": "secondary-100",
        "secondary-200": "secondary-200",
        "secondary-300": "secondary-300",
        "secondary-400": "secondary-400",
        "secondary-500": "secondary-500",
        "secondary-600": "secondary-600",
        "secondary-700": "secondary-700",
        "secondary-800": "secondary-800",
        "secondary-900": "secondary-900",
        "success-50": "success-50",
        "success-100": "success-100",
        "success-200": "success-200",
        "success-300": "success-300",
        "success-400": "success-400",
        "success-500": "success-500",
        "success-600": "success-600",
        "success-700": "success-700",
        "success-800": "success-800",
        "success-900": "success-900",
        "danger-50": "danger-50",
        "danger-100": "danger-100",
        "danger-200": "danger-200",
        "danger-300": "danger-300",
        "danger-400": "danger-400",
        "danger-500": "danger-500",
        "danger-600": "danger-600",
        "danger-700": "danger-700",
        "danger-800": "danger-800",
        "danger-900": "danger-900",
        "warning-50": "warning-50",
        "warning-100": "warning-100",
        "warning-200": "warning-200",
        "warning-300": "warning-300",
        "warning-400": "warning-400",
        "warning-500": "warning-500",
        "warning-600": "warning-600",
        "warning-700": "warning-700",
        "warning-800": "warning-800",
        "warning-900": "warning-900",
        currentColor: "currentColor",
        transparent: "transparent",
        background: "background",
        font: "font",
    },

    /* Colors hover */

    colorsHover: {
        primary: "primary",
        secondary: "secondary",
        success: "success",
        danger: "danger",
        warning: "warning",
        white: "white",
        font: "font",
        background: "background",
    },

    /* Colors input */

    colorsInput: { gray: "gray" },

    /* Colors short */

    colorsShort: { black: "black" },

    /* Overlays */

    overlays: {
        "overlay-black-50": "overlay-black-50",
        "overlay-black-80": "overlay-black-80",
        "overlay-white-50": "overlay-white-50",
        "overlay-white-80": "overlay-white-80",
        "overlay-gradient-black": "overlay-gradient-black",
        "overlay-gradient-white": "overlay-gradient-white",
    },

    /*==================== Font families ====================*/

    fontFamilies: {
        body: "body",
        code: "code",
        custom: "custom",
    },

    /*==================== Font sizes ====================*/

    fontSizes: {
        "display-h1": "display-h1",
        "display-h2": "display-h2",
        "display-h3": "display-h3",
        "display-h4": "display-h4",
        "display-h5": "display-h5",
        "title-h1": "title-h1",
        "title-h2": "title-h2",
        "title-h3": "title-h3",
        "title-h4": "title-h4",
        "title-h5": "title-h5",
        "title-h6": "title-h6",
        body: "body",
        small: "small",
    },

    /*==================== Font weights ====================*/

    weights: {
        regular: "regular",
        bold: "bold",
        black: "black",
    },

    /*==================== Line heights ====================*/

    lineHeights: { regular: "regular", code: "code" },

    /*==================== Shadows ====================*/

    shadows: {
        xxl: "xxl",
        xl: "xl",
        l: "l",
        m: "m",
        s: "s",
        xs: "xs",
        none: "none",
    },

    /*==================== Radiuses ====================*/

    radiuses: {
        xxl: "xxl",
        xl: "xl",
        l: "l",
        m: "m",
        s: "s",
        xs: "xs",
        round: "round",
        circle: "circle",
        none: "none",
    },

    /*==================== Text align ====================*/

    textAlign: {
        left: "left",
        center: "center",
        right: "right",
        justify: "justify",
        inherit: "inherit",
        initial: "initial",
        revert: "revert",
        "revert-layer": "revert-layer",
        unset: "unset",
    },

    /*==================== Spacers ====================*/

    spacers: {
        xxl: "xxl",
        xl: "xl",
        l: "l",
        m: "m",
        s: "s",
        xs: "xs",
        xxs: "xxs",
        none: "none",
    },

    /*==================== Transitions ====================*/

    transitions: {
        short: "short",
        long: "long",
        bezier: "bezier",
    },

    /*==================== Text decoration ====================*/

    textDecorations: {
        underline: "underline",
        overline: "overline",
        "line-through": "line-through",
        initial: "initial",
        inherit: "inherit",
        none: "none",
    },

    /*==================== Custom position ====================*/

    positions: {
        relative: "relative",
        absolute: "absolute",
        fixed: "fixed",
    },

    /*==================== Grid ====================*/

    /* Justify items */

    gridJustifyItems: {
        start: "start",
        end: "end",
        center: "center",
        stretch: "stretch",
    },

    /* Align items */

    gridAlignItems: {
        start: "start",
        end: "end",
        center: "center",
        stretch: "stretch",
    },

    /* Justify content */

    gridJustifyContent: {
        start: "start",
        end: "end",
        center: "center",
        stretch: "stretch",
        "space-around": "space-around",
        "space-between": "space-between",
        "space-evenly": "space-evenly",
    },

    /* Align content */

    gridAlignContent: {
        start: "start",
        end: "end",
        center: "center",
        stretch: "stretch",
        "space-around": "space-around",
        "space-between": "space-between",
        "space-evenly": "space-evenly",
    },

    /*==================== Flexbox ====================*/

    /* Direction */

    flexDirection: {
        row: "row",
        "row-reverse": "row-reverse",
        column: "column",
        "column-reverse": "column-reverse",
    },

    /* Wrap */

    flexWrap: {
        nowrap: "nowrap",
        wrap: "wrap",
        "wrap-reverse": "wrap-reverse",
    },

    /* Justify content */

    flexJustifyContent: {
        "flex-start": "flex-start",
        "flex-end": "flex-end",
        center: "center",
        "space-between": "space-between",
        "space-around": "space-around",
        "space-evenly": "space-evenly",
    },

    /* Align items */

    flexAlignItems: {
        stretch: "stretch",
        "flex-start": "flex-start",
        "flex-end": "flex-end",
        center: "center",
        baseline: "baseline",
    },

    /* Justify items */

    flexJustifyItems: {
        normal: "normal",
        stretch: "stretch",
        baseline: "baseline",
        center: "center",
        start: "start",
        end: "end",
        "flex-start": "flex-start",
        "flex-end": "flex-end",
        "self-start": "self-start",
        "self-end": "self-end",
        left: "left",
        right: "right",
        legacy: "legacy",
    },

    /* Align content */

    flexAlignContent: {
        "flex-start": "flex-start",
        "flex-end": "flex-end",
        center: "center",
        "space-between": "space-between",
        "space-around": "space-around",
        "space-evenly": "space-evenly",
        stretch: "stretch",
        normal: "normal",
    },

    /*==================== Object fit ====================*/

    objectFit: {
        contain: "contain",
        cover: "cover",
        fill: "fill",
        none: "none",
        "scale-down": "scale-down",
        inherit: "inherit",
        initial: "initial",
        revert: "revert",
        "revert-layer": "revert-layer",
        unset: "unset",
    },

    /*==================== Inputs ====================*/

    /* Validation */

    validation: {
        passed: "passed",
        "not-passed": "not-passed",
    },

    /*==================== Cursor ====================*/

    cursors: {
        alias: "alias",
        "all-scroll": "all-scroll",
        auto: "auto",
        cell: "cell",
        "col-resize": "col-resize",
        "context-menu": "context-menu",
        copy: "copy",
        crosshair: "crosshair",
        default: "default",
        "e-resize": "e-resize",
        "ew-resize": "ew-resize",
        grab: "grab",
        grabbing: "grabbing",
        help: "help",
        move: "move",
        "n-resize": "n-resize",
        "ne-resize": "ne-resize",
        "nesw-resize": "nesw-resize",
        "ns-resize": "ns-resize",
        "nw-resize": "nw-resize",
        "nwse-resize": "nwse-resize",
        "no-drop": "no-drop",
        none: "none",
        "not-allowed": "not-allowed",
        pointer: "pointer",
        progress: "progress",
        "row-resize": "row-resize",
        "s-resize": "s-resize",
        "se-resize": "se-resize",
        "sw-resize": "sw-resize",
        text: "text",
        "vertical-text": "vertical-text",
        "w-resize": "w-resize",
        wait: "wait",
        "zoom-in": "zoom-in",
        "zoom-out": "zoom-out",
        initial: "initial",
        inherit: "inherit",
    },

    /*==================== Border styles ====================*/

    borderStyles: {
        dotted: "dotted",
        dashed: "dashed",
        solid: "solid",
        double: "double",
        groove: "groove",
        ridge: "ridge",
        inset: "inset",
        outset: "outset",
        none: "none",
        hidden: "hidden",
    },
} as const
