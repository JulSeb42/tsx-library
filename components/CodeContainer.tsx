/*=============================================== CodeContainer ===============================================*/

/*==================== Imports ====================*/

import React, { useState } from "react"
import styled from "styled-components"
import SyntaxHighlighter from "react-syntax-highlighter"
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs"

import Variables from "./Variables"
import Mixins from "./Mixins"
import Icon from "./Icon"
import ClipboardIcon from "../icons/ClipboardIcon"
import CheckIcon from "../icons/CheckIcon"

/*==================== Component ====================*/

const CodeContainer = ({
    children,
    language = "javascript",
    options = {
        copyButton: true,
    },
    ...props
}: Props) => {
    const [hasCopied, setHasCopied] = useState(false)

    const copyToClipboard = () => {
        navigator.clipboard.writeText(children)

        setHasCopied(true)

        setTimeout(() => setHasCopied(false), 1000)
    }

    return (
        <Container>
            <Code language={language} style={options?.style || atomOneDark} {...props}>
                {children}
            </Code>

            {(options?.copyButton || options?.iconCopy || options?.iconCopied) && (
                <Button $hasCopied={hasCopied} onClick={copyToClipboard}>
                    {hasCopied ? (
                        options?.iconCopied ? (
                            <Icon src={options.iconCopied} size={24} />
                        ) : (
                            <CheckIcon size={24} />
                        )
                    ) : options?.iconCopy ? (
                        <Icon src={options.iconCopy} size={24} />
                    ) : (
                        <ClipboardIcon size={24} />
                    )}
                </Button>
            )}
        </Container>
    )
}

export default CodeContainer

/*==================== Types ====================*/

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    language?:
        | "oneC (1c)"
        | "abnf"
        | "accesslog"
        | "actionscript"
        | "ada"
        | "angelscript"
        | "apache"
        | "applescript"
        | "arcade"
        | "arduino"
        | "armasm"
        | "asciidoc"
        | "aspectj"
        | "autohotkey"
        | "autoit"
        | "avrasm"
        | "awk"
        | "axapta"
        | "bash"
        | "basic"
        | "bnf"
        | "brainfuck"
        | "cLike (c-like)"
        | "c"
        | "cal"
        | "capnproto"
        | "ceylon"
        | "clean"
        | "clojureRepl (clojure-repl)"
        | "clojure"
        | "cmake"
        | "coffeescript"
        | "coq"
        | "cos"
        | "cpp"
        | "crmsh"
        | "crystal"
        | "csharp"
        | "csp"
        | "css"
        | "d"
        | "dart"
        | "delphi"
        | "diff"
        | "django"
        | "dns"
        | "dockerfile"
        | "dos"
        | "dsconfig"
        | "dts"
        | "dust"
        | "ebnf"
        | "elixir"
        | "elm"
        | "erb"
        | "erlangRepl (erlang-repl)"
        | "erlang"
        | "excel"
        | "fix"
        | "flix"
        | "fortran"
        | "fsharp"
        | "gams"
        | "gauss"
        | "gcode"
        | "gherkin"
        | "glsl"
        | "gml"
        | "go"
        | "golo"
        | "gradle"
        | "groovy"
        | "haml"
        | "handlebars"
        | "haskell"
        | "haxe"
        | "hsp"
        | "htmlbars"
        | "http"
        | "hy"
        | "inform7"
        | "ini"
        | "irpf90"
        | "isbl"
        | "java"
        | "javascript"
        | "jbossCli (jboss-cli)"
        | "json"
        | "juliaRepl (julia-repl)"
        | "julia"
        | "kotlin"
        | "lasso"
        | "latex"
        | "ldif"
        | "leaf"
        | "less"
        | "lisp"
        | "livecodeserver"
        | "livescript"
        | "llvm"
        | "lsl"
        | "lua"
        | "makefile"
        | "markdown"
        | "mathematica"
        | "matlab"
        | "maxima"
        | "mel"
        | "mercury"
        | "mipsasm"
        | "mizar"
        | "mojolicious"
        | "monkey"
        | "moonscript"
        | "n1ql"
        | "nginx"
        | "nim"
        | "nix"
        | "nodeRepl (node-repl)"
        | "nsis"
        | "objectivec"
        | "ocaml"
        | "openscad"
        | "oxygene"
        | "parser3"
        | "perl"
        | "pf"
        | "pgsql"
        | "phpTemplate (php-template)"
        | "php"
        | "plaintext"
        | "pony"
        | "powershell"
        | "processing"
        | "profile"
        | "prolog"
        | "properties"
        | "protobuf"
        | "puppet"
        | "purebasic"
        | "pythonRepl (python-repl)"
        | "python"
        | "q"
        | "qml"
        | "r"
        | "reasonml"
        | "rib"
        | "roboconf"
        | "routeros"
        | "rsl"
        | "ruby"
        | "ruleslanguage"
        | "rust"
        | "sas"
        | "scala"
        | "scheme"
        | "scilab"
        | "scss"
        | "shell"
        | "smali"
        | "smalltalk"
        | "sml"
        | "sqf"
        | "sql"
        | "sqlMore (sql_more)"
        | "stan"
        | "stata"
        | "step21"
        | "stylus"
        | "subunit"
        | "swift"
        | "taggerscript"
        | "tap"
        | "tcl"
        | "thrift"
        | "tp"
        | "twig"
        | "typescript"
        | "vala"
        | "vbnet"
        | "vbscriptHtml (vbscript-html)"
        | "vbscript"
        | "verilog"
        | "vhdl"
        | "vim"
        | "x86asm"
        | "xl"
        | "xml"
        | "xquery"
        | "yaml"
        | "zephir"
    children: string
    options?: {
        style?: any
        copyButton?: boolean
        iconCopy?: string
        iconCopied?: string
    }
}

interface StyleButton extends React.HTMLAttributes<HTMLButtonElement> {
    $hasCopied: boolean
}

/*==================== Styles ====================*/

const Container = styled.div`
    background-color: ${Variables.Colors.Gray800};
    position: relative;
    overflow-x: scroll;
    padding: ${Variables.Spacers.M};
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
`

const Code = styled(SyntaxHighlighter)`
    background-color: transparent !important;
    font-family: ${Variables.FontFamilies.Code};
    line-height: ${Variables.LineHeights.Code};
    font-size: ${Variables.FontSizes.Small};
    padding: 0 !important;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }

    & > code {
        background-color: transparent !important;
    }
`

const buttonSize = 32

const Button = styled.button<StyleButton>`
    width: ${buttonSize}px;
    height: ${buttonSize}px;
    border-radius: ${Variables.Radiuses.Circle};
    padding: 0;
    border: none;
    ${Mixins.Flexbox({
        $alignItems: "center",
        $justifyContent: "center",
    })};
    position: absolute;
    right: ${Variables.Spacers.M};
    top: 12px;
    background-color: ${({ $hasCopied }) => ($hasCopied ? Variables.Colors.Success500 : Variables.Colors.White)};
    color: ${({ $hasCopied }) => ($hasCopied ? Variables.Colors.White : Variables.Colors.Primary500)};
    transition: ${Variables.Transitions.Short};

    @media ${Variables.Breakpoints.Hover} {
        &:hover {
            background-color: ${({ $hasCopied }) =>
                $hasCopied ? Variables.Colors.Success300 : Variables.Colors.Gray300};
        }

        &:active {
            background-color: ${({ $hasCopied }) =>
                $hasCopied ? Variables.Colors.Success600 : Variables.Colors.Gray100};
        }
    }
`
