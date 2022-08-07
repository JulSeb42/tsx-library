/*=============================================== InputImage ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled, { css } from "styled-components"
import { stringifyPx } from "js-utils-julseb"

import Variables from "./Variables"
import Mixins from "./Mixins"
import InputContainer from "./InputContainer"
import Image from "./Image"
import Icon from "./Icon"
import ImageIcon from "../icons/ImageIcon"
import EditIcon from "../icons/EditIcon"

import { ValidationTypes } from "./common-types"

/*==================== Component ====================*/

const InputImage = ({ id, disabled, validation, width = 64, height = 64, img, options, icons, ...props }: Props) => {
    const EmptyContainer: React.FC = () => (
        <StyledEmptyContainer $validation={validation}>
            {icons?.empty ? (
                <Icon
                    src={icons.empty}
                    color={validation === "not-passed" ? "danger" : disabled ? "gray" : "primary"}
                    size={48}
                />
            ) : (
                <ImageIcon
                    size={48}
                    color={
                        validation === "not-passed"
                            ? Variables.Colors.Danger500
                            : disabled
                            ? Variables.Colors.Gray500
                            : Variables.Colors.Primary500
                    }
                />
            )}
        </StyledEmptyContainer>
    )

    const HoverContainer: React.FC = () => (
        <StyledHoverContainer>
            {icons?.hover ? (
                <Icon src={icons.hover} size={32} color={validation === "not-passed" ? "danger" : "primary"} />
            ) : (
                <EditIcon
                    size={32}
                    color={validation === "not-passed" ? Variables.Colors.Danger500 : Variables.Colors.Primary500}
                />
            )}
        </StyledHoverContainer>
    )

    return options ? (
        <InputContainer id={id} label={options.label} helper={options.helper} helperBottom={options.helperBottom}>
            <Container>
                <Label htmlFor={id} $disabled={disabled} $width={width} $height={height}>
                    {img.src === "" ? (
                        <EmptyContainer />
                    ) : (
                        <Img
                            src={img.src}
                            alt={img.alt || "Image"}
                            width="100%"
                            height="100%"
                            options={{ fit: "cover" }}
                        />
                    )}

                    <HoverContainer />
                </Label>

                <Input type="file" id={id} disabled={disabled} {...props} />
            </Container>
        </InputContainer>
    ) : (
        <Container>
            <Label htmlFor={id} $disabled={disabled} $width={width} $height={height}>
                {img.src === "" ? (
                    <EmptyContainer />
                ) : (
                    <Img src={img.src} alt={img.alt || "Image"} width="100%" height="100%" options={{ fit: "cover" }} />
                )}

                <HoverContainer />
            </Label>

            <Input type="file" id={id} disabled={disabled} {...props} />
        </Container>
    )
}

export default InputImage

/*==================== Types ====================*/

interface StyleProps extends React.HTMLAttributes<HTMLInputElement> {
    $validation?: ValidationTypes
    $disabled?: boolean
    $width?: number | string
    $height?: number | string
}

interface Props extends React.HTMLAttributes<HTMLInputElement> {
    id: string
    disabled?: boolean
    validation?: ValidationTypes
    width?: number | string
    height?: number | string

    img: {
        src: string
        alt?: string
    }

    options?: {
        label?: string
        helper?: string
        helperBottom?: string
    }

    icons?: {
        empty?: string
        hover?: string
    }
}

/*==================== Styles ====================*/

const Container = styled.div`
    position: relative;
`

const StyledEmptyContainer = styled.span<StyleProps>`
    width: 100%;
    height: 100%;
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
        $justifyContent: "center",
    })};
    position: relative;
    z-index: 0;
    background-color: ${({ $validation }) =>
        $validation === "not-passed" ? Variables.Colors.Danger50 : Variables.Colors.Gray100};
`

const StyledHoverContainer = styled.span`
    width: 100%;
    height: 100%;
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
        $justifyContent: "center",
    })};
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: ${Variables.Overlays.Plain.White50};
    opacity: 0;
    transition: ${Variables.Transitions.Short};
`

const Label = styled.label<StyleProps>`
    width: ${({ $width }) => stringifyPx($width)};
    height: ${({ $height }) => stringifyPx($height)};
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "center",
    })};
    position: relative;
    border-radius: ${Variables.Radiuses.M};
    overflow: hidden;
    cursor: pointer;

    @media ${Variables.Breakpoints.Hover} {
        &:hover ${StyledHoverContainer} {
            opacity: 1;
        }
    }

    ${({ $disabled }) =>
        $disabled &&
        css`
            cursor: not-allowed;

            @media ${Variables.Breakpoints.Hover} {
                &:hover ${StyledHoverContainer} {
                    opacity: 0;
                }
            }
        `}
`

const Img = styled(Image)`
    position: relative;
    z-index: 0;
`

const Input = styled.input`
    display: none;
`
