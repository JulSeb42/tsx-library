/*=============================================== Component types ===============================================*/

/*==================== Accordion item ====================*/

export type AccordionItemProps = {
    title: string
    isOpen?: boolean
    content: string | React.ReactNode
}

/*==================== Breadcrumbs item ====================*/

export type BreadcrumbsItemProps = {
    to?: string
    text: string
}

/*==================== Message ====================*/

const message = {
    received: "received",
    sent: "sent",
} as const

type MessageTypesTypes = keyof typeof message

export type MessageProps = {
    type: MessageTypesTypes
    text: string
    date?: string
    time?: string
}

/*==================== Tabs item ====================*/

export type TabsItemProps = {
    title: string
    content: string | React.ReactNode
}

/*==================== Stepper step ====================*/

export type StepProps = {
    text: string
    to?: string
}
