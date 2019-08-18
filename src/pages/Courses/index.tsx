import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

// Store
import { ApplicationState } from '../../store';
import { Course } from '../../store/ducks/courses/types';
import * as CoursesActions from '../../store/ducks/courses/actions';

// container
import CoursesContainer from './container';

// css
import './index.css';

interface StateProps {
  courses: Course[]
}

interface DispatchProps {
  loadRequest(): void
  // loadSuccess(data: Course[])
}

// interface OwnProps {}

type Props = StateProps & DispatchProps;

class Courses extends Component<Props> {
  componentDidMount() {
    const { loadRequest } = this.props;

    loadRequest();
  }

  render() {
    const { courses } = this.props;
    return (
      <CoursesContainer
        courses={courses}
      />
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  courses: state.courses.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(CoursesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
