import { useState } from "react";
import { Upload, X, Check } from "lucide-react";

export interface UploadedFile {
    id: string;
    name: string;
    size: number;
    progress: number;
    file: File;
}

interface FileUploadProps {
    files: UploadedFile[];
    onFilesAdded: (files: UploadedFile[]) => void;
    onFileRemoved: (id: string) => void;
    onFileProgressUpdate: (id: string, progress: number) => void;
    accept?: string;
    maxHeight?: string;
    title?: string;
}

export function FileUpload({
    files,
    onFilesAdded,
    onFileRemoved,
    onFileProgressUpdate,
    accept = "image/*",
    maxHeight = "max-h-96",
    title = "Add Images",
}: FileUploadProps) {
    const [isDragging, setIsDragging] = useState(false);

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
        const droppedFiles = Array.from(e.dataTransfer.files);
        handleFilesSelected(droppedFiles);
    };

    const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const selectedFiles = Array.from(e.target.files);
            handleFilesSelected(selectedFiles);
        }
    };

    const handleFilesSelected = (selectedFiles: File[]) => {
        const newFiles = selectedFiles.map((file) => ({
            id: Math.random().toString(36).substr(2, 9),
            name: file.name,
            size: file.size,
            progress: 0,
            file,
        }));

        onFilesAdded(newFiles);

        // Simulate upload progress
        newFiles.forEach((uploadedFile) => {
            let progress = 0;
            const interval = setInterval(() => {
                progress += Math.random() * 30;
                if (progress > 100) progress = 100;

                onFileProgressUpdate(uploadedFile.id, progress);

                if (progress >= 100) clearInterval(interval);
            }, 300);
        });
    };

    return (
        <div className="flex flex-col gap-4">
            {title && <h2 className="text-lg font-semibold">{title}</h2>}

            {/* Drag and Drop Area */}
            <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`border-2 border-dashed rounded-lg p-8 flex flex-col items-center justify-center gap-4 cursor-pointer transition-colors ${
                    isDragging
                        ? "border-primary bg-primary/10"
                        : "border-primary hover:bg-primary/5 bg-background"
                }`}
            >
                <Upload className="w-12 h-12 text-muted-foreground" />
                <div className="text-center">
                    <p className="text-sm font-medium">Drop your files here, or</p>
                    <label htmlFor="file-input" className="text-primary cursor-pointer hover:underline">
                        Browse
                    </label>
                    <input
                        id="file-input"
                        type="file"
                        multiple
                        accept={accept}
                        onChange={handleFileInput}
                        className="hidden"
                    />
                </div>
            </div>

            {/* Uploaded Files List */}
            <div className={`space-y-3 overflow-y-auto ${maxHeight}`}>
                {files.map((file) => (
                    <div
                        key={file.id}
                        className="flex items-center gap-3 p-3 bg-muted rounded-lg border border-border"
                    >
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-medium truncate">{file.name}</span>
                                {file.progress === 100 && (
                                    <Check className="w-4 h-4 text-green-500 shrink-0" />
                                )}
                            </div>
                            <p className="text-xs text-muted-foreground">
                                {(file.size / 1024).toFixed(2)} KB
                            </p>
                            {file.progress < 100 && (
                                <div className="w-full bg-border rounded-full h-1 mt-2 overflow-hidden">
                                    <div
                                        className="bg-primary h-full transition-all"
                                        style={{ width: `${file.progress}%` }}
                                    />
                                </div>
                            )}
                        </div>
                        <button
                            onClick={() => onFileRemoved(file.id)}
                            className="text-destructive hover:bg-destructive/10 p-1 rounded shrink-0"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
