/*=============================================== AvatarPage ===============================================*/

import { Page } from "../../components"
import { Avatar, Flexbox } from "../../lib"

const AvatarPage = () => {
    return (
        <Page title="Avatar">
            <Avatar
                size={64}
                img="/images/pic-avatar.jpg"
                borderRadius={{
                    topRight: "l",
                    topLeft: "s",
                    bottomRight: "m",
                    bottomLeft: "xxl",
                }}
            />

            <Flexbox gap="s">
                <Avatar letter="A" color="primary" />
                <Avatar letter="A" color="secondary" />
                <Avatar letter="A" color="success" />
                <Avatar letter="A" color="danger" />
                <Avatar letter="A" color="warning" />
                <Avatar letter="A" color="gray" />
                <Avatar letter="A" color="black" />
                <Avatar letter="A" color="white" />
            </Flexbox>

            <Flexbox gap="s">
                <Avatar icon="user" color="primary" size={32} />
                <Avatar icon="user" color="secondary" size={32} />
                <Avatar icon="user" color="success" size={32} />
                <Avatar icon="user" color="danger" size={32} />
                <Avatar icon="user" color="warning" size={32} />
                <Avatar icon="user" color="gray" size={32} />
                <Avatar icon="user" color="black" size={32} />
                <Avatar icon="user" color="white" size={32} />
            </Flexbox>
        </Page>
    )
}

export default AvatarPage
