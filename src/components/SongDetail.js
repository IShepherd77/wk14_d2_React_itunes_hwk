import React from 'react';

const SongDetail = ({song}) => {
    if (!song) return null

    return (
        <div className="song-detail">
            <h3>{song.name}</h3>
        </div>

    )

    };

export default SongDetail;