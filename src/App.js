import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid'
import Youtube from './Api/Youtube'
import SpaceBar from './Components/SpaceBar'
import VideoDetail from './Components/VideoDetail'
import VideoList from './Components/VideoList'

class App extends Component {
  state={
    video:[],
    selectedVideo:null
  }
  componentDidMount(){
    this.handleSubmit('harvinder singh Java')
}
  onVideoSelect=(video)=>{
    this.setState({selectedVideo:video})
  }
  handleSubmit = async (searchTerm) => {
    const response = await Youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 10,
        key: 'AIzaSyB0b5B9f8Mq0Tk92g_wE0xYqXg9QIiFnZw',
        q: searchTerm
      }
    })
    this.setState({video:response.data.items,selectedVideo:response.data.items[0]})
  }
  render() {
    return (
      <Grid justify="center" container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>

            <Grid item xs={12}>
              <SpaceBar onSubmit={this.handleSubmit} />
            </Grid>

            <Grid item xs={8} style={{ height:'800px'}}>
              <VideoDetail video={this.state.selectedVideo}/>
            </Grid>

            <Grid item xs={4}>
              <VideoList video={this.state.video} selectedVideo={this.onVideoSelect}/>
            </Grid>

          </Grid>
        </Grid>
      </Grid>
    );
  }
}



export default App;
