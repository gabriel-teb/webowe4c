
let users = [
            {"id":1,"first_name":"Constantine","last_name":"Lamartine","email":"clamartine0@yale.edu"},
            {"id":2,"first_name":"Iago","last_name":"Lace","email":"ilace1@fotki.com"},
            {"id":3,"first_name":"Hoyt","last_name":"Tiley","email":"htiley2@marriott.com"},
            {"id":4,"first_name":"Monica","last_name":"O\'Crowley","email":"mocrowley3@etsy.com"},
            {"id":5,"first_name":"Laina","last_name":"Jime","email":"ljime4@wunderground.com"},
            {"id":6,"first_name":"Normy","last_name":"Seathwright","email":"nseathwright5@geocities.com"},
            {"id":7,"first_name":"Willie","last_name":"Carryer","email":"wcarryer6@furl.net"},
            {"id":8,"first_name":"Kean","last_name":"Washbrook","email":"kwashbrook7@ox.ac.uk"},
            {"id":9,"first_name":"Georgeanne","last_name":"McCallion","email":"gmccallion8@fema.gov"},
            {"id":10,"first_name":"George","last_name":"Cornock","email":"gcornock9@prnewswire.com"}
        ]

exports.getUsers = (req, res)=>{
    res.json(users);
}

exports.putUser = (req,res)=>{
    const userId = req.params.id;
    const user = users.find(u=> u.id=== userId);

    if(!user) return res.json({message: "Nie ma takiego użytkownika"})

    user.first_name = req.body.first;
    user.last_name = req.body.last;
    user.email = req.body.email;

    res.json(user)
}

exports.deleteUser = (req, res)=>{
    const userId = req.params.id;
    users.filter(u=> u.id !== userId);
    res.json(users)
}
