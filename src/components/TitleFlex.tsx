// Packages
import styled from "@emotion/styled"

// Components
import Variables from "./Variables"
import Flexbox from "./Flexbox"

// Styles
const TitleFlex = styled(Flexbox)`
    align-items: flex-start;
    justify-content: space-between;
    gap: ${Variables.Spacers.XS};
`

export default TitleFlex
