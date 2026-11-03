export const getRotationFromM3d = (matrix: string) => {
	if (!matrix || matrix === 'none') return { x: 0, y: 0, z: 0 };

	const matches = matrix.match(/^matrix3d\((.+)\)$/);

	if (!matches) {
		if (matrix.startsWith('matrix(')) {
			const vals = matrix.split('(')[1].split(')')[0].split(',');
			const az = Math.round(Math.atan2(parseFloat(vals[1]), parseFloat(vals[0])) * (180 / Math.PI));

			return { x: 0, y: 0, z: az };
		}
		return { x: 0, y: 0, z: 0 };
	}

	const m = matches[1].split(',').map(Number);

	const radToDeg = 180 / Math.PI;

	const rotY = Math.atan2(m[8], m[0]);
	const rotX = Math.atan2(m[6], m[5]);
	const rotZ = Math.abs(m[8]) < 0.99999 ? Math.atan2(-m[4], m[0]) : 0;

	return {
		x: Math.round(rotX * radToDeg),
		y: Math.round(rotY * radToDeg),
		z: Math.round(rotZ * radToDeg)
	};
};