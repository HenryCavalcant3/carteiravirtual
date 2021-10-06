$("#user-log").on("click", () => {
    setTimeout(() => {
        $("#acess").toggleClass("n");
        $("#home").toggleClass("n");
    }, 200);
});
$("#btn-header-back").on("click", () => {
    setTimeout(() => {
        $("#acess").toggleClass("n");
        $("#home").toggleClass("n");
    }, 200);
});
$("#btn-acess-info").on("click", () => {
    setTimeout(() => {
        $("#pop").toggleClass("p");
    }, 200);
});
$("#pop-header-close").on("click", () => {
    setTimeout(() => {
        $("#pop").toggleClass("p");
    }, 200);
});
$("#pop-btn-cancel").on("click", () => {
    setTimeout(() => {
        $("#pop").toggleClass("p");
    }, 200);
});