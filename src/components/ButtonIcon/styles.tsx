// Imports
import styled, { css } from "styled-components"

import Variables from "../Variables"
import * as Mixins from "../Mixins"

import { styleProps } from "./types"

const Container = styled.button<styleProps>`
    justify-self: start;
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    ${Mixins.Flexbox({
        inline: true,
        alignItems: "center",
        justifyContent: "center",
    })};
    padding: 0;
    border-radius: 50%;
    border: none;
    transition: ${Variables.Transitions.Short};

    ${({ btnStyle, color, hoverBackground }) =>
        btnStyle === "plain"
            ? css`
                  background-color: ${Mixins.Color};
                  color: ${color === "white"
                      ? Variables.Colors.Primary500
                      : Variables.Colors.White};

                  &:hover {
                      background-color: ${Mixins.ColorHover};
                  }

                  &:active {
                      background-color: ${Mixins.ColorActive};
                  }

                  &:disabled {
                      background-color: ${Variables.Colors.Gray100};
                      color: ${Variables.Colors.Gray500};
                  }
              `
            : btnStyle === "transparent" &&
              css`
                  background-color: transparent;
                  color: ${Mixins.Color};

                  &:hover {
                      color: ${Mixins.ColorHover};
                      background-color: ${hoverBackground &&
                      Variables.Colors.Gray50};
                  }

                  &:active {
                      color: ${Mixins.ColorActive};
                  }

                  &:disabled {
                      color: ${Variables.Colors.Gray500};
                      background-color: ${hoverBackground && "transparent"};
                  }
              `}
`

export { Container }
