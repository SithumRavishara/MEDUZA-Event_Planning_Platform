import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeDashboardComponent } from './view/home-dashboard/home-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { AdvancedSearchComponent } from './view/advanced-search/advanced-search.component';
import { NavigationBarComponent } from './view/navigation-bar/navigation-bar.component';
import { RegBannerComponent } from './view/reg-banner/reg-banner.component';
import { SubViewerComponent } from './view/sub-viewer/sub-viewer.component';
import { EventAdViewerComponent } from './view/event-ad-viewer/event-ad-viewer.component';
import { SigninPageComponent } from './view/signin-page/signin-page.component';
import { DiscoverPageComponent } from './view/discover-page/discover-page.component';
import { SignCardComponent } from './view/sign-card/sign-card.component';
import { LoginCardComponent } from './view/login-card/login-card.component';
import { EventviewerPageComponent } from './view/eventviewer-page/eventviewer-page.component';
import { PeopleViewerComponent } from './view/people-viewer/people-viewer.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CountDownComponent } from './view/count-down/count-down.component';
import { SidebarComponent } from './view/sidebar/sidebar.component';
import { CountdownTimerModule } from 'ngx-countdown-timer';
import { ProgressBarComponent } from './view/progress-bar/progress-bar.component';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { DynamicBoxComponent } from './view/dynamic-box/dynamic-box.component';
import { PlannerProfileComponent } from './view/planner-profile/planner-profile.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PlannerBlockComponent } from './view/planner-block/planner-block.component';
import { VendorBlockComponent } from './view/vendor-block/vendor-block.component';
import { PackageboxComponent } from './view/packagebox/packagebox.component';
import { SidebarVendorComponent } from './view/sidebar-vendor/sidebar-vendor.component';
import { VendorProfileComponent } from './view/vendor-profile/vendor-profile.component';
import { VendorProfileEditComponent } from './view/vendor-profile-edit/vendor-profile-edit.component';
import { VendorEditSidebarComponent } from './view/vendor-edit-sidebar/vendor-edit-sidebar.component';
import { VendorEditCardComponent } from './view/vendor-edit-card/vendor-edit-card.component';
import { VendorProEditComponent } from './view/vendor-pro-edit/vendor-pro-edit.component';
import { VendorProEditCardComponent } from './view/vendor-pro-edit-card/vendor-pro-edit-card.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PlannerBioCardComponent } from './view/planner-bio-card/planner-bio-card.component';
import { PlannerEventViewComponent } from './view/planner-event-view/planner-event-view.component';
import { EventProfileEditComponent } from './view/event-profile-edit/event-profile-edit.component';
import { EventEditFormComponent } from './view/event-edit-form/event-edit-form.component';
import { ActivityEditPageComponent } from './view/activity-edit-page/activity-edit-page.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ActivityEditFormComponent } from './view/activity-edit-form/activity-edit-form.component';
import { PlannerAccEditComponent } from './view/planner-acc-edit/planner-acc-edit.component';
import { PlannerAccEditCardComponent } from './view/planner-acc-edit-card/planner-acc-edit-card.component';
import { PlannerEditSidebarComponent } from './view/planner-edit-sidebar/planner-edit-sidebar.component';
import { PlannerProfEditSidebarComponent } from './view/planner-prof-edit-sidebar/planner-prof-edit-sidebar.component';
import { PalnnerProfEditCardComponent } from './view/palnner-prof-edit-card/palnner-prof-edit-card.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from "@angular/material/select";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {UserService} from "./service/user.service";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";


const routes: Routes = [
  {
    path: 'home',
    component: HomeDashboardComponent
  },
  {
    path: 'signin',
    component: SigninPageComponent
  },
  {
    path: 'discover',
    component: DiscoverPageComponent
  },
  {
    path: 'signin',
    component: SignCardComponent
  },
  {
    path: 'login',
    component: LoginCardComponent
  },
  {
    path: 'evnt-planner-view',
    component: PlannerEventViewComponent
  },
  {
    path: 'sidebar',
    component: SidebarComponent
  },
  {
    path: 'vendorprofile',
    component: VendorProfileComponent
  },
  {
    path: 'plannerprofile',
    component: PlannerProfileComponent
  },
  {
    path: 'VendorAccountEdit',
    component: VendorProfileEditComponent
  },
  {
    path: 'VendorProfileEdit',
    component: VendorProEditComponent
  },
  {
    path: 'PlannerAccoutEdit',
    component: PlannerAccEditComponent
  },
  {
    path: 'PlannerProfileEdit',
    component: PlannerProfEditSidebarComponent
  },
  {
    path: 'EventEditPage',
    component: EventProfileEditComponent
  },
  {
    path: 'EditActivity',
    component: ActivityEditPageComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'signin'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeDashboardComponent,
    AdvancedSearchComponent,
    NavigationBarComponent,
    RegBannerComponent,
    SubViewerComponent,
    EventAdViewerComponent,
    SigninPageComponent,
    DiscoverPageComponent,
    SignCardComponent,
    LoginCardComponent,
    EventviewerPageComponent,
    PeopleViewerComponent,
    CountDownComponent,
    SidebarComponent,
    ProgressBarComponent,
    DynamicBoxComponent,
    PlannerProfileComponent,
    PlannerBlockComponent,
    VendorBlockComponent,
    PackageboxComponent,
    SidebarVendorComponent,
    VendorProfileComponent,
    VendorProfileEditComponent,
    VendorEditSidebarComponent,
    VendorEditCardComponent,
    VendorProEditComponent,
    VendorProEditCardComponent,
    PlannerBioCardComponent,
    PlannerEventViewComponent,
    EventProfileEditComponent,
    EventEditFormComponent,
    ActivityEditPageComponent,
    ActivityEditFormComponent,
    PlannerAccEditComponent,
    PlannerAccEditCardComponent,
    PlannerEditSidebarComponent,
    PlannerProfEditSidebarComponent,
    PalnnerProfEditCardComponent,
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(routes),
        CarouselModule.forRoot(),
        CountdownTimerModule.forRoot(),
        ProgressbarModule.forRoot(),
        CollapseModule.forRoot(),
        BrowserAnimationsModule,
        BsDropdownModule.forRoot(),
        ModalModule.forRoot(),
        BsDatepickerModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatAutocompleteModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSnackBarModule
    ],
  exports: [
    MatDatepickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
