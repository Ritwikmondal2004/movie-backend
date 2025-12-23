const threateController=require('../controllers/theatreController');


const routes=(app)=>{
    app.post(
    '/mba/api/v1/theatre',
    threateController.create
    );
}
module.exports=routes;