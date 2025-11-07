let cars =[{"id":1,"nazwa":"Subaru"},
{"id":2,"nazwa":"BMW"},
{"id":3,"nazwa":"Volkswagen"},
{"id":4,"nazwa":"Ford"},
{"id":5,"nazwa":"Mazda"},
{"id":6,"nazwa":"Volvo"},
{"id":7,"nazwa":"Mercedes-Benz"},
{"id":8,"nazwa":"Buick"},
{"id":9,"nazwa":"Pontiac"},
{"id":10,"nazwa":"Suzuki"}]

exports.getCars = (req,res)=>{
    res.json(cars)
}

exports.putCar = (req,res)=>{
    const carId = parseInt(req.params.id);
    const car = cars.find(c=> c.id===carId)
    if(!car)  return res.json({message: "nie ma takiego samochodu"})
    car.nazwa =  req.body.marka;
    res.json(car)
}

exports.deleteCar= (req, res)=>{
   const carId = parseInt(req.params.id);
    const car = cars.find(c=> c.id===carId)
    if(!car)  return res.json({message: "nie ma takiego samochodu"})
    cars = cars.filter(c=> c.id!==carId)

    res.json(cars)
}

exports.getSingleCar = (req,res)=>{
const carId = parseInt(req.params.id);
    const car = cars.find(c=> c.id===carId)
    if(!car)  return res.json({message: "nie ma takiego samochodu"})
    res.json(car)
}

exports.postCar = (req,res)=>{
    const newCar = {
        id: Date.now(),
        nazwa: req.body.marka
    }
    cars.push(newCar)
    res.json(cars)
}