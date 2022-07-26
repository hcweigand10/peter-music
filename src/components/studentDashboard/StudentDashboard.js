import React from "react";
import StripePaymentForm from "../stripePaymentForm/StripePaymentForm";
import currencyFormatter from "../../utils/currencyFormatter"


const StudentDashboard = ({ student }) => {
  return (
    <div className="col-md-12">
      <h4 className="my-4">Welcome back, {student.name}</h4>
      <div className="row">
        <div className="col-md-6">
          <h5>Schedule a Lesson</h5>
          <hr/>
          <div className="card shadow-lg p-3">
            Calendly
          </div>
        </div>
        <div className="col-md-6">
          <h5>Pay your Balance</h5>
          <hr/>
          <div className="card shadow-lg p-3">
            <h6 className="card-title">
              Current Balance: {currencyFormatter.format(student.balance)}
            </h6>
            <div>
                <StripePaymentForm student={student}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
