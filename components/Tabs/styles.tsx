/*=============================================== Tabs styles ===============================================*/

import styled, { css } from "styled-components"

import { Mixins, Radiuses, Spacers, Breakpoints, Transitions } from "../../"
import type {
    ColorsHoverTypes,
    AllColorsTypes,
    SpacersTypes,
} from "../../types"
import type { TabsJustifyTypes, TabsVariantsType } from "./types"

import setDefaultTheme from "../../utils/setDefaultTheme"

const StyledTabs = styled.div<{ $gap?: SpacersTypes }>`
    ${({ $gap }) =>
        Mixins.Flexbox({
            $gap,
            $flexDirection: "column",
        })};
`

const ButtonsContainer = styled.div<{
    $variant?: TabsVariantsType
    $justify?: TabsJustifyTypes
    $col: number
    $separatorColor?: AllColorsTypes
    $backgroundColor?: AllColorsTypes
    $gap?: SpacersTypes
}>`
    position: relative;

    ${({ $variant, $separatorColor, $backgroundColor, theme }) =>
        $variant === "basic"
            ? css`
                  &:after {
                      content: "";
                      position: absolute;
                      bottom: 0;
                      left: 0;
                      width: 100%;
                      height: 1px;
                      background-color: ${theme.AllColors({
                          $color: $separatorColor,
                      })};
                      z-index: 0;
                  }
              `
            : css`
                  background-color: ${theme.AllColors({
                      $color: $backgroundColor,
                  })};
                  border-radius: ${Radiuses.M};
                  padding: ${Spacers.XS};
              `}

    ${({ $justify, $col, $variant, $gap }) =>
        $justify === "start"
            ? css`
                  ${Mixins.Flexbox({
                      $alignItems: "center",
                      $gap,
                      $flexWrap: "wrap",
                      $inline: true,
                  })};
                  width: ${$variant === "rounded" ? "fit-content" : "100%"};

                  @media ${Breakpoints.Mobile} {
                      flex-direction: column;
                  }
              `
            : css`
                  ${Mixins.Grid({
                      $col: $col,
                      $gap,
                  })};

                  @media ${Breakpoints.Mobile} {
                      grid-template-columns: repeat(1, 1fr);
                  }
              `}
`

const Button = styled.button<{
    $isActive: boolean
    $variant?: TabsVariantsType
    $justify?: TabsJustifyTypes
    $accentColor?: ColorsHoverTypes
    $buttonColor?: AllColorsTypes
}>`
    border: none;
    padding: 0;
    background-color: transparent;

    ${({ $variant, $isActive, $justify, $accentColor, $buttonColor, theme }) =>
        $variant === "basic"
            ? css`
                  min-width: 100px;
                  text-align: left;
                  padding-bottom: ${Spacers.XXS};
                  border-bottom: 2px solid
                      ${$isActive
                          ? theme.AllColors({ $color: $accentColor })
                          : "transparent"};
                  z-index: 2;
                  color: ${theme.AllColors({ $color: $buttonColor })};

                  @media ${Breakpoints.Mobile} {
                      width: 100%;
                  }
              `
            : css`
                  background-color: ${$isActive &&
                  theme.ColorsHoverDefault({ $color: $accentColor })};
                  border-radius: ${Radiuses.S};
                  padding: ${Spacers.XXS};
                  color: ${$isActive
                      ? $accentColor === "white"
                          ? theme.Primary500
                          : theme.Background
                      : theme.AllColors({ $color: $buttonColor })};
                  transition: ${Transitions.Short};
                  min-width: ${$justify === "start" && "100px"};

                  @media ${Breakpoints.Hover} {
                      &:hover {
                          background-color: ${theme.ColorsHoverHover({
                              $color: $accentColor,
                          })};
                          color: ${$accentColor === "white"
                              ? theme.Primary500
                              : theme.Background};
                      }

                      &:active {
                          background-color: ${theme.ColorsHoverActive({
                              $color: $accentColor,
                          })};
                      }
                  }
              `}
`

const TabItem = styled.div<{ $isActive: boolean }>`
    display: ${({ $isActive }) => ($isActive ? "inherit" : "none")};
`

setDefaultTheme([StyledTabs, ButtonsContainer, Button, TabItem])

export { StyledTabs, ButtonsContainer, Button, TabItem }
