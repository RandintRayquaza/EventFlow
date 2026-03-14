import { registerUser, loginUser } from "../services/auth.services.js"

export const register = async (req, res)=>{
    try {
        const user = await registerUser(req.body)
        res.status(201).json(
            { 
            message: "user registered successfully",
            user
         }
        )
    } catch (error) {
        res.status(400).json({ error: error.message })

    }
}

export const login = async (req, res)=>{
    try {
        const { user, token } = await loginUser(req.body)
        res.status(200).json(
            { 
            message: "user logged in successfully",
            user,
            token
         }
        )
    }
    catch (error) {
        res.status(400).json({ error: error.message })
    }
}