import React,{useState} from "react"
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { mapStateToProps, mapDispatchToProps } from "actions/registeration/sign-in";
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col,Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Tab1 =(props)=>{

    const [state, setState] = useState({
        firstName: "",
        lastName: ""
      })
    const handleChange=(evt)=> {
        const value = evt.target.value;
        setState({
          ...state,
          [evt.target.name]: value
        });
      }

    return(

       <>
           <Row>
            <Col sm="12">
            <Card body>
              <h4>Tab 1 Contents</h4>
              <FormGroup>
                 <Label for="firstName">firstName</Label>
                 <Input type="text" name="firstName" id="firstName" value={state.firstName} placeholder="firstName" onChange={handleChange} />
              </FormGroup>
              <FormGroup>
                 <Label for="lastName">lastName</Label>
                 <Input type="text" name="lastName" id="lastName" value={state.lastName} placeholder="lastName"  onChange={handleChange} />
              </FormGroup>

              </Card>
            </Col>
          </Row>
       </>
    )
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Tab1)
  );