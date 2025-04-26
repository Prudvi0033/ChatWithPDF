import { Worker } from 'bullmq';
import { QdrantVectorStore } from "@langchain/qdrant";
import { OpenAIEmbeddings } from "@langchain/openai";
import { Document } from "@langchain/core/documents";
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";


const worker = new Worker(
    'file-upload-queue',
    async (job) => {
        console.log("Job: ", job.data);
        const data = JSON.parse(job.data)
        
        const loader = new PDFLoader(data.path)
        const docs = await loader.load({})

        const client = new QdrantClient({url : "http://localhost:6333"})
        const embeddings = new OpenAIEmbeddings({apiKey : process.env.OPENAI_API_KEY})
        
        
    },
    {concurrency : 100, connection : {
        host : "localhost",
        port : "6379"
    }}
)

