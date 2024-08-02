import React from "react";
class TestJsx extends React.Component{
    UserInfor ={
        FirstName: 'Quan',
        LastName: 'nguyen',
        Address: 'Ninh Thuan',
        PhoneNumber: '0325886011'
    }
    render(){
        let testname ='this';
        return(
            <React.Fragment>
                <div className="UserInfor">
                    <h1>State Object: Hi {this.UserInfor.LastName}</h1>
                </div>
            </React.Fragment>
        )
    }
}
export default TestJsx;