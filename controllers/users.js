const User = require("../models/user")


exports.getUsers = async (req, res) => {
    try {
        const user = await User.findAll();
        res.json(user)
    } catch (error) {
        res.status(500).json({ message: "Błąd serwera", error })
    }
}

exports.getSingleUser = async (req, res) => {
    const userId = parseInt(req.params.id);

    try {
        const user = await User.findByPk(userId)
        if(!user) return res.status(404).json({message: "Użytkownik nieodnaleziony"})
        res.json(user)
    } catch (error) {
        res.status(500).json({ message: "Błąd serwera", error })
    }
}

exports.createUser = async (req, res) => {
    try {
        const { name, email } = req.body
        const newUser = await User.create({ name, email })

        res.status(201).json(newUser)
    } catch (error) {
        res.status(500).json({ message: "Błąd serwera", error })
    }
}

exports.editUser = async (req, res) => {
    const userId = parseInt(req.params.id);
    try {
        const { name, email } = req.body
        const user = await User.findByPk(userId)
        if(!user) return res.status(404).json({message: "Użytkownik nieodnaleziony"})

       await user.update({name, email})
        res.json(user)
    } catch (error) {
        res.status(500).json({ message: "Błąd serwera", error })
    }
}

exports.deleteUser = async (req, res) => {
       const userId = parseInt(req.params.id);
    try {
        const user = await User.findByPk(userId)
        if(!user) return res.status(404).json({message: "Użytkownik nieodnaleziony"})
        await user.destroy()
        res.json(user)
    } catch (error) {
        res.status(500).json({ message: "Błąd serwera", error })
    }
}
