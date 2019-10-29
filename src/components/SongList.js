import React from 'react';
import Song from './Song';

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