import { FileError } from "react-dropzone";
import { FileHeader } from ".";

export interface UploadErrorProps {
  file: File;
  onDelete: (file: File) => void;
  errors: FileError[];
}
export default function UploadError({file, onDelete, errors}: UploadErrorProps) {
  return (
      <FileHeader file={file} onDelete={onDelete} progress={null} errors={errors}/>
  )
}
