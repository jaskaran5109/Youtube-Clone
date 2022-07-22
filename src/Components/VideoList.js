import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core/'
import VideoItems from './VideoItems'
const VideoList = ({ video,selectedVideo }) => {
    const listOfVideos = video.map((item, index) => {
        return <VideoItems key={index} selectedVideo={selectedVideo} videos={item} />
    })
    return (
        <Grid container spacing={10}>

            {listOfVideos}
        </Grid>
    )
}

export default VideoList
