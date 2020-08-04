const express = require('express')
const routes = express.Router()

const sessionController = require('../app/controllers/sessionController')
const userController = require('../app/controllers/userController')

const validator = require('../app/validators/user')

// Login/Logout 
// routes.get('/login', sessionController.loginForm)
// routes.post('/login', sessionController.login)
// routes.post('/logout', sessionController.logout)

// // Reset Password/forgot
// routes.get('/forgot-password', sessionController.forgotForm)
// routes.get('/password-reset', sessionController.resetForm)
// routes.post('/forgot-password', sessionController.forgot)
// routes.post('/password-reset', sessionController.reset)



// // User Register User Controller
routes.get('/register', userController.registerForm)
routes.post('/register', validator.post, userController.post)

routes.get('/', userController.show)
// routes.put('/', userController.update)
// routes.delete('/', userController.delete)

module.exports = routes