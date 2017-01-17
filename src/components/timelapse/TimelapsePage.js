import CalendarHeatmap from 'react-calendar-heatmap';

<CalendarHeatmap
  endDate={new Date('2016-04-01')}
  numDays={100}
  values={[
    { date: '2016-01-01' },
    { date: '2016-01-22' },
    { date: '2016-01-30' },
  ]}
   classForValue={(value) => {
    if (!value) {
      return 'color-empty';
    }
    return `color-scale-${value.count}`;
  }}
  />