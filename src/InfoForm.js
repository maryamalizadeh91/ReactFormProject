import React from 'react';
import './InfoForm.css'
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import InfoShow from './InfoShow';

class InfoForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstname: "Maryam",
            lastname: "M.Alizadeh",
            email: "maryamalizadeh91@gmail.com",
            skills: "HTML,CSS,PHP,JS,React",
            job: "",
            bio: "",
            phone: "",
            submitted: 0

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState(
            { [name]: value }
        );
    }

    handleSubmit(event) {
        this.setState((prevState) => {
            return {
                submitted: prevState.submitted + 1
            }
        }
        );
        event.preventDefault();
    }


    render() {
        let formInfo;
        const formSubmit = this.state.submitted;

        if (formSubmit > 0) {

            console.log(this.handleSubmit);
            formInfo =
                <InfoShow firstname={this.state.firstname} lastname={this.state.lastname} job={this.state.job} bio={this.state.bio} email={this.state.email} phone={this.state.phone} skills={this.state.skills} />;
        }

        return (
            <Container>
                <h2>Personal Info</h2>
                <Form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col lg="4" md="4" sm="12">
                            <FormGroup>
                                <Label for="FirstName">First Name</Label>
                                <Input type="text" name="firstname" id="firstname" value={this.state.firstname} onChange={this.handleChange} />
                            </FormGroup>
                        </Col>
                        <Col lg="4" md="4" sm="12">
                            <FormGroup>
                                <Label for="LastName">Last Name</Label>
                                <Input type="text" name="lastname" id="lastname" value={this.state.lastname} onChange={this.handleChange} />
                            </FormGroup>
                        </Col>
                        <Col lg="4" md="4" sm="12">
                            <FormGroup>
                                <Label for="Job">Job</Label>
                                <Input type="text" name="job" id="job" value={this.state.job} onChange={this.handleChange} />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="12" md="12" sm="12">
                            <FormGroup>
                                <Label for="Bio">Bio</Label>
                                <Input type="textarea" name="bio" id="bio" rows="8" value={this.state.bio} onChange={this.handleChange} />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="6" md="6" sm="6">
                            <FormGroup>
                                <Label for="Email">Email</Label>
                                <Input type="email" name="email" id="email" value={this.state.email} onChange={this.handleChange} />
                            </FormGroup>
                        </Col>
                        <Col lg="6" md="6" sm="6">
                            <FormGroup>
                                <Label for="Phone">Phone</Label>
                                <Input type="number" name="phone" id="phone" value={this.state.phone} onChange={this.handleChange} />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="12" md="12" sm="12">
                            <FormGroup>
                                <Label for="Skills">Skills</Label>
                                <Input type="textarea" name="skills" id="skills" rows="8" value={this.state.skills} onChange={this.handleChange} />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="12" md="12" sm="12">
                            <Button color="primary" size="lg" block value="Submit">Submit</Button>
                        </Col>
                    </Row>
                </Form>
                <hr />
                <Row>
                    {formInfo}
                </Row>
            </Container>
        );
    }
}

export default InfoForm;