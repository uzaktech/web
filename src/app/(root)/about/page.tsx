import * as bx from "@/styles/primitive/box";
import * as tx from "@/styles/primitive/text";
import * as sc from "@/styles/primitive/section";
import * as wp from "@/styles/primitive/wrapper";
import { AnimatedBox, AvailabilityLable, Cta, Stack } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "About"
};

export default function Page() {
	return (
		<sc.Root>
			<sc.Section $hero>
				<tx.H1>
					One developer. <br />
					No middlemen.
				</tx.H1>

				<sc.Copy>
					Uzak isn&apos;t a team, it&apos;s an independent developer studio. Every line of code, every pixel,
					every decision — one person, start to finish.
				</sc.Copy>
			</sc.Section>

			<sc.Section>
				<sc.Label>Story</sc.Label>
				<sc.Title>Why solo</sc.Title>

				<wp.Col $gap="9px">
					<sc.Copy>
						Uzak started as a simple idea: I&apos;m a passionate full-stack developer who wanted the
						freedom to explore that creativity without limits. Instead of joining a team, I saw the
						opportunity to build my own independent studio — growing my skills while turning ideas
						into real, working products.
					</sc.Copy>
					<sc.Copy>
						Uzak doesn&apos;t have a literal meaning, but to me it represents strength and creativity,
						but also it's my nickname. 
					</sc.Copy>
					<sc.Copy>
						I&apos;m drawn most to SaaS products, e-commerce platforms, and bold, unconventional
						ideas.
					</sc.Copy>
				</wp.Col>
			</sc.Section>

			<sc.Section>
				<sc.Label>Stack</sc.Label>
				<sc.Title>Tools I build with</sc.Title>

				<sc.Copy>
					The tools change project to project, but this is home base.
				</sc.Copy>

				<wp.Col $gap="9px">
					<tx.Span $opc={0.4} $weight="500">Back-end</tx.Span>
					
					<Stack list={[
						{label: "c_sharp", icon: true},
						{label: "dot_net", icon: true},
						{label: "stripe", icon: true},
						{label: "nodejs", icon: true},
					]} />
				</wp.Col>
				
				<wp.Col $gap="9px">
					<tx.Span $opc={0.4} $weight="500">Front-end</tx.Span>
					
					<Stack list={[
						{label: "ts", icon: true},
						{label: "next_js", icon: true},
						{label: "react_js", icon: true},
						{label: "vite", icon: true},
						{label: "sass", icon: true},
						{label: "styled", icon: true},
					]} />
				</wp.Col>

				<wp.Col $gap="9px">
					<tx.Span $opc={0.4} $weight="500">Database</tx.Span>
					
					<Stack list={[
						{label: "pgsql", icon: true},
						{label: "mssql", icon: true}
					]} />
				</wp.Col>

				<wp.Col $gap="9px">
					<tx.Span $opc={0.4} $weight="500">DevOps</tx.Span>
					
					<Stack list={[
						{label: "git", icon: true},
						{label: "docker", icon: true},
						{label: "nginx", icon: true},
						{label: "aws", icon: true},
					]} />
				</wp.Col>

				<wp.Col $gap="9px">
					<tx.Span $opc={0.4} $weight="500">Tools</tx.Span>
					
					<Stack list={[
						{label: "vs_code", icon: true},
						{label: "v_studio", icon: true},
						{label: "dbeaver", icon: true},
						{label: "github", icon: true},
						{label: "gimp", icon: true},
					]} />
				</wp.Col>

				<wp.Col $gap="9px">
					<tx.Span $opc={0.4} $weight="500">AI Agents</tx.Span>
					
					<Stack list={[
						{label: "cursor", icon: true},
						{label: "gemini", icon: true},
						{label: "claude", icon: true},
					]} />
				</wp.Col>
			</sc.Section>

			<sc.Section>
				<sc.Label>Approach</sc.Label>
				<sc.Title>What I care about</sc.Title>

				<wp.Row as="ul" $gap="13px" $pad="0" $breakAt={9}>
					<AnimatedBox 
						as="li" 
						animationView="intersection" 
						options={{oneTimeLoad: true}} 
						groupOptions={{position: 0, delay: {ms: .23, maxWidth: 9}}}
						boxStyle={{$padding: "13px 17px", $gap: "7px", $width: "100%", $minWidth:"130px"}}
					>
						<tx.P $size="xviii" $weight="450">Ownership</tx.P>

						<tx.P $maxWidth="39rem" $opc={0.7}>
							Every decision, every bug, every deadline — mine to own. Nothing gets passed down the line.
							The idea is all yours.
						</tx.P>
					</AnimatedBox>

					<AnimatedBox 
						as="li" 
						animationView="intersection" 
						options={{oneTimeLoad: true}} 
						groupOptions={{position: 1, delay: {ms: .23, maxWidth: 9}}}
						boxStyle={{$padding: "13px 17px", $gap: "7px", $width: "100%", $minWidth:"130px"}}
					>
						<tx.P $size="xviii" $weight="450">Craft</tx.P>

						<tx.P $maxWidth="39rem" $opc={0.7}>
							I&apos;d rather ship something later and get it right than rush something that breaks in a
							month.
						</tx.P>
					</AnimatedBox>

					<AnimatedBox 
						as="li" 
						animationView="intersection" 
						options={{oneTimeLoad: true}} 
						groupOptions={{position: 2, delay: {ms: .23, maxWidth: 9}}}
						boxStyle={{$padding: "13px 17px", $gap: "7px", $width: "100%", $minWidth:"130px"}}
					>
						<tx.P $size="xviii" $weight="450">Honesty</tx.P>

						<tx.P $maxWidth="39rem" $opc={0.7}>
							Realistic timelines, real answers — if something&apos;s not going to work, you&apos;ll hear
							it from me first.
						</tx.P>
					</AnimatedBox>
				</wp.Row>
			</sc.Section>

			<wp.Division $orientation={1} />

			<sc.Section>
				<wp.Col $gap="5px">
					<AvailabilityLable />

					<sc.Title>Let&apos;s talk about your project!</sc.Title>
				</wp.Col>
				
				<sc.Copy>
					I&apos;m open to freelance work, product builds, and long-term collaborations that value quality and clarity.
				</sc.Copy>

				<wp.Row $fWrap="wrap" $gap="10px">
					<Cta clientRender href="/contact">Contact me</Cta>
					<Cta clientRender btnProps={{$style: "ghost_link"}} href="/">Back home</Cta>
				</wp.Row>
			</sc.Section>

		</sc.Root>
	);
}