'use server'

import { UTApi } from 'uploadthing/server'
import type { UploadFileResult } from 'uploadthing/types'


const utapi = new UTApi({
  token: process.env.UPLOADTHING_TOKEN!,
})



export async function UploadPdfToUploadThing(
    fileBuffer: Buffer,
    fileName: string
  ): Promise<UploadFileResult[]> {
    try {
      const file = new File([fileBuffer], fileName, {
        type: "application/pdf",
      });
  
      const response = await utapi.uploadFiles([file]);
  
      if (!response?.[0].data?.ufsUrl) {
        throw new Error("Upload failed - No URL returned");
      }
  
      return response;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to upload PDF to UploadThing");
    }
  }
  