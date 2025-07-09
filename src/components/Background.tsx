"use client";
import { useDarkMode } from "@/context/DarkModeContext";

export function Background() {
	const { dark } = useDarkMode();
	return (
		<>
			{/* Grid SVG */}
			<div className="fixed inset-0 h-screen w-screen z-0 pointer-events-none">
				<svg className="w-full h-full" style={{ opacity: dark ? 0.12 : 0.08 }}>
					<defs>
						<pattern
							id="grid"
							width="60"
							height="60"
							patternUnits="userSpaceOnUse"
						>
							<path
								d="M60 0 V60 M0 0 H60"
								fill="none"
								stroke={dark ? "#b6bbc5" : "#e6e7ea"}
								strokeWidth="1"
							/>
						</pattern>
					</defs>
					<rect width="100%" height="100%" fill="url(#grid)" />
				</svg>
				{/* Watermark */}
				<div
					className={`absolute left-0 bottom-0 text-[25vw] font-bold select-none pointer-events-none
          ${dark ? "text-white opacity-5" : "text-[#1e202a] opacity-5"}`}
				>
					Bry.
				</div>
			</div>
			{/* Background gradient */}
			<div
				className={`absolute inset-0 -z-10 transition-colors duration-300`}
				style={
					!dark
						? {
								background:
									"linear-gradient(135deg, #eefcfb 0%, #fff7fa 70%, #fef7f1 100%)",
						  }
						: {
								background:
									"radial-gradient(ellipse at 40% 30%, #16202a 70%, #211e2b 100%)",
						  }
				}
			/>
		</>
	);
}
