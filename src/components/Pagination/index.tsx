// Packages
import React from "react"

// Components
import Icon from "../Icon"

// Types
import { props } from "./types"

// Styles
import { Pagination, Button } from "./styles"

const PaginationButton: React.FC<props> = ({
    prev,
    customIconPrev,
    customIconMore,
    number,
    next,
    customIconNext,
    disabled,
    more,
    ...props
}) => {
    return (
        <Button
            disabled={disabled}
            more={more}
            {...props}
        >
            {prev &&
                (customIconPrev ? (
                    <Icon src={customIconPrev} size={16} />
                ) : (
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8.862 4.19533L5.05733 7.99999L8.862 11.8047L9.80466 10.862L6.94266 7.99999L9.80466 5.13799L8.862 4.19533Z"
                            fill="currentColor"
                        />
                    </svg>
                ))}

            {more &&
                (customIconMore ? (
                    <Icon src={customIconMore} size={16} />
                ) : (
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8.00002 6.66669C7.26669 6.66669 6.66669 7.26669 6.66669 8.00002C6.66669 8.73335 7.26669 9.33335 8.00002 9.33335C8.73335 9.33335 9.33335 8.73335 9.33335 8.00002C9.33335 7.26669 8.73335 6.66669 8.00002 6.66669ZM12 6.66669C11.2667 6.66669 10.6667 7.26669 10.6667 8.00002C10.6667 8.73335 11.2667 9.33335 12 9.33335C12.7334 9.33335 13.3334 8.73335 13.3334 8.00002C13.3334 7.26669 12.7334 6.66669 12 6.66669ZM4.00002 6.66669C3.26669 6.66669 2.66669 7.26669 2.66669 8.00002C2.66669 8.73335 3.26669 9.33335 4.00002 9.33335C4.73335 9.33335 5.33335 8.73335 5.33335 8.00002C5.33335 7.26669 4.73335 6.66669 4.00002 6.66669Z"
                            fill="currentColor"
                        />
                    </svg>
                ))}

            {number && number}

            {next &&
                (customIconNext ? (
                    <Icon src={customIconNext} size={16} />
                ) : (
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7.138 11.8047L10.9427 7.99999L7.138 4.19533L6.19534 5.13799L9.05734 7.99999L6.19534 10.862L7.138 11.8047Z"
                            fill="currentColor"
                        />
                    </svg>
                ))}
        </Button>
    )
}

export { Pagination, PaginationButton }
