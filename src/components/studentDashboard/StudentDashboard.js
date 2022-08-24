import React from "react";
import Checkout from "../checkout/Checkout";
import currencyFormatter from "../../utils/currencyFormatter";
import { InlineWidget } from "react-calendly";

const StudentDashboard = ({ student, logMeOut }) => {
    return (
        <div className="col-md-12">
          <div className="d-flex justify-content-between" style={{width: "100%"}}>
            <h4 className="my-4">Welcome back, {student.name}</h4>
            <button className="btn btn-danger my-auto" style={{height: "40px"}} onClick={logMeOut}>Log Out</button>
          </div>
            <div className="row">
                <div className="col-md-6 mb-4">
                    <h5>Schedule a Lesson</h5>
                    <hr />
                    <div className="card p-3">
                        <InlineWidget url="https://calendly.com/henryweigand10/30min" />
                    </div>
                </div>
                <div className="col-md-6 mb-4">
                    <h5>Pay your Balance</h5>
                    <hr />
                    <div className="card p-0">
                        <div className="p-3">
                            <h5 className="card-title">Current Balance</h5>
                            <h6 className="text-muted">
                                {currencyFormatter.format(student.balance)}
                            </h6>
                        </div>
                        {student.balance > 1 ? (
                          <div>
                              <Checkout student={student} />
                          </div>
                        ): (
                          <div className="text-center p-1" style={{width:"100%", backgroundColor: "gray", color: "white"}}>
                              <p className="my-auto p-2" style={{color: "lightgray"}}>Checkout with Stripe (not available with current balnce)</p>
                          </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentDashboard;
