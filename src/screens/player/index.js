import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AudioPlayer from "../../components/audio-player";
import Queue from "../../components/queue";
import SongCard from "../../components/song-card";
import apiClient from "../../spotify";

const Player = () => {
	const location = useLocation();
	const [tracks, setTracks] = useState([]);
	const [currentTrack, setCurrentTrack] = useState({});
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		if (location.state) {
			apiClient
				.get("playlists/" + location.state.id + "/tracks")
				.then((response) => {
					setTracks(response.data.items);
					setCurrentTrack(response.data.items[0].track);
				});
		}
	}, [location.state]);

	useEffect(() => {
		setCurrentTrack(tracks[currentIndex]?.track);
	}, [currentIndex, tracks]);

	return (
		<div className="screen-container flex">
			<div className="player-body-left">
				<AudioPlayer
					total={tracks}
					currentTrack={currentTrack}
					currentIndex={currentIndex}
					setCurrentIndex={setCurrentIndex}
				/>
			</div>
			<div className="player-body-right">
				<SongCard album={currentTrack?.album} />
				<Queue tracks={tracks} setCurrentIndex={setCurrentIndex} />
			</div>
		</div>
	);
};

export default Player;
