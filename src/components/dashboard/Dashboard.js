import React from 'react'
import NoteList from '../note-list/NoteList.js'
import NoteCreateForm from '../note-create-form/NoteCreateForm.js'
import uuidv1 from 'uuid/v1'
/*

    The Dashboard component should manage the entire application state
    The state should contain a notes array
    It should have a bound addNote(note) method that adds a note to state.notes
        each note that gets added should have the following data
            id: always should contain the result of uuid.v1()
            editing: false by default
            completed: false by default
            content: user provided content
            title: user provided title
    It should have a bound removeNote(note) method that removes a note from state.notes based on its id

*/

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            note: {
                id: '',
                editing: false,
                completed: false,
                content: '',
                title: '',
            },
            notes: [{
                id: 'fakeID',
                editing: false,
                completed: false,
                content: 'this is the content',
                title: 'TITLE',
            }]
        }
        this.addNote = this.addNote.bind(this)
        this.removeNote = this.removeNote.bind(this)
        this.updateNote = this.updateNote.bind(this)
    }

    updateNote(event) {
        let editing, completed = false;
        let id = uuidv1();
        console.log(this.state.note)

        this.setState = {
            note: {
                id,
                title: event.target.value,
                content: event.target.value,
                editing,
                completed
            }
        }
    }

    addNote() {
        // event.preventDefault();

        /*
        the object equivalent

        addItem(data) {
        let item = {};
        item[data.id] = data.text;
        this.setState( Object.assign(this.state.items,item) );
        }

        */
        // not a function?
        this.setState((prevState) => {
            return { note: {
                // id : uuidv1(),
                editing : !prevState.editing,
                completed : !prevState.completed
            }
          };
        });

        console.log('SUBMIT', this.state.note)

        // let notes = this.state.notes.push(this.state.note)
        // console.log('ARRAY Before', notes)
        console.log('ARRAY state', this.state.notes)


        this.setState((prevState) => {
            return { notes : prevState.notes.push(this.state.note)};
        });

        // console.log('ARRAY After', this.state.notesArr)
    }

    removeNote(note) {
        // removes a note from state.notes based on its id
        // might not have to do note.id but just note
        console.log('removeNote')
        // let index = this.state.notes.indexOf(note.id)
        // console.log(index)
        // let notes = this.state.notes.splice(index, 1)
        let notes = this.state.notes.splice(0, 1)

        console.log(notes)

        this.setState({
            notes
        })
        console.log('DELETE after',notes)

    }

    /*
    do this 

        componentDidUpdate(prevProps) {
            // Typical usage (don't forget to compare props):
            if (this.props.userID !== prevProps.userID) {
                this.fetchData(this.props.userID);
            }
        }

    */

    //might need to send attribute with addNote?
    render() {
        return (
            <React.Fragment>
                <h2>Dashboard</h2>
                <NoteCreateForm updateNote={this.updateNote} addNote={this.addNote} />
                <NoteList notesArr={this.state.notes} removeNote={this.removeNote} />
            </React.Fragment>
        )
    }
}

export default Dashboard;