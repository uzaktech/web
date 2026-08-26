import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 	:root 
	{
		--height-header: 57px;
		--height-logo: 35px;
		--height-btn-cta: 37px;
		--height-btn-small: 30px;
		--height-btn-inp: 33px;
		--height-btn: 33px;
		--max-width: 1300px;
		--corner-default-size: 13px;
	}

	@media (max-width: 1370px) 
	{
		:root
		{
			--height-header: 55px;
			--height-logo: 33px;
		}
	}

	@media (max-width: 900px) 
	{
		:root
		{
			--height-header: 53px;
			--height-logo: 31px;
			--fs-root: 15px;
		}
	}
	
	@media (max-width: 700px) 
	{
		:root 
		{
			--height-btn-inp: 30px;
			--height-btn-cta: 33px;
			--height-btn: 30px;
		}
	}
	
	@media (max-width: 400px) 
	{
		:root
		{
			--height-header: 51px;
			--height-logo: 29px;
		}
	}

	@media (max-width: 600px) 
	{
		:root
		{
			//--height-header: 43px;
			//--height-logo: 27px;
		}
	}

	@media (max-width: 400px) 
	{
		:root
		{
			//--height-header: 43px;
			//--height-logo: 25px;
			--fs-root: 14px;
		}
	}
	
	body 
	{
		padding: 0;
		margin: 0;
		border: 0;
		background-color: ${({theme}) => theme.colors.bodyBackground};
		width: 100vw;
		height: 100vh;
		height: 100dvh;
		max-width: 100vw;
		max-height: 100vh;
		max-height: 100dvh;
		position: relative;
		overflow: hidden;
	}

	.filter
	{
		position: fixed;
		overflow: hidden;
		height: 100vh;
		height: 100dvh;
		width: 100vw;
		pointer-events: none;
		
		&::after {
			content: "";
			pointer-events: none;
			position: absolute;
			inset: 0;
			transform: translate(0, -10px);
			height: calc(100% + 20px);
			background: repeating-linear-gradient(
				to bottom,
				${({theme}) => `rgba(${theme.colorsRgbC.boxShadow}, 0.1)`} 0px,
				${({theme}) => `rgba(${theme.colorsRgbC.boxShadow}, 0.1)`} 1.5px,
				transparent 3px,
				transparent 6px
			);
			animation: scanlines 1.3s linear infinite;
			mix-blend-mode: multiply; /* optional */
		}
		
		@keyframes scanlines {
			0%   { background-position: 0 0; opacity: 0.3; }
			50%  { background-position: 0 2px; opacity: 0.5; }
			100% { background-position: 0 4px; opacity: 0.3; }
		}
	}
	
	* 
	{
		scrollbar-color: ${({theme}) => `rgba(${theme.colorsRgbC.boxShadow}, 0.43)`} transparent;
		scrollbar-width: thin;
		-webkit-tap-highlight-color: transparent;
		outline: none;
		font-family: "standard";
		font-weight: 403;
		box-sizing: border-box;

		&::selection 
		{
			background-color: ${(p) => `rgba(${p.theme.colorsRgbC.text}, 0.1)`};
			color: ${(p) => p.theme.colors.text};
		}
	}
`;
