import * as s from "./styles";
import * as bx from "@/styles/primitive/box";
import * as tx from "@/styles/primitive/text";
import * as sc from "@/styles/primitive/section";
import * as wp from "@/styles/primitive/wrapper";
import { ContactMessageForm, Link } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact"
};

export default function Page() {
	return (
		<sc.Root>
			<sc.Section $fDirection="row" $breakAt={9} $hero>
				<sc.Content $gap="18px">
					<wp.Col $gap="5px">
						<tx.H1>Contact me</tx.H1>
					</wp.Col>

					<sc.Copy>
						I hope you find what you were looking for when you joined here.
						<br />
						It would be great to hear from you!
					</sc.Copy>

					<bx.Box $padding="9px 13px" $gap="9px" $maxWidth="min(fit-content, 100%)" $width="fit-content">
						<tx.P $size="xviii" $weight="450">My links</tx.P>

						<wp.Col $gap="3px">
							<wp.Col>
								<wp.Row $pad="3px 9px" $gap="9px" $ai="center">
									<s.Icon src={"/social_icons/email.svg"} alt="email icon" />

									<tx.Span $lSpacing=".03rem" $size="xvi" $weight="500" $tDecoration="none">enzo.kazuki9@gmail.com</tx.Span>
								</wp.Row>
							</wp.Col>

							<Link poserStyle target="_blank" href="https://www.github.com/enzoKazuki">
								<wp.Row $pad="3px 9px" $gap="9px" $ai="center">
									<s.Icon src={"/social_icons/github.svg"} alt="github icon" />

									<tx.Span $lSpacing=".03rem" $size="xvi" $weight="500" $tDecoration="none">/ enzoKazuki</tx.Span>
								</wp.Row>
							</Link>

							<Link poserStyle target="_blank" href="https://www.linkedin.com/in/enzoKazuki">
								<wp.Row $pad="3px 9px" $gap="9px" $ai="center">
									<s.Icon src={"/social_icons/linkedin.svg"} alt="linkedin icon" />

									<tx.Span $lSpacing=".03rem" $size="xvi" $weight="500">/ enzoKazuki</tx.Span>
								</wp.Row>
							</Link>
						</wp.Col>
					</bx.Box>
				</sc.Content>

				<ContactMessageForm />
			</sc.Section>
		</sc.Root>
	)
}