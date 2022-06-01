import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { IgxExpansionPanelModule, IgxTabsModule, IgxIconModule, IgxCardModule, IgxAvatarModule, IgxButtonModule, IgxRippleModule, IgxCalendarModule, IgxListModule, IgxGridModule, IgxInputGroupModule, IgxDateTimeEditorModule, IgxSliderModule, IgxChipsModule, IgxButtonGroupModule, IgxSwitchModule, IgxCheckboxModule, IgxRadioModule, IgxSelectModule, IgxComboModule, IgxToggleModule, IgxDropDownModule, IgxDialogModule, IgxSnackbarModule, IgxBannerModule, IgxNavbarModule, IgxNavigationDrawerModule } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { LayoutsComponent } from './layouts/layouts.component';
import { PositionComponent } from './position/position.component';
import { TabLayoutComponent } from './tab-layout/tab-layout.component';
import { CardCalendarComponent } from './card-calendar/card-calendar.component';
import { ListsDataComponent } from './lists-data/lists-data.component';
import { DataGridLayoutsComponent } from './data-grid-layouts/data-grid-layouts.component';
import { TypeScaleComponent } from './type-scale/type-scale.component';
import { InputsComponent } from './inputs/inputs.component';
import { PickersComboComponent } from './pickers-combo/pickers-combo.component';
import { DialogsAndOverlaysComponent } from './dialogs-and-overlays/dialogs-and-overlays.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { ImageComponent } from './image/image.component';
import { CopyPasteComponent } from './copy-paste/copy-paste.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpansionPanelComponent,
    LayoutsComponent,
    PositionComponent,
    TabLayoutComponent,
    CardCalendarComponent,
    ListsDataComponent,
    DataGridLayoutsComponent,
    TypeScaleComponent,
    InputsComponent,
    PickersComboComponent,
    DialogsAndOverlaysComponent,
    SignInPageComponent,
    ImageComponent,
    CopyPasteComponent
  ],
  imports: [
    BrowserModule,
    HammerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxExpansionPanelModule,
    FormsModule,
    IgxTabsModule,
    IgxIconModule,
    IgxCardModule,
    IgxAvatarModule,
    IgxButtonModule,
    IgxRippleModule,
    IgxCalendarModule,
    IgxListModule,
    IgxGridModule,
    IgxInputGroupModule,
    IgxDateTimeEditorModule,
    IgxSliderModule,
    IgxChipsModule,
    IgxButtonGroupModule,
    IgxSwitchModule,
    IgxCheckboxModule,
    IgxRadioModule,
    IgxSelectModule,
    IgxComboModule,
    IgxToggleModule,
    IgxDropDownModule,
    IgxDialogModule,
    IgxSnackbarModule,
    IgxBannerModule,
    IgxNavbarModule,
    IgxNavigationDrawerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
