import { useState, useEffect } from "react"
import { useAppSelector, useAppDispatch } from "../../../app/hooks"
import { fetchFiles, createFile } from '../../../shared/api'
import { Filesbar } from "../../../features/Filesbar"
//import { AppContext, AppContextType } from "../../Context"
import { IFileTree } from "../../../features/Filesbar"
import { IFileType } from "../../../shared/types"
//import { IFileAPI } from "../../../shared/api/types"
//import { createFilenameAPI, updateFilenameAPI, deleteFilenameAPI } from "../../utils"
import "./FilesContainer.css"

const FilesContainer = () => {
	const dispatch = useAppDispatch()

	const [expanded, setExpanded] = useState<number[]>([])
	const fileItems = useAppSelector( state => state.filesApi.fileItems )
	const activeFile = useAppSelector( state => state.files.activeFile )
	
	useEffect(() => {		
		dispatch(fetchFiles())
	}, [])

	const onFileCreate = async(fileName: string, type: IFileType, parentId: number): Promise<number> => {				
		// let fileObjApi: IFileAPI = {
		// 	id: 0,
		// 	fileName: fileName,
		// 	content: "",
		// 	parentId: parentId,
		// 	type: type ? "FOLDER" : "FILE",
		// };

		// try {
		// 	const newFileId = await createFilenameAPI(fileObjApi)
		// 	return newFileId
		// } catch(e) {
		// 	alert('onFileCreate: ' + e)
		// 	throw new Error('API call for creating a file has been failed')		
		// }	
		
		const response = await createFile({fileName: fileName, type: type, parentId: parentId})
		return response.data.id
	}

	const onFileRename = async (fileObj: IFileTree, parentId: number): Promise<any> => {				
		// const fileObjApi: IFileAPI = {
		// 	id: fileObj.id,
		// 	fileName: fileObj.fileName,
		// 	content: fileObj.content || '',
		// 	//parentId: fileObj.parentId,
		// 	parentId: parentId,
		// 	type: fileObj?.childNodes ? 'FOLDER' : 'FILE'
		// }

		// try {
		// 	await updateFilenameAPI(fileObjApi)
		// 	setTabs(tabs.map(tab => fileObj.id === tab.id ? {...tab, tabName: fileObj.fileName} : tab))
		// } catch(e) {
		// 	alert('onFileRename: ' + e)
		// 	throw new Error('API call for renaming a file has been failed')
		// }			
	}

	const onFileDelete = async(fileId: number): Promise<any> => {
		// try {
		// 	await deleteFilenameAPI(fileId)
		// 	setActiveFile(undefined)						
		// } catch(e) {
		// 	alert('onFileDelete: ' + e)
		// 	throw new Error('API call for deleting a file has been failed')		
		// }
	}

	const onSelect = (fileId: number) => {
		//setActiveFile(fileId)						
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
