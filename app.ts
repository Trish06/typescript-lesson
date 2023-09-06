interface ModelType {
  type: string,
  color: string,
  event : ()=> void;
}

class Vehicle {
  modelType : ModelType

  constructor(model: ModelType ) {
    this.modelType = model;
  }
}

let model_type = {
  type : 'Car',
  color : 'Blue',
  event : () => {
    console.log('Event Function')
  }
}

const car = new Vehicle(model_type);

console.log(car)