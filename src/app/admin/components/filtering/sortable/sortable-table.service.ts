import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";

@Injectable()
export class SortableTableService {
  constructor() {}
  private columnSortedSource = new Subject<ColumnSortedEvent>();

  columnSorted$ = this.columnSortedSource.asObservable();

  columnSorted(event: ColumnSortedEvent) {
    this.columnSortedSource.next(event);
  }
}

export interface ColumnSortedEvent {
  zfTableColumn: string;
  zfTableOrder: string;
}
