/*=============================================== DemoHeader ===============================================*/

import React from "react"
import { NavLink } from "react-router-dom"

import { CoverLayout } from "../../components"
import { Header, Cover, Text, uuid } from "../../lib"

const DemoHeader = () => {
    const links: LinkType[] = [
        {
            text: "Link",
            to: "#",
        },
        {
            text: "Link",
            to: "/",
        },
        {
            text: "Link",
            to: "/",
        },
        {
            text: "Button",
            onClick: () => alert("Clicked"),
        },
    ]

    return (
        <CoverLayout title="Demo header">
            <Header
                logo={{
                    text: "Logo",
                }}
                position="fixed"
                hideOnScroll={400}
                navMobileVariant="top"
                search={{
                    pathname: "",
                    icon: "search",
                    placeholder: "Search here",
                    keyboardShortcut: ["Command", "KeyK"],
                    maxWidth: 300,
                    backgroundColor: "light",
                    accentColor: "secondary",
                }}
                navDesktopVariant="left"
                shadow="m"
            >
                {links.map(({ text, to, onClick }) =>
                    to ? (
                        <NavLink to={to} key={uuid()}>
                            {text}
                        </NavLink>
                    ) : (
                        <button onClick={onClick} key={uuid()}>
                            {text}
                        </button>
                    )
                )}
            </Header>

            <Cover
                src="https://images.unsplash.com/photo-1619360142632-031d811d1678?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
                alt="Cover"
                justifyContent="flex-end"
                alignItems="flex-start"
                overlay="gradient-black"
            >
                <Text tag="h1" display>
                    Title
                </Text>
                <Text tag="h2" display>
                    Subtitle
                </Text>
            </Cover>
        </CoverLayout>
    )
}

export default DemoHeader

type LinkType = {
    text: string
    to?: string
    onClick?: () => void
}
