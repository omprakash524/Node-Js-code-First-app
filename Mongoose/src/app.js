const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/NewMongoDataBase").then(()=>{
    console.log("Connected to MongoDB successfull...")
}).catch((err)=>{
    console.error(err);
});

// what is mongoose schema  defines the structure of  data in the database (document)
// where as mongoose model provides an interface to the database for creating, querying, updating, deleting records etc.
const PlaylistSchema = new mongoose.Schema({
    name :{type:String, required:true},
    ctype: String,
    videos: Number,
    authoer: String,
    active: Boolean,
    date:{type:Date,
    default:Date.now
}
});

//  collection creation
const Playlist = new mongoose.model("Playlist",PlaylistSchema);

// After creating collection create a document or insert

const createDocument = async ()=>{
    // and when ever we use async it could be better to handle err
    try{
        const reactPlaylist = new Playlist({
            name: "Node Js Tutorials",  
            ctype:"Back End",  
            videos:53, 
            authoer:"Omprakash Media" ,
            active: true
        });
        // this save return promise but will use await in async  function
        const result = await reactPlaylist.save();
        console.log(result);
    }catch(err){
        console.log(err);
    }
}
createDocument();

// this save() method return promise  so we can use then and catch method for handling the response of that promise
// reactPlaylist.save().then((doc) => {
//     console.log(`playlist created ${doc}`);
// }).catch((err) => {
//     console.log(err);
// });









// const userSchema= new mongoose.Schema({
//     name:{type : String , required : true}, 
//     email:{type :String,required :true },   
//     email:{type :String,required:true },
//     password:{type:String,required:true}
// })

// let User = mongoose.model('User',userSchema)   // creating model from schema

// let user = new User({                         // creating object of the model
//     name:"John Doe",
//     email:"john@gmail.com",
//     password:"password"
// })

// user.save().then((doc)=>{
//     console.log("Data saved successfully!");
//     console.log(doc);
// }).catch((err)=>console.error(err));

// /*
// find data in database by id
// */
// User.findById(user.id).then((result)=>{
//     console.log(`Got result ${result}`);
// }).catch((err)=>console.error(err))

// /*
// update data in database
// */
// // User.findOneAndUpdate({name:'John Doe'}, {name:'Jane Doe'}).then((result)=>{
// //     console.log(`Updated result ${result}`);
// // }).catch((err)=>console.error(err))

// // find & update multiple documents
// // User.find({name:'Jane Doe'}).limit(1).sort({date:-1}).exec((err,docs)=>{
// //     if(!err){
// //         let doc = docs[0];