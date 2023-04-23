/*=============================================== Routes ===============================================*/

import React from "react"

import Homepage from "../pages/Homepage"
import StyledFixes from "../pages/StyledFixes"
// import Generate from "../pages/Generate"

import ColorsPage from "../pages/styles/ColorsPage"
import TextPage from "../pages/styles/TextPage"
import ShadowsPage from "../pages/styles/ShadowsPage"
import RadiusesPage from "../pages/styles/RadiusesPage"
import ThemeProviderPage from "../pages/styles/ThemeProviderPage"

import ContainerPage from "../pages/layouts/ContainerPage"
import SectionPage from "../pages/layouts/SectionPage"
import SpacersPage from "../pages/layouts/SpacersPage"
import GridPage from "../pages/layouts/GridPage"
import FlexboxPage from "../pages/layouts/FlexboxPage"
import MasonryPage from "../pages/layouts/MasonryPage"

import SkeletonPage from "../pages/components/SkeletonPage"
import IconPage from "../pages/components/IconPage"
import KeyPage from "../pages/components/KeyPage"
import TextIconPage from "../pages/components/TextIconPage"
import HighlightPage from "../pages/components/HighlightPage"
import LinkifyPage from "../pages/components/LinkifyPage"
import HrPage from "../pages/components/HrPage"
import ImagePage from "../pages/components/ImagePage"
import VideoPage from "../pages/components/VideoPage"
import YoutubePage from "../pages/components/YoutubePage"
import AvatarPage from "../pages/components/AvatarPage"
import LoaderPage from "../pages/components/LoaderPage"
import ButtonPage from "../pages/components/ButtonPage"
import ButtonIconPage from "../pages/components/ButtonIconPage"
import BurgerPage from "../pages/components/BurgerPage"
import ButtonGroupPage from "../pages/components/ButtonGroupPage"
import TagPage from "../pages/components/TagPage"
import TruncatePage from "../pages/components/TruncatePage"
import CardPage from "../pages/components/CardPage"
import BadgePage from "../pages/components/BadgePage"
import TooltipPage from "../pages/components/TooltipPage"
import InputPage from "../pages/components/InputPage"
import InputImagePage from "../pages/components/InputImagePage"
import InputCheckPage from "../pages/components/InputCheckPage"
import InputPhonePage from "../pages/components/InputPhonePage"
import InputCounterPage from "../pages/components/InputCounterPage"
import InputSliderPage from "../pages/components/InputSliderPage"
import SelectPage from "../pages/components/SelectPage"
import AutocompletePage from "../pages/components/AutocompletePage"
import RatingPage from "../pages/components/RatingPage"
import DatepickerPage from "../pages/components/DatepickerPage"
import TimepickerPage from "../pages/components/TimepickerPage"
import FormPage from "../pages/components/FormPage"
import ListGroupPage from "../pages/components/ListGroupPage"
import BreadcrumbsPage from "../pages/components/BreadcrumbsPage"
import AccordionPage from "../pages/components/AccordionPage"
import DropdownPage from "../pages/components/DropdownPage"
import ToastPage from "../pages/components/ToastPage"
import AlertPage from "../pages/components/AlertPage"
import ModalPage from "../pages/components/ModalPage"
import PaginationPage from "../pages/components/PaginationPage"
import CustomPaginationPage from "../pages/components/CustomPaginationPage"
import PaginatorPage from "../pages/components/PaginatorPage"
import CustomPaginatorPage from "../pages/components/CustomPaginatorPage"
import StepperPage from "../pages/components/StepperPage"
import ProgressBarPage from "../pages/components/ProgressBarPage"
import ProgressCirclePage from "../pages/components/ProgressCirclePage"
import TabsPage from "../pages/components/TabsPage"
import SlideshowPage from "../pages/components/SlideshowPage"
import CoverPage from "../pages/components/CoverPage"
import TablePage from "../pages/components/TablePage"
import PageLoadingPage from "../pages/components/PageLoadingPage"
import StickyPage from "../pages/components/StickyPage"
import MessagingPage from "../pages/components/MessagingPage"
import MarkdownEditorPage from "../pages/components/MarkdownEditorPage"
import MarkdownContainerPage from "../pages/components/MarkdownContainerPage"
import CodeContainerPage from "../pages/components/CodeContainerPage"
import FadePage from "../pages/components/FadePage"
import BackToTopPage from "../pages/components/BackToTopPage"
import HeaderPage from "../pages/components/HeaderPage"
import IconMenuPage from "../pages/components/IconMenuPage"
import FooterPage from "../pages/components/FooterPage"
import HelmetPage from "../pages/components/HelmetPage"

import HelpersPage from "../pages/helpers/HelpersPage"
import SrOnlyPage from "../pages/helpers/SrOnlyPage"
import VariablesPage from "../pages/helpers/VariablesPage"
import MixinsPage from "../pages/helpers/MixinsPage"
import JsUtilsPage from "../pages/helpers/JsUtilsPage"
import OptionsMarkdownPage from "../pages/helpers/OptionsMarkdownPage"
import ComponentsPropsPage from "../pages/helpers/ComponentsPropsPage"
import HooksPage from "../pages/helpers/HooksPage"

export type RouteType = {
    path: string
    element: JSX.Element
}

export const router: RouteType[] = [
    { path: "/", element: <Homepage /> },
    // { path: "/generate", element: <Generate /> },
    { path: "/styled", element: <StyledFixes /> },

    { path: "/colors", element: <ColorsPage /> },
    { path: "/text", element: <TextPage /> },
    { path: "/shadows", element: <ShadowsPage /> },
    { path: "/radiuses", element: <RadiusesPage /> },
    { path: "/theme-provider", element: <ThemeProviderPage /> },

    { path: "/container", element: <ContainerPage /> },
    { path: "/section", element: <SectionPage /> },
    { path: "/spacers", element: <SpacersPage /> },
    { path: "/grid", element: <GridPage /> },
    { path: "/flexbox", element: <FlexboxPage /> },
    { path: "/masonry", element: <MasonryPage /> },

    { path: "/skeleton", element: <SkeletonPage /> },
    { path: "/icon", element: <IconPage /> },
    { path: "/key", element: <KeyPage /> },
    { path: "/text-icon", element: <TextIconPage /> },
    { path: "/highlight", element: <HighlightPage /> },
    { path: "/linkify", element: <LinkifyPage /> },
    { path: "/hr", element: <HrPage /> },
    { path: "/image", element: <ImagePage /> },
    { path: "/video", element: <VideoPage /> },
    { path: "/youtube", element: <YoutubePage /> },
    { path: "/avatar", element: <AvatarPage /> },
    { path: "/loader", element: <LoaderPage /> },
    { path: "/button", element: <ButtonPage /> },
    { path: "/button-icon", element: <ButtonIconPage /> },
    { path: "/burger", element: <BurgerPage /> },
    { path: "/button-group", element: <ButtonGroupPage /> },
    { path: "/tag", element: <TagPage /> },
    { path: "/truncate", element: <TruncatePage /> },
    { path: "/card", element: <CardPage /> },
    { path: "/badge", element: <BadgePage /> },
    { path: "/tooltip", element: <TooltipPage /> },
    { path: "/input", element: <InputPage /> },
    { path: "/input-image", element: <InputImagePage /> },
    { path: "/input-check", element: <InputCheckPage /> },
    { path: "/input-phone", element: <InputPhonePage /> },
    { path: "/input-counter", element: <InputCounterPage /> },
    { path: "/input-slider", element: <InputSliderPage /> },
    { path: "/select", element: <SelectPage /> },
    { path: "/autocomplete", element: <AutocompletePage /> },
    { path: "/rating", element: <RatingPage /> },
    { path: "/datepicker", element: <DatepickerPage /> },
    { path: "/timepicker", element: <TimepickerPage /> },
    { path: "/form", element: <FormPage /> },
    { path: "/list-group", element: <ListGroupPage /> },
    { path: "/breadcrumbs", element: <BreadcrumbsPage /> },
    { path: "/accordion", element: <AccordionPage /> },
    { path: "/dropdown", element: <DropdownPage /> },
    { path: "/toast", element: <ToastPage /> },
    { path: "/alert", element: <AlertPage /> },
    { path: "/modal", element: <ModalPage /> },
    { path: "/pagination", element: <PaginationPage /> },
    { path: "/custom-pagination", element: <CustomPaginationPage /> },
    { path: "/paginator", element: <PaginatorPage /> },
    { path: "/custom-paginator", element: <CustomPaginatorPage /> },
    { path: "/stepper", element: <StepperPage /> },
    { path: "/progress-bar", element: <ProgressBarPage /> },
    { path: "/progress-circle", element: <ProgressCirclePage /> },
    { path: "/tabs", element: <TabsPage /> },
    { path: "/slideshow", element: <SlideshowPage /> },
    { path: "/cover", element: <CoverPage /> },
    { path: "/table", element: <TablePage /> },
    { path: "/page-loading", element: <PageLoadingPage /> },
    { path: "/sticky", element: <StickyPage /> },
    { path: "/messaging", element: <MessagingPage /> },
    { path: "/markdown-editor", element: <MarkdownEditorPage /> },
    { path: "/markdown-container", element: <MarkdownContainerPage /> },
    { path: "/code-container", element: <CodeContainerPage /> },
    { path: "/fade", element: <FadePage /> },
    { path: "/back-to-top", element: <BackToTopPage /> },
    { path: "/header", element: <HeaderPage /> },
    { path: "/icon-menu", element: <IconMenuPage /> },
    { path: "/footer", element: <FooterPage /> },
    { path: "/helmet", element: <HelmetPage /> },

    { path: "/helpers", element: <HelpersPage /> },
    { path: "/sr-only", element: <SrOnlyPage /> },
    { path: "/variables", element: <VariablesPage /> },
    { path: "/mixins", element: <MixinsPage /> },
    { path: "/js-utils", element: <JsUtilsPage /> },
    { path: "/options-markdown", element: <OptionsMarkdownPage /> },
    { path: "/component-props", element: <ComponentsPropsPage /> },
    { path: "/hooks", element: <HooksPage /> },
]
