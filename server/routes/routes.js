module.exports = (app) => {
   app.get('/', (req, res, next) => {
      res.render('home', {"title": "Home"});
   });

   app.get('/product', (req, res, next) => {
      res.render('product', {"title": "Products"});
   });

   app.get('/contact', (req, res, next) => {
      res.render('contact', {"title": "Contact"});
   });
};