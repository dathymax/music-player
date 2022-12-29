import React from "react";

const AlbumImage = ({ url = "" }) => {
	return (
		<div className="album-image flex">
			<img src={url} alt="album art" className="album-image-art" />
			<div className="album-image-shadow">
				<img src={url} alt="album-shadow" />
			</div>
		</div>
	);
};

export default AlbumImage;
