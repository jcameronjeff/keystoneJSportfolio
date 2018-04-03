var keystone = require('keystone');

exports = module.exports = function(req, res){
  var view = new keystone.View(req, res);
  var locals = res.locals;

  //set locals
  locals.section = 'portfolio';

  //Load Products

  view.query('projects', keystone.list('Project').model.find());

  view.render('projects');
}
