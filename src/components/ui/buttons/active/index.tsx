import { component$, Slot, useStylesScoped$ } from "@builder.io/qwik";
import style from "./style.css?inline";

export const ActiveButton = component$(({ rounded }: { rounded?: boolean }) => {
	useStylesScoped$(style);
	return (
		<button class={`button ${rounded ? "rounded" : ""}`}>
			<Slot />
		</button>
	);
});
