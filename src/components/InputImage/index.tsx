// Packages
import React from "react"
import styled from "@emotion/styled"

// Components
import Variables from "../Variables"
import InputContainer from "./InputContainer"
import Image from "./Image"
import Icon from "./Icon"

// Types
interface styleProps extends React.HTMLAttributes<HTMLLabelElement> {
    width?: string
    height?: string
}

interface props extends React.HTMLAttributes<HTMLInputElement> {
    label?: string
    helper?: string
    validation?: string
    src: string
    alt: string
    iconEmpty?: string
    iconHover?: string
    width?: string
    height?: string
    id: string
}

// Styles
const Container = styled.label<styleProps>`
    position: relative;
    width: ${props => props.width};
    height: ${props => props.height};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: ${Variables.Radiuses.M};
    overflow: hidden;
    cursor: pointer;

    &:hover .hover {
        opacity: 1;
    }
`

const Input = styled.input`
    display: none;
`

const Img = styled(Image)`
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
    object-fit: cover;
`

const EmptyContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
    background-color: ${Variables.Colors.Gray200};
    display: inline-flex;
    align-items: center;
    justify-content: center;
`

const HoverContainer = styled.span`
    position: absolute;
    z-index: 2;
    background-color: ${Variables.Overlays.Plain.White50};
    color: ${Variables.Colors.Primary500};
    opacity: 0;
    width: 100%;
    height: 100%;
    transition: ${Variables.Transitions.Short};
    display: inline-flex;
    align-items: center;
    justify-content: center;
`

const Empty: React.FC<{ icon?: string }> = props => {
    return (
        <EmptyContainer>
            {props.icon ? (
                <Icon name={props.icon} size={64} />
            ) : (
                <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M32 5.33333C29.3629 5.33333 26.7851 6.11531 24.5924 7.5804C22.3997 9.04549 20.6908 11.1279 19.6816 13.5642C18.6724 16.0006 18.4084 18.6815 18.9229 21.2679C19.4373 23.8543 20.7072 26.2301 22.5719 28.0948C24.4366 29.9595 26.8124 31.2293 29.3988 31.7438C31.9852 32.2583 34.6661 31.9942 37.1024 30.9851C39.5388 29.9759 41.6212 28.2669 43.0863 26.0743C44.5513 23.8816 45.3333 21.3037 45.3333 18.6667C45.3333 15.1304 43.9286 11.7391 41.4281 9.23857C38.9276 6.73809 35.5362 5.33333 32 5.33333V5.33333ZM32 26.6667C30.4178 26.6667 28.871 26.1975 27.5554 25.3184C26.2398 24.4394 25.2145 23.1899 24.609 21.7281C24.0035 20.2663 23.845 18.6578 24.1537 17.1059C24.4624 15.5541 25.2243 14.1286 26.3431 13.0098C27.462 11.891 28.8874 11.1291 30.4393 10.8204C31.9911 10.5117 33.5997 10.6701 35.0615 11.2756C36.5233 11.8811 37.7727 12.9065 38.6518 14.2221C39.5308 15.5377 40 17.0844 40 18.6667C40 20.7884 39.1571 22.8232 37.6569 24.3235C36.1566 25.8238 34.1217 26.6667 32 26.6667V26.6667ZM56 56V53.3333C56 48.3826 54.0333 43.6347 50.5327 40.134C47.032 36.6333 42.284 34.6667 37.3333 34.6667H26.6667C21.716 34.6667 16.968 36.6333 13.4673 40.134C9.96666 43.6347 8 48.3826 8 53.3333V56H13.3333V53.3333C13.3333 49.7971 14.7381 46.4057 17.2386 43.9052C19.7391 41.4048 23.1304 40 26.6667 40H37.3333C40.8696 40 44.2609 41.4048 46.7614 43.9052C49.2619 46.4057 50.6667 49.7971 50.6667 53.3333V56H56Z"
                        fill="currentColor"
                    />
                </svg>
            )}
        </EmptyContainer>
    )
}

const Hover: React.FC<{ icon?: string }> = props => {
    return (
        <HoverContainer className="hover">
            {props.icon ? (
                <Icon name={props.icon} size={32} />
            ) : (
                <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.2173 22.664L9.33333 22.684V16.7773L22.1787 4.05465C23.1787 3.05599 24.9373 3.05065 25.9453 4.05865L28.06 6.17332C28.564 6.67732 28.8413 7.34665 28.8413 8.05865C28.8413 8.77065 28.564 9.43999 28.06 9.94399L15.2173 22.664ZM26.1787 8.05465L24.06 5.94399L21.9347 8.05065L24.0493 10.164L26.1787 8.05465ZM20.04 9.92532L12 17.8893V20.008L14.116 20.0013L22.1547 12.04L20.04 9.92532Z"
                        fill="currentColor"
                    />
                    <path
                        d="M25.3333 28H6.66667C5.196 28 4 26.804 4 25.3333V6.66665C4 5.19599 5.196 3.99999 6.66667 3.99999H18.4627L15.796 6.66665H6.66667V25.3333H10.6387C10.6602 25.334 10.6814 25.337 10.7025 25.34C10.7258 25.3433 10.7489 25.3467 10.772 25.3467C10.7893 25.3467 10.807 25.3433 10.8247 25.34C10.8423 25.3367 10.86 25.3333 10.8773 25.3333H25.3333V16.4427L28 13.776V25.3333C28 26.804 26.804 28 25.3333 28Z"
                        fill="currentColor"
                    />
                </svg>
            )}
        </HoverContainer>
    )
}

const InputImage: React.FC<props> = props => {
    return props.label || props.helper || props.validation ? (
        <InputContainer
            label={props.label}
            helper={props.helper}
            validation={props.validation}
            id={props.id}
        >
            <Container width={props.width || "80px"} height={props.height || "80px"}>
                <Input type="file" {...props} />

                {props.src === "" ? (
                    <Empty icon={props.iconEmpty} />
                ) : (
                    <Img src={props.src} alt={props.alt} fit="cover" />
                )}

                <Hover icon={props.iconHover} />
            </Container>
        </InputContainer>
    ) : (
        <Container>
            <Input type="file" {...props} />

            {props.src === "" ? (
                <Empty icon={props.iconEmpty} />
            ) : (
                <Img src={props.src} alt={props.alt} />
            )}

            <Hover icon={props.iconHover} />
        </Container>
    )
}

export default InputImage
