import React from 'react'
import { Grid, Paper, Typography } from '@material-ui/core/'
const VideoItems = ({ videos, selectedVideo }) => {
    return (
        <Grid elevation={6} item xs={12} style={{ marginRight: '20px'}}>
            <Paper style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => { selectedVideo(videos) }}>
                <img style={{ marginRight: '20px' }} alt="thumbnail" src={videos.snippet.thumbnails.medium.url} />
                <Typography variant="subtitle1"><b>{videos.snippet.title}</b></Typography>
            </Paper>
               

        </Grid>
    )
}

export default VideoItems
