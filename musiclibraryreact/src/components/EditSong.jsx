import Modal from 'react-bootstrap/Modal';
import React, {Component} from 'react';
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'

class EditSong extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: props.song.id,
            title: props.song.title,
            artist: props.song.artist,
            album: props.song.album,
            release_date: props.song.release_date
        }
    }

    updateSong = () => {
        this.props.closeModal()
        this.props.updateSong(this.state)
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        return (
            <div>
                <Modal show = {this.props.modalState} backdrop="static">
                    <ModalHeader>
                        <ModalTitle>Edit Song: {this.props.song.title}</ModalTitle>
                    </ModalHeader>
                    <ModalBody>
                        <form className = "my-auto" onSubmit={(event) => this.updateSong(event)}>
                        <label htmlFor="title">Title: </label>
                        <input type="text" name = "title" value = {this.state.title} onChange = {this.handleChange}/> <br />
                        <label htmlFor="artist">Artist: </label>
                        <input type="text" name = "artist" value = {this.state.artist} onChange = {this.handleChange}/> <br />
                        <label htmlFor="album">Album: </label>
                        <input type="text" name = "album" value = {this.state.album} onChange = {this.handleChange}/> <br />

                        <label htmlFor="releaseDate">Release Date: </label>
                        <input type="text" name = "release_date" value = {this.state.release_date} onChange = {this.handleChange}/> <br />
                        <button className = 'btn btn-primary' type = "submit">Submit Changes</button>
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <button className = 'btn btn-light' onClick={this.props.closeModal}>Close</button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default EditSong;