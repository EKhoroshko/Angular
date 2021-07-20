(self["webpackChunkhero"] = self["webpackChunkhero"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 7528);
/* harmony import */ var _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hero-detail/hero-detail.component */ 4598);
/* harmony import */ var _hero_reg_hero_reg_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hero-reg/hero-reg.component */ 2431);
/* harmony import */ var _hero_base_hero_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hero-base/hero-base.component */ 3297);
/* harmony import */ var _hero_login_hero_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hero-login/hero-login.component */ 1598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);








const routes = [
    { path: 'login', component: _hero_login_hero_login_component__WEBPACK_IMPORTED_MODULE_4__.HeroLoginComponent },
    { path: 'base', component: _hero_base_hero_base_component__WEBPACK_IMPORTED_MODULE_3__.HeroBaseComponent },
    { path: 'reg', component: _hero_reg_hero_reg_component__WEBPACK_IMPORTED_MODULE_2__.HeroRegComponent },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent },
    { path: '', redirectTo: '/base', pathMatch: 'full' },
    { path: 'detail/:id', component: _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_1__.HeroDetailComponent },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);


class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hero-detail/hero-detail.component */ 4598);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 7528);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _hero_reg_hero_reg_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hero-reg/hero-reg.component */ 2431);
/* harmony import */ var _hero_base_hero_base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hero-base/hero-base.component */ 3297);
/* harmony import */ var _hero_login_hero_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hero-login/hero-login.component */ 1598);
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./http.service */ 5876);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);












class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [_http_service__WEBPACK_IMPORTED_MODULE_7__.httpService], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_1__.HeroDetailComponent,
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__.DashboardComponent,
        _hero_reg_hero_reg_component__WEBPACK_IMPORTED_MODULE_4__.HeroRegComponent,
        _hero_base_hero_base_component__WEBPACK_IMPORTED_MODULE_5__.HeroBaseComponent,
        _hero_login_hero_login_component__WEBPACK_IMPORTED_MODULE_6__.HeroLoginComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule] }); })();


/***/ }),

/***/ 7528:
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../http.service */ 5876);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);






function DashboardComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/detail/", user_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", user_r1.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", user_r1.first_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", user_r1.first_name, " ", user_r1.last_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.jobs);
} }
const _c0 = function (a0) { return { invisible: a0 }; };
class DashboardComponent {
    constructor(httpService) {
        this.httpService = httpService;
        this.jobs = 'worker';
        this.users = [];
        this.visibility = true;
    }
    ngOnInit() {
        this.getUsers();
    }
    getUsers() {
        this.httpService.getUsers().subscribe((response) => {
            this.users = response.data;
        });
    }
    add() {
        this.httpService.addUser(this.useradd).subscribe(() => {
            console.log(this.useradd);
        });
    }
    toggle() {
        this.visibility = !this.visibility;
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_http_service__WEBPACK_IMPORTED_MODULE_0__.httpService)); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_http_service__WEBPACK_IMPORTED_MODULE_0__.httpService])], decls: 16, vars: 4, consts: [[1, "top"], ["routerLink", "/base", 1, "top-logout"], [1, "top-title"], [1, "top-list"], ["class", "list-item", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn-add", 3, "click"], [3, "ngClass"], [1, "top-box"], [1, "top-form"], ["type", "text", "placeholder", "Enter name", 1, "top-input"], ["type", "text", "placeholder", "job", 1, "top-input"], ["type", "submit", 1, "btn-add", 3, "click"], [1, "list-item"], [1, "top-link", 3, "routerLink"], [1, "list-image", 3, "src", "alt"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Log Out");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Card Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, DashboardComponent_li_6_Template, 7, 6, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_7_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "add new");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_14_listener() { return ctx.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.users);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, ctx.visibility));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm], styles: [".top[_ngcontent-%COMP%] {\r\n  padding: 35px 15px;\r\n  text-align: center;\r\n}\r\n\r\n.top-logout[_ngcontent-%COMP%]{\r\n  display: block;\r\n  margin-left: auto;\r\n  width: 75px;\r\n  margin-bottom: 10px;\r\n  padding: 8px;\r\n  background-color: #a7c8ee;\r\n  color: black;\r\n  border-radius: 4px;\r\n  font-weight: 700;\r\n  font-size: 16px;\r\n}\r\n\r\n.top-logout[_ngcontent-%COMP%]:focus, .top-logout[_ngcontent-%COMP%]:hover {\r\nbackground-color: #599ce7;\r\n}\r\n\r\n.top-title[_ngcontent-%COMP%] {\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.top-list[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  margin-left: -10px;\r\n}\r\n\r\n.list-item[_ngcontent-%COMP%]{\r\n  margin-right: 10px;\r\n  margin-bottom: 25px;\r\n  flex-basis: calc(100% / 3 - 10px);\r\n}\r\n\r\n.list-item[_ngcontent-%COMP%]:nth-child(3n+3){\r\n  margin-right: 0px;\r\n}\r\n\r\n.list-item[_ngcontent-%COMP%]:nth-last-child(-n +3){\r\n  margin-bottom: 0px;\r\n}\r\n\r\n.list-image[_ngcontent-%COMP%]{\r\n  display: block;\r\n  width: 100%;\r\n}\r\n\r\n.top-link[_ngcontent-%COMP%] {\r\n  color: black;\r\n  font-size: 20px;\r\n  font-weight: 500;\r\n}\r\n\r\n.invisible[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.btn-add[_ngcontent-%COMP%] {\r\n  width: 100px;\r\n  border-radius: 4px;\r\n  padding: 5px;\r\n  background-color: #a59595;\r\n  font-weight: 600;\r\n  font-size: 18px;\r\n}\r\n\r\n.btn-add[_ngcontent-%COMP%]:hover, .btn-add[_ngcontent-%COMP%]:focus {\r\n  background-color:#947272;\r\n}\r\n\r\n.top-box[_ngcontent-%COMP%] {\r\n  padding: 25px 0;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.top-form[_ngcontent-%COMP%] {\r\n  width: 450px;\r\n  padding: 35px 20px;\r\n  border-radius: 5px;\r\n  border: 1px solid black;\r\n  background-color: cadetblue;\r\n  align-items: center;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.top-input[_ngcontent-%COMP%] {\r\n  width: 400px;\r\n  margin-bottom: 10px;\r\n  text-align: center;\r\n  border-radius: 4px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7O0FBRUEseUJBQXlCO0FBQ3pCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoiZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wIHtcclxuICBwYWRkaW5nOiAzNXB4IDE1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udG9wLWxvZ291dHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICB3aWR0aDogNzVweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTdjOGVlO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi50b3AtbG9nb3V0OmZvY3VzLFxyXG4udG9wLWxvZ291dDpob3ZlciB7XHJcbmJhY2tncm91bmQtY29sb3I6ICM1OTljZTc7XHJcbn1cclxuXHJcbi50b3AtdGl0bGUge1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi50b3AtbGlzdHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbn1cclxuXHJcbi5saXN0LWl0ZW17XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgZmxleC1iYXNpczogY2FsYygxMDAlIC8gMyAtIDEwcHgpO1xyXG59XHJcblxyXG4ubGlzdC1pdGVtOm50aC1jaGlsZCgzbiszKXtcclxuICBtYXJnaW4tcmlnaHQ6IDBweDtcclxufVxyXG5cclxuLmxpc3QtaXRlbTpudGgtbGFzdC1jaGlsZCgtbiArMyl7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG4ubGlzdC1pbWFnZXtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRvcC1saW5rIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5pbnZpc2libGUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5idG4tYWRkIHtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTU5NTk1O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uYnRuLWFkZDpob3ZlcixcclxuLmJ0bi1hZGQ6Zm9jdXMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6Izk0NzI3MjtcclxufVxyXG5cclxuLnRvcC1ib3gge1xyXG4gIHBhZGRpbmc6IDI1cHggMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4udG9wLWZvcm0ge1xyXG4gIHdpZHRoOiA0NTBweDtcclxuICBwYWRkaW5nOiAzNXB4IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnRvcC1pbnB1dCB7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ 3297:
/*!**************************************************!*\
  !*** ./src/app/hero-base/hero-base.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeroBaseComponent": () => (/* binding */ HeroBaseComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 9895);


class HeroBaseComponent {
    constructor() {
        this.title = 'Welcome';
    }
    ngOnInit() { }
}
HeroBaseComponent.ɵfac = function HeroBaseComponent_Factory(t) { return new (t || HeroBaseComponent)(); };
HeroBaseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeroBaseComponent, selectors: [["app-hero-base"]], decls: 12, vars: 1, consts: [[1, "section"], [1, "section-conteiner"], [1, "section-title"], [1, "section-list"], [1, "section-item"], ["routerLink", "/login", 1, "section-link", "sign"], ["routerLink", "/reg", 1, "section-link", "sign"]], template: function HeroBaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "SignIn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Registration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: [".section[_ngcontent-%COMP%] {\r\n  padding: 20px 0;\r\n  background-color:rgb(10, 138, 138);\r\n}\r\n\r\n.section-conteiner[_ngcontent-%COMP%] {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  width: 1200px;\r\n  padding-left: 15px;\r\n  padding-right: 15px;\r\n   display: flex;\r\n  align-items: baseline;\r\n  \r\n}\r\n\r\n.section-title[_ngcontent-%COMP%] {\r\n font-weight: 700;\r\n  font-size: 36px;\r\n  line-height: 1.17;\r\n  text-align: center;\r\n}\r\n\r\n.section-list[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  margin-left: auto;\r\n}\r\n\r\n.section-item[_ngcontent-%COMP%] {\r\n  margin-right: 50px;\r\n}\r\n\r\n.section-item[_ngcontent-%COMP%]:last-child {\r\n  margin-right: 0;\r\n}\r\n\r\n.section-link[_ngcontent-%COMP%] {\r\n  width: 100px;\r\n  border-radius: 4px;\r\n  padding: 14px 10px;\r\n  background-color: #a7c8ee;\r\n  font-weight: 700;\r\n  font-size: 16px;\r\n  align-items: center;\r\n  text-align: center;\r\n  color: black;\r\n}\r\n\r\n.section-link[_ngcontent-%COMP%]:focus, .section-link[_ngcontent-%COMP%]:hover {\r\nbackground-color: #599ce7;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlcm8tYmFzZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixtQkFBbUI7R0FDbEIsYUFBYTtFQUNkLHFCQUFxQjs7QUFFdkI7O0FBRUE7Q0FDQyxnQkFBZ0I7RUFDZixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7O0FBRUEseUJBQXlCO0FBQ3pCIiwiZmlsZSI6Imhlcm8tYmFzZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24ge1xyXG4gIHBhZGRpbmc6IDIwcHggMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigxMCwgMTM4LCAxMzgpO1xyXG59XHJcblxyXG4uc2VjdGlvbi1jb250ZWluZXIge1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB3aWR0aDogMTIwMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICBcclxufVxyXG5cclxuLnNlY3Rpb24tdGl0bGUge1xyXG4gZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDM2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMTc7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc2VjdGlvbi1saXN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcblxyXG4uc2VjdGlvbi1pdGVtIHtcclxuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5zZWN0aW9uLWl0ZW06bGFzdC1jaGlsZCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwO1xyXG59XHJcblxyXG4uc2VjdGlvbi1saW5rIHtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHBhZGRpbmc6IDE0cHggMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTdjOGVlO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnNlY3Rpb24tbGluazpmb2N1cyxcclxuLnNlY3Rpb24tbGluazpob3ZlciB7XHJcbmJhY2tncm91bmQtY29sb3I6ICM1OTljZTc7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 4598:
/*!******************************************************!*\
  !*** ./src/app/hero-detail/hero-detail.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeroDetailComponent": () => (/* binding */ HeroDetailComponent)
/* harmony export */ });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../http.service */ 5876);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);






const _c0 = function (a0) { return { invisible: a0 }; };
function HeroDetailComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "User name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function HeroDetailComponent_div_0_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1.user.first_name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function HeroDetailComponent_div_0_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.user.last_name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function HeroDetailComponent_div_0_Template_input_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.user.job = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeroDetailComponent_div_0_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeroDetailComponent_div_0_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.delete(ctx_r6.user.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeroDetailComponent_div_0_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "go back");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeroDetailComponent_div_0_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Change info");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 9, ctx_r0.user.first_name + " " + ctx_r0.user.last_name), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r0.user.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", ctx_r0.user.first_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.user.first_name + " " + ctx_r0.user.last_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.user.job);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c0, ctx_r0.visibility));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.user.first_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.user.last_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.user.job);
} }
class HeroDetailComponent {
    constructor(route, httpService, location) {
        this.route = route;
        this.httpService = httpService;
        this.location = location;
        this.visibility = true;
    }
    ngOnInit() {
        this.getUser();
    }
    getUser() {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.httpService.getUser(id).subscribe((user) => {
            this.user = user.data;
        });
    }
    goBack() {
        this.location.back();
    }
    save() {
        if (this.user) {
            this.httpService.updateUser(this.userSave).subscribe(() => this.goBack());
        }
    }
    delete(id) {
        return this.httpService.deleteUser(id).subscribe();
    }
    toggle() {
        this.visibility = !this.visibility;
    }
}
HeroDetailComponent.ɵfac = function HeroDetailComponent_Factory(t) { return new (t || HeroDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_http_service__WEBPACK_IMPORTED_MODULE_0__.httpService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.Location)); };
HeroDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeroDetailComponent, selectors: [["app-hero-detail"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_http_service__WEBPACK_IMPORTED_MODULE_0__.httpService])], decls: 1, vars: 1, consts: [["class", "card", 4, "ngIf"], [1, "card"], [1, "card-title"], [1, "card-image", 3, "src", "alt"], [1, "card-paragraf"], [1, "card-wrapper", 3, "ngClass"], ["for", "name"], ["id", "name", "placeholder", "first name", 1, "card-input", 3, "ngModel", "ngModelChange"], ["id", "name", "placeholder", " last name", 1, "card-input", 3, "ngModel", "ngModelChange"], ["id", "job", "placeholder", "job", 1, "card-input", 3, "ngModel", "ngModelChange"], [1, "card-btn", "card-back", 3, "click"], [1, "card-btn", 3, "click"]], template: function HeroDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HeroDetailComponent_div_0_Template, 24, 13, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.UpperCasePipe], styles: [".card[_ngcontent-%COMP%] {\r\n  padding: 35px 15px;\r\n  text-align: center;\r\n}\r\n\r\n.card-title[_ngcontent-%COMP%] {\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.card-image[_ngcontent-%COMP%] {\r\n  width: 250px;\r\n}\r\n\r\n.card-paragraf[_ngcontent-%COMP%] {\r\n  margin-bottom: 5px;\r\n  font-size: 18px;\r\n  font-weight: 700;\r\n}\r\n\r\n.card-wrapper[_ngcontent-%COMP%] {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-bottom: 30px;\r\n  width: 450px;\r\n  padding: 35px 20px;\r\n  border-radius: 5px;\r\n  border: 1px solid black;\r\n  background-color: rgb(101, 158, 114);\r\n  align-items: center;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.card-input[_ngcontent-%COMP%] {\r\n  width: 400px;\r\n  margin-bottom: 15px;\r\n  text-align: center;\r\n  border-radius: 4px;\r\n}\r\n\r\n.card-back[_ngcontent-%COMP%] {\r\n  margin-right: 15px;\r\n}\r\n\r\n.card-btn[_ngcontent-%COMP%] {\r\n  border-radius: 4px;\r\n  padding: 5px;\r\n  background-color: #a59595;\r\n  font-weight: 600;\r\n  font-size: 18px;\r\n  cursor: pointer;\r\n}\r\n\r\n.card-btn[_ngcontent-%COMP%]:hover, .card-btn[_ngcontent-%COMP%]:focus {\r\n  background-color: #947272;\r\n  color: rgba(24, 112, 184, 0.767);\r\n}\r\n\r\n.invisible[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlcm8tZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsb0NBQW9DO0VBQ3BDLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLHlCQUF5QjtFQUN6QixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoiaGVyby1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICBwYWRkaW5nOiAzNXB4IDE1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2FyZC10aXRsZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLmNhcmQtaW1hZ2Uge1xyXG4gIHdpZHRoOiAyNTBweDtcclxufVxyXG5cclxuLmNhcmQtcGFyYWdyYWYge1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLmNhcmQtd3JhcHBlciB7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgd2lkdGg6IDQ1MHB4O1xyXG4gIHBhZGRpbmc6IDM1cHggMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMSwgMTU4LCAxMTQpO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uY2FyZC1pbnB1dCB7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLmNhcmQtYmFjayB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4uY2FyZC1idG4ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E1OTU5NTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkLWJ0bjpob3ZlcixcclxuLmNhcmQtYnRuOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTQ3MjcyO1xyXG4gIGNvbG9yOiByZ2JhKDI0LCAxMTIsIDE4NCwgMC43NjcpO1xyXG59XHJcblxyXG4uaW52aXNpYmxlIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59Il19 */"] });


/***/ }),

/***/ 1598:
/*!****************************************************!*\
  !*** ./src/app/hero-login/hero-login.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeroLoginComponent": () => (/* binding */ HeroLoginComponent)
/* harmony export */ });
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../http.service */ 5876);
/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hero */ 4358);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);






class HeroLoginComponent {
    constructor(httpService, routes) {
        this.httpService = httpService;
        this.routes = routes;
        this.user = new _hero__WEBPACK_IMPORTED_MODULE_1__.User();
    }
    submit(user) {
        this.httpService.postDataLogin(this.user).subscribe((data) => {
            this.data = data;
            this.routes.navigate(['/dashboard']);
        });
    }
    ngOnInit() { }
}
HeroLoginComponent.ɵfac = function HeroLoginComponent_Factory(t) { return new (t || HeroLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_http_service__WEBPACK_IMPORTED_MODULE_0__.httpService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
HeroLoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HeroLoginComponent, selectors: [["app-hero-login"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_http_service__WEBPACK_IMPORTED_MODULE_0__.httpService])], decls: 9, vars: 2, consts: [[1, "section"], ["routerLink", "/base", 1, "section-link"], [1, "section-box"], [1, "section-form"], ["type", "email", "name", "email", "placeholder", "Enter name", 1, "section-input", 3, "ngModel", "ngModelChange"], ["type", "password", "name", "password", "placeholder", "Enter your password", 1, "section-input", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn-log", 3, "click"]], template: function HeroLoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function HeroLoginComponent_Template_input_ngModelChange_5_listener($event) { return ctx.user.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function HeroLoginComponent_Template_input_ngModelChange_6_listener($event) { return ctx.user.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeroLoginComponent_Template_button_click_7_listener() { return ctx.submit(ctx.user); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Log in");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.user.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.user.password);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel], styles: [".section[_ngcontent-%COMP%] {\r\n  padding: 30px 0;\r\n}\r\n\r\n.section-box[_ngcontent-%COMP%] {\r\n  padding: 25px 0;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.section-link[_ngcontent-%COMP%] {\r\n  padding: 8px;\r\n  background-color: #a7c8ee;\r\n  color: black;\r\n  border-radius: 4px;\r\n  font-weight: 700;\r\n  font-size: 18px;\r\n}\r\n\r\n.section-link[_ngcontent-%COMP%]:focus, .section-link[_ngcontent-%COMP%]:hover {\r\nbackground-color: #599ce7;\r\n}\r\n\r\n.section-form[_ngcontent-%COMP%] {\r\n  width: 450px;\r\n  padding: 35px 20px;\r\n  border-radius: 5px;\r\n  border: 1px solid black;\r\n  background-color: cadetblue;\r\n  align-items: center;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.section-input[_ngcontent-%COMP%] {\r\n  width: 400px;\r\n  margin-bottom: 10px;\r\n  text-align: center;\r\n  border-radius: 4px;\r\n}\r\n\r\n.btn-log[_ngcontent-%COMP%] {\r\n  width: 100px;\r\n  border-radius: 4px;\r\n  padding: 5px;\r\n  background-color: #a59595;\r\n  font-weight: 600;\r\n  font-size: 18px;\r\n}\r\n\r\n.btn-log[_ngcontent-%COMP%]:hover, .btn-log[_ngcontent-%COMP%]:focus {\r\n  background-color:#947272;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlcm8tbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTs7QUFFQSx5QkFBeUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLHdCQUF3QjtBQUMxQiIsImZpbGUiOiJoZXJvLWxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbiB7XHJcbiAgcGFkZGluZzogMzBweCAwO1xyXG59XHJcblxyXG4uc2VjdGlvbi1ib3gge1xyXG4gIHBhZGRpbmc6IDI1cHggMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uc2VjdGlvbi1saW5rIHtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E3YzhlZTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uc2VjdGlvbi1saW5rOmZvY3VzLFxyXG4uc2VjdGlvbi1saW5rOmhvdmVyIHtcclxuYmFja2dyb3VuZC1jb2xvcjogIzU5OWNlNztcclxufVxyXG5cclxuLnNlY3Rpb24tZm9ybSB7XHJcbiAgd2lkdGg6IDQ1MHB4O1xyXG4gIHBhZGRpbmc6IDM1cHggMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uc2VjdGlvbi1pbnB1dCB7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLmJ0bi1sb2cge1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNhNTk1OTU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5idG4tbG9nOmhvdmVyLFxyXG4uYnRuLWxvZzpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojOTQ3MjcyO1xyXG59Il19 */"] });


/***/ }),

/***/ 2431:
/*!************************************************!*\
  !*** ./src/app/hero-reg/hero-reg.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeroRegComponent": () => (/* binding */ HeroRegComponent)
/* harmony export */ });
/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../hero */ 4358);
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http.service */ 5876);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);






class HeroRegComponent {
    constructor(httpService, routes) {
        this.httpService = httpService;
        this.routes = routes;
        this.user = new _hero__WEBPACK_IMPORTED_MODULE_0__.User();
    }
    submit(user) {
        this.httpService.postDataReg(this.user).subscribe((data) => {
            this.data = data;
            this.routes.navigate(['/base']);
        });
    }
    ngOnInit() { }
}
HeroRegComponent.ɵfac = function HeroRegComponent_Factory(t) { return new (t || HeroRegComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_http_service__WEBPACK_IMPORTED_MODULE_1__.httpService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
HeroRegComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HeroRegComponent, selectors: [["app-hero-reg"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_http_service__WEBPACK_IMPORTED_MODULE_1__.httpService])], decls: 9, vars: 2, consts: [[1, "section"], ["routerLink", "/base", 1, "section-link"], [1, "section-box"], [1, "section-form"], ["type", "email", "name", "email", "placeholder", "Enter name", 1, "section-input", 3, "ngModel", "ngModelChange"], ["type", "password", "name", "password", "placeholder", "Enter your password", 1, "section-input", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn-reg", 3, "click"]], template: function HeroRegComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function HeroRegComponent_Template_input_ngModelChange_5_listener($event) { return ctx.user.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function HeroRegComponent_Template_input_ngModelChange_6_listener($event) { return ctx.user.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeroRegComponent_Template_button_click_7_listener() { return ctx.submit(ctx.user); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.user.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.user.password);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel], styles: [".section[_ngcontent-%COMP%] {\r\n  padding: 30px 0;\r\n}\r\n\r\n.section-box[_ngcontent-%COMP%] {\r\n  padding: 25px 0;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.section-link[_ngcontent-%COMP%] {\r\n  padding: 8px;\r\n  background-color: #a7c8ee;\r\n  color: black;\r\n  border-radius: 4px;\r\n  font-weight: 700;\r\n  font-size: 18px;\r\n}\r\n\r\n.section-link[_ngcontent-%COMP%]:focus, .section-link[_ngcontent-%COMP%]:hover {\r\nbackground-color: #599ce7;\r\n}\r\n\r\n.section-form[_ngcontent-%COMP%] {\r\n  width: 450px;\r\n  padding: 35px 20px;\r\n  border-radius: 5px;\r\n  border: 1px solid black;\r\n  background-color: cadetblue;\r\n  align-items: center;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.section-input[_ngcontent-%COMP%] {\r\n  width: 400px;\r\n  margin-bottom: 10px;\r\n  text-align: center;\r\n  border-radius: 4px;\r\n}\r\n\r\n.btn-reg[_ngcontent-%COMP%] {\r\n  border-radius: 4px;\r\n  padding: 5px;\r\n  background-color: #a59595;\r\n  font-weight: 600;\r\n  font-size: 18px;\r\n}\r\n\r\n.btn-reg[_ngcontent-%COMP%]:hover, .btn-reg[_ngcontent-%COMP%]:focus {\r\n  background-color:#947272;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlcm8tcmVnLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7O0FBRUEseUJBQXlCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLHdCQUF3QjtBQUMxQiIsImZpbGUiOiJoZXJvLXJlZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb24ge1xyXG4gIHBhZGRpbmc6IDMwcHggMDtcclxufVxyXG5cclxuLnNlY3Rpb24tYm94IHtcclxuICBwYWRkaW5nOiAyNXB4IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnNlY3Rpb24tbGluayB7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNhN2M4ZWU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLnNlY3Rpb24tbGluazpmb2N1cyxcclxuLnNlY3Rpb24tbGluazpob3ZlciB7XHJcbmJhY2tncm91bmQtY29sb3I6ICM1OTljZTc7XHJcbn1cclxuXHJcbi5zZWN0aW9uLWZvcm0ge1xyXG4gIHdpZHRoOiA0NTBweDtcclxuICBwYWRkaW5nOiAzNXB4IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnNlY3Rpb24taW5wdXQge1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi5idG4tcmVnIHtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNhNTk1OTU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcbi5idG4tcmVnOmhvdmVyLFxyXG4uYnRuLXJlZzpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojOTQ3MjcyO1xyXG59Il19 */"] });


/***/ }),

/***/ 4358:
/*!*************************!*\
  !*** ./src/app/hero.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": () => (/* binding */ User),
/* harmony export */   "RedackUser": () => (/* binding */ RedackUser)
/* harmony export */ });
class User {
    constructor(email = '', password = '') {
        this.email = email;
        this.password = password;
    }
}
class RedackUser {
    constructor(name) {
        this.name = name;
    }
}


/***/ }),

/***/ 5876:
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "httpService": () => (/* binding */ httpService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 1841);


class httpService {
    constructor(http) {
        this.http = http;
        this.postUrl = 'https://reqres.in/';
    }
    postDataLogin(user) {
        return this.http.post(`${this.postUrl}api/login`, user);
    }
    postDataReg(user) {
        return this.http.post(`${this.postUrl}api/register`, user);
    }
    addUser(user) {
        return this.http.post(`${this.postUrl}/api/users`, user);
    }
    getUsers() {
        return this.http.get(`${this.postUrl}api/users?page=1`);
    }
    getUser(id) {
        const url = `${this.postUrl}api/users/${id}`;
        return this.http.get(url);
    }
    deleteUser(id) {
        const url = `${this.postUrl}api/users/${id}`;
        return this.http.delete(url);
    }
    updateUser(user) {
        return this.http.put(`${this.postUrl}api/users/2`, user);
    }
}
httpService.ɵfac = function httpService_Factory(t) { return new (t || httpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
httpService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: httpService, factory: httpService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map