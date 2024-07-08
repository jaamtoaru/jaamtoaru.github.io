document.addEventListener("DOMContentLoaded",() => {
    const tbl = document.querySelector("#tbl");

    const number = document.querySelector("#number");
    const name = document.querySelector("#name");
    const ward = document.querySelector("#ward");
    const tsukemono = document.querySelector("#tsukemono");

    const btns = document.querySelectorAll(".btn");

    btns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const targetTr = e.target.closest(".tr");
            number.value = targetTr.cells[1].innerText;
            name.value = targetTr.cells[2].innerText;
            ward.value = targetTr.cells[3].innerText;
            tsukemono.value = targetTr.cells[4].innerText;
        })
    })
})