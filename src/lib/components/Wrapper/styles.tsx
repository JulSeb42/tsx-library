/*=============================================== Wrapper styles ===============================================*/

import styled from "styled-components"

import { Mixins, Layouts } from "../../"

import { setDefaultTheme } from "../../utils"

const StyledWrapper = styled.div`
    ${Mixins.Grid({
        $gap: "l",
    })};
    position: relative;
    z-index: 10;
    background-color: ${({ theme }) => theme.Background};

    &[data-template="1col"] {
        grid-template-columns: ${Layouts.Wrapper.OneCol};
    }

    &[data-template="2cols"] {
        grid-template-columns: ${Layouts.Wrapper.TwoCols};
    }

    &[data-template="3cols"] {
        grid-template-columns: ${Layouts.Wrapper.ThreeCols};
    }
`

setDefaultTheme([StyledWrapper])

export { StyledWrapper }
