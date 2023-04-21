/*=============================================== Select styles ===============================================*/

import styled from "styled-components"

import { Mixins, FontWeights } from "../../"
import { InputBaseMixin } from "../InputComponents"
import { CONSTANT_VALUES } from "../InputComponents/styles"

import { setDefaultTheme } from "../../utils"

const StyledSelect = styled.div`
    position: relative;
    width: 100%;
    height: ${CONSTANT_VALUES.InputHeight}px;
    cursor: pointer;
    z-index: 0;

    &.open {
        z-index: 30;
    }

    &.empty {
        cursor: default;
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

    &.empty {
        cursor: default;
    }

    &:disabled {
        cursor: not-allowed;
    }
`

setDefaultTheme([StyledSelect, Selected])

export { StyledSelect, Selected }
