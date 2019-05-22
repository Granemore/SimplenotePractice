import React from "react"

class TagBar extends React.Component {
    constructor() {
        super()

        this.state = {
            listOpacity: 0
        }

        this.handleDropdown = this.handleDropdown.bind(this)
    }

    handleDropdown() {
        if (this.state.listOpacity === 1) {
            this.setState({ listOpacity: 0 })
        } else {
            this.setState({ listOpacity: 1 })
        }
    }

    render() {
        return (
            <div className="tagBarCon">
                <div className="tagBarView">
                    <div className="tagBarViewCon">
                        <button
                            className="tagBarViewBtn"
                            onClick={this.handleDropdown}
                        >
                            Tags
                        </button>
                        <ul
                            className="tagBarViewList"
                            style={{ opacity: this.state.listOpacity }}
                        >
                            <li className="tagBarViewListItems">All Notes</li>
                            <li className="tagBarViewListItems">Trash</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default TagBar
