/*=============================================== Header component ===============================================*/

import React, { forwardRef, useState, useRef, useEffect } from "react"
import type { ForwardedRef, ChangeEvent, FormEvent } from "react"
import { useNavigate, createSearchParams } from "react-router-dom"

import { Input, useKeyPress, useClickOutside, useMaxWidth } from "../../"

import * as Styles from "./styles"
import type { HeaderProps } from "./types"

const Header = forwardRef(
    (
        {
            as,
            logo,
            position = "relative",
            backgroundColor = "primary",
            linkColor = "background",
            children,
            burgerColor = "background",
            navColor = "primary",
            navMobileVariant = "top",
            navDesktopVariant = "right",
            burgerPosition = "right",
            search,
            shadow,
            hideOnScroll,
            ...rest
        }: HeaderProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
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
        const valueForHeight = logo.text
            ? 24
            : logoHeight > burgerHeight || logoHeight > 32
            ? logoHeight
            : burgerHeight

        const headerHeight = valueForHeight + 16 * 2

        const isMobile = useMaxWidth(600)

        const navigate = useNavigate()

        const [searchValue, setSearchValue] = useState("")
        const handleSearchValue = (e: ChangeEvent<HTMLInputElement>) =>
            setSearchValue(e.target.value)

        const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault()

            navigate({
                pathname: search?.pathname,
                search: createSearchParams({
                    query: searchValue,
                    ...search?.search,
                }).toString(),
            })

            setSearchValue("")
        }

        const clearSearch = () => setSearchValue("")

        const inputRef = useRef<any>(null)
        const handleFocus = () => inputRef.current.focus()

        const keys = search?.keyboardShortcut ? search?.keyboardShortcut : [""]
        useKeyPress(() => handleFocus(), keys)

        const searchInputFunc = () =>
            search && (
                <Styles.SearchForm
                    onSubmit={handleSubmit}
                    role="search"
                    $maxWidth={search?.maxWidth || 300}
                >
                    <Input
                        type="search"
                        clearSearch={clearSearch}
                        iconClear={search.iconClear}
                        onChange={handleSearchValue}
                        value={searchValue}
                        placeholder={search.placeholder}
                        icon={search.icon}
                        ref={inputRef}
                        backgroundColor={search.backgroundColor}
                        accentColor={search.accentColor}
                        iconSize={search.iconSize}
                        variant={search.variant}
                    />
                </Styles.SearchForm>
            )

        const navFunc = () => (
            <Styles.Nav
                $isOpen={isOpen}
                $headerHeight={headerHeight}
                $backgroundColor={backgroundColor}
                $navColor={navColor}
                $linkColor={linkColor}
                $variant={navMobileVariant}
                $desktopVariant={navDesktopVariant}
                $shadow={shadow}
            >
                {isMobile && searchInputFunc()}

                {children && children}
            </Styles.Nav>
        )

        // Hide header on scroll
        const [isHidden, setIsHidden] = useState(false)
        const hidePosition =
            typeof hideOnScroll === "boolean" ? 400 : hideOnScroll

        useEffect(() => {
            if (hidePosition) {
                if (window.pageYOffset >= hidePosition) {
                    setIsHidden(true)
                } else {
                    setIsHidden(false)
                }

                window.addEventListener("scroll", () => {
                    if (window.pageYOffset >= hidePosition) {
                        setIsHidden(true)
                    } else {
                        setIsHidden(false)
                    }
                })
            }
        }, [hidePosition])

        return (
            <Styles.StyledHeader
                ref={navMobileVariant === "top" && isMobile ? el : ref}
                as={as}
                $backgroundColor={backgroundColor}
                $isOpen={isOpen}
                $position={position}
                $linkColor={linkColor}
                $navColor={navColor}
                $burgerPosition={burgerPosition}
                $navVariant={navMobileVariant}
                $shadow={shadow}
                $isHidden={isHidden}
                $headerHeight={headerHeight}
                {...rest}
            >
                {burgerPosition === "left" && burgerFunction()}

                <Styles.Logo href={logo.href || "/"}>
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

                {navDesktopVariant === "left" && navFunc()}

                {!isMobile &&
                    navDesktopVariant === "right" &&
                    searchInputFunc()}

                {burgerPosition === "right" && burgerFunction()}

                {navDesktopVariant === "right" && navFunc()}

                {isMobile && navMobileVariant === "drawer" && (
                    <Styles.Overlay
                        $isOpen={isOpen}
                        onClick={() => setIsOpen(false)}
                    />
                )}

                {!isMobile && navDesktopVariant === "left" && searchInputFunc()}
            </Styles.StyledHeader>
        )
    }
)

export default Header
