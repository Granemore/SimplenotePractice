import React from "react"

const Note = props => {
    return (
        <li
            className={"note" + (props.active && " selected")}
            onClick={props.handleOnSelectNote}
            id={props.id}
        >
            <h3>{props.noteTitle}</h3>
            <p>{props.noteParagraph}</p>

            <div className="textArea">
                <input
                    type="text"
                    className="titleTextArea"
                    name="noteTitle"
                    placeholder="Enter title here..."
                    onChange={props.handleTitleChange}
                    id={props.id}
                    value={props.noteTitle}
                />

                <textarea
                    name="noteParagraph"
                    placeholder="Enter note here..."
                    onChange={props.handleParagraphChange}
                    id={props.id}
                    value={props.noteParagraph}
                />
            </div>
        </li>
    )
}

export default Note
