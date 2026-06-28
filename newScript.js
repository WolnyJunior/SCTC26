function trocaCor() {
    const div1 = document.getElementById("div-1")
    const div2 = document.getElementById("div-2")
    const div3 = document.getElementById("div-3")

    div1.style.backgroundColor = "blue"
    div2.style.backgroundColor = "yellow"
    div3.style.backgroundColor = "gray"
}

function resetCor() {
    const div1 = document.getElementById("div-1")
    const div2 = document.getElementById("div-2")
    const div3 = document.getElementById("div-3")

    div1.style.backgroundColor = ""
    div2.style.backgroundColor = ""
    div3.style.backgroundColor = ""
}