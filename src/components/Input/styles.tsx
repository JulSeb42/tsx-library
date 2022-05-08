// Packages
import styled from "@emotion/styled"
import { css } from "@emotion/react"

// Components
import Variables from "../Variables"

// Types
import { inputStyledProps, iconContainerProps } from "./types"

// Styles
const Container = styled.div`
    position: relative;
    width: 100%;
`

const InputStyled = styled.input<inputStyledProps>`
    position: relative;
    z-index: 1;
    border: 1px solid ${Variables.Colors.Gray200};
    border-radius: ${Variables.Radiuses.S};
    outline: none;
    padding: ${Variables.Spacers.XS} ${Variables.Spacers.XS};
    font-family: ${Variables.FontFamilies.Body};
    font-size: ${Variables.FontSizes.Body};
    height: 35px;
    width: 100%;

    &:focus {
        border-color: ${Variables.Colors.Primary500};
    }

    &:disabled {
        cursor: not-allowed;
        color: ${Variables.Colors.Gray800};
        border-color: ${Variables.Colors.Gray200};
        background-color: ${Variables.Colors.Gray50};
    }

    ${props =>
        props.type === "textarea" &&
        css`
            min-height: calc(
                ${Variables.FontSizes.Body} * ${Variables.LineHeight} * 3 +
                    ${Variables.Spacers.XXS} * 2
            );
            resize: vertical;
        `}

    ${props =>
        props.type === "select" &&
        css`
            appearance: none;
            cursor: pointer;

            &::-ms-expand {
                display: none;
            }
        `}

    ${props =>
        props.icon &&
        css`
            padding-left: calc(${Variables.Spacers.XS} + 32px);
        `}
    
    ${props =>
        props.validation &&
        props.validation !== "passed" &&
        props.value.length > 0 &&
        css`
            background-color: ${Variables.Colors.Danger50};

            &:focus {
                border-color: ${Variables.Colors.Danger500};
            }
        `}
`

const IconContainer = styled.span<iconContainerProps>`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 32px;
    color: ${props =>
        props.disabled
            ? Variables.Colors.Gray800
            : Variables.Colors.Primary500};

    &:after {
        content: "";
        position: absolute;
        top: 1px;
        right: 0;
        height: calc(100% - 2px);
        width: 1px;
        background-color: ${Variables.Colors.Gray200};
    }
`

const RightContainer = styled.span`
    position: absolute;
    top: 0;
    right: ${Variables.Spacers.XS};
    height: 100%;
    z-index: 1;
    display: inline-flex;
    align-items: center;

    & > *:not(:last-of-type) {
        margin-right: ${Variables.Spacers.XXS};
    }
`

const ButtonPassword = styled.button`
    border: none;
    padding: 0;
    background: none;
    color: ${Variables.Colors.Primary500};
    font-size: ${Variables.FontSizes.Body};
    font-weight: ${Variables.FontWeights.Bold};
    transition: ${Variables.Transitions.Short};
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        color: ${Variables.Colors.Primary300};
    }

    &:active {
        color: ${Variables.Colors.Primary600};
    }
`

const SelectContainer = styled.div<{ disabled: boolean | undefined }>`
    position: relative;

    &:after {
        content: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.862 6.19533L8.00001 9.05733L5.13801 6.19533L4.19534 7.13799L8.00001 10.9427L11.8047 7.13799L10.862 6.19533Z' fill='%231B4568'/%3E%3C/svg%3E");
        color: ${Variables.Colors.Primary500};
        position: absolute;
        z-index: 2;
        top: calc(50% - 18px / 2);
        right: ${Variables.Spacers.XS};

        ${props =>
            props.disabled &&
            css`
                content: url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.862 6.19533L8.00001 9.05733L5.13801 6.19533L4.19534 7.13799L8.00001 10.9427L11.8047 7.13799L10.862 6.19533Z' fill='%232F2F2F'/%3E%3C/svg%3E");
            `}
    }
`

export {
    Container,
    InputStyled,
    IconContainer,
    RightContainer,
    ButtonPassword,
    SelectContainer,
}
