// This stateful component is going to compose our FilterInput 
// and Artists together by managing the state of the input form, 
// and then filtering the list of artists it passes to Artists

import React, { Component } from 'react';
import axios from 'axios';
import initialState from '../initialState';
import Albums from '../components/Albums.js';
import Artists from '../components/Artists.js';
import Artist from '../components/Artist.js';
import Album from '../components/Album';
import Sidebar from '../components/Sidebar';
import { convertAlbum, convertAlbums, convertSong, skip } from '../utils';

import FilterInput from '../components/FilterInput';

export default class FilterableArtistsContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
        inputValue: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

// write a method like this in FilterableInputContainer.js:
    handleChange (evt) {
        const value = evt.target.value;
        this.setState({
            inputValue: value
        });
    }


render () {
    const inputValue = this.state.inputValue;
    const filteredArtists = this.props.artists.filter(artist => artist.name.match(inputValue));

    return (
        <div>
            <FilterInput handleChange={this.handleChange} />
            <Artists artists={filteredArtists} />
        </div>
    )
}

}
