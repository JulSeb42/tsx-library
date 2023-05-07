/*=============================================== Tabs component ===============================================*/

import React, { forwardRef, useState } from "react"
import type { ForwardedRef } from "react"
import { useSearchParams } from "react-router-dom"
import classNames from "classnames"

import { Text, uuid } from "../../"

import {
    StyledTabs,
    StyledTabsButtonsContainer,
    StyledTabButton,
    StyledTabItem,
} from "./styles"
import type {
    TabsProps,
    TabsContainerProps,
    TabButtonProps,
    TabItemProps,
    TabsButtonsContainerProps,
} from "./types"

export const TabsContainer = forwardRef(
    (
        { as, children, ...rest }: TabsContainerProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        return (
            <StyledTabs ref={ref} as={as} {...rest}>
                {children}
            </StyledTabs>
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
            style,
            ...rest
        }: TabsButtonsContainerProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        return (
            <StyledTabsButtonsContainer
                as={as}
                ref={ref}
                data-justify={justify}
                data-variant={variant}
                style={{
                    ["--col-number" as any]: children?.length,
                    ...style,
                }}
                {...rest}
            >
                {children}
            </StyledTabsButtonsContainer>
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
            children,
            className,
            ...rest
        }: TabButtonProps,
        ref?: ForwardedRef<HTMLButtonElement>
    ) => {
        return (
            <StyledTabButton
                as={as}
                ref={ref}
                onClick={onClick}
                className={classNames({ active: isActive }, className)}
                data-variant={variant}
                data-justify={justify}
                type="button"
                {...rest}
            >
                {children}
            </StyledTabButton>
        )
    }
)

export const TabItem = forwardRef(
    (
        { as, children, isActive, ...rest }: TabItemProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        return (
            <StyledTabItem
                as={as ? as : typeof children === "string" ? Text : "div"}
                ref={ref}
                hidden={!isActive}
                {...rest}
            >
                {isActive && children}
            </StyledTabItem>
        )
    }
)

export const Tabs = forwardRef(
    (
        {
            as,
            items,
            justify = "start",
            active = 0,
            variant = "basic",
            showInUrl,
            queries,
            ...rest
        }: TabsProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        const [searchParams, setSearchParams] = useSearchParams()
        const tab = searchParams.get("tab") || active.toString()

        const [isActive, setIsActive] = useState<number>(
            showInUrl ? parseInt(tab) : active
        )

        const handleButton = (activeTab: number) => {
            setIsActive(activeTab)

            if (showInUrl) {
                setSearchParams(
                    queries
                        ? {
                              tab: activeTab?.toString(),
                              ...Object.fromEntries(queries),
                          }
                        : { tab: activeTab?.toString() }
                )
            }
        }

        return (
            <TabsContainer as={as} ref={ref} {...rest}>
                <TabsButtonsContainer
                    variant={variant}
                    justify={justify}
                    className="tabs-buttons-container"
                >
                    {items?.map((item, i) => (
                        <TabButton
                            isActive={isActive.toString() === i.toString()}
                            onClick={() => handleButton(i)}
                            variant={variant}
                            justify={justify}
                            className="tab-button"
                            key={uuid()}
                        >
                            {item.title}
                        </TabButton>
                    ))}
                </TabsButtonsContainer>

                {items.map((item, i) => (
                    <TabItem
                        as={typeof item.content === "string" ? Text : "div"}
                        isActive={isActive.toString() === i.toString()}
                        className="tab-item"
                        key={uuid()}
                    >
                        {item.content}
                    </TabItem>
                ))}
            </TabsContainer>
        )
    }
)
