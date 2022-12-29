import React from "react";
import ProgressCircle from "../progress-circle";

const AudioPlayer = ({ currentTrack }) => {
	return (
		<div className="audio-player-body flex">
			<div className="audio-player-left">
				<ProgressCircle
					percentage={75}
					isPlaying={true}
					image={currentTrack?.images[0]?.url}
					size={300}
					color="#c96850"
				/>
			</div>
			<div className="audio-player-right"></div>
		</div>
	);
};

export default AudioPlayer;
