import { OnInit, EventEmitter } from '@angular/core';
import * as moment_ from 'moment';
export declare class CountDownComponent implements OnInit {
    date: any;
    title: string;
    daysText: string;
    hoursText: string;
    minutesText: string;
    secondsText: string;
    isCustomTemplate: boolean;
    cardBackgroundColor: string;
    cardTextColor: string;
    daysChanged: EventEmitter<number>;
    hoursChanged: EventEmitter<number>;
    minutesChanged: EventEmitter<number>;
    secondsChanged: EventEmitter<number>;
    finishDate: any;
    daysRemaining: number;
    hoursRemaining: number;
    minutesRemaining: number;
    secondsRemaining: number;
    isFinishDate: boolean;
    moment: typeof moment_;
    ngOnInit(): void;
}
