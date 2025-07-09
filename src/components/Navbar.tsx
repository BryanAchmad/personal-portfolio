"use client";
import Link from "next/link";
import { useDarkMode } from "@/context/DarkModeContext";
import { motion } from "motion/react";

export function Navbar() {
	const { dark, toggle } = useDarkMode();
    const fillColor = dark ? "#fff" : "#111"; // or use Tailwind's gray scale if you prefer

	return (
		<nav className="w-full max-w-7xl mx-auto flex items-center justify-between pt-10 px-8 z-20 relative">
            <div>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.7335 18.3051C11.3778 18.4395 11.8954 18.7549 12.2862 19.2513C12.677 19.7373 12.8724 20.2958 12.8724 20.9266C12.8724 21.8366 12.545 22.5605 11.8901 23.0982C11.2458 23.6256 10.3427 23.8893 9.18084 23.8893H4V13H9.00656C10.1367 13 11.0187 13.2534 11.6524 13.7601C12.2967 14.2668 12.6189 14.9545 12.6189 15.8232C12.6189 16.4643 12.4446 16.9969 12.0961 17.4209C11.7581 17.8449 11.3039 18.1396 10.7335 18.3051ZM6.70925 17.4054H8.48372C8.92734 17.4054 9.26534 17.3123 9.49771 17.1262C9.74064 16.9297 9.86211 16.6453 9.86211 16.273C9.86211 15.9007 9.74064 15.6163 9.49771 15.4199C9.26534 15.2234 8.92734 15.1251 8.48372 15.1251H6.70925V17.4054ZM8.70553 21.7487C9.15971 21.7487 9.50827 21.6505 9.75121 21.454C10.0047 21.2472 10.1315 20.9524 10.1315 20.5698C10.1315 20.1872 9.99942 19.8873 9.73536 19.6701C9.48187 19.4529 9.12803 19.3444 8.67385 19.3444H6.70925V21.7487H8.70553Z" fill={fillColor}/>
                    <path d="M17.7867 16.6763C18.1036 16.2006 18.4997 15.8283 18.975 15.5595C19.4503 15.2802 19.9784 15.1406 20.5594 15.1406V17.9483H19.8147C19.1387 17.9483 18.6317 18.0931 18.2937 18.3826C17.9557 18.6618 17.7867 19.1582 17.7867 19.8718V23.8893H15.0775V15.2337H17.7867V16.6763Z" fill={fillColor}/>
                    <path d="M31.5189 15.2337L25.9736 28H23.0584L25.0864 23.5946L21.4899 15.2337H24.516L26.5598 20.6474L28.5878 15.2337H31.5189Z" fill={fillColor}/>
                    <path d="M34.3998 24.0134C33.9245 24.0134 33.5337 23.879 33.2274 23.6101C32.9316 23.3309 32.7838 22.9897 32.7838 22.5863C32.7838 22.1727 32.9316 21.8263 33.2274 21.5471C33.5337 21.2678 33.9245 21.1282 34.3998 21.1282C34.8645 21.1282 35.2448 21.2678 35.5405 21.5471C35.8468 21.8263 36 22.1727 36 22.5863C36 22.9897 35.8468 23.3309 35.5405 23.6101C35.2448 23.879 34.8645 24.0134 34.3998 24.0134Z" fill={fillColor}/>
                </svg>
            </div>
			<ul
				className={`flex items-center gap-8 text-sm font-medium ${
					dark ? "text-gray-200" : "text-gray-700"
				}`}
			>
				<li>
					<Link href="/" className="hover:text-pink-400 transition">
						Home
					</Link>
				</li>
				<li>
					<Link href="/about" className="hover:text-pink-400 transition">
						About
					</Link>
				</li>
				<li>
					<Link href="/contact" className="hover:text-pink-400 transition">
						Contact
					</Link>
				</li>
				<li>
					<button
						aria-label="Toggle dark mode"
						onClick={toggle}
						className="w-7 h-7 rounded-full border border-gray-400 flex items-center justify-center ml-2 bg-white/30 dark:bg-black/30 backdrop-blur transition"
					>
						<motion.div
							key={dark ? "moon" : "sun"}
							initial={{ scale: 0, rotate: 180 }}
							animate={{ scale: 1, rotate: 0 }}
							exit={{ scale: 0, rotate: -180 }}
							transition={{ duration: 0.25 }}
							className={`w-4 h-4 rounded-full ${
								dark ? "bg-gray-200" : "bg-gray-800"
							}`}
						/>
					</button>
				</li>
			</ul>
		</nav>
	);
}
