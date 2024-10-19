document.addEventListener("DOMContentLoaded", function () {
	const interactiveElements = document.querySelectorAll(
		".project-tab, .medium-posts-container .post"
	);

	interactiveElements.forEach((tab) => {
		tab.addEventListener("click", function () {
			const link = tab.getAttribute("data-link");
			if (link) {
				window.open(link, "_blank");
			}
		});
	});

	const storageKey = "theme-preference";

	const getColorPreference = () => {
		if (localStorage.getItem(storageKey)) {
			return localStorage.getItem(storageKey);
		} else {
			return window.matchMedia("(prefers-color-scheme: dark)").matches
				? "dark"
				: "light";
		}
	};

	const setPreference = () => {
		localStorage.setItem(storageKey, theme.value);
		reflectPreference();
	};

	/**
	 * Updates the document's theme based on the current theme value.
	 *
	 * This function sets the class attribute of the document body to the current theme value.
	 * It also updates the aria-label attribute of the theme toggle button to reflect the current theme.
	 */
	const reflectPreference = () => {
		document.body.setAttribute("class", theme.value);
		document
			.querySelector("#theme-toggle")
			?.setAttribute("aria-label", theme.value);
	};

	const theme = {
		value: getColorPreference(),
	};

	reflectPreference();

	document.querySelector("#theme-toggle").addEventListener("click", () => {
		theme.value = theme.value === "light" ? "dark" : "light";
		setPreference();
	});

	window
		.matchMedia("(prefers-color-scheme: dark)")
		.addEventListener("change", ({ matches: isDark }) => {
			theme.value = isDark ? "dark" : "light";
			setPreference();
		});
});

const messageStyle = `
	background-color: white;
	color: black;
	font-size: 14px;
	border-radius: 8px;
	padding: 7px 8px;
	text-shadow: 1px 1px 20px #0000001a;
	font-weight: bold;
	font-family: "Raleway", sans-serif;
	margin: 3px;
`;

console.log(
	`%c🐈 Sources are available at: https://github.com/okinea-website%cPlease consider giving it a ⭐ if you like it\n` +
		`My Telegram channel: https://t.me/okinea_blog`,
	messageStyle,
	messageStyle
);

console.log(
	`\n🎁: ${atob("aHR0cHM6Ly90Lm1lL3NlbmQ/c3RhcnQ9Q1FFeVJlN0Z5WnBR")}`
);
