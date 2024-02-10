const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/NewMongoDataBase").then(()=>{
    console.log("Connected to MongoDB successfull...")
}).catch((err)=>{
    console.error(err);
});

// what is mongoose schema  defines the structure of  data in the database (document)
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

// where as mongoose model provides an interface to the database for creating, querying, updating, deleting records etc.
//  collection creation with help of model
// it should in singular Playlist✅ but not Playlists❌ because its a single object
const Playlist = new mongoose.model("Playlist",PlaylistSchema);

// After creating collection create a document or insert

const createDocument = async ()=>{
    // and when ever we use async it could be better to handle err
    try{
        const jsPlaylist = new Playlist({
            name: "JS Tutorials",  
            ctype:"Front End",  
            videos:503, 
            authoer:"Omprakash Media" ,
            active: true
        });

        const nodePlaylist = new Playlist({
            name: "NodeJs Tutorials",  
            ctype:"Back End",  
            videos:530, 
            authoer:"Omprakash Media" ,
            active: true
        });
        
        const mongodbPlaylist = new Playlist({
            name: "MongoDB Tutorials",  
            ctype:"Back End",  
            videos:5, 
            authoer:"Omprakash Media" ,
            active: true
        });

        const expressPlaylist = new Playlist({
            name: "ExpressJs Tutorials",  
            ctype:"Back End",  
            videos:53, 
            authoer:"Omprakash Media" ,
            active: true
        });
        // this save return promise but will use await in async  function
        // const result = await reactPlaylist.save(); // saving individually
        // insert multiple document using one line
        const result = await Playlist.insertMany([jsPlaylist,nodePlaylist,mongodbPlaylist,expressPlaylist]);
        console.log(result);
    }catch(err){
        console.log(err);
    }
}
// calling function
// createDocument(); // we are commenting this so when ever we run to read data we dont want to make it create again and again


// Read or Querying the documents using mongoose in express app
const getPlaylist = async () => {
     try{
          let playlists = await Playlist.find() ; // find all data from collection
          
          // select specific fields of a documnet
          /*let selectedFields=await Playlist.find( {}, 'name ctype' );
          console.log("selected Fields : ",selectedFields)*/

          // skip and limit method for pagination
          /*let paginateData=await Playlist.find().skip(1).limit(2);
          console.log('Pagination Data',paginateData)*/

         // sorting the data
         /*let sortByName=await Playlist.find().sort('name');
         console.log('Sort By Name ',sortByName)

         let sortByVideos=await Playcount.find().sort('-videos')
         console.log('Sort By Videos',sortByVideos)*/

         // search by field value
         /*let searchFieldValue=await Playlist.find({ctype:'Front End'})
         console.log('Search By Value',searchFieldValue)*/

         // Regular Expression to perform pattern matching on string values
         let regExpSearch=await Playlist.find({ name:/^Express/i })     
         console.log('Reg Exp Search',regExpSearch)  

         process.exit(); 
     } catch (error) {
         console.log(`Error Occured ${error}`);
     }
 }

//  comparison query operators using mongoose and node js
 const getDocument = async()=>{
    try{
        const result = await Playlist
        // .find({videos: {$gt:100}}) // greater than 100
        .find({ctype: "Back End"}) // comparing  strings
        .select({name:1})
        .limit(5);
    console.log(result);
    }catch(err){
        console.log(err);
    }
 }


// getPlaylist();
getDocument();