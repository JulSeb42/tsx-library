type prop = {
    name: string
    component: string
    content: string
}

export const allProps: prop[] = [
    {
        name: "AccordionItemProps",
        component: "Accordion",
        content: "title: string\nisOpen?: boolean\ncontent: string | ReactNode",
    },
    {
        name: "BreadcrumbsItemProps",
        component: "Breadcrumbs",
        content: "href?: string\ntext: string",
    },
    {
        name: "MessageProps",
        component: "Messaging",
        content:
            'type: "received" | "sent"\ntext: string\ndate?: string\ntime?: string',
    },
    {
        name: "TabsItemProps",
        component: "Tabs",
        content: "title: string\ncontent: string | ReactNode",
    },
    {
        name: "StepProps",
        component: "Stepper",
        content: "text: string\nhref?: string",
    },
    {
        name: "FooterItemProps",
        component: "Footer",
        content:
            "content: string | JSX.Element\nonClick?: (e: MouseEvent<HTMLButtonElement>) => void\nhref?: string\nblank?: boolean",
    },
    {
        name: "ButtonGroupProps",
        component: "ButtonGroup",
        content:
            '"aria-label"?: string\ntext: string\niconLeft?: string\niconRight?: string\niconOnly?: string\nonClick: (e: MouseEvent<HTMLButtonElement>) => void\nhref?: string\nblank?: boolean',
    },
    {
        name: "ListGroupItemProps",
        component: "ListGroup",
        content:
            "text: string\nsubtext?: string\nbadge?: true | string | number\nbadgeColor?: AllColorsTypes\nbadgeContentColor?: AllColorsTypes\ndate?: string or Date\nhref?: string\nblank?: string\nonClick?: string\ndisabled?: boolean\ncolor?: AllColorsTypes",
    },
    {
        name: "IconMenuItemProps",
        component: "IconMenu",
        content:
            "icon: string\nlabel: string\nonClick?: (e: MouseEvent<HTMLButtonElement>) => void\nhref?: string\nblank?: string",
    },
]
