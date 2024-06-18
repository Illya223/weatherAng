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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    background-color: #dedede;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <app-weather></app-weather>\n  \n</div>\n\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'weather-app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _weather_weather_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./weather/weather.component */ "./src/app/weather/weather.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form/form.component */ "./src/app/form/form.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _weather_weather_component__WEBPACK_IMPORTED_MODULE_4__["WeatherComponent"],
                _form_form_component__WEBPACK_IMPORTED_MODULE_5__["FormComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/form/form.component.css":
/*!*****************************************!*\
  !*** ./src/app/form/form.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: rgba(0, 0, 0, 0.5); /* Полупрозрачный черный фон */\r\n  }\r\n  \r\n  .modal-content {\r\n    width: 30%;\r\n    background-color: white;\r\n    padding: 20px;\r\n    border-radius: 5px;\r\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\r\n    z-index: 2; /* Устанавливаем более высокий z-index для контента модального окна */\r\n  }\r\n  \r\n  label{\r\n    text-align: left;\r\n    margin: 10px 0;\r\n    padding: 0;\r\n  }\r\n  \r\n  button{\r\n    margin: 10px;\r\n   \r\n  }\r\n  \r\n  .buttons{\r\n    text-align: left;\r\n    margin: 10px;\r\n  }\r\n  \r\n  .suggestions {\r\n    list-style-type: none;\r\n    padding: 0;\r\n    margin: 0;\r\n    border: 1px solid #ccc;\r\n    max-height: 150px;\r\n    overflow-y: auto;\r\n    position: absolute;\r\n    background-color: white;\r\n    width: 100%;\r\n  }\r\n  \r\n  .suggestions li {\r\n    padding: 10px;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .suggestions li:hover {\r\n    background-color: #f0f0f0;\r\n  }\r\n  \r\n  .full-width {\r\n    width: 100%;}\r\n  \r\n  #city{\r\n    width: 70%;\r\n  }\r\n  \r\n  label{\r\n    padding-right: 20px;\r\n  }\r\n  \r\n  @media (max-width: 680px){\r\n    .modal-content{\r\n      width: 70%;\r\n    }\r\n  }\r\n  \r\n  @media (max-width: 450px){\r\n    .modal-content{\r\n      width: 90%;\r\n    }\r\n  }"

/***/ }),

/***/ "./src/app/form/form.component.html":
/*!******************************************!*\
  !*** ./src/app/form/form.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\n    <div class=\"modal-content\"> \n      <h2>Select city</h2>\n      <form (ngSubmit)=\"onSubmit()\" class=\"form\">\n        <label for=\"city\">City</label>\n      <select id=\"city\" [(ngModel)]=\"city\" name=\"city\" required>\n        <option *ngFor=\"let city of cities\" [value]=\"city.name\">{{ city.name }}</option>\n      </select>\n      \n        \n      <div class=\"buttons\">\n        <button type=\"submit\" class=\"btn btn-primary\">Get Weather</button>\n        <button type=\"button\" (click)=\"onCancel()\"  class=\"btn  btn-danger\">Cancel</button>\n        </div>\n      </form>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/form/form.component.ts":
/*!****************************************!*\
  !*** ./src/app/form/form.component.ts ***!
  \****************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _geonames_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../geonames.service */ "./src/app/geonames.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormComponent = /** @class */ (function () {
    function FormComponent(geonamesService) {
        this.geonamesService = geonamesService;
        this.weatherRequest = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cancelRequest = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.city = 'London';
        this.cities = [];
    }
    FormComponent.prototype.onSubmit = function () {
        this.weatherRequest.emit({ city: this.city });
    };
    FormComponent.prototype.onCancel = function () {
        this.cancelRequest.emit();
    };
    FormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.geonamesService.getCities().subscribe(function (data) {
            _this.cities = data.geonames;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FormComponent.prototype, "weatherRequest", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], FormComponent.prototype, "cancelRequest", void 0);
    FormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.css */ "./src/app/form/form.component.css")]
        }),
        __metadata("design:paramtypes", [_geonames_service__WEBPACK_IMPORTED_MODULE_1__["GeonamesService"]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/geonames.service.ts":
/*!*************************************!*\
  !*** ./src/app/geonames.service.ts ***!
  \*************************************/
/*! exports provided: GeonamesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeonamesService", function() { return GeonamesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GeonamesService = /** @class */ (function () {
    function GeonamesService(http) {
        this.http = http;
        this.username = 'illya'; // Замените на ваш username Geonames
        this.apiUrl = "http://api.geonames.org/searchJSON?username=" + this.username + "&maxRows=1000&cities=cities15000";
    }
    GeonamesService.prototype.getCities = function () {
        return this.http.get(this.apiUrl);
    };
    GeonamesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GeonamesService);
    return GeonamesService;
}());



/***/ }),

/***/ "./src/app/weather.service.ts":
/*!************************************!*\
  !*** ./src/app/weather.service.ts ***!
  \************************************/
/*! exports provided: WeatherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherService", function() { return WeatherService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WeatherService = /** @class */ (function () {
    function WeatherService(http) {
        this.http = http;
        this.apiKey = 'e2c730b2b5b2a1900fa6c13cb1cc163a';
        this.apiUrl = 'https://api.openweathermap.org/data/2.5';
        this.geoUrl = 'http://api.openweathermap.org/geo/1.0/direct';
    }
    WeatherService.prototype.getWeather = function (city) {
        var url = this.apiUrl + "?q=" + city + "&appid=" + this.apiKey + "&units=metric";
        return this.http.get(url);
    };
    WeatherService.prototype.getCoordinates = function (city) {
        var url = this.geoUrl + "?q=" + city + "&limit=1&appid=" + this.apiKey;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            if (response.length > 0) {
                return {
                    lat: response[0].lat,
                    lon: response[0].lon
                };
            }
            else {
                throw new Error('City not found');
            }
        }));
    };
    WeatherService.prototype.getWeatherbyDate = function (city) {
        var _this = this;
        return this.getCoordinates(city).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (coords) {
            var url = _this.apiUrl + "/forecast?lat=" + coords.lat + "&lon=" + coords.lon + "&units=metric&appid=" + _this.apiKey;
            return _this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response; }) // Убедитесь, что вы возвращаете массив list
            );
        }));
    };
    WeatherService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], WeatherService);
    return WeatherService;
}());



/***/ }),

/***/ "./src/app/weather/weather.component.css":
/*!***********************************************!*\
  !*** ./src/app/weather/weather.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".backdrop {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0, 0, 0, 0.5); /* Полупрозрачный черный фон */\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    z-index: 1; /* Устанавливаем более высокий z-index для фона */\r\n  }\r\n  .forecast-container {\r\n    margin-top: 20px;\r\n    overflow: hidden;\r\n  }\r\n  .forecast-scroll {\r\n    display: flex;\r\n    overflow-x: auto;\r\n    padding: 10px;\r\n    border: 1px solid #ccc;\r\n  }\r\n  .day-block {\r\n    min-width: 200px;\r\n    padding: 20px;\r\n    margin-right: 20px;\r\n    background-color: #ceffff;\r\n    border: 1px solid #ccc;\r\n    border-radius: 5px;\r\n    flex-shrink: 0;\r\n    cursor: pointer;\r\n  }\r\n  .hourly-container {\r\n    padding: 10px;\r\n    background-color: #f0f0f0;\r\n    border-radius: 5px;\r\n  }\r\n  .detail-block {\r\n    min-width: 150px;\r\n    padding: 10px;\r\n    margin-right: 10px;\r\n    background-color: #e0e0e0;\r\n    border: 1px solid #ccc;\r\n    border-radius: 5px;\r\n    flex-shrink: 0;\r\n  }\r\n  button {\r\n    \r\n    cursor: pointer;\r\n  }\r\n  @media (max-width: 680px) {\r\n  \r\n  .forecast-scroll {\r\n    flex-direction: column;\r\n    overflow-y: scroll;\r\n    height: 500px;\r\n  }\r\n  .day-block {\r\n    margin: 10px 20px;\r\n  }\r\n  \r\n\r\n}"

/***/ }),

/***/ "./src/app/weather/weather.component.html":
/*!************************************************!*\
  !*** ./src/app/weather/weather.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Weather forecast</h1>\n\n  <button (click)=\"toggleForm()\" class=\"btn btn-dark\">Select City</button>\n  <div *ngIf=\"showForm\"  class=\"backdrop\">\n    <app-form (weatherRequest)=\"onWeatherRequest($event)\" (cancelRequest)=\"onCancel()\"></app-form>\n  </div>\n\n  \n  <div class=\"forecast-container\" *ngIf=\"weatherData && weatherData.length\">\n    <h2>5-Day Weather Forecast for {{ city }}</h2>\n  \n    <!-- Список дней -->\n    <div class=\"forecast-scroll\" *ngIf=\"!showHourly\">\n      <div *ngFor=\"let day of weatherData; let i = index\" class=\"day-block\" (click)=\"showHourlyForecast(i)\">\n        <p>Date: {{ day.date }}</p>\n        <p>Average Temperature: {{ day.avgTemp }} °C</p>\n      </div>\n    </div>\n  \n    <!-- Детализированный прогноз по часам -->\n    <div class=\"hourly-container\" *ngIf=\"showHourly\">\n      <button (click)=\"goBack()\">Back</button>\n      <h3>Hourly Forecast for {{ weatherData[selectedDayIndex].date }}</h3>\n      <div class=\"forecast-scroll\">\n        <div *ngFor=\"let detail of weatherData[selectedDayIndex].details\" class=\"day-block\">\n          <img src=\"http://openweathermap.org/img/wn/{{detail.iconUrl}}.png\">\n          <p>Time: {{ detail.dt * 1000 | date:'shortTime' }}</p>\n          <p>Temperature: {{ detail.temp.toFixed(1) }} °C</p> <!-- Округление до одной цифры после запятой -->\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/weather/weather.component.ts":
/*!**********************************************!*\
  !*** ./src/app/weather/weather.component.ts ***!
  \**********************************************/
/*! exports provided: WeatherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherComponent", function() { return WeatherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../weather.service */ "./src/app/weather.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WeatherComponent = /** @class */ (function () {
    function WeatherComponent(weatherService) {
        this.weatherService = weatherService;
        this.city = 'kyiv';
        this.showForm = false;
        this.selectedDayIndex = null;
        this.showHourly = false;
    }
    WeatherComponent.prototype.ngOnInit = function () {
        this.getWeather1();
    };
    WeatherComponent.prototype.toggleForm = function () {
        this.showForm = !this.showForm;
    };
    WeatherComponent.prototype.onCancel = function () {
        this.showForm = false; // Скрыть форму при отмене
    };
    WeatherComponent.prototype.getWeather1 = function () {
        var _this = this;
        this.weatherService.getWeatherbyDate(this.city).subscribe(function (data) {
            _this.weatherData = _this.processForecastData(data);
            ;
            console.log(data);
            console.log(_this.weatherData);
        }, function (error) {
            console.error('Error fetching weather data', error);
        });
    };
    WeatherComponent.prototype.onWeatherRequest = function (event) {
        var _this = this;
        this.weatherService.getWeatherbyDate(event.city).subscribe(function (data) {
            _this.city = event.city;
            _this.weatherData = _this.processForecastData(data);
            console.log(_this.weatherData);
        }, function (error) {
            console.error('Error fetching weather data', error);
        });
        this.showForm = false; // Скрыть форму после отправки запроса
    };
    WeatherComponent.prototype.processForecastData = function (data) {
        var days = [];
        var currentDay = null;
        data.list.forEach(function (entry) {
            var date = new Date(entry.dt * 1000);
            var dayDate = date.toISOString().split('T')[0]; // Получаем дату без времени
            if (!currentDay || currentDay.date !== dayDate) {
                currentDay = {
                    date: dayDate,
                    avgTemp: 0,
                    details: []
                };
                days.push(currentDay);
            }
            currentDay.details.push({
                dt: entry.dt,
                temp: entry.main.temp,
                iconUrl: entry.weather[0].icon
            });
            // Пересчитываем среднюю температуру
            currentDay.avgTemp = currentDay.details.reduce(function (sum, detail) { return sum + detail.temp; }, 0) / currentDay.details.length;
        });
        days.forEach(function (day) {
            day.avgTemp = parseFloat(day.avgTemp.toFixed(1));
        });
        return days;
    };
    WeatherComponent.prototype.showHourlyForecast = function (index) {
        this.selectedDayIndex = index;
        this.showHourly = true;
    };
    WeatherComponent.prototype.goBack = function () {
        this.showHourly = false;
    };
    WeatherComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-weather',
            template: __webpack_require__(/*! ./weather.component.html */ "./src/app/weather/weather.component.html"),
            styles: [__webpack_require__(/*! ./weather.component.css */ "./src/app/weather/weather.component.css")]
        }),
        __metadata("design:paramtypes", [_weather_service__WEBPACK_IMPORTED_MODULE_1__["WeatherService"]])
    ], WeatherComponent);
    return WeatherComponent;
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
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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

module.exports = __webpack_require__(/*! E:\Angular\weather-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map