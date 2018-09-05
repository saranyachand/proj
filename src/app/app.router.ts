import { Routes } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogComponent } from "./log/log.component";

export const Approute:Routes=[
    {
        path:'home',
        component : HomeComponent
    },
    {
        path:'sign-up',
        component : SignUpComponent
    },
    {
        path:'log-in',
        component : LogComponent
    },
];