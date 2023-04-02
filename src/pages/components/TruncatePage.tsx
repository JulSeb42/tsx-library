/*=============================================== TruncatePage ===============================================*/

import { Page } from "../../components"
import { Truncate, Tag, uuid } from "../../lib"

const TruncatePage = () => {
    const names = [
        "Julien",
        "Sile",
        "Max",
        "Maud",
        "Mel",
        "Michael",
        "Yan",
        "Amy",
        "Juliette",
        "Jeff",
    ]

    return (
        <Page title="Truncate">
            <p>{names?.length} names</p>

            <Truncate
                style={{
                    width: 400,
                    backgroundColor: "var(--color-light-gray-100)",
                    padding: "var(--spacer-xs)",
                    borderRadius: "var(--radius-s)",
                }}
            >
                {names.map(name => (
                    <Tag
                        borderRadius="round"
                        padding={{ topBottom: "xxs", leftRight: "s" }}
                        key={uuid()}
                    >
                        {name}
                    </Tag>
                ))}
            </Truncate>
        </Page>
    )
}

export default TruncatePage
