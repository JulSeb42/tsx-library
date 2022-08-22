/*=============================================== InputContainer ===============================================*/

/*==================== Imports ====================*/

import React from "react"
import styled from "styled-components"

import Variables from "../Variables"
import Mixins from "./Mixins"
import Text from "./Text"
import Icon from "./Icon"

import {
    ColorsShortTypes,
    LibColorsTypes,
} from "../common-types"

/*==================== Component ====================*/

const InputContainer = ({
    label,
    helper,
    helperBottom,
    counter,
    maxLength,
    value,
    children,
    id,
}: Props) => (
    <StyledInputContainer>
        {label && <Label htmlFor={id}>{label}</Label>}

        {helper && <Text>{helper}</Text>}

        {children}

        {helperBottom && (
            <HelperBottom tag="small">
                {typeof helperBottom === "object" && helperBottom.icon && (
                    <IconContainer>
                        <Icon
                            src={helperBottom.icon}
                            size={14}
                            color={helperBottom.iconColor}
                        />
                    </IconContainer>
                )}

                {typeof helperBottom === "object"
                    ? helperBottom.text
                    : helperBottom}
            </HelperBottom>
        )}

        {counter && typeof value === "string" && (
            <Text tag="small" color="gray-500">
                {value.length}
                {maxLength ? ` / ${maxLength}` : ""}
            </Text>
        )}
    </StyledInputContainer>
)

export default InputContainer

/*==================== Types ====================*/

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    label?: string
    helper?: string
    helperBottom?:
        | string
        | {
              text: string
              icon?: string
              iconColor?: LibColorsTypes | ColorsShortTypes | string
          }
    counter?: boolean
    maxLength?: number
    value?: any
    id: string
}

/*==================== Styles ====================*/

const StyledInputContainer = styled.div`
    ${Mixins.Grid({
        $gap: "xxs",
    })};
`

const Label = styled.label<{
    $color?: LibColorsTypes | ColorsShortTypes | string
}>`
    color: ${({ $color }) =>
        Mixins.AllColors({ $color: $color || Variables.Colors.Primary500 })};
    font-weight: ${Variables.FontWeights.Black};
`

const HelperBottom = styled(Text)`
    ${Mixins.Flexbox({
        $gap: "xxs",
    })};
`

const IconContainer = styled.span`
    height: 21px;
    ${Mixins.Flexbox({
        $inline: true,
        $alignItems: "center",
        $justifyContent: "center",
    })}
`
