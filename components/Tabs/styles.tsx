/*=============================================== Tabs styles ===============================================*/

import styled, { css } from "styled-components"

import Variables from "../../Variables"
import Mixins from "../../Mixins"

import { TableStylesTypes, JustifyTypes } from "./types"

const StyledTabs = styled.div`
    ${Mixins.Grid({
        $gap: "xs",
    })};
`

const ButtonsContainer = styled.div<{
    $tabsStyle?: TableStylesTypes
    $justify?: JustifyTypes
    $col: number
}>`
    position: relative;

    ${({ $tabsStyle }) =>
        $tabsStyle === "basic"
            ? css`
                  &:after {
                      content: "";
                      position: absolute;
                      bottom: 0;
                      left: 0;
                      width: 100%;
                      height: 1px;
                      background-color: ${Variables.Colors.Gray200};
                      z-index: 0;
                  }
              `
            : css`
                  background-color: ${Variables.Colors.Gray50};
                  border-radius: ${Variables.Radiuses.M};
                  padding: ${Variables.Spacers.XS};
              `}

    ${({ $justify, $col, $tabsStyle }) =>
        $justify === "start"
            ? css`
                  ${Mixins.Flexbox({
                      $alignItems: "center",
                      $gap: "xs",
                      $flexWrap: "wrap",
                      $inline: true,
                  })};
                  width: ${$tabsStyle === "rounded" ? "fit-content" : "100%"};

                  @media ${Variables.Breakpoints.Mobile} {
                      flex-direction: column;
                  }
              `
            : css`
                  ${Mixins.Grid({
                      $col: $col,
                      $gap: "xs",
                  })};

                  @media ${Variables.Breakpoints.Mobile} {
                      grid-template-columns: repeat(1, 1fr);
                  }
              `}
`

const Button = styled.button<{
    $isActive: boolean
    $tabsStyle?: TableStylesTypes
    $justify?: JustifyTypes
}>`
    border: none;
    padding: 0;
    background-color: transparent;

    ${({ $tabsStyle, $isActive, $justify }) =>
        $tabsStyle === "basic"
            ? css`
                  min-width: 100px;
                  text-align: left;
                  padding-bottom: ${Variables.Spacers.XXS};
                  border-bottom: 2px solid
                      ${$isActive ? Variables.Colors.Primary500 : "transparent"};
                  z-index: 2;

                  @media ${Variables.Breakpoints.Mobile} {
                      width: 100%;
                  }
              `
            : css`
                  background-color: ${$isActive && Variables.Colors.Primary500};
                  border-radius: ${Variables.Radiuses.S};
                  padding: ${Variables.Spacers.XXS};
                  color: ${$isActive && Variables.Colors.White};
                  transition: ${Variables.Transitions.Short};
                  min-width: ${$justify === "start" && "100px"};

                  @media ${Variables.Breakpoints.Hover} {
                      &:hover {
                          background-color: ${Variables.Colors.Primary300};
                          color: ${Variables.Colors.White};
                      }

                      &:active {
                          background-color: ${Variables.Colors.Primary600};
                      }
                  }
              `}
`

const TabItem = styled.div<{ $isActive: boolean }>`
    display: ${({ $isActive }) => ($isActive ? "inherit" : "none")};
`

export { StyledTabs, ButtonsContainer, Button, TabItem }
