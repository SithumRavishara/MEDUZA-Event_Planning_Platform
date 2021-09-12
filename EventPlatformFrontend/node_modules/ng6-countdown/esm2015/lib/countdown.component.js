/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as moment_ from 'moment';
export class CountDownComponent {
    constructor() {
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
    ngOnInit() {
        this.finishDate = this.moment(this.date);
        setInterval(() => {
            /** @type {?} */
            const today = this.moment();
            this.daysRemaining = this.finishDate.diff(today, 'days') % 365;
            this.hoursRemaining = this.finishDate.diff(today, 'hours') % 24;
            this.minutesRemaining = this.finishDate.diff(today, 'minutes') % 60;
            this.secondsRemaining = this.finishDate.diff(today, 'seconds') % 60;
            this.daysChanged.emit(this.daysRemaining);
            this.hoursChanged.emit(this.hoursRemaining);
            this.minutesChanged.emit(this.minutesRemaining);
            this.secondsChanged.emit(this.secondsRemaining);
            this.isFinishDate = this.finishDate.isSameOrBefore(today);
        }, 1000);
    }
}
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
if (false) {
    /** @type {?} */
    CountDownComponent.prototype.date;
    /** @type {?} */
    CountDownComponent.prototype.title;
    /** @type {?} */
    CountDownComponent.prototype.daysText;
    /** @type {?} */
    CountDownComponent.prototype.hoursText;
    /** @type {?} */
    CountDownComponent.prototype.minutesText;
    /** @type {?} */
    CountDownComponent.prototype.secondsText;
    /** @type {?} */
    CountDownComponent.prototype.isCustomTemplate;
    /** @type {?} */
    CountDownComponent.prototype.cardBackgroundColor;
    /** @type {?} */
    CountDownComponent.prototype.cardTextColor;
    /** @type {?} */
    CountDownComponent.prototype.daysChanged;
    /** @type {?} */
    CountDownComponent.prototype.hoursChanged;
    /** @type {?} */
    CountDownComponent.prototype.minutesChanged;
    /** @type {?} */
    CountDownComponent.prototype.secondsChanged;
    /** @type {?} */
    CountDownComponent.prototype.finishDate;
    /** @type {?} */
    CountDownComponent.prototype.daysRemaining;
    /** @type {?} */
    CountDownComponent.prototype.hoursRemaining;
    /** @type {?} */
    CountDownComponent.prototype.minutesRemaining;
    /** @type {?} */
    CountDownComponent.prototype.secondsRemaining;
    /** @type {?} */
    CountDownComponent.prototype.isFinishDate;
    /** @type {?} */
    CountDownComponent.prototype.moment;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY291bnRkb3duLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvdW50ZG93bi8iLCJzb3VyY2VzIjpbImxpYi9jb3VudGRvd24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRS9FLE9BQU8sS0FBSyxPQUFPLE1BQU0sUUFBUSxDQUFDO0FBT2xDLE1BQU07O3FCQUVhLHdCQUF3Qjt3QkFDckIsTUFBTTt5QkFDTCxPQUFPOzJCQUNMLFNBQVM7MkJBQ1QsU0FBUztnQ0FDSixLQUFLO21DQUNGLFVBQVU7NkJBQ2hCLE9BQU87MkJBQ2MsSUFBSSxZQUFZLEVBQVU7NEJBQ3pCLElBQUksWUFBWSxFQUFVOzhCQUN4QixJQUFJLFlBQVksRUFBVTs4QkFDMUIsSUFBSSxZQUFZLEVBQVU7c0JBT2xFLE9BQU87Ozs7O0lBRWhCLFFBQVE7UUFDTixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pDLFdBQVcsQ0FBQyxHQUFHLEVBQUU7O1lBQ2YsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUMvRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDaEUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDcEUsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDcEUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUNoRCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUNoRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzNELEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDVjs7O1lBekNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsc3lHQUF5Qzs7YUFFMUM7OzttQkFFRSxLQUFLO29CQUNMLEtBQUs7dUJBQ0wsS0FBSzt3QkFDTCxLQUFLOzBCQUNMLEtBQUs7MEJBQ0wsS0FBSzsrQkFDTCxLQUFLO2tDQUNMLEtBQUs7NEJBQ0wsS0FBSzswQkFDTCxNQUFNOzJCQUNOLE1BQU07NkJBQ04sTUFBTTs2QkFDTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgKiBhcyBtb21lbnRfIGZyb20gJ21vbWVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1jb3VudGRvd24nLFxuICB0ZW1wbGF0ZVVybDogJy4vY291bnRkb3duLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY291bnRkb3duLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ291bnREb3duQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgZGF0ZTtcbiAgQElucHV0KCkgdGl0bGUgPSAnVGhlIHRpbWUgcmVtYWluaW5nIGlzOic7XG4gIEBJbnB1dCgpIGRheXNUZXh0ID0gJ0RheXMnO1xuICBASW5wdXQoKSBob3Vyc1RleHQgPSAnSG91cnMnO1xuICBASW5wdXQoKSBtaW51dGVzVGV4dCA9ICdNaW51dGVzJztcbiAgQElucHV0KCkgc2Vjb25kc1RleHQgPSAnU2Vjb25kcyc7XG4gIEBJbnB1dCgpIGlzQ3VzdG9tVGVtcGxhdGUgPSBmYWxzZTtcbiAgQElucHV0KCkgY2FyZEJhY2tncm91bmRDb2xvciA9ICdzZWFncmVlbic7XG4gIEBJbnB1dCgpIGNhcmRUZXh0Q29sb3IgPSAnd2hpdGUnO1xuICBAT3V0cHV0KCkgZGF5c0NoYW5nZWQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gIEBPdXRwdXQoKSBob3Vyc0NoYW5nZWQ6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gIEBPdXRwdXQoKSBtaW51dGVzQ2hhbmdlZDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgQE91dHB1dCgpIHNlY29uZHNDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICBmaW5pc2hEYXRlO1xuICBkYXlzUmVtYWluaW5nOiBudW1iZXI7XG4gIGhvdXJzUmVtYWluaW5nOiBudW1iZXI7XG4gIG1pbnV0ZXNSZW1haW5pbmc6IG51bWJlcjtcbiAgc2Vjb25kc1JlbWFpbmluZzogbnVtYmVyO1xuICBpc0ZpbmlzaERhdGU6IGJvb2xlYW47XG4gIG1vbWVudCA9IG1vbWVudF87XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5maW5pc2hEYXRlID0gdGhpcy5tb21lbnQodGhpcy5kYXRlKTtcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBjb25zdCB0b2RheSA9IHRoaXMubW9tZW50KCk7XG4gICAgICB0aGlzLmRheXNSZW1haW5pbmcgPSB0aGlzLmZpbmlzaERhdGUuZGlmZih0b2RheSwgJ2RheXMnKSAlIDM2NTtcbiAgICAgIHRoaXMuaG91cnNSZW1haW5pbmcgPSB0aGlzLmZpbmlzaERhdGUuZGlmZih0b2RheSwgJ2hvdXJzJykgJSAyNDtcbiAgICAgIHRoaXMubWludXRlc1JlbWFpbmluZyA9IHRoaXMuZmluaXNoRGF0ZS5kaWZmKHRvZGF5LCAnbWludXRlcycpICUgNjA7XG4gICAgICB0aGlzLnNlY29uZHNSZW1haW5pbmcgPSB0aGlzLmZpbmlzaERhdGUuZGlmZih0b2RheSwgJ3NlY29uZHMnKSAlIDYwO1xuICAgICAgdGhpcy5kYXlzQ2hhbmdlZC5lbWl0KHRoaXMuZGF5c1JlbWFpbmluZyk7XG4gICAgICB0aGlzLmhvdXJzQ2hhbmdlZC5lbWl0KHRoaXMuaG91cnNSZW1haW5pbmcpO1xuICAgICAgdGhpcy5taW51dGVzQ2hhbmdlZC5lbWl0KHRoaXMubWludXRlc1JlbWFpbmluZyk7XG4gICAgICB0aGlzLnNlY29uZHNDaGFuZ2VkLmVtaXQodGhpcy5zZWNvbmRzUmVtYWluaW5nKTtcbiAgICAgIHRoaXMuaXNGaW5pc2hEYXRlID0gdGhpcy5maW5pc2hEYXRlLmlzU2FtZU9yQmVmb3JlKHRvZGF5KTtcbiAgICB9LCAxMDAwKTtcbiAgfVxufVxuIl19