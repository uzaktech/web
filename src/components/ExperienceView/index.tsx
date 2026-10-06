"use client";

import * as tx from "@/styles/primitive/text";
import * as wp from "@/styles/primitive/wrapper";
import { Link } from "../Link";
import { AnimatedBox } from "../AnimatedBox";
import { experiences, ExperiencesType } from "@/data";
import { Fragment } from "react/jsx-runtime";
import { Stack } from "../Stack";
import { useState } from "react";
import { ShrinkWrapper } from "../ShrinkWrapper";

export const ExperienceView = () => {
	return (
		<wp.UlCol $gap="13px" $listStyle="none">
			{experiences.map((e, i) => (
				<ExperienceBox e={e} key={i} />
			))}
		</wp.UlCol>
	)
}

const ExperienceBox = ({e}: {e: ExperiencesType}) => {
	const [expanded, setExpanded] = useState<boolean>(false);

	const expand = () => setExpanded(!expanded);

	return (
		<AnimatedBox 
			as="li"
			animationView="intersection" 
			options={{oneTimeLoad: true}} 
			boxStyle={{$padding: `0 0 ${expanded ? "0" : "4px"}`, $gap: "9px"}}
		>
			<wp.Col $pad={`13px 17px 0`}>
				{/* Header */}
				<wp.Col $gap="3px 13px">
					<wp.Row $fWrap="wrap" $jc="space-between" $ai="center" $gap="0 9px">
						<wp.Row $gap="7px" $ai="center">
							<tx.P $size="xviii" $weight="450">{e.title}</tx.P>

							<tx.Span $size="xv" $margin="3px 0 0" $uSelect="none" $weight="500" $opc={0.5}>/</tx.Span>

							<tx.Span $wSpace="nowrap">
								<Link poserStyle onClick={expand} $size="xvi" $opc={0.4}>{expanded == true ? "less" : "more"}</Link>
							</tx.Span>
						</wp.Row>
						
						
						<tx.P $size="xv" $opc={0.5} $weight="500">{e.category}</tx.P>
					</wp.Row>

					<wp.Row $gap="3px" $fWrap="wrap" $jc="space-between">
						{e.dateRange && 
							<tx.Span $italic $opc={0.4} $weight="450" $size="xvii">
								{`${e.dateRange.start.toLocaleString('default', { month: 'short' })} ${e.dateRange.start.getFullYear()}`}
								{" - "}	
								{!e.dateRange.end ? "present" : `${e.dateRange.end.toLocaleString('default', { month: 'short' })} ${e.dateRange.end.getFullYear()}`}
							</tx.Span>
						}
					</wp.Row>
				</wp.Col>
			</wp.Col>
			
			<ShrinkWrapper 
				opened={expanded == true}
				$dSize={["100%", undefined]}
				$minSize={["100%", undefined]}
				$maxSize={["100%", undefined]}
				starterW="100%"
				starterOpc={0}
				hiddenOnZero
			>
				{/* Information Column */}
				<wp.Col  $pad="0 17px 13px" $gap="7px" $dSize={["100%", undefined]}>
					{e.description.map((m, i) => 
						<tx.P $maxWidth="43rem" $opc={0.7} $margin={`${i == 0 ? "3px" : "0"} 0 ${i == e.description.length ? "3px" : "0"}`} $wSpace="pre-line" key={i}>
							{m}
						</tx.P>
					)}

					{e.links && 
						<wp.Row $gap="3px 9px" $fWrap="wrap" $pad="5px 0 0">
							{e.links.map((l, i) => (
								<Fragment key={i}>
									{i != 0 && 
										<tx.Span $uSelect="none" $cursor="default" $opc={.3}>/</tx.Span>
									}

									<Link href={l.url} target="_blank" poserStyle $opc={.9} $size="xvi">
										{l.label}
									</Link>
								</Fragment>
							))}
						</wp.Row>
					}
				</wp.Col>

				<wp.Division $orientation={1} $opc={1} />

				{/* Footer Card */}
				<wp.Row $jc="space-between" $pad="8px 17px" $gap="9px" $ai="center">
					<Stack justIcon list={e.stackLabels.map(a => {return {label: a, icon: true}})}/>
				</wp.Row>
			</ShrinkWrapper>
		</AnimatedBox>	
	)
}