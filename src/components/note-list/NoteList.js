import React from 'react'
import NoteItem from '../note-item/NoteItem.js'

class NoteList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <React.Fragment>
                <h2>Note List</h2>
                <ul>
                    <NoteItem notesArr = {this.props.notesArr} removeNote = {this.props.removeNote}/>
                </ul>
            </React.Fragment>
        )
    }
}

export default NoteList;