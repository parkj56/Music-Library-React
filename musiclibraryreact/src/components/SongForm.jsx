import './SongForm.css'
import React, {Component} from 'react';

class SongForm extends Component{

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            artist: '',
            album: '',
            release_date: '',
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        this.props.createSong(this.state)
        this.props.updateList()
    }

    render() {
        return (
            <span>
                <h1>Create Song</h1>
                <hr />
                <form className = "my-auto" onSubmit={(event) => this.handleSubmit(event)}>
                    <label htmlFor= "title">Title: </label>
                    <input type="text" name = "title" value = {this.state.title} onChange = {this.handleChange}/>
                    <br />
                    <label htmlFor= "artist">Artist: </label>
                    <input type="text" name = "artist" value = {this.state.artist} onChange = {this.handleChange}/>
                    <br />
                    <label htmlFor= "album">Album: </label>
                    <input type="text" name = "album" value = {this.state.album} onChange = {this.handleChange}/>
                    <br />
                    <label htmlFor= "releaseDate">Release Date: </label>
                    <input type="date" name = "release_date" value = {this.state.releaseDate} onChange = {this.handleChange}/>
                    <br />
                    <br />
                    <button className = "btn btn-success"type = "submit">Create Song</button>
                </form>
            </span>
         );
    }
}
 
export default SongForm;