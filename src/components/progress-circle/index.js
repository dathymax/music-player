import React from "react";

const Circle = ({ percentage, color, size, strokeWidth }) => {
	const radius = size / 2 - 10;
	const circ = 2 * Math.PI * r - 20;
	const strokePct = (100 - Math.round(percentage) * circ) / 100;

	return (
		<circle
			r={radius}
			cx="50%"
			cy="50%"
			fill="transparent"
			stroke={strokePct !== circ ? color : ""}
			strokeWidth={strokeWidth}
			strokeDasharray
		/>
	);
};

const ProgressCircle = ({ percentage, isPlaying, size, color }) => {
	return <div></div>;
};

export default ProgressCircle;
