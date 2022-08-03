/*=============================================== Tabs ===============================================*/

/*==================== Imports ====================*/

import React, { useState } from "react"
import styled, { css } from "styled-components"
import { v4 as uuid } from "uuid"

import Variables from "./Variables"
import { P } from "./Font"
import Mixins from "./Mixins"

import { TabsItemProps } from "./component-props"

/*==================== Component ====================*/

const Tabs = ({ items, active = 0, tabsStyle = "basic", justify = "start", ...props }: Props) => {
    const [isActive, setIsActive] = useState(active)

    return (
        <Container {...props}>
            <ButtonsContainer $tabsStyle={tabsStyle} $justify={justify} $col={items.length}>
                {items.map((item, i) => (
                    <Button
                        $isActive={isActive === i}
                        onClick={() => setIsActive(i)}
                        $tabsStyle={tabsStyle}
                        $justify={justify}
                        key={uuid()}
                    >
                        {item.title}
                    </Button>
                ))}
            </ButtonsContainer>

            {items.map((item, i) => (
                <TabItem as={typeof item.content === "string" ? P : "div"} $isActive={isActive === i} key={uuid()}>
                    {item.content}
                </TabItem>
            ))}
        </Container>
    )
}

export default Tabs

/*==================== Types ====================*/

const TableStyles = {
    basic: "basic",
    rounded: "rounded",
} as const

type TableStylesTypes = keyof typeof TableStyles

const Justify = {
    start: "start",
    stretch: "stretch",
} as const

type JustifyTypes = keyof typeof Justify

interface StyleProps extends React.HTMLAttributes<HTMLDivElement> {
    $isActive: boolean
    $tabsStyle?: TableStylesTypes
    $justify?: JustifyTypes
}

interface StyleButtonsContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    $tabsStyle?: TableStylesTypes
    $justify?: JustifyTypes
    $col: number
}

interface ContentProps extends React.HTMLAttributes<HTMLDivElement> {
    $isActive: boolean
}

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    items: TabsItemProps[]
    active?: number
    tabsStyle?: TableStylesTypes
    justify?: JustifyTypes
}

/*==================== Styles ====================*/

const Container = styled.div`
    ${Mixins.Grid({
        $gap: "xs",
    })};
`

const ButtonsContainer = styled.div<StyleButtonsContainerProps>`
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

const Button = styled.button<StyleProps>`
    border: none;
    padding: 0;
    background-color: transparent;

    ${({ $tabsStyle, $isActive, $justify }) =>
        $tabsStyle === "basic"
            ? css`
                  min-width: 100px;
                  text-align: left;
                  padding-bottom: ${Variables.Spacers.XXS};
                  border-bottom: 2px solid ${$isActive ? Variables.Colors.Primary500 : "transparent"};
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

const TabItem = styled.div<ContentProps>`
    display: ${({ $isActive }) => ($isActive ? "inherit" : "none")};
`
