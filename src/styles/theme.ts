import { hexToRgb } from "@/utils";

export const colors = {
	bodyBackground: "#fff",
	boxBackground: "#ffffff",
	text: "#000000",
	boxShadow: "#000000",
	primary: "#c33333",
	primaryDark: "#af1e1e",
	primaryDarkGray: "#aa3434",
	primaryClear: "#e94d4d",
	red: "#fa382a",
	redError: "#df2417",
	yellow: "#ffd725",
	blue: "#45c4ff",
	green: "#47d624",
	greenText: "#36b416"
} as const;


export const rgba = (color: string, alpha: number | string) => `rgba(${hexToRgb(color).join(", ")}, ${alpha})`;

export const defaultTheme = {
	fontSize: {
		xiii: "0.60rem",
		xiv: "0.75rem",
		xv: "0.80rem",
		xvi: "0.9rem",
		xvii: "1rem",
		xviii: "1.15rem",
		xx: "1.25rem",
		xxii: "1.4rem",
		xxiii: "1.5rem"
	},
	effects: {
		transition: "all .13s ease-in"
	},
	colors
};