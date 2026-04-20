import type { TransactionRow } from "@/components/transaction-history/transaction-history-columns"

type ExportTransactionRow = {
    "Transaction ID": string
    "Product ID": string
    "Product Name": string
    Datetime: string
    "Stock Before": number
    "Stock After": number
    Method: string
    Status: string
}

const toTitleCase = (value: string) => value.charAt(0).toUpperCase() + value.slice(1)

const formatForExport = (rows: TransactionRow[]): ExportTransactionRow[] => {
    return rows.map((row) => ({
        "Transaction ID": row.transactionId,
        "Product ID": row.productId,
        "Product Name": row.productName,
        Datetime: row.dateTime,
        "Stock Before": row.stockBefore,
        "Stock After": row.stockAfter,
        Method: toTitleCase(row.method),
        Status: toTitleCase(row.status),
    }))
}

export const exportTransactionRowsToExcel = async (rows: TransactionRow[]) => {
    const XLSX = await import("xlsx")
    const worksheet = XLSX.utils.json_to_sheet(formatForExport(rows))
    const workbook = XLSX.utils.book_new()

    XLSX.utils.book_append_sheet(workbook, worksheet, "Transactions")

    const timestamp = new Date().toISOString().slice(0, 10)
    XLSX.writeFile(workbook, `transaction-history-${timestamp}.xlsx`)
}


