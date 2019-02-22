(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");






var routes = [
    {
        path: '',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'Login',
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'Register',
        component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"]
    },
    {
        path: 'Home',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
    },
    { path: '*',
        redirectTo: '/' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'SCHOOLSTUFF';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");












// STILL NEED AUTHSERVICE
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            ],
            exports: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]
            ],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"],
                _services_users_service__WEBPACK_IMPORTED_MODULE_10__["UsersService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\nbody {\r\n    background-color: lightblue;\r\n      text-align: center;\r\n      margin: 100px;\r\n\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.tab-group {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0 0 40px 0;\r\n}\r\n\r\n\r\n\r\n\r\n\r\nh1 {\r\n  text-align: center;\r\n  color: #ffffff;\r\n  font-weight: 300;\r\n  margin: 0 0 40px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n#my_centered_buttons {\r\n     display: flex;\r\n      justify-content: center;\r\n    }\r\n\r\n\r\n\r\n\r\n\r\nbutton{\r\n     \r\n    position:relative;\r\n    left:40%;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.button {\r\n  float: center;\r\n\r\n  border: 0;\r\n  outline: none;\r\n  border-radius: 0;\r\n  padding: 15px 0;\r\n  font-size: 2rem;\r\n  font-weight: 600;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.1em;\r\n  background: #1ab188;\r\n  color: #ffffff;\r\n  transition: all 0.5s ease;\r\n  -webkit-appearance: none;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.button:hover, .button:focus {\r\n  background: #179b77;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.button-block {\r\n  display: block;\r\n  width: 25%;\r\n}\r\n\r\n\r\n\r\n\r\n\r\np{\r\n    float: center;\r\n  color: black;\r\n  font-size: 50px;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQTtJQUNJLDJCQUEyQjtNQUN6QixrQkFBa0I7TUFDbEIsYUFBYTs7O0FBR25COzs7Ozs7QUFNQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOzs7Ozs7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7Ozs7O0FBR0E7S0FDSyxhQUFhO01BQ1osdUJBQXVCO0lBQ3pCOzs7Ozs7QUFJSjs7SUFFSSxpQkFBaUI7SUFDakIsUUFBUTtBQUNaOzs7Ozs7QUFFQTtFQUNFLGFBQWE7O0VBRWIsU0FBUztFQUNULGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHlCQUF5QjtFQUN6Qix3QkFBd0I7QUFDMUI7Ozs7OztBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOzs7Ozs7QUFFQTtFQUNFLGNBQWM7RUFDZCxVQUFVO0FBQ1o7Ozs7OztBQUVBO0lBQ0ksYUFBYTtFQUNmLFlBQVk7RUFDWixlQUFlOztBQUVqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcblxyXG5ib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBtYXJnaW46IDEwMHB4O1xyXG5cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4udGFiLWdyb3VwIHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwIDAgNDBweCAwO1xyXG59XHJcblxyXG5cclxuaDEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIG1hcmdpbjogMCAwIDQwcHg7XHJcbn1cclxuXHJcblxyXG4jbXlfY2VudGVyZWRfYnV0dG9ucyB7XHJcbiAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbmJ1dHRvbntcclxuICAgICBcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgbGVmdDo0MCU7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIGZsb2F0OiBjZW50ZXI7XHJcblxyXG4gIGJvcmRlcjogMDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgcGFkZGluZzogMTVweCAwO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG4gIGJhY2tncm91bmQ6ICMxYWIxODg7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbn1cclxuLmJ1dHRvbjpob3ZlciwgLmJ1dHRvbjpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZDogIzE3OWI3NztcclxufVxyXG5cclxuLmJ1dHRvbi1ibG9jayB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDI1JTtcclxufVxyXG5cclxucHtcclxuICAgIGZsb2F0OiBjZW50ZXI7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtc2l6ZTogNTBweDtcclxuXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js\"></script>\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js\"></script>\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n<!------ Include the above in your HEAD tag ---------->\n<br/>\n<section id=\"tabs\" class=\"project-tab\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"tab-content\" id=\"nav-tabContent\">\n          <div class=\"tab-pane fade show active\" id=\"nav-home\" role=\"tabpanel\" aria-labelledby=\"nav-home-tab\">\n            <table class=\"table\" cellspacing=\"0\">\n              <thead>\n              <tr>\n                <th>User Info</th>\n                <th *ngIf=\"theUser.userid === 1\">Hello, Teacher</th>\n\n                <th *ngIf=\"theUser.userid >= 2\">Hello, Student</th>\n\n              </tr>\n              </thead>\n              <tbody>\n              <tr>\n                <th>Email/Username</th>\n                <td>{{theUser.email}}</td>\n              </tr>\n              <tr>\n                <td>First Name</td>\n                <td>{{theUser.firstname}}</td>\n              </tr>\n              <tr>\n                <td>Last Name</td>\n                <td>{{theUser.lastname}}</td>\n              </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n    <button (click)=\"signOut()\" class=\"btn btn-success\" style=\"margin-left: 12px\">Sign Out</button>\n\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_Users__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/Users */ "./src/app/models/Users.ts");






var HomeComponent = /** @class */ (function () {
    function HomeComponent(authService, userService, router) {
        this.authService = authService;
        this.userService = userService;
        this.router = router;
    }
    // reroutes users if theyre not logged in
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.authService.isLoggedIn()) {
            this.router.navigate(['/']);
        }
        var theUser = new _models_Users__WEBPACK_IMPORTED_MODULE_5__["Users"]();
        this.userService.getUserByUserId(Number(this.authService.getToken()))
            .subscribe(function (user) {
            _this.theUser = user;
        });
    };
    // clears the auth token
    HomeComponent.prototype.signOut = function () {
        this.authService.logout();
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\nbody {\r\n    background-color: lightblue;\r\n      text-align: center;\r\n      margin: 100px;\r\n\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.tab-group {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0 0 40px 0;\r\n}\r\n\r\n\r\n\r\n\r\n\r\nh1 {\r\n  text-align: center;\r\n  color: #ffffff;\r\n  font-weight: 300;\r\n  margin: 0 0 40px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n#my_centered_buttons {\r\n     display: flex;\r\n      justify-content: center;\r\n    }\r\n\r\n\r\n\r\n\r\n\r\nbutton{\r\n     \r\n    position:relative;\r\n    left:40%;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.button {\r\n  float: center;\r\n\r\n  border: 0;\r\n  outline: none;\r\n  border-radius: 0;\r\n  padding: 15px 0;\r\n  font-size: 2rem;\r\n  font-weight: 600;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.1em;\r\n  background: #1ab188;\r\n  color: #ffffff;\r\n  transition: all 0.5s ease;\r\n  -webkit-appearance: none;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.button:hover, .button:focus {\r\n  background: #179b77;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.button-block {\r\n  display: block;\r\n  width: 25%;\r\n}\r\n\r\n\r\n\r\n\r\n\r\np{\r\n    float: center;\r\n  color: black;\r\n  font-size: 50px;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBO0lBQ0ksMkJBQTJCO01BQ3pCLGtCQUFrQjtNQUNsQixhQUFhOzs7QUFHbkI7Ozs7OztBQU1BO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7Ozs7OztBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOzs7Ozs7QUFHQTtLQUNLLGFBQWE7TUFDWix1QkFBdUI7SUFDekI7Ozs7OztBQUlKOztJQUVJLGlCQUFpQjtJQUNqQixRQUFRO0FBQ1o7Ozs7OztBQUVBO0VBQ0UsYUFBYTs7RUFFYixTQUFTO0VBQ1QsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLHdCQUF3QjtBQUMxQjs7Ozs7O0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7Ozs7OztBQUVBO0VBQ0UsY0FBYztFQUNkLFVBQVU7QUFDWjs7Ozs7O0FBRUE7SUFDSSxhQUFhO0VBQ2YsWUFBWTtFQUNaLGVBQWU7O0FBRWpCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5cclxuYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWFyZ2luOiAxMDBweDtcclxuXHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuLnRhYi1ncm91cCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMCAwIDQwcHggMDtcclxufVxyXG5cclxuXHJcbmgxIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBtYXJnaW46IDAgMCA0MHB4O1xyXG59XHJcblxyXG5cclxuI215X2NlbnRlcmVkX2J1dHRvbnMge1xyXG4gICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5idXR0b257XHJcbiAgICAgXHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgIGxlZnQ6NDAlO1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBmbG9hdDogY2VudGVyO1xyXG5cclxuICBib3JkZXI6IDA7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIHBhZGRpbmc6IDE1cHggMDtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcclxuICBiYWNrZ3JvdW5kOiAjMWFiMTg4O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG59XHJcbi5idXR0b246aG92ZXIsIC5idXR0b246Zm9jdXMge1xyXG4gIGJhY2tncm91bmQ6ICMxNzliNzc7XHJcbn1cclxuXHJcbi5idXR0b24tYmxvY2sge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAyNSU7XHJcbn1cclxuXHJcbnB7XHJcbiAgICBmbG9hdDogY2VudGVyO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBmb250LXNpemU6IDUwcHg7XHJcblxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js\"></script>\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js\"></script>\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n\n<div class=\"container\" style=\"align-content: center\">\n\n  <div class=\"container-fluid\">\n\n    <form class=\"container-login\" #l=\"ngForm\" (ngSubmit)=\"loginSubmit()\"> <!--ask Ben about ngForm purpose and location-->\n      <div class=\"form-group\">\n        <label for=\"email\" style=\"color: white\">Email address</label>\n        <input\n                class=\"form-control\"\n                type=\"text\"\n                id=\"email\"\n                name=\"email\"\n                placeholder=\"Please enter your email!\"\n                [(ngModel)]=\"email\"\n                required\n                email/>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"password\" style=\"color: white\">Password</label>\n        <input\n                class=\"form-control\"\n                type=\"password\"\n                id=\"password\"\n                name=\"password\"\n                [(ngModel)]=\"password\"\n                placeholder=\"Password\"\n                required/>\n      </div>\n\n      <div\n              type=\"button\"\n      >\n\n      </div>\n      <button\n              type=\"submit\"\n              class=\"btn btn-success\"\n      >Submit</button>\n      <a\n              class=\"pull-right\"\n              routerLink=\"/Register\">New User?</a>\n    </form>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");





var LoginComponent = /** @class */ (function () {
    // Have to line up perfectly? wtf angular lol.
    function LoginComponent(authService, router, route, location) {
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.location = location;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginSubmit = function () {
        var _this = this;
        this.authService.authenticate(this.email, this.password, function () { return _this.router.navigate(['/Home']); }, function (err) {
            _this.router.navigate(['/']);
            console.log(err);
            console.log('not logged in');
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/signup/signup.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/signup/signup.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\nbody {\r\n    background-color: lightblue;\r\n      text-align: center;\r\n      margin: 100px;\r\n\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.tab-group {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0 0 40px 0;\r\n}\r\n\r\n\r\n\r\n\r\n\r\nh1 {\r\n  text-align: center;\r\n  color: #ffffff;\r\n  font-weight: 300;\r\n  margin: 0 0 40px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n#my_centered_buttons {\r\n     display: flex;\r\n      justify-content: center;\r\n    }\r\n\r\n\r\n\r\n\r\n\r\nbutton{\r\n     \r\n    position:relative;\r\n    left:40%;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.button {\r\n  float: center;\r\n\r\n  border: 0;\r\n  outline: none;\r\n  border-radius: 0;\r\n  padding: 15px 0;\r\n  font-size: 2rem;\r\n  font-weight: 600;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.1em;\r\n  background: #1ab188;\r\n  color: #ffffff;\r\n  transition: all 0.5s ease;\r\n  -webkit-appearance: none;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.button:hover, .button:focus {\r\n  background: #179b77;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.button-block {\r\n  display: block;\r\n  width: 25%;\r\n}\r\n\r\n\r\n\r\n\r\n\r\np{\r\n    float: center;\r\n  color: black;\r\n  font-size: 50px;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0E7SUFDSSwyQkFBMkI7TUFDekIsa0JBQWtCO01BQ2xCLGFBQWE7OztBQUduQjs7Ozs7O0FBTUE7RUFDRSxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjs7Ozs7O0FBR0E7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7Ozs7OztBQUdBO0tBQ0ssYUFBYTtNQUNaLHVCQUF1QjtJQUN6Qjs7Ozs7O0FBSUo7O0lBRUksaUJBQWlCO0lBQ2pCLFFBQVE7QUFDWjs7Ozs7O0FBRUE7RUFDRSxhQUFhOztFQUViLFNBQVM7RUFDVCxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsd0JBQXdCO0FBQzFCOzs7Ozs7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjs7Ozs7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsVUFBVTtBQUNaOzs7Ozs7QUFFQTtJQUNJLGFBQWE7RUFDZixZQUFZO0VBQ1osZUFBZTs7QUFFakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbmJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbjogMTAwcHg7XHJcblxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbi50YWItZ3JvdXAge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDAgMCA0MHB4IDA7XHJcbn1cclxuXHJcblxyXG5oMSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgbWFyZ2luOiAwIDAgNDBweDtcclxufVxyXG5cclxuXHJcbiNteV9jZW50ZXJlZF9idXR0b25zIHtcclxuICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcblxyXG5cclxuYnV0dG9ue1xyXG4gICAgIFxyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICBsZWZ0OjQwJTtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgZmxvYXQ6IGNlbnRlcjtcclxuXHJcbiAgYm9yZGVyOiAwO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XHJcbiAgYmFja2dyb3VuZDogIzFhYjE4ODtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxufVxyXG4uYnV0dG9uOmhvdmVyLCAuYnV0dG9uOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kOiAjMTc5Yjc3O1xyXG59XHJcblxyXG4uYnV0dG9uLWJsb2NrIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMjUlO1xyXG59XHJcblxyXG5we1xyXG4gICAgZmxvYXQ6IGNlbnRlcjtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiA1MHB4O1xyXG5cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/signup/signup.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/signup/signup.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js\"></script>\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js\"></script>\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>\n\n<div class=\"container\" style=\"max-width: 800px\">\n\n  <form (ngSubmit)=\"addUser(f)\" #f=\"ngForm\">\n    <div class=\"form-row\">\n      <div class=\"form-group col-md-6\">\n        <label for=\"inputEmail4\">First Name</label>\n        <input type=\"email\"\n               class=\"form-control\"\n               id=\"inputEmail4\"\n               placeholder=\"First Name\"\n               ngModel\n               name=\"firstname\">\n      </div>\n      <div class=\"form-group col-md-6\">\n        <label for=\"inputPassword4\">Last Name</label>\n        <input type=\"text\"\n               class=\"form-control\"\n               id=\"inputPassword4\"\n               placeholder=\"Last Name\"\n               ngModel\n               name=\"lastname\">\n      </div>\n    </div>\n    <div class=\"form-row\">\n      <div class=\"form-group col-md-6\">\n        <label for=\"inputCity\">Email</label>\n        <input type=\"text\"\n               class=\"form-control\"\n               id=\"inputCity\"\n               placeholder=\"Email Address\"\n               ngModel\n               name=\"email\">\n      </div>\n      <div class=\"form-group col-md-6\">\n        <label for=\"inputZip\">Password</label>\n        <input type=\"password\"\n               class=\"form-control\"\n               id=\"inputZip\"\n               placeholder=\"Password\"\n               ngModel\n               name=\"password\">\n      </div>\n    </div>\n    <button type=\"submit\" class=\"btn btn-success\" style=\"margin-left: 12px\">Submit</button>\n  </form>\n</div>\n        <button class = \"button button-block\" type=\"submit\" routerLink=\"/Login\">Logout</button>\n"

/***/ }),

/***/ "./src/app/components/signup/signup.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/signup/signup.component.ts ***!
  \*******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _models_Users__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/Users */ "./src/app/models/Users.ts");





var SignupComponent = /** @class */ (function () {
    function SignupComponent(userService, router, route) {
        this.userService = userService;
        this.router = router;
        this.route = route;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    // grabs the values from the form and calls
    // the user service to make an
    // http request-sets the role id to 2 so 
    // the database knows its a student
    SignupComponent.prototype.addUser = function (form) {
        var _this = this;
        var user = new _models_Users__WEBPACK_IMPORTED_MODULE_4__["Users"]();
        user.firstname = form.value['firstname'];
        user.lastname = form.value['lastname'];
        user.email = form.value['email'];
        user.password = form.value['password'];
        user.roleid = 2;
        this.userService.addUser(user)
            .subscribe(function () {
            alert('Account Created');
            _this.router.navigate(['/']);
        }, function () { return console.log('failure'); });
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/components/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/components/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/models/Users.ts":
/*!*********************************!*\
  !*** ./src/app/models/Users.ts ***!
  \*********************************/
/*! exports provided: Users */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Users", function() { return Users; });
var Users = /** @class */ (function () {
    function Users() {
    }
    return Users;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    // checks if the user is logged in
    AuthService.prototype.isLoggedIn = function () {
        return localStorage.getItem('authToken') != null;
    };
    // check to see if the user is in the dB
    AuthService.prototype.getToken = function () {
        return Number(localStorage.getItem('authToken'));
    };
    AuthService.prototype.authenticate = function (email, password, success, fail) {
        return this.http.post('http://localhost:8080/authuser', JSON.stringify({ username: email, password: password }), {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .toPromise()
            .then(function (resp) {
            localStorage.setItem('authToken', JSON.stringify(resp));
            success();
        }, function (err) {
            fail(err);
            window.alert('Invalid email or password');
        });
    };
    // clears the auth token
    AuthService.prototype.logout = function () {
        localStorage.clear();
        window.location.reload();
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/users.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/users.service.ts ***!
  \*******************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var UsersService = /** @class */ (function () {
    function UsersService(httpClient) {
        this.httpClient = httpClient;
    }
    // makes a post request to add a user
    UsersService.prototype.addUser = function (user) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.httpClient.post('http://localhost:8080/user/adduser', user, httpOptions);
    };
    // gets the user from the DB by their id
    UsersService.prototype.getUserByUserId = function (userId) {
        return this.httpClient.get('http://localhost:8080/user/users/' + userId);
    };
    UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ERIC\Desktop\SCHOOL\SCHOOL\SCHOOLSTUFF\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map