function selectLanguage(lang) {
    let data;
    if (lang === "java") {
        function javaCompiler() {
            // return "Java Compiler has been selected.";
            console.log("Java Compiler has been selected.");
        }
        data = javaCompiler();
    }
    else if (lang === "c") {
        function cCompiler() {
            console.log("C Compiler has been selected.");

        }
        data = cCompiler();
    }
    else {
        data = "Selected lang dos not match...";
        console.log("Selected lang dos not match...");
        

    }

}
selectLanguage("c");
selectLanguage("java");
selectLanguage("python");
selectLanguage();