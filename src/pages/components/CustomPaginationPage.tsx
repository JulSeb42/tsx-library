/*=============================================== CustomPaginationPage ===============================================*/

import { useState } from "react"
import {
    useNavigate,
    useSearchParams,
    createSearchParams,
} from "react-router-dom"

import { Page } from "../../components"
import {
    PaginationContainer,
    PaginationButton,
    Card,
    Grid,
    Text,
    uuid,
} from "../../lib"

const CustomPaginationPage = () => {
    const arr = [
        { name: "Hello 1" },
        { name: "Hello 2" },
        { name: "Hello 3" },
        { name: "Hello 4" },
        { name: "Hello 5" },
        { name: "Hello 6" },
        { name: "Hello 7" },
        { name: "Hello 8" },
        { name: "Hello 9" },
        { name: "Hello 10" },
        { name: "Hello 11" },
        { name: "Hello 12" },
        { name: "Hello 13" },
        { name: "Hello 14" },
        { name: "Hello 15" },
        { name: "Hello 16" },
        { name: "Hello 17" },
        { name: "Hello 18" },
        { name: "Hello 19" },
        { name: "Hello 20" },
        { name: "Hello 21" },
        { name: "Hello 22" },
        { name: "Hello 23" },
        { name: "Hello 24" },
        { name: "Hello 25" },
        { name: "Hello 26" },
        { name: "Hello 27" },
        { name: "Hello 28" },
        { name: "Hello 29" },
        { name: "Hello 30" },
        { name: "Hello 31" },
        { name: "Hello 32" },
        { name: "Hello 33" },
        { name: "Hello 34" },
        { name: "Hello 35" },
        { name: "Hello 36" },
        { name: "Hello 37" },
        { name: "Hello 38" },
        { name: "Hello 39" },
        { name: "Hello 40" },
        { name: "Hello 41" },
        { name: "Hello 42" },
        { name: "Hello 43" },
        { name: "Hello 44" },
        { name: "Hello 45" },
        { name: "Hello 46" },
        { name: "Hello 47" },
        { name: "Hello 48" },
        { name: "Hello 49" },
        { name: "Hello 50" },
        { name: "Hello 51" },
        { name: "Hello 52" },
        { name: "Hello 53" },
        { name: "Hello 54" },
        { name: "Hello 55" },
        { name: "Hello 56" },
        { name: "Hello 57" },
        { name: "Hello 58" },
        { name: "Hello 59" },
        { name: "Hello 60" },
        { name: "Hello 61" },
        { name: "Hello 62" },
        { name: "Hello 63" },
        { name: "Hello 64" },
        { name: "Hello 65" },
        { name: "Hello 66" },
        { name: "Hello 67" },
        { name: "Hello 68" },
        { name: "Hello 69" },
        { name: "Hello 70" },
        { name: "Hello 71" },
        { name: "Hello 72" },
        { name: "Hello 73" },
        { name: "Hello 74" },
        { name: "Hello 75" },
        { name: "Hello 76" },
        { name: "Hello 77" },
        { name: "Hello 78" },
        { name: "Hello 79" },
        { name: "Hello 80" },
        { name: "Hello 81" },
        { name: "Hello 82" },
        { name: "Hello 83" },
        { name: "Hello 84" },
        { name: "Hello 85" },
        { name: "Hello 86" },
        { name: "Hello 87" },
        { name: "Hello 88" },
        { name: "Hello 89" },
        { name: "Hello 90" },
        { name: "Hello 91" },
        { name: "Hello 92" },
        { name: "Hello 93" },
        { name: "Hello 94" },
        { name: "Hello 95" },
        { name: "Hello 96" },
        { name: "Hello 97" },
        { name: "Hello 98" },
        { name: "Hello 99" },
        { name: "Hello 100" },
        { name: "Hello 101" },
        { name: "Hello 102" },
        { name: "Hello 103" },
        { name: "Hello 104" },
        { name: "Hello 105" },
        { name: "Hello 106" },
        { name: "Hello 107" },
        { name: "Hello 108" },
        { name: "Hello 109" },
        { name: "Hello 110" },
        { name: "Hello 111" },
        { name: "Hello 112" },
        { name: "Hello 113" },
        { name: "Hello 114" },
        { name: "Hello 115" },
        { name: "Hello 116" },
        { name: "Hello 117" },
        { name: "Hello 118" },
        { name: "Hello 119" },
        { name: "Hello 120" },
        { name: "Hello 121" },
        { name: "Hello 122" },
        { name: "Hello 123" },
        { name: "Hello 124" },
        { name: "Hello 125" },
        { name: "Hello 126" },
        { name: "Hello 127" },
        { name: "Hello 128" },
        { name: "Hello 129" },
        { name: "Hello 130" },
        { name: "Hello 131" },
        { name: "Hello 132" },
        { name: "Hello 133" },
        { name: "Hello 134" },
        { name: "Hello 135" },
        { name: "Hello 136" },
        { name: "Hello 137" },
        { name: "Hello 138" },
        { name: "Hello 139" },
        { name: "Hello 140" },
        { name: "Hello 141" },
        { name: "Hello 142" },
        { name: "Hello 143" },
        { name: "Hello 144" },
        { name: "Hello 145" },
        { name: "Hello 146" },
        { name: "Hello 147" },
        { name: "Hello 148" },
        { name: "Hello 149" },
        { name: "Hello 150" },
        { name: "Hello 151" },
        { name: "Hello 152" },
        { name: "Hello 153" },
        { name: "Hello 154" },
        { name: "Hello 155" },
        { name: "Hello 156" },
        { name: "Hello 157" },
        { name: "Hello 158" },
        { name: "Hello 159" },
        { name: "Hello 160" },
        { name: "Hello 161" },
        { name: "Hello 162" },
        { name: "Hello 163" },
        { name: "Hello 164" },
        { name: "Hello 165" },
        { name: "Hello 166" },
        { name: "Hello 167" },
        { name: "Hello 168" },
        { name: "Hello 169" },
        { name: "Hello 170" },
        { name: "Hello 171" },
        { name: "Hello 172" },
        { name: "Hello 173" },
        { name: "Hello 174" },
        { name: "Hello 175" },
        { name: "Hello 176" },
        { name: "Hello 177" },
        { name: "Hello 178" },
        { name: "Hello 179" },
        { name: "Hello 180" },
        { name: "Hello 181" },
        { name: "Hello 182" },
        { name: "Hello 183" },
        { name: "Hello 184" },
        { name: "Hello 185" },
        { name: "Hello 186" },
        { name: "Hello 187" },
        { name: "Hello 188" },
        { name: "Hello 189" },
        { name: "Hello 190" },
        { name: "Hello 191" },
        { name: "Hello 192" },
        { name: "Hello 193" },
        { name: "Hello 194" },
        { name: "Hello 195" },
        { name: "Hello 196" },
        { name: "Hello 197" },
        { name: "Hello 198" },
        { name: "Hello 199" },
        { name: "Hello 200" },
    ]

    const pageLimit = 5
    const dataLimit = 20

    const navigate = useNavigate()
    const [q] = useSearchParams()

    const getPage = q.get("page-title")

    const [currentPage, setCurrentPage] = useState(
        getPage ? parseInt(getPage) : 1
    )

    const handlePrev = () => {
        setCurrentPage(currentPage - 1)
        navigate({
            pathname: "",
            search: createSearchParams({
                "page-title": (currentPage - 1).toString(),
            }).toString(),
        })

        window.scrollTo(0, 0)
    }

    const handleNext = () => {
        setCurrentPage(currentPage + 1)
        navigate({
            pathname: "",
            search: createSearchParams({
                "page-title": (currentPage + 1).toString(),
            }).toString(),
        })

        window.scrollTo(0, 0)
    }

    const goToPage = (i: number) => {
        setCurrentPage(i)

        navigate({
            pathname: "",
            search: createSearchParams({
                "page-title": i.toString(),
            }).toString(),
        })
        window.scrollTo(0, 0)
    }

    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit
        return (
            new Array(pageLimit)
                // @ts-expect-error
                .fill()
                .map((_, i) => start + i + 1)
                .filter(item => item <= getNumberOfPages())
        )
    }

    const getNumberOfPages = () => Math.ceil((arr?.length || 0) / dataLimit)

    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit
        const endIndex = startIndex + dataLimit
        return arr?.slice(startIndex, endIndex)
    }

    return (
        <Page title="Custom Pagination">
            {getPaginatedData() && (
                <Grid col={4} gap="s">
                    {getPaginatedData().map(({ name }) => (
                        <Card border={{ width: 1 }} key={uuid()}>
                            <Text>{name}</Text>
                        </Card>
                    ))}
                </Grid>
            )}

            {getNumberOfPages() > 1 && (
                <PaginationContainer>
                    <PaginationButton
                        onClick={handlePrev}
                        buttonContent="prev"
                        disabled={currentPage === 1}
                    />

                    {getPaginationGroup()[0] !== 1 && (
                        <>
                            <PaginationButton
                                buttonContent={1}
                                onClick={() => goToPage(1)}
                            />
                            <PaginationButton buttonContent="more" />
                        </>
                    )}

                    {getPaginationGroup().map(item => (
                        <PaginationButton
                            buttonContent={item}
                            key={item}
                            onClick={() => goToPage(item)}
                            isActive={currentPage === item}
                        />
                    ))}

                    {getPaginationGroup()[getPaginationGroup().length - 1] !==
                        getNumberOfPages() && (
                        <>
                            <PaginationButton buttonContent="more" />

                            <PaginationButton
                                buttonContent={getNumberOfPages()}
                                onClick={() => goToPage(getNumberOfPages())}
                            />
                        </>
                    )}

                    <PaginationButton
                        onClick={handleNext}
                        buttonContent="next"
                        disabled={currentPage === getNumberOfPages()}
                    />
                </PaginationContainer>
            )}
        </Page>
    )
}

export default CustomPaginationPage
