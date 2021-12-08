import React from "react";

class User extends React.Component{  //user componenet becoming a class component
  constructor(props){    //when we didnt pass any parameter intial stage of any program called constructor
    super(props);  //it is used for calling the constructor
    this.state = { //state is set of data which can be hold by particular compnent and here in this case user component is holding
      planet: "earth"
    };
    console.log("this is constructor");
  
  }

  componentDidMount(){
    this.setState({planet: "venus"}); //u right constructor render and componentdidmount in any manner but alwys firstly constructor then render then component 
    //componentdidmount will happen here in thos case dame process will happen and lastly it will check componentdidmount and update the state which is planet:venus here
    console.log("this is component did mount");
  }
  render() {
    console.log("this is rendered");
  
  
    return (
    <div>
      <h1>{this.props.name}</h1>
      <h4>{this.props.descrip}</h4>
      <h3>{this.state.planet}</h3> 
      {/* in just upper case u need not to write props rather we need to write complete data cuz we addressing particular data */}
       {/* in all upper 3 case we need to erite (this) cuz it is inside particuler this user class  */}
    </div>

  );
  }


}


// function User(props) {
//     return (
//       <div>
//         <h1>{props.name}</h1>
//         <h4>{props.descrip}</h4>
//       </div>
//     );
//   }
  
  export default User;


  //props-- properties parameters of any particulaer component like props.name, props.description then name and description
  //we can define in App.js where this user.js is being imported and then in app.js we can use  
  //life cycle method-- 1)= Mounting  2)= Update 3)= Unmount
  //Mount got 3 substages-- 1-constructor...2-render...3-componentdidMount