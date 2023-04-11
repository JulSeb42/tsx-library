# Generate components automatically
# Usage: run in the terminal `make name=NameOfComponent`

define newline


endef

define INDEX_FILE
/*=============================================== Export component ===============================================*/

export { default as $(name) } from "./$(name)"
endef

define COMPONENT_FILE
/*=============================================== $(name) component ===============================================*/

import React, { forwardRef } from "react"
import type { ForwardedRef } from "react"

import {} from "../../"
import type {} from "../../types"

import * as Styles from "./styles"
import type { $(name)Props } from "./types"

const $(name) = forwardRef(
	({ as, ...rest }: $(name)Props, ref?: ForwardedRef<HTMLElement>) => {
		return (
			<Styles.Styled$(name)
				ref={ref}
				as={as}
				{...rest}
			>

			</Styles.Styled$(name)>
		)
	}
)

export default $(name)
endef

define STYLES_FILE
/*=============================================== $(name) styles ===============================================*/

import styled from "styled-components"

import {} from "../../"
import type {} from "../../types"

import { setDefaultTheme } from "../../utils"

const Styled$(name) = styled.div<{ }>`

`

setDefaultTheme([Styled$(name)])

export { Styled$(name) }
endef

define TYPES_FILE
/*=============================================== $(name) types ===============================================*/

import type { HTMLAttributes, ElementType } from "react"

import type {} from "../../types"

export interface $(name)Props extends HTMLAttributes<HTMLElement> {
	as?: ElementType
}
endef

define PAGE_FILE
/*=============================================== $(name)Page ===============================================*/

import React from "react"

import { Page } from "../../components"
import { $(name) } from "../../lib"

const $(name)Page = () => {
	const props: string[] = []

	return (
		<Page title="$(name)">
			<ul>
				{props.map(prop => {
					const a = prop.split(":")[0].replace("?", "")

					return (
						<li>
							{a},
						</li>
					)
				})}
			</ul>
		</Page>
	)
}

export default $(name)Page
endef

generate:
	mkdir src/lib/components/$(name)
	touch src/lib/components/$(name)/index.ts
	touch src/lib/components/$(name)/$(name).tsx
	touch src/lib/components/$(name)/styles.tsx
	touch src/lib/components/$(name)/types.ts
	touch src/pages/components/$(name)Page.tsx

	@echo '$(subst $(newline),\n,${INDEX_FILE})' > src/lib/components/$(name)/index.ts
	@echo '$(subst $(newline),\n,${COMPONENT_FILE})' > src/lib/components/$(name)/$(name).tsx
	@echo '$(subst $(newline),\n,${STYLES_FILE})' > src/lib/components/$(name)/styles.tsx
	@echo '$(subst $(newline),\n,${TYPES_FILE})' > src/lib/components/$(name)/types.ts
	@echo '$(subst $(newline),\n,${PAGE_FILE})' > src/pages/components/$(name)Page.tsx
	@echo 'export * from "./components/$(name)"' >> src/lib/index.ts
	