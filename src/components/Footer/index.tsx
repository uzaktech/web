
import * as s from "./styles";
import * as wp from "@/styles/primitive/wrapper";
import * as tx from "@/styles/primitive/text";
import * as bx from "@/styles/primitive/box";
import { Cta, Link } from "../Link";
import { defaultTheme, rgba } from "@/styles";
import { Logo } from "../Logo";
import { links } from "@/data";

export const Footer = () => {
	return (
		<s.Root>
			<s.Main>
				<wp.Row $gap="23px" $jc="space-between" $breakAt={10}>
					<wp.Col $dSize={["100%"]} $gap="13px">
						<s.LogoWrapper>
							<Logo />
						</s.LogoWrapper>

						<tx.P $weight="300" $maxWidth="33rem">
							One-person studio building end-to-end web platforms, from the first idea to production.
						</tx.P>
						<tx.P $weight="300" $maxWidth="33rem">
							Interested in working together?

						</tx.P>
						<Cta clientRender href="/contact" btnProps={{$style: "chill_black"}}>Start a conversation</Cta>
					</wp.Col>
					
					<wp.Row $gap="17px 73px" $jc="space-between" $minSize={["fit-content"]} $fWrap="wrap">
						<wp.Col $gap="5px">
							<s.LabelColumn>
								Navigate
							</s.LabelColumn>
							<Link href="/" clientRender poserStyle $color={defaultTheme.colors.boxBackground} $weight="350">
								Home
							</Link>
							<Link href="/about" clientRender poserStyle $color={defaultTheme.colors.boxBackground} $weight="350">
								About
							</Link>
							<Link href="/portfolio" clientRender poserStyle $color={defaultTheme.colors.boxBackground} $weight="350">
								Portfolio
							</Link>
							<Link href="/contact" clientRender poserStyle $color={defaultTheme.colors.boxBackground} $weight="350">
								Contact
							</Link>
						</wp.Col>
						<wp.Col $gap="5px">
							<s.LabelColumn>
								Elsewhere
							</s.LabelColumn>
							<Link href={links.email} target="_blank" poserStyle $color={defaultTheme.colors.boxBackground} $weight="350">
								Email
							</Link>
							<Link href={links.githubProfile} target="_blank" poserStyle $color={defaultTheme.colors.boxBackground} $weight="350">
								GitHub
							</Link>
							<Link href={links.linkedinProfile} target="_blank" poserStyle $color={defaultTheme.colors.boxBackground} $weight="350">
								LinkedIn
							</Link>
							<Link href={links.githubUzak} target="_blank" poserStyle $color={defaultTheme.colors.boxBackground} $weight="350">
								Uzak's GitHub
							</Link>
						</wp.Col>
						<wp.Col $gap="5px" $minSize={["fit-content"]} $margin="0 0 0 auto">
							<s.LabelColumn>
								Status
							</s.LabelColumn>
							<wp.Row $ai="center" $gap="7px">
								<s.AvailabilityIcon />
								<tx.Span $weight="300">Open to Work</tx.Span>
							</wp.Row>
							<bx.Box 
								$padding="9px 13px" 
								$shadow={false} 
								$border={`dashed 1px ${rgba(defaultTheme.colors.boxBackground, 0.5)}`} 
								$corner={{borderSize: "1px", opc: 0.5, pad: 1, color: defaultTheme.colors.boxBackground}}
								$bg={defaultTheme.colors.boxShadow}
								$margin="3px 0 0"
							>
								<tx.Span $opc={0.8} $weight="350" $size="xvi" $color={defaultTheme.colors.boxBackground}>New projects are being built</tx.Span>
							</bx.Box>
						</wp.Col>
					</wp.Row>
				</wp.Row>
				
				<wp.Row $jc="space-between" $margin="auto 0 0">
					<tx.P $size="xvi" $weight="350" $opc={0.7} $color={defaultTheme.colors.boxBackground}>
						&copy; {new Date().getUTCFullYear()} Uzak. All Rights Reserved
					</tx.P>
				</wp.Row>
			</s.Main>
		</s.Root>
	)
}