import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { GithubButton } from "~/components/GithubButton";
import { SignOutButton } from "~/components/SignOutButton";
import { YandexButton } from "../components/YandexButton";
import { useSession } from "./plugin@auth";

export default component$(() => {
	const session = useSession();
	const authorized = session.value?.user?.email;

	return (
		<>
			<h1>
				Hi 👋 {authorized && <span>{`${session.value.user?.name}`}</span>}
			</h1>
			<div>
				Can't wait to see what you build with qwik!
				<br />
				Happy coding.
				{authorized ? (
					<>
						<p>{JSON.stringify(session.value.user)}</p>
						<img
							src={session.value?.user?.image || ""}
							alt="userpic"
							width={50}
							height={50}
						/>
						<SignOutButton />
					</>
				) : (
					<>
						<YandexButton wide />
						<GithubButton />
					</>
				)}
			</div>
		</>
	);
});

export const head: DocumentHead = {
	title: "Safira home page title",
	meta: [
		{
			name: "description",
			content: "Qwik site description",
		},
	],
};
