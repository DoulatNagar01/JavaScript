function details(e) {
    e.preventDefault();
    for (let index = 0; index < e.target.length-1; index++) {
        if (e.target[index].type == "checkbox" || e.target[index].type == "radio" ) {
            if (e.target[index].checked) {
                document.writeln(e.target[index].name+" : "+e.target[index].value +"<br>");
            }
        } else{
            document.writeln(e.target[index].name+" : "+e.target[index].value +"<br>");
        }
    }
}
