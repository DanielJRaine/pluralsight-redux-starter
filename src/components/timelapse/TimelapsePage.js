'use strict';
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as timelapseActions from '../../actions/timelapseActions';
import {Link} from 'react-router';
// import CalendarHeatmap from 'react-calendar-heatmap'; // instead make a custom component based on this
import CalendarHeatmap from './CalendarHeatmap'

let numDays = 30;
let x = 0;
let y = 0;
let width = numDays;
let height = 0;

class TimelapsePage extends React.Component {
  constructor(props, context) {
    super(props, context);

  }

  render() {
    return (
      <CalendarHeatmap
        horizontal={false}
        endDate={new Date('2016-01-12')}
        numDays={numDays}
        values={[
          { date: '2016-01-01', count: 0 },
          { date: '2016-01-02', count: 1 },
          { date: '2016-01-03', count: 2 },
          { date: '2016-01-04', count: 3 },
          { date: '2016-01-05', count: 4 },
          { date: '2016-01-06', count: 5 },
          { date: '2016-01-07', count: 6 },
          { date: '2016-01-08', count: 7 },
          { date: '2016-01-09', count: 8 },
          { date: '2016-01-10', count: 9 },
          { date: '2016-01-11', count: 10 }      
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