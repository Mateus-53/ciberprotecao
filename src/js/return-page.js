const previousPageBtn = document.getElementById("previousPageBtn");

previousPageBtn.addEventListener("click", () => {
    if(document.referrer.includes("/index.html")){
        window.history.back();
    } else{
        window.location.href = "/index.html";
    }
});
