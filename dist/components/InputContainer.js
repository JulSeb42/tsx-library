// Packages
import React from "react";
import styled from "@emotion/styled";
// Components
import * as Font from "./Font";
import Variables from "./Variables";
import Grid from "./Grid";
// Styles
const Label = styled.label `
    color: ${Variables.Colors.Primary500};
    font-weight: ${Variables.FontWeights.Bold};
`;
const Helper = styled(Font.P) `
    position: relative;
    z-index: 0;
    font-size: ${props => props.bottom ? Variables.FontSizes.Small : Variables.FontSizes.Body};
`;
const InputContainer = props => {
    return (React.createElement(Grid, { gap: Variables.Spacers.XXS },
        props.label && React.createElement(Label, { htmlFor: props.id }, props.label),
        props.helper && React.createElement(Helper, null, props.helper),
        props.children,
        props.helperBottom && React.createElement(Helper, { bottom: true }, props.helperBottom),
        props.validationText &&
            props.validation &&
            props.value.length > 0 && (React.createElement(Font.Small, null, props.validationText)),
        (props.counter || props.maxLength) && (React.createElement(Font.Small, null,
            props.value.length,
            props.maxLength && ` / ${props.maxLength}`))));
};
export default InputContainer;
