import React from 'react';
import { connect } from 'react-redux';

import ReactHighcharts from 'react-highcharts';
import HighchartsMore from 'highcharts-more';

HighchartsMore(ReactHighcharts.Highcharts);

class Timeline extends React.PureComponent {
  buildConfig() {
    const { books } = this.props;

    return {
      chart: {
        type: 'columnrange',
        inverted: true
      },
      credits: {
        enabled: false
      },
      title: {
        text: 'Book timeline'
      },
      xAxis: {
        categories: books.map(b => b.get('title')).toJS(),
      },
      yAxis: {
        title: {
          text: null
        },
        type: 'datetime',
        dateTimeLabelFormats: {
          month: '%b %Y',
          year: '%b'
        },
      },
      tooltip: {
        headerFormat: '<b>{point.key}</b><br>',
        pointFormat: '{point.low:%e %B %Y} - {point.high:%e %B %Y}'
      },
      plotOptions: {
        columnrange: {
          dataLabels: {
            enabled: true,
            format: '{point.y:%e %B %Y}'
          }
        }
      },
      legend: {
        enabled: false
      },
      series: [{
        name: 'Dates',
        data: books.map(b => [b.get('startDate').valueOf(), b.get('endDate').valueOf()]).toJS()
      }]
    };
  }

  render() {
    return <main>
      <ReactHighcharts config={this.buildConfig()}/>
    </main>;
  }
}

Timeline.propTypes = {
  books: React.PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  books: state.getIn(['library', 'books']).filter(b => b.get('startDate') !== null && b.get('endDate') !== null)
});

const mapDispatchToProps = {};

const TimelineContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Timeline);

export default TimelineContainer;
