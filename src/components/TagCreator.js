import React from "react"

class TagCreator extends React.Component {
    constructor() {
        super()

        this.state = {
            tags: [],
            tagValue: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleKeyUp = this.handleKeyUp.bind(this)
        this.handleKeyDown = this.handleKeyDown.bind(this)
        this.addTag = this.addTag.bind(this)
    }

    handleChange(event) {
        const { value } = event.target
        this.setState({
            tagValue: value
        })
    }

    handleKeyUp(event) {
        const key = event.key
        if (key === "Enter" || key === " " || key === ",") {
            this.addTag()
        }
    }

    handleKeyDown(event) {
        const key = event.key
        if (key === "Backspace" && !this.state.tagValue && this.state.tags) {
            this.editPrevTag()
        }
    }

    addTag() {
        const { tags, tagValue } = this.state
        let tag = tagValue.trim()

        tag = tag.replace(/,/g, "")

        if (!tag) {
            return
        }

        this.setState({
            tags: [...tags, tag],
            tagValue: ""
        })
    }

    editPrevTag() {
        let { tags } = this.state

        const tag = tags.pop()
        this.setState({
            tags,
            tagValue: tag
        })
    }

    render() {
        const { tags, tagValue } = this.state
        return (
            <div className="tagCreator">
                <div className="tagCreatorInputWrapper">
                    <ul className="createdTagList">
                        {tags.map((tag, i) => (
                            <li key={tag + i} className="tag">
                                {tag}
                            </li>
                        ))}
                    </ul>
                    <input
                        type="text"
                        className="tagCreatorInput"
                        placeholder="Add tag..."
                        value={tagValue}
                        onChange={this.handleChange}
                        onKeyUp={this.handleKeyUp}
                        onKeyDown={this.handleKeyDown}
                    />
                </div>
            </div>
        )
    }
}

export default TagCreator
