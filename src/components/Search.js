import React from "react"

class Search extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            searchTerm: "",
            resetOpacity: 0
        }

        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleClick(event) {
        const { value } = event.target
        this.setState({
            searchTerm: ""
        })
        if (!value) {
            this.setState({ resetOpacity: 0 })
        } else {
            this.setState({ resetOpacity: 1 })
        }
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({ [name]: value })
        if (!value) {
            this.setState({ resetOpacity: 0 })
        } else {
            this.setState({ resetOpacity: 1 })
        }
    }

    render() {
        return (
            <div className="searchCon">
                <div className="searchConPadding">
                    <form className="searchForm">
                        <input
                            type="textbox"
                            name="searchTerm"
                            value={this.state.searchTerm}
                            onChange={this.handleChange}
                        />
                        <button
                            className="resetBtn"
                            type="reset"
                            style={{ opacity: this.state.resetOpacity }}
                            onClick={this.handleClick}
                        />
                    </form>
                    <button
                        className="addItems"
                        title="Add Note"
                        onClick={this.props.handleAddNote}
                    />
                </div>
            </div>
        )
    }
}

export default Search
