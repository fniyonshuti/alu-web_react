import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import CourseListRow from "./CourseListRow";
import {
  fetchCourses,
  selectCourse,
  unSelectCourse,
} from "../actions/courseActionCreators";
import { getCourses } from "../selectors/courseSelector";
import "./CourseList.css";

class CourseListContainer extends React.Component {
  componentDidMount() {
    this.props.fetchCourses();
  }

  onChangeRow = (id, checked) => {
    if (checked) {
      this.props.selectCourse(id);
    } else {
      this.props.unSelectCourse(id);
    }
  };

  render() {
    const { listCourses } = this.props;

    return (
      <table id="CourseList">
        <thead>
          <CourseListRow textFirstCell="Available courses" isHeader={true} />
          <CourseListRow
            textFirstCell="Course name"
            textSecondCell="Credit"
            isHeader={true}
          />
        </thead>
        <tbody>
          {listCourses.length === 0 ? (
            <CourseListRow
              textFirstCell="No course available yet"
              isHeader={false}
            />
          ) : (
            listCourses.map((course) => (
              <CourseListRow
                key={course.id}
                textFirstCell={course.name}
                textSecondCell={course.credit.toString()}
                isHeader={false}
                isChecked={course.isSelected}
                onChangeRow={this.onChangeRow}
              />
            ))
          )}
        </tbody>
      </table>
    );
  }
}

CourseListContainer.propTypes = {
  listCourses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      credit: PropTypes.number.isRequired,
    }),
  ),
  fetchCourses: PropTypes.func,
  selectCourse: PropTypes.func,
  unSelectCourse: PropTypes.func,
};

CourseListContainer.defaultProps = {
  listCourses: [],
  fetchCourses: () => {},
  selectCourse: () => {},
  unSelectCourse: () => {},
};

export const mapStateToProps = (state) => {
  const courses = getCourses(state);
  const courseList =
    courses && courses.toJS ? Object.values(courses.toJS()) : [];

  return {
    listCourses: courseList,
  };
};

export const mapDispatchToProps = {
  fetchCourses,
  selectCourse,
  unSelectCourse,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CourseListContainer);
