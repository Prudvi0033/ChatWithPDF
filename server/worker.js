import { Worker } from 'bullmq';
import { QdrantVectorStore } from "@langchain/qdrant";
import { OpenAIEmbeddings } from "@langchain/openai";
import { Document } from "@langchain/core/documents";
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import dotenv from "dotenv";

dotenv.config();

const worker = new Worker(
    'file-upload-queue',
    async (job) => {
        console.log("Job: ", job.data);

        const data = JSON.parse(job.data);

        const loader = new PDFLoader(data.path);
        const docs = await loader.load({});
        console.log(`Loaded ${docs.length} raw document(s)`);

        // Split into smaller chunks
        const splitter = new RecursiveCharacterTextSplitter({
            chunkSize: 1000,      // characters per chunk
            chunkOverlap: 200     // optional context overlap
        });

        const splitDocs = await splitter.splitDocuments(docs);
        console.log(`📄 Split into ${splitDocs.length} chunks`);

        const embeddings = new OpenAIEmbeddings({
            model: "text-embedding-3-small",
            apiKey: process.env.OPENAI_API_KEY, // Make sure env is loaded
        });

        const vectorStore = await QdrantVectorStore.fromExistingCollection(embeddings, {
            url: "http://localhost:6333",
            collectionName: "langchainjs-testing",
        });

        await vectorStore.addDocuments(docs);
        console.log("✅ Successfully added documents to Qdrant.");
    },
    {
        concurrency: 100,
        connection: {
            host: "localhost",
            port: 6379,
        }
    }
);
