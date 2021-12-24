import React from "react";
import { Link } from 'react-router-dom';
import SurveyList from "./SurveyList";

const Dashboard = () => {
  return (
    <div>
          <SurveyList/>
          <div className="fixed-action-btn">

              <Link to='/surveys/new'
                  class="btn-floating btn-large red"><i class="material-icons">add</i></Link>
          </div>

    </div>
  );
};

export default Dashboard;
