import * as bx from "@/styles/primitive/box";
import * as tx from "@/styles/primitive/text";
import * as sc from "@/styles/primitive/section";
import * as wp from "@/styles/primitive/wrapper";
import { AnimatedBox, AvailabilityLable, Cta, ProjectView, Pyramid } from "@/components";

export default function Home() {
  	return (
		<sc.Root>
			<sc.Section $hero $fDirection="row" $breakAt={9} $gap="73px 18px" $minSize={[undefined, "fit-content"]} $dSize={[undefined, "calc((100dvh / 3) * 2)"]} $ai="center">
				<sc.Content $maxSize={["100%", "300px"]} $minSize={["auto", "fit-content"]} $dSize={["100%", "100%"]}>
					<tx.H1>Building incomparable dreams with passion and creativity</tx.H1>

					<sc.Copy>
						Uzak is an one-person studio focused on building web platforms, personal projects and tools for everyone and everywhere — from concept to shipped experience, entirely solo.
					</sc.Copy>

					<wp.Row $fWrap="wrap" $gap="13px">
						<Cta clientRender href="#work">Selected work</Cta>
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
					I'm the developer, designer, and product owner behind every Uzak project. No handoffs, no
					account managers — just one person who writes the code, ships it, and answers your emails.
					I've spent the last few years building SaaS products end-to-end, from database schema to
					deployed interface.
				</sc.Copy>

				<AvailabilityLable />
			</sc.Section>

			<sc.Section id="work">
				<sc.Label>Portfolio</sc.Label>

				<sc.Title>Selected work</sc.Title>

				<sc.Copy>
					A short list of projects that define how I build — focused, handcrafted, and made to last.
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
					No handoffs, no committee decisions — one person owning taste, code, and delivery end to end.
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
							From prototype to production — code that ships and stays maintainable. Clean
							architecture over clever shortcuts.
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
							Interfaces with a clear point of view — not templates, not noise. Every screen
							earns its place.
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
							Release, learn, refine — indie pace with professional follow-through, from first
							commit to production.
						</tx.P>
					</AnimatedBox>
				</wp.Row>
			</sc.Section>

			<sc.Section>
				<sc.Label>Services</sc.Label>

				<sc.Title>What I offer</sc.Title>

				<sc.Copy>
					Focused on web-first products — the kind of scope one person can own without losing quality.
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
					<AvailabilityLable />

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