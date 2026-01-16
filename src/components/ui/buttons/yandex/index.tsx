import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { Form } from "@builder.io/qwik-city";
import { YandexRectangleIcon, YandexRoundIcon } from "~/assets/icons";
import { useSignIn } from "~/routes/plugin@auth";
import style from "./style.css?inline";

export interface YandexButtonProps {
	wide?: boolean;
}

export const YandexButton = component$<YandexButtonProps>((props) => {
	useStylesScoped$(style);
	const signInSig = useSignIn();
	return (
		<Form action={signInSig}>
			<input type="hidden" name="providerId" value="yandex" />
			<input type="hidden" name="options.redirectTo" value="/" />
			<button class={`button ${props.wide ? "wide" : "rounded"}`}>
				{props.wide ? <YandexRectangleIcon /> : <YandexRoundIcon />}
			</button>
		</Form>
	);
});
