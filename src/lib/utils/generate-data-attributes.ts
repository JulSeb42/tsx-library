/*=============================================== Generate data attributes ===============================================*/

export const generateDataAttributes = (
    attribute: string,
    values: string[],
    tags?: string[]
) => {
    if (tags) {
        return values.map(value =>
            tags.map(
                tag =>
                    `&[data-${attribute}="${value}"] ${tag} { ${attribute}: ${value}; }`
            )
        )
    }

    return values.map(
        value => `&[data-${attribute}="${value}"] { ${attribute}: ${value}; }`
    )
}
