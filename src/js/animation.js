document.addEventListener("DOMContentLoaded", () => {
	const elements = document.querySelectorAll(".animate-fade");

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.remove("animate-fade-down");
					entry.target.classList.add("animate-duration-[1500ms]");
					entry.target.classList.add("animate-fade-up");
				} else {
					// Adiciona animação de saída
					entry.target.classList.remove("animate-fade-up");
					entry.target.classList.add("animate-fade-down");
				}
			});
		},
		{ threshold: 0.1 }
	);

	elements.forEach((el) => {
		el.classList.add("opacity-0");
		observer.observe(el);
	});
});
