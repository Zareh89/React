import React, {Component, Fragment} from 'react';
import './inputs.css';
import Li from '../components/header/returnLi';


class Login extends Component{
    state = {
        myData:{}
    };
 
    signup() {
        document.getElementById("inputs").style.display = "none";
        document.getElementById("label").style.display = "none";
        document.getElementById("but").style.display = "none";
        document.getElementById("signindiplay").style.display = "block";
        document.getElementById("signu").style.color = "white";
        document.getElementById("signi").style.color = "rgb(0, 41, 128)";
        document.getElementById("signi").style.border = "none";
        document.getElementById("signu").style.borderBottom = "2px solid rgb(0, 41, 128)"
        
        
  };

   signin(){
        document.getElementById("inputs").style.display = "block";
        document.getElementById("label").style.display = "block";
        document.getElementById("but").style.display = "block";
        document.getElementById("signindiplay").style.display = "none";
        document.getElementById("signu").style.color = "rgb(0, 41, 128)";
        document.getElementById("signi").style.color = "white";
        document.getElementById("signi").style.borderBottom = "2px solid rgb(0, 41, 128)";
        document.getElementById("signu").style.border = "none"
  }
  
  
    MyFunction = () => {
         let pass2 = document.getElementById("Pass2").value;
         let name = document.getElementById("Name").value;
         var number = document.getElementById("Number").value;
         var email = document.getElementById("Email").value;
         var pass = document.getElementById("Pass").value;
         var re = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
          if(re.test(email) === false){
              document.getElementById("Email").style.borderColor = "red";
              document.getElementById("h5").innerText = "invalid email adress"
              return document.getElementById("h5").style.display="block";
          };
          if (document.getElementById("label").checked === false){
              document.getElementById("h25").innerText = "put ptichka";
              return document.getElementById("h25").style.display="block";
          };
          if(pass !== pass2){
              document.getElementById("h255").innerText = "password doesn't much";
              document.getElementById("Pass2").style.borderColor = "red";
              return document.getElementById("h255").style.display="block";
          };
          if(name && number){
             var obj ={
                 name: name,
                 number: number,
                 email: email,
                 password: pass,
                 password2: pass2
             }
          fetch("http://rest.learncode.academy/api/learncode/friends",{
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(obj),
          })
          .then (myJson => myJson.json())
          .then ((myJson) => {
            document.getElementById("set").style.display ="none";
            document.getElementById("ul").style.display ="block";  
            console.log(myJson)
               this.setState({
                   myData: myJson
               })
                    
              })
              
         };
          
         
  };
  createLi(){
    let myArr = [];  
    for(let i in this.state.myData){
    myArr.push(<Li name = {this.state.myData[i]}/>)
      }
      return myArr
  }
    render(){
        return (
            <Fragment>
                   <fieldset id ="set">
    
                            <div class="topbuttons">
                                <button id="signi" class="signin" type="button" onClick={this.signin}>Sign Up</button>
                                <button id="signu" class="signup" type="button" onClick={this.signup}>Sign In</button>
                            </div>
                        <div id="signindiplay">
                            <input class="input" id="Name2" type="name" placeholder="Name"/>
                            <input class="input" id="Pass3" type="password" placeholder="Password"/>
                        <div>
                            <button id="butt" type="submit" class="button2">Login</button>
                        </div>
                        </div>
                        <div id="inputs">
                            <input class="input" id="Name" type="name" placeholder="Name"/>
                            <input class="input" id="Number" type="number" placeholder="Phone Number"/>
                            <input class="input" id="Email" type="email" placeholder="Email"/>
                            <h5 id="h5"></h5>
                            <input class="input" id="Pass" type="password" placeholder="Password"/>
                            <input class="input" id="Pass2" type="password" placeholder="Repeat Password"/>
                            <h5 id="h255"></h5>
                        </div>
                        <div id="label">
                        <input id="label" type="checkbox" required/>
                        <label>I agree to the <a href="#">Terms and Conditions</a> and <a href="#">Privacy Policy</a></label>
                        <h5 id="h25"></h5>
                        </div> 
                        <button id="but" type="button" class="button" onClick={this.MyFunction}>Create Account</button> 
                    

</fieldset>
<ul id="ul" ref = {el=> this.ul = el}>
            <li><b>My Account</b></li>
            {this.createLi()}
        </ul>
            </Fragment>

        );
    }
}

export default Login;