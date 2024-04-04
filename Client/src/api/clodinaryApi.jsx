import axios from "axios"

export const uploadCloudinary=async(file)=>{
    const formData=new FormData()
    formData.append("file",file)
    formData.append("upload_preset","ze06wqnc")
    const {data}=await axios.post("https://api.cloudinary.com/v1_1/dvax6v4vx/image/upload",formData)
    return {publicId:data?.public_id,url:data?.secure_url}
}