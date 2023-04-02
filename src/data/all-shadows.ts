export type ShadowType = {
    name: string
    variable: string
    css: string
    value: string
}

export const allShadows: ShadowType[] = [
    {
        name: "Shadow XXL",
        variable: "Shadows.XXL",
        css: "var(--shadow-xxl)",
        value: " 0px 10px 14px 8px rgba(0, 0, 0, 0.2), 0px 4px 4px rgba(0, 0, 0, 0.3)",
    },
    {
        name: "Shadow XL",
        variable: "Shadows.XL",
        css: "var(--shadow-xl)",
        value: " 0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)",
    },
    {
        name: "Shadow L",
        variable: "Shadows.L",
        css: "var(--shadow-l)",
        value: " 0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)",
    },
    {
        name: "Shadow M",
        variable: "Shadows.M",
        css: "var(--shadow-m)",
        value: " 0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)",
    },
    {
        name: "Shadow S",
        variable: "Shadows.S",
        css: "var(--shadow-s)",
        value: " 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)",
    },
    {
        name: "Shadow XS",
        variable: "Shadows.XS",
        css: "var(--shadow-xs)",
        value: " 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
    },
]
