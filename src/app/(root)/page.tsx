import * as bx from "@/styles/primitive/box";
import * as tx from "@/styles/primitive/text";
import * as sc from "@/styles/primitive/section";
import * as wp from "@/styles/primitive/wrapper";
import { AnimatedBox, Cta, ProjectView, Pyramid } from "@/components";

export default function Home() {
  	return (
		<sc.Root>
			<sc.Section $hero $fDirection="row" $breakAt={9} $gap="73px 18px" $minSize={[undefined, "fit-content"]} $dSize={[undefined, "calc((100dvh / 3) * 2)"]} $ai="center">
				<sc.Content $maxSize={["100%", "300px"]} $minSize={["auto", "fit-content"]} $dSize={["100%", "100%"]}>
					<tx.H1>Building incomparable dreams with passion and creativity</tx.H1>

					<sc.Copy>
						Uzak is a one-person studio where I build web platforms, personal projects, tools, and maintain existing projects for anyone, anywhere. I handle everything myself, from the first idea to the code and the final product.
					</sc.Copy>

					<wp.Row $fWrap="wrap" $gap="13px">
						<Cta href="#work">Selected work</Cta>
						<Cta clientRender btnProps={{$style: "ghost_link"}} href="/contact">Contact me</Cta>
					</wp.Row>
				</sc.Content>

				<AnimatedBox 
					animationView="default" 
					options={{oneTimeLoad: true}} 
					boxStyle={{$padding: "0", $gap: "0", $margin: "0 0 0 auto", $width: "auto", $height: "auto", $aspectRatio: "1"}}
				>
					<Pyramid />
				</AnimatedBox>
			</sc.Section>

			<sc.Section>
				<sc.Label>About</sc.Label>

				<sc.Title>One person, full-stack</sc.Title>

				<sc.Copy>
					I'm the developer, designer, and product owner behind every Uzak project. No handoffs, no account managers. 
					I'm the one writing the code, shipping the product, and answering your emails. 
					I've spent the last few years building SaaS products from the database and interface to the infrastructure.
				</sc.Copy>
			</sc.Section>

			<sc.Section id="work">
				<sc.Label>Portfolio</sc.Label>

				<sc.Title>Highlighted projects</sc.Title>

				<sc.Copy>
					A few projects that show the kind of software I like to build.
				</sc.Copy>

				<ProjectView />

				<wp.Row $jc="flex-end">
					<Cta clientRender href="/portfolio">See my full portfolio</Cta>
				</wp.Row>
			</sc.Section>

			<sc.Section id="process">
				<sc.Label>Process</sc.Label>

				<sc.Title>How I work</sc.Title>

				<sc.Copy>
					I handle the whole process myself, from the first idea to the finished product.
				</sc.Copy>

				<wp.Row as="ul" $gap="13px" $pad="0" $breakAt={9}>
					<AnimatedBox 
						as="li" 
						animationView="intersection" 
						options={{oneTimeLoad: true}} 
						groupOptions={{position: 0, delay: {ms: .23, maxWidth: 9}}}
						boxStyle={{$padding: "13px 17px", $gap: "7px", $width: "100%", $minWidth:"130px"}}
					>
						<tx.P $size="xviii" $weight="450">Build</tx.P>

						<tx.P $maxWidth="39rem" $opc={0.7}>
							I take projects from the first prototype to production, focusing on practical, maintainable code that's easy to understand and change later.
						</tx.P>
					</AnimatedBox>

					<AnimatedBox 
						as="li" 
						animationView="intersection" 
						options={{oneTimeLoad: true}} 
						groupOptions={{position: 1, delay: {ms: .23, maxWidth: 9}}}
						boxStyle={{$padding: "13px 17px", $gap: "7px", $width: "100%", $minWidth:"130px"}}
					>
						<tx.P $size="xviii" $weight="450">Design</tx.P>

						<tx.P $maxWidth="39rem" $opc={0.7}>
							I design the interface around the product instead of starting from a template. Every screen has a purpose and fits the rest of the experience.
						</tx.P>
					</AnimatedBox>

					<AnimatedBox 
						as="li" 
						animationView="intersection" 
						options={{oneTimeLoad: true}} 
						groupOptions={{position: 2, delay: {ms: .23, maxWidth: 9}}}
						boxStyle={{$padding: "13px 17px", $gap: "7px", $width: "100%", $minWidth:"130px"}}
					>
						<tx.P $size="xviii" $weight="450">Ship</tx.P>

						<tx.P $maxWidth="39rem" $opc={0.7}>
							I take projects through deployment and keep improving them after they go live. The goal is to actually finish things, not just get them working locally.
						</tx.P>
					</AnimatedBox>
				</wp.Row>
			</sc.Section>

			<sc.Section>
				<sc.Label>Services</sc.Label>

				<sc.Title>What I build</sc.Title>

				<sc.Copy>
					I focus on web products where I can handle the design, development, and infrastructure myself.
				</sc.Copy>

				<wp.Row $fWrap="wrap" $gap="9px">
					<bx.Box $cornerP="none" $padding="8px 9px" $fDirection="row" $ai="center" $gap="9px">
						<tx.Span $size="xv" $weight="450">SaaS MVPs</tx.Span>
					</bx.Box>
					<bx.Box $cornerP="none" $padding="8px 9px" $fDirection="row" $ai="center" $gap="9px">
						<tx.Span $size="xv" $weight="450">Web apps</tx.Span>
					</bx.Box>
					<bx.Box $cornerP="none" $padding="8px 9px" $fDirection="row" $ai="center" $gap="9px">
						<tx.Span $size="xv" $weight="450">Internal tools</tx.Span>
					</bx.Box>
					<bx.Box $cornerP="none" $padding="8px 9px" $fDirection="row" $ai="center" $gap="9px">
						<tx.Span $size="xv" $weight="450">Design systems</tx.Span>
					</bx.Box>
					<bx.Box $cornerP="none" $padding="8px 9px" $fDirection="row" $ai="center" $gap="9px">
						<tx.Span $size="xv" $weight="450">Infrastructure</tx.Span>
					</bx.Box>
					<bx.Box $cornerP="none" $padding="8px 9px" $fDirection="row" $ai="center" $gap="9px">
						<tx.Span $size="xv" $weight="450">Payment integration</tx.Span>
					</bx.Box>
				</wp.Row>
			</sc.Section>

			<wp.Division $orientation={1} />

			<sc.Section>
				<wp.Col $gap="5px">
					<sc.Title>Have something in mind?</sc.Title>
				</wp.Col>

				<sc.Copy>
					Tell me about your product or idea — I&apos;ll help shape it into something real.
				</sc.Copy>

				<wp.Row $fWrap="wrap" $gap="13px">
					<Cta clientRender href="/contact">Start a conversation</Cta>
					<Cta clientRender btnProps={{$style: "ghost_link"}} href="/about">About the studio</Cta>
				</wp.Row>
			</sc.Section>
		</sc.Root>
  	);
}