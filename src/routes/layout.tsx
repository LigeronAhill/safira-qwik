import {
	$,
	component$,
	createContextId,
	type Signal,
	Slot,
	useContextProvider,
	useOnDocument,
	useSignal,
} from "@builder.io/qwik";
import "@fontsource/chocolate-classical-sans";
import "@fontsource/material-icons";
import { ThemeToggle } from "~/components";

export const ThemeContext =
	createContextId<Signal<boolean>>("docs.theme-context");

export default component$(() => {
	const isDark = useSignal(false);
	useContextProvider(ThemeContext, isDark);

	// Инициализация темы
	useOnDocument(
		"DOMContentLoaded",
		$(() => {
			const stored = localStorage.getItem("theme");
			const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

			// Определяем начальную тему
			const initialDark =
				stored === "dark" || (stored === null && prefersDark.matches);
			isDark.value = initialDark;

			// Применяем тему
			document.documentElement.setAttribute(
				"data-theme",
				isDark.value ? "dark" : "light",
			);

			// Слушаем системные изменения темы
			const updateFromSystem = (e: MediaQueryListEvent) => {
				if (!localStorage.getItem("theme")) {
					isDark.value = e.matches;
					document.documentElement.setAttribute(
						"data-theme",
						isDark.value ? "dark" : "light",
					);
				}
			};

			prefersDark.addEventListener("change", updateFromSystem);

			return () => {
				prefersDark.removeEventListener("change", updateFromSystem);
			};
		}),
	);

	// Отслеживаем клики для переключения темы
	useOnDocument(
		"click",
		$((event) => {
			const target = event.target as HTMLElement;
			const themeToggle = target.closest("[data-theme-toggle]");

			if (themeToggle) {
				isDark.value = !isDark.value;
				localStorage.setItem("theme", isDark.value ? "dark" : "light");
				document.documentElement.setAttribute(
					"data-theme",
					isDark.value ? "dark" : "light",
				);
				event.preventDefault();
			}
		}),
	);
	return (
		<>
			<ThemeToggle />
			<Slot />;
		</>
	);
});
