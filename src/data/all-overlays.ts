type overlay = {
    name: string
    variable: string
    css: string
    value: string
}

export const allOverlays: overlay[] = [
    {
        name: "Plain Black 50",
        variable: "Overlays.Plain.Black50",
        css: "var(--overlay-black-50)",
        value: "rgba(0, 0, 0, 0.5)",
    },
    {
        name: "Plain Black 80",
        variable: "Overlays.Plain.Black80",
        css: "var(--overlay-black-80)",
        value: "rgba(0, 0, 0, 0.8)",
    },
    {
        name: "Plain White 50",
        variable: "Overlays.Plain.White50",
        css: "var(--overlay-white-50)",
        value: "rgba(255, 255, 255, 0.5)",
    },
    {
        name: "Plain White 80",
        variable: "Overlays.Plain.White80",
        css: "var(--overlay-white-80)",
        value: "rgba(255, 255, 255, 0.8)",
    },
    {
        name: "Gradient Black",
        variable: "Overlays.Gradient.Black",
        css: "var(--overlay-gradient-black)",
        value: "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.56) 100%)",
    },
    {
        name: "Gradient White",
        variable: "Overlays.Gradient.White",
        css: "var(--overlay-gradient-white)",
        value: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.35) 100%)",
    },
]
