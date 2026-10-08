import * as tx from "@/styles/primitive/text";
import * as sc from "@/styles/primitive/section";
import * as wp from "@/styles/primitive/wrapper";
import { AnimatedBox, Cta, StackSkills } from "@/components";
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
					Uzak isn't a team. It's a one-person studio where I handle the design, development, and everything in between.
				</sc.Copy>
			</sc.Section>

			<sc.Section>
				<sc.Label>Story</sc.Label>
				<sc.Title>Why solo</sc.Title>

				<wp.Col $gap="9px">
					<sc.Copy>
						Uzak started from a simple idea: I wanted a place where I could build things my own way. Instead of working on someone else's products all the time, I wanted to create my own and see them through from idea to finished product.
					</sc.Copy>
					<sc.Copy>
						Uzak doesn&apos;t have a literal meaning, but to me it represents strength and creativity,
						but also it's my nickname. 
					</sc.Copy>
					<sc.Copy>
						I&apos;m drawn most to SaaS products, e-commerce platforms, and ideas that are a little different from the usual.
					</sc.Copy>
				</wp.Col>
			</sc.Section>

			<sc.Section>
				<sc.Label>Stack</sc.Label>
				<sc.Title>Tools I build with</sc.Title>

				<sc.Copy>
					The tools change project to project, but this is home base.
				</sc.Copy>

				<StackSkills />
			</sc.Section>

			<sc.Section>
				<sc.Label>Approach</sc.Label>
				<sc.Title>What I care about</sc.Title>

				<wp.Row as="ul" $gap="13px" $pad="0" $breakAt={9}>
					<AnimatedBox 
						as="li" 
						animationView="intersection" 
						options={{
							oneTimeLoad: true,
							intersectionMarginPreset: "medium"
						}} 
						groupOptions={{position: 0, delay: {ms: .23, maxWidth: 9}}}
						boxStyle={{$padding: "13px 17px", $gap: "7px", $width: "100%", $minWidth:"130px", $height: "100%"}}
					>
						<tx.P $size="xviii" $weight="450">Ownership</tx.P>

						<tx.P $maxWidth="39rem" $opc={0.7}>
							I take responsibility for the whole project, from the first idea to the final release. There's no handoff between different people or teams. 
						</tx.P>
					</AnimatedBox>

					<AnimatedBox 
						as="li" 
						animationView="intersection" 
						options={{
							oneTimeLoad: true,
							intersectionMarginPreset: "medium"
						}} 
						groupOptions={{position: 1, delay: {ms: .23, maxWidth: 9}}}
						boxStyle={{$padding: "13px 17px", $gap: "7px", $width: "100%", $minWidth:"130px", $height: "100%"}}
					>
						<tx.P $size="xviii" $weight="450">Craft</tx.P>

						<tx.P $maxWidth="39rem" $opc={0.7}>
							I care about getting the details right. I'd rather take a little longer than rush something that needs to be rebuilt later.
						</tx.P>
					</AnimatedBox>

					<AnimatedBox 
						as="li" 
						animationView="intersection" 
						options={{
							oneTimeLoad: true,
							intersectionMarginPreset: "medium"
						}} 
						groupOptions={{position: 2, delay: {ms: .23, maxWidth: 9}}}
						boxStyle={{$padding: "13px 17px", $gap: "7px", $width: "100%", $minWidth:"130px", $height: "100%"}}
					>
						<tx.P $size="xviii" $weight="450">Honesty</tx.P>

						<tx.P $maxWidth="39rem" $opc={0.7}>
							I'll tell you what I think, even when the answer isn't what you expected. If I think something won't work, I'd rather say so early.
						</tx.P>
					</AnimatedBox>
				</wp.Row>
			</sc.Section>
		</sc.Root>
	);
}