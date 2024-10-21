import React, { useState, useEffect } from "react";
import { Modal, Form } from "react-bootstrap";
import {
  useCourseQuery,
  useQualificationQuery,
  useCourseListQuery,
} from "./../../../api/courseApi.js";
import "./ArrangeCourse.scss";

function ArrangeCourse() {
  const { data: CourseName } = useCourseQuery(null);
  const { data: Qualification } = useQualificationQuery(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState("10");
  const { data: CourseList } = useCourseListQuery({ pageNumber, pageSize });

  const handleChangeSelectShowPageSize = (event) => {
    setPageSize(event.target.value);
  };

  console.log(CourseList);

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
    console.log(newCourse);
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
                  {CourseList?.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td className="bg-secondary">{item.id}</td>
                        <td>{item.gname}</td>
                        <td className="text-center text-info">
                          {item.courseLevel}
                        </td>
                        <td>{item.language}</td>
                        <td className=" text-center text-success">
                          {item.startDate.slice(0, 10)}
                        </td>
                        <td className=" text-center text-danger">
                          {item.endDate.slice(0, 10)}
                        </td>
                        <td>{item.country}</td>
                        <td className="text-center text-warning">
                          {item.duration}
                        </td>
                        <td>{item.classduration}</td>
                        <td>{item.capacity}</td>
                        <td className="text-center text-primary">
                          {item.tutor1}
                        </td>
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
                    setNewCourse({ ...newCourse, courseName: e.target.value })
                  }
                >
                  <option>Choose variant</option>
                  {CourseName?.map((item) => {
                    return (
                      <option key={item.id} value={item?.courseName}>
                        {item?.courseName}
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
                    setNewCourse({
                      ...newCourse,
                      QualificationName: e.target.value,
                    })
                  }
                >
                  <option>Choose variant</option>
                  {Qualification?.map((item) => {
                    return (
                      <option key={item.id} value={item?.qualificationName}>
                        {item?.qualificationName}
                      </option>
                    );
                  })}
                </Form.Control>
              </Form.Group>
            </Form>
          </Modal.Body>
        </Modal>
        <nav
          aria-label="Page navigation "
          className="d-flex justify-content-around mt-4"
        >
          <ul className="pagination">
            <li className="page-item previous ">
              <a
                href="#"
                className="page-link"
                onClick={() =>
                  setPageNumber(pageNumber - 1 ? pageNumber - 1 : 1)
                }
              >
                <i className="previous"></i>
              </a>
            </li>
            <li className="page-item">
              <a href="#" className="page-link active">
                {pageNumber}
              </a>
            </li>

            <li className="page-item next">
              <a
                href="#"
                className="page-link"
                onClick={() => {
                  setPageNumber(pageNumber + 1);
                }}
              >
                <i className="next"></i>
              </a>
            </li>
          </ul>

          <div className="show-size">
            <select
              id="mySelect"
              value={pageSize}
              onChange={handleChangeSelectShowPageSize}
              className="form-select form-select-solid "
            >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>
        </nav>
      </section>
      ;
    </>
  );
}

export default ArrangeCourse;
