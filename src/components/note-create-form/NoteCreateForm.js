import React from 'react'

// onComplete the NoteForm should add a note to the application state

class NoteCreateForm extends React.Component {
    constructor(props) {
        super(props)
        this.formComplete = this.formComplete.bind(this)
    }

    formComplete(event) {
        event.preventDefault();
        // console.log(event.target.name)
        this.props.addNote()
    }
//onComplete={this.formComplete}
    render() {
        return (
            <React.Fragment>
                <h2>Create Note</h2>
                <form onSubmit={this.formComplete}>
                    <label>Note Title:</label>
                <input type="text" onChange={this.props.updateNote}/>
                    
                    {/* <br></br> */}
                    <label>Note Content:</label>
                <textarea onChange={this.props.updateNote}></textarea>
                    
                    {/* <input type="button" onClick={this.formComplete} /> */}
                    <button>Submit</button>

                </form>

            </React.Fragment>
        )
    }
}

export default NoteCreateForm;