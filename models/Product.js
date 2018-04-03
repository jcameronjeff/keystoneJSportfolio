var keystone = require('keystone');

var Types = keystone.Field.Types;

var Product = new keystone.List('Product', {
  map: {name: 'title'},
  singular: 'Product',
  plural: 'Products',
  autokey: {path: 'slug', from: 'title', unique: true}
});

Product.add({
  title: {type: String, required: true},
  author: { type: Types.Relationship, ref: 'User' },
  publishedAt: Date,
  image: { type: Types.CloudinaryImage },
  content: {
       brief: { type: Types.Html, wysiwyg: true, height: 150 },
       extended: { type: Types.Html, wysiwyg: true, height: 400 }
   }
});

Product.register();
