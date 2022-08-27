/*=============================================== Paginator ===============================================*/

import React from "react"

import Icon from "../Icon"
import ChevronLeftIcon from "../../icons/ChevronLeftIcon"
import ChevronRightIcon from "../../icons/ChevronRightIcon"

import * as Styles from "./styles"
import { PaginatorProps } from "./types"

const Paginator = ({
    justify = "left",
    idInput = "paginator",
    text,
    handles,
    pages,
    icons,
    ...props
}: PaginatorProps) => {
    const activePage =
        pages.active > pages.total
            ? pages.total
            : pages.active < 1
            ? 1
            : pages.active

    return (
        <Styles.StyledPaginator $justify={justify}>
            {text?.page || "Page"}{" "}
            <Styles.StyledInput
                type="number"
                id={idInput}
                value={activePage}
                onChange={handles.change}
                {...props}
            />{" "}
            {`${text?.of || "of"} ${pages.total}`}
            <Styles.Button
                onClick={handles.prev}
                disabled={activePage === 1 && true}
            >
                {icons?.prev ? (
                    <Icon src={icons.prev} size={16} />
                ) : (
                    <ChevronLeftIcon size={20} />
                )}
            </Styles.Button>
            <Styles.Button
                onClick={handles.next}
                disabled={activePage === pages.total && true}
            >
                {icons?.next ? (
                    <Icon src={icons.next} size={16} />
                ) : (
                    <ChevronRightIcon size={20} />
                )}
            </Styles.Button>
        </Styles.StyledPaginator>
    )
}

export default Paginator
