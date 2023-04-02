export type SpacerType = {
    name: string
    variable: string
    css: string
    value: string
}

export const allSpacers: SpacerType[] = [
    {
        name: "Spacer XXL",
        variable: "Spacers.XXL",
        css: "var(--spacer-xxl)",
        value: "48px",
    },
    {
        name: "Spacer XL",
        variable: "Spacers.XL",
        css: "var(--spacer-xl)",
        value: "32px",
    },
    {
        name: "Spacer L",
        variable: "Spacers.L",
        css: "var(--spacer-l)",
        value: "24px",
    },
    {
        name: "Spacer M",
        variable: "Spacers.M",
        css: "var(--spacer-m)",
        value: "16px",
    },
    {
        name: "Spacer S",
        variable: "Spacers.S",
        css: "var(--spacer-s)",
        value: "12px",
    },
    {
        name: "Spacer XS",
        variable: "Spacers.XS",
        css: "var(--spacer-xs)",
        value: "8px",
    },
    {
        name: "Spacer XXS",
        variable: "Spacers.XXS",
        css: "var(--spacer-xxs)",
        value: "4px",
    },
]
