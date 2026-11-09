import * as s from "./styles";
import * as tx from "@/styles/primitive/text";
import * as sc from "@/styles/primitive/section";
import * as wp from "@/styles/primitive/wrapper";
import { AnimatedBox, Cta, ExperienceView, ProjectView, StackSkills, QuickFacts } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: "Portfolio",
   description:
      "Hello! I'm Enzo Kazuki (aka. Uzak), a self-taught full-stack developer based in Paraíba - Brazil. Check out my background, skills, and personal projects.",
   keywords: [
      "enzo kazuki",
      "kazuki",
      "uzak",
      "enzo kazuki portfolio",
      "full-stack developer paraiba"
   ],
   alternates: {
      canonical: "/portfolio"
   },
   openGraph: {
      title: "Enzo Kazuki",
      description:
         "Portfolio of Enzo Kazuki (aka. Uzak), an independent full-stack developer based in Paraíba, Brazil.",
      url: "https://www.uzak.com.br/portfolio",
      type: "profile"
   }
};

export default function Page() {
   const personSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Enzo Kazuki",
      "alternateName": "Uzak",
		"birthDate": "2009-03-13",
      "jobTitle": "Full-Stack Developer",
      "url": "https://www.uzak.com.br/portfolio",
      "worksFor": {
         "@type": "Organization",
         "name": "Uzak"
      },
      "address": {
         "@type": "PostalAddress",
         "addressRegion": "Paraíba",
         "addressCountry": "BR"
      },
      "knowsAbout": [
         "Web Development",
         "Full-Stack Development",
         "JavaScript",
         "React",
         "Next.js"
      ]
   };

	return (
		<>
			<script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
               __html: JSON.stringify(personSchema),
            }}
         />
			
			<sc.Root>
				<sc.Section $hero $fDirection="row" $breakAt={9} $gap="73px 18px" $minSize={[undefined, "fit-content"]} $dSize={[undefined, "calc((100dvh / 3) * 2)"]} $ai="center" 
					$cssStage={{n: 9, css: {alignItems: "flex-end"}}}
				>
					<sc.Content $maxSize={["100%", "380px"]} $minSize={["auto", "fit-content"]} $dSize={["100%", "100%"]}>
						<wp.Row $jc="space-between">
							<tx.H1>
								Enzo Kazuki
							</tx.H1>

						</wp.Row>

						<sc.Copy $maxWidth="49rem">
							Hello! I'm Enzo Kazuki a self-taught full-stack developer based in Paraíba - Brazil.
							I'm constantly working towards expanding my knowledge, exploring new technologies, and turning ideas into something real through my passion for building things, creativity, and curiosity.
						</sc.Copy>
						
						<wp.Row $fWrap="wrap" $gap="10px">
							<Cta href="#projects">See projects</Cta>
							<Cta clientRender href="/contact" btnProps={{$style: "ghost_link"}}>Contact me</Cta>
							<Cta href="#experience" btnProps={{$style: "ghost_link"}}>See experience</Cta>
						</wp.Row>
					</sc.Content>

					<wp.Col $gap="33px">
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

						<QuickFacts />
					</wp.Col>
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
			</sc.Root>
		</>
	);
}
