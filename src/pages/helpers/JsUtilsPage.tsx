/*=============================================== JsUtilsPage ===============================================*/

import { Page } from "../../components"
import {
    Avatar,
    Table,
    Button,
    calculateAverage,
    calculateTotalSum,
    camelToCapitalize,
    capitalize,
    convertDate,
    convertDateShort,
    convertPrice,
    convertToEmail,
    convertToPascal,
    convertYoutube,
    deleteDuplicates,
    detectLanguage,
    formatHour,
    generateNumbers,
    getFirstName,
    getLastName,
    getPercentage,
    getRandom,
    getRandomAvatar,
    getRandomDate,
    getRandomNumber,
    getRandomString,
    getRandomTime,
    getTimeNow,
    getToday,
    getTomorrow,
    emailRegex,
    passwordRegex,
    scrollToTop,
    slugify,
    stringifyPx,
    unslugify,
    uuid,
    enableScroll,
    disableScroll,
} from "../../lib"

const JsUtilsPage = () => {
    type utilType = {
        name: string
        effect: string | JSX.Element | React.ReactNode | any
        example?: string
        result?: React.ReactNode
    }

    const headers = ["Name", "Effect", "Example", "Result"]

    const allUtils: utilType[] = [
        {
            name: "calculateAverage",
            effect: "Calculates the average of an array of numbers",
            example: "calculateAverage([1, 2, 3, 4, 5])",
            result: calculateAverage([1, 2, 3, 4, 5]),
        },
        {
            name: "calculateTotalSum",
            effect: "Calculates the total sum of an array of numbers",
            example: "calculateTotalSum([3, 30, 42, 2])",
            result: calculateTotalSum([3, 30, 42, 2]),
        },
        {
            name: "camelToCapitalize",
            effect: "Transforms a camelCase or PascalCase to a Capitalized String",
            example: 'camelToCapitalize("helloWorld")',
            result: camelToCapitalize("helloWorld"),
        },
        {
            name: "capitalize",
            effect: "Capitalizes the first letter of a string",
            example: 'capitalize("hello")',
            result: capitalize("hello"),
        },
        {
            name: "convertDate",
            effect: (
                <>
                    Converts a date in the format <code>yyyy-mm-dd</code> to{" "}
                    <code>dd fullMonth yyyy</code>
                </>
            ),
            example: 'convertDate(new Date("2022-01-28"))',
            result: convertDate(new Date("2022-01-28")),
        },
        {
            name: "convertDateShort",
            effect: (
                <>
                    Converts a date in the format <code>yyyy-mm-dd</code> to{" "}
                    <code>dd shortMonth yyyy</code>
                </>
            ),
            example: 'convertDateShort(new Date("2022-01-28"))',
            result: convertDateShort(new Date("2022-01-28")),
        },
        {
            name: "convertToEmail",
            effect: "Converts a string to an email address.",
            example: 'convertToEmail("Julien Sebag", "me.com")',
            result: convertToEmail("Julien Sebag", "me.com"),
        },
        {
            name: "convertToPascal",
            effect: "Converts a string to PascalCase",
            example: 'convertToPascal("hello world")',
            result: convertToPascal("hello world"),
        },
        {
            name: "convertYoutube",
            effect: "Converts a YouTube url to an embed link for iframes",
            example:
                'convertYoutube("https://www.youtube.com/watch?v=2EaxYi31ips")',
            result: convertYoutube(
                "https://www.youtube.com/watch?v=2EaxYi31ips"
            ),
        },
        {
            name: "convertPrice",
            effect: "Converts an amount to a formatted price",
            example: 'convertPrice(1000, "EUR")',
            result: convertPrice(1000, "EUR"),
        },
        {
            name: "deleteDuplicates",
            effect: (
                <>
                    Delete all duplicates inside an array (also works with an
                    array of objects)
                </>
            ),
            example: 'deleteDuplicates([1, 1, 2, 3, 4, 5]).join(", ")',
            result: deleteDuplicates([1, 1, 2, 3, 4, 5]).join(", "),
        },
        {
            name: "detectLanguage",
            effect: (
                <>
                    Search for <code>lang</code> or <code>language</code> in
                    localStorage, and if it returns <code>null</code> both times
                    detects the browser language
                </>
            ),
            example: "detectLanguage()",
            result: detectLanguage(),
        },
        {
            name: "disableScroll",
            effect: (
                <>
                    Disable scrolling by adding a class{" "}
                    <code>stop-scrolling</code> to the body. Do not forget to
                    add our CSS file!
                </>
            ),
            example: "disableScroll()",
            result: <Button onClick={disableScroll}>Disable scroll</Button>,
        },
        {
            name: "enableScroll",
            effect: (
                <>
                    Removes the class <code>stop-scrolling</code> on the body.
                </>
            ),
            example: "enableScroll()",
            result: <Button onClick={enableScroll}>Enable scroll</Button>,
        },
        {
            name: "formatHour",
            effect: "Formats an hour from a given number",
            example: "formatHour(9.5)",
            result: formatHour(9.5),
        },
        {
            name: "generateNumbers",
            effect: "Generate an array of numbers",
            example: 'generateNumbers(0, 5).join(", ")',
            result: generateNumbers(0, 5).join(", "),
        },
        {
            name: "getFirstName",
            effect: "Returns the first name of a string",
            example: 'getFirstName("Julien Sebag")',
            result: getFirstName("Julien Sebag"),
        },
        {
            name: "getLastName",
            effect: "Returns the last name of a string",
            example: 'getLastName("Julien Sebag")',
            result: getLastName("Julien Sebag"),
        },
        {
            name: "getPercentage",
            effect: "Returns the percentage of two given values",
            example: "getPercentage(24, 140)",
            result: getPercentage(24, 140) + "%",
        },
        {
            name: "getRandom",
            effect: "Returns a random value inside an array",
            example: 'getRandom(["Hello", "world", "how", "are", "you"])',
            result: getRandom(["Hello", "world", "how", "are", "you"]),
        },
        {
            name: "getRandomAvatar",
            effect: (
                <>
                    Returns a random avatar from{" "}
                    <a
                        href="https://github.com/Ashwinvalento/cartoon-avatar"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        cartoon-avatar
                    </a>{" "}
                    library. Can be <code>male</code>, <code>female</code>, or{" "}
                    <code>other</code> for random gender.
                </>
            ),
            example: 'getRandomAvatar("male")',
            result: <Avatar img={getRandomAvatar("male")} />,
        },
        {
            name: "getRandomDate",
            effect: "Returns a random date. You need to specify the minimum and maximum year",
            example: "getRandomDate(1970, 2022)",
            result: getRandomDate(1970, 2022),
        },
        {
            name: "getRandomNumber",
            effect: "Returns a random number in a range. You need to specify the min and max",
            example: "getRandomNumber(1, 20)",
            result: getRandomNumber(1, 20),
        },
        {
            name: "getRandomString",
            effect: "Returns a random string of letters and numbers. You need to specify the length",
            example: "getRandomString(20)",
            result: getRandomString(20),
        },
        {
            name: "getRandomTime",
            effect: "Returns a random time. You need to specify the min hour and max hour.",
            example: "getRandomTime(0, 23)",
            result: getRandomTime(0, 23),
        },
        {
            name: "getTimeNow",
            effect: "Returns the time",
            example: "getTimeNow()",
            result: getTimeNow(),
        },
        {
            name: "getToday",
            effect: "Returns today's date",
            example: "getToday()",
            result: getToday(),
        },
        {
            name: "getTomorrow",
            effect: "Returns tomorrow's date",
            example: "getTomorrow()",
            result: getTomorrow(),
        },
        {
            name: "passwordRegex",
            effect: "Tests if a password contains at least 6 characters, one number, one uppercase letter and one lowercase letter",
            example: 'passwordRegex.test("Password42")',
            result: passwordRegex.test("Password42").toString(),
        },
        {
            name: "emailRegex",
            effect: "Tests if an email address is valid",
            example: 'emailRegex.test("a@b.c")',
            result: emailRegex.test("a@b.c").toString(),
        },
        {
            name: "scrollToTop",
            effect: "Function to scroll to the top of the page on click",
            result: <Button onClick={scrollToTop}>Scroll to top</Button>,
        },
        {
            name: "slugify",
            effect: "Replaces accents, spaces, uppercase letters, etc., in a string to convert it to a url friendly string",
            example: 'slugify("Hello world how are you?")',
            result: slugify("Hello world how are you?"),
        },
        {
            name: "stringifyPx",
            effect: "Returns a value in pixels if you enter a number",
            example: "stringifyPx(80)",
            result: stringifyPx(80),
        },
        {
            name: "unslugify",
            effect: "Replaces dashes and underscores to a space, and capitalize the first letter of a string",
            example: 'unslugify("hello-world-how-are-you")',
            result: unslugify("hello-world-how-are-you"),
        },
        {
            name: "uuid",
            effect: "Generates a random id",
            example: "uuid()",
            result: uuid(),
        },
    ]

    return (
        <Page title="Js utils">
            <Table variant="border-bottom" vAlign="text-top">
                <thead>
                    <tr>
                        {headers.map(item => (
                            <th key={uuid()}>{item}</th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {allUtils.map(util => (
                        <tr key={uuid()}>
                            <td>{util.name}</td>
                            <td>{util.effect}</td>
                            <td>{util.example ? util.example : "-"}</td>
                            <td>{util.result ? util.result : "-"}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Page>
    )
}

export default JsUtilsPage
