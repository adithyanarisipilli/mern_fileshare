import File from '../models/file.js';


export const uploadImage = async (req, res) => {
    const fileObj = {
        path: req.file.path,
        name: req.file.originalname,
    };
    try {
        const file = await File.create(fileObj);
        const baseUrl = process.env.BASE_URL || `http://localhost:${process.env.PORT || 8000}`;
        res.status(201).json({ path: `${baseUrl}/file/${file._id}` });
    } catch (error) {
        console.error("Upload failed with error: " + error);
    }
};

export const getImage =async(req,res)=>{
   
   try {
      console.log(req.params.fileId);
      const file=await File.findById(req.params.fileId);
      file.downloadCount++;
      await file.save();
      res.download(file.path,file.name);
   } catch (error) {
      console.error("Upload failed with error: "+error);
   }
};