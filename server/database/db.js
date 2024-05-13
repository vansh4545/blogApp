import mongoose  from "mongoose"


const Connection= async (username,password) =>{
  const URL= `mongodb+srv://${username}:${password}@cluster0.ymwz4v3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
  try{
       await mongoose.connect(URL, {useNewUrlParser:true});
       console.log('database connected successfully');
    }
  catch(error){
       console.log('database connected unsuccesfully',error);
  }
}

export default Connection;