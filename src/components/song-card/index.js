import React from "react";
import AlbumImage from "./AlbumImage";
import AlbumInfo from "./AlbumInfo";
import NoURL from "../../asset/no-url.webp";

const SongCard = ({ album }) => {
	return (
		<div className="song-card-body flex">
			<AlbumImage url={album?.images[0]?.url || NoURL} />
			<AlbumInfo album={album} />
		</div>
	);
};

export default SongCard;
