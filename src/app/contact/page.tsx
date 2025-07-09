"use client";
import Link from "next/link";
import {
	FaGithub,
	FaLinkedin,
} from "react-icons/fa";

export default function ContactPage() {
	// const { dark } = useDarkMode();

	return (
		<section className="max-w-xl mx-auto px-6 pt-36 pb-24">
			<h1 className="text-3xl md:text-4xl font-bold mb-2">Contact.</h1>
			<p className="mb-8 text-gray-400 text-sm">
				Get in touch or shoot me an email directly on{" "}
				<a
					href="mailto:bryanachmad08@gmail.com"
					className="font-semibold text-white underline underline-offset-4"
				>
					bryanachmad08@gmail.com
				</a>
			</p>

			<form
				className="flex flex-col gap-4 mb-8"
				onSubmit={(e) => {
					e.preventDefault();
					// add form submit logic here (e.g. emailjs, fetch API, etc)
				}}
			>
				<input
					type="text"
					name="name"
					placeholder="Name"
					required
					className={`w-full rounded-md px-4 py-3 bg-transparent border border-gray-600 focus:border-pink-400 outline-none transition text-white/90 placeholder:text-gray-500`}
				/>
				<input
					type="email"
					name="email"
					placeholder="Email"
					required
					className={`w-full rounded-md px-4 py-3 bg-transparent border border-gray-600 focus:border-pink-400 outline-none transition text-white/90 placeholder:text-gray-500`}
				/>
				<textarea
					name="message"
					placeholder="Message"
					required
					rows={5}
					className={`w-full rounded-md px-4 py-3 bg-transparent border border-gray-600 focus:border-pink-400 outline-none transition text-white/90 placeholder:text-gray-500 resize-none`}
				/>
				<button
					type="submit"
					className="mt-4 rounded-md px-8 py-3 bg-white text-black font-medium hover:bg-pink-100 transition border border-white/10"
				>
					Send Message
				</button>
			</form>

			<Link
				href="/"
				className="inline-flex items-center gap-1 text-sm text-gray-300 hover:text-pink-400 mb-8 transition"
			>
				Go Back Home <span className="ml-1">→</span>
			</Link>

			{/* Social links */}
			<div className="flex gap-5 mt-10 text-gray-400 dark:text-gray-500">
				
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
