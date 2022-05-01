// Packages
import React from "react";
import styled from "@emotion/styled";
// Components
import * as Font from "./Font";
import Variables from "./Variables";
import Grid from "./Grid";
import Icon from "./Icon";
// Styles
const Container = styled(Grid) `
    background-color: ${Variables.Colors.White};
    padding: ${Variables.Spacers.M};
    box-shadow: ${Variables.Shadows.S};
    border-radius: ${Variables.Radiuses.M};
    max-width: 300px;
`;
const Close = styled.button `
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
`;
const TitleContainer = styled.span `
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
const Title = styled.span `
    display: flex;
    align-items: center;

    & > span {
        margin-right: ${Variables.Spacers.XXS};
    }
`;
const TitleFunction = props => {
    return props.icon ? (React.createElement(Title, null,
        React.createElement(Icon, { name: props.icon, size: 16, color: props.iconColor }),
        React.createElement(Font.H5, null, props.title))) : (React.createElement(Font.H5, null, props.title));
};
const Toast = props => {
    return (React.createElement(Container, Object.assign({ gap: Variables.Spacers.XS }, props),
        props.close ? (React.createElement(TitleContainer, null,
            React.createElement(TitleFunction, { title: props.title, icon: props.icon, iconColor: props.iconColor }),
            React.createElement(Close, { onClick: props.close }, props.customIconClose ? (React.createElement(Icon, { name: props.customIconClose, size: 24 })) : (React.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                React.createElement("path", { d: "M16.192 6.34399L11.949 10.586L7.707 6.34399L6.293 7.75799L10.535 12L6.293 16.242L7.707 17.656L11.949 13.414L16.192 17.656L17.606 16.242L13.364 12L17.606 7.75799L16.192 6.34399Z", fill: "currentColor" })))))) : (React.createElement(TitleFunction, { title: props.title, icon: props.icon, iconColor: props.iconColor })),
        props.children && React.createElement(Font.P, null, props.children)));
};
export default Toast;
