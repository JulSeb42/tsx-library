/*=============================================== useLocalStorage ===============================================*/

export const useLocalStorage = () => {
    const saveInStorage = (key: string, content: any) =>
        localStorage.setItem(key, JSON.stringify(content))
    const getFromStorage = (key: string) => localStorage.getItem(key)
    const deleteFromStorage = (key: string) => localStorage.removeItem(key)
    const clearLocalStorage = () => localStorage.clear()

    return {
        saveInStorage,
        getFromStorage,
        deleteFromStorage,
        clearLocalStorage,
    }
}
