import { IconPhoto, IconTrash } from "@tabler/icons-react";
import React from "react";

type ImageUploadMultiProps = {
  children: React.ReactNode;
  remove: (name: string) => void;
  files: File[];
};

const ImageUploadMulti = (props: ImageUploadMultiProps) => {
  const { children, remove, files } = props;

  return (
    <>
      <div className="mt-2 flex flex-col items-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
        <div className="text-center flex gap-5 items-center">
          <IconPhoto className="h-28 w-28" />
          <div className=" gap-2 flex flex-col text-sm leading-6 items-center text-gray-600">
            <label className="relative cursor-pointer font-semibold text-indigo-600 outline-none">
              <span>Upload a file</span>
              {children}
            </label>
            <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4">
          {files.map((file: File, key) => (
            <div key={key} className=" relative">
              <div
                onClick={() => {
                  remove(file.name);
                }}
                className="absolute -right-2 -top-2 rounded-full text-red-600 bg-white/80 cursor-pointer"
              >
                <IconTrash />
              </div>
              <img className="h-28 w-28 object-contain" alt={file.name} src={URL.createObjectURL(file)} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageUploadMulti;
