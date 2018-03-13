import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ResourcesService } from "./services/resources.service";
import { LocalStorageService } from "./services/local-storage.service";
import { SharedService } from "./services/shared.service";
import { AuthGuardRouterService } from "./layout/auth/services/auth-guard-router.service";
import { AuthGuestRouterService } from "./layout/auth/services/auth-guest-router.service";
import { ModuleWithProviders } from "@angular/compiler/src/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, RouterLink } from "@angular/router";
import { AuthService } from "./layout/auth/auth.service";
import { InputComponent } from "./components/input/input.component";
import { JwtTokenService } from "./layout/auth/services/jwt-token.service";
import { DefaultRequestOptionsService } from "./services/default-request-options.service";
import { FiltersComponent } from "./components/filtering/filters/filters.component";
import { DaterangePickerComponent } from "./components/filtering/filters/daterange-picker/daterange-picker.component";
import { BtnComponent } from "./components/filtering/filters/daterange-picker/daterange-picker/btn/btn.component";
import { DaterangePickerService } from "./components/filtering/filters/daterange-picker/daterange-picker.service";
import { ActionsComponent } from "./components/filtering/filters/actions/actions.component";
import { PaginatorComponent } from "./components/paginator/paginator.component";
import { SortableTableDirective } from "./components/filtering/sortable/sortable-table.directive";
import { SortableTableService } from "./components/filtering/sortable/sortable-table.service";
import { SortableColumnComponent } from "./components/filtering/sortable/sortable-column.component";
import { NgSelectModule } from "@ng-select/ng-select";
import { FroalaEditorModule, FroalaViewModule } from "angular-froala-wysiwyg";
import { DetailsUploadComponent } from './components/upload/details-upload/details-upload.component';
import { FormUploadComponent } from './components/upload/form-upload/form-upload.component';
import { ListUploadComponent } from './components/upload/list-upload/list-upload.component';
// import "froala-editor/js/froala_editor.pkgd.min.js";
// import * as $ from "jquery";
import { UploadFileService } from './components/upload/upload-file.service';
import { FlashMessagesService } from './components/flash-messages/flash-messages.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    RouterModule,
    NgSelectModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FroalaEditorModule,
    FroalaViewModule,
    NgSelectModule,  
    InputComponent,
    FiltersComponent,
    DaterangePickerComponent,
    ActionsComponent,
    PaginatorComponent,
    SortableTableDirective,
    SortableColumnComponent,
    DetailsUploadComponent,
    FormUploadComponent,
    ListUploadComponent
  ],
  declarations: [
    InputComponent,
    FiltersComponent,
    DaterangePickerComponent,
    BtnComponent,
    ActionsComponent,
    PaginatorComponent,
    SortableTableDirective,
    SortableColumnComponent,
    DetailsUploadComponent,
    FormUploadComponent,
    ListUploadComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        AuthService,
        ResourcesService,
        LocalStorageService,
        SharedService,
        JwtTokenService,
        AuthGuardRouterService,
        AuthGuestRouterService,
        DefaultRequestOptionsService,
        DaterangePickerService,
        SortableTableService,
        UploadFileService
      ]
    };
  }
}
