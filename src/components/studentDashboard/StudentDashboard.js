import React from "react";
import Checkout from "../checkout/Checkout";
import currencyFormatter from "../../utils/currencyFormatter";
import { InlineWidget } from "react-calendly";

const StudentDashboard = ({ student }) => {
    return (
        <div className="col-md-12">
            <h4 className="my-4">Welcome back, {student.name}</h4>
            <div className="row">
                <div className="col-md-6">
                    <h5>Schedule a Lesson</h5>
                    <hr />
                    <div className="card p-3">
                        <InlineWidget url="https://calendly.com/henryweigand10/30min" />
                    </div>
                </div>
                <div className="col-md-6">
                    <h5>Pay your Balance</h5>
                    <hr />
                    <div className="card p-0">
                        <div className="p-3">
                            <h5 className="card-title">Current Balance</h5>
                            <h6 className="text-muted">
                                {currencyFormatter.format(student.balance)}
                            </h6>
                        </div>
                        <div>
                            <Checkout student={student} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentDashboard;
