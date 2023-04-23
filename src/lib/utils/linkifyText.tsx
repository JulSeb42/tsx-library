/*=============================================== Linkify text ===============================================*/

import React, { Fragment } from "react"
import { uuid } from "ts-utils-julseb"

export const URL_REGEX =
    // eslint-disable-next-line
    /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm

export const linkifyText = (text: string, blank?: boolean) => {
    const words: string[] = text?.split(" ")

    return words?.map((word: string) =>
        word.match(URL_REGEX) ? (
            <Fragment key={uuid()}>
                <a
                    href={word}
                    target={blank ? "_blank" : undefined}
                    rel={blank ? "noreferrer noopener" : undefined}
                    className="linkify"
                >
                    {word}
                </a>{" "}
            </Fragment>
        ) : (
            word + " "
        )
    )
}
