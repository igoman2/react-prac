import React from "react";
import Card from "../UI/Card";
import classes from "./UserList.module.css";
const UserList = (props) => {
    return (
        <Card className={classes.users}>
            <ul>
                {props.users.map((list, i) => (
                    <li key={list.id}>
                        {list.name} {list.age}
                    </li>
                ))}
            </ul>
        </Card>
    );
};

export default UserList;
