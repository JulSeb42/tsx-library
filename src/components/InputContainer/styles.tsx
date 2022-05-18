// Imports
import styled from "styled-components"

import Variables from "../Variables"
import * as Font from "../Font"

const Label = styled.label`
    color: ${Variables.Colors.Primary500};
    font-weight: ${Variables.FontWeights.Bold};
`

const Helper = styled(Font.P)<{ bottom?: boolean }>`
    position: relative;
    z-index: 0;
    font-size: ${({ bottom }) =>
        bottom ? Variables.FontSizes.Small : Variables.FontSizes.Body};
`

export { Label, Helper }
