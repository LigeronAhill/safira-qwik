import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import {
	ActiveButton,
	GithubButton,
	SignOutButton,
	ThemeToggle,
	YandexButton,
} from "~/components/ui/buttons";
import { useSession } from "./plugin@auth";

export default component$(() => {
	const session = useSession();
	const authorized = session.value?.user?.email;

	return (
		<>
			<h1>
				Hi 👋 {authorized && <span>{`${session.value.user?.name}`}</span>}
			</h1>
			<ThemeToggle />
			<div>
				<p>Can't wait to see what you build with qwik!</p>
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
			<h2>Второй</h2>
			<h3>Третий</h3>
			<h4>Четвертый</h4>
			<h5>Пятый</h5>
			<h6>Шестой</h6>
			<div class="container" style="margin: 1rem;">
				<ActiveButton>
					Text
					<figure class="material-icons">info</figure>
				</ActiveButton>
			</div>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
				pariatur assumenda similique natus quo eius fuga rerum, possimus fugit
				harum quam eum sint numquam deserunt adipisci libero fugiat asperiores
				id. Similique assumenda sint totam officiis, minus cupiditate at? Quidem
				architecto dolore quis porro tempora voluptates facilis ipsam eaque
				quisquam. Asperiores voluptas mollitia corporis laborum. Nesciunt ex
				nostrum ipsum quis fugit. Temporibus nobis necessitatibus ab, doloremque
				quibusdam porro saepe quia architecto vel cum magni perspiciatis. Odio
				ab quis ex eligendi similique odit esse perferendis, unde maxime
				accusantium omnis, necessitatibus corrupti repudiandae. Reprehenderit
				deserunt quos repellendus optio, quis nemo, dicta ipsum illum laboriosam
				neque eos, commodi amet dolorem quibusdam itaque praesentium molestiae
				consequuntur! Quaerat veritatis recusandae repellat necessitatibus
				ratione architecto, hic vero?
			</p>
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
