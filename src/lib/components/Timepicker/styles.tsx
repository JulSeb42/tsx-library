/*=============================================== Timepicker styles ===============================================*/

import styled from "styled-components"

import { FontWeights, Mixins } from "../../"
import { InputBaseMixin } from "../InputComponents"

import { setDefaultTheme } from "../../utils"

const StyledTimepicker = styled.div`
    position: relative;
    cursor: pointer;
    z-index: 1;
    width: 100%;

    &.open {
        z-index: 20;
    }

    &.disabled {
        cursor: not-allowed;
    }
`

const Selected = styled.button`
    font-weight: ${FontWeights.Regular};
    ${InputBaseMixin};
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "space-between",
    })};
`

setDefaultTheme([StyledTimepicker, Selected])

export { StyledTimepicker, Selected }
