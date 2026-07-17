import React from "react";
import data from "../../data/data.json";

const LandingPage = () => {
  const [dashboardData] = React.useState(data);

  return (
    <div>
      <span>
        <p>
          Average Assessment Score:{" "}
          {dashboardData.overview.average_assessment_score}
        </p>

        <p>
          Average Feedback Score:{" "}
          {dashboardData.overview.average_feedback_score}
        </p>
      </span>

      <span className="text-red-500">
        {dashboardData?.monthly_trend?.map((item, index) => (
          <div key={index}>
            <p>Attendees: {item?.attendees}</p>
            <p>Month Label: {item?.month_label}</p>
          </div>
        ))}
      </span>
    </div>
  );
};

export default LandingPage;