import React from 'react';

const SongList = ({data}) => {
    const songNodes = data.map(song => {
        return (
            <Song>????????</Song>
        );
    });

    return (
        <div className="song-list">
            {songNodes}
            </div>
    )
}

export default SongList;