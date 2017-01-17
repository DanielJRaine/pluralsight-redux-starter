import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';

class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <h1>Manage Course</h1>
      // <CourseForm
          // allAuthors={this.props.authors}
          // course={this.state.course}
          // errors={this.state.errors}
      // />
    );
  }
}

ManageCoursePage.propTypes = {
  //myProp: PropTypes.string.isRequired
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired
};

const mapStateToProps = (state, ownProps) => {
  // return {
  //   state: state
  // };
  let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};

  const authorsFormattedForDropdown = state.authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + '  ' + author.lastName
    };
  });

  return {
    course: course,
    authors: authorsFormattedForDropdown
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);