"use client";
import {
	createContext,
	useContext,
	useEffect,
	useState,
	ReactNode,
} from "react";

type DarkModeContextType = {
	dark: boolean;
	setDark: (value: boolean) => void;
	toggle: () => void;
};

const DarkModeContext = createContext<DarkModeContextType | undefined>(
	undefined
);

export function useDarkMode() {
	const ctx = useContext(DarkModeContext);
	if (!ctx) throw new Error("useDarkMode must be used within DarkModeProvider");
	return ctx;
}

export function DarkModeProvider({ children }: { children: ReactNode }) {
	const [dark, setDark] = useState(false);

	// Persist theme to localStorage, respect system theme on first load
	useEffect(() => {
		const ls = typeof window !== "undefined" ? window.localStorage : undefined;
		if (ls) {
			const saved = ls.getItem("theme");
			if (saved) {
				setDark(saved === "dark");
			} else {
				// optional: detect system preference on first visit
				const prefersDark = window.matchMedia?.(
					"(prefers-color-scheme: dark)"
				).matches;
				setDark(prefersDark);
				ls.setItem("theme", prefersDark ? "dark" : "light");
			}
		}
	}, []);

	useEffect(() => {
		const ls = typeof window !== "undefined" ? window.localStorage : undefined;
		if (ls) {
			ls.setItem("theme", dark ? "dark" : "light");
		}
		if (dark) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [dark]);

	return (
		<DarkModeContext.Provider
			value={{
				dark,
				setDark,
				toggle: () => setDark((d) => !d),
			}}
		>
			{children}
		</DarkModeContext.Provider>
	);
}
