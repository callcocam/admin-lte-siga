import { Directive, EventEmitter, OnInit, OnDestroy, Output } from '@angular/core';
import { SortableTableService } from './sortable-table.service';
import { Subscription } from 'rxjs/Subscription';

@Directive({
  selector: '[sortable-table]'
})
export class SortableTableDirective  implements OnInit, OnDestroy {

  constructor(private sortService: SortableTableService) {}

    @Output()
    sorted = new EventEmitter();

    private columnSortedSubscription: Subscription;

    ngOnInit() {
        // subscribe to sort changes so we emit and event for this data table
        this.columnSortedSubscription = this.sortService.columnSorted$.subscribe(event => {
            this.sorted.emit(event);
        });
    }

    ngOnDestroy() {
        this.columnSortedSubscription.unsubscribe();
    }

}
