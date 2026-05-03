import { useState } from "react";
import { Card } from "@/components/ui/card.tsx";
import { Button } from "@/components/ui/button.tsx";
import { FileUpload, type UploadedFile } from "@/components/ui/file-upload.tsx";
import { ProductDetails } from "@/components/add-new-product-page/product-details.tsx";

interface Product {
    name: string;
    category: string;
    price: string;
    stock: string;
    description: string;
    tags: string[];
}

export default function AddNewProductPage() {
    const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
    const [tagInput, setTagInput] = useState("");
    const [product, setProduct] = useState<Product>({
        name: "",
        category: "",
        price: "",
        stock: "",
        description: "",
        tags: [],
    });

    const categories = ["shuttlecock", "racket", "bag", "shoes", "string", "grip", "others"];

    const handleFilesAdded = (newFiles: UploadedFile[]) => {
        setUploadedFiles((prev) => [...prev, ...newFiles]);
    };

    const handleFileRemoved = (id: string) => {
        setUploadedFiles((prev) => prev.filter((f) => f.id !== id));
    };

    const handleFileProgressUpdate = (id: string, progress: number) => {
        setUploadedFiles((prev) =>
            prev.map((f) => (f.id === id ? { ...f, progress } : f)),
        );
    };

    const handleAddTag = () => {
        if (tagInput.trim() && !product.tags.includes(tagInput.trim())) {
            setProduct((prev) => ({
                ...prev,
                tags: [...prev.tags, tagInput.trim()],
            }));
            setTagInput("");
        }
    };

    const removeTag = (tag: string) => {
        setProduct((prev) => ({
            ...prev,
            tags: prev.tags.filter((t) => t !== tag),
        }));
    };

    const handlePublish = () => {
        // Validate required fields
        if (
            !product.name ||
            !product.category ||
            !product.price ||
            !product.description
        ) {
            alert("Please fill in all required fields");
            return;
        }

        if (uploadedFiles.length === 0) {
            alert("Please upload at least one image");
            return;
        }

        // Handle publish logic here
        console.log("Publishing product:", {
            ...product,
            images: uploadedFiles,
        });
        alert("Product published successfully!");
    };

    return (
        <div className="@container/main flex flex-1 flex-col gap-6 px-6 py-8">
            <div className="flex flex-col gap-2">
                <h1 className="text-4xl font-bold text-foreground">Add Product</h1>
                <p className="text-sm text-muted-foreground">Add new product to product list</p>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {/* Image Upload Section */}
                <Card className="p-6">
                    <FileUpload
                        files={uploadedFiles}
                        onFilesAdded={handleFilesAdded}
                        onFileRemoved={handleFileRemoved}
                        onFileProgressUpdate={handleFileProgressUpdate}
                        accept="image/*"
                        maxHeight="max-h-96"
                        title="Add Images"
                    />
                </Card>

                {/* Product Details Section */}
                <ProductDetails
                    product={product}
                    onProductChange={(key, value) =>
                        setProduct({ ...product, [key]: value })
                    }
                    tagInput={tagInput}
                    onTagInputChange={setTagInput}
                    onAddTag={handleAddTag}
                    onRemoveTag={removeTag}
                    categories={categories}
                />
            </div>
            <div className="flex flex-row justify-end">
                {/* Publish Button */}
                <Button
                    onClick={handlePublish}
                    size="lg"
                    className="lg:w-40 w-full h-10 rounded-lg text-base"
                >
                    Publish Product
                </Button>
            </div>
        </div>
    );
}