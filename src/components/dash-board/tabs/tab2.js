import React from "react"
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { mapStateToProps, mapDispatchToProps } from "actions/registeration/sign-in";
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col,Form, FormGroup, Label, Input, FormText } from 'reactstrap';
const Tab2 =(props)=>{


    return(

       <>
           <Row>
            <Col sm="12">
              <Card body>
               <h4>Tab two</h4>
               <FormGroup>
                 <Label for="Address">Address</Label>
                 <Input type="text" name="Address" id="Address" placeholder="Address" />
              </FormGroup>
              <FormGroup>
                 <Label for="Phone">Phone</Label>
                 <Input type="text" name="Phone" id="Phone" placeholder="Phone" />
              </FormGroup>
              </Card>
            </Col>
            
          </Row>
       </>
    )
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(Tab2)
  );