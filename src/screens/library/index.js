import React, { useEffect, useState } from "react";
import APIKit from "../../spotify";
import NoURL from "../../asset/no-url.webp";
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Library = () => {
	const [playlists, setPlaylists] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		APIKit.get("me/playlists").then(function (response) {
			setPlaylists(response.data.items);
		});
	}, []);

	const playPlaylist = (id) => {
		navigate("/player", { state: { id: id } });
	};

	return (
		<div className="screen-container">
			<div className="library-body">
				{playlists?.map((playlist, index) => {
					return (
						<div
							key={index}
							className="playlist-card"
							onClick={() => playPlaylist(playlist.id)}
						>
							<img
								src={playlist?.images[0]?.url || NoURL}
								alt="Playlist art"
								className="playlist-image"
							/>
							<p className="playlist-title">{playlist.name}</p>
							<p className="playlist-subtitle">
								{playlist.tracks.total} Songs
							</p>
							<div className="playlist-fade">
								<IconContext.Provider
									value={{ size: "50px", color: "#e99d72" }}
								>
									<AiFillPlayCircle />
								</IconContext.Provider>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Library;
