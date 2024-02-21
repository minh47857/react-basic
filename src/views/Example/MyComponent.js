import React from 'react';

class MyComponent extends React.Component {
    state = {
        name: "Nguyen Minh",
        university: "HUST"
    }

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    
    render() {
        return (
            <>
                <input value={this.state.name} type="text" onChange={(event) => this.handleOnChangeName(event)}/>
                <div>My name is {this.state.name}  <p>I'm styding at {this.state.university}</p></div>
            </>
        )
    }
}

export default MyComponent;