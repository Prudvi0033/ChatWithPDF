import { Upload } from 'lucide-react'
import React from 'react'

const FileUploader = () => {
    return (
        <div className='h-screen flex items-center justify-center'>
            <div className=''>
                <Upload />
            </div>
        </div>
    )
}

export default FileUploader