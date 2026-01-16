import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { useSignOut } from "~/routes/plugin@auth";
import style from "./style.css?inline";

export const SignOutButton = component$(() => {
	useStylesScoped$(style);
	const signOutSig = useSignOut();
	return (
		<button onClick$={() => signOutSig.submit({ redirectTo: "/" })}>
			<span class="material-icons">logout</span>
			SignOut
		</button>
	);
});
