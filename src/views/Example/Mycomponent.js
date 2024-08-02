import React from 'react';
class Mycomponent extends React.Component {
   //key: value
    state ={
        name : 'tin',
        channel: 'cau long man'
    }
    handleClickButton = () =>{
        console.log('Hit the button');
        alert('xin cảm ơn')
    }
    /*
    
     */
    render() {   //component rendering html file 
        let firstname = 'quan';
        let lastname= 'pham';
        let age = 25;
        return (
            // fragment: khai báo div bọc 2 thẻ div bên trong không cần phải có div bọc ngoài
            <React.Fragment>    
                <div className='FirstName'>
                    {console.log('My name is :', firstname)}
                    Hello my Component Cầu Lông Man, my name is {firstname} and the age is: {age}
                   <p> hello my state: {this.state.name}</p>
                </div>
                <div className='LastName'>
                    The Last Name is : {lastname}
                    <p>My tiktok channel: {this.state.channel}</p>
                </div>
                {/* #7. buttin click */}
                <div className='Click'>
                    <button onClick={()=> this.handleClickButton()}>Click to buy this item</button>
                </div>
            </React.Fragment>
        )
    }
}
export default Mycomponent; // this syntax to call this component in other file