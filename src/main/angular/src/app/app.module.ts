import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RoomComponent} from './room/room.component';
import {WorkTypeComponent} from './work-type/work-type.component';
import {ContractorsComponent} from './contractors/contractors.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {RoomDialogComponent} from './room/room-dialog/room-dialog.component';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDialogModule} from "@angular/material/dialog";
import {MatInput} from "@angular/material/input";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatFooterRow,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable
} from "@angular/material/table";
import {MatButton, MatFabButton, MatIconButton, MatMiniFabButton} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
  ErrorStateMatcher,
  MatOption,
  provideNativeDateAdapter,
  ShowOnDirtyErrorStateMatcher
} from "@angular/material/core";
import {MatIcon} from "@angular/material/icon";
import {RemoveDialogComponent} from './dialogs/remove-dialog/remove-dialog.component';
import {BudgetComponent} from './budget/budget.component';
import {WorkTypeDialogComponent} from './work-type/work-type-dialog/work-type-dialog.component';
import {ContractorDialogComponent} from './contractors/contractor-dialog/contractor-dialog.component';
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {WorkComponent} from './work/work.component';
import {WorkDialogComponent} from './work/work-dialog/work-dialog.component';
import {MatCheckbox} from "@angular/material/checkbox";
import {MatSelect} from "@angular/material/select";
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerToggle,
  MatDateRangeInput,
  MatDateRangePicker
} from "@angular/material/datepicker";
import {MatSidenav, MatSidenavContainer, MatSidenavContent, MatSidenavModule} from "@angular/material/sidenav";
import {MatListItem, MatListItemIcon, MatNavList} from "@angular/material/list";
import {ToolbarComponent} from './toolbar/toolbar.component';
import {MatToolbar} from "@angular/material/toolbar";
import {MatGridList, MatGridTile} from "@angular/material/grid-list";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {LoginComponent} from './auth/login/login.component';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MaskitoDirective} from "@maskito/angular";
import {RegisterComponent} from './auth/register/register.component';
import {InterceptorService} from "./auth/interceptor.service";
import {UserComponent} from './user/user.component';
import {ConfirmDialogComponent} from './dialogs/confirm-dialog/confirm-dialog.component';
import {HomeComponent} from './home/home.component';
import {AdminComponent} from './admin/admin.component';
import {MatSort, MatSortHeader} from "@angular/material/sort";
import { RelativeTimePipe } from './pipes/relative-time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    RoomComponent,
    WorkTypeComponent,
    ContractorsComponent,
    RoomDialogComponent,
    RemoveDialogComponent,
    BudgetComponent,
    WorkTypeDialogComponent,
    ContractorDialogComponent,
    WorkComponent,
    WorkDialogComponent,
    ToolbarComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    ConfirmDialogComponent,
    HomeComponent,
    AdminComponent,
    RelativeTimePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInput,
    MatFooterRow,
    MatButton,
    FormsModule,
    ReactiveFormsModule,
    MatIcon,
    MatFabButton,
    MatMiniFabButton,
    MatRadioButton,
    MatRadioGroup,
    MatTabGroup,
    MatTab,
    MatCheckbox,
    MatSelect,
    MatOption,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatDateRangeInput,
    MatDateRangePicker,
    MatDatepicker,
    MatSidenavContent,
    MatSidenav,
    MatSidenavContainer,
    MatSidenavModule,
    MatNavList,
    MatListItem,
    MatToolbar,
    MatIconButton,
    MatListItemIcon,
    MatGridList,
    MatGridTile,
    MatTable,
    MatHeaderCellDef,
    MatHeaderCell,
    MatColumnDef,
    MatCell,
    MatCellDef,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRowDef,
    MatRow,
    MatMenuTrigger,
    MatMenu,
    MatMenuItem,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    // https://maskito.dev/getting-started/what-is-maskito
    MaskitoDirective,
    MatSortHeader,
    MatSort
  ],
  providers: [
    provideAnimationsAsync('noop'),
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher},
    provideNativeDateAdapter(),
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
