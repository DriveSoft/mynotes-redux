export type IButtonId = 'FILES' | 'SEARCH' | 'PROFILE' | 'NONE'

export interface ISidebarButton {
	id: IButtonId
	icon: string
}

export type IFileType = 'FILE' | 'FOLDER'

export interface IFileAPI {
	id: number
	fileName: string
	content: string	
	parentId: number
	type: IFileType
}	

export interface IFileTree {
	id: number
	fileName: string
	content?: string	
	//parentId: number
	childNodes?: IFileTree[]
}