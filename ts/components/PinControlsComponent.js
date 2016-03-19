var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
/**
 * PinControls: a component that holds the controls for a particular pin
 */
var core_1 = require('angular2/core');
var common_1 = require('angular2/common');
var PinControlsComponent = (function () {
    function PinControlsComponent() {
        this.faved = new core_1.EventEmitter();
    }
    PinControlsComponent.prototype.toggleFav = function () {
        this.faved.next(this.pin);
    };
    __decorate([
        core_1.Input()
    ], PinControlsComponent.prototype, "pin");
    __decorate([
        core_1.Output()
    ], PinControlsComponent.prototype, "faved");
    PinControlsComponent = __decorate([
        core_1.Component({
            selector: 'pin-controls',
            directives: [common_1.NgIf],
            template: "\n    <div class='controls'>\n        <div class=\"heart\">\n            <a (click)=\"toggleFav()\">\n                <img src=\"/images/icons/Heart-Empty.png\" *ngIf=\"!pin.faved\" />\n                <img src=\"/images/icons/Heart-Red.png\" *ngIf=\"pin.faved\" />\n            </a>\n        </div>\n    </div>\n    "
        })
    ], PinControlsComponent);
    return PinControlsComponent;
})();
exports.PinControlsComponent = PinControlsComponent;
//# sourceMappingURL=PinControlsComponent.js.map