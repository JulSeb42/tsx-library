/*=============================================== Wrapper styles ===============================================*/

import styled from "styled-components"

import { Layouts, Spacers } from "../../Variables"
import setDefaultTheme from "../../utils/setDefaultTheme"

import { TemplateTypes } from "./types"

const StyledWrapper = styled.div<{ $template?: TemplateTypes }>`
    display: grid;
    grid-template-columns: ${({ $template }) =>
        $template === "2cols"
            ? Layouts.Wrapper.TwoCols
            : $template === "3cols"
            ? Layouts.Wrapper.ThreeCols
            : Layouts.Wrapper.OneCol};
    gap: ${Spacers.L};
    position: relative;
    z-index: 10;
    background-color: ${({ theme }) => theme.Background};
`

setDefaultTheme([StyledWrapper])

export { StyledWrapper }
