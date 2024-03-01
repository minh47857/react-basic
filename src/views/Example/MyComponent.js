import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';

class MyComponent extends React.Component {
    state = {
        arrayJob: [
            {id: 'abcjob1', title: 'Developer', salary: '1000'},
            {id: 'abcjob2', title: 'Tester', salary: '500'},
            {id: 'abcjob3', title: 'Project Manager', salary: '2000'}
        ]
    }

    addJob = (newJob) => {
        this.setState({
            arrayJob: [...this.state.arrayJob, newJob]
        })
    }

    deleteJob = job => {
        let newJob = this.state.arrayJob.filter(item => item.id != job.id);
        this.setState({
            arrayJob: newJob
        })
    }

    render() {
        return (
            <>
                <AddComponent addJob={this.addJob} />
                <ChildComponent 
                    arrayJob = {this.state.arrayJob}
                    deleteJob = {this.deleteJob}
                />
            </>
        )
    }
}

export default MyComponent;