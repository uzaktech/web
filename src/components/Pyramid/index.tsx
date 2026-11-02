"use client";

import * as s from "./styles";
import { useEffect, useRef, useState } from "react";
import { getRotationFromM3d } from "@/utils";
import { createPortal } from "react-dom";

export const Pyramid = () => {
	const [dragging, setDragging] = useState<boolean>(false);
	const [moving, setMoving] = useState<boolean>(false);

	const dragStartPoints = useRef<{x: number, y: number} | null>(null);
	const dragStartRotation = useRef<{x: number, y: number, z: number} | null>(null);

	const pyramidRef = useRef<HTMLDivElement | null>(null);

	const getRotation = (element: HTMLElement) => {
		const computedStyle = window.getComputedStyle(element);
		const matrix3dString = computedStyle.transform;

		return getRotationFromM3d(matrix3dString);
	};

	const handlePointerDown = (e: React.PointerEvent) => {
		e.preventDefault();

		const pyramid = pyramidRef.current;

		if (!pyramid) return;

		const rotation = getRotation(pyramid);

		pyramid.style.setProperty("--drag-y", `${rotation.y}deg`);
		pyramid.style.setProperty("--drag-x", `${rotation.x}deg`);

		dragStartPoints.current = {x: e.clientX, y: e.clientY};
		dragStartRotation.current = {x: rotation.x, y: rotation.y, z: rotation.z};

		setDragging(true);
	};

	const handlePointerMove = (e: PointerEvent) => {
		const pyramid = pyramidRef.current;
		const startR = dragStartRotation.current;
		const startP = dragStartPoints.current;

		if (!dragging || !pyramid || !startP || !startR) return;

		setMoving(true);

		const deltaPointX = (e.clientX - startP.x) / 3;
		const deltaPointY = (e.clientY - startP.y) / 3;
		
		const deltaRotationY = startR.y + deltaPointX;
		const deltaRotationX = startR.x - deltaPointY;

		pyramid.style.setProperty("--drag-y", `${deltaRotationY}deg`);
		pyramid.style.setProperty("--drag-x", `${deltaRotationX}deg`);
	};

	const handlePointerUp = () => {
		const pyramid = pyramidRef.current;
		if (!dragging || !pyramid) return;

		const rotation = getRotation(pyramid);

		const shortenedX = rotation.x > 180 ? rotation.x - 360 : rotation.x;

		pyramid.style.setProperty("--drag-y", `${rotation.y}deg`);
		pyramid.style.setProperty("--drag-x", `${shortenedX}deg`);

		setDragging(false);
		setMoving(false);
	};

	useEffect(() => {
 	 if (!dragging) return;

		window.addEventListener("pointermove", handlePointerMove);
		window.addEventListener("pointerup", handlePointerUp);
		window.addEventListener("pointercancel", handlePointerUp);

		return () => {
			window.removeEventListener("pointermove", handlePointerMove);
			window.removeEventListener("pointerup", handlePointerUp);
			window.removeEventListener("pointercancel", handlePointerUp);
		}
	}, [dragging]); 

	return (
		<s.Root onPointerDown={handlePointerDown}>
			{moving && createPortal(<s.MovingFilter />, document.body)}

			<s.Pyramid ref={pyramidRef} $dragging={dragging}>
				<s.Face $side="front">
					<svg viewBox="0 0 200 173.2">
						<polygon points="100,0 0,173.2 200,173.2" fill="url(#frontGrad)" className="pol" strokeWidth="1" />

						<defs>
							<linearGradient id="frontGrad" x1="0%" y1="0%" x2="100%" y2="100%">
								<stop offset="0%" className="stop" />
								<stop offset="130%" className="stop" />
							</linearGradient>
						</defs>
					</svg>
				</s.Face>

				<s.Face $side="right">
					<svg viewBox="0 0 200 173.2">
						<polygon points="100,0 0,173.2 200,173.2" fill="url(#rightGrad)" className="pol" strokeWidth="1" />

						<defs>
							<linearGradient id="rightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
								<stop offset="0%" className="stop" />
								<stop offset="130%" className="stop" />
							</linearGradient>
						</defs>
					</svg>
				</s.Face>

				<s.Face $side="back">
					<svg viewBox="0 0 200 173.2">
						<polygon points="100,0 0,173.2 200,173.2" fill="url(#backGrad)" className="pol" strokeWidth="1" />

						<defs>
							<linearGradient id="backGrad" x1="0%" y1="0%" x2="100%" y2="100%">
								<stop offset="0%" className="stop" />
								<stop offset="130%" className="stop" />
							</linearGradient>
						</defs>
					</svg>
				</s.Face>

				<s.Face $side="left">
					<svg viewBox="0 0 200 173.2">
						<polygon points="100,0 0,173.2 200,173.2" fill="url(#leftGrad)" className="pol" strokeWidth="1" />

						<defs>
							<linearGradient id="leftGrad" x1="0%" y1="0%" x2="100%" y2="100%">
								<stop offset="0%" className="stop" />
								<stop offset="130%" className="stop" />
							</linearGradient>
						</defs>
					</svg>
				</s.Face>

				<s.Base />
			</s.Pyramid>
		</s.Root>
	)
}