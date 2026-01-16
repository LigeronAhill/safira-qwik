import { $, component$, useContext, useStylesScoped$ } from "@builder.io/qwik";
import { useDebouncer } from "~/hooks";
import { ThemeContext } from "~/routes/layout";
import style from "./style.css?inline";

export const ThemeToggle = component$(() => {
	useStylesScoped$(style);
	const theme = useContext(ThemeContext);

	const toggleTheme = $(() => {
		requestAnimationFrame(() => {
			theme.value = !theme.value;
			document.documentElement.setAttribute(
				"data-theme",
				theme.value ? "dark" : "light",
			);
			localStorage.setItem("theme", theme.value ? "dark" : "light");
		});
	});
	const debouncedToggle = useDebouncer(toggleTheme, 300);

	return (
		<button
			type="button"
			preventdefault:click
			stoppropagation:click
			preventdefault:keydown
			stoppropagation:keydown
			onClick$={async () => {
				await debouncedToggle();
			}}
			onKeyDown$={async (event) => {
				if (event.key === "Enter" || event.key === " ") {
					await debouncedToggle();
				}
			}}
			aria-label={
				theme.value
					? "Переключить на светлую тему"
					: "Переключить на темную тему"
			}
			class="theme-toggle"
			title={`Текущая тема: ${theme.value ? "темная" : "светлая"}`}
		>
			{theme.value ? (
				<span class="material-icons">sunny</span>
			) : (
				<span class="material-icons">bedtime</span>
			)}
		</button>
	);
});
