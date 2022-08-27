/*=============================================== Input styles ===============================================*/

import styled, { css } from "styled-components"

import Variables from "../../Variables"
import Mixins from "../../Mixins"

import { ValidationTypes } from "../../utils/common-types"

import { InputTypesTypes } from "./types"

const size = 32

const InputStyled = styled.input<{
    $validation?: ValidationTypes | string
    $iconCalendar?: string
    $iconClock?: string
    $iconSelect?: string
    $type?: InputTypesTypes
    $icon?: boolean
    $showHttp?: boolean
}>`
    width: 100%;
    height: ${size}px;
    border: 1px solid ${Variables.Colors.Gray200};
    border-radius: ${Variables.Radiuses.S};
    font-size: ${Variables.FontSizes.Body};
    font-family: ${Variables.FontFamilies.Body};
    padding: ${Variables.Spacers.XS};
    background-color: ${({ $validation }) =>
        $validation && $validation === "not-passed"
            ? Variables.Colors.Danger50
            : Variables.Colors.White};
    color: ${Variables.Colors.Black};
    line-height: 100%;
    outline: none;
    z-index: 0;

    &:focus {
        border-color: ${({ $validation }) =>
            $validation && $validation === "not-passed"
                ? Variables.Colors.Danger500
                : Variables.Colors.Primary500};
    }

    &:disabled {
        cursor: not-allowed;
        background-color: ${Variables.Colors.Gray50};
        color: ${Variables.Colors.Gray500};

        &::placeholder {
            color: ${Variables.Colors.Gray500};
        }
    }

    &::placeholder {
        color: ${Variables.Colors.Gray200};
    }

    ${({ $icon }) =>
        $icon &&
        css`
            padding-left: calc(${size}px + ${Variables.Spacers.XS});
        `}

    ${({ $type }) =>
        $type === "color" || $type === "file"
            ? css`
                  cursor: pointer;
              `
            : $type === "search" &&
              css`
                  &::-webkit-search-cancel-button {
                      -webkit-appearance: none;
                      appearance: none;
                  }
              `}

    ${({ $type }) =>
        $type === "file" &&
        css`
            padding: 0;

            &::file-selector-button {
                height: 100%;
                background-color: ${Variables.Colors.Gray100};
                border: none;
                height: 100%;
                padding: 0 ${Variables.Spacers.XS};
                line-height: 100%;
                transition: ${Variables.Transitions.Short};
                cursor: pointer;
            }

            @media ${Variables.Breakpoints.Hover} {
                &:hover::file-selector-button {
                    background-color: ${Variables.Colors.Gray300};
                }

                &:disabled:hover::file-selector-button {
                    background-color: ${Variables.Colors.Gray100};
                    color: ${Variables.Colors.Gray500};
                    cursor: not-allowed;
                }
            }

            &:disabled::file-selector-button {
                color: ${Variables.Colors.Gray500};
            }
        `}

    ${({ $type, $icon, $showHttp }) =>
        $type === "url" &&
        $showHttp &&
        css`
            padding-left: ${$icon ? 53 + size : 53}px;
        `}

    ${({ $type, $iconCalendar }) =>
        ($type === "date" ||
            $type === "datetime-local" ||
            $type === "month" ||
            $type === "week") &&
        css`
            &::-webkit-inner-spin-button,
            &::-webkit-calendar-picker-indicator {
                -webkit-appearance: none;
                appearance: none;
                background: rgba(0, 0, 0, 0);
                ${$iconCalendar
                    ? Mixins.Icon({
                          $name: $iconCalendar,
                          $color: Variables.Colors.Primary500,
                          $size: 18,
                      })
                    : Mixins.LibIcon({
                          $name: "calendar",
                          $color: Variables.Colors.Primary500,
                          $size: 18,
                      })};
                cursor: pointer;
                transform: translateX(1px);
                transition: ${Variables.Transitions.Short};

                @media ${Variables.Breakpoints.Hover} {
                    &:hover {
                        background-color: ${Variables.Colors.Primary300};
                    }

                    &:active {
                        background-color: ${Variables.Colors.Primary600};
                    }
                }
            }
        `}

    ${({ $type, $iconClock }) =>
        $type === "time" &&
        css`
            &::-webkit-inner-spin-button,
            &::-webkit-calendar-picker-indicator {
                -webkit-appearance: none;
                appearance: none;
                background: rgba(0, 0, 0, 0);
                ${$iconClock
                    ? Mixins.Icon({
                          $name: $iconClock,
                          $color: Variables.Colors.Primary500,
                          $size: 18,
                      })
                    : Mixins.LibIcon({
                          $name: "clock",
                          $color: Variables.Colors.Primary500,
                          $size: 18,
                      })};
                cursor: pointer;
                transform: translateX(1px);
                transition: ${Variables.Transitions.Short};

                @media ${Variables.Breakpoints.Hover} {
                    &:hover {
                        background-color: ${Variables.Colors.Primary300};
                    }

                    &:active {
                        background-color: ${Variables.Colors.Primary600};
                    }
                }
            }
        `}

    ${({ $type }) =>
        $type === "select" &&
        css`
            padding: 0 ${Variables.Spacers.XS};
            appearance: none;
            cursor: pointer;

            &::-ms-expand {
                display: none;
            }
        `}

    ${({ $type }) =>
        $type === "textarea" &&
        css`
            height: inherit;
            min-height: calc(
                ${Variables.FontSizes.Body} * ${Variables.LineHeights.Regular} *
                    4 + ${Variables.Spacers.XXS} * 2
            );
            resize: vertical;
        `}
`

const IconContainer = styled.span`
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    width: ${size}px;
    height: ${size}px;
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
        $justifyContent: "center",
    })};

    &:after {
        content: "";
        position: absolute;
        right: 0;
        width: 1px;
        top: 1px;
        height: 30px;
        background-color: ${Variables.Colors.Gray200};
    }
`

const UrlContainer = styled.span<{ $icon?: boolean; $disabled?: boolean }>`
    position: absolute;
    left: 0;
    top: 0;
    height: ${size}px;
    z-index: 2;
    line-height: ${size}px;
    padding-left: ${Variables.Spacers.XS};

    ${({ $disabled }) =>
        $disabled &&
        css`
            color: ${Variables.Colors.Gray500};
            cursor: not-allowed;
        `}

    ${({ $icon }) =>
        $icon &&
        css`
            padding-left: calc(${size}px + ${Variables.Spacers.XS});
        `}
`

const InputContent = styled.span`
    position: relative;
    width: 100%;
`

const ButtonInput = styled.button`
    border: none;
    height: 100%;
    padding: 0;
    background-color: transparent;
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "center",
        $inline: true,
    })};
    color: ${Variables.Colors.Primary500};

    @media ${Variables.Breakpoints.Hover} {
        &:hover {
            color: ${Variables.Colors.Primary300};
        }

        &:active {
            color: ${Variables.Colors.Primary600};
        }
    }

    &:disabled {
        color: ${Variables.Colors.Gray500};
    }
`

const RightContainer = styled.span<{ $disabled?: boolean }>`
    position: absolute;
    top: 0;
    right: 0;
    height: 32px;
    padding: 0 ${Variables.Spacers.XS};
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
        $justifyContent: "center",
    })};
    gap: ${Variables.Spacers.XS};

    ${({ $disabled }) =>
        $disabled &&
        css`
            cursor: not-allowed;
        `}
`

export {
    InputStyled,
    IconContainer,
    UrlContainer,
    InputContent,
    ButtonInput,
    RightContainer,
}
