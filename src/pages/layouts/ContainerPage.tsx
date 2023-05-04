/*=============================================== ContainerPage ===============================================*/

import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

import { Page } from "../../components"
import { Wrapper, Main, Aside, Text, CodeContainer, Section } from "../../lib"

const StyledMain = styled(Main)`
    background-color: ${({ theme }) => theme.Danger100};
`

const StyledAside = styled(Aside)`
    background-color: ${({ theme }) => theme.Danger100};
`

const Content = () => (
    <>
        <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            id tortor at nisl faucibus egestas. Vestibulum quis lacus eros.
            Aliquam erat volutpat. Etiam egestas orci vel dolor euismod, in
            vulputate nisl mollis. Duis pulvinar mattis sollicitudin. In mi
            augue, tempor sit amet efficitur eget, semper quis sapien. Ut
            accumsan, nulla id bibendum placerat, mauris diam iaculis nisl, vel
            convallis enim augue eu nisl.
        </Text>

        <Text>
            Donec vulputate tincidunt lectus. Phasellus quis pretium dui. Ut
            mollis euismod orci non sollicitudin. Cras id aliquam nibh. Aenean
            tincidunt feugiat dolor, vel gravida lectus porta eu. Vestibulum non
            semper nulla. Vivamus ut libero vitae ipsum vestibulum hendrerit.
            Nam ac ipsum vitae lacus interdum pretium nec malesuada massa.
        </Text>

        <Text>
            In a laoreet libero. Duis ultrices id eros in euismod. Curabitur
            suscipit tortor at vehicula efficitur. Nunc nec magna ut leo rhoncus
            bibendum vel ac neque. Sed in pulvinar lectus, sit amet sodales
            tortor. Nam turpis purus, dapibus non libero ut, elementum sodales
            lorem. Integer nibh lectus, hendrerit id est at, aliquam placerat
            libero. Ut ut porta nunc, sed laoreet mi. Praesent urna mi, lobortis
            in mollis eget, vestibulum et ante.
        </Text>

        <Text>
            Nulla ullamcorper congue nibh ut varius. Vestibulum elementum metus
            nec felis fermentum luctus. Mauris convallis dictum efficitur.
            Praesent viverra metus sit amet ante interdum rutrum. Proin egestas,
            libero nec ullamcorper condimentum, turpis eros pulvinar est, non
            hendrerit orci mi at magna. Proin posuere dignissim arcu, ut
            facilisis nisl auctor vitae. Proin lacus purus, consequat eu eros
            in, mollis posuere risus. Nulla tellus mi, porta ac dui vitae,
            vestibulum ullamcorper justo. Nam eu ante eu dui interdum rutrum at
            eu tellus. In egestas risus lorem. Maecenas blandit at nulla quis
            maximus. Vivamus consectetur volutpat lorem in feugiat. Quisque
            viverra, magna nec congue tempus, sem lorem condimentum mi, ut
            consequat purus eros non purus. Sed faucibus accumsan placerat.
            Integer ac iaculis lacus.
        </Text>

        <Text>
            Mauris nibh lorem, varius sit amet faucibus non, euismod sed metus.
            Duis varius, erat id mattis congue, tortor neque semper nunc, eget
            lacinia lectus felis imperdiet magna. Quisque consequat dapibus
            turpis, nec condimentum arcu gravida vel. Aliquam id nunc volutpat,
            porta ipsum a, tempor augue. Aliquam porttitor rutrum purus in
            pellentesque. Vestibulum massa nisi, dapibus vel feugiat et, laoreet
            vel nisi. Nunc feugiat nunc nisi, tempus rhoncus dui tincidunt vel.
        </Text>

        <Section>
            <CodeContainer language="typescript">{`const Button = styled.button<{\n    $color: "red" | "blue"\n    $size?: "default" | "small" | "large"\n}>\`\n    border: none;\n    border-radius: 8px;\n    background-color: \${({ $color }) => $color};\n    font-size: \${({ $size }) =>\n        $size === "large" ? 18 : $size === "small" ? 14 : 16}px;\n    padding: \${({ $size }) =>\n        $size === "large"\n            ? \`6px 12px\`\n            : $size === "small"\n            ? \`2px 4px\`\n            : \`4px 8px\`};\n    color: white;\n\`\n\n<Button $color="red" $size="small">\n    Red\n</Button>\n\n<Button $color="blue" $size="large">\n    Blue\n</Button>`}</CodeContainer>
        </Section>
    </>
)

const ContainerPage = () => {
    return (
        <Page title="Container">
            <Text>
                <Link
                    to="/container/demo-full"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    Demo full container
                </Link>
            </Text>

            <Wrapper>
                <StyledMain size="default">
                    <Text tag="h2">Main</Text>

                    <Content />
                </StyledMain>
            </Wrapper>

            <Wrapper>
                <StyledAside>
                    <Text tag="h2">Aside</Text>

                    <Content />
                </StyledAside>

                <StyledMain>
                    <Text tag="h2">Main</Text>

                    <Content />
                </StyledMain>
            </Wrapper>

            <Wrapper>
                <StyledMain>
                    <Text tag="h2">Main</Text>

                    <Content />
                </StyledMain>

                <StyledAside minHeight={100}>
                    <Text tag="h2">Aside</Text>

                    <Content />
                </StyledAside>
            </Wrapper>

            <Wrapper>
                <StyledAside size="small">
                    <Text tag="h2">Aside</Text>

                    <Content />
                </StyledAside>

                <StyledMain>
                    <Text tag="h2">Main</Text>

                    <Content />
                </StyledMain>

                <StyledAside size="small">
                    <Text tag="h2">Aside</Text>

                    <Content />
                </StyledAside>
            </Wrapper>
        </Page>
    )
}

export default ContainerPage
