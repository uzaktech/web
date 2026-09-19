import styled from "styled-components";

export const Abbr = styled.abbr`
	height: fit-content;
	position: relative;
	width: fit-content;
	display: flex;
`;

export const Icon = styled.img<{$small?: boolean}>`
	aspect-ratio: 1;
	height: ${(p) => p.$small ? "15px" : "18px"};
	user-select: none;
	//filter: saturate(0%);
	position: relative;
	
	/*&:hover { 
		filter: saturate(100%);
	}*/

	@media (max-width: 500px) {
		height: 15px;
	}
`;