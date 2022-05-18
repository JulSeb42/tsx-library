// Imports
import styled, { css } from "styled-components"

import Variables from "../Variables"
import * as Mixins from "../Mixins"
import Grid from "../Grid"
import * as Font from "../Font"

import { containerProps, buttonProps, contentProps } from "./types"

const AccordionContainer = styled(Grid)<containerProps>`
    width: 100%;

    .open-accordion {
        color: ${({ titleColor }) =>
            titleColor === "primary"
                ? Variables.Colors.Primary500
                : titleColor === "secondary"
                ? Variables.Colors.Secondary500
                : titleColor === "success"
                ? Variables.Colors.Success500
                : titleColor === "danger"
                ? Variables.Colors.Danger500
                : titleColor === "warning"
                ? Variables.Colors.Warning500
                : titleColor === "black"
                ? Variables.Colors.Black
                : titleColor === "white"
                ? Variables.Colors.White
                : titleColor === "gray"
                ? Variables.Colors.Gray500
                : titleColor};

        .icon {
            color: ${({ iconColor }) =>
                iconColor === "primary"
                    ? Variables.Colors.Primary500
                    : iconColor === "secondary"
                    ? Variables.Colors.Secondary500
                    : iconColor === "success"
                    ? Variables.Colors.Success500
                    : iconColor === "danger"
                    ? Variables.Colors.Danger500
                    : iconColor === "warning"
                    ? Variables.Colors.Warning500
                    : iconColor === "black"
                    ? Variables.Colors.Black
                    : iconColor === "white"
                    ? Variables.Colors.White
                    : iconColor === "gray"
                    ? Variables.Colors.Gray500
                    : iconColor};
        }
    }

    ${({ accordionStyle, borderColor, backgroundColor }) =>
        accordionStyle === "basic"
            ? css`
                  ${Mixins.Gap({ gap: "xs" })};

                  & > div:not(:last-child) {
                      border-bottom: 1px solid
                          ${borderColor === "primary"
                              ? Variables.Colors.Primary500
                              : borderColor === "secondary"
                              ? Variables.Colors.Secondary500
                              : borderColor === "success"
                              ? Variables.Colors.Success500
                              : borderColor === "danger"
                              ? Variables.Colors.Danger500
                              : borderColor === "warning"
                              ? Variables.Colors.Warning500
                              : borderColor === "black"
                              ? Variables.Colors.Black
                              : borderColor === "white"
                              ? Variables.Colors.White
                              : borderColor === "gray"
                              ? Variables.Colors.Gray500
                              : borderColor};
                  }

                  .content-accordion {
                      padding: 0;
                  }

                  .open-accordion {
                      padding: ${Variables.Spacers.XS} 0;
                  }

                  .content-accordion.open {
                      padding-bottom: ${Variables.Spacers.XS};
                  }
              `
            : css`
                  border-radius: ${Variables.Radiuses.M};
                  border: 1px solid ${Variables.Colors.Gray200};
                  overflow: hidden;

                  & > div:not(:last-of-type) {
                      border-bottom: 1px solid
                          ${borderColor === "primary"
                              ? Variables.Colors.Primary500
                              : borderColor === "secondary"
                              ? Variables.Colors.Secondary500
                              : borderColor === "success"
                              ? Variables.Colors.Success500
                              : borderColor === "danger"
                              ? Variables.Colors.Danger500
                              : borderColor === "warning"
                              ? Variables.Colors.Warning500
                              : borderColor === "white"
                              ? Variables.Colors.White
                              : borderColor === "black"
                              ? Variables.Colors.Black
                              : borderColor === "gray"
                              ? Variables.Colors.Gray500
                              : borderColor};
                  }

                  .content-accordion {
                      padding: 0 ${Variables.Spacers.S};
                  }

                  .open-accordion,
                  .content-accordion.open {
                      padding: ${Variables.Spacers.S};
                  }

                  .open-accordion {
                      background-color: ${backgroundColor === "primary"
                          ? Variables.Colors.Primary500
                          : backgroundColor === "secondary"
                          ? Variables.Colors.Secondary500
                          : backgroundColor === "success"
                          ? Variables.Colors.Success500
                          : backgroundColor === "danger"
                          ? Variables.Colors.Danger500
                          : backgroundColor === "warning"
                          ? Variables.Colors.Warning500
                          : backgroundColor === "white"
                          ? Variables.Colors.White
                          : backgroundColor === "black"
                          ? Variables.Colors.Black
                          : backgroundColor === "gray"
                          ? Variables.Colors.Gray500
                          : backgroundColor};
                  }
              `}
`

const Button = styled.button<buttonProps>`
    border: none;
    background: none;
    ${Mixins.Flexbox({
        alignItems: "center",
        justifyContent: "space-between",
    })};
    font-size: ${Variables.FontSizes.Body};
    font-weight: ${Variables.FontWeights.Bold};

    .icon {
        transition: ${Variables.Transitions.Short};

        &.open {
            transform: rotate(${({ icon }) => (icon === "plus" ? 45 : 180)}deg);
        }
    }
`

const Content = styled(Font.P)<contentProps>`
    max-height: ${({ isOpen }) => (isOpen ? 600 : 0)}px;
    overflow: hidden;
    transition: ${Variables.Transitions.Short};
    padding: ${({ isOpen }) => (isOpen ? `0 ${Variables.Spacers.S}` : 0)};
`

export { AccordionContainer, Button, Content }
