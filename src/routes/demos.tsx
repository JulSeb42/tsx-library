/*=============================================== Demo routes ===============================================*/

import React from "react"

import type { RouteType } from "./routes"

import FullMainDemo from "../pages/demos/FullMainDemo"

import CoverCenter from "../pages/demos/DemoCoverCenter"
import CoverCenterOverlay from "../pages/demos/DemoCoverCenterOverlay"
import CoverBottom from "../pages/demos/DemoCoverBottom"
import CoverBottomOverlay from "../pages/demos/DemoCoverBottomOverlay"

import DemoPageLoading from "../pages/demos/DemoPageLoading"

import BackToTopDemo from "../pages/demos/BackToTopDemo"

import DemoHeader from "../pages/demos/DemoHeader"

import FooterDemo from "../pages/demos/FooterDemo"
import FooterSeparatorDemo from "../pages/demos/FooterSeparatorDemo"

export const demos: RouteType[] = [
    { path: "/container/demo-full", element: <FullMainDemo /> },
    { path: "/cover/cover-center", element: <CoverCenter /> },
    { path: "/cover/cover-center-overlay", element: <CoverCenterOverlay /> },
    { path: "/cover/cover-bottom", element: <CoverBottom /> },
    { path: "/cover/cover-bottom-overlay", element: <CoverBottomOverlay /> },
    { path: "/page-loading/demo", element: <DemoPageLoading /> },
    { path: "/back-to-top/demo", element: <BackToTopDemo /> },
    { path: "/header/demo", element: <DemoHeader /> },
    { path: "/footer/demo-no-separator", element: <FooterDemo /> },
    { path: "/footer/demo-separator", element: <FooterSeparatorDemo /> },
]
