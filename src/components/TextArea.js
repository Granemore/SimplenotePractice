import React from "react"

class TextArea extends React.Component {
    render() {
        return (
            <div className="textArea">
                <input
                    type="text"
                    className="titleTextArea"
                    placeholder="Enter title here..."
                />

                <textarea placeholder="Enter note here..." />
            </div>
        )
    }
}

export default TextArea
