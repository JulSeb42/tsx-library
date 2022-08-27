/*=============================================== Header ===============================================*/

import React, { useState, useEffect, useRef } from "react"

import * as Styles from "./styles"
import { HeaderProps } from "./types"

const Header = ({
    logo,
    position = "relative",
    backgroundColor = "primary",
    linkColor = "white",
    children,
    burgerColor = "white",
    navColor = "primary",
    ...props
}: HeaderProps) => {
    const [isOpen, setIsOpen] = useState(false)

    const [headerHeight, setHeaderHeight] = useState(0)

    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (ref.current) {
            setHeaderHeight(ref.current.clientHeight)
        }
    }, [])

    return (
        <Styles.StyledHeader
            $backgroundColor={backgroundColor}
            $isOpen={isOpen}
            $position={position}
            $linkColor={linkColor}
            $navColor={navColor}
            ref={ref}
            {...props}
        >
            <Styles.Logo to={logo.to || "/"}>
                {logo.img ? (
                    <Styles.LogoImg
                        src={logo.img}
                        alt={logo.alt || "Logo"}
                        width={logo.width || 100}
                        height={logo.height || 30}
                        options={{ fit: "contain" }}
                    />
                ) : (
                    logo.text
                )}
            </Styles.Logo>

            <Styles.HeaderBurger
                isOpen={isOpen}
                color={burgerColor}
                onClick={() => setIsOpen(!isOpen)}
            />

            <Styles.Nav
                $isOpen={isOpen}
                $headerHeight={headerHeight}
                $backgroundColor={backgroundColor}
                $navColor={navColor}
                $linkColor={linkColor}
            >
                {children}
            </Styles.Nav>
        </Styles.StyledHeader>
    )
}

export default Header
