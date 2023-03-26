import { IFileTree, IFileType } from '../../../shared/types'
import { IFileAPI } from "../../../shared/api"

export const dataTreeApiToNestedDataTree = (data: IFileAPI[]): IFileTree[] => {
    const hashTable = Object.create(null)
    data.forEach(file => hashTable[file.id] = file.type === 'FOLDER' ? {...file, childNodes: []} : {...file})
    const dataTree: IFileTree[] = []

    data.forEach(file => {				
        if(file.parentId > 0 && hashTable[file.parentId]) {     
            if(hashTable[file.parentId]?.childNodes) hashTable[file.parentId].childNodes.push(hashTable[file.id])
            else dataTree.push(hashTable[file.id]) // in case, if file referencing to not Folder
          } else {
            dataTree.push(hashTable[file.id])
          }
    })

    return dataTree
}

export function createFileAndUpdateFileList(fileList: IFileTree[], newIdFile: number, idParentFile: number, fileName: string, typeFile: IFileType): IFileTree[] {
    //let objNewFile: files = {id: newIdFile, parentId: idParentFile, fileName: fileName, content: ''}                    
    let objNewFile: IFileTree = {id: newIdFile, fileName: fileName}                    
    if(typeFile === 'FOLDER') objNewFile = {...objNewFile, childNodes: [] }    

    const mapItems = (files: IFileTree[]): IFileTree[] => {
        return files.map((file: IFileTree) => {
            if (file?.childNodes) {
                if(file.id == idParentFile) {
                    file.childNodes.push(objNewFile)
                }
                return {...file, childNodes: mapItems(file.childNodes)}
            } else {
                return file
            }
        })
    }

    const result = mapItems(fileList)
    
    if(idParentFile === 0) {  // new file in root              
        result.push(objNewFile)
    }

    return result
}

export function changeFilenameAndUpdateFileList(fileList: IFileTree[], idFile: number, newFilename: string): IFileTree[] {

    const mapItems = (files: IFileTree[]): IFileTree[] => {
        return files.map((file: IFileTree) => {
            if (file?.childNodes && file.childNodes.length > 0) {
                if(file.id === idFile) return {...file, fileName: newFilename, childNodes: mapItems(file.childNodes)}
                return {...file, childNodes: mapItems(file.childNodes)}
            } 
            
            if(file.id === idFile) {
                return {...file, fileName: newFilename}
            }
            return file            
        })
    }

    return mapItems(fileList)
}

export function deleteFileAndUpdateFileList(fileList: IFileTree[], idFile: number): IFileTree[] {
    const mapItems = (files: IFileTree[]): IFileTree[] => {
        return files.filter((file: IFileTree) => {            
            if (file?.childNodes && file.childNodes.length > 0) file.childNodes = mapItems(file.childNodes)                                       
            return file.id !== idFile
        })
    }

    return mapItems(fileList)
}

// export function changeIsOpenedAndUpdateFileList(fileList: files[], idFile: number): files[] {

//     const mapItems = (files: files[]): files[] => {
//         return files.map((file: files) => {
//             if (file?.childNodes) {
//                 if(file.id === idFile) {
//                     return {...file, childNodes: mapItems(file.childNodes), isOpened: !file.isOpened}
//                 }
//                 return {...file, childNodes: mapItems(file.childNodes)}
//             } else {
//                 return file
//             }
//         })
//     }

//     return mapItems(fileList)
// }

export function getFileById(fileList: IFileTree[], id: number): IFileTree | undefined {
    let result: IFileTree | undefined = undefined

    const findObj = (fileList: IFileTree[]) => {
        let res = fileList.find(file => {
            if(file?.childNodes?.length && file.childNodes.length > 0) findObj(file.childNodes)
            return file.id === id
        })

        if (res) result = res
        return result
    }

    return findObj(fileList);
}

export function getNewId(fileList: IFileTree[]): number {
    let result = 0

    const findMaxId = (fileList: IFileTree[]) => {
        fileList.forEach(file => {
            if(file?.childNodes?.length && file.childNodes.length > 0) findMaxId(file.childNodes)
            if(file.id > result) result = file.id
        })
    }

    findMaxId(fileList);
    return result+1
}


export function getParentId(dataTree: IFileTree[], fileId: number, parentId: number = 0): number {
    let result = -1

    dataTree.every(item => {        
        if(item.id === fileId) {
            result = parentId 
            return false
        } else {
            if(item?.childNodes) {
                result = getParentId(item?.childNodes, fileId, item.id)
                return result === -1
            }
            return true
        }
    })  
    
    return result
}