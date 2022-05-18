// Types
export interface colorProps {
    color?:
        | "primary"
        | "secondary"
        | "success"
        | "danger"
        | "warning"
        | "black"
        | "white"
        | "gray"
        | "current"
        | string
    colorHover?: string
    colorActive?: string
}

export interface backgroundProps {
    background?:
        | "primary"
        | "secondary"
        | "success"
        | "danger"
        | "warning"
        | "black"
        | "white"
        | "gray"
        | "current"
        | string
    backgroundHover?: string
    backgroundActive?: string
}

export interface textColorProps {
    textColor?:
        | "primary"
        | "secondary"
        | "success"
        | "danger"
        | "warning"
        | "black"
        | "white"
        | "gray"
        | "current"
        | string
}

export interface shadowProps {
    shadow?: "xs" | "s" | "m" | "l" | "xl" | "xxl" | string
}

export interface radiusProps {
    radius?:
        | "xs"
        | "s"
        | "m"
        | "l"
        | "xl"
        | "xxl"
        | "round"
        | "circle"
        | string
        | number
}

export interface iconProps {
    size: number
    icon: string
    color?:
        | "primary"
        | "secondary"
        | "success"
        | "danger"
        | "warning"
        | "black"
        | "white"
        | "gray"
        | "current"
        | string
}

export interface flexboxProps {
    inline?: boolean
    direction?: "row" | "row-reverse" | "column" | "column-reverse"
    wrap?: "nowrap" | "wrap" | "wrap-reverse"
    justifyContent?:
        | "flex-start"
        | "flex-end"
        | "center"
        | "space-between"
        | "space-around"
        | "space-evenly"
        | "start"
        | "end"
        | "left"
        | "right"
    alignItems?:
        | "stretch"
        | "flex-start"
        | "flex-end"
        | "center"
        | "baseline"
        | "first baseline"
        | "last baseline"
        | "start"
        | "end"
        | "self-start"
        | "self end"
    alignContent?:
        | "flex-start"
        | "flex-end"
        | "center"
        | "space-between"
        | "space-around"
        | "space-evenly"
        | "stretch"
        | "start"
        | "end"
        | "baseline"
        | "first baseline"
        | "unsafe"
    gap?: number | string
}

export interface gridProps {
    inline?: boolean
    col?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | number | string
    gap?: number | string
    rows?: string
    areas?: string
    justifyItems?: "start" | "end" | "center" | "stretch"
    alignItems?: "start" | "end" | "center" | "stretch"
    justifyContent?:
        | "start"
        | "end"
        | "center"
        | "stretch"
        | "space-around"
        | "space-between"
        | "space-evenly"
    alignContent?:
        | "start"
        | "end"
        | "center"
        | "stretch"
        | "space-around"
        | "space-between"
        | "space-evenly"
    padding?: number | string
}

export interface gapProps {
    gap?: "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl" | string | number
}
