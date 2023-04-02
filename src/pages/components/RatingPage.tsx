/*=============================================== RatingPage ===============================================*/

import { useState } from "react"

import { Page } from "../../components"
import { Rating } from "../../lib"

const RatingPage = () => {
    const [rating, setRating] = useState(3)

    return (
        <Page title="Rating">
            <Rating
                rating={rating}
                setRating={setRating}
                accentColor="secondary"
                id="rating-stars"
                label="Rating"
            />

            <Rating
                rating={rating}
                setRating={setRating}
                icons={{ default: "heart", checked: "heart-full" }}
                id="rating-hearts"
            />

            <p>{rating}</p>

            <Rating
                rating={rating}
                accentColor="success"
                id="rating-read"
                label="Rating"
                readOnly
            />
        </Page>
    )
}

export default RatingPage
