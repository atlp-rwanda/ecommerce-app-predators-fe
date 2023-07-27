import { useCallback, useEffect, useState } from 'react'
import {FileError, FileRejection, useDropzone} from "react-dropzone";
import { SingleFileUpload, UploadError } from '.';
import { useDispatch } from 'react-redux';
import { setImages } from '../../redux/reducers/imageSlice';

export interface UploadableFile {
  file: File;
  errors: FileError[];
  url?: string;
}

export default function MultipleFileUpload() {
  const dispatch = useDispatch();
  const [files, setFiles] = useState<UploadableFile[]>([]);
  
  const onDrop = useCallback((accFiles: File[], rejFiles: FileRejection[]) => {
    const mappedAcc = accFiles.map(file => ({file, errors: []}));
    setFiles(curr => [...curr, ...mappedAcc, ...rejFiles]);
  }, [])

  useEffect(() => {
    const goodFiles: string[] = []
    files.map((file) => {
      if(!file.errors.length && file.url) {
        goodFiles.push(file.url)
      }
    })
    dispatch(setImages(goodFiles))
  }, [files]);

  function onDelete(file: File){
    setFiles(curr => curr.filter(fw => fw.file !== file) )
  }

  function onUpload(file: File, url: string) {
    setFiles(curr => curr.map((fw) => {
        if(fw.file === file) {
            return {...fw, url};
        }
        return fw;
    }) )
  }
  const {getRootProps, getInputProps} = useDropzone({
    onDrop, 
    accept: {
      "image/*": [".png", ".gif", ".jpeg", ".jpg"],
    },//accept only images
    maxSize: 1024 * 1024 * 2, //2MBs
  })

  return (
    <>
      <div className='flex flex-col gap-3 border p-2 font-light rounded-lg shadow-md'>
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <p className={files.length? "": "text-gray-600/80"}>Drag 'n' drop some images here, or click to select images</p>
        </div>
        <div className='flex flex-col gap-3 min-w-[100px]'>
          {files.map((fileWrapper, idx) => (
              fileWrapper.errors.length?
                  <UploadError file={fileWrapper.file} errors={fileWrapper.errors} onDelete={onDelete} />:
                  <SingleFileUpload onUpload={onUpload} onDelete={onDelete} key={idx} file={fileWrapper.file}/>
          ))}
        </div>
      </div>
    </>
  )
}
