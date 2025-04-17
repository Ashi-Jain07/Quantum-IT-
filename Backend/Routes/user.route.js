import { Login, Register } from "../Controllers/user.controller.js"

export const userRoute = (app) => {
    app.post('/login', Login)
    app.post('/register', Register)
}