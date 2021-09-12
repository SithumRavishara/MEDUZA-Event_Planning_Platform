(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('moment'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ng6-countdown', ['exports', '@angular/core', 'moment', '@angular/common'], factory) :
    (factory((global.countdown = {}),global.ng.core,global.moment_,global.ng.common));
}(this, (function (exports,core,moment_,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var NumberTransformPipe = /** @class */ (function () {
        function NumberTransformPipe() {
        }
        /**
         * @param {?} value
         * @return {?}
         */
        NumberTransformPipe.prototype.transform = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (value) {
                    if (value < 10) {
                        return "0" + value;
                    }
                    return "" + value;
                }
                else {
                    return '00';
                }
            };
        NumberTransformPipe.decorators = [
            { type: core.Pipe, args: [{
                        name: 'appNumberTransform'
                    },] }
        ];
        return NumberTransformPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CountDownComponent = /** @class */ (function () {
        function CountDownComponent() {
            this.title = 'The time remaining is:';
            this.daysText = 'Days';
            this.hoursText = 'Hours';
            this.minutesText = 'Minutes';
            this.secondsText = 'Seconds';
            this.isCustomTemplate = false;
            this.cardBackgroundColor = 'seagreen';
            this.cardTextColor = 'white';
            this.daysChanged = new core.EventEmitter();
            this.hoursChanged = new core.EventEmitter();
            this.minutesChanged = new core.EventEmitter();
            this.secondsChanged = new core.EventEmitter();
            this.moment = moment_;
        }
        /**
         * @return {?}
         */
        CountDownComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.finishDate = this.moment(this.date);
                setInterval(function () {
                    /** @type {?} */
                    var today = _this.moment();
                    _this.daysRemaining = _this.finishDate.diff(today, 'days') % 365;
                    _this.hoursRemaining = _this.finishDate.diff(today, 'hours') % 24;
                    _this.minutesRemaining = _this.finishDate.diff(today, 'minutes') % 60;
                    _this.secondsRemaining = _this.finishDate.diff(today, 'seconds') % 60;
                    _this.daysChanged.emit(_this.daysRemaining);
                    _this.hoursChanged.emit(_this.hoursRemaining);
                    _this.minutesChanged.emit(_this.minutesRemaining);
                    _this.secondsChanged.emit(_this.secondsRemaining);
                    _this.isFinishDate = _this.finishDate.isSameOrBefore(today);
                }, 1000);
            };
        CountDownComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-countdown',
                        template: "<div *ngIf=\"!isFinishDate && !isCustomTemplate\" class=\"hide-on-small-only\">\n    <div class=\"row container\">\n      <div class=\"col s12 center-align\">\n        <h2 class=\"text-bold\"> {{title}} </h2>\n      </div>\n    </div>\n    <div class=\"row container\">\n      <div class=\"col s3\">\n        <div class=\"card\">\n          <div class=\"card-image waves-effect waves-block waves-light\">\n            <p class=\"number-style center-align\"> {{daysRemaining | appNumberTransform}} </p>\n          </div>\n          <div class=\"card-content\" [style.background]=\"cardBackgroundColor\">\n            <span class=\"card-title activator text-darken-4 center-align\" [style.color]=\"cardTextColor\">{{daysText}}</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col s3\">\n        <div class=\"card\">\n          <div class=\"card-image waves-effect waves-block waves-light\">\n            <p class=\"number-style center-align\"> {{hoursRemaining | appNumberTransform}} </p>\n          </div>\n          <div class=\"card-content\" [style.background]=\"cardBackgroundColor\">\n            <span class=\"card-title activator text-darken-4 center-align\" [style.color]=\"cardTextColor\">{{hoursText}}</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col s3\">\n        <div class=\"card\">\n          <div class=\"card-image waves-effect waves-block waves-light\">\n            <p class=\"number-style center-align\"> {{minutesRemaining | appNumberTransform}} </p>\n          </div>\n          <div class=\"card-content\" [style.background]=\"cardBackgroundColor\">\n            <span class=\"card-title activator text-darken-4 center-align\" [style.color]=\"cardTextColor\">{{minutesText}}</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col s3\">\n        <div class=\"card\">\n          <div class=\"card-image waves-effect waves-block waves-light\">\n            <p class=\"number-style center-align\"> {{secondsRemaining | appNumberTransform}} </p>\n          </div>\n          <div class=\"card-content\" [style.background]=\"cardBackgroundColor\">\n            <span class=\"card-title activator text-darken-4 center-align\" [style.color]=\"cardTextColor\">{{secondsText}}</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"!isFinishDate && !isCustomTemplate\" class=\"row container show-on-small hide-on-med-and-up\">\n    <div class=\"row container\">\n      <div class=\"col s12 center-align\">\n        <h5 class=\"text-bold count-title-mobile\"> {{title}} </h5>\n      </div>\n    </div>\n    <div class=\"col s12\">\n      <div class=\"card\">\n        <div class=\"card-image waves-effect waves-block waves-light\">\n          <p class=\"number-style-mobile center-align\"> \n            <span class=\"text-bold\">{{daysText}}: </span> {{daysRemaining | appNumberTransform}} | \n            <span class=\"text-bold\"> {{hoursText}}: </span> {{hoursRemaining | appNumberTransform}} |\n            <span class=\"text-bold\"> {{minutesText}}:</span> {{minutesRemaining | appNumberTransform}} |\n            <span class=\"text-bold\"> {{secondsText}}:</span> {{secondsRemaining | appNumberTransform}} </p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <ng-content *ngIf=\"isCustomTemplate\"></ng-content>",
                        styles: [".number-style{font-size:60px;font-weight:700}.number-style-mobile{font-size:20px}@media screen and (max-width:415px){.number-style-mobile{font-size:13px!important}}@media screen and (max-width:380px){.number-style-mobile{font-size:12px!important}}@media screen and (max-width:330px){.number-style-mobile{font-size:10px!important}}.text-bold{font-weight:700}@media screen and (max-width:415px){.card-title{font-size:20px!important}}@media screen and (max-width:380px){.card-title{font-size:15px!important}}@media screen and (max-width:330px){.card-title{font-size:10px!important}}@media screen and (max-width:360px){.count-title-mobile{font-size:20px!important}}@media screen and (max-width:320px){.count-title-mobile{font-size:18px!important}}"]
                    }] }
        ];
        CountDownComponent.propDecorators = {
            date: [{ type: core.Input }],
            title: [{ type: core.Input }],
            daysText: [{ type: core.Input }],
            hoursText: [{ type: core.Input }],
            minutesText: [{ type: core.Input }],
            secondsText: [{ type: core.Input }],
            isCustomTemplate: [{ type: core.Input }],
            cardBackgroundColor: [{ type: core.Input }],
            cardTextColor: [{ type: core.Input }],
            daysChanged: [{ type: core.Output }],
            hoursChanged: [{ type: core.Output }],
            minutesChanged: [{ type: core.Output }],
            secondsChanged: [{ type: core.Output }]
        };
        return CountDownComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var CountDownModule = /** @class */ (function () {
        function CountDownModule() {
        }
        CountDownModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [
                            CountDownComponent,
                            NumberTransformPipe,
                        ],
                        imports: [
                            common.CommonModule
                        ],
                        exports: [
                            CountDownComponent
                        ]
                    },] }
        ];
        return CountDownModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.CountDownModule = CountDownModule;
    exports.ɵa = CountDownComponent;
    exports.ɵb = NumberTransformPipe;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRkb3duLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vY291bnRkb3duL2xpYi9waXBlcy9udW1iZXItdHJhbnNmb3JtL251bWJlci10cmFuc2Zvcm0ucGlwZS50cyIsIm5nOi8vY291bnRkb3duL2xpYi9jb3VudGRvd24uY29tcG9uZW50LnRzIiwibmc6Ly9jb3VudGRvd24vbGliL2NvdW50ZG93Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2FwcE51bWJlclRyYW5zZm9ybSdcbn0pXG5leHBvcnQgY2xhc3MgTnVtYmVyVHJhbnNmb3JtUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0odmFsdWU6IG51bWJlcik6IHN0cmluZyB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBpZiAodmFsdWUgPCAxMCkge1xuICAgICAgICByZXR1cm4gYDAke3ZhbHVlfWA7XG4gICAgICB9XG4gICAgICByZXR1cm4gYCR7dmFsdWV9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICcwMCc7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCAqIGFzIG1vbWVudF8gZnJvbSAnbW9tZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWNvdW50ZG93bicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb3VudGRvd24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jb3VudGRvd24uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDb3VudERvd25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBkYXRlO1xuICBASW5wdXQoKSB0aXRsZSA9ICdUaGUgdGltZSByZW1haW5pbmcgaXM6JztcbiAgQElucHV0KCkgZGF5c1RleHQgPSAnRGF5cyc7XG4gIEBJbnB1dCgpIGhvdXJzVGV4dCA9ICdIb3Vycyc7XG4gIEBJbnB1dCgpIG1pbnV0ZXNUZXh0ID0gJ01pbnV0ZXMnO1xuICBASW5wdXQoKSBzZWNvbmRzVGV4dCA9ICdTZWNvbmRzJztcbiAgQElucHV0KCkgaXNDdXN0b21UZW1wbGF0ZSA9IGZhbHNlO1xuICBASW5wdXQoKSBjYXJkQmFja2dyb3VuZENvbG9yID0gJ3NlYWdyZWVuJztcbiAgQElucHV0KCkgY2FyZFRleHRDb2xvciA9ICd3aGl0ZSc7XG4gIEBPdXRwdXQoKSBkYXlzQ2hhbmdlZDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgQE91dHB1dCgpIGhvdXJzQ2hhbmdlZDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgQE91dHB1dCgpIG1pbnV0ZXNDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICBAT3V0cHV0KCkgc2Vjb25kc0NoYW5nZWQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gIGZpbmlzaERhdGU7XG4gIGRheXNSZW1haW5pbmc6IG51bWJlcjtcbiAgaG91cnNSZW1haW5pbmc6IG51bWJlcjtcbiAgbWludXRlc1JlbWFpbmluZzogbnVtYmVyO1xuICBzZWNvbmRzUmVtYWluaW5nOiBudW1iZXI7XG4gIGlzRmluaXNoRGF0ZTogYm9vbGVhbjtcbiAgbW9tZW50ID0gbW9tZW50XztcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmZpbmlzaERhdGUgPSB0aGlzLm1vbWVudCh0aGlzLmRhdGUpO1xuICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGNvbnN0IHRvZGF5ID0gdGhpcy5tb21lbnQoKTtcbiAgICAgIHRoaXMuZGF5c1JlbWFpbmluZyA9IHRoaXMuZmluaXNoRGF0ZS5kaWZmKHRvZGF5LCAnZGF5cycpICUgMzY1O1xuICAgICAgdGhpcy5ob3Vyc1JlbWFpbmluZyA9IHRoaXMuZmluaXNoRGF0ZS5kaWZmKHRvZGF5LCAnaG91cnMnKSAlIDI0O1xuICAgICAgdGhpcy5taW51dGVzUmVtYWluaW5nID0gdGhpcy5maW5pc2hEYXRlLmRpZmYodG9kYXksICdtaW51dGVzJykgJSA2MDtcbiAgICAgIHRoaXMuc2Vjb25kc1JlbWFpbmluZyA9IHRoaXMuZmluaXNoRGF0ZS5kaWZmKHRvZGF5LCAnc2Vjb25kcycpICUgNjA7XG4gICAgICB0aGlzLmRheXNDaGFuZ2VkLmVtaXQodGhpcy5kYXlzUmVtYWluaW5nKTtcbiAgICAgIHRoaXMuaG91cnNDaGFuZ2VkLmVtaXQodGhpcy5ob3Vyc1JlbWFpbmluZyk7XG4gICAgICB0aGlzLm1pbnV0ZXNDaGFuZ2VkLmVtaXQodGhpcy5taW51dGVzUmVtYWluaW5nKTtcbiAgICAgIHRoaXMuc2Vjb25kc0NoYW5nZWQuZW1pdCh0aGlzLnNlY29uZHNSZW1haW5pbmcpO1xuICAgICAgdGhpcy5pc0ZpbmlzaERhdGUgPSB0aGlzLmZpbmlzaERhdGUuaXNTYW1lT3JCZWZvcmUodG9kYXkpO1xuICAgIH0sIDEwMDApO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTnVtYmVyVHJhbnNmb3JtUGlwZSB9IGZyb20gJy4vcGlwZXMvbnVtYmVyLXRyYW5zZm9ybS9udW1iZXItdHJhbnNmb3JtLnBpcGUnO1xuaW1wb3J0IHsgQ291bnREb3duQ29tcG9uZW50IH0gZnJvbSAnLi9jb3VudGRvd24uY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQ291bnREb3duQ29tcG9uZW50LFxuICAgIE51bWJlclRyYW5zZm9ybVBpcGUsXG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIENvdW50RG93bkNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIENvdW50RG93bk1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJQaXBlIiwiRXZlbnRFbWl0dGVyIiwiQ29tcG9uZW50IiwiSW5wdXQiLCJPdXRwdXQiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7O1FBTUUsdUNBQVM7Ozs7WUFBVCxVQUFVLEtBQWE7Z0JBQ3JCLElBQUksS0FBSyxFQUFFO29CQUNULElBQUksS0FBSyxHQUFHLEVBQUUsRUFBRTt3QkFDZCxPQUFPLE1BQUksS0FBTyxDQUFDO3FCQUNwQjtvQkFDRCxPQUFPLEtBQUcsS0FBTyxDQUFDO2lCQUNuQjtxQkFBTTtvQkFDTCxPQUFPLElBQUksQ0FBQztpQkFDYjthQUNGOztvQkFiRkEsU0FBSSxTQUFDO3dCQUNKLElBQUksRUFBRSxvQkFBb0I7cUJBQzNCOztrQ0FKRDs7Ozs7OztBQ0FBOzt5QkFXbUIsd0JBQXdCOzRCQUNyQixNQUFNOzZCQUNMLE9BQU87K0JBQ0wsU0FBUzsrQkFDVCxTQUFTO29DQUNKLEtBQUs7dUNBQ0YsVUFBVTtpQ0FDaEIsT0FBTzsrQkFDYyxJQUFJQyxpQkFBWSxFQUFVO2dDQUN6QixJQUFJQSxpQkFBWSxFQUFVO2tDQUN4QixJQUFJQSxpQkFBWSxFQUFVO2tDQUMxQixJQUFJQSxpQkFBWSxFQUFVOzBCQU9sRSxPQUFPOzs7OztRQUVoQixxQ0FBUTs7O1lBQVI7Z0JBQUEsaUJBY0M7Z0JBYkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDekMsV0FBVyxDQUFDOztvQkFDVixJQUFNLEtBQUssR0FBRyxLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7b0JBQzVCLEtBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQztvQkFDL0QsS0FBSSxDQUFDLGNBQWMsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO29CQUNoRSxLQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztvQkFDcEUsS0FBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUM7b0JBQ3BFLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztvQkFDMUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO29CQUM1QyxLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztvQkFDaEQsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7b0JBQ2hELEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQzNELEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDVjs7b0JBekNGQyxjQUFTLFNBQUM7d0JBQ1QsUUFBUSxFQUFFLGVBQWU7d0JBQ3pCLHN5R0FBeUM7O3FCQUUxQzs7OzJCQUVFQyxVQUFLOzRCQUNMQSxVQUFLOytCQUNMQSxVQUFLO2dDQUNMQSxVQUFLO2tDQUNMQSxVQUFLO2tDQUNMQSxVQUFLO3VDQUNMQSxVQUFLOzBDQUNMQSxVQUFLO29DQUNMQSxVQUFLO2tDQUNMQyxXQUFNO21DQUNOQSxXQUFNO3FDQUNOQSxXQUFNO3FDQUNOQSxXQUFNOztpQ0F0QlQ7Ozs7Ozs7QUNBQTs7OztvQkFNQ0MsYUFBUSxTQUFDO3dCQUNSLFlBQVksRUFBRTs0QkFDWixrQkFBa0I7NEJBQ2xCLG1CQUFtQjt5QkFDcEI7d0JBQ0QsT0FBTyxFQUFFOzRCQUNQQyxtQkFBWTt5QkFDYjt3QkFDRCxPQUFPLEVBQUU7NEJBQ1Asa0JBQWtCO3lCQUNuQjtxQkFDRjs7OEJBakJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9