import cloudinaryModule  from 'cloudinary' ;
import dotenv from 'dotenv'
dotenv.config()


const cloudinary = cloudinaryModule.v2

    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET 
      });


const uploadImg = async(file)=>{
    const options = {
      use_filename: true,
      unique_filename: false,
      overwrite: true,
      folder:'News',
      width:400 ,
      height:400 ,
      crop: "fill"
  };
 
  try {
    const result = await cloudinary.uploader.upload(file , options)
    console.log(result , 'this is result from clodinary file');
    return result.secure_url
  } catch (err) {
    console.log(err);
  }
}

export default uploadImg