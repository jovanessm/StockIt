import { cn } from "@/lib/utils"

type LogoSize =  "xs" |"sm" | "md"
type LogoSurface = "none"| "light" | "dark" | "primary"

type StockitLogoProps = {
    size?: LogoSize
    surface?: LogoSurface
    className?: string
    withTagline?: boolean
    withTitle?: boolean
    isColumn?: boolean
}

const surfaceStyles: Record<LogoSurface, string> = {
    none: "",
    light: "bg-card text-card-foreground border border-border",
    dark: "bg-foreground text-background",
    primary: "bg-primary text-primary-foreground",
}

const iconSizes: Record<LogoSize, string> = {
    xs: "h-6 w-6",
    sm: "h-8 w-8",
    md: "h-20 w-20",
}

const titleSizes: Record<LogoSize, string> = {
    xs: "",
    sm: "text-xl",
    md: "text-3xl",
}

const taglineSizes: Record<LogoSize, string> = {
    xs: "",
    sm: "text-[10px]",
    md: "text-xs",
}

const taglineTone: Record<LogoSurface, string> = {
    none: "",
    light: "text-muted-foreground",
    dark: "text-current/75",
    primary: "text-current/75",
}

export function StockItLogo({
    size = "sm",
    surface = "none",
    className,
    withTagline = true,
    withTitle = true,
    isColumn = false,
}: StockitLogoProps) {
    const hasText = withTitle || withTagline

    return (
        <div
            className={cn(
                "inline-flex items-center rounded-xl",
                hasText ? "gap-3 px-4 py-2" : "justify-center p-2",
                isColumn ? "flex-col text-center":"flex-row",
                surfaceStyles[surface],
                className,
            )}
        >
            <img
                src="/logo/stockit-logo.svg"
                alt="Stockit logo"
                className={cn("shrink-0", iconSizes[size])}
            />
            {hasText && (
                <div className="leading-none">
                    {withTitle && (
                        <p className={cn("font-heading font-bold tracking-tight", titleSizes[size])}>
                            Stock-IT
                        </p>
                    )}
                    {withTagline && (
                        <p
                            className={cn(
                                "mt-1",
                                taglineSizes[size],
                                taglineTone[surface],
                            )}
                        >
                            Badminton Stock Management System
                        </p>
                    )}
                </div>
            )}
        </div>
    )
}
