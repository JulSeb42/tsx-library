/*=============================================== useTableSorting ===============================================*/

const downloadFile = ({ blob, fileName }: { blob: Blob; fileName: string }) => {
    const a = document.createElement("a")
    a.download = fileName
    a.href = window.URL.createObjectURL(blob)
    const clickEvt = new MouseEvent("click", {
        view: window,
        bubbles: true,
        cancelable: true,
    })
    a.dispatchEvent(clickEvt)
    a.remove()
}

export const useExportData = () => {
    const exportToJson = (data: any[], fileName: string) =>
        downloadFile({
            blob: new Blob([JSON.stringify(data)], {
                type: "application/json",
            }),
            fileName: `${fileName}.json`,
        })

    const exportToCsv = (data: any[], fileName: string, headers: string[]) => {
        const rows = [headers.join(","), ...data].join("\n")

        const blob = new Blob([rows], {
            type: "text/csv",
        })

        return downloadFile({
            blob,
            fileName: `${fileName}.csv`,
        })
    }

    return {
        exportToCsv,
        exportToJson,
    }
}
