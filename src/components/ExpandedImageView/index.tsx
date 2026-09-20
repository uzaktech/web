"use client";

import { createPortal } from "react-dom";
import * as s from "./styles";
import { useEffect, useState } from "react";

export type ExpandedImageViewObject = {
	label: string, 
	src: string
}

export type ExpandedImageViewParams = {
	images: ExpandedImageViewObject[],
	show: boolean,
	index: number,
	setIndex: (i: number) => void,
	hide: () => void
}

export const ExpandedImageView = ({ images, show, index, setIndex, hide }: ExpandedImageViewParams) => {
	const [_images, setImages] = useState<ExpandedImageViewObject[]>([]);

	const arrowClick = (_index: 0 | 1) => {
		const newIndex = _index == 1 ? (Math.min(index + 1, images.length)) : (Math.max(index - 1, 0));

		setIndex(newIndex);
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
					<s.Arrow $side="left" onClick={() => arrowClick(0)} $disable={index == 0} />

					<s.Label>{_images[index ?? 0]?.label}</s.Label>

					<s.Arrow $side="right" onClick={() => arrowClick(1)} $disable={index == images.length - 1} />
				</s.TitleFrame>
				<s.Image src={_images[index ?? 0]?.src} />
			</s.ImageFrame>
		</>,
		document.body
	) : null;
}