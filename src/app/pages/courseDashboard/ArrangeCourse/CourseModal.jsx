import React from "react";
import { Modal, Form } from "react-bootstrap";

const CourseModal = ({
  show,
  handleClose,
  newCourse,
  setNewCourse,
  CourseName,
  Qualification,
  handleSubmit,
}) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create Course</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formNewCourseName">
            <Form.Label>Course Name</Form.Label>
            <Form.Control
              as="select"
              value={newCourse.CourseName}
              onChange={(e) =>
                setNewCourse({ ...newCourse, CourseName: e.target.value })
              }
            >
              <option>Choose variant</option>
              {CourseName?.map((item) => (
                <option key={item.id} value={item.courseName}>
                  {item.courseName}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formNewQualification">
            <Form.Label>Qualification</Form.Label>
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
              {Qualification?.map((item) => (
                <option key={item.id} value={item.qualificationName}>
                  {item.qualificationName}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default CourseModal;
