import { useState } from "react"
import { useAppSelector } from "../../../app/hooks"
import Filesbar from "../../../common/Filesbar/Filesbar"
//import { AppContext, AppContextType } from "../../Context"
import { IFileTree, IFileAPI, fileType } from "../../../types"
//import { createFilenameAPI, updateFilenameAPI, deleteFilenameAPI } from "../../utils"
import "./FilesContainer.css"

const FilesContainer = () => {
	const [expanded, setExpanded] = useState<number[]>([])
	const fileItems = useAppSelector( state => state.files.fileItems )
	
	// const {
	// 	fileList,
	// 	activeFile,
	// 	setActiveFile,
	// 	tabs,
	// 	setTabs
	// } = useContext(AppContext) as AppContextType;


	const onFileCreate = async(fileName: string, type: fileType, parentId: number): Promise<number> => {				
		let fileObjApi: IFileAPI = {
			id: 0,
			fileName: fileName,
			content: "",
			parentId: parentId,
			type: type ? "FOLDER" : "FILE",
		};

		try {
			const newFileId = await createFilenameAPI(fileObjApi)
			return newFileId
		} catch(e) {
			alert('onFileCreate: ' + e)
			throw new Error('API call for creating a file has been failed')		
		}					
	}

	const onFileRename = async (fileObj: IFileTree, parentId: number): Promise<any> => {				
		const fileObjApi: IFileAPI = {
			id: fileObj.id,
			fileName: fileObj.fileName,
			content: fileObj.content,
			//parentId: fileObj.parentId,
			parentId: parentId,
			type: fileObj?.childNodes ? 'FOLDER' : 'FILE'
		}

		try {
			await updateFilenameAPI(fileObjApi)
			setTabs(tabs.map(tab => fileObj.id === tab.id ? {...tab, tabName: fileObj.fileName} : tab))
		} catch(e) {
			alert('onFileRename: ' + e)
			throw new Error('API call for renaming a file has been failed')
		}			
	}

	const onFileDelete = async(fileId: number): Promise<any> => {
		try {
			await deleteFilenameAPI(fileId)
			setActiveFile(undefined)						
		} catch(e) {
			alert('onFileDelete: ' + e)
			throw new Error('API call for deleting a file has been failed')		
		}
	}

	const onSelect = (fileId: number) => {
		setActiveFile(fileId)						
	}	

	const onExpanded = (expandedItems: number[]) => {
		setExpanded(expandedItems)	
	}


	return (
		<div className="filesContainer">
			<span>EXPLORER</span>
			<Filesbar
				title="Dmitriy's notes"
				treeData={fileItems}
				selectedFile={activeFile}
				expanded={expanded}
				onFileCreate={onFileCreate}
				onFileRename={onFileRename}
				onFileDelete={onFileDelete}
				onSelect={onSelect}
				onExpanded={(expandedItems) => onExpanded(expandedItems)}
			/>
		</div>
	);
};

export default FilesContainer;
