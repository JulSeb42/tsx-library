/*=============================================== Header component ===============================================*/

import React, { forwardRef, useState, useRef, useEffect } from "react"
import type { ForwardedRef, ChangeEvent, FormEvent } from "react"
import { useNavigate, createSearchParams, Link } from "react-router-dom"
import classNames from "classnames"

import { Input, useClickOutside, useMaxWidth, stringifyPx } from "../../"

import {
    LogoImg,
    HeaderBurger,
    Logo,
    StyledHeader,
    Nav,
    Overlay,
    SearchForm,
} from "./styles"
import type { HeaderProps } from "./types"

const Header = forwardRef(
    (
        {
            as,
            logo,
            position = "relative",
            children,
            navMobileVariant = "top",
            navDesktopVariant = "right",
            burgerPosition = "right",
            search,
            hideOnScroll,
            className,
            style,
            variant = "primary",
            ...rest
        }: HeaderProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        const [isOpen, setIsOpen] = useState(false)

        const el = useRef<HTMLButtonElement>(null)
        const onClickOutside = () => setIsOpen(false)
        useClickOutside(el, onClickOutside)

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

        const burgerFunction = () => (
            <HeaderBurger
                isOpen={isOpen}
                onClick={() => setIsOpen(!isOpen)}
                width={30}
                height={20}
                color={
                    (navMobileVariant === "drawer" && isOpen) ||
                    variant === "primary" ||
                    ((navMobileVariant === "full" ||
                        navMobileVariant === "top") &&
                        isOpen &&
                        variant === "transparent")
                        ? "white"
                        : "primary"
                }
                className="burger"
            />
        )

        const searchInputFunc = () =>
            search && (
                <SearchForm
                    onSubmit={handleSubmit}
                    style={{
                        ["--search-max-width" as any]:
                            search?.maxWidth && stringifyPx(search?.maxWidth),
                    }}
                    role="search"
                    className="header-search"
                >
                    <Input
                        type="search"
                        clearSearch={clearSearch}
                        iconClear={search.iconClear}
                        onChange={handleSearchValue}
                        value={searchValue}
                        placeholder={search.placeholder}
                        icon={search.icon}
                        backgroundColor={search.backgroundColor}
                        iconSize={search.iconSize}
                        variant={search.variant}
                        focusKeys={search?.keyboardShortcut}
                        showKeys={search?.showKeys}
                        className="header-search-input"
                    />
                </SearchForm>
            )

        const navFunc = () => (
            <Nav
                data-desktop-variant={navDesktopVariant}
                data-nav-mobile-variant={navMobileVariant}
                data-variant={variant}
                className={classNames({ open: isOpen }, "header-nav")}
                style={{
                    ["--header-height" as any]: stringifyPx(headerHeight),
                }}
                ref={el}
            >
                {isMobile && searchInputFunc()}

                {children && children}
            </Nav>
        )

        return (
            <StyledHeader
                ref={ref}
                as={as}
                data-burger-position={burgerPosition}
                data-position={position}
                data-variant={variant}
                className={classNames(
                    { "is-hidden": isHidden },
                    { open: isOpen },
                    className
                )}
                style={{
                    ["--header-height" as any]: stringifyPx(headerHeight * -1),
                    ...style,
                }}
                {...rest}
            >
                {burgerPosition === "left" && burgerFunction()}

                <Logo
                    as={logo.to ? Link : "a"}
                    to={logo.to || "/"}
                    className="logo"
                >
                    {logo.img ? (
                        <LogoImg
                            src={logo.img}
                            alt={logo.alt || "Logo"}
                            width={logo.width || 100}
                            height={logo.height || 30}
                            fit="contain"
                            className="logo-img"
                        />
                    ) : (
                        logo.text
                    )}
                </Logo>

                {navDesktopVariant === "left" && navFunc()}

                {!isMobile &&
                    navDesktopVariant === "right" &&
                    searchInputFunc()}

                {burgerPosition === "right" && burgerFunction()}

                {navDesktopVariant === "right" && navFunc()}

                {isMobile && navMobileVariant === "drawer" && (
                    <Overlay
                        onClick={() => setIsOpen(false)}
                        className={classNames({ open: isOpen }, "overlay")}
                    />
                )}

                {!isMobile && navDesktopVariant === "left" && searchInputFunc()}
            </StyledHeader>
        )
    }
)

export default Header
