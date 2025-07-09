"use client";
import { useDarkMode } from "@/context/DarkModeContext";
import {
	FaGithub,
	FaLinkedin,
} from "react-icons/fa";

export function Hero() {
	const { dark } = useDarkMode();

	return (
		<section className="flex flex-col justify-center items-start min-h-[80vh] max-w-3xl mx-auto px-8 pt-16 z-10 relative">
			{/* Star Icon */}
			{/* <div
				className={`absolute top-10 left-16 select-none ${
					dark ? "text-white/60" : "text-[#8a8e99]/60"
				} text-4xl`}
			>
				*
			</div> */}
			{/* Headline with glitch shadow in light mode */}
			<h1
				className={`text-4xl md:text-5xl font-extrabold tracking-widest mb-6 relative ${
					dark ? "text-white" : "text-black"
				}`}
				style={!dark ? { textShadow: "2px 2px 0 #ec4899" } : undefined}
			>
				I&apos;M BRYAN ACHMAD.
			</h1>
			{/* Subtext */}
			<p
				className={`text-lg leading-relaxed mb-3 ${
					dark ? "text-gray-200" : "text-gray-700"
				}`}
			>
				Just your friendly software engineer next door, on a lifelong quest to
				make the web smarter (and a little weirder). By day, I&apos;m writing code
				and building{" "}
				<span className={`font-bold ${dark ? "text-white" : "text-[#111928]"}`}>
					PROJECTS
				</span>{" "}
				that (hopefully) make life a bit easier, one bug fix at a time.
				<br />
				<br />
				When I&apos;m not knee-deep in JavaScript or Laravel, you&apos;ll probably catch
				me exploring digital worlds—gaming is my go-to escape after a long
				sprint. Lately, I&apos;ve been on a mission to master billiards (spoiler:
				still working on that perfect break, LOL).
				<br />
				<br />
				Always up for a chat about tech, games, or the best way to line up a
				shot—feel free to{" "}
				<span className={`font-bold ${dark ? "text-white" : "text-[#111928]"}`}>
					REACH OUT
				</span>
				.<br />
				Minimalist at heart, I believe the best solutions are simple and the
				best days have a little play in them.
			</p>
			{/* CTA */}
			<a
				href="#"
				className={`group mt-3 inline-flex items-center transition font-medium ${
					dark
						? "text-gray-200 hover:text-pink-400"
						: "text-gray-700 hover:text-pink-400"
				}`}
			>
				See More About Me
				<span className="ml-2 transition-transform group-hover:translate-x-1">
					→
				</span>
			</a>
			{/* Social Links */}
			<div
				className={`flex gap-5 mt-8 ${
					dark ? "text-gray-200" : "text-gray-600"
				}`}
			>
				<a href="https://linkedin.com/in/bryanachmad" className="hover:text-pink-400 transition text-xl">
					<FaLinkedin />
				</a>
				<a href="https://github.com/bryanachmad" className="hover:text-pink-400 transition text-xl">
					<FaGithub />
				</a>
			</div>
			{/* Sticky search shortcut */}
			{/* <div
				className={`fixed bottom-8 left-1/2 -translate-x-1/2 rounded-lg px-6 py-3 flex items-center gap-2 text-base shadow-lg z-30 ${
					dark
						? "bg-black/80 text-gray-200"
						: "bg-white/90 text-gray-800 border border-gray-200 backdrop-blur-sm"
				}`}
			>
				Use{" "}
				<kbd className="bg-gray-700 px-2 py-1 rounded text-white font-semibold text-sm">
					Ctrl
				</kbd>
				+
				<kbd className="bg-gray-700 px-2 py-1 rounded text-white font-semibold text-sm">
					K
				</kbd>
				to trigger search
				<span className="ml-2 text-xl">🔍</span>
			</div> */}
		</section>
	);
}
