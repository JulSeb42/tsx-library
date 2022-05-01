import styled from "@emotion/styled";
// Components
import Variables from "./Variables";
const Wrapper = styled.div `
    display: grid;
    gap: ${props => props.gap || Variables.Spacers.L};
    padding: ${Variables.Container.Padding};
    grid-template-columns: ${props => props.template === "aside-left"
    ? Variables.Container.TemplateAsideLeft
    : props.template === "aside-right"
        ? Variables.Container.TemplateAsideRight
        : props.template === "both-sides"
            ? Variables.Container.TemplateBothSides
            : props.template === "form"
                ? Variables.Container.TemplateForm
                : Variables.Container.Template1Col};

    @media ${Variables.Breakpoints.Tablet} {
        grid-template-columns: ${Variables.Container.TemplateTablet};
    }
`;
export default Wrapper;
