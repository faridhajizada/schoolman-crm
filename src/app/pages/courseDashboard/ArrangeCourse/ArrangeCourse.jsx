import React, { useState } from "react";
import { Modal, Form } from "react-bootstrap";
import {
  useCourseQuery,
  useQualificationQuery,
} from "./../../../api/courseApi.js";
import "./ArrangeCourse.scss";

const data = [
  {
    id: 1,
    name: "[01.January.2025]FQ-ACCA-DipIFR-903",
    courseLevel: "DipIFR",
    language: "Azerbaijani",
    startDate: "1/1/2025	",
    endDate: "6/1/2025	",
    country: "Azerbaijani",
    duration: "132",
    classDuration: "2",
    capacity: "15",
    tutor1: "Elnur Əliyev",
    freeMorning: "1100",
    freeEvening: "0",
    week1: "Monday",
    startTimeOfWeek1: "7:00 AM	",
    endTimeOfWeek1: "9:00 AM	",
    week2: "Thursday",
    startTimeOfWeek2: "7:00 AM	",
    endTimeOfWeek2: "9:00 AM	",
    week3: "week3",
    startTimeOfWeek3: "startTimeOfWeek3",
    endTimeOfWeek3: "endTimeOfWeek3",
    week4: "week4",
    startTimeOfWeek4: "startTimeOfWeek4",
    endTimeOfWeek4: "endTimeOfWeek4",
    week5: "week5",
    startTimeOfWeek5: "startTimeOfWeek5",
    endTimeOfWeek5: "endTimeOfWeek5",
    week6: "week6",
    startTimeOfWeek6: "startTimeOfWeek6",
    endTimeOfWeek6: "endTimeOfWeek6",
  },
  {
    id: 2,
    name: "[06.December.2024]FQ-ACCA-FR-931",
    courseLevel: "Financial Reporting",
    language: "Azerbaijani",
    startDate: "12/6/2024",
    endDate: "6/1/2025	",
    country: "Azerbaijani",
    duration: "132",
    classDuration: "2",
    capacity: "15",
    tutor1: "Jamal Alishov",
    freeMorning: "1100",
    freeEvening: "0",
    week1: "Monday",
    startTimeOfWeek1: "7:00 AM	",
    endTimeOfWeek1: "9:00 AM	",
    week2: "Thursday",
    startTimeOfWeek2: "7:00 AM	",
    endTimeOfWeek2: "9:00 AM	",
    week3: "week3",
    startTimeOfWeek3: "startTimeOfWeek3",
    endTimeOfWeek3: "endTimeOfWeek3",
    week4: "week4",
    startTimeOfWeek4: "startTimeOfWeek4",
    endTimeOfWeek4: "endTimeOfWeek4",
    week5: "week5",
    startTimeOfWeek5: "startTimeOfWeek5",
    endTimeOfWeek5: "endTimeOfWeek5",
    week6: "week6",
    startTimeOfWeek6: "startTimeOfWeek6",
    endTimeOfWeek6: "endTimeOfWeek6",
  },
  {
    id: 3,
    name: "[01.January.2025]FQ-ACCA-DipIFR-903",
    courseLevel: "DipIFR",
    language: "Azerbaijani",
    startDate: "1/1/2025	",
    endDate: "6/1/2025	",
    country: "Azerbaijani",
    duration: "132",
    classDuration: "2",
    capacity: "15",
    tutor1: "Elnur Əliyev",
    freeMorning: "1100",
    freeEvening: "0",
    week1: "Monday",
    startTimeOfWeek1: "7:00 AM	",
    endTimeOfWeek1: "9:00 AM	",
    week2: "Thursday",
    startTimeOfWeek2: "7:00 AM	",
    endTimeOfWeek2: "9:00 AM	",
    week3: "week3",
    startTimeOfWeek3: "startTimeOfWeek3",
    endTimeOfWeek3: "endTimeOfWeek3",
    week4: "week4",
    startTimeOfWeek4: "startTimeOfWeek4",
    endTimeOfWeek4: "endTimeOfWeek4",
    week5: "week5",
    startTimeOfWeek5: "startTimeOfWeek5",
    endTimeOfWeek5: "endTimeOfWeek5",
    week6: "week6",
    startTimeOfWeek6: "startTimeOfWeek6",
    endTimeOfWeek6: "endTimeOfWeek6",
  },
  {
    id: 4,
    name: "[06.December.2024]FQ-ACCA-FR-931",
    courseLevel: "Financial Reporting",
    language: "Azerbaijani",
    startDate: "12/6/2024",
    endDate: "6/1/2025	",
    country: "Azerbaijani",
    duration: "132",
    classDuration: "2",
    capacity: "15",
    tutor1: "Jamal Alishov",
    freeMorning: "1100",
    freeEvening: "0",
    week1: "Monday",
    startTimeOfWeek1: "7:00 AM	",
    endTimeOfWeek1: "9:00 AM	",
    week2: "Thursday",
    startTimeOfWeek2: "7:00 AM	",
    endTimeOfWeek2: "9:00 AM	",
    week3: "week3",
    startTimeOfWeek3: "startTimeOfWeek3",
    endTimeOfWeek3: "endTimeOfWeek3",
    week4: "week4",
    startTimeOfWeek4: "startTimeOfWeek4",
    endTimeOfWeek4: "endTimeOfWeek4",
    week5: "week5",
    startTimeOfWeek5: "startTimeOfWeek5",
    endTimeOfWeek5: "endTimeOfWeek5",
    week6: "week6",
    startTimeOfWeek6: "startTimeOfWeek6",
    endTimeOfWeek6: "endTimeOfWeek6",
  },
  {
    id: 5,
    name: "[01.January.2025]FQ-ACCA-DipIFR-903",
    courseLevel: "DipIFR",
    language: "Azerbaijani",
    startDate: "1/1/2025	",
    endDate: "6/1/2025	",
    country: "Azerbaijani",
    duration: "132",
    classDuration: "2",
    capacity: "15",
    tutor1: "Elnur Əliyev",
    freeMorning: "1100",
    freeEvening: "0",
    week1: "Monday",
    startTimeOfWeek1: "7:00 AM	",
    endTimeOfWeek1: "9:00 AM	",
    week2: "Thursday",
    startTimeOfWeek2: "7:00 AM	",
    endTimeOfWeek2: "9:00 AM	",
    week3: "week3",
    startTimeOfWeek3: "startTimeOfWeek3",
    endTimeOfWeek3: "endTimeOfWeek3",
    week4: "week4",
    startTimeOfWeek4: "startTimeOfWeek4",
    endTimeOfWeek4: "endTimeOfWeek4",
    week5: "week5",
    startTimeOfWeek5: "startTimeOfWeek5",
    endTimeOfWeek5: "endTimeOfWeek5",
    week6: "week6",
    startTimeOfWeek6: "startTimeOfWeek6",
    endTimeOfWeek6: "endTimeOfWeek6",
  },
  {
    id: 6,
    name: "[06.December.2024]FQ-ACCA-FR-931",
    courseLevel: "Financial Reporting",
    language: "Azerbaijani",
    startDate: "12/6/2024",
    endDate: "6/1/2025	",
    country: "Azerbaijani",
    duration: "132",
    classDuration: "2",
    capacity: "15",
    tutor1: "Jamal Alishov",
    freeMorning: "1100",
    freeEvening: "0",
    week1: "Monday",
    startTimeOfWeek1: "7:00 AM	",
    endTimeOfWeek1: "9:00 AM	",
    week2: "Thursday",
    startTimeOfWeek2: "7:00 AM	",
    endTimeOfWeek2: "9:00 AM	",
    week3: "week3",
    startTimeOfWeek3: "startTimeOfWeek3",
    endTimeOfWeek3: "endTimeOfWeek3",
    week4: "week4",
    startTimeOfWeek4: "startTimeOfWeek4",
    endTimeOfWeek4: "endTimeOfWeek4",
    week5: "week5",
    startTimeOfWeek5: "startTimeOfWeek5",
    endTimeOfWeek5: "endTimeOfWeek5",
    week6: "week6",
    startTimeOfWeek6: "startTimeOfWeek6",
    endTimeOfWeek6: "endTimeOfWeek6",
  },

  {
    id: 7,
    name: "[01.January.2025]FQ-ACCA-DipIFR-903",
    courseLevel: "DipIFR",
    language: "Azerbaijani",
    startDate: "1/1/2025	",
    endDate: "6/1/2025	",
    country: "Azerbaijani",
    duration: "132",
    classDuration: "2",
    capacity: "15",
    tutor1: "Elnur Əliyev",
    freeMorning: "1100",
    freeEvening: "0",
    week1: "Monday",
    startTimeOfWeek1: "7:00 AM	",
    endTimeOfWeek1: "9:00 AM	",
    week2: "Thursday",
    startTimeOfWeek2: "7:00 AM	",
    endTimeOfWeek2: "9:00 AM	",
    week3: "week3",
    startTimeOfWeek3: "startTimeOfWeek3",
    endTimeOfWeek3: "endTimeOfWeek3",
    week4: "week4",
    startTimeOfWeek4: "startTimeOfWeek4",
    endTimeOfWeek4: "endTimeOfWeek4",
    week5: "week5",
    startTimeOfWeek5: "startTimeOfWeek5",
    endTimeOfWeek5: "endTimeOfWeek5",
    week6: "week6",
    startTimeOfWeek6: "startTimeOfWeek6",
    endTimeOfWeek6: "endTimeOfWeek6",
  },
  {
    id: 8,
    name: "[06.December.2024]FQ-ACCA-FR-931",
    courseLevel: "Financial Reporting",
    language: "Azerbaijani",
    startDate: "12/6/2024",
    endDate: "6/1/2025	",
    country: "Azerbaijani",
    duration: "132",
    classDuration: "2",
    capacity: "15",
    tutor1: "Jamal Alishov",
    freeMorning: "1100",
    freeEvening: "0",
    week1: "Monday",
    startTimeOfWeek1: "7:00 AM	",
    endTimeOfWeek1: "9:00 AM	",
    week2: "Thursday",
    startTimeOfWeek2: "7:00 AM	",
    endTimeOfWeek2: "9:00 AM	",
    week3: "week3",
    startTimeOfWeek3: "startTimeOfWeek3",
    endTimeOfWeek3: "endTimeOfWeek3",
    week4: "week4",
    startTimeOfWeek4: "startTimeOfWeek4",
    endTimeOfWeek4: "endTimeOfWeek4",
    week5: "week5",
    startTimeOfWeek5: "startTimeOfWeek5",
    endTimeOfWeek5: "endTimeOfWeek5",
    week6: "week6",
    startTimeOfWeek6: "startTimeOfWeek6",
    endTimeOfWeek6: "endTimeOfWeek6",
  },
  {
    id: 9,
    name: "[01.January.2025]FQ-ACCA-DipIFR-903",
    courseLevel: "DipIFR",
    language: "Azerbaijani",
    startDate: "1/1/2025	",
    endDate: "6/1/2025	",
    country: "Azerbaijani",
    duration: "132",
    classDuration: "2",
    capacity: "15",
    tutor1: "Elnur Əliyev",
    freeMorning: "1100",
    freeEvening: "0",
    week1: "Monday",
    startTimeOfWeek1: "7:00 AM	",
    endTimeOfWeek1: "9:00 AM	",
    week2: "Thursday",
    startTimeOfWeek2: "7:00 AM	",
    endTimeOfWeek2: "9:00 AM	",
    week3: "week3",
    startTimeOfWeek3: "startTimeOfWeek3",
    endTimeOfWeek3: "endTimeOfWeek3",
    week4: "week4",
    startTimeOfWeek4: "startTimeOfWeek4",
    endTimeOfWeek4: "endTimeOfWeek4",
    week5: "week5",
    startTimeOfWeek5: "startTimeOfWeek5",
    endTimeOfWeek5: "endTimeOfWeek5",
    week6: "week6",
    startTimeOfWeek6: "startTimeOfWeek6",
    endTimeOfWeek6: "endTimeOfWeek6",
  },
  {
    id: 10,
    name: "[06.December.2024]FQ-ACCA-FR-931",
    courseLevel: "Financial Reporting",
    language: "Azerbaijani",
    startDate: "12/6/2024",
    endDate: "6/1/2025	",
    country: "Azerbaijani",
    duration: "132",
    classDuration: "2",
    capacity: "15",
    tutor1: "Jamal Alishov",
    freeMorning: "1100",
    freeEvening: "0",
    week1: "Monday",
    startTimeOfWeek1: "7:00 AM	",
    endTimeOfWeek1: "9:00 AM	",
    week2: "Thursday",
    startTimeOfWeek2: "7:00 AM	",
    endTimeOfWeek2: "9:00 AM	",
    week3: "week3",
    startTimeOfWeek3: "startTimeOfWeek3",
    endTimeOfWeek3: "endTimeOfWeek3",
    week4: "week4",
    startTimeOfWeek4: "startTimeOfWeek4",
    endTimeOfWeek4: "endTimeOfWeek4",
    week5: "week5",
    startTimeOfWeek5: "startTimeOfWeek5",
    endTimeOfWeek5: "endTimeOfWeek5",
    week6: "week6",
    startTimeOfWeek6: "startTimeOfWeek6",
    endTimeOfWeek6: "endTimeOfWeek6",
  },
  {
    id: 11,
    name: "[01.January.2025]FQ-ACCA-DipIFR-903",
    courseLevel: "DipIFR",
    language: "Azerbaijani",
    startDate: "1/1/2025	",
    endDate: "6/1/2025	",
    country: "Azerbaijani",
    duration: "132",
    classDuration: "2",
    capacity: "15",
    tutor1: "Elnur Əliyev",
    freeMorning: "1100",
    freeEvening: "0",
    week1: "Monday",
    startTimeOfWeek1: "7:00 AM	",
    endTimeOfWeek1: "9:00 AM	",
    week2: "Thursday",
    startTimeOfWeek2: "7:00 AM	",
    endTimeOfWeek2: "9:00 AM	",
    week3: "week3",
    startTimeOfWeek3: "startTimeOfWeek3",
    endTimeOfWeek3: "endTimeOfWeek3",
    week4: "week4",
    startTimeOfWeek4: "startTimeOfWeek4",
    endTimeOfWeek4: "endTimeOfWeek4",
    week5: "week5",
    startTimeOfWeek5: "startTimeOfWeek5",
    endTimeOfWeek5: "endTimeOfWeek5",
    week6: "week6",
    startTimeOfWeek6: "startTimeOfWeek6",
    endTimeOfWeek6: "endTimeOfWeek6",
  },
  {
    id: 12,
    name: "[06.December.2024]FQ-ACCA-FR-931",
    courseLevel: "Financial Reporting",
    language: "Azerbaijani",
    startDate: "12/6/2024",
    endDate: "6/1/2025	",
    country: "Azerbaijani",
    duration: "132",
    classDuration: "2",
    capacity: "15",
    tutor1: "Jamal Alishov",
    freeMorning: "1100",
    freeEvening: "0",
    week1: "Monday",
    startTimeOfWeek1: "7:00 AM	",
    endTimeOfWeek1: "9:00 AM	",
    week2: "Thursday",
    startTimeOfWeek2: "7:00 AM	",
    endTimeOfWeek2: "9:00 AM	",
    week3: "week3",
    startTimeOfWeek3: "startTimeOfWeek3",
    endTimeOfWeek3: "endTimeOfWeek3",
    week4: "week4",
    startTimeOfWeek4: "startTimeOfWeek4",
    endTimeOfWeek4: "endTimeOfWeek4",
    week5: "week5",
    startTimeOfWeek5: "startTimeOfWeek5",
    endTimeOfWeek5: "endTimeOfWeek5",
    week6: "week6",
    startTimeOfWeek6: "startTimeOfWeek6",
    endTimeOfWeek6: "endTimeOfWeek6",
  },
];

function ArrangeCourse() {
  const { data: CourseName } = useCourseQuery();
  const { data: Qualification } = useQualificationQuery();
  console.log(Qualification);

  const [createCourseModal, setCreateCourseModal] = useState(false);
  const [newCourse, setNewCourse] = useState({
    CourseName: "",
    QualificationName: "",
  });

  const openCreateCourseModal = () => {
    setCreateCourseModal(true);
  };
  const closeCreateDeviceModal = () => {
    setCreateCourseModal(false);
  };

  const handleCourse = (e) => {
    e.preventDefault();
    console.log(newDevice);
  };

  return (
    <>
      <section className="ArrangeCourse">
        <div className="card card-flush p-4">
          <div className="card-header px-0 align-items-center">
            <h3 className="card-title">Arrange Course</h3>
            <a
              href="#"
              className="btn btn-success"
              onClick={openCreateCourseModal}
            >
              Add Course
            </a>
          </div>
          <div className="card-body">
            <div className="table-responsive">
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
                    <th> Duration</th>
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
                    <th>Start 1Time of week 5</th>
                    <th>End Time of week 5</th>
                    <th>Week 6</th>
                    <th>Start Time of week 6</th>
                    <th>End Time of week 6</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 fw-semibold">
                  {data?.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td className="bg-secondary">{item.id}</td>
                        <td>{item.name}</td>
                        <td className="text-center text-info">
                          {item.courseLevel}
                        </td>
                        <td>{item.language}</td>
                        <td className=" text-center text-success">
                          {item.startDate}
                        </td>
                        <td className=" text-center text-danger">
                          {item.endDate}
                        </td>
                        <td>{item.country}</td>
                        <td className="text-center text-warning">
                          {item.duration}
                        </td>
                        <td>{item.classDuration}</td>
                        <td>{item.capacity}</td>
                        <td className="text-center text-primary">
                          {item.tutor1}
                        </td>
                        <td>{item.freeMorning}</td>
                        <td>{item.freeEvening}</td>
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
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <Modal show={createCourseModal} onHide={closeCreateDeviceModal}>
          <Modal.Header closeButton>
            <Modal.Title>Create Course </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleCourse}>
              <Form.Group controlId="formNewCourseName">
                <Form.Label> Course Name</Form.Label>
                <Form.Control
                  as="select"
                  value={newCourse.CourseName}
                  onChange={(e) =>
                    setNewCourse({ ...newCourse, CourseName: e.target.value })
                  }
                >
                  <option>Choose variant</option>
                  {CourseName?.map((item) => {
                    return (
                      <option key={item.id} value={item.courseName}>
                        {item.courseName}
                      </option>
                    );
                  })}
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formNewQualification">
                <Form.Label> Qualification</Form.Label>
                <Form.Control
                  as="select"
                  value={newCourse.QualificationName}
                  onChange={(e) =>
                    setNewCourse({ ...newCourse, QualificationName: e.target.value })
                  }
                >
                  <option>Choose variant</option>
                  {Qualification?.map((item) => {
                    return (
                      <option key={item.id} value={item.prefix}>
                        {item.prefix}
                      </option>
                    );
                  })}
                </Form.Control>
              </Form.Group>
            </Form>
          </Modal.Body>
        </Modal>
      </section>
      ;
    </>
  );
}

export default ArrangeCourse;
