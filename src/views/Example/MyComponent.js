import React from 'react';
import ChildComponent from './ChildComponent';

class MyComponent extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        arrayJob: [
            {id: 'abcjob1', nameJob: 'Developer', salary: '1000'},
            {id: 'abcjob2', nameJob: 'Tester', salary: '500'},
            {id: 'abcjob3', nameJob: 'Project Manager', salary: '2000'}
        ]
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
                <ChildComponent 
                    name={this.state.firstName} 
                    age={"20"}
                    address={"Ha Noi"}
                    arrayJob = {this.state.arrayJob}
                />
            </>
        )
    }
}

export default MyComponent;