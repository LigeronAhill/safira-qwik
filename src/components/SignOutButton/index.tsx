import { component$ } from "@builder.io/qwik";
import { useSignOut } from "~/routes/plugin@auth";
import style from "./signoutButton.module.css";

export const SignOutButton = component$(() => {
	const signOutSig = useSignOut();
	return (
		<button
			class={style.signout}
			onClick$={() => signOutSig.submit({ redirectTo: "/" })}
		>
			<span class="material-icons">logout</span>
			SignOut
		</button>
	);
});
