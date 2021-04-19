import React, {lazy} from 'react';
import {SignupUrl} from "constant/registeration/sign-up";
import {DashBoradUrl} from "constant/dash-borad";

export const routes = [{
    path: '/',
    component: lazy(() => import("components/registeration/sign-in")) ,
    restricted:false
  },
   {
    path: SignupUrl,
    component:lazy(() => import("components/registeration/sign-up")),
    restricted:false
  },
   {
    path: DashBoradUrl,
    component:lazy(() => import("components/dash-board")),
    restricted:true
  }
];