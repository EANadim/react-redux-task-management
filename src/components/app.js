import React from 'react';
import Nav from '../components/nav';
import Home from './home';
import Members from './member/members';
import Tasks from './task/tasks';
import Task from './task/task';
import AddTask from './task/addTask';
import EditTask from './task/editTask';
import AddMember from './member/addMember';
import Member from './member/member';
import EditMember from './member/editMember';
import {
    Switch,
    Route,
} from "react-router-dom";

export default function App(props) {
    return (
        <div>
            <Nav />
            <div className="body-content">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/tasks" component={Tasks} />
                    <Route exact path="/task/:id" component={Task} />
                    <Route exact path="/task/edit/:id" component={EditTask} />
                    <Route exact path="/tasks/add" component={AddTask} />
                    <Route exact path="/members" component={Members} />
                    <Route exact path="/members/add" component={AddMember} />
                    <Route exact path="/member/:id" component={Member} />
                    <Route exact path="/member/edit/:id" component={EditMember} />
                </Switch>
            </div>
        </div>
    );
}