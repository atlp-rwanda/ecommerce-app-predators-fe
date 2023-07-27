// import { LinearProgress} from "@mui/material"
import { useEffect, useState } from 'react';
import { FileHeader } from '.';

export interface singlefileUploadProps {
  file: File;
  onDelete: (file: File) => void;
  onUpload: (file: File, url: string) => void;
}

export default function SingleFileUpload({file, onDelete, onUpload}: singlefileUploadProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    async function Upload() {
        const url = await uploadFile(file, setProgress)
        onUpload(file, url)
    }

    Upload()
  },[])
  
  return (
      <FileHeader file={file} onDelete={onDelete} progress={progress} errors={null}/>
  )
}


function uploadFile(file: File, onProgress: (percentage: number) => void) {
  const url = 'https://api.cloudinary.com/v1_1/dck6gpxb9/upload' 
  const key=  'fosheqrw';
  return new Promise<string>((res, rej) => {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', url);
      xhr.onload = () => {
          const resp = JSON.parse(xhr.responseText);
          res(resp.secure_url)
      }
      xhr.onerror =(evt) => rej(evt);
      xhr.upload.onprogress = (event) => {
          if(event.lengthComputable) {
              const percentage = (event.loaded/event.total)*100;
              onProgress(Math.round(percentage));
          }
      };
      const formdata = new FormData();
      formdata.append('file', file)
      formdata.append('upload_preset', key)
      xhr.send(formdata)
  })
}
