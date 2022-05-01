import React from "react";
interface props extends React.HTMLAttributes<HTMLInputElement> {
    helper?: string;
    helperBottom?: string;
    label?: string;
    icon?: string;
    disabled?: boolean;
    onMouseDown: (event: React.MouseEvent<HTMLElement>) => void;
    items: string[];
    value?: string;
}
declare const Autocomplete: React.FC<props>;
export default Autocomplete;
