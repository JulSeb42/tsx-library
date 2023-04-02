/*=============================================== DemoCoverBottomOverlay ===============================================*/

import { CoverLayout } from "../../components"
import { Cover, Text } from "../../lib"

const DemoCoverBottomOverlay = () => {
    return (
        <CoverLayout title="Cover Bottom Overlay">
            <Cover
                src="https://images.unsplash.com/photo-1619360142632-031d811d1678?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
                alt="Cover"
                alignItems="flex-start"
                justifyContent="flex-end"
                overlay="gradient-black"
            >
                <Text tag="h1" display>
                    Title
                </Text>
                <Text tag="h2" display>
                    Subtitle
                </Text>
            </Cover>
        </CoverLayout>
    )
}

export default DemoCoverBottomOverlay
