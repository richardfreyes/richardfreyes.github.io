webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!-- <app-header></app-header> -->\n<ng-progress\n  #progressBar [meteor]=\"options.meteor\"\n  [color]=\"options.color\"\n  [min]=\"options.min\"\n  [speed]=\"options.speed\"\n  [spinner]=\"options.spinner\"\n  [max]=\"options.max\"\n  [spinnerPosition]=\"options.spinnerPosition\"\n  [direction]=\"options.direction\"\n  [thick]=\"options.thick\"\n  [trickleSpeed]=\"options.trickleSpeed\"\n  [ease]=\"options.ease\"\n  (started)=\"onStarted()\"\n  (completed)=\"onCompleted()\">\n</ng-progress>\n<!-- <div class=\"spacer\"></div>\n<p class=\"inprogress\">Note: This Website is inprogress :)</p> -->\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        this.options = {
            min: 8,
            max: 100,
            ease: 'linear',
            speed: 200,
            trickleSpeed: 300,
            meteor: true,
            spinner: true,
            spinnerPosition: 'right',
            direction: 'ltr+',
            color: 'red',
            thick: true
        };
        this.startedClass = false;
        this.completedClass = false;
        this.preventAbuse = false;
    }
    AppComponent.prototype.onStarted = function () {
        var _this = this;
        this.startedClass = true;
        setTimeout(function () {
            _this.startedClass = false;
        }, 800);
    };
    AppComponent.prototype.onCompleted = function () {
        var _this = this;
        this.completedClass = true;
        setTimeout(function () {
            _this.completedClass = false;
        }, 800);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_disqus__ = __webpack_require__("./node_modules/ngx-disqus/esm5/ngx-disqus.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_wordpress__ = __webpack_require__("./node_modules/ngx-wordpress/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_progressbar_core__ = __webpack_require__("./node_modules/@ngx-progressbar/core/esm5/ngx-progressbar-core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngx_progressbar_router__ = __webpack_require__("./node_modules/@ngx-progressbar/router/esm5/ngx-progressbar-router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_header_header_component__ = __webpack_require__("./src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_profile_profile_component__ = __webpack_require__("./src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_portfolio_portfolio_component__ = __webpack_require__("./src/app/components/portfolio/portfolio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_blog_blog_component__ = __webpack_require__("./src/app/components/blog/blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_contact_contact_component__ = __webpack_require__("./src/app/components/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_footer_footer_component__ = __webpack_require__("./src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_resume_resume_component__ = __webpack_require__("./src/app/components/resume/resume.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ngx_owl_carousel__ = __webpack_require__("./node_modules/ngx-owl-carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ngx_owl_carousel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_ngx_owl_carousel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_blog_disqus_disqus_component__ = __webpack_require__("./src/app/components/blog/disqus/disqus.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_blog_blog_post_blog_details_blog_details_component__ = __webpack_require__("./src/app/components/blog/blog-post/blog-details/blog-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_blog_blog_post_blog_listing_blog_listing_component__ = __webpack_require__("./src/app/components/blog/blog-post/blog-listing/blog-listing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_blog_shared__ = __webpack_require__("./src/app/components/blog/_shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_blog_blog_post_blog_sidenav_blog_sidenav_component__ = __webpack_require__("./src/app/components/blog/blog-post/blog-sidenav/blog-sidenav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__send_email_send_email_component__ = __webpack_require__("./src/app/send-email/send-email.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// firebase data




// page loading





















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_14__components_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'resume', component: __WEBPACK_IMPORTED_MODULE_19__components_resume_resume_component__["a" /* ResumeComponent */] },
    { path: 'portfolio', component: __WEBPACK_IMPORTED_MODULE_15__components_portfolio_portfolio_component__["a" /* PortfolioComponent */] },
    { path: 'blog', component: __WEBPACK_IMPORTED_MODULE_16__components_blog_blog_component__["a" /* BlogComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_17__components_contact_contact_component__["a" /* ContactComponent */] },
    { path: 'blog/:slug', component: __WEBPACK_IMPORTED_MODULE_22__components_blog_blog_post_blog_details_blog_details_component__["a" /* BlogDetailsComponent */] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_portfolio_portfolio_component__["a" /* PortfolioComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_blog_blog_component__["a" /* BlogComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_resume_resume_component__["a" /* ResumeComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_blog_disqus_disqus_component__["a" /* DisqusComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_blog_blog_post_blog_details_blog_details_component__["a" /* BlogDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_blog_blog_post_blog_listing_blog_listing_component__["a" /* BlogListingComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_blog_blog_post_blog_sidenav_blog_sidenav_component__["a" /* BlogSidenavComponent */],
                __WEBPACK_IMPORTED_MODULE_28__send_email_send_email_component__["a" /* SendEmailComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_20_ngx_owl_carousel__["OwlModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_25__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_26__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_24__components_blog_shared__["a" /* AppMaterialModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_wordpress__["a" /* WordPressModule */].forRoot('http://dev-freyeswebsolutions.pantheonsite.io'),
                __WEBPACK_IMPORTED_MODULE_9__ngx_progressbar_core__["b" /* NgProgressModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10__ngx_progressbar_router__["a" /* NgProgressRouterModule */],
                __WEBPACK_IMPORTED_MODULE_3_ngx_disqus__["a" /* DisqusModule */].forRoot('freyes'),
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* RouterModule */].forRoot(appRoutes, {
                    enableTracing: true,
                    useHash: true
                }),
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["a" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].firebase)
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/blog/_services/butterCMS.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return butterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_buttercms__ = __webpack_require__("./node_modules/buttercms/lib/butter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_buttercms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_buttercms__);

var butterService = __WEBPACK_IMPORTED_MODULE_0_buttercms__('e16a42b5945d0626d0699f64b35b3cd2784df62b');


/***/ }),

/***/ "./src/app/components/blog/_services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__butterCMS_service__ = __webpack_require__("./src/app/components/blog/_services/butterCMS.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__butterCMS_service__["a"]; });



/***/ }),

/***/ "./src/app/components/blog/_shared/app-material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppMaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_table__ = __webpack_require__("./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_autocomplete__ = __webpack_require__("./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_button__ = __webpack_require__("./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_card__ = __webpack_require__("./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_checkbox__ = __webpack_require__("./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_chips__ = __webpack_require__("./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material_dialog__ = __webpack_require__("./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_expansion__ = __webpack_require__("./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_icon__ = __webpack_require__("./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_input__ = __webpack_require__("./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_list__ = __webpack_require__("./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material_menu__ = __webpack_require__("./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material_paginator__ = __webpack_require__("./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_material_progress_bar__ = __webpack_require__("./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_material_progress_spinner__ = __webpack_require__("./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_material_radio__ = __webpack_require__("./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_material_select__ = __webpack_require__("./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_material_sidenav__ = __webpack_require__("./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_material_slide_toggle__ = __webpack_require__("./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_material_sort__ = __webpack_require__("./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_material_table__ = __webpack_require__("./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_material_tabs__ = __webpack_require__("./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_material_toolbar__ = __webpack_require__("./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_material_tooltip__ = __webpack_require__("./node_modules/@angular/material/esm5/tooltip.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppMaterialModule = /** @class */ (function () {
    function AppMaterialModule() {
    }
    AppMaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material_autocomplete__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_checkbox__["a" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_chips__["a" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_dialog__["a" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_expansion__["a" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material_input__["a" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material_list__["a" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material_menu__["a" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material_paginator__["a" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material_progress_spinner__["a" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material_radio__["a" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material_select__["a" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material_sidenav__["a" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_material_slide_toggle__["a" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material_sort__["a" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_21__angular_material_table__["a" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_material_tabs__["a" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_23__angular_material_toolbar__["a" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_24__angular_material_tooltip__["a" /* MatTooltipModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material_autocomplete__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material_button__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_checkbox__["a" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_chips__["a" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_material_dialog__["a" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_expansion__["a" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material_input__["a" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material_list__["a" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material_menu__["a" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material_paginator__["a" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material_progress_bar__["a" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_material_progress_spinner__["a" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_material_radio__["a" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_material_select__["a" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_18__angular_material_sidenav__["a" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_material_slide_toggle__["a" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_material_sort__["a" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_21__angular_material_table__["a" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_material_tabs__["a" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_23__angular_material_toolbar__["a" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_24__angular_material_tooltip__["a" /* MatTooltipModule */]
            ]
        })
    ], AppMaterialModule);
    return AppMaterialModule;
}());



/***/ }),

/***/ "./src/app/components/blog/_shared/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_material_module__ = __webpack_require__("./src/app/components/blog/_shared/app-material.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_material_module__["a"]; });



/***/ }),

/***/ "./src/app/components/blog/blog-post/blog-details/blog-details.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/blog/blog-post/blog-details/blog-details.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"blog-details\">\n  <div class=\"container\">\n    <div class=\"wrapper\">\n      <header class=\"header\">\n        <div class=\"header-wrapper\">\n          <div class=\"row row-holder blog\">\n            <div class=\"col-9 col-holder p-info-holder\">\n              <div class=\"icon-holder\">\n                <i class=\"fa fa-folder-open-o fa-4x\" aria-hidden=\"true\"></i>\n              </div>\n              <div class=\"label-holder\">\n                <div class=\"inner-holder\">\n                  <h1 class=\"page-title uppercase\">Blog</h1>\n                  <h2 class=\"page-s-title uppercase\">I write here my thoughts</h2>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-3 col-holder close-holder\">\n              <a class=\"btn btn-close\" routerLink=\"/blog\"><span></span></a>\n            </div>\n          </div>\n        </div>\n      </header>\n      <div class=\"content-wrapper s-padding\">\n        <div class=\"row row-holder\">\n          <div class=\"col-lg-12 col-holder\">\n            <div class=\"post-details blog-ftrd-post\">\n              <div class=\"img-holder\">\n                <img *ngIf=\"post.data?.featured_image\" class=\"featured-img\" src=\"{{post.data?.featured_image}}\" alt=\"featured image\">\n              </div>\n              <div class=\"info-wrapper\">\n                <h1 class=\"post-title\">{{post.data?.title}}</h1>\n                <div class=\"details\">\n                  <p class=\"author\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i>&nbsp;&nbsp;{{ post.data?.author?.first_name }} {{ post.data?.author?.last_name }}</p>\n                  <p class=\"post-date\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>&nbsp;&nbsp;{{post.data?.published}}</p>\n                </div>\n              </div>\n              <div class=\"post-desc\">\n                <p [innerHTML]=\"post.data?.body\"></p>\n              </div>\n            </div>\n            <div class=\"next-prev\">\n              <div *ngIf=\"post.meta?.previous_post\"><a [routerLink]=\"post.meta.previous_post\">Previous post</a></div>\n              <div *ngIf=\"post.meta?.next_post\"><a [routerLink]=\"post.meta.next_post\">Next post</a></div>\n            </div>\n            <app-disqus></app-disqus>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</main>\n"

/***/ }),

/***/ "./src/app/components/blog/blog-post/blog-details/blog-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("./src/app/components/blog/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BlogDetailsComponent = /** @class */ (function () {
    function BlogDetailsComponent(route) {
        this.route = route;
        this.post = {
            meta: null,
            data: null
        };
    }
    BlogDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.slug$ = this.route.paramMap
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* map */])(function (params) { return (params.get('slug')); }));
        this.slug$.pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["b" /* take */])(1))
            .subscribe(function (slug) {
            __WEBPACK_IMPORTED_MODULE_2__services__["a" /* butterService */].post.retrieve(slug)
                .then(function (res) {
                _this.post = res.data;
            }).catch(function (res) {
                console.log(res);
            });
        });
    };
    BlogDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-blog-details',
            template: __webpack_require__("./src/app/components/blog/blog-post/blog-details/blog-details.component.html"),
            styles: [__webpack_require__("./src/app/components/blog/blog-post/blog-details/blog-details.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], BlogDetailsComponent);
    return BlogDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/blog/blog-post/blog-listing/blog-listing.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/blog/blog-post/blog-listing/blog-listing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section-listing\">\n  <div class=\"section-wrapper s-padding section-i-shadow\">\n    <div class=\"row row-holder\">\n      <div *ngFor=\"let post of posts\" class=\"col-lg-6 col-holder blog-post\">\n        <div class=\"post-holder blog-ftrd-post\">\n          <a [routerLink]=\"[post.slug]\" class=\"post-router\">\n            <div class=\"img-holder\">\n              <img *ngIf=\"post.featured_image\" class=\"featured-img\" src=\"{{post.featured_image}}\" alt=\"featured image\">\n            </div>\n          </a>\n          <div class=\"info-wrapper\">\n            <h1 class=\"post-title\">{{post.title}}</h1>\n            <div class=\"details\">\n              <p class=\"post-date\"><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>&nbsp;&nbsp;{{post.published}}</p>\n            </div>\n            <p class=\"post-summary\" [innerHTML]=\"post.summary\"></p>\n            <a [routerLink]=\"[post.slug]\" class=\"read-more\">Read More <i class=\"fa fa-long-arrow-right\" aria-hidden=\"true\"></i></a>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- <app-disqus></app-disqus> -->\n    <div class=\"fb-comments\" data-href=\"https://dev-richardfreyes-805dc.firebaseapp.com/blog\" data-width=\"100%\" data-numposts=\"5\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/blog/blog-post/blog-listing/blog-listing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogListingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__("./src/app/components/blog/_services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlogListingComponent = /** @class */ (function () {
    function BlogListingComponent() {
    }
    BlogListingComponent.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1__services__["a" /* butterService */].post.list({
            page: 1,
            page_size: 10
        }).then(function (res) {
            _this.posts = res.data.data;
        });
    };
    BlogListingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-blog-listing',
            template: __webpack_require__("./src/app/components/blog/blog-post/blog-listing/blog-listing.component.html"),
            styles: [__webpack_require__("./src/app/components/blog/blog-post/blog-listing/blog-listing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogListingComponent);
    return BlogListingComponent;
}());



/***/ }),

/***/ "./src/app/components/blog/blog-post/blog-sidenav/blog-sidenav.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/blog/blog-post/blog-sidenav/blog-sidenav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-4\">\n  <div class=\"sidenav\">\n    <a include=recent_posts></a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/blog/blog-post/blog-sidenav/blog-sidenav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogSidenavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogSidenavComponent = /** @class */ (function () {
    function BlogSidenavComponent() {
    }
    BlogSidenavComponent.prototype.ngOnInit = function () {
    };
    BlogSidenavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-blog-sidenav',
            template: __webpack_require__("./src/app/components/blog/blog-post/blog-sidenav/blog-sidenav.component.html"),
            styles: [__webpack_require__("./src/app/components/blog/blog-post/blog-sidenav/blog-sidenav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogSidenavComponent);
    return BlogSidenavComponent;
}());



/***/ }),

/***/ "./src/app/components/blog/blog.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/blog/blog.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"blog-page\">\n  <div class=\"container\">\n    <div class=\"wrapper\">\n      <header class=\"header\">\n        <div class=\"header-wrapper\">\n          <div class=\"row row-holder blog\">\n            <div class=\"col-9 col-holder p-info-holder\">\n              <div class=\"icon-holder\">\n                <i class=\"fa fa-folder-open-o fa-4x\" aria-hidden=\"true\"></i>\n              </div>\n              <div class=\"label-holder\">\n                <div class=\"inner-holder\">\n                  <h1 class=\"page-title uppercase\">Blog</h1>\n                  <h2 class=\"page-s-title uppercase\">I write here my thoughts</h2>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-3 col-holder close-holder\">\n              <a class=\"btn btn-close\" routerLink=\"/\"><span></span></a>\n            </div>\n          </div>\n        </div>\n      </header>\n      <app-blog-listing></app-blog-listing>\n    </div>\n  </div>\n</main>\n"

/***/ }),

/***/ "./src/app/components/blog/blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogComponent = /** @class */ (function () {
    function BlogComponent() {
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    BlogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__("./src/app/components/blog/blog.component.html"),
            styles: [__webpack_require__("./src/app/components/blog/blog.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/components/blog/disqus/disqus.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/blog/disqus/disqus.component.html":
/***/ (function(module, exports) {

module.exports = "<disqus [identifier]=\"'freyes'\"></disqus>\n<!-- <div id=\"disqus_thread\"></div> -->\n"

/***/ }),

/***/ "./src/app/components/blog/disqus/disqus.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DisqusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DisqusComponent = /** @class */ (function () {
    function DisqusComponent() {
        this.pageId = 'freyes';
    }
    DisqusComponent.prototype.ngOnInit = function () {
    };
    DisqusComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-disqus',
            template: "<disqus [identifier]=\"pageId\"></disqus>",
            template: __webpack_require__("./src/app/components/blog/disqus/disqus.component.html"),
            styles: [__webpack_require__("./src/app/components/blog/disqus/disqus.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DisqusComponent);
    return DisqusComponent;
}());



/***/ }),

/***/ "./src/app/components/contact/contact.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"contact-page\">\n  <div class=\"container\">\n    <div class=\"wrapper\">\n      <header class=\"header\">\n        <div class=\"header-wrapper\">\n          <div class=\"row row-holder contact\">\n            <div class=\"col-9 col-holder p-info-holder\">\n              <div class=\"icon-holder\">\n                <i class=\"fa fa-folder-open-o fa-4x\" aria-hidden=\"true\"></i>\n              </div>\n              <div class=\"label-holder\">\n                <div class=\"inner-holder\">\n                  <h1 class=\"page-title uppercase\">Contact</h1>\n                  <h2 class=\"page-s-title uppercase\">Get in touch with me</h2>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-3 col-holder close-holder\">\n              <a class=\"btn btn-close\" routerLink=\"/\"><span></span></a>\n            </div>\n          </div>\n        </div>\n      </header>\n      <div class=\"section-c-form\">\n        <div class=\"section-wrapper s-padding\">\n          <div class=\"row row-holder\">\n            <div class=\"col-lg-6 col-holder contact-info\">\n              <p class=\"section-title uppercase\">Contact info</p>\n              <div class=\"c-info-holder shadow-book\">\n                <table class=\"info-holder\">\n                  <tr>\n                    <td>Name:</td>\n                    <td>Frey Reyes</td>\n                  </tr>\n                  <tr>\n                    <td>Date of birth:</td>\n                    <td>October 27, 199-</td>\n                  </tr>\n                  <tr>\n                    <td>E-mail:</td>\n                    <td><a href=\"mailto:richardfrey.reyes@gmail.com\">richardfrey.reyes@gmail.com</a></td>\n                  </tr>\n                  <tr>\n                    <td>Address:</td>\n                    <td>Philippines</td>\n                  </tr>\n                  <tr>\n                    <td>Phone #:</td>\n                    <td><a href=\"tel:09568555790\">+63956 8555 790</a></td>\n                  </tr>\n                  <tr>\n                    <td>Website:</td>\n                    <td><a href=\"https://richardfreyes.github.io\" target=\"_blank\">richardfreyes.github.io</a></td>\n                  </tr>\n                </table>\n                <ul class=\"social\">\n                  <li class=\"linkedin\"><a href=\"https://linkedin.com/in/richard-frey-reyes-1a92b6117\" target=\"_blank\"><i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i></a></li>\n                  <li class=\"facebook\"><a href=\"https://www.facebook.com/richardfrey.reyes.5\" target=\"_blank\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a></li>\n                  <li class=\"instagram\"><a href=\"https://www.instagram.com/iifreyes/\" target=\"_blank\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i></a></li>\n                  <li class=\"twitter\"><a href=\"https://twitter.com/d102791estiny\" target=\"_blank\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a></li>\n                  <li class=\"skype\"><a href=\"https://api.whatsapp.com/send?phone=09568555790\" target=\"_blank\"><i class=\"fa fa-whatsapp\" aria-hidden=\"true\"></i></a></li>\n                </ul>\n              </div>\n            </div>\n            <div class=\"col-lg-6 col-holder contact-form\">\n              <p class=\"section-title uppercase\">Contact form</p>\n              <div class=\"form-holder shadow-book\">\n                <form [formGroup]=\"form\">\n                  <!-- <input formControlName=\"firstName\" [(ngModel)]=\"firstName\"> -->\n                  <input class=\"email\" type=\"email\" formControlName=\"email\" ngModel name=\"email\" [(ngModel)]=\"email\" value=\"{{ email }}\" placeholder=\"Your Email*\">\n                  <div class=\"alert\" *ngIf=\"!form.controls['email'].valid && (form.controls['email'].touched)\">\n                    <div [hidden]=\"!form.controls['email'].errors.required\">\n                      Email is required.\n                    </div>\n                    <div [hidden]=\"!form.controls['email'].errors.email\">\n                      Its not a valid email (Ex. frey@gmail.com)\n                    </div>\n                  </div>\n                  <input class=\"name\" type=\"text\" formControlName=\"name\" ngModel name=\"name\" [(ngModel)]=\"name\" value=\"{{ name }}\" placeholder=\"Full Name*\">                  \n                  <div class=\"alert\" *ngIf=\"!form.controls['name'].valid && (form.controls['name'].touched)\">\n                    <div [hidden]=\"!form.controls['name'].errors.required\">\n                      Full Name is required.\n                    </div>\n                  </div>\n                  <textarea class=\"message\" type=\"text\" formControlName=\"message\" ngModel name=\"message\" [(ngModel)]=\"message\" value=\"{{ message }}\" placeholder=\"Message*\"></textarea>\n                  <div class=\"alert\" *ngIf=\"!form.controls['message'].valid && (form.controls['message'].touched)\">\n                    <div [hidden]=\"!form.controls['message'].errors.required\">\n                      Message is required.\n                    </div>\n                  </div>\n                  <input class=\"btn-send\" type=\"submit\" value=\"Send\" [disabled]=\"!form.valid\" (click)=\"sendMail()\">\n                  <div class=\"alert\" *ngIf=\"successMsg\">\n                    <div>\n                      <p class=\"success-msg\">Your Message has been sent!</p>\n                    </div>\n                  </div>\n                  <div class=\"alert\" *ngIf=\"failMsg\">\n                    <div>\n                      <p class=\"fail-msg\">Message Failed</p>\n                    </div>\n                  </div>\n                </form>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"section-map\">\n        <div class=\"section-wrapper s-padding\">\n          <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61619.49162400498!2d120.52444448491856!3d15.146355401543211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f286eed2e61f%3A0x3ded82248ad9b436!2sAngeles%2C+Pampanga!5e0!3m2!1sen!2sph!4v1520347968982\" height=\"500\" frameborder=\"0\" style=\"border: 0; width: 100%;\" allowfullscreen></iframe>\n        </div>\n      </div>\n    </div>\n  </div>\n</main>\n"

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactComponent = /** @class */ (function () {
    function ContactComponent(http, fb) {
        this.http = http;
        this.fb = fb;
        this.form = this.fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].email])],
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required],
            message: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required]
        });
    }
    ContactComponent.prototype.ngOnInit = function () { };
    ContactComponent.prototype.sendMail = function (value) {
        var _this = this;
        var data = {
            to: 'd102791estiny@gmail.com',
            subject: this.name,
            txt: 'Email:' + this.email +
                'Name:' + this.name +
                'Message:' + this.message
        };
        return this.http.post('http://localhost:3000/api/mail/contact', data, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('Content-Type', 'application/json'),
            responseType: 'text' }).subscribe(function (data) {
            window.setTimeout(function () {
                _this.successMsg = true;
                console.log('Your Message has been sent!');
                _this.form.reset();
            }, 2000);
        }, function (error) {
            window.setTimeout(function () {
                _this.failMsg = true;
                console.log('Failed!');
                _this.form.reset();
            }, 2000);
        });
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__("./src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__("./src/app/components/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  <div class=\"container\">\n    <div class=\"footer-wrapper s-padding\">\n      <div class=\"row row-holder\">\n        <div class=\"col-12 col-xl-3 col-holder\">\n          <div class=\"f-social\">\n            <a href=\"tel:09568555790\">\n              <div class=\"icon-holder\">\n                <i class=\"fa fa-phone\" aria-hidden=\"true\"></i>\n              </div>\n              <span class=\"text\">+63956 8555 790</span>\n            </a>\n          </div>\n        </div>\n        <div class=\"col-12 col-xl-3 col-holder\">\n          <div class=\"f-social\">\n            <a href=\"mailto:richardfrey.reyes@gmail.com\">\n              <div class=\"icon-holder\">\n                <i class=\"fa fa-paper-plane\" aria-hidden=\"true\"></i>\n              </div>\n              <span class=\"text\">richardfrey.reyes@gmail.com</span>\n            </a>\n          </div>\n        </div>\n        <div class=\"col-12 col-xl-3 col-holder\">\n          <!-- <div class=\"f-social\">\n            <a href=\"#\">\n              <div class=\"icon-holder\">\n                <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>\n              </div>\n              <span class=\"text\">Angeles City Pampanga</span>\n            </a>\n          </div> -->\n          <p class=\"credits\">Blog Engine Powered by - <a href=\"https://buttercms.com/\" target=\"_blank\"><img src=\"assets/images/footer/logo-buttercms.svg\" alt=\"butterCMS\"></a></p>\n        </div>\n        <div class=\"col-12 col-xl-3 col-holder\">\n          <p class=\"copyright\">Copyright © 2018 Frey Reyes - Web Developer.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n  <div class=\"header-wrapper\">\n    <div class=\"row row-holder profile\">\n      <div class=\"col-6 col-holder p-info-holder\">\n        <div class=\"icon-holder\">\n          <i class=\"fa fa-user-circle-o fa-4x\" aria-hidden=\"true\"></i>\n        </div>\n        <div class=\"label-holder\">\n          <div class=\"inner-holder\">\n            <h1 class=\"page-title uppercase\">Profile</h1>\n            <h2 class=\"page-s-title uppercase\">A Brief About Me</h2>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-6 col-holder close-holder\">\n        <a class=\"btn btn-close\" href=\"index.php\"><span></span></a>\n      </div>\n    </div>\n\n    <div class=\"row row-holder resume\">\n      <div class=\"col-6 col-holder p-info-holder\">\n        <div class=\"icon-holder\">\n          <i class=\"fa fa-folder-open-o fa-4x\" aria-hidden=\"true\"></i>\n        </div>\n        <div class=\"label-holder\">\n          <div class=\"inner-holder\">\n            <h1 class=\"page-title uppercase\">Resume</h1>\n            <h2 class=\"page-s-title uppercase\">My Academic Qualifications</h2>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-6 col-holder close-holder\">\n        <a class=\"btn btn-close\" href=\"index.php\"><span></span></a>\n      </div>\n    </div>\n\n    <div class=\"row row-holder portfolio\">\n      <div class=\"col-6 col-holder p-info-holder\">\n        <div class=\"icon-holder\">\n          <i class=\"fa fa-envelope-o fa-4x\" aria-hidden=\"true\"></i>\n        </div>\n        <div class=\"label-holder\">\n          <div class=\"inner-holder\">\n            <h1 class=\"page-title uppercase\">Portfolio</h1>\n            <h2 class=\"page-s-title uppercase\">Some of My Works</h2>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-6 col-holder close-holder\">\n        <a class=\"btn btn-close\" href=\"index.php\"><span></span></a>\n      </div>\n    </div>\n\n    <div class=\"row row-holder blog\">\n      <div class=\"col-6 col-holder p-info-holder\">\n        <div class=\"icon-holder\">\n          <i class=\"fa fa-folder-open-o fa-4x\" aria-hidden=\"true\"></i>\n        </div>\n        <div class=\"label-holder\">\n          <div class=\"inner-holder\">\n            <h1 class=\"page-title uppercase\">Blog</h1>\n            <h2 class=\"page-s-title uppercase\">I write here my thoughts</h2>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-6 col-holder close-holder\">\n        <a class=\"btn btn-close\" href=\"index.php\"><span></span></a>\n      </div>\n    </div>\n\n    <div class=\"row row-holder contact\">\n      <div class=\"col-6 col-holder p-info-holder\">\n        <div class=\"icon-holder\">\n          <i class=\"fa fa-folder-open-o fa-4x\" aria-hidden=\"true\"></i>\n        </div>\n        <div class=\"label-holder\">\n          <div class=\"inner-holder\">\n            <h1 class=\"page-title uppercase\">Contact</h1>\n            <h2 class=\"page-s-title uppercase\">Get in touch with me</h2>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-6 col-holder close-holder\">\n        <a class=\"btn btn-close\" href=\"index.php\"><span></span></a>\n      </div>\n    </div>\n  </div>\n</header>\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/components/header/header.component.html"),
            styles: [__webpack_require__("./src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"landing-page\">\n  <div class=\"container container-holder\">\n    <div class=\"wrapper\">\n      <div class=\"section-hero\">\n        <div class=\"section-wrapper\">\n          <div class=\"freyes\">\n            <div class=\"img-holder\">\n              <img src=\"assets/images/home/freyes.jpg\" alt=\"\">\n            </div>\n            <div class=\"info-holder\">\n              <div class=\"inner-holder\">\n                <h1 class=\"name uppercase\">Frey Reyes</h1>\n                <h2 class=\"j-position uppercase\">Website Developer</h2>\n                <ul class=\"social\">\n                  <li class=\"linkedin\"><a href=\"https://linkedin.com/in/richard-frey-reyes-1a92b6117\" target=\"_blank\"><i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i></a></li>\n                  <li class=\"facebook\"><a href=\"https://www.facebook.com/richardfrey.reyes.5\" target=\"_blank\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a></li>\n                  <li class=\"instagram\"><a href=\"https://www.instagram.com/iifreyes/\" target=\"_blank\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i></a></li>\n                  <li class=\"twitter\"><a href=\"https://twitter.com/d102791estiny\" target=\"_blank\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a></li>\n                  <li class=\"skype\"><a href=\"https://api.whatsapp.com/send?phone=09568555790\" target=\"_blank\"><i class=\"fa fa-whatsapp\" aria-hidden=\"true\"></i></a></li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"section-menu\">\n        <div class=\"section-wrapper\">\n          <div class=\"c-row row-holder\">\n            <div class=\"c-col col-holder\">\n              <a routerLink=\"profile\">\n                <div class=\"icon-holder hovicon effect\">\n                  <i class=\"fa fa-user-circle-o fa-4x\" aria-hidden=\"true\"></i>\n                </div>\n                <p class=\"menu-name uppercase\">Profile</p>\n              </a>\n            </div>\n            <div class=\"c-col col-holder\">\n              <a routerLink=\"resume\">\n                <div class=\"icon-holder hovicon effect\">\n                  <i class=\"fa fa-folder-open-o fa-4x\" aria-hidden=\"true\"></i>\n                </div>\n                <p class=\"menu-name uppercase\">Resume</p>\n              </a>\n            </div>\n            <div class=\"c-col col-holder\">\n              <a routerLink=\"portfolio\">\n                <div class=\"icon-holder hovicon effect\">\n                  <i class=\"fa fa-envelope-o fa-4x\" aria-hidden=\"true\"></i>\n                </div>\n                <p class=\"menu-name uppercase\">Portfolio</p>\n              </a>\n            </div>\n            <div class=\"c-col col-holder\">\n              <a routerLink=\"blog\">\n                <div class=\"icon-holder hovicon effect\">\n                  <i class=\"fa fa-file-text-o fa-4x\" aria-hidden=\"true\"></i>\n                </div>\n                <p class=\"menu-name uppercase\">Blog</p>\n              </a>\n            </div>\n            <div class=\"c-col col-holder\">\n              <a routerLink=\"/contact\">\n                <div class=\"icon-holder hovicon effect\">\n                  <i class=\"fa fa-address-card-o fa-4x\" aria-hidden=\"true\"></i>\n                </div>\n                <p class=\"menu-name uppercase\">Contact</p>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</main>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationEnd */])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* Router */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/portfolio/portfolio.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/portfolio/portfolio.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"portfolio-page\">\n  <div class=\"container\">\n    <div class=\"wrapper\">\n      <header class=\"header\">\n        <div class=\"header-wrapper\">\n          <div class=\"row row-holder portfolio\">\n            <div class=\"col-9 col-holder p-info-holder\">\n              <div class=\"icon-holder\">\n                <i class=\"fa fa-envelope-o fa-4x\" aria-hidden=\"true\"></i>\n              </div>\n              <div class=\"label-holder\">\n                <div class=\"inner-holder\">\n                  <h1 class=\"page-title uppercase\">Portfolio</h1>\n                  <h2 class=\"page-s-title uppercase\">Some of My Works</h2>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-3 col-holder close-holder\">\n              <a class=\"btn btn-close\" routerLink=\"/\"><span></span></a>\n            </div>\n          </div>\n        </div>\n      </header>\n      <div class=\"section-works\">\n        <div class=\"section-wrapper s-padding\">\n          <div class=\"text-heading text-center\">\n            <h1 class=\"section-title uppercase\">I'm a dedicated website developer</h1>\n            <h2 class=\"desc\">Below you'll find a selection of some of my personal projects.</h2>\n          </div>\n          <div class=\"work-sample goo-coffee-1\">\n            <div class=\"row row-holder\">\n              <div class=\"col-12 col-lg-5 col-holder desc\">\n                <div class=\"desc-holder\">\n                  <p class=\"featured-title uppercase\">FReyes</p>\n                  <p class=\"featured-desc\">WEB APP DEVELOPMENT</p>\n                  <p class=\"featured-text\">Angular5, Bootstrap 4, SASS, Firebase, Nodemailer</p>\n                  <a href=\"#\" class=\"btn featured-btn\">Preview</a>\n                  <a href=\"#\" class=\"btn featured-btn\">Details</a>\n                </div>\n              </div>\n              <div class=\"col-12 col-lg-7 col-holder img\">\n                <div class=\"img-holder\">\n                  <img class=\"img-fluid\" src=\"assets/images/portfolio/project-sample.png\" alt=\"Project Image\">\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"work-sample goo-coffee-2\">\n            <div class=\"row row-holder\">\n              <div class=\"col-lg-5 col-holder desc\">\n                <div class=\"desc-holder\">\n                  <p class=\"featured-title uppercase\">FReyes</p>\n                  <p class=\"featured-desc\">WEB APP DEVELOPMENT</p>\n                  <p class=\"featured-text\">Angular5, Bootstrap 4, SASS, Firebase, Nodemailer</p>\n                  <a href=\"#\" class=\"btn featured-btn\">Preview</a>\n                  <a href=\"#\" class=\"btn featured-btn\">Details</a>\n                </div>\n              </div>\n              <div class=\"col-lg-7 col-holder img\">\n                <div class=\"img-holder\">\n                  <img class=\"img-fluid\" src=\"assets/images/portfolio/project-sample.png\" alt=\"Project Image\">\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"work-sample goo-coffee-3\">\n            <div class=\"row row-holder\">\n              <div class=\"col-lg-5 col-holder desc\">\n                <div class=\"desc-holder\">\n                  <p class=\"featured-title uppercase\">FReyes</p>\n                  <p class=\"featured-desc\">WEB APP DEVELOPMENT</p>\n                  <p class=\"featured-text\">Angular5, Bootstrap 4, SASS, Firebase, Nodemailer</p>\n                  <a href=\"#\" class=\"btn featured-btn\">Preview</a>\n                  <a href=\"#\" class=\"btn featured-btn\">Details</a>\n                </div>\n              </div>\n              <div class=\"col-lg-7 col-holder img\">\n                <div class=\"img-holder\">\n                  <img class=\"img-fluid\" src=\"assets/images/portfolio/project-sample.png\" alt=\"Project Image\">\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</main>\n"

/***/ }),

/***/ "./src/app/components/portfolio/portfolio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent() {
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    PortfolioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__("./src/app/components/portfolio/portfolio.component.html"),
            styles: [__webpack_require__("./src/app/components/portfolio/portfolio.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"profile-page\">\n  <div class=\"container\">\n    <div class=\"wrapper\">\n      <header class=\"header\">\n        <div class=\"header-wrapper\">\n          <div class=\"row row-holder profile\">\n            <div class=\"col-9 col-holder p-info-holder\">\n              <div class=\"icon-holder\">\n                <i class=\"fa fa-user-circle-o fa-4x\" aria-hidden=\"true\"></i>\n              </div>\n              <div class=\"label-holder\">\n                <div class=\"inner-holder\">\n                  <h1 class=\"page-title uppercase\">Profile</h1>\n                  <h2 class=\"page-s-title uppercase\">A Brief About Me</h2>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-3 col-holder close-holder\">\n              <a class=\"btn btn-close\" routerLink=\"/\"><span></span></a>\n            </div>\n          </div>\n        </div>\n      </header>\n      <div class=\"section-about\">\n        <div class=\"section-wrapper s-padding\">\n          <div class=\"row row-holder\">\n            <div class=\"col-12 col-xl-7 col-holder left\">\n              <div class=\"text-holder\">\n                <p class=\"section-title uppercase\">hello, i am a Web Developer</p>\n                <div class=\"desc shadow-book\">\n                  <p class=\"desc\">I hold a degree of BS in Computer Science and 2yrs Computer Programming from St. Nicolas College of Bussiness and Technology SFP Philippines. Web development is my profession. I am highly skilled with Front-End Development. I have over 1 year of experience with this development, and I am eager to learn even more technologies to sharpen my skillset. In addition to web technologies, I do have interested for mobile application development as well.</p>                  \n                  <p class=\"desc\">Getting myself into web technologies has opened a lot of opportunities in my life and i am exciited where it would take me. My dream is one day is to become a professional developer/programmer.</p>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-12 col-xl-5 col-holder right\">\n              <table class=\"info-holder shadow-book\">\n                <tr>\n                  <td>Name:</td>\n                  <td>Frey Reyes</td>\n                </tr>\n                <tr>\n                  <td>Date of birth:</td>\n                  <td>October 27, 199-</td>\n                </tr>\n                <tr>\n                  <td>E-mail:</td>\n                  <td><a href=\"mailto:richardfrey.reyes@gmail.com\">richardfrey.reyes@gmail.com</a></td>\n                </tr>\n                <tr>\n                  <td>Address:</td>\n                  <td>Philippines</td>\n                </tr>\n                <tr>\n                  <td>Phone #:</td>\n                  <td><a href=\"tel:09568555790\">+63956 8555 790</a></td>\n                </tr>\n                <tr>\n                  <td>Website:</td>\n                  <td><a href=\"https://richardfreyes.github.io\" target=\"_blank\">richardfreyes.github.io</a></td>\n                </tr>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"section-ump\">\n        <div class=\"section-wrapper s-padding\">\n          <div class=\"content-holder\">\n            <p class=\"section-title uppercase\">understanding my passion</p>\n            <p class=\"desc\">There's something to be said about working with passionate that truly love what they do. I'm no different. I honestly enjoy coming to work everyday to explore something new, to expand my knowledge and to enhance my skillset.</p>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"section-instagram\">\n        <div class=\"section-wrapper s-padding\">\n          <div class=\"content-holder\">\n            <div class=\"hide-element\"></div>   \n            <div class=\"elfsight-app-8a573dd9-052e-41a0-9480-49d0d1b7310b\" async></div>\n            <!-- <div class='sk-instagram-feed' data-embed-id='9222'></div> -->\n          </div>\n        </div>\n      </div>\n\n      <div class=\"section-hobbies\">\n        <div class=\"section-wrapper s-padding\">\n          <p class=\"section-title uppercase\">Hobbies & Interest</p>\n          <div class=\"row row-holder featured-orbs\">\n            <div class=\"col col-lg-2 col-holder\">\n              <div class=\"icon-holder\">\n                <i class=\"fa fa-globe fa-3x\" aria-hidden=\"true\"></i>\n              </div>\n              <p class=\"label uppercase\">Web Technologies</p>\n            </div>\n            <div class=\"col col-lg-2 col-holder\">\n              <div class=\"icon-holder\">\n                <i class=\"fa fa-mobile fa-3x\" aria-hidden=\"true\"></i>\n              </div>\n              <p class=\"label uppercase\">Gadgets</p>\n            </div>\n            <div class=\"col col-lg-2 col-holder\">\n              <div class=\"icon-holder\">\n                <i class=\"fa fa-gamepad fa-3x\" aria-hidden=\"true\"></i>\n              </div>\n              <p class=\"label uppercase\">Online Games</p>\n            </div>\n            <div class=\"col col-lg-2 col-holder\">\n              <div class=\"icon-holder\">\n                <i class=\"fa fa-motorcycle fa-3x\" aria-hidden=\"true\"></i>\n              </div>\n              <p class=\"label uppercase\">Motorcycles</p>\n            </div>\n            <div class=\"col col-lg-2 col-holder\">\n              <div class=\"icon-holder\">\n                <i class=\"fa fa-car fa-3x\" aria-hidden=\"true\"></i>\n              </div>\n              <p class=\"label uppercase\">Cars</p>\n            </div>\n            <div class=\"col col-lg-2 col-holder\">\n              <div class=\"icon-holder\">\n                <i class=\"fa fa-circle fa-3x\" aria-hidden=\"true\"></i>\n              </div>\n              <p class=\"label uppercase\">Basketball</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</main>\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
        function load_js() {
            var head = document.getElementsByTagName('head')[0];
            var script = document.createElement('script');
            script.src = 'https://apps.elfsight.com/p/platform.js';
            head.appendChild(script);
        }
        load_js();
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/resume/resume.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/resume/resume.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"resume-page\">\n  <div class=\"container\">\n    <div class=\"wrapper\">\n      <header class=\"header\">\n        <div class=\"header-wrapper\">\n          <div class=\"row row-holder resume\">\n            <div class=\"col-9 col-holder p-info-holder\">\n              <div class=\"icon-holder\">\n                <i class=\"fa fa-folder-open-o fa-4x\" aria-hidden=\"true\"></i>\n              </div>\n              <div class=\"label-holder\">\n                <div class=\"inner-holder\">\n                  <h1 class=\"page-title uppercase\">Resume</h1>\n                  <h2 class=\"page-s-title uppercase\">My Academic Qualifications</h2>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-3 col-holder close-holder\">\n              <a class=\"btn btn-close\" routerLink=\"/\"><span></span></a>\n            </div>\n          </div>\n        </div>\n      </header>\n      <div class=\"section-ew\">\n        <div class=\"section-wrapper s-padding\">\n          <div class=\"row row-holder\">\n            <div class=\"col-12 col-xl-6 col-holder\">\n              <p class=\"section-title uppercase\">Education</p>\n              <owl-carousel\n                [options]=\"{\n                  items: 1,\n                  loop: true,\n                  dots: true,\n                  navigation: true,\n                  navText: ['<i class=\\'fa fa-arrow-circle-left fa-2x\\' aria-hidden=\\'true\\'></i>','<i class=\\'fa fa-arrow-circle-right fa-2x\\' aria-hidden=\\'true\\'></i>']\n                }\"\n                [carouselClasses]=\"[\n                  'educ-holder',\n                  'owl-theme',\n                  'row',\n                  'sliding'\n                ]\">\n                <div class=\"slider-List\">\n                  <table>\n                    <tr>\n                      <td>Course:</td>\n                      <td>Bachelor of Science in Computer Science</td>\n                    </tr>\n                    <tr>\n                      <td>School&nbsp;Name:</td>\n                      <td>St. Nicolas College of Business and Technology</td>\n                    </tr>\n                    <tr>\n                      <td>School&nbsp;Address:</td>\n                      <td>MEL-VI Bldg,. Jose Abad Santos Ave,. Brgy Dolores, San Fernando, Pampanga Philippines</td>\n                    </tr>\n                    <tr>\n                      <td>Year&nbsp;Graduate:</td>\n                      <td>March 2015</td>\n                    </tr>\n                  </table>\n                </div>\n                <div class=\"slider-List\">\n                  <table>\n                    <tr>\n                      <td>Course:</td>\n                      <td>Computer Programming</td>\n                    </tr>\n                    <tr>\n                      <td>School&nbsp;Name:</td>\n                      <td>St. Nicolas College of Business and Technology</td>\n                    </tr>\n                    <tr>\n                      <td>School&nbsp;Address:</td>\n                      <td>MEL-VI Bldg,. Jose Abad Santos Ave,. Brgy Dolores, San Fernando, Pampanga Philippines</td>\n                    </tr>\n                    <tr>\n                      <td>Year&nbsp;Graduate:</td>\n                      <td>April 2012</td>\n                    </tr>\n                  </table>\n                </div>\n              </owl-carousel>\n            </div>\n            <div class=\"col-12 col-xl-6 col-holder\">\n              <p class=\"section-title uppercase\">Work</p>\n              <owl-carousel\n                [options]=\"{\n                  items: 1,\n                  loop: true,\n                  dots: true,\n                  navigation: true,\n                  navText: ['<i class=\\'fa fa-arrow-circle-left fa-2x\\' aria-hidden=\\'true\\'></i>','<i class=\\'fa fa-arrow-circle-right fa-2x\\' aria-hidden=\\'true\\'></i>']\n                }\"\n                [carouselClasses]=\"[\n                  'work-holder',\n                  'owl-theme',\n                  'row',\n                  'sliding'\n                ]\">\n                <div class=\"slider-List\">\n                  <table>\n                    <tr>\n                      <td>Position:</td>\n                      <td>Website Developer</td>\n                    </tr>\n                    <tr>\n                      <td>Company&nbsp;Name:</td>\n                      <td>Fullstack HQ, Inc. dba PSD Wizard</td>\n                    </tr>\n                    <tr>\n                      <td>Company&nbsp;Address:</td>\n                      <td>Fullstack HQ, 468-B 2F & 3F Lead Bldg, Sto. Rosario St., Angeles City, Philippines 2009.</td>\n                    </tr>\n                    <tr>\n                      <td>Period:</td>\n                      <td>May 2017 - June 2018</td>\n                    </tr>\n                  </table>\n                </div>\n                <div class=\"slider-List\">\n                  <table>\n                    <tr>\n                      <td>Position:</td>\n                      <td>IT - Specialist</td>\n                    </tr>\n                    <tr>\n                      <td>Company&nbsp;Name:</td>\n                      <td>CuroTeknika ePLDT</td>\n                    </tr>\n                    <tr>\n                      <td>Company&nbsp;Address:</td>\n                      <td>25th and 26th Floors Robinsons Cyberscape Alpha Garnet and Sapphire Streets Ortigas Center, Pasig City 1605</td>\n                    </tr>\n                    <tr>\n                      <td>Period:</td>\n                      <td>July 2015 - April 2017</td>\n                    </tr>\n                  </table>\n                </div>\n              </owl-carousel>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"section-skills\">\n        <div class=\"section-wrapper s-padding\">\n          <p class=\"section-title uppercase\">My Brain Storage</p>\n          <div class=\"orbs-holder\">\n            <div id=\"1\" class=\"orbs-icon a\">\n              <div class=\"inner-holder\">\n                <img src=\"assets/images/resume/icon-html.png\" alt=\"\">\n              </div>\n            </div>\n            <div id=\"2\" class=\"orbs-icon b\">\n              <div class=\"inner-holder\">\n                <img src=\"assets/images/resume/icon-css.png\" alt=\"\">\n              </div>\n            </div>\n            <div id=\"3\" class=\"orbs-icon c\">\n              <div class=\"inner-holder\">\n                <img src=\"assets/images/resume/icon-js.png\" alt=\"\">\n              </div>\n            </div>\n            <div id=\"4\" class=\"orbs-icon d\">\n              <div class=\"inner-holder\">\n                <img src=\"assets/images/resume/icon-jquery.png\" alt=\"\">\n              </div>\n            </div>\n            <div id=\"5\" class=\"orbs-icon e\">\n              <div class=\"inner-holder\">\n                <img src=\"assets/images/resume/icon-php.png\" alt=\"\">\n              </div>\n            </div>\n            <div id=\"6\" class=\"orbs-icon f\">\n              <div class=\"inner-holder\">\n                <img src=\"assets/images/resume/icon-mysql.png\" alt=\"\">\n              </div>\n            </div>\n            <div id=\"7\" class=\"orbs-icon g\">\n              <div class=\"inner-holder\">\n                <img src=\"assets/images/resume/icon-sass.png\" alt=\"\">\n              </div>\n            </div>\n            <div id=\"8\" class=\"orbs-icon h\">\n              <div class=\"inner-holder\">\n                <img src=\"assets/images/resume/icon-less.png\" alt=\"\">\n              </div>\n            </div>\n            <div id=\"9\" class=\"orbs-icon i\">\n              <div class=\"inner-holder\">\n                <img src=\"assets/images/resume/icon-ui-ux.png\" alt=\"\">\n              </div>\n            </div>\n            <div id=\"10\" class=\"orbs-icon j\">\n              <div class=\"inner-holder\">\n                <img src=\"assets/images/resume/icon-ps.png\" alt=\"\">\n              </div>\n            </div>\n            <div id=\"11\" class=\"orbs-icon k\">\n              <div class=\"inner-holder\">\n                <img src=\"assets/images/resume/icon-git.png\" alt=\"\">\n              </div>\n            </div>\n            <div id=\"12\" class=\"orbs-icon l\">\n              <div class=\"inner-holder\">\n                <img src=\"assets/images/resume/icon-bootstrap.png\" alt=\"\">\n              </div>\n            </div>\n            <div id=\"13\" class=\"orbs-icon m\">\n              <div class=\"inner-holder\">\n                <img src=\"assets/images/resume/icon-semantic-ui.jpg\" alt=\"\">\n              </div>\n            </div>\n            <div id=\"14\" class=\"orbs-icon n\">\n              <div class=\"inner-holder\">\n                <img src=\"assets/images/resume/icon-ebay.png\" alt=\"\">\n              </div>\n            </div>\n            <div id=\"15\" class=\"orbs-icon o\">\n              <div class=\"inner-holder\">\n                <img src=\"assets/images/resume/icon-wordpress.png\" alt=\"\">\n              </div>\n            </div>\n            <div id=\"16\" class=\"orbs-icon p\">\n              <div class=\"inner-holder\">\n                <img src=\"assets/images/resume/icon-woocommerce.png\" alt=\"\">\n              </div>\n            </div>\n            <div id=\"17\" class=\"orbs-icon q\">\n              <div class=\"inner-holder\">\n                <img src=\"assets/images/resume/icon-angularjs.png\" alt=\"\">\n              </div>\n            </div>\n            <div id=\"18\" class=\"orbs-icon r\">\n              <div class=\"inner-holder\">\n                <img src=\"assets/images/resume/icon-foundation.png\" alt=\"\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"section-qualifications\">\n        <div class=\"section-wrapper s-padding\">\n          <div class=\"row row-holder\">\n            <div class=\"col-lg-6 col-holder j-qualification\">\n              <p class=\"section-title uppercase\">My Skills Qualification</p>\n              <div class=\"content-holder\">\n                <ol type=\"1\">\n                  <li>Solid Understanding in Front-End Web Development.</li>\n                  <li>Transforming complex layout PSD's into pixel-perfect presentation-layer using HTML5/CSS3 and Javascript/jQuery for Interactive website.</li>\n                  <li>Can create custom WordPress themes from scratch or a starter theme. Extending and developing custom plugins based on what clients needs.</li>\n                  <li>Experienced optimizing websites for mobile / desktop.</li>\n                  <li>Strong understanding in Bootstrap, HMTL and its elements, DOM manipulation.</li>\n                  <li>Strong understanding of cross-browser compatibility.</li>\n                  <li>Source control Git.</li>\n                  <li>Strong understanding of server-side CSS pre-processing platforms, such as LESS and SASS.</li>\n                  <li>Strong understanding of hosting environments such as GoDaddy, BlueHost.</li>\n                  <li>Strong understanding of the web development process (design, development and deployment).</li>\n                  <li>Basic understanding of SEO principles</li>\n                  <li>Experience in API Proccess (e.g. Money Transactions) (limited)</li>\n                  <li>Knowledge in back-end programming languages (e.g. PHP, MySQL ) (limited but willing to learn more) back-end programming familiarity.</li>\n                  <li>Web App Development Angular (Entry Level in this front-end framework. Willing to learn more).</li>\n                  <li class=\"hide\">Good understanding of ReactJS/AngularJS/VueJS</li>\n                </ol>\n              </div>\n            </div>\n            <div class=\"col-lg-6 col-holder j-responsibility\">\n              <p class=\"section-title uppercase\">My Job Responsibilities</p>\n              <div class=\"content-holder\">\n                <ol type=\"1\">\n                  <li>Writing quality clean, well-organized and fully documented/maintainable code.</li>\n                  <li>Build reusable code for future use.</li>\n                  <li>Work with designers to create pixel-perfect templates and sliced images.</li>\n                  <li>Develop secure and user-friendly websites in WordPress.</li>\n                  <li>Convert complex Photoshop design to clean semantic markup with a high level of accuracy and attention to detail.</li>\n                  <li>Understand client's goals and objectives in order to develop detailed specification documents with clear project deliverables and timelines.</li>\n                  <li>Site Performance page load time and optimization.</li>\n                  <li>Responsive design (Phone and Tablet).</li>\n                  <li>Transfers/shares gained knowledge to colleagues for synchronization purposes.</li>\n                </ol>\n              </div>\n            </div>\n          </div>\n          <div class=\"strength\">\n            <p class=\"section-title uppercase\">Strength</p>\n            <ul>\n              <li>Have passion in Web Development</li>\n              <li>Continuous learner (willing to learn more)</li>\n              <li>Open to learn new ideas</li>\n              <li>Trustworthy</li>\n            </ul>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"section-doing\">\n        <div class=\"section-wrapper s-padding\">\n          <p class=\"section-title uppercase\">What i'm doing</p>\n          <div class=\"row row-holder featured-orbs\">\n            <div class=\"col col-lg-2 col-holder\">\n              <div class=\"icon-holder\">\n                <i class=\"fa fa-code fa-3x\" aria-hidden=\"true\"></i>\n              </div>\n              <p class=\"label uppercase\">PSD to HTML</p>\n            </div>\n            <div class=\"col col-lg-2 col-holder\">\n              <div class=\"icon-holder\">\n                <i class=\"fa fa-mobile fa-3x\" aria-hidden=\"true\"></i>\n              </div>\n              <p class=\"label uppercase\">mobile responsive</p>\n            </div>\n            <div class=\"col col-lg-2 col-holder\">\n              <div class=\"icon-holder\">\n                <i class=\"fa fa-wordpress fa-3x\" aria-hidden=\"true\"></i>\n              </div>\n              <p class=\"label uppercase\">wp integration</p>\n            </div>\n            <div class=\"col col-lg-2 col-holder\">\n              <div class=\"icon-holder\">\n                <i class=\"fa fa-internet-explorer fa-3x\" aria-hidden=\"true\"></i>\n              </div>\n              <p class=\"label uppercase\">UI / UX Developer</p>\n            </div>\n            <div class=\"col col-lg-2 col-holder\">\n              <div class=\"icon-holder\">\n                <i class=\"fa fa-cogs fa-3x\" aria-hidden=\"true\"></i>\n              </div>\n              <p class=\"label uppercase\">SECURITY, HOSTING & DOMAIN SUPPORT</p>\n            </div>\n            <div class=\"col col-lg-2 col-holder\">\n              <div class=\"icon-holder\">\n                <i class=\"fa fa-wrench fa-3x\" aria-hidden=\"true\"></i>\n              </div>\n              <p class=\"label uppercase\">WEBSITE MAINTENANCE</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</main>\n"

/***/ }),

/***/ "./src/app/components/resume/resume.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResumeComponent = /** @class */ (function () {
    function ResumeComponent() {
    }
    ResumeComponent.prototype.ngOnInit = function () {
    };
    ResumeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-resume',
            template: __webpack_require__("./src/app/components/resume/resume.component.html"),
            styles: [__webpack_require__("./src/app/components/resume/resume.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ResumeComponent);
    return ResumeComponent;
}());



/***/ }),

/***/ "./src/app/send-email/send-email.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/send-email/send-email.component.html":
/***/ (function(module, exports) {

module.exports = "<form action=\"\">\n  <!-- <input type=\"text\" placeholder=\"subject\">\n  <input type=\"email\" placeholder=\"email\">\n  <textarea placeholder=\"message\" name=\"\" id=\"\" cols=\"30\" rows=\"10\"></textarea> -->\n  <button (click)=\"sendEmail()\">Send Email</button>\n</form>"

/***/ }),

/***/ "./src/app/send-email/send-email.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendEmailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SendEmailComponent = /** @class */ (function () {
    function SendEmailComponent(http) {
        this.http = http;
        this.endpoint = 'https://us-central1-dev-richardfreyes.cloudfunctions.net/httpEmail';
    }
    SendEmailComponent.prototype.sendEmail = function () {
        var data = {
            toEmail: 'dev.richardfreyes@gmail.com',
            toName: 'Jeff Delaney'
        };
        this.http.post(this.endpoint, data).subscribe();
    };
    SendEmailComponent.prototype.ngOnInit = function () {
    };
    SendEmailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-send-email',
            template: __webpack_require__("./src/app/send-email/send-email.component.html"),
            styles: [__webpack_require__("./src/app/send-email/send-email.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], SendEmailComponent);
    return SendEmailComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyBqeo2S8sw1GupJRX17eDBiDMDexHy9Dvk",
        authDomain: "dev-richardfreyes-805dc.firebaseapp.com",
        databaseURL: "https://dev-richardfreyes-805dc.firebaseio.com",
        projectId: "dev-richardfreyes-805dc",
        storageBucket: "dev-richardfreyes-805dc.appspot.com",
        messagingSenderId: "947170207864"
    }
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map