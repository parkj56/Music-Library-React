import './MusicTable.css'
import React, {useState} from 'react'
import EditSong from '../EditSong/EditSong.jsx';

function MusicTable(props) {

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [songClicked, setSongClicked] = useState('')

    function modalHandler(song) {
        setModalIsOpen(true);
        setSongClicked(song)
    }

    function closeModal() {
        setModalIsOpen(false)
    }


    return ( 

        <div>
            <table className = "table table-sortable musicTable">
                <thead>
                    <tr>
                        <th onClick = {() => props.sortSongs("title")}>Title</th>
                        <th onClick = {() => props.sortSongs("artist")}>Artist</th>
                        <th onClick = {() => props.sortSongs("album")}>Album</th>
                        <th onClick = {() => props.sortSongs("release_date")}>Release Date</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                {props.songs.map((song) => {
                    return <tr key = {song.id}>
                    <td onClick = {() => modalHandler(song)}>{song.title}</td>
                    <td onClick = {() => modalHandler(song)}>{song.artist}</td><td onClick = {() => modalHandler(song)}>{song.album}</td><td onClick = {() => modalHandler(song)}>{song.release_date}</td>
                    <td><button className = "btn btn-danger" onClick = {() =>props.deleteSong(song.id)}>Delete</button></td></tr>
                })}
                </tbody>
            </table>
            {modalIsOpen && <EditSong song = {songClicked} modalState = {modalIsOpen} closeModal = {closeModal} updateSong = {props.updateSong}/>}
        </div>
    );
}

 
export default MusicTable;