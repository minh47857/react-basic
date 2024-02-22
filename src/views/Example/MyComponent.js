import React from 'react';

class MyComponent extends React.Component {
    state = {
        firstName: '',
        lastName: '',
    }

    handleOnChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleOnChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    render() {
        return (
            <>
                <form>
                    <label htmlFor="fname">First name:</label><br />
                    <input type="text" value= {this.state.firstName} onChange={event => this.handleOnChangeFirstName(event)}/><br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input type="text"  value= {this.state.lastName} onChange={event => this.handleOnChangeLastName(event)} /><br /><br />
                    <input type="submit" value="Submit" />
                </form>
            </>
        )
    }
}

export default MyComponent;