import React from "react";
interface props {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handlePrev: (event: React.MouseEvent<HTMLElement>) => void;
    handleNext: (event: React.MouseEvent<HTMLElement>) => void;
    active: number;
    totalPages: number;
    justify?: string;
    customIconPrev?: string;
    customIconNext?: string;
}
declare const Paginator: React.FC<props>;
export default Paginator;
