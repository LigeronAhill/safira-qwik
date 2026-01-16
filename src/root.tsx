import { component$, isDev } from "@builder.io/qwik";
import { QwikCityProvider, RouterOutlet } from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import "./global.css";

export default component$(() => {
	/**
	 * The root of a QwikCity site always start with the <QwikCityProvider> component,
	 * immediately followed by the document's <head> and <body>.
	 *
	 * Don't remove the `<head>` and `<body>` elements.
	 */

	return (
		<QwikCityProvider>
			<head>
				<meta charset="utf-8" />
				{!isDev && (
					<link
						rel="manifest"
						href={`${import.meta.env.BASE_URL}manifest.json`}
					/>
				)}
				<RouterHead />
				<script
					dangerouslySetInnerHTML={`
						(function() {
						try {
						const theme = localStorage.getItem('theme');
						const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

						if (theme === 'dark' || (!theme && prefersDark)) {
						document.documentElement.setAttribute('data-theme', 'dark');
						}
						} catch(e) {}
						})();
					`}
				></script>
			</head>
			<body lang="en">
				<RouterOutlet />
			</body>
		</QwikCityProvider>
	);
});
