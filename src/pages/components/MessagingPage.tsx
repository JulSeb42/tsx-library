/*=============================================== MessagingPage ===============================================*/

import { useState } from "react"

import { Page } from "../../components"
import { Messaging, convertDateShort, getTimeNow } from "../../lib"
import type { MessageProps } from "../../lib/types"

const MessagingPage = () => {
    const messagesList: MessageProps[] = [
        {
            type: "received",
            text: "Message received https://julien-sebag.com/",
            date: convertDateShort(new Date("2022-05-23")),
            time: "11:15",
        },
        {
            type: "sent",
            text: "Message sent https://julien-sebag.com/",
            date: convertDateShort(new Date("2022-05-23")),
            time: "11:17",
        },
        {
            type: "received",
            text: "Message received https://julien-sebag.com/",
            date: convertDateShort(new Date("2022-05-23")),
            time: "11:15",
        },
        {
            type: "sent",
            text: "Message sent https://julien-sebag.com/",
            date: convertDateShort(new Date("2022-05-23")),
            time: "11:17",
        },
        {
            type: "received",
            text: "Message received https://julien-sebag.com/",
            date: convertDateShort(new Date("2022-05-23")),
            time: "11:15",
        },
        {
            type: "sent",
            text: "Message sent https://julien-sebag.com/",
            date: convertDateShort(new Date("2022-05-23")),
            time: "11:17",
        },
        {
            type: "received",
            text: "Message received https://julien-sebag.com/",
            date: convertDateShort(new Date("2022-05-23")),
            time: "11:15",
        },
        {
            type: "sent",
            text: "Message sent https://julien-sebag.com/",
            date: convertDateShort(new Date("2022-05-23")),
            time: "11:17",
        },
        {
            type: "received",
            text: "Message received https://julien-sebag.com/",
            date: convertDateShort(new Date("2022-05-23")),
            time: "11:15",
        },
        {
            type: "sent",
            text: "Message sent https://julien-sebag.com/",
            date: convertDateShort(new Date("2022-05-23")),
            time: "11:17",
        },
        {
            type: "received",
            text: "Message received https://julien-sebag.com/",
            date: convertDateShort(new Date("2022-05-23")),
            time: "11:15",
        },
        {
            type: "sent",
            text: "Message sent https://julien-sebag.com/",
            date: convertDateShort(new Date("2022-05-23")),
            time: "11:17",
        },
    ]

    const [newEmptyMessage, setNewEmptyMessage] = useState("")
    const [emptyArr, setEmptyArr] = useState<MessageProps[]>([])

    const submitEmpty = () => {
        setEmptyArr([
            ...emptyArr,
            {
                type: "sent",
                text: newEmptyMessage,
                date: convertDateShort(new Date()),
                time: getTimeNow(),
            },
        ])

        setNewEmptyMessage("")
    }

    const [newMessage, setNewMessage] = useState("")
    const [messages, setMessages] = useState<MessageProps[]>(messagesList)

    const submitForm = () => {
        setMessages([
            ...messages,
            {
                type: "sent",
                text: newMessage,
                date: convertDateShort(new Date()),
                time: `${new Date().getHours()}:${new Date().getMinutes()}`,
            },
        ])
        setNewMessage("")
    }

    return (
        <Page title="Messaging">
            <Messaging
                input={{
                    message: newEmptyMessage,
                    setMessage: setNewEmptyMessage,
                }}
                submit={submitEmpty}
                data={emptyArr}
            />

            <Messaging
                input={{ message: newMessage, setMessage: setNewMessage }}
                submit={submitForm}
                button={{ text: "Send" }}
                data={messages}
            />
        </Page>
    )
}

export default MessagingPage
