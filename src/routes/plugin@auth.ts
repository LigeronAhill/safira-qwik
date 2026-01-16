import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { QwikAuth$ } from "@auth/qwik";
import GitHub from "@auth/qwik/providers/github";
import Yandex from "@auth/qwik/providers/yandex";
import { db } from "../../drizzle/db";
import {
	accounts,
	sessions,
	users,
	verificationTokens,
} from "../../drizzle/schema/auth";

export const { onRequest, useSession, useSignIn, useSignOut } = QwikAuth$(
	() => ({
		trustHost: true,
		providers: [
			GitHub({
				profile(profile) {
					let role = "guest";
					if (profile.email) {
						if (profile.email === "provotorov@inbox.ru") {
							role = "admin";
						}
					}
					const image = profile.avatar_url;
					const name = profile.name || profile.login;
					const id = profile.id;
					const email = profile.email;
					return {
						id: id.toString(),
						name: name,
						email: email,
						role: role,
						image: image,
					};
				},
			}),
			Yandex({
				profile(profile) {
					let role = "guest";
					const email = profile.default_email;
					if (email && email === "hqcarpets@yandex.ru") {
						role = "admin";
					}
					let name = profile.real_name;
					if (!name) {
						name = profile.display_name;
					}
					const image = `https://avatars.yandex.net/get-yapic/${profile.default_avatar_id}/islands-200`;
					const id = profile.client_id;
					return {
						id: id,
						name: name,
						email: email,
						role: role,
						image: image,
					};
				},
			}),
		],
		adapter: DrizzleAdapter(db, {
			usersTable: users,
			accountsTable: accounts,
			sessionsTable: sessions,
			verificationTokensTable: verificationTokens,
		}),
		callbacks: {
			session({ session, user }) {
				if (session.user && user.id) {
					session.user.id = user.id;
				}
				return session;
			},
		},
	}),
);
