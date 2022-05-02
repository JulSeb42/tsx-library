// Packages
import styled from "@emotion/styled"

// Components
import * as Font from "../Font"
import Variables from "../Variables"

// Styles
const Label = styled.label`
    color: ${Variables.Colors.Primary500};
    font-weight: ${Variables.FontWeights.Bold};
`

const Helper = styled(Font.P)<{ bottom?: boolean }>`
    position: relative;
    z-index: 0;
    font-size: ${props =>
        props.bottom ? Variables.FontSizes.Small : Variables.FontSizes.Body};
`

export { Label, Helper }
