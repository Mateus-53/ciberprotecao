const buttons = document.querySelectorAll(".dropdownBtn"),
	icons = document.querySelectorAll(".dropdownBtn > svg"),
	dropdownsInfo = document.querySelectorAll(".dropdownInfo");

for (let i = 0; i < dropdownsInfo.length; i++) {
	buttons[i].addEventListener("click", () => {
		icons[i].classList.toggle("rotate-0");
		icons[i].classList.toggle("rotate-180");
		dropdownsInfo[i].classList.toggle("opacity-0");
		dropdownsInfo[i].classList.toggle("opacity-100");
	});
}
