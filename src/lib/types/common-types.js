"use strict";
/*=============================================== Common types ===============================================*/
exports.__esModule = true;
/*==================== Colors ====================*/
/* Library colors */
var libColors;
(function (libColors) {
    libColors[libColors["black"] = 0] = "black";
    libColors[libColors["white"] = 1] = "white";
    libColors[libColors["gray-50"] = 2] = "gray-50";
    libColors[libColors["gray-100"] = 3] = "gray-100";
    libColors[libColors["gray-200"] = 4] = "gray-200";
    libColors[libColors["gray-300"] = 5] = "gray-300";
    libColors[libColors["gray-400"] = 6] = "gray-400";
    libColors[libColors["gray-500"] = 7] = "gray-500";
    libColors[libColors["gray-600"] = 8] = "gray-600";
    libColors[libColors["gray-700"] = 9] = "gray-700";
    libColors[libColors["gray-800"] = 10] = "gray-800";
    libColors[libColors["gray-900"] = 11] = "gray-900";
    libColors[libColors["primary-50"] = 12] = "primary-50";
    libColors[libColors["primary-100"] = 13] = "primary-100";
    libColors[libColors["primary-200"] = 14] = "primary-200";
    libColors[libColors["primary-300"] = 15] = "primary-300";
    libColors[libColors["primary-400"] = 16] = "primary-400";
    libColors[libColors["primary-500"] = 17] = "primary-500";
    libColors[libColors["primary-600"] = 18] = "primary-600";
    libColors[libColors["primary-700"] = 19] = "primary-700";
    libColors[libColors["primary-800"] = 20] = "primary-800";
    libColors[libColors["primary-900"] = 21] = "primary-900";
    libColors[libColors["secondary-50"] = 22] = "secondary-50";
    libColors[libColors["secondary-100"] = 23] = "secondary-100";
    libColors[libColors["secondary-200"] = 24] = "secondary-200";
    libColors[libColors["secondary-300"] = 25] = "secondary-300";
    libColors[libColors["secondary-400"] = 26] = "secondary-400";
    libColors[libColors["secondary-500"] = 27] = "secondary-500";
    libColors[libColors["secondary-600"] = 28] = "secondary-600";
    libColors[libColors["secondary-700"] = 29] = "secondary-700";
    libColors[libColors["secondary-800"] = 30] = "secondary-800";
    libColors[libColors["secondary-900"] = 31] = "secondary-900";
    libColors[libColors["success-50"] = 32] = "success-50";
    libColors[libColors["success-100"] = 33] = "success-100";
    libColors[libColors["success-200"] = 34] = "success-200";
    libColors[libColors["success-300"] = 35] = "success-300";
    libColors[libColors["success-400"] = 36] = "success-400";
    libColors[libColors["success-500"] = 37] = "success-500";
    libColors[libColors["success-600"] = 38] = "success-600";
    libColors[libColors["success-700"] = 39] = "success-700";
    libColors[libColors["success-800"] = 40] = "success-800";
    libColors[libColors["success-900"] = 41] = "success-900";
    libColors[libColors["danger-50"] = 42] = "danger-50";
    libColors[libColors["danger-100"] = 43] = "danger-100";
    libColors[libColors["danger-200"] = 44] = "danger-200";
    libColors[libColors["danger-300"] = 45] = "danger-300";
    libColors[libColors["danger-400"] = 46] = "danger-400";
    libColors[libColors["danger-500"] = 47] = "danger-500";
    libColors[libColors["danger-600"] = 48] = "danger-600";
    libColors[libColors["danger-700"] = 49] = "danger-700";
    libColors[libColors["danger-800"] = 50] = "danger-800";
    libColors[libColors["danger-900"] = 51] = "danger-900";
    libColors[libColors["warning-50"] = 52] = "warning-50";
    libColors[libColors["warning-100"] = 53] = "warning-100";
    libColors[libColors["warning-200"] = 54] = "warning-200";
    libColors[libColors["warning-300"] = 55] = "warning-300";
    libColors[libColors["warning-400"] = 56] = "warning-400";
    libColors[libColors["warning-500"] = 57] = "warning-500";
    libColors[libColors["warning-600"] = 58] = "warning-600";
    libColors[libColors["warning-700"] = 59] = "warning-700";
    libColors[libColors["warning-800"] = 60] = "warning-800";
    libColors[libColors["warning-900"] = 61] = "warning-900";
    libColors[libColors["currentColor"] = 62] = "currentColor";
    libColors[libColors["transparent"] = 63] = "transparent";
    libColors[libColors["background"] = 64] = "background";
    libColors[libColors["font"] = 65] = "font";
})(libColors || (libColors = {}));
/* Colors hover */
var colorsHover;
(function (colorsHover) {
    colorsHover[colorsHover["primary"] = 0] = "primary";
    colorsHover[colorsHover["secondary"] = 1] = "secondary";
    colorsHover[colorsHover["success"] = 2] = "success";
    colorsHover[colorsHover["danger"] = 3] = "danger";
    colorsHover[colorsHover["warning"] = 4] = "warning";
    colorsHover[colorsHover["white"] = 5] = "white";
    colorsHover[colorsHover["font"] = 6] = "font";
    colorsHover[colorsHover["background"] = 7] = "background";
})(colorsHover || (colorsHover = {}));
/* Colors input */
var colorsInput;
(function (colorsInput) {
    colorsInput[colorsInput["gray"] = 0] = "gray";
})(colorsInput || (colorsInput = {}));
/* Colors short */
var colorsShort;
(function (colorsShort) {
    colorsShort[colorsShort["black"] = 0] = "black";
})(colorsShort || (colorsShort = {}));
/* Overlays */
var overlays;
(function (overlays) {
    overlays[overlays["overlay-black-50"] = 0] = "overlay-black-50";
    overlays[overlays["overlay-black-80"] = 1] = "overlay-black-80";
    overlays[overlays["overlay-white-50"] = 2] = "overlay-white-50";
    overlays[overlays["overlay-white-80"] = 3] = "overlay-white-80";
    overlays[overlays["overlay-gradient-black"] = 4] = "overlay-gradient-black";
    overlays[overlays["overlay-gradient-white"] = 5] = "overlay-gradient-white";
})(overlays || (overlays = {}));
/*==================== Font sizes ====================*/
var fontSizes;
(function (fontSizes) {
    fontSizes[fontSizes["display-h1"] = 0] = "display-h1";
    fontSizes[fontSizes["display-h2"] = 1] = "display-h2";
    fontSizes[fontSizes["display-h3"] = 2] = "display-h3";
    fontSizes[fontSizes["display-h4"] = 3] = "display-h4";
    fontSizes[fontSizes["display-h5"] = 4] = "display-h5";
    fontSizes[fontSizes["title-h1"] = 5] = "title-h1";
    fontSizes[fontSizes["title-h2"] = 6] = "title-h2";
    fontSizes[fontSizes["title-h3"] = 7] = "title-h3";
    fontSizes[fontSizes["title-h4"] = 8] = "title-h4";
    fontSizes[fontSizes["title-h5"] = 9] = "title-h5";
    fontSizes[fontSizes["title-h6"] = 10] = "title-h6";
    fontSizes[fontSizes["body"] = 11] = "body";
    fontSizes[fontSizes["small"] = 12] = "small";
})(fontSizes || (fontSizes = {}));
/*==================== Font weights ====================*/
var weights;
(function (weights) {
    weights[weights["regular"] = 0] = "regular";
    weights[weights["bold"] = 1] = "bold";
    weights[weights["black"] = 2] = "black";
})(weights || (weights = {}));
/*==================== Shadows ====================*/
var shadows;
(function (shadows) {
    shadows[shadows["xxl"] = 0] = "xxl";
    shadows[shadows["xl"] = 1] = "xl";
    shadows[shadows["l"] = 2] = "l";
    shadows[shadows["m"] = 3] = "m";
    shadows[shadows["s"] = 4] = "s";
    shadows[shadows["xs"] = 5] = "xs";
    shadows[shadows["none"] = 6] = "none";
})(shadows || (shadows = {}));
/*==================== Radiuses ====================*/
var radiuses;
(function (radiuses) {
    radiuses[radiuses["xxl"] = 0] = "xxl";
    radiuses[radiuses["xl"] = 1] = "xl";
    radiuses[radiuses["l"] = 2] = "l";
    radiuses[radiuses["m"] = 3] = "m";
    radiuses[radiuses["s"] = 4] = "s";
    radiuses[radiuses["xs"] = 5] = "xs";
    radiuses[radiuses["round"] = 6] = "round";
    radiuses[radiuses["circle"] = 7] = "circle";
    radiuses[radiuses["none"] = 8] = "none";
})(radiuses || (radiuses = {}));
/*==================== Text align ====================*/
var textAlign;
(function (textAlign) {
    textAlign[textAlign["left"] = 0] = "left";
    textAlign[textAlign["center"] = 1] = "center";
    textAlign[textAlign["right"] = 2] = "right";
    textAlign[textAlign["justify"] = 3] = "justify";
    textAlign[textAlign["inherit"] = 4] = "inherit";
    textAlign[textAlign["initial"] = 5] = "initial";
    textAlign[textAlign["revert"] = 6] = "revert";
    textAlign[textAlign["revert-layer"] = 7] = "revert-layer";
    textAlign[textAlign["unset"] = 8] = "unset";
})(textAlign || (textAlign = {}));
/*==================== Spacers ====================*/
var spacers;
(function (spacers) {
    spacers[spacers["xxl"] = 0] = "xxl";
    spacers[spacers["xl"] = 1] = "xl";
    spacers[spacers["l"] = 2] = "l";
    spacers[spacers["m"] = 3] = "m";
    spacers[spacers["s"] = 4] = "s";
    spacers[spacers["xs"] = 5] = "xs";
    spacers[spacers["xxs"] = 6] = "xxs";
    spacers[spacers["none"] = 7] = "none";
})(spacers || (spacers = {}));
/*==================== Custom position ====================*/
var positions;
(function (positions) {
    positions[positions["relative"] = 0] = "relative";
    positions[positions["absolute"] = 1] = "absolute";
    positions[positions["fixed"] = 2] = "fixed";
})(positions || (positions = {}));
/*==================== Grid ====================*/
/* Justify items */
var gridJustifyItems;
(function (gridJustifyItems) {
    gridJustifyItems[gridJustifyItems["start"] = 0] = "start";
    gridJustifyItems[gridJustifyItems["end"] = 1] = "end";
    gridJustifyItems[gridJustifyItems["center"] = 2] = "center";
    gridJustifyItems[gridJustifyItems["stretch"] = 3] = "stretch";
})(gridJustifyItems || (gridJustifyItems = {}));
/* Align items */
var gridAlignItems;
(function (gridAlignItems) {
    gridAlignItems[gridAlignItems["start"] = 0] = "start";
    gridAlignItems[gridAlignItems["end"] = 1] = "end";
    gridAlignItems[gridAlignItems["center"] = 2] = "center";
    gridAlignItems[gridAlignItems["stretch"] = 3] = "stretch";
})(gridAlignItems || (gridAlignItems = {}));
/* Justify content */
var gridJustifyContent;
(function (gridJustifyContent) {
    gridJustifyContent[gridJustifyContent["start"] = 0] = "start";
    gridJustifyContent[gridJustifyContent["end"] = 1] = "end";
    gridJustifyContent[gridJustifyContent["center"] = 2] = "center";
    gridJustifyContent[gridJustifyContent["stretch"] = 3] = "stretch";
    gridJustifyContent[gridJustifyContent["space-around"] = 4] = "space-around";
    gridJustifyContent[gridJustifyContent["space-between"] = 5] = "space-between";
    gridJustifyContent[gridJustifyContent["space-evenly"] = 6] = "space-evenly";
})(gridJustifyContent || (gridJustifyContent = {}));
/* Align content */
var gridAlignContent;
(function (gridAlignContent) {
    gridAlignContent[gridAlignContent["start"] = 0] = "start";
    gridAlignContent[gridAlignContent["end"] = 1] = "end";
    gridAlignContent[gridAlignContent["center"] = 2] = "center";
    gridAlignContent[gridAlignContent["stretch"] = 3] = "stretch";
    gridAlignContent[gridAlignContent["space-around"] = 4] = "space-around";
    gridAlignContent[gridAlignContent["space-between"] = 5] = "space-between";
    gridAlignContent[gridAlignContent["space-evenly"] = 6] = "space-evenly";
})(gridAlignContent || (gridAlignContent = {}));
/*==================== Flexbox ====================*/
/* Direction */
var flexDirection;
(function (flexDirection) {
    flexDirection[flexDirection["row"] = 0] = "row";
    flexDirection[flexDirection["row-reverse"] = 1] = "row-reverse";
    flexDirection[flexDirection["column"] = 2] = "column";
    flexDirection[flexDirection["column-reverse"] = 3] = "column-reverse";
})(flexDirection || (flexDirection = {}));
/* Wrap */
var flexWrap;
(function (flexWrap) {
    flexWrap[flexWrap["nowrap"] = 0] = "nowrap";
    flexWrap[flexWrap["wrap"] = 1] = "wrap";
    flexWrap[flexWrap["wrap-reverse"] = 2] = "wrap-reverse";
})(flexWrap || (flexWrap = {}));
/* Justify content */
var flexJustifyContent;
(function (flexJustifyContent) {
    flexJustifyContent[flexJustifyContent["flex-start"] = 0] = "flex-start";
    flexJustifyContent[flexJustifyContent["flex-end"] = 1] = "flex-end";
    flexJustifyContent[flexJustifyContent["center"] = 2] = "center";
    flexJustifyContent[flexJustifyContent["space-between"] = 3] = "space-between";
    flexJustifyContent[flexJustifyContent["space-around"] = 4] = "space-around";
    flexJustifyContent[flexJustifyContent["space-evenly"] = 5] = "space-evenly";
})(flexJustifyContent || (flexJustifyContent = {}));
/* Align items */
var flexAlignItems;
(function (flexAlignItems) {
    flexAlignItems[flexAlignItems["stretch"] = 0] = "stretch";
    flexAlignItems[flexAlignItems["flex-start"] = 1] = "flex-start";
    flexAlignItems[flexAlignItems["flex-end"] = 2] = "flex-end";
    flexAlignItems[flexAlignItems["center"] = 3] = "center";
    flexAlignItems[flexAlignItems["baseline"] = 4] = "baseline";
})(flexAlignItems || (flexAlignItems = {}));
/* Justify items */
var flexJustifyItems;
(function (flexJustifyItems) {
    flexJustifyItems[flexJustifyItems["normal"] = 0] = "normal";
    flexJustifyItems[flexJustifyItems["stretch"] = 1] = "stretch";
    flexJustifyItems[flexJustifyItems["baseline"] = 2] = "baseline";
    flexJustifyItems[flexJustifyItems["center"] = 3] = "center";
    flexJustifyItems[flexJustifyItems["start"] = 4] = "start";
    flexJustifyItems[flexJustifyItems["end"] = 5] = "end";
    flexJustifyItems[flexJustifyItems["flex-start"] = 6] = "flex-start";
    flexJustifyItems[flexJustifyItems["flex-end"] = 7] = "flex-end";
    flexJustifyItems[flexJustifyItems["self-start"] = 8] = "self-start";
    flexJustifyItems[flexJustifyItems["self-end"] = 9] = "self-end";
    flexJustifyItems[flexJustifyItems["left"] = 10] = "left";
    flexJustifyItems[flexJustifyItems["right"] = 11] = "right";
    flexJustifyItems[flexJustifyItems["legacy"] = 12] = "legacy";
})(flexJustifyItems || (flexJustifyItems = {}));
/* Align content */
var flexAlignContent;
(function (flexAlignContent) {
    flexAlignContent[flexAlignContent["flex-start"] = 0] = "flex-start";
    flexAlignContent[flexAlignContent["flex-end"] = 1] = "flex-end";
    flexAlignContent[flexAlignContent["center"] = 2] = "center";
    flexAlignContent[flexAlignContent["space-between"] = 3] = "space-between";
    flexAlignContent[flexAlignContent["space-around"] = 4] = "space-around";
    flexAlignContent[flexAlignContent["space-evenly"] = 5] = "space-evenly";
    flexAlignContent[flexAlignContent["stretch"] = 6] = "stretch";
    flexAlignContent[flexAlignContent["normal"] = 7] = "normal";
})(flexAlignContent || (flexAlignContent = {}));
/*==================== Object fit ====================*/
var objectFit;
(function (objectFit) {
    objectFit[objectFit["contain"] = 0] = "contain";
    objectFit[objectFit["cover"] = 1] = "cover";
    objectFit[objectFit["fill"] = 2] = "fill";
    objectFit[objectFit["none"] = 3] = "none";
    objectFit[objectFit["scale-down"] = 4] = "scale-down";
    objectFit[objectFit["inherit"] = 5] = "inherit";
    objectFit[objectFit["initial"] = 6] = "initial";
    objectFit[objectFit["revert"] = 7] = "revert";
    objectFit[objectFit["revert-layer"] = 8] = "revert-layer";
    objectFit[objectFit["unset"] = 9] = "unset";
})(objectFit || (objectFit = {}));
/*==================== Inputs ====================*/
/* Validation */
var validation;
(function (validation) {
    validation[validation["passed"] = 0] = "passed";
    validation[validation["not-passed"] = 1] = "not-passed";
})(validation || (validation = {}));
/*==================== Cursor ====================*/
var cursors;
(function (cursors) {
    cursors[cursors["alias"] = 0] = "alias";
    cursors[cursors["all-scroll"] = 1] = "all-scroll";
    cursors[cursors["auto"] = 2] = "auto";
    cursors[cursors["cell"] = 3] = "cell";
    cursors[cursors["col-resize"] = 4] = "col-resize";
    cursors[cursors["context-menu"] = 5] = "context-menu";
    cursors[cursors["copy"] = 6] = "copy";
    cursors[cursors["crosshair"] = 7] = "crosshair";
    cursors[cursors["default"] = 8] = "default";
    cursors[cursors["e-resize"] = 9] = "e-resize";
    cursors[cursors["ew-resize"] = 10] = "ew-resize";
    cursors[cursors["grab"] = 11] = "grab";
    cursors[cursors["grabbing"] = 12] = "grabbing";
    cursors[cursors["help"] = 13] = "help";
    cursors[cursors["move"] = 14] = "move";
    cursors[cursors["n-resize"] = 15] = "n-resize";
    cursors[cursors["ne-resize"] = 16] = "ne-resize";
    cursors[cursors["nesw-resize"] = 17] = "nesw-resize";
    cursors[cursors["ns-resize"] = 18] = "ns-resize";
    cursors[cursors["nw-resize"] = 19] = "nw-resize";
    cursors[cursors["nwse-resize"] = 20] = "nwse-resize";
    cursors[cursors["no-drop"] = 21] = "no-drop";
    cursors[cursors["none"] = 22] = "none";
    cursors[cursors["not-allowed"] = 23] = "not-allowed";
    cursors[cursors["pointer"] = 24] = "pointer";
    cursors[cursors["progress"] = 25] = "progress";
    cursors[cursors["row-resize"] = 26] = "row-resize";
    cursors[cursors["s-resize"] = 27] = "s-resize";
    cursors[cursors["se-resize"] = 28] = "se-resize";
    cursors[cursors["sw-resize"] = 29] = "sw-resize";
    cursors[cursors["text"] = 30] = "text";
    cursors[cursors["vertical-text"] = 31] = "vertical-text";
    cursors[cursors["w-resize"] = 32] = "w-resize";
    cursors[cursors["wait"] = 33] = "wait";
    cursors[cursors["zoom-in"] = 34] = "zoom-in";
    cursors[cursors["zoom-out"] = 35] = "zoom-out";
    cursors[cursors["initial"] = 36] = "initial";
    cursors[cursors["inherit"] = 37] = "inherit";
})(cursors || (cursors = {}));
/*==================== Border styles ====================*/
var borderStyles;
(function (borderStyles) {
    borderStyles[borderStyles["dotted"] = 0] = "dotted";
    borderStyles[borderStyles["dashed"] = 1] = "dashed";
    borderStyles[borderStyles["solid"] = 2] = "solid";
    borderStyles[borderStyles["double"] = 3] = "double";
    borderStyles[borderStyles["groove"] = 4] = "groove";
    borderStyles[borderStyles["ridge"] = 5] = "ridge";
    borderStyles[borderStyles["inset"] = 6] = "inset";
    borderStyles[borderStyles["outset"] = 7] = "outset";
    borderStyles[borderStyles["none"] = 8] = "none";
    borderStyles[borderStyles["hidden"] = 9] = "hidden";
})(borderStyles || (borderStyles = {}));
