document.addEventListener("wheel", (event) => {
	const sections = document.querySelectorAll("section");
	const current = Math.round(window.scrollY / window.innerHeight);
	if (event.deltaY > 0 && current < sections.length - 1) {
		sections[current + 1].scrollIntoView({ behavior: "smooth" });
	} else if (event.deltaY < 0 && current > 0) {
		sections[current - 1].scrollIntoView({ behavior: "smooth" });
	}
});
