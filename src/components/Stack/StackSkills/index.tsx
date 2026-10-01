import * as tx from "@/styles/primitive/text";
import * as wp from "@/styles/primitive/wrapper";
import { Stack } from "@/components";

export const StackSkills = () => {
	return (
		<>
			<wp.Col $gap="9px">
				<tx.Span $opc={0.4} $weight="500">Back-end</tx.Span>
				
				<Stack animation="intersection" list={[
					{label: "c_sharp", icon: true},
					{label: "dot_net", icon: true},
					{label: "stripe", icon: true},
					{label: "nodejs", icon: true},
				]} />
			</wp.Col>
			
			<wp.Col $gap="9px">
				<tx.Span $opc={0.4} $weight="500">Front-end</tx.Span>
				
				<Stack animation="intersection" list={[
					{label: "ts", icon: true},
					{label: "next_js", icon: true},
					{label: "react_js", icon: true},
					{label: "vite", icon: true},
					{label: "sass", icon: true},
					{label: "styled", icon: true},
				]} />
			</wp.Col>

			<wp.Col $gap="9px">
				<tx.Span $opc={0.4} $weight="500">Database</tx.Span>
				
				<Stack animation="intersection" list={[
					{label: "pgsql", icon: true},
					{label: "mssql", icon: true}
				]} />
			</wp.Col>

			<wp.Col $gap="9px">
				<tx.Span $opc={0.4} $weight="500">DevOps</tx.Span>
				
				<Stack animation="intersection" list={[
					{label: "git", icon: true},
					{label: "docker", icon: true},
					{label: "nginx", icon: true},
					{label: "aws", icon: true},
				]} />
			</wp.Col>

			<wp.Col $gap="9px">
				<tx.Span $opc={0.4} $weight="500">Tools</tx.Span>
				
				<Stack animation="intersection" list={[
					{label: "vs_code", icon: true},
					{label: "v_studio", icon: true},
					{label: "dbeaver", icon: true},
					{label: "github", icon: true},
					{label: "gimp", icon: true},
				]} />
			</wp.Col>

			<wp.Col $gap="9px">
				<tx.Span $opc={0.4} $weight="500">AI Agents</tx.Span>
				
				<Stack animation="intersection" list={[
					{label: "cursor", icon: true},
					{label: "gemini", icon: true},
					{label: "claude", icon: true},
				]} />
			</wp.Col>
		</>
	)
}