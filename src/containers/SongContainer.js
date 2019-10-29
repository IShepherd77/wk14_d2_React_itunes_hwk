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
        .then(data => this.setState({data: data}))
        .catch(err => console.error(err))
}

render() {
    return (
      <div className='song-container'>
  <h1>testing song container here</h1>
      </div>
      );
    }
}
  


export default SongContainer;