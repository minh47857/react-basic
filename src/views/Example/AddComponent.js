import React from 'react'

class AddComponent extends React.Component {
    state = {
        title: '',
        salary: ''
    }

    handleOnChangetitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleOnChangesalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addJob({
            id: Math.floor(Math.random()*1001),
            title: this.state.title,
            salary: this.state.salary
        });
        this.setState({
            title: '',
            salary: ''
        })
    }
    render() {
        return (
            <>
                <form>
                    <label htmlFor="fname">Job's Title:</label><br />
                    <input type="text" value= {this.state.title} onChange={event => this.handleOnChangetitle(event)}/><br />
                    <label htmlFor="lname">Job's Salary:</label><br />
                    <input type="text"  value= {this.state.salary} onChange={event => this.handleOnChangesalary(event)} /><br /><br />
                    <input type="submit" value="Submit" onClick={event => this.handleSubmit(event)}/>
                </form>
            </>
        )
    }
}

export default AddComponent;