var t = setTimeout(function () { }, 0);

var editor = ace.edit("editor");
editor.setOptions({
    fontSize: "10px",
    theme: "ace/theme/monokai",
    mode: "ace/mode/typescript",
    tabSize: 4,
    useSoftTabs: true
});

editor.getSession().on("change", function () { clearTimeout(t), t = setTimeout(function () { updateOutput() }, 200) })

function updateOutput(e) {
    setTimeout(
        function () {
            var source = editor.getValue();
            var result = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } });
            //console.log(JSON.stringify(result));
            if (eval(result.outputText, this), pdfService !== undefined) {
                // pdfService.doc.setPr;
                var output = pdfService.createPdf();
                document.querySelector(".preview-pane").setAttribute("src", output)
            }
        }
        , 100);
}

updateOutput();