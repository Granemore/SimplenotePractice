import React from "react"
import Search from "./Search"
import TagBar from "./TagBar"
import NotesList from "./NotesList"
import Note from "./Note"

class SideBar extends React.Component {
    constructor() {
        super()

        this.handleAddNote = this.handleAddNote.bind(this)
    }

    handleAddNote() {
        this.setState({
            noteArr: this.state.noteArr.concat(<Note />)
        })
    }

    render() {
        return (
            <div className="sideBarCon">
                <Search />
                <TagBar />
                <NotesList handleAddNote={this.handleAddNote} />
            </div>
        )
    }
}

export default SideBar
