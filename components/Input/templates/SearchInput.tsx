/*=============================================== SearchInput ===============================================*/

import { forwardRef } from "react"
import type { ForwardedRef } from "react"

import { ButtonIcon } from "../../../"
import { CloseIcon } from "../../../icons"
import { RightContainer, IconComponent } from "../../InputComponents"

import * as Styles from "../styles"
import type { SearchInputProps } from "../types"

const SearchInput = forwardRef(
    (
        {
            icon,
            type = "search",
            clearSearch,
            iconClear,
            accentColor = "primary",
            backgroundColor,
            iconSize,
            variant = "rounded",
            disabled,
            value,
            ...rest
        }: SearchInputProps,
        ref?: ForwardedRef<HTMLInputElement>
    ) => {
        const buttonProps = {
            noPadding: true,
            onClick: clearSearch,
            disabled,
            color: accentColor,
        }

        return (
            <Styles.StyledInputContent>
                {icon && (
                    <IconComponent
                        icon={icon}
                        disabled={disabled}
                        accentColor={accentColor}
                        size={iconSize}
                        variant={variant}
                    />
                )}

                <Styles.StyledInput
                    type={type}
                    ref={ref}
                    $type={type}
                    $hasIcon={!!icon}
                    disabled={disabled}
                    $accentColor={accentColor}
                    $backgroundColor={backgroundColor}
                    $variant={variant}
                    value={value}
                    {...rest}
                />

                <RightContainer disabled={disabled} variant={variant}>
                    {typeof value === "string" && value.length > 0 && (
                        <ButtonIcon
                            icon={iconClear || <CloseIcon size={20} />}
                            variant="transparent"
                            type="button"
                            size={24}
                            {...buttonProps}
                        />
                    )}
                </RightContainer>
            </Styles.StyledInputContent>
        )
    }
)

export default SearchInput
