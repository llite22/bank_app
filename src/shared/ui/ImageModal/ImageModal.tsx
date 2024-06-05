import { ChangeEvent, DragEvent, useState } from "react";
import ImageUploadIcon from "@/shared/assets/icons/imageUpload.svg?react";
import { Input } from "../Input/Input";
import { Label } from "../Label/Label";

export const ImageModal = ({
  onCloseModal,
  mutate,
}: {
  onCloseModal: () => void;
  mutate: (file: File) => void;
}) => {
  const [dragActive, setDragActive] = useState<boolean>(false);

  const handleDrag = (e: DragEvent<HTMLFormElement | HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const selectedFile = e.dataTransfer.files[0];
      const fileSizeInKB = selectedFile.size / 1024; // Размер файла в килобайтах
      // Проверяем, превышает ли размер файла 1024 КБ (1 МБ)
      if (fileSizeInKB > 1024) {
        console.log("Файл слишком большой. Максимальный размер файла 1 МБ.");
        return; // Выходим из функции, если файл слишком большой
      } else {
        mutate(selectedFile);
        onCloseModal();
      }
    }
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    mutate(file);
    onCloseModal();
  };

  return (
    <div
      onClick={onCloseModal}
      className="fixed w-full inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center p-5 "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full max-w-2xl rounded-xl"
        onDragEnter={handleDrag}
      >
        <Label
          htmlFor="dropzone-file"
          className={`relative h-full flex flex-col items-center justify-center w-full aspect-video border-2 border-slate-300 border-dashed rounded-lg dark:border-gray-600 transition ${
            dragActive ? "'border-slate-400 bg-slate-900" : ""
          }`}
        >
          <div
            className="absolute inset-0 cursor-pointer"
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          />
          <ImageUploadIcon />
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click to upload</span> or drag and
            drop
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">Max 1MB</p>
          <Input
            onChange={handleFileChange}
            accept="image/jpeg, image/jpg, image/png"
            type="file"
            className="hidden"
            id="dropzone-file"
          />
        </Label>
      </div>
    </div>
  );
};
