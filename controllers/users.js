const User = require("../models/user")


exports.getUsers = async (req, res)=>{
    try{
        const user = await User.findAll();
        res.json(user) 
    }catch(error){
        res.status(500).json({message: "Błąd serwera", error})
    }
}

exports.putUser = (req,res)=>{
    const userId = parseInt(req.params.id);
    const user = users.find(u=> u.id=== userId);

    if(!user) return res.json({message: "Nie ma takiego użytkownika"})

    user.first_name = req.body.first;
    user.last_name = req.body.last;
    user.email = req.body.email;

    res.json(user)
}

exports.deleteUser = (req, res)=>{
    const userId = parseInt(req.params.id);
    users.filter(u=> u.id !== userId);
    res.json(users)
}
