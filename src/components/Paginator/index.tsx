// Packages
import React from "react"

// Components
import * as Font from "../Font"
import Variables from "../Variables"
import Flexbox from "../Flexbox"
import Icon from "../Icon"

// Types
import { props } from "./types"

// Styles
import { Input, Button } from "./styles"

const Paginator: React.FC<props> = ({
    handleChange,
    handlePrev,
    handleNext,
    active,
    totalPages,
    justify,
    customIconPrev,
    customIconNext,
}) => {
    const activePage =
        active > totalPages ? totalPages : active < 0 ? 0 : active
    
    return (
        <Flexbox
            as={Font.P}
            align="center"
            justify={justify}
            gap={Variables.Spacers.XS}
        >
            Page
            <Input
                type="number"
                onChange={handleChange}
                value={activePage}
                min={1}
                max={totalPages}
            />
            of {totalPages}
            <Button onClick={handlePrev} disabled={activePage === 1 && true}>
                {customIconPrev ? (
                    <Icon src={customIconPrev} size={24} />
                ) : (
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M14.1465 6.293L8.4395 12L14.1465 17.707L15.5605 16.293L11.2675 12L15.5605 7.707L14.1465 6.293Z"
                            fill="currentColor"
                        />
                    </svg>
                )}
            </Button>
            <Button
                onClick={handleNext}
                disabled={activePage === totalPages && true}
            >
                {customIconNext ? (
                    <Icon src={customIconNext} size={24} />
                ) : (
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M9.8535 17.707L15.5605 12L9.8535 6.293L8.4395 7.707L12.7325 12L8.4395 16.293L9.8535 17.707Z"
                            fill="currentColor"
                        />
                    </svg>
                )}
            </Button>
        </Flexbox>
    )
}

export default Paginator
