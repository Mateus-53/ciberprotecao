const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
	if (window.scrollY > 150) {
		backToTopBtn.classList.remove("hidden");
		backToTopBtn.classList.add("flex");
	} else {
		backToTopBtn.classList.add("hidden");
		backToTopBtn.classList.remove("flex");
	}
});

backToTopBtn.addEventListener("click", () =>{
	window.scrollTo(0,0)
})
