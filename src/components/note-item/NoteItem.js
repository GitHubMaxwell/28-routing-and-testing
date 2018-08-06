import React from 'react'


/*

should display the notes content and title
should display a delete button
    onClick the note should be removed from the application state
    
*/
class NoteItem extends React.Component {
    constructor(props) {
        super(props)
        this.extractId = this.extractId.bind(this)
    }

    extractId(event) {
        // have the note selected already??
        // how to get id to pass to removeNote function from Dashboard element
        console.log('Delete Note')
        event.preventDefault();
        let id = event.target.value
        this.props.removeNote(id);
    }

    render() {
        return (
            <React.Fragment>
                <h2>Note Item</h2>
                <input type="button" name="delete" onClick={this.extractId}/>
            </React.Fragment>
        )
    }
}

export default NoteItem;