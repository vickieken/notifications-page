const notificationNumEl = document.querySelector(".notification-num");

const markAllBtn = document.querySelector(".mark-read-btn")

const noRedDots = document.querySelectorAll(".name");

const subContents = document.querySelectorAll(".sub-content");

console.log(subContents);

markAllBtn.addEventListener("click", ()=> {
    subContents.forEach(subContent => {
        subContent.classList.add("read")
    });

    notificationNumEl.innerHTML = 0;

    noRedDots.forEach(noRedDot => {
        noRedDot.classList.add("not")
    });
})