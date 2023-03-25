import { IFileType } from '../types'

export interface IFileAPI {
	id: number
	fileName: string
	content: string	
	parentId: number
	type: IFileType
}	