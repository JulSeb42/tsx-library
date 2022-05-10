// Import types
import gridProps from "../Grid/types"

// Types
export interface props extends gridProps {
    color?: "primary" | "secondary" | "success" | "danger" | "warning" | string
    borderColor?:
        | "primary"
        | "secondary"
        | "success"
        | "danger"
        | "warning"
        | string
    modal?: boolean
}
