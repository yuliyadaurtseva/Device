var openMap = document.querySelector(".map");
var popupMap = document.querySelector(".modal-map");
var closeMap = popupMap.querySelector(".btn-close");

openMap.addEventListener("click", function (evt) {
    popupMap.classList.add("modal-show");
})

closeMap.addEventListener("click", function (evt) {
    popupMap.classList.remove("modal-show");
})

document.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (popupMap.classList.contains("modal-show")) {
            popupMap.classList.remove("modal-show")
        }
    }
})

var openWrite = document.querySelector(".btn-write-us");
var popupWrite = document.querySelector(".modal-write-us");
var closeWrite = popupWrite.querySelector(".btn-close");

openWrite.addEventListener("click", function (evt) {
    popupWrite.classList.add("modal-show");
})

closeWrite.addEventListener("click", function (evt) {
    popupWrite.classList.remove("modal-show");
})

document.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (popupWrite.classList.contains("modal-show")) {
            popupWrite.classList.remove("modal-show")
        }
    }
})
