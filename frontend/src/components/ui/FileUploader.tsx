'use client'
import { CloudUpload } from 'lucide-react'
import React from 'react'
import { Montserrat } from "next/font/google"
import axios from 'axios'
import { toast } from 'react-hot-toast'
const monte = Montserrat({ subsets: ["latin"] })

const fileUploadHandler = () => {
    const elem = document.createElement('input')
    elem.setAttribute('type','file')
    elem.setAttribute('accept','application/pdf')
    elem.addEventListener('change',async (event) => {
        if(elem.files && elem.files.length > 0){
            const file = elem.files.item(0)
            if(file){
                const formData = new FormData();
                formData.append('pdf', file);

                try {
                    const response = await axios.post("http://localhost:8000/pdf", formData, {
                        headers : {
                            "Content-Type" : 'multipart/form-data'
                        }
                    });

                    toast.success("File Uploaded")
                    console.log(response);
                    

                } catch (error) {
                    toast.error("File Upload Failed")
                    console.log("Error in file upload",error);
                }
            }
        }
    })
    elem.click()
}

const FileUploader = () => {
    return (
        <div className='h-screen flex items-center justify-center px-16'>
            <div onClick={fileUploadHandler} className='bg-white/40 rounded-lg cursor-pointer flex flex-col items-center justify-center w-full h-42'>
                <CloudUpload size={35} />
                <p className={`text-xs/relaxed text-slate-900/80 font-semibold ${monte.className}`}>Click to upload PDF</p>
            </div>
        </div>
    )
}

export default FileUploader