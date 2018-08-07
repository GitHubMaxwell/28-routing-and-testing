import React from 'react'
import renderer from 'react-test-renderer'
import App from '../../../src/components/app/App.js'
import Dashboard from '../../../src/components/dashboard/Dashboard.js'
import NoteCreateForm from '../../../src/components/note-create-form/NoteCreateForm.js'


xdescribe('Proof of Life Test', () => {
    it('POL', () => {
        let app = shallow(<App/>);
        expect(app.find('main').exists()).toBeTruthy();
    })
})

describe('<Dashboard/> and <NoteCreateForm/> Initial State Snapshot Test', () => {
    it('Dashboard Snapshot Test', () => {
        const component = renderer.create(
            <Dashboard/>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
    it('NoteCreateForm Snapshot Test', () => {
        const component = renderer.create(
            <NoteCreateForm/>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
})