import React, { PureComponent } from 'react';
import { default as DatePickerLib } from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker.styl';

class DatePicker extends PureComponent {
  render() {
    return <DatePickerLib
      locale="en-gb"
      placeholder="YYYY-MM-DD"
      popoverAttachment="bottom center"
      popoverTargetAttachment="top center"
      {...this.props}
    />;
  }
}

export default DatePicker;
