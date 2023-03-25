import type { AxiosPromise } from "axios"
import { apiInstance } from "./base"
import type { IFileAPI } from "./models"
import type { IFileType } from "../types"

const BASE_URL = "/data";

export const getFilesList = (): AxiosPromise<IFileAPI[]> => {
    return apiInstance.get(BASE_URL)
}

export const getFileById = (fileId: number): AxiosPromise<IFileAPI> => {
    return apiInstance.get(`${BASE_URL}/${fileId}`)
}

export interface IFileAPICreate {
    fileName: string
    type: IFileType
    parentId: number
}
export const createFile = (fileObj: IFileAPICreate): AxiosPromise<IFileAPI> => {
    const fileObjApi: IFileAPI = {
        id: 0,
        fileName: fileObj.fileName,
        content: '',
        parentId: fileObj.parentId,
        type: fileObj.type
    }
    return apiInstance.post(`${BASE_URL}`, fileObjApi)
}