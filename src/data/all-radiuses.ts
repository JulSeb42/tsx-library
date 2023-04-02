export type RadiusType = {
    name: string
    variable: string
    css: string
    value: string
}

export const allRadiuses: RadiusType[] = [
    {
        name: "Radius XXL",
        variable: "Radiuses.XXL",
        css: "var(--radius-xxl)",
        value: "24px",
    },
    {
        name: "Radius XL",
        variable: "Radiuses.XL",
        css: "var(--radius-xl)",
        value: "16px",
    },
    {
        name: "Radius L",
        variable: "Radiuses.L",
        css: "var(--radius-l)",
        value: "12px",
    },
    {
        name: "Radius M",
        variable: "Radiuses.M",
        css: "var(--radius-m)",
        value: "8px",
    },
    {
        name: "Radius S",
        variable: "Radiuses.S",
        css: "var(--radius-s)",
        value: "4px",
    },
    {
        name: "Radius XS",
        variable: "Radiuses.XS",
        css: "var(--radius-xs)",
        value: "2px",
    },
    {
        name: "Radius Round",
        variable: "Radiuses.Round",
        css: "var(--radius-round)",
        value: "99em",
    },
    {
        name: "Radius Circle",
        variable: "Radiuses.Circle",
        css: "var(--radius-circle)",
        value: "50%",
    },
]
