/*=============================================== Header ===============================================*/

import React, { useState, useRef } from "react"
import { useClickOutside, useMaxWidth } from "../../hooks"

import Input from "../Input"
import { useKeyPress } from "../../hooks"

import * as Styles from "./styles"
import { HeaderProps } from "./types"

const Header = ({
    logo,
    position = "relative",
    backgroundColor = "primary",
    linkColor = "background",
    children,
    burgerColor = "white",
    navColor = "primary",
    navVariant = "top",
    burgerPosition = "right",
    search,
    ...props
}: HeaderProps) => {
    const [isOpen, setIsOpen] = useState(false)

    const el = useRef<HTMLButtonElement>(null)
    const onClickOutside = () => setIsOpen(false)
    useClickOutside(el, onClickOutside)

    const burgerFunction = () => (
        <Styles.HeaderBurger
            isOpen={isOpen}
            color={burgerColor}
            onClick={() => setIsOpen(!isOpen)}
            width={30}
            height={20}
        />
    )

    const logoHeight = logo.height || 30
    const burgerHeight = 30
    const valueForHeight =
        logoHeight > burgerHeight || logoHeight > 32 ? logoHeight : burgerHeight

    const headerHeight = valueForHeight + 16 * 2

    const isMobile = useMaxWidth(600)

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
        search?.setSearch(e.target.value)
    const clearSearch = () => search?.setSearch("")

    const inputRef = useRef<any>(null)
    const handleFocus = () => inputRef.current.focus()

    const keys = search?.keyboardShortcut ? search?.keyboardShortcut : ""
    useKeyPress(() => handleFocus(), keys)

    const searchInputFunc = () =>
        search && (
            <Styles.SearchForm onSubmit={search.handleSubmit}>
                <Input
                    id={search.id || "global-search"}
                    type="search"
                    clearSearch={clearSearch}
                    iconClear={search.iconClear}
                    onChange={handleSearch}
                    value={search.search}
                    placeholder={search.placeholder}
                    icon={search.icon}
                    ref={inputRef}
                    backgroundColor={search.backgroundColor}
                />
            </Styles.SearchForm>
        )

    return (
        <Styles.StyledHeader
            $backgroundColor={backgroundColor}
            $isOpen={isOpen}
            $position={position}
            $linkColor={linkColor}
            $navColor={navColor}
            ref={navVariant === "top" && isMobile ? el : undefined}
            $burgerPosition={burgerPosition}
            $navVariant={navVariant}
            {...props}
        >
            {burgerPosition === "left" && burgerFunction()}

            <Styles.Logo to={logo.to || "/"}>
                {logo.img ? (
                    <Styles.LogoImg
                        src={logo.img}
                        alt={logo.alt || "Logo"}
                        width={logo.width || 100}
                        height={logo.height || 30}
                        fit="contain"
                    />
                ) : (
                    logo.text
                )}
            </Styles.Logo>

            {!isMobile && searchInputFunc()}

            {burgerPosition === "right" && burgerFunction()}

            <Styles.Nav
                $isOpen={isOpen}
                $headerHeight={headerHeight}
                $backgroundColor={backgroundColor}
                $navColor={navColor}
                $linkColor={linkColor}
                $variant={navVariant}
            >
                {isMobile && searchInputFunc()}

                {children}
            </Styles.Nav>

            {isMobile && navVariant === "drawer" && (
                <Styles.Overlay
                    $isOpen={isOpen}
                    onClick={() => setIsOpen(false)}
                />
            )}
        </Styles.StyledHeader>
    )
}

export default Header
