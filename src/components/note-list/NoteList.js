import React from 'react'
import NoteItem from '../note-item/NoteItem.js'
import { Link } from 'react-router-dom'


// should display an unordered list of NoteItem components

class NoteList extends React.Component {
    constructor(props) {
        super(props)
    }

    /*
have to change this to just this.props.notesArr.map
     <ul>
          {
            Object.keys(this.props.items).map( (id,i) =>
              <li key={id}>
                <Link to={`/item/${id}`}>{this.props.items[id]}</Link>
              </li>
            )
          }
    </ul>

    */

    render() {
        return (
            <React.Fragment>
                <h2>Note List</h2>
                <ul>
                    {
                        this.props.notesArr.map((id) =>
                            <li key={id.id}>
                                <Link to={`/item/${id.id}`}>{id.title}</Link>
                            </li>
                        )
                    }
                </ul>
                <NoteItem removeNote={this.props.removeNote} />
            </React.Fragment>
        )
    }
}

export default NoteList;