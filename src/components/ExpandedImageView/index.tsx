"use client";

import { createPortal } from "react-dom";
import * as s from "./styles";
import { useEffect, useState } from "react";

export type ExpandedImageViewObject = {
	label: string, 
	src: string, 
	selected: boolean
}

export type ExpandedImageViewParams = {
	images: ExpandedImageViewObject[],
	show: boolean,
	hide: () => void
}

export const ExpandedImageView = ({ images, show, hide }: ExpandedImageViewParams) => {
	const [_images, setImages] = useState<ExpandedImageViewObject[]>([]);

	const arrowClick = (index: 0 | 1) => {
		const selectedIndex = _images.findIndex(a => a.selected == true);

		let newImages = [..._images];

		newImages[selectedIndex].selected = false;
		newImages[selectedIndex - (index == 0 ? 1 : -1)].selected = true;

		setImages(newImages);
	}

	useEffect(() => {
		if (_images.length == 0) setImages(images);
	}, [images, _images])

	useEffect(() => {
		setImages(images);

		if (show) {
			const handleKeyDown = (e: KeyboardEvent) => {
				if (e.key.toLowerCase() === "escape") {
					e.preventDefault();
					hide();
				}
			};

			window.addEventListener('keydown', handleKeyDown);
			
			return () => window.removeEventListener('keydown', handleKeyDown);
		}
	}, [show]);

	return show ? createPortal(
		<>
			<s.Background onClick={hide} />
			<s.ImageFrame>
				<s.TitleFrame>
					<s.Arrow $side="left" onClick={() => arrowClick(0)} $disable={_images.findIndex(a => a.selected == true) <= 0} />

					<s.Label>{_images.filter(a => a.selected == true)[0]?.label}</s.Label>

					<s.Arrow $side="right" onClick={() => arrowClick(1)} $disable={_images.findIndex(a => a.selected == true) >= (_images.length - 1)} />
				</s.TitleFrame>
				<s.Image src={_images.filter(a => a.selected == true)[0]?.src} />
			</s.ImageFrame>
		</>,
		document.body
	) : null;
}