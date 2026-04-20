import { DownloadCloud, ArrowDownUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { DataTable } from "@/components/ui/data-table"
import { columns } from "@/components/transaction-history/transaction-history-columns"
import type { TransactionRow } from "@/components/transaction-history/transaction-history-columns"
import { exportTransactionRowsToExcel } from "@/lib/export-excel"

// Flattened mock data - each row is a product change in a transaction
const mockTransactionRows: TransactionRow[] = [
    {
        transactionId: "TRX001",
        productId: "a3f9c1",
        productName: "Yonex Aerosensa 50",
        dateTime: "17 Oct, 2020 10:30 AM",
        stockBefore: 100,
        stockAfter: 50,
        method: "sale",
        status: "completed",
    },
    {
        transactionId: "TRX001",
        productId: "c1a4f6",
        productName: "Yonex Astrox 88S Pro",
        dateTime: "17 Oct, 2020 10:30 AM",
        stockBefore: 45,
        stockAfter: 30,
        method: "sale",
        status: "completed",
    },
    {
        transactionId: "TRX002",
        productId: "f2c8d4",
        productName: "Yonex BG 65 String",
        dateTime: "1 Feb, 2020 2:15 PM",
        stockBefore: 120,
        stockAfter: 110,
        method: "sale",
        status: "cancelled",
    },
    {
        transactionId: "TRX003",
        productId: "g6e1b9",
        productName: "Victor Overgrip Comfort",
        dateTime: "21 Sep, 2020 9:45 AM",
        stockBefore: 25,
        stockAfter: 35,
        method: "restock",
        status: "pending",
    },
    {
        transactionId: "TRX003",
        productId: "h4d5f3",
        productName: "Yonex Team Series Racket Bag",
        dateTime: "21 Sep, 2020 9:45 AM",
        stockBefore: 35,
        stockAfter: 32,
        method: "adjustment",
        status: "pending",
    },
    {
        transactionId: "TRX004",
        productId: "i8c2a7",
        productName: "Victor Thruster K 9000",
        dateTime: "8 Sep, 2020 11:20 AM",
        stockBefore: 15,
        stockAfter: 8,
        method: "sale",
        status: "completed",
    },
    {
        transactionId: "TRX005",
        productId: "j3f6e1",
        productName: "Li-Ning N99 Carbon Racket",
        dateTime: "1 Feb, 2020 3:00 PM",
        stockBefore: 22,
        stockAfter: 18,
        method: "sale",
        status: "cancelled",
    },
    {
        transactionId: "TRX005",
        productId: "k5b9d3",
        productName: "Yonex Mavis 350 Nylon Shuttle",
        dateTime: "1 Feb, 2020 3:00 PM",
        stockBefore: 200,
        stockAfter: 180,
        method: "sale",
        status: "cancelled",
    },
    {
        transactionId: "TRX006",
        productId: "l1e4c8",
        productName: "Victor SH-A920 Shoes",
        dateTime: "17 Oct, 2020 1:45 PM",
        stockBefore: 40,
        stockAfter: 35,
        method: "sale",
        status: "completed",
    },
    {
        transactionId: "TRX007",
        productId: "m7a3f2",
        productName: "Li-Ning AYPP004 Badminton Bag",
        dateTime: "24 May, 2020 4:30 PM",
        stockBefore: 50,
        stockAfter: 55,
        method: "restock",
        status: "pending",
    },
    {
        transactionId: "TRX008",
        productId: "n2d8b6",
        productName: "Yonex BG 80 Power String",
        dateTime: "22 Oct, 2020 5:15 PM",
        stockBefore: 80,
        stockAfter: 65,
        method: "sale",
        status: "completed",
    },
    {
        transactionId: "TRX009",
        productId: "o9f1c5",
        productName: "Victor Tacky Towel Grip x5",
        dateTime: "1 Feb, 2020 6:00 AM",
        stockBefore: 10,
        stockAfter: 5,
        method: "adjustment",
        status: "cancelled",
    },
    {
        transactionId: "TRX010",
        productId: "a3f9c1",
        productName: "Yonex Aerosensa 50",
        dateTime: "22 Oct, 2020 7:30 PM",
        stockBefore: 80,
        stockAfter: 70,
        method: "sale",
        status: "pending",
    },
    {
        transactionId: "TRX011",
        productId: "c1a4f6",
        productName: "Yonex Astrox 88S Pro",
        dateTime: "21 Sep, 2020 8:15 AM",
        stockBefore: 60,
        stockAfter: 45,
        method: "sale",
        status: "pending",
    },
    {
        transactionId: "TRX012",
        productId: "b7d2e8",
        productName: "Victor AS-Heavy Shuttlecock",
        dateTime: "15 Oct, 2020 2:00 PM",
        stockBefore: 50,
        stockAfter: 60,
        method: "restock",
        status: "completed",
    },
]

export default function TransactionHistoryPage() {
    const handleDownloadExcel = async () => {
        await exportTransactionRowsToExcel(mockTransactionRows)
    }

    return (
        <div className="flex flex-col gap-6 px-6 py-8">
            {/* Header */}
            <div className="flex flex-col gap-2">
                <h1 className="text-4xl font-bold text-foreground">Transaction History</h1>
                <p className="text-sm text-muted-foreground">View all stock transactions and changes</p>
            </div>

            {/* Top Actions */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex gap-2">
                    <Button className="gap-2" size="sm" onClick={handleDownloadExcel}>
                        <DownloadCloud className="h-4 w-4" />
                        Download as xlsx File
                    </Button>
                    <Button variant="outline" className="gap-2" size="sm">
                        <ArrowDownUp className="h-4 w-4" />
                        Sort by Latest
                    </Button>
                </div>
            </div>

            {/* Table */}
            <Card className="overflow-hidden">
                <DataTable columns={columns} data={mockTransactionRows} className="px-4" />
            </Card>
        </div>
    )
}