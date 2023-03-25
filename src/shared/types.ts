export type IFileType = 'FILE' | 'FOLDER'

export interface IFileTree {
	id: number
	fileName: string
	content?: string	
	//parentId: number
	childNodes?: IFileTree[]
}

export interface IFileItem extends IFileTree {
	isOpened?: boolean
	parentId: number
}