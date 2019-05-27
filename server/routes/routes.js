module.exports = (app) => {
   app.get('/', (req, res, next) => {
      res.render('home', {"title": "Home"});
   });

   app.get('/product', (req, res, next) => {
      res.render('product', {"title": "Products"});
      // res.send();
      // console.log("hello");
   });

   app.get('/contact', (req, res, next) => {
      res.render('contact', {"title": "Contact"});
   });

   app.get('/test', (req, res, next) => {
      res.send();
      console.log("Test");
   });
};