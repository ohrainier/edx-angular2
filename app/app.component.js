"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var core_2 = require('@angular/core');
var http_1 = require('@angular/http');
require('./rxjs-operators');
var AppComponent = (function () {
    function AppComponent(http) {
        this.http = http;
        this.dataUrl = 'http://httpbin.org/ip';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getItems()
            .subscribe(function (ipdata) { return _this.origin = ipdata.origin; });
    };
    AppComponent.prototype.getItems = function () {
        return this.http.get(this.dataUrl)
            .map(this.extractData);
    };
    AppComponent.prototype.extractData = function (res) {
        return res.json();
    };
    AppComponent = __decorate([
        core_2.Injectable(),
        core_1.Component({
            selector: 'demo-app',
            templateUrl: 'app/app.component.html',
            directives: []
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var IPData = (function () {
    function IPData() {
    }
    return IPData;
}());
//# sourceMappingURL=app.component.js.map