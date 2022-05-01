// Import types
import gridProps from "../Grid/types"

// Types
export interface containerProps extends gridProps {
    accordionStyle?: string
}

export interface buttonProps extends React.HTMLAttributes<HTMLButtonElement> {
    icon?: string
}

export interface itemProps extends React.HTMLAttributes<HTMLParagraphElement> {
    isOpen?: boolean
    icon?: string
}
