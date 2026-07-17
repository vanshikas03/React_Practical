import React from "react";
import { Button } from "../Layout/Button";
import data from "../../data/data.json";
const LandingPage = ({ name }) => {
  const [dashboardData, setDashboardData] = React.useState(data);
  console.log(dashboardData);
  return (
   <div>
    <span>
      <p>Average Assessment Score: {dashboardData.overview.average_assessment_score}</p>
      <p> Average Feedback Score: {dashboardData.overview.average_feedback_score}</p>
    </span>
    <span className = "text-red-500">
        {dashboardData?.monthly_trend?.map((item, index) => (
          <div key={index}>
            <p>attendees : {item?.attendees}</p>
            <p>Month Label : {item?.month_label}</p>
          </div>
        ))}
      </span>
   </div>
  );
};
 
export default LandingPage;