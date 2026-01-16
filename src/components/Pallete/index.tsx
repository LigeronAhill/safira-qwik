import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { Logo } from "~/assets/icons/logo";
import style from "./style.css?inline";

export const Pallete = component$(() => {
	useStylesScoped$(style);
	return (
		<div class="container">
			<header>
				<h1>🎨 Цветовая палитра</h1>
				<Logo />
				<p class="subtitle">
					Демонстрация всех цветовых переменных с поддержкой светлой и тёмной
					тем
				</p>
			</header>

			<div class="color-sections">
				<section class="section">
					<h2 class="section-title">Основные цвета</h2>
					<div class="color-grid">
						<div class="color-card">
							<div
								class="color-preview"
								style="background-color: var(--bg-dark);"
							></div>
							<div class="color-info">
								<span class="color-name">--bg-dark</span>
								<code class="color-value">bg-dark</code>
							</div>
						</div>
						<div class="color-card">
							<div
								class="color-preview"
								style="background-color: var(--bg);"
							></div>
							<div class="color-info">
								<span class="color-name">--bg</span>
								<code class="color-value">bg</code>
							</div>
						</div>
						<div class="color-card">
							<div
								class="color-preview"
								style="background-color: var(--bg-light);"
							></div>
							<div class="color-info">
								<span class="color-name">--bg-light</span>
								<code class="color-value">bg-light</code>
							</div>
						</div>
						<div class="color-card">
							<div
								class="color-preview"
								style="background-color: var(--text);"
							></div>
							<div class="color-info">
								<span class="color-name">--text</span>
								<code class="color-value">text</code>
							</div>
						</div>
						<div class="color-card">
							<div
								class="color-preview"
								style="background-color: var(--text-muted);"
							></div>
							<div class="color-info">
								<span class="color-name">--text-muted</span>
								<code class="color-value">text-muted</code>
							</div>
						</div>
						<div class="color-card">
							<div
								class="color-preview"
								style="background-color: var(--highlight);"
							></div>
							<div class="color-info">
								<span class="color-name">--highlight</span>
								<code class="color-value">highlight</code>
							</div>
						</div>
					</div>
				</section>

				<section class="section">
					<h2 class="section-title">Границы</h2>
					<div class="color-grid">
						<div class="color-card">
							<div
								class="color-preview"
								style="background-color: var(--border);"
							></div>
							<div class="color-info">
								<span class="color-name">--border</span>
								<code class="color-value">border</code>
							</div>
						</div>
						<div class="color-card">
							<div
								class="color-preview"
								style="background-color: var(--border-muted);"
							></div>
							<div class="color-info">
								<span class="color-name">--border-muted</span>
								<code class="color-value">border-muted</code>
							</div>
						</div>
					</div>
				</section>

				<section class="section">
					<h2 class="section-title">Акцентные цвета</h2>
					<div class="color-grid">
						<div class="color-card">
							<div
								class="color-preview"
								style="background-color: var(--primary);"
							></div>
							<div class="color-info">
								<span class="color-name">--primary</span>
								<code class="color-value">primary</code>
							</div>
						</div>
						<div class="color-card">
							<div
								class="color-preview"
								style="background-color: var(--secondary);"
							></div>
							<div class="color-info">
								<span class="color-name">--secondary</span>
								<code class="color-value">secondary</code>
							</div>
						</div>
						<div class="color-card">
							<div
								class="color-preview"
								style="background-color: var(--danger);"
							></div>
							<div class="color-info">
								<span class="color-name">--danger</span>
								<code class="color-value">danger</code>
							</div>
						</div>
						<div class="color-card">
							<div
								class="color-preview"
								style="background-color: var(--warning);"
							></div>
							<div class="color-info">
								<span class="color-name">--warning</span>
								<code class="color-value">warning</code>
							</div>
						</div>
						<div class="color-card">
							<div
								class="color-preview"
								style="background-color: var(--success);"
							></div>
							<div class="color-info">
								<span class="color-name">--success</span>
								<code class="color-value">success</code>
							</div>
						</div>
						<div class="color-card">
							<div
								class="color-preview"
								style="background-color: var(--info);"
							></div>
							<div class="color-info">
								<span class="color-name">--info</span>
								<code class="color-value">info</code>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
});
