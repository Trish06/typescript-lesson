var Vehicle = /** @class */ (function () {
    function Vehicle(model) {
        this.modelType = model;
    }
    return Vehicle;
}());
var model_type = {
    type: 'Car',
    color: 'Blue',
    event: function () {
        console.log('Event Function');
    }
};
var car = new Vehicle(model_type);
console.log(car);
