import React from 'react';

class ChildComponent extends React.Component{
        // console.log(props);
        state = {
            isShowJob: false
        }

        handleClick() {
            this.setState({
                isShowJob: !this.state.isShowJob
            })
        }

        render() {
            let {arrayJob} = this.props;
            let {isShowJob} = this.state;
            return (
                <>
                    {  isShowJob === false ? 
                        <div><button onClick={() => this.handleClick()}>Click</button></div>
                        :
                        <>
                            <div className='job-items'>
                                {
                                    arrayJob.map((item) => {
                                    
                                            return (
                                                <div key={item.id}>
                                                    {item.nameJob} - {item.salary}
                                                </div>
                                            )
                                        
                                    })
                                }
                            </div>
                            <div><button onClick={() => this.handleClick()}>Hide</button></div>
                        </>
                    }
                </>
            )
        }

}

export default ChildComponent;