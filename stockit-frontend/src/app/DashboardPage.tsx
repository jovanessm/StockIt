import {SectionCards} from "@/components/dashboard/section-cards.tsx"
import {ChartAreaLegend} from "@/components/dashboard/chart-area.tsx";
import {ChartPieLabelCustom} from "@/components/dashboard/chart-pie.tsx";
import {TopSellingRanking} from "@/components/dashboard/top-selling-ranking.tsx";
import {StockAlerts} from "@/components/dashboard/stock-alerts.tsx";

export default function DashboardPage() {
    return (
        <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-4 py-6">
                <div className="flex flex-col gap-6 md:gap-4">
                    <SectionCards/>
                </div>
                <div className="grid grid-cols-1 2xl:grid-cols-3 gap-4 px-4 md:gap-4 lg:px-6">
                    <ChartAreaLegend/>
                    <TopSellingRanking/>
                    <ChartPieLabelCustom/>
                </div>
                <div className="grid grid-cols-1 2xl:grid-cols-3 gap-4 px-4 md:gap-4 lg:px-6">
                    <StockAlerts/>
                </div>
            </div>
        </div>
    )
}
