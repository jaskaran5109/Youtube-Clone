import React, { Component } from 'react';
import { Paper, TextField } from '@material-ui/core/'
class SpaceBar extends Component {
    state = {
        searchTerm: ''
    }
   
    handleChange = (event) => {
        event.preventDefault();
        this.setState({
            searchTerm: event.target.value
        })
        // console.log(this.state.searchTerm)
    }
    handleSubmit = (event) => {
        const { searchTerm } = this.state
        const { onSubmit } = this.props
        onSubmit(searchTerm)
        event.preventDefault();

        // console.log(searchTerm)
    }
    render() {
        return (
            <Paper elevation={6} style={{ padding: '25px' }}>
                <form onSubmit={this.handleSubmit}>
                    <TextField id="outlined-basic" variant="outlined" fullWidth label="Search...." onChange={this.handleChange} />
                </form>
            </Paper>
        );
    }
}


export default SpaceBar;
