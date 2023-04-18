/*=============================================== Tabs component ===============================================*/

import React, { forwardRef, useState } from "react"
import type { ForwardedRef } from "react"
import {
    createSearchParams,
    useNavigate,
    useSearchParams,
} from "react-router-dom"
import classNames from "classnames"

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
        { as, children, ...rest }: TabsContainerProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        return (
            <Styles.StyledTabs ref={ref} as={as} {...rest}>
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
            className,
            style,
            ...rest
        }: TabsButtonsContainerProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        return (
            <Styles.ButtonsContainer
                as={as}
                ref={ref}
                className={classNames(variant, className)}
                data-justify={justify}
                style={{
                    ["--col-number" as any]: children?.length,
                    ...style,
                }}
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
            children,
            className,
            ...rest
        }: TabButtonProps,
        ref?: ForwardedRef<HTMLButtonElement>
    ) => {
        return (
            <Styles.Button
                as={as}
                ref={ref}
                onClick={onClick}
                className={classNames(variant, { active: isActive }, className)}
                data-justify={justify}
                {...rest}
            >
                {children}
            </Styles.Button>
        )
    }
)

export const TabItem = forwardRef(
    (
        { as, children, isActive, className, ...rest }: TabItemProps,
        ref?: ForwardedRef<HTMLDivElement>
    ) => {
        return (
            <Styles.TabItem
                as={as ? as : typeof children === "string" ? Text : "div"}
                ref={ref}
                className={classNames({ active: isActive }, className)}
                {...rest}
            >
                {isActive && children}
            </Styles.TabItem>
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
