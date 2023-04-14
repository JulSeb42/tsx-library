/*=============================================== StyledFixes ===============================================*/

import React from "react"
import styled from "styled-components"

import { Page } from "../components"
import { Flexbox } from "../lib"

const Button = styled.button<{
    $color: "red" | "blue"
    $size?: "default" | "small" | "large"
}>`
    border: none;
    border-radius: 8px;
    background-color: ${({ $color }) => $color};
    font-size: ${({ $size }) =>
        $size === "large" ? 18 : $size === "small" ? 14 : 16}px;
    padding: ${({ $size }) =>
        $size === "large"
            ? `6px 12px`
            : $size === "small"
            ? `2px 4px`
            : `4px 8px`};
    color: white;
`

const ButtonWithVariables = styled.button`
    border: none;
    border-radius: 8px;
    background-color: var(--button-color);
    font-size: var(--button-font-size);
    padding: var(--button-padding);
    color: white;
`

const BaseButton = styled.button`
    border: none;
    border-radius: 8px;
    color: white;
`

const ButtonColor = styled(BaseButton)<{ $color?: "red" | "blue" }>`
    background-color: ${({ $color }) => $color};
`

const ExtendedButton = styled(ButtonColor)<{
    $size?: "default" | "small" | "large"
}>`
    font-size: ${({ $size }) =>
        $size === "large" ? 18 : $size === "small" ? 14 : 16}px;
    padding: ${({ $size }) =>
        $size === "large"
            ? `6px 12px`
            : $size === "small"
            ? `2px 4px`
            : `4px 8px`};
`

const StyledFixes = () => {
    return (
        <Page title="Styled">
            <Flexbox gap="xs" alignItems="flex-start">
                <Button $color="red" $size="small">
                    Red
                </Button>

                <Button $color="blue" $size="large">
                    Blue
                </Button>
            </Flexbox>

            <Flexbox gap="xs" alignItems="flex-start">
                <ButtonWithVariables
                    style={{
                        ["--button-color" as any]: "red",
                        ["--button-font-size" as any]: "14px",
                        ["--button-padding" as any]: "2px 4px",
                    }}
                >
                    Red
                </ButtonWithVariables>

                <ButtonWithVariables
                    style={{
                        ["--button-color" as any]: "blue",
                        ["--button-font-size" as any]: "18px",
                        ["--button-padding" as any]: "6px 12px",
                    }}
                >
                    Blue
                </ButtonWithVariables>
            </Flexbox>

            <Flexbox gap="xs" alignItems="flex-start">
                <ExtendedButton $color="red" $size="small">
                    Red
                </ExtendedButton>

                <ExtendedButton $color="blue" $size="large">
                    Blue
                </ExtendedButton>
            </Flexbox>
        </Page>
    )
}

export default StyledFixes
