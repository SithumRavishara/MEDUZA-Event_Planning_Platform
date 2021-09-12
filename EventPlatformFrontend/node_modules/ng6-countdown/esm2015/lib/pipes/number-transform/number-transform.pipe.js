/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
export class NumberTransformPipe {
    /**
     * @param {?} value
     * @return {?}
     */
    transform(value) {
        if (value) {
            if (value < 10) {
                return `0${value}`;
            }
            return `${value}`;
        }
        else {
            return '00';
        }
    }
}
NumberTransformPipe.decorators = [
    { type: Pipe, args: [{
                name: 'appNumberTransform'
            },] }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVtYmVyLXRyYW5zZm9ybS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vY291bnRkb3duLyIsInNvdXJjZXMiOlsibGliL3BpcGVzL251bWJlci10cmFuc2Zvcm0vbnVtYmVyLXRyYW5zZm9ybS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUtwRCxNQUFNOzs7OztJQUNKLFNBQVMsQ0FBQyxLQUFhO1FBQ3JCLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxLQUFLLEdBQUcsRUFBRSxFQUFFO2dCQUNkLE9BQU8sSUFBSSxLQUFLLEVBQUUsQ0FBQzthQUNwQjtZQUNELE9BQU8sR0FBRyxLQUFLLEVBQUUsQ0FBQztTQUNuQjthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUM7U0FDYjtLQUNGOzs7WUFiRixJQUFJLFNBQUM7Z0JBQ0osSUFBSSxFQUFFLG9CQUFvQjthQUMzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAnYXBwTnVtYmVyVHJhbnNmb3JtJ1xufSlcbmV4cG9ydCBjbGFzcyBOdW1iZXJUcmFuc2Zvcm1QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybSh2YWx1ZTogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGlmICh2YWx1ZSA8IDEwKSB7XG4gICAgICAgIHJldHVybiBgMCR7dmFsdWV9YDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBgJHt2YWx1ZX1gO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJzAwJztcbiAgICB9XG4gIH1cbn1cbiJdfQ==