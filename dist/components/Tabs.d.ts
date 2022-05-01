import React from "react";
interface buttonsContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    col: number;
}
interface buttonProps extends React.HTMLAttributes<HTMLButtonElement> {
    active?: boolean;
}
interface contentProps extends React.HTMLAttributes<HTMLDivElement> {
    active?: boolean;
}
declare const TabsContainer: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: React.ElementType<any> | undefined;
} & import("./Grid").props & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & {
    theme?: import("@emotion/react").Theme | undefined;
}, {}, {}>;
declare const TabsButtonsContainer: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: React.ElementType<any> | undefined;
} & buttonsContainerProps, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
declare const TabsButton: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: React.ElementType<any> | undefined;
} & buttonProps, React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {}>;
declare const TabsContent: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: React.ElementType<any> | undefined;
} & contentProps, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export { TabsContainer, TabsButtonsContainer, TabsButton, TabsContent };
