import React from "react";

const Queue = ({ tracks, setCurrentIndex }) => {
	return (
		<div className="queue-container flex">
			<div className="queue flex">
				<p className="up-next">Up Next</p>
				<div className="queue-list">
					{tracks.map((track, index) => {
						return (
							<div
								key={index}
								className="queue-item"
								onClick={() => setCurrentIndex(index)}
							>
								<p className="track-name">
									{track?.track?.name}
								</p>
								<p>0:30</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Queue;
