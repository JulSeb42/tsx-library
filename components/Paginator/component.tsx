/*=============================================== Paginator ===============================================*/

import React, { forwardRef } from "react"

import ChevronLeftIcon from "../../icons/ChevronLeftIcon"
import ChevronRightIcon from "../../icons/ChevronRightIcon"
import ButtonIcon from "../ButtonIcon"

import * as Styles from "./styles"
import { PaginatorProps } from "./types"

const Paginator = forwardRef(
    (
        {
            justify = "left",
            idInput = "paginator",
            text,
            handles,
            pages,
            icons,
            accentColor = "primary",
            buttons = {
                variant: "transparent",
                hoverBackground: true,
            },
            backgroundColor,
            ...props
        }: PaginatorProps,
        ref?: React.ForwardedRef<HTMLInputElement>
    ) => {
        const activePage =
            pages.active > pages.total
                ? pages.total
                : pages.active < 1
                ? 1
                : pages.active

        const basePropsButton = {
            size: 24,
            color: accentColor,
            ...buttons,
        }

        const propsButtonPrev = {
            ...basePropsButton,
            onClick: handles.prev,
            disabled: activePage === 1 && true,
        }

        const propsButtonNext = {
            ...basePropsButton,
            onClick: handles.next,
            disabled: activePage === pages.total && true,
        }

        return (
            <Styles.StyledPaginator $justify={justify}>
                {text?.page || "Page"}{" "}
                <Styles.StyledInput
                    type="number"
                    id={idInput}
                    value={activePage}
                    onChange={handles.change}
                    ref={ref}
                    $accentColor={accentColor}
                    $background={backgroundColor}
                    {...props}
                />{" "}
                {`${text?.of || "of"} ${pages.total}`}
                {icons?.prev ? (
                    <ButtonIcon icon={icons.prev} {...propsButtonPrev} />
                ) : (
                    <ButtonIcon
                        libicon={<ChevronLeftIcon />}
                        {...propsButtonPrev}
                    />
                )}
                {icons?.next ? (
                    <ButtonIcon icon={icons.next} {...propsButtonNext} />
                ) : (
                    <ButtonIcon
                        libicon={<ChevronRightIcon />}
                        {...propsButtonNext}
                    />
                )}
            </Styles.StyledPaginator>
        )
    }
)

export default Paginator
