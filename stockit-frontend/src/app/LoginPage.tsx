import {LoginForm} from "@/components/login-form.tsx"
import {StockItLogo} from "@/components/StockItLogo.tsx"
import {ModeToggle} from "@/components/mode-toggle.tsx";

export function LoginPage() {
    return (
        <div className="grid min-h-svh lg:grid-cols-2">
            <div className="relative hidden bg-muted lg:block">
                <img
                    src="/placeholder.svg"
                    alt="Image"
                    className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                />
            </div>
            <div className="flex flex-col gap-4 p-6 md:p-10">
                <div className="flex justify-center gap-2 md:justify-between">
                    <a href="#" aria-label="Stockit" className="inline-flex">
                        <StockItLogo surface="light" size="sm" withTagline={false} withTitle={false}/>
                    </a>
                    <div className="flex justify-center items-center gap-2 md:justify-between">
                        <ModeToggle/>
                    </div>
                </div>
                <div className="flex flex-1 items-center justify-center">
                    <div className="flex w-full max-w-xs flex-col items-center gap-6 md:items-start">
                        <StockItLogo size="md" withTagline withTitle isColumn
                                     className="w-full justify-center md:justify-start"/>
                        <LoginForm className="w-full"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
