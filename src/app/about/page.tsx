"use client";
import { useDarkMode } from "@/context/DarkModeContext";
import { FaGithub, FaLinkedin, FaSpotify } from "react-icons/fa";

export default function AboutPage() {
	const { dark } = useDarkMode();

	return (
		<section className="relative max-w-3xl mx-auto px-6 pt-32 pb-24 z-10">
			{/* Big Friendly Intro */}
			<h1 className="text-3xl md:text-4xl font-bold mb-8">Hey there! 👋</h1>
			<p className="text-lg text-gray-400 mb-10">
				I’m{" "}
				<span className="font-bold text-white dark:text-white">
					Adenekan Wonderful
				</span>
				—but you can call me “Wondy” (or whatever you like, as long as it isn’t
				‘late for dinner’ 😅).
				<br />
				<br />I build things for the web—sometimes useful, sometimes just for
				fun. I love making ideas real, breaking stuff (so I can fix it), and
				learning by doing. If there’s a button, I’ll probably press it.
			</p>

			{/* What I Do */}
			<h2 className="text-2xl font-bold mt-12 mb-4">What I Do</h2>
			<ul className="mb-10 space-y-4 text-gray-300">
				<li>
					🛠️{" "}
					<span className="font-semibold text-white dark:text-white">
						Frontend & Product Dev
					</span>{" "}
					– I like to turn caffeine and curiosity into creative interfaces.
					React, Next.js, and a sprinkle of CSS magic? Yes please.
				</li>
				<li>
					✏️{" "}
					<span className="font-semibold text-white dark:text-white">
						Design-ish
					</span>{" "}
					– I appreciate clean pixels, but I’ll never call myself a “Pixel
					Pusher.” If it looks good and works well, that’s my jam.
				</li>
				<li>
					💬{" "}
					<span className="font-semibold text-white dark:text-white">
						People Person
					</span>{" "}
					– I enjoy geeking out with other makers, joining online communities,
					and helping when I can (sometimes just by sending memes).
				</li>
			</ul>

			{/* What I Love */}
			<h2 className="text-2xl font-bold mt-12 mb-4">What I Love</h2>
			<ul className="mb-10 space-y-4 text-gray-300">
				<li>
					🎮 Gaming (currently button-mashing my way through indie adventures)
				</li>
				<li>
					🎱 Billiards! I’m not a pro, but I’m obsessed with that perfect break
					(tips welcome).
				</li>
				<li>☕ Coffee and/or bubble tea—the fuel of champions.</li>
				<li>
					🎶 Finding new music. My Spotify algorithm is equal parts jazz, hip
					hop, and lofi beats.
				</li>
				<li>🛋️ Lazy Sundays (the best feature ever shipped).</li>
			</ul>

			{/* Tools I Reach For */}
			<h2 className="text-2xl font-bold mt-12 mb-4">Favorite Tools & Tech</h2>
			<ul className="mb-10 space-y-4 text-gray-300">
				<li>💻 VS Code, dark mode, 2 spaces (don’t @ me)</li>
				<li>🧙 Tailwind, React, TypeScript—makes building feel like magic</li>
				<li>
					🎨 Figma for sketching out “is this a good idea?” (sometimes it is!)
				</li>
				<li>🌍 The browser dev tools (aka the panic button)</li>
			</ul>

			{/* Music/Playlist */}
			<h2 className="text-2xl font-bold mt-12 mb-4">Currently On Repeat</h2>
			<ul className="mb-10 space-y-4 text-gray-300">
				<li>
					<FaSpotify className="inline mr-2 text-green-500" />
					<span>“Chill LoFi Study Beats” – for deep work mode</span>
				</li>
				<li>
					<FaSpotify className="inline mr-2 text-green-500" />
					<span>“Mood Booster” – for dancing in the kitchen (no shame)</span>
				</li>
				<li>
					<FaSpotify className="inline mr-2 text-green-500" />
					<span>Open to music recs—send me your playlist!</span>
				</li>
			</ul>

			{/* Quirky Footer */}
			<div className="mt-16 text-md text-gray-400">
				Want to talk tech, swap music, or just send a meme?
				<span className="block mt-2">DMs and emails always open! 👇</span>
			</div>

			{/* Social links */}
			<div className="flex gap-5 mt-6 text-gray-400 dark:text-gray-500">
				<a
					href="#"
					aria-label="LinkedIn"
					className="hover:text-pink-400 transition text-xl"
				>
					<FaLinkedin />
				</a>
				<a
					href="#"
					aria-label="GitHub"
					className="hover:text-pink-400 transition text-xl"
				>
					<FaGithub />
				</a>
			</div>
		</section>
	);
}
