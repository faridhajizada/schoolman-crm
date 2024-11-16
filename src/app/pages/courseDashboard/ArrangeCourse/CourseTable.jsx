import React from "react";

const CourseTable = ({ courses }) => {
  return (
    <table className="table align-middle table-row-dashed fs-6 gy-5">
      <thead>
        <tr className="text-start text-muted fw-bold fs-7 text-uppercase gs-0">
          <th>Id</th>
          <th>Name</th>
          <th>Course Level</th>
          <th>Language</th>
          <th>Start item</th>
          <th>End item</th>
          <th>Country</th>
          <th>Duration</th>
          <th>Class Duration</th>
          <th>Capacity</th>
          <th>Tutor 1</th>
          <th>Free Morning</th>
          <th>Free Evening</th>
          <th>Week 1</th>
          <th>Start Time of week 1</th>
          <th>End Time of week 1</th>
          <th>Week 2</th>
          <th>Start Time of week 2</th>
          <th>End Time of week 2</th>
          <th>Week 3</th>
          <th>Start Time of week 3</th>
          <th>End Time of week 3</th>
          <th>Week 4</th>
          <th>Start Time of week 4</th>
          <th>End Time of week 4</th>
          <th>Week 5</th>
          <th>Start Time of week 5</th>
          <th>End Time of week 5</th>
          <th>Week 6</th>
          <th>Start Time of week 6</th>
          <th>End Time of week 6</th>
        </tr>
      </thead>
      <tbody className="text-gray-600 fw-semibold">
        {courses?.map((item) => (
          <tr key={item.id}>
            <td className="bg-secondary">{item.id}</td>
            <td>{item.gname}</td>
            <td className="text-center text-info">{item.courseLevel}</td>
            <td>{item.language}</td>
            <td className="text-center text-success">
              {item.startDate?.slice(0, 10)}
            </td>
            <td className="text-center text-danger">
              {item.endDate?.slice(0, 10)}
            </td>
            <td>{item.country}</td>
            <td className="text-center text-warning">{item.duration}</td>
            <td>{item.classduration}</td>
            <td>{item.capacity}</td>
            <td className="text-center text-primary">{item.tutor1}</td>
            <td>{item.feemorning}</td>
            <td>{item.feeevening}</td>
            <td>{item.week1}</td>
            <td>{item.startTimeOfWeek1}</td>
            <td>{item.endTimeOfWeek1}</td>
            <td>{item.week2}</td>
            <td>{item.startTimeOfWeek2}</td>
            <td>{item.endTimeOfWeek2}</td>
            <td>{item.week3}</td>
            <td>{item.startTimeOfWeek3}</td>
            <td>{item.endTimeOfWeek3}</td>
            <td>{item.week4}</td>
            <td>{item.startTimeOfWeek4}</td>
            <td>{item.endTimeOfWeek4}</td>
            <td>{item.week5}</td>
            <td>{item.startTimeOfWeek5}</td>
            <td>{item.endTimeOfWeek5}</td>
            <td>{item.week6}</td>
            <td>{item.startTimeOfWeek6}</td>
            <td>{item.endTimeOfWeek6}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CourseTable;
