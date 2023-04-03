/*=============================================== DemoCard types ===============================================*/

import type { ShadowType, SpacerType, RadiusType } from "../../data"

interface Content1 {
    shadow: ShadowType
    spacer?: never
    radius?: never
}

interface Content2 {
    shadow?: never
    spacer: SpacerType
    radius?: never
}

interface Content3 {
    shadow?: never
    spacer?: never
    radius: RadiusType
}

export type DemoCardProps = Content1 | Content2 | Content3
