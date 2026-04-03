import {SectionCards} from "@/components/dashboard/section-cards.tsx"
import {ChartAreaLegend} from "@/components/dashboard/chart-area.tsx";
import {ChartPieLabelCustom} from "@/components/dashboard/chart-pie.tsx";

export default function DashboardPage() {
    return (
        <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-4 py-6">
                <div className="flex flex-col gap-6 md:gap-4">
                    <SectionCards/>
                </div>
                <div className="flex flex-1 flex-row gap-4 px-4 md:gap-6 lg:px-6">
                    <div className="w-2/9">
                        <ChartAreaLegend/>
                    </div>
                </div>
                <div className="flex flex-1 flex-row gap-4 px-4 md:gap-6 lg:px-6">
                    <div className="w-1/5">
                        <ChartPieLabelCustom/>
                    </div>
                </div>

            </div>
        </div>
    )
}
