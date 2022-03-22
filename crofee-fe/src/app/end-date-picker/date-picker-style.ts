export const datePickerStyle = `
td {
  width: 32px;
  height: 32px;
}

.end-date-picker .myDpCalTable, 
.end-date-picker .myDpDaycell, 
.end-date-picker .myDpMonthTable, 
.end-date-picker .myDpMonthcell, 
.end-date-picker .myDpWeekDayTitle, 
.end-date-picker .myDpYearTable, 
.end-date-picker .myDpYearcell {
  border-collapse: inherit;
}

.end-date-picker .myDpIconLeftArrow,
.end-date-picker .myDpIconRightArrow,
.end-date-picker .myDpHeaderBtn {
  color: #154F5B;
  font-size: 0.75rem;
}
.end-date-picker .myDpHeaderBtn:focus,
.end-date-picker .myDpMonthLabel:focus,
.end-date-picker .myDpYearLabel:focus {
  color: #aaa;
}
.end-date-picker .myDpDaycell:focus,
.end-date-picker .myDpMonthcell:focus,
.end-date-picker .myDpYearcell:focus {
  box-shadow: none;
}

.end-date-picker .myDpSelector {
  border: none;
  height: 324px !important;
  width: 360px !important;
}

.end-date-picker .myDpSelector:focus {
}

.end-date-picker .myDpCurrMonth,
.end-date-picker .myDpMonthcell,
.end-date-picker .myDpYearcell {
  color: linear-gradient(90deg, #359CBB 23.53%, #64C299 79.78%);
  font-weight: bold;
}
.end-date-picker .myDpDaycellWeekNbr {
  color: #6c757d;
}
.end-date-picker .myDpPrevMonth,
.end-date-picker .myDpNextMonth {
  color: #aaa;
}
.end-date-picker .myDpWeekDayTitle {
  background-color: transparent;
  color: #6c757d;
  font-weight: bold;
}
.end-date-picker .myDpHeaderBtnEnabled:hover,
.end-date-picker .myDpMonthLabel:hover,
.end-date-picker .myDpYearLabel:hover,
.end-date-picker .myDpFooterBtn:hover {
  color: #212529;
}
.end-date-picker .myDpMarkCurrDay,
.end-date-picker .myDpMarkCurrMonth,
.end-date-picker .myDpMarkCurrYear {
  border-bottom: none;
}
.end-date-picker .myDpDisabled {
  color: #999;
}
.end-date-picker .myDpHighlight {
  color: #cd5c5c;
}
.end-date-picker .myDpTableSingleDay:hover,
.end-date-picker .myDpTableSingleMonth:hover,
.end-date-picker .myDpTableSingleYear:hover {
  background: linear-gradient(90deg, #359CBB 23.53%, #64C299 79.78%);
  border-radius: 50%;
  color: #fff;
}
.end-date-picker .myDpRangeColor {
  background-color: #eee;
}
.end-date-picker .myDpSelectedDay,
.end-date-picker .myDpSelectedMonth,
.end-date-picker .myDpSelectedYear {
  background: linear-gradient(90deg, #359CBB 23.53%, #64C299 79.78%);
  border-radius: 50%;
  color: #fff;
}

.end-date-picker .myDpMonthYearSelBar {
  margin: 12px 0;
}
`;
