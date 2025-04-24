import FileUploader from '@/components/ui/FileUploader'
import React from 'react'

const page = () => {

    return (
        <div className='grid grid-cols-2 text-white h-screen bg-black my-background'>
            <div>
                <FileUploader/>
            </div>
            <div className='border-l'>2</div>
        </div>
    )

}

export default page