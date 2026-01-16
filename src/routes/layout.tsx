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
import "@fontsource-variable/montserrat";
import "@fontsource/forum";
import "@fontsource-variable/jetbrains-mono";
import "@fontsource/material-icons";

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
			const initialDark = stored === "dark" || (!stored && prefersDark.matches);
			isDark.value = initialDark;
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

	return (
		<>
			<Slot />
		</>
	);
});
