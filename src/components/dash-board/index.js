import React,{useState} from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { mapStateToProps, mapDispatchToProps } from "actions/registeration/sign-in";
import { logout } from 'utils/check-token';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col,Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import classnames from 'classnames';
import Tab1 from "./tabs/tab1";
import Tab2 from "./tabs/tab2";

import Table from "../shared/table"
import DayPilot from "../shared/daypilot"
const DashBorad = (props) => {
 
  const logOut=()=>{
    logout(logout)
    props.history.push("/")
  }

  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  let users=[{serial:1,firstName:"ali",lastName:"khan"},{serial:2,firstName:"ihsan",lastName:"khan"}]

  let books=[{serial:1,name:"math",author:"ali"},{serial:2 ,name:"ihsan",author:"ihsan"}]
  return (

    <>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">UserInfo.</h5>
        <p class="card-text">email:{props.User.User.email}</p>
 
        <button
          style={{marginLeft:"20px"}}
          className="btn btn-primary"
          type="submit"
          onClick={(e) =>logOut()}
        >
        logout
        </button>
      </div>
    </div>
    {/* <Table data={users} type="User" />
     <br/><br/>
    <Table data={books} type= "Book"/>

     <br/><br/>
     <DayPilot/> */}

<div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Tab1
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
           Tab2
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Tab1/>
        </TabPane>
        <TabPane tabId="2">
         <Tab2/>
        </TabPane>
      </TabContent>
    </div>

    </>
  );
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(DashBorad)
);