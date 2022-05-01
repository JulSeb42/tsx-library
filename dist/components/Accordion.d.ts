import React from "react";
import { props as gridProps } from "./Grid";
interface containerProps extends gridProps {
    accordionStyle?: string;
}
interface itemProps extends React.HTMLAttributes<HTMLParagraphElement> {
    isOpen?: boolean;
    icon?: string;
}
declare const Accordion: React.FC<containerProps>;
declare const AccordionItem: React.FC<itemProps>;
export { Accordion, AccordionItem };
