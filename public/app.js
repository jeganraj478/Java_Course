let input = document.querySelector("input");
let addBtn = document.querySelector("#addButton");
let resetBtn = document.querySelector("#resetButton");
let bucketlist = document.querySelector("#about");

addBtn.addEventListener('click', () => {
    if (input.value != "") {
        let newEl = document.createElement('div');
        newEl.setAttribute("id", "Bucket-list");
        newEl.innerText = input.value;
        bucketlist.appendChild(newEl);
    }
    input.value = "";

})

resetBtn.addEventListener('click', () => {
    let removeEl = document.querySelectorAll("#Bucket-list");
    if (removeEl) {
        removeEl.forEach(element => {
            element.remove();
        });
    }
})