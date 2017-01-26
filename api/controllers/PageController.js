/**
 * PageController
 *
 * @description :: Server-side logic for managing pages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  /**
   * `PageController.index()`
   */
  index: function (req, res) {
	  var page = req.params;
	  sails.log('params', req.params);
	  return res.redirect('home');
  },

  /**
   * `PageController.home()`
   */
	home: function (req, res) {
 	  return res.view();
   },
	about: function (req, res) {
 	  return res.view();
   },

  /**
   * `PageController.user()`
   */
  user: function (req, res) {
	  sails.log('PageController.user()');
	  sails.models.user.find().exec(function (err, users) {
		  sails.log('err', err);
		  if (err) return res.badRequest(err);
		  sails.log('users', users)
		  return res.view({ users: users });
	  });
  }
};
