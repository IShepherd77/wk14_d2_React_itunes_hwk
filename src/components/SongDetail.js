import React from 'react';

const SongDetail = ({song, index}) => {
    if (!song) return null

    return (
        <div className="song-detail">
            <h1>{index +1}) {song['im:name'].label}</h1>
            <h2>{song['im:artist'].label}</h2>
            <h4 className="release">(Release Date: {song['im:releaseDate'].attributes.label})</h4>
            <h4>{song['im:price'].label}</h4>
            <hr></hr>
            <br/>
        </div>

    )

    };

export default SongDetail;