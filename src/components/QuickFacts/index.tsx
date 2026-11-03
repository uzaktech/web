"use client";

import * as s from "./styles";
import * as tx from "@/styles/primitive/text";
import * as wp from "@/styles/primitive/wrapper";
import { useState } from "react";
import { AnimatedBox } from "../AnimatedBox";
import { ShrinkWrapper } from "../ShrinkWrapper";
import { quickFacts } from "@/data";

export const QuickFacts = () => {
	const [expanded, setExpanded] = useState<boolean>(false);
	
	return (
		<AnimatedBox 
			animationView="intersection" 
			options={{
				oneTimeLoad: true,
				intersectionMarginPreset: "medium"
			}} 
			boxStyle={{$fDirection: "column", $width: "100%", $maxWidth: "300px", $padding: "13px 17px"}}
		>
			<wp.Row $gap="13px" $jc="space-between" $ai="center" $margin="-3px 0 -3px">
				<tx.Span $size="xvii" $weight="450" $opc={1}>Quick facts</tx.Span>

				<s.ExpandButton onClick={() => setExpanded(!expanded)} $opened={expanded} />
			</wp.Row>
			
			<ShrinkWrapper 
				opened={expanded == true}
				$dSize={["100%", undefined]}
				$minSize={["100%", undefined]}
				$maxSize={["100%", undefined]}
				starterW="100%"
				starterOpc={0}
				hiddenOnZero
			>
				<wp.Col $gap="13px" $pad="13px 0 0">
					<wp.Division $orientation={1} />

					<wp.Col $gap="7px">
						{quickFacts.map((q, i) => (
							<wp.Row $gap="13px" $ai="flex-end" $jc="space-between" key={i}>
								<tx.Label $italic $weight="500" $opc={0.9}>{q.label} </tx.Label>
								<tx.Span $size="xvi">{q.value}</tx.Span>
							</wp.Row>
						))}
					</wp.Col>
				</wp.Col>
			</ShrinkWrapper>
		</AnimatedBox>		
	)
}