"use client";

import * as s from "./styles";
import * as tx from "@/styles/primitive/text";
import * as wp from "@/styles/primitive/wrapper";
import { useState } from "react";
import { AnimatedBox } from "../AnimatedBox";
import { ShrinkWrapper } from "../ShrinkWrapper";
import { useTranslations } from "next-intl";

export const QuickFacts = () => {
	const [expanded, setExpanded] = useState<boolean>(false);
	const t = useTranslations("quickFacts");

	const ageDiff = process.env.NEXT_PUBLIC_BIRTH_DATE ? Math.abs(new Date(process.env.NEXT_PUBLIC_BIRTH_DATE).getTime() - new Date().getTime()) : null;
	const ageString = ageDiff ? t("ageYears", { years: Math.floor(ageDiff / 31557600000) }) : "undefined";

	const facts = [
		{ label: t("role"), value: t("roleValue") },
		{ label: t("focus"), value: t("focusValue") },
		{ label: t("experience"), value: t("experienceValue") },
		{ label: t("location"), value: t("locationValue") },
		{ label: t("age"), value: ageString },
		{ label: t("alias"), value: "Uzak" }
	];
	
	return (
		<AnimatedBox 
			animationView="intersection" 
			as="aside"
			aria-label={t("title")}
			options={{
				oneTimeLoad: true,
				intersectionMarginPreset: "medium"
			}} 
			boxStyle={{$fDirection: "column", $width: "100%", $maxWidth: "300px", $padding: "0"}}
		>
			<s.Root>
				<wp.Row $cursor={!expanded ? "pointer" : undefined} $gap="13px" $jc="space-between" $ai="center" $margin="-3px 0 -3px" onClick={() => !expanded ? setExpanded(true) : {}}>
					<tx.Span $size="xvii" $weight="450" $opc={1}>{t("title")}</tx.Span>

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

						<wp.Col $gap="7px" as="dl">
							{facts.map((q, i) => (
								<wp.Row $gap="13px" $ai="flex-start" $jc="space-between" key={i}>
									<tx.Label as="dt" $italic $weight="500" $opc={0.9} $margin="3px 0 0">{q.label} </tx.Label>
									<tx.Span as="dd" $size="xvi" $wSpace="auto">{q.value}</tx.Span>
								</wp.Row>
							))}
						</wp.Col>
					</wp.Col>
				</ShrinkWrapper>
			</s.Root>
		</AnimatedBox>		
	);
};
