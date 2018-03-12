import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import * as moment from 'moment';
import { DaterangePickerService } from '../../daterange-picker.service';

@Component({
  selector: 'app-date-range-picker-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css']
})
export class BtnComponent implements OnInit {

  @Input()
  picker = {
    opens: "left",
    startDate: moment().subtract(5, "day"),
    endDate: moment(),
    isInvalidDate: function(date) {
      if (date.isSame("2017-09-26", "day")) return "mystyle";
      return false;
    }
  };

  @Input() locale = "pt-br"

  @Output() emiselectedDate = new EventEmitter<any>();
  @Output() emicalendarEventsHandler = new EventEmitter<any>();
  @Output() emiapplyDatepicker = new EventEmitter<any>();

  @Input() chosenDate: any = {
    start: moment().subtract(12, "month"),
    end: moment().subtract(6, "month")
  };

  private eventLog = "";

  constructor(private daterangepickerOptions: DaterangePickerService) {
    moment.locale(this.locale);
    this.daterangepickerOptions.settings = {
      locale: {
        applyLabel: "Aplicar",
        cancelLabel: "Cancelar",
        customRangeLabel: "Perssonalizado"
      },
      startDate: moment().subtract(29, "days"),
      endDate: moment(),
      alwaysShowCalendars: false,
      opens: "right",
      ranges: {
        Hoje: [moment(), moment()],
        Ontem: [moment().subtract(1, "days"), moment().subtract(1, "days")],
        "Ultimos 7 Dias": [moment().subtract(6, "days"), moment()],
        "Este Mês": [moment().startOf("month"), moment().endOf("month")],
        "Ultimos 30 Dias": [moment().subtract(29, "days"), moment()],
        "Ultimo Mês": [
          moment()
            .subtract(1, "month")
            .startOf("month"),
          moment()
            .subtract(1, "month")
            .endOf("month")
        ],
        "Ultimos 3 Meses": [moment().subtract(4, "month"), moment()],
        "Ultimos 6 Meses": [moment().subtract(6, "month"), moment()],
        "Ultimos 12 Meses": [moment().subtract(12, "month"), moment()]
      }
    };
  }

  ngOnInit() {}

  public selectedDate(value: any, dateInput: any) {
    dateInput.start = value.start;
    dateInput.end = value.end;
    this.emiselectedDate.emit(value)
  }

  public calendarEventsHandler(e: any) {
    this.eventLog += "\nEvent Fired: " + e.event.type;
    this.emicalendarEventsHandler.emit(e)
  }

  public toggleDirection(direction: string) {
    this.picker.opens = direction;
  }

  public applyDatepicker(event: any) {
    this.emiapplyDatepicker.emit(event)
  }

  public updateSettings() {
    this.daterangepickerOptions.settings.locale = { format: "DD/MM/YYYY" };
    this.daterangepickerOptions.settings.ranges = {
      "30 days ago": [moment().subtract(1, "month"), moment()],
      "3 months ago": [moment().subtract(4, "month"), moment()],
      "6 months ago": [moment().subtract(6, "month"), moment()],
      "7 months ago": [moment().subtract(12, "month"), moment()]
    };
  }
}
