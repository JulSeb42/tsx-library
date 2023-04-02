/*=============================================== VideoPage ===============================================*/

import { Page } from "../../components"
import { Video } from "../../lib"

const VideoPage = () => {
    return (
        <Page title="Video">
            <Video src="https://assets.mixkit.co/videos/preview/mixkit-animation-of-futuristic-devices-99786-large.mp4" />

            <Video
                src="https://assets.mixkit.co/videos/preview/mixkit-animation-of-futuristic-devices-99786-large.mp4"
                height="40vw"
                autoPlay
                fit="cover"
            />
        </Page>
    )
}

export default VideoPage
