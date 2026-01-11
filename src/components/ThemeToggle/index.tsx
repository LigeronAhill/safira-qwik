import { component$, useContext } from "@builder.io/qwik";
import { ThemeContext } from "~/routes/layout";

export const ThemeToggle = component$(() => {
	const theme = useContext(ThemeContext);
	return (
		<button data-theme-toggle type="button">
			{theme.value ? (
				<span class="material-icons">sunny</span>
			) : (
				<span class="material-icons">bedtime</span>
			)}
		</button>
	);
});
