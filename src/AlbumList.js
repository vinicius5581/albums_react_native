import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import AlbumDetail from './AlbumDetail';


export default class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then(res => res.json())
    .then(resData => this.setState({albums: resData}));
  }

  renderAlbums() {
    return this.state.albums.map(album => <AlbumDetail key={album.title} album={album}/>);
  }

  render() {
    console.log(this.state);
    const {viewStyle, textStyle} = styles;
    const {albumListText} = this.props;
    return (
      <ScrollView style={viewStyle}>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

const styles = {
  viewStyle: {
  },
  textStyle: {
  }
}
