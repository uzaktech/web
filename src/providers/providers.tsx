import { MenuProvider } from "@/context";
import { StyleRegistry } from "@/styles";
import { PageLoadFormatter } from "./pageLoadFormatter";

export const Providers = ({ children }: { children: React.ReactNode}) => {
   return (
		<>
			<PageLoadFormatter />
			
			<StyleRegistry>
				<MenuProvider>
					{children}
				</MenuProvider>
			</StyleRegistry>
		</>
   );
};
