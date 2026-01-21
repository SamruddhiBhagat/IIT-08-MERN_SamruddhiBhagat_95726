function updateText() {
    let input = document.getElementById("inputText").value;
    let paragraph = document.getElementById("para");
    let button = document.getElementById("btn");

    paragraph.innerText = input;

    paragraph.style.color = "green";

    button.innerText = "Updated";

    button.style.backgroundColor = "purple";
}
