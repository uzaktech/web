import * as s from "./styles";

export const Logo = ({ draggable }: { draggable?: boolean }) => {
	return (
		<s.Root href="/" draggable={draggable == false ? "false" : "true"}>
			<s.Logo src="/logo.png" alt="logo - UZAK" />
		</s.Root>
	)
}