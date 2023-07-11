import { FileError } from "react-dropzone";

export interface FileHeaderProps {
  file: File;
  onDelete: (file: File) => void;
  progress: number| null;
  errors: FileError[] | null;
}

export default function FileHeader({file, onDelete, progress, errors}: FileHeaderProps) {
  return (
    <div className={`${progress==100? "border-green-400" : ""} ${progress==null? "border-red-600": ""} flex gap-3 flex-col border rounded-md px-3 py-1`}>
      <div className={`flex justify-between ${errors?.length? "border-b pb-2": ""}`}>
        <span className=" max-[640px]:w-24 sm:w-52 truncate">{file.name}</span>
        <span>{`${progress? progress + "%": ""}`}</span>
        <button type="button" className=" bg-red-600 text-white px-1 text-sm font-light rounded md" onClick={() => onDelete(file)}>Delete</button>
      </div>
      {errors?.length? 
      <div className="errors flex flex-wrap">
        {
          errors.map((err, idx) => (
              <span key={idx} className="border px-2 rounded-md border-red-300">{`${err.message}`}</span>
          ))
        }
      </div>:
      ""}
    </div>
  )
}
