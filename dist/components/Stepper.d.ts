import React from "react";
interface props extends React.HTMLAttributes<HTMLDivElement> {
    steps: {
        text: string;
        to: string;
    }[];
    active: number;
}
declare const Stepper: React.FC<props>;
export default Stepper;
