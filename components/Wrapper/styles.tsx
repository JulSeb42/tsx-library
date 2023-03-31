/*=============================================== Wrapper styles ===============================================*/

import styled from "styled-components"

import setDefaultTheme from "../../utils/setDefaultTheme"
import { Mixins, Layouts } from "../../"
import type { SpacersTypes } from "../../types"
import type { WrapperTemplateType } from "./types"

const StyledWrapper = styled.div<{
    $gap?: SpacersTypes
    $template?: WrapperTemplateType
}>`
    display: grid;
    grid-template-columns: ${({ $template }) =>
        $template === "3cols"
            ? Layouts.Wrapper.ThreeCols
            : $template === "2cols"
            ? Layouts.Wrapper.TwoCols
            : Layouts.Wrapper.OneCol};
    gap: ${({ $gap }) => Mixins.Spacers({ $spacer: $gap })};
    position: relative;
    z-index: 10;
    background-color: ${({ theme }) => theme.Background};
`

setDefaultTheme([StyledWrapper])

export { StyledWrapper }
