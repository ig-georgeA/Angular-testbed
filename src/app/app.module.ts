import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { PositionComponent } from './position/position.component';
import { TabLayoutComponent } from './tab-layout/tab-layout.component';
import { IgxTabsModule, IgxIconModule, IgxCardModule, IgxButtonModule, IgxRippleModule, IgxCalendarModule, IgxInputGroupModule, IgxGridModule, IgxAvatarModule, IgxExpansionPanelModule, IgxListModule, IgxCheckboxModule, IgxAccordionModule, IgxTreeModule, IgxStepperModule, IgxDividerModule, IgxActionStripModule, IgxTreeGridModule, IgxPivotGridModule, IgxDateTimeEditorModule, IgxDatePickerModule, IgxChipsModule, IgxSliderModule, IgxBadgeModule, IgxButtonGroupModule, IgxSwitchModule, IgxRadioModule, IgcFormsModule, IgxSelectModule, IgxComboModule, IgxToggleModule, IgxDropDownModule, IgxDialogModule, IgxBannerModule, IgxSnackbarModule, IgxNavbarModule, IgxNavigationDrawerModule } from '@infragistics/igniteui-angular';
import { IgxCategoryChartModule, IgxPieChartModule } from 'igniteui-angular-charts';
import { FormsModule } from '@angular/forms';
import { ExpansionPanelsTreeComponent } from './expansion-panels-tree/expansion-panels-tree.component';
import { StepperComponent } from './stepper/stepper.component';
import { CardCalendarComponent } from './card-calendar/card-calendar.component';
import { ListsDataComponent } from './lists-data/lists-data.component';
import { GridAndTreeGridComponent } from './grid-and-tree-grid/grid-and-tree-grid.component';
import { PivotGridComponent } from './pivot-grid/pivot-grid.component';
import { ChartsComponent } from './charts/charts.component';
import { TypeScaleComponent } from './type-scale/type-scale.component';
import { InputsComponent } from './inputs/inputs.component';
import { PickersComboComponent } from './pickers-combo/pickers-combo.component';
import { DialogsAndOverlaysComponent } from './dialogs-and-overlays/dialogs-and-overlays.component';
import { ImageComponent } from './image/image.component';
import { ChildViewComponent } from './child-view/child-view.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LayoutsComponent,
    PositionComponent,
    TabLayoutComponent,
    ExpansionPanelsTreeComponent,
    StepperComponent,
    CardCalendarComponent,
    ListsDataComponent,
    GridAndTreeGridComponent,
    PivotGridComponent,
    ChartsComponent,
    TypeScaleComponent,
    InputsComponent,
    PickersComboComponent,
    DialogsAndOverlaysComponent,
    ImageComponent,
    ChildViewComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxTabsModule,
    IgxIconModule,
    IgxCardModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxCalendarModule,
    IgxInputGroupModule,
    IgxGridModule,
    IgxCategoryChartModule,
    FormsModule,
    IgxAvatarModule,
    IgxExpansionPanelModule,
    IgxListModule,
    IgxCheckboxModule,
    IgxAccordionModule,
    IgxTreeModule,
    IgxStepperModule,
    IgxDividerModule,
    IgxActionStripModule,
    IgxTreeGridModule,
    IgxPivotGridModule,
    IgxPieChartModule,
    IgxDateTimeEditorModule,
    IgxDatePickerModule,
    IgxChipsModule,
    IgxSliderModule,
    IgxBadgeModule,
    IgxButtonGroupModule,
    IgxSwitchModule,
    IgxRadioModule,
    IgcFormsModule,
    IgxSelectModule,
    IgxComboModule,
    IgxToggleModule,
    IgxDropDownModule,
    IgxDialogModule,
    IgxBannerModule,
    IgxSnackbarModule,
    IgxNavbarModule,
    IgxNavigationDrawerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
