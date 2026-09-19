"use client";

import * as bx from "@/styles/primitive/box";
import * as tx from "@/styles/primitive/text";
import * as wp from "@/styles/primitive/wrapper";
import { AnimatedBox, Link, Stack, StackLabels } from "../";
import { defaultTheme, rgba } from "@/styles";
import { ImageShowCase } from "./ImageShowCase";
import { Fragment } from "react/jsx-runtime";

type ProjectType = {
	title: string,
	category: string,
	description: string,
	imagesUrl: string[],
	links?: {label: string, url: string}[], 
	stackLabels: (typeof StackLabels)[number][],
	dateRange?: {start: Date, end?: Date}
	linesCount?: number
}

export const ProjectView = ({portfolio}: {portfolio?: boolean}) => {
	const list: ProjectType[] = [
		{
			title: "Dental SaaS",
			category: "Web · Product",
			description: !portfolio 
				? "Full-stack SaaS built for dental clinics, featuring patient and workflow management, PostgreSQL backend, and a production-ready architecture focused on maintainability and reliability."
				: "End-to-end SaaS for dental clinics, combining a modern Next.js frontend with a complex .NET solution with 30+ controllers with 3+ endpoints each, a PostgreSQL database, and Nginx working together with Docker to deliver a scalable, production-focused application.",
			imagesUrl: [
				"/project_captures/dentalv/1.png", 
				"/project_captures/dentalv/2.png", 
				"/project_captures/dentalv/3.png", 
				"/project_captures/dentalv/4.png", 
				"/project_captures/dentalv/5.png", 
				"/project_captures/dentalv/6.png", 
				"/project_captures/dentalv/7.png"
			],
			stackLabels: !portfolio
				? ["c_sharp", "pgsql", "next_js", "ts", "docker"]
				: ["c_sharp", "pgsql", "next_js", "ts", "docker", "nginx"],
			dateRange: {start: new Date(2025, 5, 1), end: new Date(2025, 9, 1)},
			linesCount: 65000
		},
		{
			title: "Fundraising platform",
			category: "Web · Indie",
			description: !portfolio 
				? "Independent full-stack fundraising platform with campaign management, secure Stripe payments, authentication, and a scalable architecture designed from product concept to deployment."
				: "Solo-built fundraising platform integrating Stripe Connect, secure payment workflows, campaign management, and a complete full-stack architecture from design to deployment.",
			imagesUrl: [],
			stackLabels: ["c_sharp", "pgsql", "next_js", "ts", "stripe"],
			links: [
				{label: "Front-End Repo", url: "https://github.com/enzoKazuki/greendollar.web"},
				{label: "Back-End Repo", url: "https://github.com/enzoKazuki/greendollar.api"}
			],
			dateRange: {start: new Date(2026, 1, 1), end: new Date(2026, 5, 1)},
			linesCount: 29000
		}
	]

	return (
		<wp.Col $gap="13px">
			{list.map((p, i) => (
				<AnimatedBox 
					animationView="intersection" 
					options={{oneTimeLoad: true}} 
					boxStyle={{$padding: "0"}}
					key={i}
				>
					<wp.Col $pad="13px 17px" $gap="9px">
						<wp.Row $fWrap="wrap" $gap="3px 13px" $jc="space-between" $ai="center">
							<tx.P $size="xviii" $weight="450">{p.title}</tx.P>
							<tx.P $size="xv" $opc={0.5} $weight="500">{p.category}</tx.P>
						</wp.Row>
						{p.dateRange && 
							<tx.Span $italic $margin="-5px 0 -2px" $opc={0.4} $weight="450" $size="xvii">
								{`${p.dateRange.start.toLocaleString('default', { month: 'short' })} ${p.dateRange.start.getFullYear()}`}
								{" - "}
								{!p.dateRange.end ? "present" : `${p.dateRange.end.toLocaleString('default', { month: 'short' })} ${p.dateRange.end.getFullYear()}`}
							</tx.Span>
						}
						
						<tx.P $maxWidth="43rem" $opc={0.7} $margin="3px 0 3px">
							{p.description}
						</tx.P>

						{p.links && 
							<wp.Row $gap="3px 9px" $fWrap="wrap">
								{p.links.map((l, i) => (
									<Fragment key={i}>
										{i != 0 && 
											<tx.Span $uSelect="none" $cursor="default" $opc={.3}>/</tx.Span>
										}

										<Link href={l.url} target="_blank" poserStyle opc={.9} size="xvi">
											{l.label}
										</Link>
									</Fragment>
								))}
							</wp.Row>
						}

						{p.imagesUrl.length > 0 && <ImageShowCase images={p.imagesUrl} />}
					</wp.Col>

					<wp.Division $orientation={1} $opc={1} />

					<wp.Row $jc="space-between" $pad="9px 17px" $gap="9px" $ai="center">
						<Stack justIcon list={p.stackLabels.map(a => {return {label: a, icon: portfolio == true}})}/>

						<tx.Span $wSpace="nowrap" $weight="500" $opc={0.5} $size="xvi">
							{p.linesCount}+ lines
						</tx.Span>
					</wp.Row>
				</AnimatedBox>
			))}
			<bx.Box 
				$padding="13px 17px" 
				$shadow={false} 
				$border={`dashed 1px ${rgba(defaultTheme.colors.boxShadow, 0.5)}`} 
				$corner={{borderSize: "1px", opc: 0.5, pad: 1}}
			>
				<tx.Span $opc={0.5} $weight="450">new projects are being built</tx.Span>
			</bx.Box>
		</wp.Col>
	)
}