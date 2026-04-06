import { useState, useEffect, useCallback } from 'react'
import type { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { Thumb } from './EmblaCarouselThumbsButton'

type EmblaCarouselSlide = {
    src: string
    alt?: string
}
type PropType = {
    slides: EmblaCarouselSlide[]
    options?: EmblaOptionsType
}

export const EmblaCarousel = (props: PropType) => {
    const { slides, options } = props
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options)
    const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
        containScroll: 'keepSnaps',
        dragFree: true
    })

    const onThumbClick = useCallback(
        (index: number) => {
            if (!emblaMainApi || !emblaThumbsApi) return
            emblaMainApi.scrollTo(index)
        },
        [emblaMainApi, emblaThumbsApi]
    )

    const onSelect = useCallback(() => {
        if (!emblaMainApi || !emblaThumbsApi) return
        const selectedSnap = emblaMainApi.selectedScrollSnap()
        setSelectedIndex(selectedSnap)
        emblaThumbsApi.scrollTo(selectedSnap)
    }, [emblaMainApi, emblaThumbsApi, setSelectedIndex])

    useEffect(() => {
        if (!emblaMainApi) return
        onSelect()

        emblaMainApi.on('select', onSelect)
        emblaMainApi.on('reInit', onSelect)

        return () => {
            emblaMainApi.off('select', onSelect)
            emblaMainApi.off('reInit', onSelect)
        }
    }, [emblaMainApi, onSelect])

    return (
        <div className="mx-auto w-full max-w-3xl">
            <div className="overflow-hidden" ref={emblaMainRef}>
                <div className="-ml-4 flex touch-pan-y touch-pinch-zoom">
                    {slides.map((slide, index) => (
                        <div className="min-w-0 flex-[0_0_100%] pl-4" key={`${slide.src}-${index}`}>
                            <div className="h-[24rem] overflow-hidden rounded-xl border-2 border-border">
                                <img
                                    src={slide.src}
                                    alt={slide.alt ?? `Product image ${index + 1}`}
                                    className="size-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-3">
                <div className="overflow-hidden" ref={emblaThumbsRef}>
                    <div className="-ml-3 flex flex-row">
                        {slides.map((slide, index) => (
                            <Thumb
                                key={`${slide.src}-thumb-${index}`}
                                onClick={() => onThumbClick(index)}
                                selected={index === selectedIndex}
                                imageSrc={slide.src}
                                imageAlt={slide.alt}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

