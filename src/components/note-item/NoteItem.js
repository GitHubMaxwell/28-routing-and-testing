import React from 'react'
import { Link } from 'react-router-dom'


/*

should display the notes content and title
should display a delete button
    onClick the note should be removed from the application state
    
*/
class NoteItem extends React.Component {
    constructor(props) {
        super(props)
        this.removeItem = this.removeItem.bind(this)
    }

    removeItem(event) {
        // have the note selected already??
        // how to get id to pass to removeNote function from Dashboard element
        console.log('Delete Note',event.target.name)
        event.preventDefault();
        let id = event.target.name
        this.props.removeNote(id);
    }

    render() {
        return (
            <React.Fragment>
                {/* <h2>Note Item</h2> */}
                {/* <input type="button" name="delete" onClick={this.extractId}/> */}
                {
                    this.props.notesArr.map((id) =>
                        <li key={id.id}>
                            {/* <Link to={`/item/${id.id}`}>{id.title}</Link> */}
                            <h3>{id.title}</h3>
                            <p>{id.content}</p>
                            <input type="button" onClick={this.removeItem} name={id.id}value="delete"/>

                        </li>
                    )
                }
            </React.Fragment>
        )
    }
}

export default NoteItem;