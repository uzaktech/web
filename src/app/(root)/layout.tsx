import * as s from "./styles";
import { Footer, Header, Menu } from "@/components";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<s.Root data-scroll-root>
			<s.Content>
				<Header /> 

				<Menu /> 

				<s.Main>
					{children}
				</s.Main>
			</s.Content>

			<Footer />
		</s.Root>
	)
}