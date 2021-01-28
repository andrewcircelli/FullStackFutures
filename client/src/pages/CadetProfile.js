// cadet page includes profile form and submit button
import React from "react";
import {Form, Button} from "react-bootstrap";

class Profile extends React.Component{
    state = {
        firstName: "",
        lastName: "",
        age: "",
        graduationYear: "",
        phoneNumber: "",
        email: "",
        branch: "",
        height: "",
        weight: "",
        BMI: "",
        DesiredMilitaryOccupationalSpecialty: "",
    }
    saveProfile= (event) => {
        event.preventDefault()
        console.log("State",this.state)
    }

     handleInput = (event) => {
         let name = event.target.name
         let value = event.target.value
         this.setState({
             [name] : value
         })
     }

    render(){
        return(
<Form className="container">
  <Form.Group controlId="formBasicText">
    <Form.Label>First Name</Form.Label>
    <Form.Control type="text" name="firstName" value = {this.state.firstName} onChange ={this.handleInput} placeholder="Enter Name" />
    </Form.Group>

    <Form.Group controlId="formBasicText">
    <Form.Label>Last Name</Form.Label>
    <Form.Control type="text" name="lastName" value = {this.state.lastName} onChange ={this.handleInput} placeholder="Enter Name" />
    </Form.Group>

    <Form.Group controlId="formBasicNumber">
    <Form.Label>Age</Form.Label>
    <Form.Control type="number"name="age" value = {this.state.age} onChange ={this.handleInput} placeholder="Enter Age" />
    </Form.Group>

    <Form.Group controlId="formBasicNumber">
    <Form.Label>Graduation Year</Form.Label>
    <Form.Control type="number" name="graduationYear" value = {this.state.graduationYear} onChange ={this.handleInput} placeholder="Enter Graduation Year" />
    </Form.Group>

    <Form.Group controlId="formBasicNumber">
    <Form.Label>Phone Number</Form.Label>
    <Form.Control type="number" name="phoneNumber" value = {this.state.phoneNumber} onChange ={this.handleInput} placeholder="Enter Phone Number" />
    </Form.Group>

    <Form.Group controlId="formBasicemail">
    <Form.Label>email</Form.Label>
    <Form.Control type="email" name="email" value = {this.state.email} onChange ={this.handleInput} placeholder="Enter email" />
    </Form.Group>

    <Form.Group controlId="formBasicText">
    <Form.Label>Branch </Form.Label>
    <Form.Control type="text" name="branch" value = {this.state.branch} onChange ={this.handleInput} placeholder="Enter branch" />
    </Form.Group>

    <Form.Group controlId="formBasicNumber">
    <Form.Label>Height</Form.Label>
    <Form.Control type="number" name="height" value = {this.state.height} onChange ={this.handleInput} placeholder="Enter height" />
    </Form.Group>

    <Form.Group controlId="formBasicNumber">
    <Form.Label>Weight</Form.Label>
    <Form.Control type="number" name="weight" value = {this.state.weight} onChange ={this.handleInput} placeholder="Enter weight" />
    </Form.Group>

    <Form.Group controlId="formBasicNumber">
    <Form.Label>BMI</Form.Label>
    <Form.Control type="number" name="BMI" value = {this.state.BMI} onChange ={this.handleInput} placeholder="Enter BMI" />
    </Form.Group>

    <Form.Group controlId="formBasicText">
    <Form.Label>Desired Occupation </Form.Label>
    <Form.Control type="text" name="DesiredMilitaryOccupationSpecialty" value = {this.state.DesiredMilitaryOccupationalSpecialty} onChange ={this.handleInput} placeholder="Enter DesiredMilitarySpecialty" />
    </Form.Group>

    <Form.Group controlId="formBasicText">
    <Form.Label>Prior Work Experience</Form.Label>
    <Form.Control type="text" name="priorWorkExperience" value = {this.state.priorWorkExperience} onChange ={this.handleInput} placeholder="Enter Prior Work Experience" />
    </Form.Group>

  <Button variant="primary" type="submit" onClick={this.saveProfile}> 
    Submit
  </Button>
</Form>
        )
    }
}

export default Profile;
