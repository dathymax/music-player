import React from "react";
import { IconContext } from "react-icons";
import { IoPlaySkipBack, IoPlay, IoPlaySkipForward } from "react-icons/io5";
import { FaPause } from "react-icons/fa";

const Controls = ({ isPlaying, setIsPlaying, handleNext, handlePrev }) => {
	return (
		<IconContext.Provider value={{ size: "35px", color: "#c4d0e3" }}>
			<div className="controls-wrapper flex">
				<div className="action-btn" onClick={handlePrev}>
					<IoPlaySkipBack />
				</div>
				<div
					className={`play-pause-btn flex ${
						isPlaying ? "active" : ""
					}`}
					onClick={() => setIsPlaying(!isPlaying)}
				>
					{isPlaying ? <FaPause /> : <IoPlay />}
				</div>
				<div className="action-btn" onClick={handleNext}>
					<IoPlaySkipForward />
				</div>
			</div>
		</IconContext.Provider>
	);
};

export default Controls;
