import React from "react"
class TestState extends React.Component{
    state ={
        name :'quan',
        channel:'cầu lông man'
    }
    handleOnChangeName = (event) =>{
       //cập nhật lại state
        this.setState({
            name: event.target.value,
            channel : 'Tiktok'
        })
    }
    render(){
        return (
            <React.Fragment>
                <div className="inputName">
                    <input value={this.state.name} type="text"
                        onChange={(event) => this.handleOnChangeName(event)}
                    />
                    My name is {this.state.name}
                </div>
                    My channel is {this.state.channel}
            </React.Fragment>
        )
    }
}
export default TestState;