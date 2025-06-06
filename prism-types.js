/**
 * @typedef {"abap"
 *           | "abnf"
 *           | "actionscript"
 *           | "ada"
 *           | "agda"
 *           | "al"
 *           | "antlr4"
 *           | "apacheconf"
 *           | "apex"
 *           | "apl"
 *           | "applescript"
 *           | "aql"
 *           | "arduino"
 *           | "arff"
 *           | "armasm"
 *           | "arturo"
 *           | "asciidoc"
 *           | "asm6502"
 *           | "asmatmel"
 *           | "aspnet"
 *           | "autohotkey"
 *           | "autoit"
 *           | "avisynth"
 *           | "avro-idl"
 *           | "awk"
 *           | "bash"
 *           | "basic"
 *           | "batch"
 *           | "bbcode"
 *           | "bbj"
 *           | "bicep"
 *           | "birb"
 *           | "bison"
 *           | "bnf"
 *           | "bqn"
 *           | "brainfuck"
 *           | "brightscript"
 *           | "bro"
 *           | "bsl"
 *           | "c"
 *           | "cfscript"
 *           | "chaiscript"
 *           | "cil"
 *           | "cilkc"
 *           | "cilkcpp"
 *           | "clike"
 *           | "clojure"
 *           | "cmake"
 *           | "cobol"
 *           | "coffeescript"
 *           | "concurnas"
 *           | "cooklang"
 *           | "coq"
 *           | "core"
 *           | "cpp"
 *           | "crystal"
 *           | "csharp"
 *           | "cshtml"
 *           | "csp"
 *           | "css-extras"
 *           | "css"
 *           | "csv"
 *           | "cue"
 *           | "cypher"
 *           | "d"
 *           | "dart"
 *           | "dataweave"
 *           | "dax"
 *           | "dhall"
 *           | "diff"
 *           | "django"
 *           | "dns-zone-file"
 *           | "docker"
 *           | "dot"
 *           | "ebnf"
 *           | "editorconfig"
 *           | "eiffel"
 *           | "ejs"
 *           | "elixir"
 *           | "elm"
 *           | "erb"
 *           | "erlang"
 *           | "etlua"
 *           | "excel-formula"
 *           | "factor"
 *           | "false"
 *           | "firestore-security-rules"
 *           | "flow"
 *           | "fortran"
 *           | "fsharp"
 *           | "ftl"
 *           | "gap"
 *           | "gcode"
 *           | "gdscript"
 *           | "gedcom"
 *           | "gettext"
 *           | "gherkin"
 *           | "git"
 *           | "glsl"
 *           | "gml"
 *           | "gn"
 *           | "go-module"
 *           | "go"
 *           | "gradle"
 *           | "graphql"
 *           | "groovy"
 *           | "haml"
 *           | "handlebars"
 *           | "haskell"
 *           | "haxe"
 *           | "hcl"
 *           | "hlsl"
 *           | "hoon"
 *           | "hpkp"
 *           | "hsts"
 *           | "http"
 *           | "ichigojam"
 *           | "icon"
 *           | "icu-message-format"
 *           | "idris"
 *           | "iecst"
 *           | "ignore"
 *           | "inform7"
 *           | "ini"
 *           | "io"
 *           | "j"
 *           | "java"
 *           | "javadoc"
 *           | "javadoclike"
 *           | "javascript"
 *           | "javastacktrace"
 *           | "jexl"
 *           | "jolie"
 *           | "jq"
 *           | "js-extras"
 *           | "js-templates"
 *           | "jsdoc"
 *           | "json"
 *           | "json5"
 *           | "jsonp"
 *           | "jsstacktrace"
 *           | "jsx"
 *           | "julia"
 *           | "keepalived"
 *           | "keyman"
 *           | "kotlin"
 *           | "kumir"
 *           | "kusto"
 *           | "latex"
 *           | "latte"
 *           | "less"
 *           | "lilypond"
 *           | "linker-script"
 *           | "liquid"
 *           | "lisp"
 *           | "livescript"
 *           | "llvm"
 *           | "log"
 *           | "lolcode"
 *           | "lua"
 *           | "magma"
 *           | "makefile"
 *           | "markdown"
 *           | "markup-templating"
 *           | "markup"
 *           | "mata"
 *           | "matlab"
 *           | "maxscript"
 *           | "mel"
 *           | "mermaid"
 *           | "metafont"
 *           | "mizar"
 *           | "mongodb"
 *           | "monkey"
 *           | "moonscript"
 *           | "n1ql"
 *           | "n4js"
 *           | "nand2tetris-hdl"
 *           | "naniscript"
 *           | "nasm"
 *           | "neon"
 *           | "nevod"
 *           | "nginx"
 *           | "nim"
 *           | "nix"
 *           | "nsis"
 *           | "objectivec"
 *           | "ocaml"
 *           | "odin"
 *           | "opencl"
 *           | "openqasm"
 *           | "oz"
 *           | "parigp"
 *           | "parser"
 *           | "pascal"
 *           | "pascaligo"
 *           | "pcaxis"
 *           | "peoplecode"
 *           | "perl"
 *           | "php-extras"
 *           | "php"
 *           | "phpdoc"
 *           | "plant-uml"
 *           | "plsql"
 *           | "powerquery"
 *           | "powershell"
 *           | "processing"
 *           | "prolog"
 *           | "promql"
 *           | "properties"
 *           | "protobuf"
 *           | "psl"
 *           | "pug"
 *           | "puppet"
 *           | "pure"
 *           | "purebasic"
 *           | "purescript"
 *           | "python"
 *           | "q"
 *           | "qml"
 *           | "qore"
 *           | "qsharp"
 *           | "r"
 *           | "racket"
 *           | "reason"
 *           | "regex"
 *           | "rego"
 *           | "renpy"
 *           | "rescript"
 *           | "rest"
 *           | "rip"
 *           | "roboconf"
 *           | "robotframework"
 *           | "ruby"
 *           | "rust"
 *           | "sas"
 *           | "sass"
 *           | "scala"
 *           | "scheme"
 *           | "scss"
 *           | "shell-session"
 *           | "smali"
 *           | "smalltalk"
 *           | "smarty"
 *           | "sml"
 *           | "solidity"
 *           | "solution-file"
 *           | "soy"
 *           | "sparql"
 *           | "splunk-spl"
 *           | "sqf"
 *           | "sql"
 *           | "squirrel"
 *           | "stan"
 *           | "stata"
 *           | "stylus"
 *           | "supercollider"
 *           | "swift"
 *           | "systemd"
 *           | "t4-cs"
 *           | "t4-templating"
 *           | "t4-vb"
 *           | "tap"
 *           | "tcl"
 *           | "textile"
 *           | "toml"
 *           | "tremor"
 *           | "tsx"
 *           | "tt2"
 *           | "turtle"
 *           | "twig"
 *           | "typescript"
 *           | "typoscript"
 *           | "unrealscript"
 *           | "uorazor"
 *           | "uri"
 *           | "v"
 *           | "vala"
 *           | "vbnet"
 *           | "velocity"
 *           | "verilog"
 *           | "vhdl"
 *           | "vim"
 *           | "visual-basic"
 *           | "warpscript"
 *           | "wasm"
 *           | "web-idl"
 *           | "wgsl"
 *           | "wiki"
 *           | "wolfram"
 *           | "wren"
 *           | "xeora"
 *           | "xml-doc"
 *           | "xojo"
 *           | "xquery"
 *           | "yaml"
 *           | "yang"
 *           | "zig"} PrismLanguage
 */
/**
 * @param {string} lang
 * @returns {lang is PrismLanguage}
 */
export function isPrismLanguage(lang) {
  return [
    "abap",
    "abnf",
    "actionscript",
    "ada",
    "agda",
    "al",
    "antlr4",
    "apacheconf",
    "apex",
    "apl",
    "applescript",
    "aql",
    "arduino",
    "arff",
    "armasm",
    "arturo",
    "asciidoc",
    "asm6502",
    "asmatmel",
    "aspnet",
    "autohotkey",
    "autoit",
    "avisynth",
    "avro-idl",
    "awk",
    "bash",
    "basic",
    "batch",
    "bbcode",
    "bbj",
    "bicep",
    "birb",
    "bison",
    "bnf",
    "bqn",
    "brainfuck",
    "brightscript",
    "bro",
    "bsl",
    "c",
    "cfscript",
    "chaiscript",
    "cil",
    "cilkc",
    "cilkcpp",
    "clike",
    "clojure",
    "cmake",
    "cobol",
    "coffeescript",
    "concurnas",
    "cooklang",
    "coq",
    "core",
    "cpp",
    "crystal",
    "csharp",
    "cshtml",
    "csp",
    "css-extras",
    "css",
    "csv",
    "cue",
    "cypher",
    "d",
    "dart",
    "dataweave",
    "dax",
    "dhall",
    "diff",
    "django",
    "dns-zone-file",
    "docker",
    "dot",
    "ebnf",
    "editorconfig",
    "eiffel",
    "ejs",
    "elixir",
    "elm",
    "erb",
    "erlang",
    "etlua",
    "excel-formula",
    "factor",
    "false",
    "firestore-security-rules",
    "flow",
    "fortran",
    "fsharp",
    "ftl",
    "gap",
    "gcode",
    "gdscript",
    "gedcom",
    "gettext",
    "gherkin",
    "git",
    "glsl",
    "gml",
    "gn",
    "go-module",
    "go",
    "gradle",
    "graphql",
    "groovy",
    "haml",
    "handlebars",
    "haskell",
    "haxe",
    "hcl",
    "hlsl",
    "hoon",
    "hpkp",
    "hsts",
    "http",
    "ichigojam",
    "icon",
    "icu-message-format",
    "idris",
    "iecst",
    "ignore",
    "inform7",
    "ini",
    "io",
    "j",
    "java",
    "javadoc",
    "javadoclike",
    "javascript",
    "javastacktrace",
    "jexl",
    "jolie",
    "jq",
    "js-extras",
    "js-templates",
    "jsdoc",
    "json",
    "json5",
    "jsonp",
    "jsstacktrace",
    "jsx",
    "julia",
    "keepalived",
    "keyman",
    "kotlin",
    "kumir",
    "kusto",
    "latex",
    "latte",
    "less",
    "lilypond",
    "linker-script",
    "liquid",
    "lisp",
    "livescript",
    "llvm",
    "log",
    "lolcode",
    "lua",
    "magma",
    "makefile",
    "markdown",
    "markup-templating",
    "markup",
    "mata",
    "matlab",
    "maxscript",
    "mel",
    "mermaid",
    "metafont",
    "mizar",
    "mongodb",
    "monkey",
    "moonscript",
    "n1ql",
    "n4js",
    "nand2tetris-hdl",
    "naniscript",
    "nasm",
    "neon",
    "nevod",
    "nginx",
    "nim",
    "nix",
    "nsis",
    "objectivec",
    "ocaml",
    "odin",
    "opencl",
    "openqasm",
    "oz",
    "parigp",
    "parser",
    "pascal",
    "pascaligo",
    "pcaxis",
    "peoplecode",
    "perl",
    "php-extras",
    "php",
    "phpdoc",
    "plant-uml",
    "plsql",
    "powerquery",
    "powershell",
    "processing",
    "prolog",
    "promql",
    "properties",
    "protobuf",
    "psl",
    "pug",
    "puppet",
    "pure",
    "purebasic",
    "purescript",
    "python",
    "q",
    "qml",
    "qore",
    "qsharp",
    "r",
    "racket",
    "reason",
    "regex",
    "rego",
    "renpy",
    "rescript",
    "rest",
    "rip",
    "roboconf",
    "robotframework",
    "ruby",
    "rust",
    "sas",
    "sass",
    "scala",
    "scheme",
    "scss",
    "shell-session",
    "smali",
    "smalltalk",
    "smarty",
    "sml",
    "solidity",
    "solution-file",
    "soy",
    "sparql",
    "splunk-spl",
    "sqf",
    "sql",
    "squirrel",
    "stan",
    "stata",
    "stylus",
    "supercollider",
    "swift",
    "systemd",
    "t4-cs",
    "t4-templating",
    "t4-vb",
    "tap",
    "tcl",
    "textile",
    "toml",
    "tremor",
    "tsx",
    "tt2",
    "turtle",
    "twig",
    "typescript",
    "typoscript",
    "unrealscript",
    "uorazor",
    "uri",
    "v",
    "vala",
    "vbnet",
    "velocity",
    "verilog",
    "vhdl",
    "vim",
    "visual-basic",
    "warpscript",
    "wasm",
    "web-idl",
    "wgsl",
    "wiki",
    "wolfram",
    "wren",
    "xeora",
    "xml-doc",
    "xojo",
    "xquery",
    "yaml",
    "yang",
    "zig",
  ].includes(lang);
}
/**
 * @typedef {"autolinker"
 *           | "autoloader"
 *           | "command-line"
 *           | "copy-to-clipboard"
 *           | "custom-class"
 *           | "data-uri-highlight"
 *           | "diff-highlight"
 *           | "download-button"
 *           | "file-highlight"
 *           | "filter-highlight-all"
 *           | "highlight-keywords"
 *           | "inline-color"
 *           | "jsonp-highlight"
 *           | "keep-markup"
 *           | "line-highlight"
 *           | "line-numbers"
 *           | "match-braces"
 *           | "normalize-whitespace"
 *           | "previewers"
 *           | "remove-initial-line-feed"
 *           | "show-invisibles"
 *           | "show-language"
 *           | "toolbar"
 *           | "treeview"
 *           | "unescaped-markup"
 *           | "wpd"} PrismPlugin
 */
/**
 * @param {string} plugin
 * @returns {plugin is PrismPlugin}
 */
export function isPrismPlugin(plugin) {
  return [
    "autolinker",
    "autoloader",
    "command-line",
    "copy-to-clipboard",
    "custom-class",
    "data-uri-highlight",
    "diff-highlight",
    "download-button",
    "file-highlight",
    "filter-highlight-all",
    "highlight-keywords",
    "inline-color",
    "jsonp-highlight",
    "keep-markup",
    "line-highlight",
    "line-numbers",
    "match-braces",
    "normalize-whitespace",
    "previewers",
    "remove-initial-line-feed",
    "show-invisibles",
    "show-language",
    "toolbar",
    "treeview",
    "unescaped-markup",
    "wpd",
  ].includes(plugin);
}
