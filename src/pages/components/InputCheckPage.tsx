/*=============================================== InputCheckPage ===============================================*/

import { Page } from "../../components"
import { InputCheck, Flexbox, Text } from "../../lib"

const InputCheckPage = () => {
    return (
        <Page title="InputCheck">
            <Flexbox flexDirection="column" gap="s">
                <Text tag="h2">Radio</Text>

                <Flexbox gap="m">
                    <InputCheck
                        type="radio"
                        id="radio-1"
                        name="radio"
                        label="Radio"
                    />
                    <InputCheck
                        type="radio"
                        id="radio-2"
                        name="radio"
                        label="Radio"
                        defaultChecked
                    />
                </Flexbox>

                <Flexbox gap="m">
                    <InputCheck
                        type="radio"
                        id="radio-3"
                        name="radio-validation"
                        label="Radio"
                        validation="not-passed"
                    />
                    <InputCheck
                        type="radio"
                        id="radio-4"
                        name="radio-validation"
                        label="Radio"
                        validation="not-passed"
                        defaultChecked
                    />
                </Flexbox>

                <Flexbox gap="m">
                    <InputCheck
                        type="radio"
                        id="radio-5"
                        name="radio-disabled"
                        label="Radio"
                        disabled
                    />
                    <InputCheck
                        type="radio"
                        id="radio-6"
                        name="radio-disabled"
                        label="Radio"
                        disabled
                        defaultChecked
                    />
                </Flexbox>

                <Flexbox gap="m">
                    <InputCheck
                        type="radio"
                        id="radio-5"
                        name="radio-validation-disabled"
                        validation="not-passed"
                        label="Radio"
                        disabled
                    />
                    <InputCheck
                        type="radio"
                        id="radio-6"
                        name="radio-validation-disabled"
                        validation="not-passed"
                        label="Radio"
                        disabled
                        defaultChecked
                    />
                </Flexbox>
            </Flexbox>

            <Flexbox flexDirection="column" gap="s">
                <Text tag="h2">Checkbox</Text>

                <Flexbox gap="m">
                    <InputCheck
                        type="checkbox"
                        id="checkbox-1"
                        name="checkbox"
                        label="Checkbox"
                    />
                    <InputCheck
                        type="checkbox"
                        id="checkbox-2"
                        name="checkbox"
                        label="Checkbox"
                        defaultChecked
                    />
                </Flexbox>

                <Flexbox gap="m">
                    <InputCheck
                        type="checkbox"
                        id="checkbox-3"
                        name="checkbox-validation"
                        label="Checkbox"
                        validation="not-passed"
                    />
                    <InputCheck
                        type="checkbox"
                        id="checkbox-4"
                        name="checkbox-validation"
                        label="Checkbox"
                        validation="not-passed"
                        defaultChecked
                    />
                </Flexbox>

                <Flexbox gap="m">
                    <InputCheck
                        type="checkbox"
                        id="checkbox-5"
                        name="checkbox-disabled"
                        label="Checkbox"
                        disabled
                    />
                    <InputCheck
                        type="checkbox"
                        id="checkbox-6"
                        name="checkbox-disabled"
                        label="Checkbox"
                        disabled
                        defaultChecked
                    />
                </Flexbox>

                <Flexbox gap="m">
                    <InputCheck
                        type="checkbox"
                        id="checkbox-5"
                        name="checkbox-validation-disabled"
                        validation="not-passed"
                        label="Checkbox"
                        disabled
                    />
                    <InputCheck
                        type="checkbox"
                        id="checkbox-6"
                        name="checkbox-validation-disabled"
                        validation="not-passed"
                        label="Checkbox"
                        disabled
                        defaultChecked
                    />
                </Flexbox>
            </Flexbox>

            <Flexbox flexDirection="column" gap="s">
                <Text tag="h2">Radio tile</Text>

                <Flexbox gap="xxs" flexDirection="column">
                    <InputCheck
                        type="radio"
                        id="radio-tile-1"
                        name="radio-tile"
                        label="Radio"
                        checkStyle="tile"
                    />
                    <InputCheck
                        type="radio"
                        id="radio-tile-2"
                        name="radio-tile"
                        label="Radio"
                        checkStyle="tile"
                        defaultChecked
                    />
                </Flexbox>

                <Flexbox gap="xxs" flexDirection="column">
                    <InputCheck
                        type="radio"
                        id="radio-tile-3"
                        name="radio-tile-validation"
                        label="Radio"
                        validation="not-passed"
                        checkStyle="tile"
                    />
                    <InputCheck
                        type="radio"
                        id="radio-tile-4"
                        name="radio-tile-validation"
                        label="Radio"
                        validation="not-passed"
                        checkStyle="tile"
                        defaultChecked
                    />
                </Flexbox>

                <Flexbox gap="xxs" flexDirection="column">
                    <InputCheck
                        type="radio"
                        id="radio-tile-5"
                        name="radio-tile-disabled"
                        label="Radio"
                        checkStyle="tile"
                        disabled
                    />
                    <InputCheck
                        type="radio"
                        id="radio-tile-6"
                        name="radio-tile-disabled"
                        label="Radio"
                        checkStyle="tile"
                        disabled
                        defaultChecked
                    />
                </Flexbox>

                <Flexbox gap="xxs" flexDirection="column">
                    <InputCheck
                        type="radio"
                        id="radio-tile-7"
                        name="radio-tile-validation-disabled"
                        validation="not-passed"
                        label="Radio"
                        checkStyle="tile"
                        disabled
                    />
                    <InputCheck
                        type="radio"
                        id="radio-tile-8"
                        name="radio-tile-validation-disabled"
                        validation="not-passed"
                        label="Radio"
                        checkStyle="tile"
                        disabled
                        defaultChecked
                    />
                </Flexbox>
            </Flexbox>

            <Flexbox flexDirection="column" gap="s">
                <Text tag="h2">Checkbox tile</Text>

                <Flexbox gap="xxs" flexDirection="column">
                    <InputCheck
                        type="checkbox"
                        id="checkbox-tile-1"
                        name="checkbox-tile"
                        label="Checkbox"
                        checkStyle="tile"
                    />
                    <InputCheck
                        type="checkbox"
                        id="checkbox-tile-2"
                        name="checkbox-tile"
                        label="Checkbox"
                        checkStyle="tile"
                        defaultChecked
                    />
                </Flexbox>

                <Flexbox gap="xxs" flexDirection="column">
                    <InputCheck
                        type="checkbox"
                        id="checkbox-tile-3"
                        name="checkbox-tile-validation"
                        label="Checkbox"
                        validation="not-passed"
                        checkStyle="tile"
                    />
                    <InputCheck
                        type="checkbox"
                        id="checkbox-tile-4"
                        name="checkbox-tile-validation"
                        label="Checkbox"
                        validation="not-passed"
                        checkStyle="tile"
                        defaultChecked
                    />
                </Flexbox>

                <Flexbox gap="xxs" flexDirection="column">
                    <InputCheck
                        type="checkbox"
                        id="checkbox-tile-5"
                        name="checkbox-tile-disabled"
                        label="Checkbox"
                        checkStyle="tile"
                        disabled
                    />
                    <InputCheck
                        type="checkbox"
                        id="checkbox-tile-6"
                        name="checkbox-tile-disabled"
                        label="Checkbox"
                        checkStyle="tile"
                        disabled
                        defaultChecked
                    />
                </Flexbox>

                <Flexbox gap="xxs" flexDirection="column">
                    <InputCheck
                        type="checkbox"
                        id="checkbox-tile-7"
                        name="checkbox-tile-validation-disabled"
                        label="Checkbox"
                        validation="not-passed"
                        checkStyle="tile"
                        disabled
                    />
                    <InputCheck
                        type="checkbox"
                        id="checkbox-tile-8"
                        name="checkbox-tile-validation-disabled"
                        label="Checkbox"
                        validation="not-passed"
                        checkStyle="tile"
                        disabled
                        defaultChecked
                    />
                </Flexbox>
            </Flexbox>

            <Flexbox flexDirection="column" gap="s">
                <Text tag="h2">Toggle</Text>

                <Flexbox gap="m">
                    <InputCheck
                        type="checkbox"
                        id="checkbox-toggle-1"
                        name="checkbox-toggle"
                        label="Toggle"
                        checkStyle="toggle"
                    />
                    <InputCheck
                        type="checkbox"
                        id="checkbox-toggle-2"
                        name="checkbox-toggle"
                        label="Toggle"
                        checkStyle="toggle"
                        defaultChecked
                    />
                </Flexbox>

                <Flexbox gap="m">
                    <InputCheck
                        type="checkbox"
                        id="checkbox-toggle-3"
                        name="checkbox-toggle-validation"
                        label="Toggle"
                        validation="not-passed"
                        checkStyle="toggle"
                    />
                    <InputCheck
                        type="checkbox"
                        id="checkbox-toggle-4"
                        name="checkbox-toggle-validation"
                        label="Toggle"
                        validation="not-passed"
                        checkStyle="toggle"
                        defaultChecked
                    />
                </Flexbox>

                <Flexbox gap="m">
                    <InputCheck
                        type="checkbox"
                        id="checkbox-toggle-5"
                        name="checkbox-toggle-disabled"
                        label="Toggle"
                        checkStyle="toggle"
                        disabled
                    />
                    <InputCheck
                        type="checkbox"
                        id="checkbox-toggle-6"
                        name="checkbox-toggle-disabled"
                        label="Toggle"
                        checkStyle="toggle"
                        disabled
                        defaultChecked
                    />
                </Flexbox>

                <Flexbox gap="m">
                    <InputCheck
                        type="checkbox"
                        id="checkbox-toggle-5"
                        name="checkbox-toggle-validation-disabled"
                        label="Toggle"
                        validation="not-passed"
                        checkStyle="toggle"
                        disabled
                    />
                    <InputCheck
                        type="checkbox"
                        id="checkbox-toggle-6"
                        name="checkbox-toggle-validation-disabled"
                        label="Toggle"
                        validation="not-passed"
                        checkStyle="toggle"
                        disabled
                        defaultChecked
                    />
                </Flexbox>
            </Flexbox>

            <Flexbox flexDirection="column" gap="s">
                <Text tag="h2">Selector</Text>

                <Flexbox gap="m">
                    <InputCheck
                        type="checkbox"
                        id="checkbox-selector-1"
                        name="checkbox-selector"
                        label="Selector"
                        checkStyle="selector"
                    />
                    <InputCheck
                        type="checkbox"
                        id="checkbox-selector-2"
                        name="checkbox-selector"
                        label="Selector"
                        checkStyle="selector"
                        defaultChecked
                    />
                </Flexbox>

                <Flexbox gap="m">
                    <InputCheck
                        type="checkbox"
                        id="checkbox-selector-3"
                        name="checkbox-selector-validation"
                        label="Selector"
                        validation="not-passed"
                        checkStyle="selector"
                    />
                    <InputCheck
                        type="checkbox"
                        id="checkbox-selector-4"
                        name="checkbox-selector-validation"
                        label="Selector"
                        validation="not-passed"
                        checkStyle="selector"
                        defaultChecked
                    />
                </Flexbox>

                <Flexbox gap="m">
                    <InputCheck
                        type="checkbox"
                        id="checkbox-selector-5"
                        name="checkbox-selector-disabled"
                        label="Selector"
                        checkStyle="selector"
                        disabled
                    />
                    <InputCheck
                        type="checkbox"
                        id="checkbox-selector-6"
                        name="checkbox-selector-disabled"
                        label="Selector"
                        checkStyle="selector"
                        disabled
                        defaultChecked
                    />
                </Flexbox>

                <Flexbox gap="m">
                    <InputCheck
                        type="checkbox"
                        id="checkbox-selector-5"
                        name="checkbox-selector-validation-disabled"
                        label="Selector"
                        validation="not-passed"
                        checkStyle="selector"
                        disabled
                    />
                    <InputCheck
                        type="checkbox"
                        id="checkbox-selector-6"
                        name="checkbox-selector-validation-disabled"
                        label="Selector"
                        validation="not-passed"
                        checkStyle="selector"
                        disabled
                        defaultChecked
                    />
                </Flexbox>
            </Flexbox>
        </Page>
    )
}

export default InputCheckPage
