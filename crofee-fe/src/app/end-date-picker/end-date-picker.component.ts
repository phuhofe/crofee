import { Component } from '@angular/core';

import { IAngularMyDpOptions, IMyDateModel } from 'angular-mydatepicker';
import { datePickerStyle } from './date-picker-style';

@Component({
  selector: 'app-end-date-picker',
  templateUrl: './end-date-picker.component.html',
  styleUrls: ['./end-date-picker.component.scss', './radio-input.scss'],
})
export class EndDatePickerComponent {
  isOpenDatePicker = false;
  myDatePickerOptions: IAngularMyDpOptions = {
    dateRange: false,
    inline: true,
    dateFormat: 'dd.mm.yyyy',
    dayLabels: {
      su: 'S',
      mo: 'M',
      tu: 'T',
      we: 'W',
      th: 'T',
      fr: 'F',
      sa: 'S',
    },
    firstDayOfWeek: 'su',
    stylesData: {
      selector: 'end-date-picker',
      styles: datePickerStyle,
    },
  };

  isNoEndDate = undefined;
  endDateInput = '';
  model: IMyDateModel = null;

  constructor() {}

  onDateChanged(event: IMyDateModel): void {
    this.endDateInput = event.singleDate.jsDate.toString();
    this.isNoEndDate = false;
  }

  toggleNoEndDate(): void {
    this.isNoEndDate = !this.isNoEndDate;

    if (this.isNoEndDate) {
      this.endDateInput = null;
      this.model = null;
    }
  }
}
