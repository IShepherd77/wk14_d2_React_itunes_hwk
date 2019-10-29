import React from 'react';

const SongDetail = ({song, index}) => {
    if (!song) return null

    return (
        <div className="song-detail">
            <h2>{index +1} {song['im:name'].label}</h2>
            <h4>{song['im:artist'].label}</h4>
            <br/>
        </div>

    )

    };

export default SongDetail;