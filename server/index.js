import express from 'express'
import cors from 'cors'
import multer from 'multer';
import { Queue } from 'bullmq';

const queue = new Queue("file-upload-queue",{
    connection : {
        host : "localhost",
        port : "6379"
    }
})

const PORT = 8000;
const app = express();
app.use(cors());

const storage = multer.diskStorage({
    destination : function(req, file, cb){
        cb(null, "uploads/")
    },
    filename : function(req, file, cb){
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
        cb(null, `${uniqueSuffix}-${file.originalname}`)
    }
})

const upload = multer({ storage : storage })

app.get("/",(req, res)=>{
    res.json("Hello Jiii")
})

app.post('/pdf', upload.single('pdf') ,async (req, res, next) => {
    await queue.add("uploaded-files", JSON.stringify({
        filename : req.file.originalname,
        destination : req.file.destination,
        path : req.file.path
    }))
    return res.json({msg : "File Uploaded"})
})

app.listen(PORT, ()=>{
    console.log("Server is running");
})