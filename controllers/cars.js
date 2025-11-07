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
    const carId = req.params.id;

    if(!car)  return res.json({})
}