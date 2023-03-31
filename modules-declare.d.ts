declare module "*.svg" {
    import React = require("react")
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>

    const src: string
    // @ts-expect-error
    export default src
}
