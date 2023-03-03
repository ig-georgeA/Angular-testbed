import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { PositionComponent } from './position/position.component';
import { TabLayoutComponent } from './tab-layout/tab-layout.component';
import { IgxTabsModule, IgxIconModule, IgxInputGroupModule, IgxCardModule, IgxButtonModule, IgxRippleModule, IgxCalendarModule, IgxGridModule, IgxAvatarModule, IgxExpansionPanelModule, IgxListModule, IgxCheckboxModule, IgxAccordionModule, IgxTreeModule, IgxDividerModule, IgxActionStripModule, IgxTreeGridModule, IgxPivotGridModule, IgxDateTimeEditorModule, IgxDatePickerModule, IgxChipsModule, IgxSliderModule, IgxButtonGroupModule, IgxSwitchModule, IgxRadioModule, IgxSelectModule, IgxComboModule, IgxToggleModule, IgxDropDownModule, IgxDialogModule, IgxBannerModule, IgxSnackbarModule, IgxNavbarModule, IgxNavigationDrawerModule } from '@infragistics/igniteui-angular';
import { FormsModule } from '@angular/forms';
import { ExpansionPanelsTreeComponent } from './expansion-panels-tree/expansion-panels-tree.component';
import { CardCalendarComponent } from './card-calendar/card-calendar.component';
import { ListsDataComponent } from './lists-data/lists-data.component';
import { DataGridLayoutsComponent } from './data-grid-layouts/data-grid-layouts.component';
import { TreeGridComponent } from './tree-grid/tree-grid.component';
import { PivotGridComponent } from './pivot-grid/pivot-grid.component';
import { ChartsComponent } from './charts/charts.component';
import { IgxCategoryChartModule, IgxPieChartModule } from 'igniteui-angular-charts';
import { TypeScaleComponent } from './type-scale/type-scale.component';
import { InputsComponent } from './inputs/inputs.component';
import { PickersComboComponent } from './pickers-combo/pickers-combo.component';
import { DialogsAndOverlaysComponent } from './dialogs-and-overlays/dialogs-and-overlays.component';
import { ImageComponent } from './image/image.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutsComponent,
    PositionComponent,
    TabLayoutComponent,
    ExpansionPanelsTreeComponent,
    CardCalendarComponent,
    ListsDataComponent,
    DataGridLayoutsComponent,
    TreeGridComponent,
    PivotGridComponent,
    ChartsComponent,
    TypeScaleComponent,
    InputsComponent,
    PickersComboComponent,
    DialogsAndOverlaysComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxTabsModule,
    IgxIconModule,
    IgxInputGroupModule,
    IgxCardModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxCalendarModule,
    IgxGridModule,
    FormsModule,
    IgxAvatarModule,
    IgxExpansionPanelModule,
    IgxListModule,
    IgxCheckboxModule,
    IgxAccordionModule,
    IgxTreeModule,
    IgxDividerModule,
    IgxActionStripModule,
    IgxTreeGridModule,
    IgxPivotGridModule,
    IgxCategoryChartModule,
    IgxPieChartModule,
    IgxDateTimeEditorModule,
    IgxDatePickerModule,
    IgxChipsModule,
    IgxSliderModule,
    IgxButtonGroupModule,
    IgxSwitchModule,
    IgxRadioModule,
    IgxSelectModule,
    IgxComboModule,
    IgxToggleModule,
    IgxDropDownModule,
    IgxDialogModule,
    IgxBannerModule,
    IgxSnackbarModule,
    IgxNavbarModule,
    IgxNavigationDrawerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
