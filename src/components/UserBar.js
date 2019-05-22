import React from "react"

class UserBar extends React.Component {
    constructor() {
        super()

        this.state = {
            dropdownOpacity: 0,
            gotValue: false,
            userAcc: "marclim56@gmail.com",
            tagValue: "",
            tags: []
        }

        this.handleDropdownClick = this.handleDropdownClick.bind(this)
    }

    handleDropdownClick() {
        if (this.state.dropdownOpacity === 1) {
            this.setState({ dropdownOpacity: 0 })
        } else {
            this.setState({ dropdownOpacity: 1 })
        }
    }

    render() {
        return (
            <div className="userBarCon">
                <div className="userOptionsCon">
                    {/* <ul>
                        <li>asdas</li>
                        <li>asdasd</li>
                        <li>asdasd</li>
                        <li>asdasd</li>
                    </ul> */}
                    <div className="userAccCon">
                        <button
                            className="userAccBtn"
                            onClick={this.handleDropdownClick}
                        >
                            {this.state.userAcc}
                        </button>
                        <ul
                            className="userAccDropdown"
                            style={{
                                opacity: this.state.dropdownOpacity
                            }}
                        >
                            <li className="accDropdownItems">Settings</li>
                            <li className="accDropdownItems">Sign Out</li>
                            <li className="accDropdownItems">Export Notes</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserBar
