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
                        label="Radio checked"
                        defaultChecked
                    />
                </Flexbox>

                <Flexbox gap="m">
                    <InputCheck
                        type="radio"
                        id="radio-3"
                        name="radio-validation"
                        label="Radio not passed"
                        validation="not-passed"
                    />
                    <InputCheck
                        type="radio"
                        id="radio-4"
                        name="radio-validation"
                        label="Radio checked not passed"
                        validation="not-passed"
                        defaultChecked
                    />
                </Flexbox>

                <Flexbox gap="m">
                    <InputCheck
                        type="radio"
                        id="radio-5"
                        name="radio-disabled"
                        label="Radio disabled"
                        disabled
                    />
                    <InputCheck
                        type="radio"
                        id="radio-6"
                        name="radio-disabled"
                        label="Radio checked disabled"
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
                        label="Radio disabled not passed"
                        disabled
                    />
                    <InputCheck
                        type="radio"
                        id="radio-6"
                        name="radio-validation-disabled"
                        validation="not-passed"
                        label="Radio disabled not passed"
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
                        label="Checkbox checked"
                        defaultChecked
                    />
                </Flexbox>

                <Flexbox gap="m">
                    <InputCheck
                        type="checkbox"
                        id="checkbox-3"
                        name="checkbox-validation"
                        label="Checkbox not passed"
                        validation="not-passed"
                    />
                    <InputCheck
                        type="checkbox"
                        id="checkbox-4"
                        name="checkbox-validation"
                        label="Checkbox checked not passed"
                        validation="not-passed"
                        defaultChecked
                    />
                </Flexbox>

                <Flexbox gap="m">
                    <InputCheck
                        type="checkbox"
                        id="checkbox-5"
                        name="checkbox-disabled"
                        label="Checkbox disabled"
                        disabled
                    />
                    <InputCheck
                        type="checkbox"
                        id="checkbox-6"
                        name="checkbox-disabled"
                        label="Checkbox checked disabled"
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
                        label="Checkbox disabled not passed"
                        disabled
                    />
                    <InputCheck
                        type="checkbox"
                        id="checkbox-6"
                        name="checkbox-validation-disabled"
                        validation="not-passed"
                        label="Checkbox disabled not passed"
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
                        label="Radio tile"
                        variant="tile"
                    />
                    <InputCheck
                        type="radio"
                        id="radio-tile-2"
                        name="radio-tile"
                        label="Radio tile checked"
                        variant="tile"
                        defaultChecked
                    />
                </Flexbox>

                <Flexbox gap="xxs" flexDirection="column">
                    <InputCheck
                        type="radio"
                        id="radio-tile-3"
                        name="radio-tile-validation"
                        label="Radio tile not passed"
                        validation="not-passed"
                        variant="tile"
                    />
                    <InputCheck
                        type="radio"
                        id="radio-tile-4"
                        name="radio-tile-validation"
                        label="Radio tile checked not passed"
                        validation="not-passed"
                        variant="tile"
                        defaultChecked
                    />
                </Flexbox>

                <Flexbox gap="xxs" flexDirection="column">
                    <InputCheck
                        type="radio"
                        id="radio-tile-5"
                        name="radio-tile-disabled"
                        label="Radio tile disabled"
                        variant="tile"
                        disabled
                    />
                    <InputCheck
                        type="radio"
                        id="radio-tile-6"
                        name="radio-tile-disabled"
                        label="Radio tile disabled checked"
                        variant="tile"
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
                        label="Radio tile disabled not passed"
                        variant="tile"
                        disabled
                    />
                    <InputCheck
                        type="radio"
                        id="radio-tile-8"
                        name="radio-tile-validation-disabled"
                        validation="not-passed"
                        label="Radio tile disabled checked not passed"
                        variant="tile"
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
                        label="Checkbox tile"
                        variant="tile"
                    />
                    <InputCheck
                        type="checkbox"
                        id="checkbox-tile-2"
                        name="checkbox-tile"
                        label="Checkbox tile checked"
                        variant="tile"
                        defaultChecked
                    />
                </Flexbox>

                <Flexbox gap="xxs" flexDirection="column">
                    <InputCheck
                        type="checkbox"
                        id="checkbox-tile-3"
                        name="checkbox-tile-validation"
                        label="Checkbox tile not passed"
                        validation="not-passed"
                        variant="tile"
                    />
                    <InputCheck
                        type="checkbox"
                        id="checkbox-tile-4"
                        name="checkbox-tile-validation"
                        label="Checkbox tile checked not passed"
                        validation="not-passed"
                        variant="tile"
                        defaultChecked
                    />
                </Flexbox>

                <Flexbox gap="xxs" flexDirection="column">
                    <InputCheck
                        type="checkbox"
                        id="checkbox-tile-5"
                        name="checkbox-tile-disabled"
                        label="Checkbox tile disabled"
                        variant="tile"
                        disabled
                    />
                    <InputCheck
                        type="checkbox"
                        id="checkbox-tile-6"
                        name="checkbox-tile-disabled"
                        label="Checkbox tile disabled checked"
                        variant="tile"
                        disabled
                        defaultChecked
                    />
                </Flexbox>

                <Flexbox gap="xxs" flexDirection="column">
                    <InputCheck
                        type="checkbox"
                        id="checkbox-tile-7"
                        name="checkbox-tile-validation-disabled"
                        validation="not-passed"
                        label="Checkbox tile disabled not passed"
                        variant="tile"
                        disabled
                    />
                    <InputCheck
                        type="checkbox"
                        id="checkbox-tile-8"
                        name="checkbox-tile-validation-disabled"
                        validation="not-passed"
                        label="Checkbox tile disabled checked not passed"
                        variant="tile"
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
                        variant="toggle"
                    />
                    <InputCheck
                        type="checkbox"
                        id="checkbox-toggle-2"
                        name="checkbox-toggle"
                        label="Toggle checked"
                        variant="toggle"
                        defaultChecked
                    />
                </Flexbox>

                <Flexbox gap="m">
                    <InputCheck
                        type="checkbox"
                        id="checkbox-toggle-3"
                        name="checkbox-toggle-validation"
                        label="Toggle not passed"
                        validation="not-passed"
                        variant="toggle"
                    />
                    <InputCheck
                        type="checkbox"
                        id="checkbox-toggle-4"
                        name="checkbox-toggle-validation"
                        label="Toggle checked not passed"
                        validation="not-passed"
                        variant="toggle"
                        defaultChecked
                    />
                </Flexbox>

                <Flexbox gap="m">
                    <InputCheck
                        type="checkbox"
                        id="checkbox-toggle-5"
                        name="checkbox-toggle-disabled"
                        label="Toggle disabled"
                        variant="toggle"
                        disabled
                    />
                    <InputCheck
                        type="checkbox"
                        id="checkbox-toggle-6"
                        name="checkbox-toggle-disabled"
                        label="Toggle checked disabled"
                        variant="toggle"
                        disabled
                        defaultChecked
                    />
                </Flexbox>

                <Flexbox gap="m">
                    <InputCheck
                        type="checkbox"
                        id="checkbox-toggle-5"
                        name="checkbox-toggle-validation-disabled"
                        label="Toggle disabled not passed"
                        validation="not-passed"
                        variant="toggle"
                        disabled
                    />
                    <InputCheck
                        type="checkbox"
                        id="checkbox-toggle-6"
                        name="checkbox-toggle-validation-disabled"
                        label="Toggle checked disabled not passed"
                        validation="not-passed"
                        variant="toggle"
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
                        variant="selector"
                    />
                    <InputCheck
                        type="checkbox"
                        id="checkbox-selector-2"
                        name="checkbox-selector"
                        label="Selector checked"
                        variant="selector"
                        defaultChecked
                    />
                </Flexbox>

                <Flexbox gap="m">
                    <InputCheck
                        type="checkbox"
                        id="checkbox-selector-3"
                        name="checkbox-selector-validation"
                        label="Selector not passed"
                        validation="not-passed"
                        variant="selector"
                    />
                    <InputCheck
                        type="checkbox"
                        id="checkbox-selector-4"
                        name="checkbox-selector-validation"
                        label="Selector checked not passed"
                        validation="not-passed"
                        variant="selector"
                        defaultChecked
                    />
                </Flexbox>

                <Flexbox gap="m">
                    <InputCheck
                        type="checkbox"
                        id="checkbox-selector-5"
                        name="checkbox-selector-disabled"
                        label="Selector disabled"
                        variant="selector"
                        disabled
                    />
                    <InputCheck
                        type="checkbox"
                        id="checkbox-selector-6"
                        name="checkbox-selector-disabled"
                        label="Selector checked disabled"
                        variant="selector"
                        disabled
                        defaultChecked
                    />
                </Flexbox>

                <Flexbox gap="m">
                    <InputCheck
                        type="checkbox"
                        id="checkbox-selector-5"
                        name="checkbox-selector-validation-disabled"
                        label="Selector disabled not passed"
                        validation="not-passed"
                        variant="selector"
                        disabled
                    />
                    <InputCheck
                        type="checkbox"
                        id="checkbox-selector-6"
                        name="checkbox-selector-validation-disabled"
                        label="Selector checked disabled not passed"
                        validation="not-passed"
                        variant="selector"
                        disabled
                        defaultChecked
                    />
                </Flexbox>
            </Flexbox>
        </Page>
    )
}

export default InputCheckPage
