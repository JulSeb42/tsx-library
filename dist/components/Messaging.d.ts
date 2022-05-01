/// <reference path="../../src/components/react-scroll-to-bottom.d.ts" />
import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";
interface emptyProps extends React.HTMLAttributes<HTMLDivElement> {
}
interface messageProps extends React.HTMLAttributes<HTMLParagraphElement> {
    type?: string;
    time?: string;
    date?: string;
}
interface inputProps extends React.HTMLAttributes<HTMLElement> {
    textButton?: string;
    icon?: string;
}
declare const MessagesContainer: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: React.ElementType<any> | undefined;
}, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
declare const ListMessages: import("@emotion/styled").StyledComponent<import("react-scroll-to-bottom").ReactScrollToBottomProps & {
    theme?: import("@emotion/react").Theme | undefined;
}, {}, {
    ref?: React.Ref<ScrollToBottom> | undefined;
}>;
declare const EmptyContainer: React.FC<emptyProps>;
declare const Message: React.FC<messageProps>;
declare const MessageInput: React.FC<inputProps>;
export { MessagesContainer, EmptyContainer, ListMessages, Message, MessageInput, };
