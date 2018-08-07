import React from 'react'

// onComplete the NoteForm should add a note to the application state

class NoteCreateForm extends React.Component {
    constructor(props) {
        super(props)
        this.formComplete = this.formComplete.bind(this);
        this.handleTitle = this.handleTitle.bind(this)
        this.handleContent = this.handleContent.bind(this)
    }

    formComplete(event) {
        event.preventDefault();
        // console.log(event.target.name)
        this.props.addNote()
        document.getElementById('form').reset()
    }

    handleTitle(e) {
        this.props.updateTitle(e.target.value)
    }
    handleContent(e) {
        this.props.updateContent(e.target.value)
    }
    render() {
        return (
            <React.Fragment>
                <h2>Create Note</h2>
                <form id="form" onSubmit={this.formComplete}>
                
                <label>Note Title:</label>
                <input type="text" onChange={this.handleTitle}/>
                <label>Note Content:</label>
                <textarea onChange={this.handleContent}></textarea>
                <button>Submit</button>

                </form>

            </React.Fragment>
        )
    }
}

export default NoteCreateForm;