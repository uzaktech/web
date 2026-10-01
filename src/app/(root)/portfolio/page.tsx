import * as s from "./styles";
import * as tx from "@/styles/primitive/text";
import * as sc from "@/styles/primitive/section";
import * as wp from "@/styles/primitive/wrapper";
import { AnimatedBox, Cta, ExperienceView, ProjectView, StackSkills } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Portfolio",
	keywords: ["enzo kazuki", "kazuki", "uzak"]
};

export default function Page() {
	return (
		<sc.Root>
			<sc.Section $hero $fDirection="row" $breakAt={9} $gap="73px 18px" $minSize={[undefined, "fit-content"]} $dSize={[undefined, "calc((100dvh / 3) * 2)"]} $ai="center" 
				$cssStage={{n: 9, css: {alignItems: "flex-end"}}}
			>
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
					boxStyle={{$padding: "0", $gap: "0", $width: "auto", $height: "auto", $aspectRatio: "1", $overflow: "visible"}}
				>
					<s.HeroImageBox>
						<s.HeroImage src={"/desktop_setup.jpg"} alt="complementary hero image" />
						<tx.SmallInfo>my desk setup</tx.SmallInfo>
					</s.HeroImageBox>
				</AnimatedBox>
			</sc.Section>

			<sc.Section>
				<sc.Label>About</sc.Label>
				<sc.Title>Full-stack developer, designer, and builder</sc.Title>
				<wp.Col $gap="9px">
					<sc.Copy>
						I'm an independent developer focused on web products that need a solid backend, database, and infrastructure, along with thoughtful UX and reliable systems.
					</sc.Copy>
					<sc.Copy>
						I like having ownership across the stack, from interface design and product decisions to deployment and everything that comes after.
					</sc.Copy>
				</wp.Col>
			</sc.Section>

			<sc.Section id="skills">
				<sc.Label>Skills</sc.Label>
				<sc.Title>What I work with</sc.Title>

				<sc.Copy>
					I'm a full-stack developer. I work across the stack, but I tend to enjoy the back-end more.
				</sc.Copy>

				<StackSkills />
			</sc.Section>

			<sc.Section id="projects">
				<sc.Label>Projects</sc.Label>
				<sc.Title>What I've built</sc.Title>
				
				<ProjectView portfolio />
			</sc.Section>

			<sc.Section id="experience">
				<sc.Label>Career</sc.Label>
				<sc.Title>My professional experience</sc.Title>
				
				<ExperienceView />
			</sc.Section>

			<wp.Division $orientation={1} />

			<sc.Section>
				<wp.Col $gap="5px">
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
