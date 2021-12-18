const { Router } = require('express')
const router = Router()

const {
renderSignUpForm,
  signup,
  renderSignInForm,
  signin,
  logout,
} = require('../controllers/users.controller')

/* New user */
router.get('/users/signup', renderSignUpForm)
router.post('/users/signup', signup)

/* SignIn user */
router.get('/users/signin', renderSignInForm)
router.post('/users/signin', signin)

/* Logout */
router.get('/users/logout', logout)

module.exports = router
