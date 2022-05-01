import React from "react";
interface styleProps extends React.HTMLAttributes<HTMLButtonElement> {
    active?: boolean;
    more?: boolean;
}
interface props extends styleProps {
    prev?: boolean;
    customIconPrev?: string;
    customIconMore?: string;
    number?: number;
    next?: boolean;
    customIconNext?: string;
    disabled?: boolean;
}
declare const Pagination: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: React.ElementType<any> | undefined;
}, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
declare const PaginationButton: React.FC<props>;
export { Pagination, PaginationButton };
