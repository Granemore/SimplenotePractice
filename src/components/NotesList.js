import React from "react"
import Note from "./Note"

class NotesList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            noteArr: [
                {
                    id: 0,
                    noteTitle: "Getting the most out of Simplenote",
                    noteParagraph:
                        "Thanks for signing up!\r\r\nAfter you look around a little, click the Downloads link at the bottom of this page. That's where you can download Simplenote for your device and your computer. Or you can just use this web app if you want. It's up to you.\r\r\nHere are some ideas for how to use Simplenote:\r\r\n- to do lists and reminders\r\n- a grocery list that you share with your family\r\n- notes from a meeting or a class\r\n- a draft for a blog post\r\n- brainstorming\r\n- keeping a journal\r\n- lists of movies, restaurants, or books\r\n- any kind of text\r\r\nEnjoy!",
                    active: true
                }
            ]
        }

        this.handleOnSelectNote = this.handleOnSelectNote.bind(this)
        this.handleTitleChange = this.handleTitleChange.bind(this)
        this.handleParagraphChange = this.handleParagraphChange.bind(this)
    }

    handleOnSelectNote(event) {
        const { id } = event.target
        console.log(id)
    }

    handleTitleChange(event) {
        const { value } = event.target
        let noteArrData = JSON.parse(JSON.stringify(this.state.noteArr))
        let noteArrId = event.target.getAttribute("id")

        noteArrData[noteArrId].noteTitle = value
        this.setState({
            noteArr: noteArrData
        })
    }

    handleParagraphChange(event) {
        const { value } = event.target
        let noteArrData = JSON.parse(JSON.stringify(this.state.noteArr))
        let noteArrId = event.target.getAttribute("id")

        noteArrData[noteArrId].noteParagraph = value
        this.setState({
            noteArr: noteArrData
        })
    }

    render() {
        return (
            <div className="notesList">
                <ul>
                    {this.state.noteArr.map(note => (
                        <Note
                            key={note.id}
                            id={note.id}
                            noteTitle={note.noteTitle}
                            noteParagraph={note.noteParagraph}
                            handleOnSelectNote={this.handleOnSelectNote}
                            active={note.active}
                            handleTitleChange={this.handleTitleChange}
                            handleParagraphChange={this.handleParagraphChange}
                        />
                    ))}
                </ul>

                {/* <div className="textArea">
                    <input
                        type="text"
                        className="titleTextArea"
                        name="noteTitle"
                        placeholder="Enter title here..."
                        onChange={this.handleTextChange}
                    />

                    <textarea placeholder="Enter note here..." />
                </div> */}
            </div>
        )
    }
}

export default NotesList
