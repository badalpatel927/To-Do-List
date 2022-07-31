const ToDoItems = document.getElementsByClassName("to_do_items")[0];
const input = document.getElementById("input");
const trashIcon = document.getElementById("trash");
input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addItem();
    }
});
function addItem() {
    if (input.value == '') {
        confirm("Text Box Can't Be Empty");
        document.getElementById('input').focus();
    } else {
        let checkIcon = document.createElement("i");
        let trashIcon = document.createElement("i");
        let divParent = document.createElement("div");
        let divChild = document.createElement("div");
        divParent.className = "item";
        divParent.innerHTML = "<div>" + input.value + "</div>";
        checkIcon.className = "fas fa-check-square";
        checkIcon.style.color = "#454545";
        checkIcon.addEventListener("click", function () {
            if (checkIcon.style.color === 'purple') {
                checkIcon.style.color = '#454545'
                divParent.style.textDecoration = 'none';
            } else {
                checkIcon.style.color = 'blue';
                divParent.style.textDecoration = 'line-through';
            }
        })
        trashIcon.className = "fas fa-trash";
        trashIcon.style.color = "#454545";
        trashIcon.addEventListener("click", function () {
            divParent.remove();
        })
        divChild.appendChild(checkIcon);
        divChild.appendChild(trashIcon);
        divParent.appendChild(divChild);
        ToDoItems.appendChild(divParent);
        input.value = '';
        document.getElementById("input").focus();
    }

}
