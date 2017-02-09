// The NewPlaylist component is a form 
// so let's write another container component to 
// contain the current value of the input. Here's what we'll need:

// A state field for the input value
// A method to set the input value on state when the input changes (just like the FilterInput component)
// A method to do something with the input value when the form is submitted (this will get passed as the onSubmit prop to the <form> element - not to the <button>)


import React, { Component } from 'react';
import axios from 'axios';
import initialState from '../initialState';
import Albums from '../components/Albums.js';
import Artists from '../components/Artists.js';
import Artist from '../components/Artist.js';
import Album from '../components/Album';
import NewPlaylist from '../components/NewPlaylist';
import Sidebar from '../components/Sidebar';
import { convertAlbum, convertAlbums, convertSong, skip } from '../utils';

import FilterInput from '../components/FilterInput';

export default class NewPlaylistContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
        inputValue: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addPlaylist = this.addPlaylist.bind(this);
  }

// write a method like this in FilterableInputContainer.js:

  handleSubmit(evt) {
    console.log('A name was submitted: ' + this.state.inputValue);
        this.setState({
            inputValue: '',
            submissionAttempted: true
        });
    evt.preventDefault();
    
    const addPlaylist = this.props.addPlaylist;
    addPlaylist(this.state.inputValue);
  }

addPlaylist (playlistName) {
    axios.post('/api/playlists', { name: playlistName })
      .then(res => res.data)
      .then(playlist => {
        this.setState({
          playlists: [...this.state.playlists, playlist]
        });
      });
  }

    handleChange (evt) {
        this.setState({
            inputValue: evt.target.value,
            submissionAttempted: false
        });
    }

render () {
    return (
        <div>
        <NewPlaylist
        submissionAttempted={this.state.submissionAttempted}
        inputValue={this.state.inputValue}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        addPlaylist={this.addPlaylist}
        />
        </div>
    );
}

}