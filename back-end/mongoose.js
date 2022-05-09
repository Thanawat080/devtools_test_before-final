const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/nlp', {
  useNewUrlParser: true,
}).then(()=>{
    
}).catch((eer)=>{
    console.log('someting wrong', eer)
})