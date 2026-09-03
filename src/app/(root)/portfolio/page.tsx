import * as s from "./styles";
import * as tx from "@/styles/primitive/text";
import * as sc from "@/styles/primitive/section";
import * as wp from "@/styles/primitive/wrapper";
import { AnimatedBox, AvailabilityLable, Cta, Link, ProjectView, Stack } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Portfolio",
	keywords: ["enzo kazuki", "kazuki", "uzak"]
};

export default function Page() {
	return (
		<sc.Root>
			<sc.Section $hero $fDirection="row" $breakAt={9} $gap="73px 18px" $minSize={[undefined, "fit-content"]} $dSize={[undefined, "calc((100dvh / 3) * 2)"]} $ai="center">
				<sc.Content $maxSize={["100%", "300px"]} $minSize={["auto", "fit-content"]} $dSize={["100%", "100%"]}>
					<tx.H1>
						Enzo Kazuki (aka. Uzak)
					</tx.H1>
					<sc.Copy $maxWidth="49rem">
						Hello! I'm Enzo Kazuki (17-years-old) a self-taught junior full-stack developer based in Paraíba - Brazil, working towards learning and making ideas turn into something real through my passion and creativity.
					</sc.Copy>

					<wp.Row $fWrap="wrap" $gap="10px">
						<Cta href="#projects">See projects</Cta>
						<Cta clientRender href="/contact" btnProps={{$style: "ghost_link"}}>Contact me</Cta>
						<Cta href="#experience" btnProps={{$style: "ghost_link"}}>See experience</Cta>
					</wp.Row>
				</sc.Content>

				<AnimatedBox 
					animationView="default" 
					options={{oneTimeLoad: true}} 
					boxStyle={{$padding: "0", $gap: "0", $margin: "0 0 0 auto", $width: "auto", $height: "auto", $aspectRatio: "1", $overflow: "visible"}}
				>
					<s.HeroImageBox>
						<s.HeroImage src={"/desktop_setup.jpg"} alt="complementary hero image" />
						<tx.SmallInfo>my desk setup</tx.SmallInfo>
					</s.HeroImageBox>
				</AnimatedBox>
			</sc.Section>

			<sc.Section>
				<sc.Label>About</sc.Label>
				<sc.Title>Developer, designer, and product-minded builder</sc.Title>
				<wp.Col $gap="9px">
					<sc.Copy>
						I currently work as an independent developer focused on web products that requires a secure and solid [backend, database & infra]
						and need thoughtful UX, reliable systems, and a clear point of view. 
					</sc.Copy>
					<sc.Copy>
						I enjoy taking ownership across the stack, from interface design and product
						decisions to deployment and iterations.
					</sc.Copy>
				</wp.Col>
			</sc.Section>

			<sc.Section id="skills">
				<sc.Label>Skills</sc.Label>
				<sc.Title>Tools and technologies</sc.Title>
				<sc.Copy>
					I'm a full-stack developer, but my balance leans more to the back-end side.
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

			<sc.Section id="projects">
				<sc.Label>Selected projects</sc.Label>
				<sc.Title>Recent work</sc.Title>
				
				<ProjectView portfolio />
			</sc.Section>

			<sc.Section id="experience">
				<sc.Label>Career</sc.Label>
				<sc.Title>My professional experience</sc.Title>
				
				<wp.Col $gap="9px">
					<sc.Copy>
						I'm currently (Sep. 2026) interning as a React Developer at <Link target="__blank" href="https://www.youbloom.com" poserStyle>youbloom</Link>, where 
						I'm gaining hands-on experience in a professional team workflow. Prior to this, my 4 years of coding experience came from personal projects and freelance work.
					</sc.Copy>
					<sc.Copy>
						Open to new opportunities and connections as I grow my career in software development.
					</sc.Copy>
				</wp.Col>
			</sc.Section>

			<wp.Division $orientation={1} />

			<sc.Section>
				<wp.Col $gap="5px">
					<AvailabilityLable />

					<sc.Title>Interested in working together?</sc.Title>
				</wp.Col>

				<sc.Copy>
					I&apos;m open to freelance work, product builds, and long-term collaborations that value quality and clarity.
				</sc.Copy>
				
				<wp.Row $fWrap="wrap" $gap="10px">
					<Cta clientRender href="/contact">Contact me</Cta>
					<Cta clientRender btnProps={{$style: "ghost_link"}} href="/about">About the studio</Cta>
				</wp.Row>
			</sc.Section>
		</sc.Root>
	);
}
