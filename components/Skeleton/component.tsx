/*=============================================== Skeleton ===============================================*/

import React from "react"

import * as Styles from "./styles"
import { SkeletonProps } from "./types"

const Skeleton = ({
    width = 100,
    height = 100,
    aspectRatio,
    backgroundColor = "gray-100",
    borderRadius,
    ...props
}: 
SkeletonProps) => {
    return (
        <Styles.StyledSkeleton
            $aspectRatio={aspectRatio}
            $backgroundColor={backgroundColor}
            $borderRadius={borderRadius}
            $height={height}
            $width={width}
            {...props}
        />
    )
}

export default Skeleton
