const helpers = {}

helpers.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    // si esta autenticado
    return next()
  } else {
    req.flash('error_msg', 'Not authorized')
    res.redirect('/users/signin')
  }
}

module.exports = helpers
