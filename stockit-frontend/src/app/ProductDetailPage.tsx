import {EmblaCarousel} from "@/components/ui/embla-carousel/EmblaCarousel.tsx";
import ProductDetailDescription from "@/components/product-detail/product-detail-description.tsx";
import {Card} from "@/components/ui/card.tsx";

const SLIDE_COUNT = 10
const IMAGE_BASE_URL = "https://raw.githubusercontent.com/yavuzceliker/sample-images/main/docs"

const SLIDES = Array.from({length: SLIDE_COUNT}, (_, index) => {
    const imageNumber = 1000 + index
    return {
        src: `${IMAGE_BASE_URL}/image-${imageNumber}.jpg`,
        alt: `Product image ${imageNumber}`,
    }
})

const PRODUCT_DETAIL_MOCK = {
    title: "Yonex Astrox 88S Pro",
    description:
        "Professional-grade badminton racket built for fast drives and control at the net. Balanced for competitive doubles play with a responsive shaft.",
    rating: 4.7,
    category: ["racket", "professional", "doubles"],
    stock: 31,
    price: 189.99,
}

export default function ProductDetailPage() {
    return (
        <div className="flex flex-col">
            <Card className={"m-4 px-8"}>
                <div className={"flex flex-col lg:flex-row gap-8"}>
                    <div className={"w-full lg:w-1/2"}>
                        <EmblaCarousel slides={SLIDES}/>
                    </div>
                    <ProductDetailDescription
                        title={PRODUCT_DETAIL_MOCK.title}
                        description={PRODUCT_DETAIL_MOCK.description}
                        rating={PRODUCT_DETAIL_MOCK.rating}
                        category={PRODUCT_DETAIL_MOCK.category}
                        stock={PRODUCT_DETAIL_MOCK.stock}
                        price={PRODUCT_DETAIL_MOCK.price}
                    />
                </div>
            </Card>
        </div>
    )
}