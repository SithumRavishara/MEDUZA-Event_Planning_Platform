import { Pipe, Component, Input, Output, EventEmitter, NgModule } from '@angular/core';
import * as moment_ from 'moment';
import { CommonModule } from '@angular/common';

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
        { type: Pipe, args: [{
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
        this.daysChanged = new EventEmitter();
        this.hoursChanged = new EventEmitter();
        this.minutesChanged = new EventEmitter();
        this.secondsChanged = new EventEmitter();
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
        { type: Component, args: [{
                    selector: 'lib-countdown',
                    template: "<div *ngIf=\"!isFinishDate && !isCustomTemplate\" class=\"hide-on-small-only\">\n    <div class=\"row container\">\n      <div class=\"col s12 center-align\">\n        <h2 class=\"text-bold\"> {{title}} </h2>\n      </div>\n    </div>\n    <div class=\"row container\">\n      <div class=\"col s3\">\n        <div class=\"card\">\n          <div class=\"card-image waves-effect waves-block waves-light\">\n            <p class=\"number-style center-align\"> {{daysRemaining | appNumberTransform}} </p>\n          </div>\n          <div class=\"card-content\" [style.background]=\"cardBackgroundColor\">\n            <span class=\"card-title activator text-darken-4 center-align\" [style.color]=\"cardTextColor\">{{daysText}}</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col s3\">\n        <div class=\"card\">\n          <div class=\"card-image waves-effect waves-block waves-light\">\n            <p class=\"number-style center-align\"> {{hoursRemaining | appNumberTransform}} </p>\n          </div>\n          <div class=\"card-content\" [style.background]=\"cardBackgroundColor\">\n            <span class=\"card-title activator text-darken-4 center-align\" [style.color]=\"cardTextColor\">{{hoursText}}</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col s3\">\n        <div class=\"card\">\n          <div class=\"card-image waves-effect waves-block waves-light\">\n            <p class=\"number-style center-align\"> {{minutesRemaining | appNumberTransform}} </p>\n          </div>\n          <div class=\"card-content\" [style.background]=\"cardBackgroundColor\">\n            <span class=\"card-title activator text-darken-4 center-align\" [style.color]=\"cardTextColor\">{{minutesText}}</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"col s3\">\n        <div class=\"card\">\n          <div class=\"card-image waves-effect waves-block waves-light\">\n            <p class=\"number-style center-align\"> {{secondsRemaining | appNumberTransform}} </p>\n          </div>\n          <div class=\"card-content\" [style.background]=\"cardBackgroundColor\">\n            <span class=\"card-title activator text-darken-4 center-align\" [style.color]=\"cardTextColor\">{{secondsText}}</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"!isFinishDate && !isCustomTemplate\" class=\"row container show-on-small hide-on-med-and-up\">\n    <div class=\"row container\">\n      <div class=\"col s12 center-align\">\n        <h5 class=\"text-bold count-title-mobile\"> {{title}} </h5>\n      </div>\n    </div>\n    <div class=\"col s12\">\n      <div class=\"card\">\n        <div class=\"card-image waves-effect waves-block waves-light\">\n          <p class=\"number-style-mobile center-align\"> \n            <span class=\"text-bold\">{{daysText}}: </span> {{daysRemaining | appNumberTransform}} | \n            <span class=\"text-bold\"> {{hoursText}}: </span> {{hoursRemaining | appNumberTransform}} |\n            <span class=\"text-bold\"> {{minutesText}}:</span> {{minutesRemaining | appNumberTransform}} |\n            <span class=\"text-bold\"> {{secondsText}}:</span> {{secondsRemaining | appNumberTransform}} </p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <ng-content *ngIf=\"isCustomTemplate\"></ng-content>",
                    styles: [".number-style{font-size:60px;font-weight:700}.number-style-mobile{font-size:20px}@media screen and (max-width:415px){.number-style-mobile{font-size:13px!important}}@media screen and (max-width:380px){.number-style-mobile{font-size:12px!important}}@media screen and (max-width:330px){.number-style-mobile{font-size:10px!important}}.text-bold{font-weight:700}@media screen and (max-width:415px){.card-title{font-size:20px!important}}@media screen and (max-width:380px){.card-title{font-size:15px!important}}@media screen and (max-width:330px){.card-title{font-size:10px!important}}@media screen and (max-width:360px){.count-title-mobile{font-size:20px!important}}@media screen and (max-width:320px){.count-title-mobile{font-size:18px!important}}"]
                }] }
    ];
    CountDownComponent.propDecorators = {
        date: [{ type: Input }],
        title: [{ type: Input }],
        daysText: [{ type: Input }],
        hoursText: [{ type: Input }],
        minutesText: [{ type: Input }],
        secondsText: [{ type: Input }],
        isCustomTemplate: [{ type: Input }],
        cardBackgroundColor: [{ type: Input }],
        cardTextColor: [{ type: Input }],
        daysChanged: [{ type: Output }],
        hoursChanged: [{ type: Output }],
        minutesChanged: [{ type: Output }],
        secondsChanged: [{ type: Output }]
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
        { type: NgModule, args: [{
                    declarations: [
                        CountDownComponent,
                        NumberTransformPipe,
                    ],
                    imports: [
                        CommonModule
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

export { CountDownModule, CountDownComponent as ɵa, NumberTransformPipe as ɵb };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRkb3duLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9jb3VudGRvd24vbGliL3BpcGVzL251bWJlci10cmFuc2Zvcm0vbnVtYmVyLXRyYW5zZm9ybS5waXBlLnRzIiwibmc6Ly9jb3VudGRvd24vbGliL2NvdW50ZG93bi5jb21wb25lbnQudHMiLCJuZzovL2NvdW50ZG93bi9saWIvY291bnRkb3cubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAnYXBwTnVtYmVyVHJhbnNmb3JtJ1xufSlcbmV4cG9ydCBjbGFzcyBOdW1iZXJUcmFuc2Zvcm1QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybSh2YWx1ZTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGlmICh2YWx1ZSA8IDEwKSB7XG4gICAgICAgIHJldHVybiBgMCR7dmFsdWV9YDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBgJHt2YWx1ZX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJzAwJztcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0ICogYXMgbW9tZW50XyBmcm9tICdtb21lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItY291bnRkb3duJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvdW50ZG93bi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NvdW50ZG93bi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIENvdW50RG93bkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGRhdGU7XG4gIEBJbnB1dCgpIHRpdGxlID0gJ1RoZSB0aW1lIHJlbWFpbmluZyBpczonO1xuICBASW5wdXQoKSBkYXlzVGV4dCA9ICdEYXlzJztcbiAgQElucHV0KCkgaG91cnNUZXh0ID0gJ0hvdXJzJztcbiAgQElucHV0KCkgbWludXRlc1RleHQgPSAnTWludXRlcyc7XG4gIEBJbnB1dCgpIHNlY29uZHNUZXh0ID0gJ1NlY29uZHMnO1xuICBASW5wdXQoKSBpc0N1c3RvbVRlbXBsYXRlID0gZmFsc2U7XG4gIEBJbnB1dCgpIGNhcmRCYWNrZ3JvdW5kQ29sb3IgPSAnc2VhZ3JlZW4nO1xuICBASW5wdXQoKSBjYXJkVGV4dENvbG9yID0gJ3doaXRlJztcbiAgQE91dHB1dCgpIGRheXNDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICBAT3V0cHV0KCkgaG91cnNDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICBAT3V0cHV0KCkgbWludXRlc0NoYW5nZWQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gIEBPdXRwdXQoKSBzZWNvbmRzQ2hhbmdlZDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgZmluaXNoRGF0ZTtcbiAgZGF5c1JlbWFpbmluZzogbnVtYmVyO1xuICBob3Vyc1JlbWFpbmluZzogbnVtYmVyO1xuICBtaW51dGVzUmVtYWluaW5nOiBudW1iZXI7XG4gIHNlY29uZHNSZW1haW5pbmc6IG51bWJlcjtcbiAgaXNGaW5pc2hEYXRlOiBib29sZWFuO1xuICBtb21lbnQgPSBtb21lbnRfO1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZmluaXNoRGF0ZSA9IHRoaXMubW9tZW50KHRoaXMuZGF0ZSk7XG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgY29uc3QgdG9kYXkgPSB0aGlzLm1vbWVudCgpO1xuICAgICAgdGhpcy5kYXlzUmVtYWluaW5nID0gdGhpcy5maW5pc2hEYXRlLmRpZmYodG9kYXksICdkYXlzJykgJSAzNjU7XG4gICAgICB0aGlzLmhvdXJzUmVtYWluaW5nID0gdGhpcy5maW5pc2hEYXRlLmRpZmYodG9kYXksICdob3VycycpICUgMjQ7XG4gICAgICB0aGlzLm1pbnV0ZXNSZW1haW5pbmcgPSB0aGlzLmZpbmlzaERhdGUuZGlmZih0b2RheSwgJ21pbnV0ZXMnKSAlIDYwO1xuICAgICAgdGhpcy5zZWNvbmRzUmVtYWluaW5nID0gdGhpcy5maW5pc2hEYXRlLmRpZmYodG9kYXksICdzZWNvbmRzJykgJSA2MDtcbiAgICAgIHRoaXMuZGF5c0NoYW5nZWQuZW1pdCh0aGlzLmRheXNSZW1haW5pbmcpO1xuICAgICAgdGhpcy5ob3Vyc0NoYW5nZWQuZW1pdCh0aGlzLmhvdXJzUmVtYWluaW5nKTtcbiAgICAgIHRoaXMubWludXRlc0NoYW5nZWQuZW1pdCh0aGlzLm1pbnV0ZXNSZW1haW5pbmcpO1xuICAgICAgdGhpcy5zZWNvbmRzQ2hhbmdlZC5lbWl0KHRoaXMuc2Vjb25kc1JlbWFpbmluZyk7XG4gICAgICB0aGlzLmlzRmluaXNoRGF0ZSA9IHRoaXMuZmluaXNoRGF0ZS5pc1NhbWVPckJlZm9yZSh0b2RheSk7XG4gICAgfSwgMTAwMCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOdW1iZXJUcmFuc2Zvcm1QaXBlIH0gZnJvbSAnLi9waXBlcy9udW1iZXItdHJhbnNmb3JtL251bWJlci10cmFuc2Zvcm0ucGlwZSc7XG5pbXBvcnQgeyBDb3VudERvd25Db21wb25lbnQgfSBmcm9tICcuL2NvdW50ZG93bi5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBDb3VudERvd25Db21wb25lbnQsXG4gICAgTnVtYmVyVHJhbnNmb3JtUGlwZSxcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQ291bnREb3duQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ291bnREb3duTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7SUFNRSx1Q0FBUzs7OztJQUFULFVBQVUsS0FBYTtRQUNyQixJQUFJLEtBQUssRUFBRTtZQUNULElBQUksS0FBSyxHQUFHLEVBQUUsRUFBRTtnQkFDZCxPQUFPLE1BQUksS0FBTyxDQUFDO2FBQ3BCO1lBQ0QsT0FBTyxLQUFHLEtBQU8sQ0FBQztTQUNuQjthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUM7U0FDYjtLQUNGOztnQkFiRixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLG9CQUFvQjtpQkFDM0I7OzhCQUpEOzs7Ozs7O0FDQUE7O3FCQVdtQix3QkFBd0I7d0JBQ3JCLE1BQU07eUJBQ0wsT0FBTzsyQkFDTCxTQUFTOzJCQUNULFNBQVM7Z0NBQ0osS0FBSzttQ0FDRixVQUFVOzZCQUNoQixPQUFPOzJCQUNjLElBQUksWUFBWSxFQUFVOzRCQUN6QixJQUFJLFlBQVksRUFBVTs4QkFDeEIsSUFBSSxZQUFZLEVBQVU7OEJBQzFCLElBQUksWUFBWSxFQUFVO3NCQU9sRSxPQUFPOzs7OztJQUVoQixxQ0FBUTs7O0lBQVI7UUFBQSxpQkFjQztRQWJDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekMsV0FBVyxDQUFDOztZQUNWLElBQU0sS0FBSyxHQUFHLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUM1QixLQUFJLENBQUMsYUFBYSxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUM7WUFDL0QsS0FBSSxDQUFDLGNBQWMsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ2hFLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ3BFLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ3BFLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUMxQyxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDNUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDaEQsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDaEQsS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMzRCxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQ1Y7O2dCQXpDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLHN5R0FBeUM7O2lCQUUxQzs7O3VCQUVFLEtBQUs7d0JBQ0wsS0FBSzsyQkFDTCxLQUFLOzRCQUNMLEtBQUs7OEJBQ0wsS0FBSzs4QkFDTCxLQUFLO21DQUNMLEtBQUs7c0NBQ0wsS0FBSztnQ0FDTCxLQUFLOzhCQUNMLE1BQU07K0JBQ04sTUFBTTtpQ0FDTixNQUFNO2lDQUNOLE1BQU07OzZCQXRCVDs7Ozs7OztBQ0FBOzs7O2dCQU1DLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osa0JBQWtCO3dCQUNsQixtQkFBbUI7cUJBQ3BCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxZQUFZO3FCQUNiO29CQUNELE9BQU8sRUFBRTt3QkFDUCxrQkFBa0I7cUJBQ25CO2lCQUNGOzswQkFqQkQ7Ozs7Ozs7Ozs7Ozs7OzsifQ==