import * as s from "./styles";
import { ExpandedImageView, ExpandedImageViewObject } from "@/components";
import { MouseEvent, useEffect, useRef, useState } from "react";

export const ImageShowCase = ({images}: {images: string[]}) => {
	const [imagesExpand, setImageExpand] = useState<ExpandedImageViewObject[]>([]);
	const [showImageView, setShowImageView] = useState<boolean>(false);
	const [durationExpo] = useState<number>(5300);
	const [currentImage, setCurrentImage] = useState<number>(0);
	const [paused, setPaused] = useState<boolean>(false);

	const indexRowRef = useRef<HTMLDivElement | null>(null);

	const rootRef = useRef<HTMLDivElement | null>(null);

	const clickImage = () => {
		const list: ExpandedImageViewObject[] = images.map((a, i) => {
			return {
				label: `Project Captures ${i + 1}/${images.length}`,
				src: a
			} as ExpandedImageViewObject
		});

		setImageExpand(list);
		setShowImageView(true);
	}

	const updateImage = () => {
		const newIndex = (currentImage + 1) >= images.length ? 0 : (currentImage + 1);

		setCurrentImage(newIndex);

		return newIndex;
	}

	const clickIndex = (e: MouseEvent) => {
		const index = parseFloat((e.currentTarget as HTMLDivElement).dataset.index ?? "0");

		setCurrentImage(index);
	}

	useEffect(() => {
		if (paused) return;

		let raf = 0;
		let start = performance.now();

		const frame = (now: number) => {
			let elapsed = now - start;
			let newIndex = currentImage;
			
			if (elapsed >= durationExpo) {
				start += Math.floor(elapsed / durationExpo) * durationExpo;
				elapsed = now - start;

				newIndex = updateImage();
			}
			
			if (indexRowRef.current) {
				const currentBox: HTMLElement | null = indexRowRef.current.querySelector(`[data-index="${newIndex}"]`);

				if (currentBox) currentBox.style.setProperty("--progress", `${(elapsed / durationExpo) * 100}%`);
					
				Array.from({length: newIndex}).map((a, i) => {
					const oldBox: HTMLElement | null = indexRowRef.current!.querySelector(`div[data-index="${i}"]`);

					if (oldBox) oldBox.style.setProperty("--progress", "100%");
				});
				
				Array.from({length: images.length - newIndex - 1}).map((a, i) => {
					const newBox: HTMLElement | null = indexRowRef.current!.querySelector(`div[data-index="${newIndex + i + 1}"]`);
	
					if (newBox) newBox.style.setProperty("--progress", "0%");
				});
			}

			raf = requestAnimationFrame(frame);
		};

		raf = requestAnimationFrame(frame);
		return () => cancelAnimationFrame(raf);
	}, [durationExpo, currentImage, paused, indexRowRef.current]);

	useEffect(() => {
		setPaused(showImageView);
	}, [showImageView])

	return ( 
		<s.Root ref={rootRef}>
			<s.Wrapper>
				<s.Img src={images[currentImage]} onClick={clickImage} />
			</s.Wrapper>

			<s.IndexRow ref={indexRowRef}>
				{Array.from({length: images.length}).map((a, i) => 
					<s.IndexBox key={i} data-index={`${i}`} onClick={clickIndex} />
				)}
			</s.IndexRow>

			<ExpandedImageView images={imagesExpand} show={showImageView} index={currentImage} setIndex={setCurrentImage} hide={() => setShowImageView(false)} />
		</s.Root>
	)
}