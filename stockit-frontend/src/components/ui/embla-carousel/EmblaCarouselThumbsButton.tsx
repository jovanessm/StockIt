type PropType = {
    selected: boolean
    imageSrc: string
    imageAlt?: string
    onClick: () => void
}

export const Thumb = (props: PropType) => {
    const { selected, imageSrc, imageAlt, onClick } = props

    return (
        <div className="min-w-0 flex-[0_0_22%] pl-3 sm:flex-[0_0_15%]">
            <button
                onClick={onClick}
                type="button"
                className={`flex h-[5rem] w-full cursor-pointer items-center justify-center rounded-xl border-2 border-border bg-transparent p-0 text-[1.8rem] font-semibold transition-colors ${
                    selected ? "text-foreground" : "text-muted-foreground"
                }`}
            >
                <img
                    src={imageSrc}
                    alt={imageAlt ?? "Product thumbnail"}
                    className="size-full rounded-xl object-cover"
                    loading="lazy"
                />
            </button>
        </div>
    )
}
