/*=============================================== Wrapper styles ===============================================*/

import styled from "styled-components"

import Variables from "../../Variables"

import { TemplateTypes } from "./types"

const StyledWrapper = styled.div<{ $template?: TemplateTypes }>`
    display: grid;
    grid-template-columns: ${({ $template }) =>
        $template === "2cols"
            ? Variables.Layouts.Wrapper.TwoCols
            : $template === "3cols"
            ? Variables.Layouts.Wrapper.ThreeCols
            : Variables.Layouts.Wrapper.OneCol};
    gap: ${Variables.Spacers.L};
    position: relative;
    z-index: 10;
    background-color: ${Variables.Colors.Background};
`

export { StyledWrapper }
