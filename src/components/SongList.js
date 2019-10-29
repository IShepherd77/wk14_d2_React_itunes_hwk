import React from 'react';
import SongDetail from './SongDetail';

const SongList = ({data}) => {
    const songNodes = data.map((song, index) => {
        return (
            <SongDetail song={song} key={song.id.attributes['im:id']} index={index}></SongDetail>
        );
    });

    return (
        <div className="song-list">
            {songNodes}
            </div>
    )
}

export default SongList;