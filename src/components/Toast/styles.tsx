// Packages
import styled from "@emotion/styled"

// Components
import Variables from "../Variables"
import Grid from "../Grid"

// Styles
const Container = styled(Grid)`
    background-color: ${Variables.Colors.White};
    padding: ${Variables.Spacers.M};
    box-shadow: ${Variables.Shadows.S};
    border-radius: ${Variables.Radiuses.M};
    max-width: 300px;
`

const Close = styled.button`
    --size: 32px;
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    border: none;
    background-color: transparent;
    color: ${Variables.Colors.Primary500};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: ${Variables.Transitions.Short};

    &:hover {
        background-color: ${Variables.Colors.Gray50};
    }
`

const TitleContainer = styled.span`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Title = styled.span`
    display: flex;
    align-items: center;

    & > span {
        margin-right: ${Variables.Spacers.XXS};
    }
`

export { Container, Close, TitleContainer, Title }
