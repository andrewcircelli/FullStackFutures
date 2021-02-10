import React from "react";
import { FaUserGraduate, FaMedal, FaRunning } from "react-icons/fa";
import "./style.css";

export default function GetProfile({ username }) {
  return (
    <>
      <div>
        <h2 className="PageHeader">Welcome {username}!</h2>
        <h2 className="PageHeader my-1">Things you can create</h2>
      </div>

      <div className="regOptions">
        <div className="Card">
          <a href="/profiles/reg/student" className="Card_CardIcon">
            <FaUserGraduate className="svg-inline--fa fa-w-16 svg" />
          </a>
          <h3 className="Card_CardTitle">Academic Profile</h3>
          <p className="Card_CardText">Card Text</p>
        </div>
        <div className="Card">
          <a href="/profiles/reg/athlete" className="Card_CardIcon">
            <FaRunning className="svg-inline--fa fa-w-16 svg" />
          </a>
          <h3 className="Card_CardTitle">Athlete Profile</h3>
          <p className="Card_CardText">Card Text</p>
        </div>
        <div className="Card">
          <a href="/profiles/reg/cadet" className="Card_CardIcon">
            <FaMedal className="svg-inline--fa fa-w-16 svg" />
          </a>
          <h3 className="Card_CardTitle">Military Profile</h3>
          <p className="Card_CardText">Card Text</p>
        </div>
      </div>
    </>
  );
}
