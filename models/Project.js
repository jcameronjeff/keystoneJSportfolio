var keystone = require('keystone');

var Types = keystone.Field.Types;

var Project = new keystone.List('Project', {
  map: {name: 'title'},
  singular: 'Project',
  plural: 'Projects',
  autokey: {path: 'slug', from: 'title', unique: true}
});

Project.add({
  title: {type: String, required: true},
  author: { type: Types.Relationship, ref: 'User' },
  publishedAt: Date,
  image: { type: Types.CloudinaryImage },
  content: {
       brief: { type: Types.Html, wysiwyg: true, height: 150 },
       extended: { type: Types.Html, wysiwyg: true, height: 400 }
   }
});

Project.register();
