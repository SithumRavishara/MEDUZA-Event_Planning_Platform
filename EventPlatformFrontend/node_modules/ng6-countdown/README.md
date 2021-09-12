# Ng6 Countdown

A simple countdown for angular 6 based in materialize-css.

## Pre-requisites

* [Materilize-css](https://www.npmjs.com/package/materialize-css)
* [Moment](https://www.npmjs.com/package/moment) 

## Quickstart:
You can install run the next command.
 * `npm install ng6-countdown`

in app.module file.
```typescript
import { BrowserModule } from  '@angular/platform-browser';
import { NgModule } from  '@angular/core';

import { CountDownModule } from  'ng6-countdown';

import { AppComponent } from  './app.component';

@NgModule({
declarations: [AppComponent],
imports: [
BrowserModule,
CountDownModule
....
],
providers: [],
bootstrap: [AppComponent]
})
export  class  AppModule { }
```
in html file.
```html
<lib-countdown  date="October 18, 2019 00:33"></lib-countdown>
```
the result is:
![default](https://lh3.googleusercontent.com/aDX1oHCDK9Lx9J4kQMZn1mxRNRJjC6zz9L277YLNNmVyhDqv1OGCF1lgywNN4CK0Khk3oSiI2H4)
* Custom card colors and bind finish date from controller.
html file
```html
<!-- Set card background color to white and set card text color to black -->
<lib-countdown
[date]="finishDate"
cardBackgroundColor="white"
cardTextColor="black">
</lib-countdown>
```
controller file
```typescript
import { Component } from  '@angular/core';
@Component({
selector:  'app-root',
templateUrl:  './app.component.html',
styleUrls: ['./app.component.css']
})
export  class  AppComponent {
finishDate  =  'October 18, 2019 00:33';
}
```
the result is: 
![](https://lh3.googleusercontent.com/sg3H49in96Zhx0PhLnpw86GpNIZjhJuWIklTcaxR_fHCGNH8PI81kcNC0IybxymlhRg2RT7gr5w "custom")
* Custom template.
html file
```html
<!-- Show time remainig with custom template -->

<lib-countdown
[date]="finishDate"
isCustomTemplate="isCustomTemplate"
(daysChanged)="onDaysChanged($event)"
(hoursChanged)="onHoursChanged($event)"
(minutesChanged)="onMinutesChanged($event)"
(secondsChanged)="onSecondsChanged($event)">
<div  class="row">
  <div  class="col s12">
    <div  class="card">
      <div  class="card-image waves-effect waves-block waves-light">
        <p  class="number-style center-align">  <strong  class="text-bold">Days Remaining: </strong> {{days}} </p><br>
        <p  class="number-style center-align">  <strong  class="text-bold">Hours Remaining: </strong> {{hours}} </p><br>
        <p  class="number-style center-align">  <strong  class="text-bold">Minutes Remaining: </strong> {{minutes}} </p><br>
        <p  class="number-style center-align">  <strong  class="text-bold">Seconds Remaining: </strong> {{seconds}} </p><br>
      </div>
      <div  class="card-content"  [style.background]="backgroundColor">
        <span  class="card-title activator white-text text-darken-4 center-align"  [style.color]="textColor">I'm a custom card</span>
      </div>
    </div>
  </div>
</div>
</lib-countdown>
```
in controller file.
```typescript
import { Component } from  '@angular/core';

@Component({
selector:  'app-root',
templateUrl:  './app.component.html',
styleUrls: ['./app.component.css']
})
export  class  AppComponent {
  title = 'app';
  finishDate = 'October 18, 2019 00:33';
  isCustomTemplate = true;
  days;
  hours;
  minutes;
  seconds;
  backgroundColor = 'red';
  textColor = 'black';

onDaysChanged(days) {
this.days  =  days;
}

onHoursChanged(hours) {
this.hours  =  hours;
}

onMinutesChanged(minutes) {
this.minutes  =  minutes;
}

onSecondsChanged(seconds) {
this.seconds  =  seconds;
}
}
```
the result is:
![](https://lh3.googleusercontent.com/dCJcYWFTeOM-9Qlo6udShEj-0Io3MTyfFKPR-YHQ75hWxRxPaCvZ1JkpdFw0akuCmNhoUkSeem4 "custom-template")
## Documentation

### Inputs
|  NAME|TYPE|DESCRIPTION|DEFAULT VALUE|
|-----|-----|-----------|--------|
|date|`string`|represents the finish date.|none|
|title|`string`|represents the title in html file|The time remaining is:
|daysText|`string`|represents days title in html file|Days|
|hoursText  |`string`|represents hours title in html file|Hours|
|minutesText  |`string`|represents minutes title in html file|Minutes|
|secondsText  |`string`|represents seconds title in html file|Seconds|
|isCustomTemplate  |`boolean`|flag to indicate if use a custom template|false|
|cardBackgroundColor  |`string`|represents background color of card|seagreen|
|cardTextColor  |`string`|represents text color of card|white|

### Outpouts
|  NAME|TYPE|DESCRIPTION|EMIT VALUE|
|-----|-----|-----------|--------|
|daysChanged|`EventEmitter`|fired an event when days value changed.|number|
|hoursChanged|`EventEmitter`|fired an event when hours value changed.|number|
|minutesChanged|`EventEmitter`|fired an event when minutes value changed.|number|
|secondsChanged|`EventEmitter`|fired an event when seconds value changed.|number|

## Supported Browsers:

 - Google Chrome
 - Firefox
 - Edge
 - Internte Explorer ( You should enable polyfills to enable IE browsers)

