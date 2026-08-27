import { MenuProvider } from "@/context";
import { StyleRegistry } from "@/styles";

export const Providers = ({ children }: { children: React.ReactNode}) => {
   return (
		<StyleRegistry>
			<MenuProvider>
				{children}
			</MenuProvider>
		</StyleRegistry>
   );
};
