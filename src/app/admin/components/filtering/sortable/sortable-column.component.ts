import { Component, OnInit, HostListener, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { SortableTableService } from './sortable-table.service';

@Component({
  selector: '[sortable-column]',
  templateUrl: './sortable-column.component.html',
  styleUrls: ['./sortable-column.component.css']
})
export class SortableColumnComponent implements OnInit {

  constructor(private sortService: SortableTableService) {}
  @Input("sortable-column") columnName: any;

  @Input("sort-direction") sortDirection: string = "";

  private columnSortedSubscription: Subscription;

  @HostListener("click")
  sort() {
    this.sortDirection = this.sortDirection === "asc" ? "desc" : "asc";
    this.sortService.columnSorted({
      zfTableColumn: this.columnName,
      zfTableOrder: this.sortDirection
    });
  }
  ngOnInit() {
    // subscribe to sort changes so we can react when other columns are sorted
    this.columnSortedSubscription = this.sortService.columnSorted$.subscribe(
      event => {
        // reset this column's sort direction to hide the sort icons
        if (this.columnName != event.zfTableColumn) {
          this.sortDirection = "";
        }
      }
    );
  }

  ngOnDestroy() {
    this.columnSortedSubscription.unsubscribe();
  }

}
