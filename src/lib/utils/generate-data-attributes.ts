/*=============================================== Generate data attributes ===============================================*/

export const generateDataAttributes = (attribute: string, values: string[]) =>
    values.map(
        value => `&[data-${attribute}="${value}"] { ${attribute}: ${value}; }`
    )
