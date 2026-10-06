import * as s from "./styles";
import * as w from "@/styles/primitive/wrapper";
import * as b from "@/styles/primitive/box";
import * as t from "@/styles/primitive/text";
import { Fragment } from "react/jsx-runtime";
import { AnimatedBox } from "../AnimatedBox";

export const StackLabels = [
	"aws",
	"c_sharp", 
	"claude",
	"css",
	"cursor",
	"dbeaver",
	"docker",
	"dot_net",
	"gemini",
	"gimp",
	"git",
	"github",
	"html",
	"js",
	"mssql",
	"next_js",
	"nginx",
	"nodejs",
	"pgsql",
	"python",
	"react_js",
	"sass",
	"stripe",
	"styled",
	"ts", 
	"v_studio",
	"vs_code",
	"vite"
] as const;

export const StackNames = [
	"AWS",
	"C#", 
	"Claude",
	"CSS",
	"Cursor",
	"DBeaver",
	"Docker",
	".NET",
	"Gemini",
	"GIMP",
	"Git",
	"GitHub",
	"HTML",
	"JavaScript",
	"SQL Server",
	"Next.js", 
	"Nginx",
	"Node.js",
	"PostgreSQL",
	"Python",
	"React.js",
	"Sass",
	"Stripe",
	"styled-components",
	"TypeScript", 
	"Visual Studio",
	"VS Code",
	"Vite"
] as const;

export type StackProps = {
	list: {label: (typeof StackLabels)[number], icon?: boolean}[],
	justIcon?: boolean,
	animation?: "intersection" | "default" | "none"
}

export const Stack = ({list, justIcon, animation}: StackProps) => {
	return (
		<w.Row as={justIcon ? "div" : "ul"} $listStyle="none" $pad="0px" $fWrap="wrap" $gap={justIcon ? "8px" : "9px"} $ai="flex-start">
			{list.map((o, i) => (
				<Fragment key={i}>
					{justIcon 
						? 
							<s.Abbr title={StackNames[StackLabels.findIndex(l => l == o.label)]}>
								<s.Icon src={`/stack_icons/${o.label}.svg`} alt={`icon: ${o.label}`} $small />
							</s.Abbr>
						: 
							!animation || animation == "none" ?
								<b.Box as="li" $cornerP="none" $padding="7px 9px" $fDirection="row" $ai="center" $gap="9px">
									{o.icon && 
										<s.Icon src={`/stack_icons/${o.label}.svg`} alt={`icon: ${o.label}`} $small />
									}

									<t.Span $size="xv" $weight="450">
										{StackNames[StackLabels.findIndex(l => l == o.label)]}
									</t.Span>
								</b.Box>
							:
								<AnimatedBox
								 	as="li"
									animationView={animation}
									options={{oneTimeLoad: true}} 
									groupOptions={{position: i, delay: {ms: .09, maxWidth: undefined}}}
									animationSpeed="fast"
									boxStyle={{$padding: "7px 9px", $gap: "9px", $ai: "center", $fDirection: "row", $cornerP: "none"}}
								>
									{o.icon && 
										<s.Icon src={`/stack_icons/${o.label}.svg`} alt={`icon: ${o.label}`} $small />
									}

									<t.Span $size="xv" $weight="450">
										{StackNames[StackLabels.findIndex(l => l == o.label)]}
									</t.Span>
								</AnimatedBox>
					}
				</Fragment>
			))}
		</w.Row>
	)
}