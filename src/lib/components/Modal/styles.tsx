/*=============================================== Modal styles ===============================================*/

import styled from "styled-components"

import { Overlays, Mixins, ButtonIcon, Spacers } from "../../"

import { setDefaultTheme } from "../../utils"

const StyledModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    width: 100vw;
    height: 100vh;
    display: none;
    align-items: center;
    justify-content: center;
    background-color: ${Overlays.Plain.Black80};

    &.modal-open {
        display: flex;
    }
`

const Content = styled.div`
    width: 90%;
    height: 90%;
    position: relative;
    z-index: 1;
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "center",
    })};
`

const CloseButton = styled(ButtonIcon)`
    position: absolute;
    top: ${Spacers.XXL};
    right: ${Spacers.XXL};
    z-index: 20;
`

setDefaultTheme([StyledModal, Content, CloseButton])

export { StyledModal, Content, CloseButton }
