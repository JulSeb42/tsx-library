import React from "react";
interface styleProps extends React.HTMLAttributes<HTMLDivElement> {
}
interface styleLiProps extends React.HTMLAttributes<HTMLLIElement> {
    selected: string | boolean;
}
interface props extends styleProps {
    label?: string;
    helper?: string;
    validation?: string;
    helperBottom?: string;
    validationText?: string;
    value?: string | number | boolean;
    arrow?: any;
    disabled?: boolean;
    onClickSelect?: any;
    isOpen: boolean;
    selected: string | boolean;
    index?: number;
    id: string;
}
declare const SelectItem: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: React.ElementType<any> | undefined;
} & styleLiProps, React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, {}>;
declare const Select: React.FC<props>;
export { Select, SelectItem };
