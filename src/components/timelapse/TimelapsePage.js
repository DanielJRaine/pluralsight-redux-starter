import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as timelapseActions from '../../actions/timelapseActions';
import {Link} from 'react-router';
import CalendarHeatmap from 'react-calendar-heatmap';

class TimelapsePage extends React.Component {
  constructor(props, context) {
    super(props, context);

  }

  render() {
    return (
      <CalendarHeatmap
        endDate={new Date('2016-04-01')}
        numDays={100}
        values={[
          { date: '2016-01-01', count: 1 },
          { date: '2016-01-22', count: 4 },
          { date: '2016-01-30', count: 2 }
        ]}
        classForValue={(value) => {
          if (!value) {
            return 'color-empty';
          }
          return `color-scale-${value.count}`;
        }}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    prop: state.prop
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators(timelapseActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TimelapsePage);