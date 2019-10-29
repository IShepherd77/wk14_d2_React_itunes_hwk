import React, { Component } from 'react';
import SongList from "../components/SongList";


class SongContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

componentDidMount(){
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json'

    fetch(url)
        .then(res => res.json())
        .then(data => this.setState({data: data.feed.entry}))
        .catch(err => console.error(err))
}

render() {
    return (
      <div className='song-container'>
        <h1 className="title">iTunes Top 20</h1>
        <SongList data={this.state.data}/>
      </div>
      );
    }
}
  
export default SongContainer;