/*=============================================== Tabs component ===============================================*/

import React, { forwardRef, useState } from "react"
import type { ForwardedRef } from "react"
import {
    createSearchParams,
    useNavigate,
    useSearchParams,
} from "react-router-dom"

import { Text, uuid } from "../../"

import * as Styles from "./styles"
import type {
    TabsProps,
    TabsContainerProps,
    TabButtonProps,
    TabItemProps,
    TabsButtonsContainerProps,
} from "./types"

export const TabsContainer = forwardRef(
    (
        { as, gap = "xs", children, ...rest }: TabsContainerProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        return (
            <Styles.StyledTabs ref={ref} as={as} $gap={gap} {...rest}>
                {children}
            </Styles.StyledTabs>
        )
    }
)

export const TabsButtonsContainer = forwardRef(
    (
        {
            as,
            variant = "basic",
            justify = "start",
            children = [],
            separatorColor = "gray-200",
            backgroundColor = "gray-100",
            gap = "xs",
            ...rest
        }: TabsButtonsContainerProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        return (
            <Styles.ButtonsContainer
                as={as}
                ref={ref}
                $variant={variant}
                $justify={justify}
                $col={children?.length}
                $separatorColor={separatorColor}
                $backgroundColor={backgroundColor}
                $gap={gap}
                {...rest}
            >
                {children}
            </Styles.ButtonsContainer>
        )
    }
)

export const TabButton = forwardRef(
    (
        {
            as,
            isActive,
            onClick,
            variant = "basic",
            justify = "start",
            accentColor = "primary",
            buttonColor = "font",
            children,
            ...rest
        }: TabButtonProps,
        ref?: ForwardedRef<HTMLButtonElement>
    ) => {
        return (
            <Styles.Button
                as={as}
                ref={ref}
                $isActive={isActive}
                onClick={onClick}
                $variant={variant}
                $justify={justify}
                $accentColor={accentColor}
                $buttonColor={buttonColor}
                {...rest}
            >
                {children}
            </Styles.Button>
        )
    }
)

export const TabItem = forwardRef(
    (
        { as, children, isActive, ...rest }: TabItemProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        return (
            <Styles.TabItem
                as={as ? as : typeof children === "string" ? Text : "div"}
                ref={ref}
                $isActive={isActive}
                {...rest}
            >
                {children}
            </Styles.TabItem>
        )
    }
)

export const Tabs = forwardRef(
    (
        {
            as,
            items,
            contentColor,
            justify = "start",
            active = 0,
            accentColor = "primary",
            buttonColor = "font",
            variant = "basic",
            separatorColor = "gray-200",
            backgroundColor = "gray-50",
            gap = "xs",
            showInUrl,
            queries,
            ...rest
        }: TabsProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        const [q] = useSearchParams()
        const tab = q.get("tab") || active

        const [isActive, setIsActive] = useState<number>(
            typeof tab === "string" ? parseInt(tab) : tab
        )

        const navigate = useNavigate()

        const handleButton = (activeTab: number) => {
            setIsActive(activeTab)

            if (showInUrl) {
                queries
                    ? navigate({
                          pathname: "",
                          search: createSearchParams({
                              tab: activeTab.toString(),
                              ...Object.fromEntries(queries),
                          }).toString(),
                      })
                    : navigate({
                          pathname: "",
                          search: createSearchParams({
                              tab: activeTab.toString(),
                          }).toString(),
                      })
            }
        }

        const buttonsContent = () =>
            items?.map((item, i) =>
                variant === "rounded" ? (
                    <TabButton
                        isActive={isActive.toString() === i.toString()}
                        onClick={() => handleButton(i)}
                        variant={variant}
                        justify={justify}
                        accentColor={accentColor}
                        key={uuid()}
                    >
                        {item.title}
                    </TabButton>
                ) : (
                    <TabButton
                        isActive={isActive.toString() === i.toString()}
                        onClick={() => handleButton(i)}
                        variant={variant}
                        justify={justify}
                        accentColor={accentColor}
                        buttonColor={buttonColor}
                        key={uuid()}
                    >
                        {item.title}
                    </TabButton>
                )
            )

        return (
            <TabsContainer as={as} gap={gap} ref={ref} {...rest}>
                {variant === "rounded" ? (
                    <TabsButtonsContainer
                        variant="rounded"
                        backgroundColor={backgroundColor}
                        justify={justify}
                    >
                        {buttonsContent()}
                    </TabsButtonsContainer>
                ) : (
                    <TabsButtonsContainer
                        variant="basic"
                        separatorColor={separatorColor}
                        justify={justify}
                    >
                        {buttonsContent()}
                    </TabsButtonsContainer>
                )}

                {items.map((item, i) => (
                    <TabItem
                        as={typeof item.content === "string" ? Text : "div"}
                        color={
                            typeof item.content === "string"
                                ? contentColor
                                : "font"
                        }
                        isActive={isActive.toString() === i.toString()}
                        key={uuid()}
                    >
                        {item.content}
                    </TabItem>
                ))}
            </TabsContainer>
        )
    }
)
