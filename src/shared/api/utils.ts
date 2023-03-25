import { IFileAPI } from './models'
import { IFileTree } from '../types'

export const createDataTree = (data: IFileAPI[]): IFileTree[] => {
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