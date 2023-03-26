import React from 'react'
import { ContextMenu, IPointXY, IMenuItems } from '../../shared/ui/ContextMenu'

interface ContextMenuFilesbar {
    showAt: IPointXY
    fileId: number
    onClickItem: (fileId: number, itemId: string) => void
    onBlur: () => void
}

export const ContextMenuFilesbar = ( {showAt, fileId, onClickItem, onBlur}: ContextMenuFilesbar ) => {

    const menuItems: IMenuItems[] = [
        {
            id: "NEW_FILE",
            title: "New file",
            enabled: true,
        },
        {
            id: "EDIT_FILE",
            title: "Edit file",
            enabled: fileId !== 0,
        },
        {
            id: "DELETE_FILE",
            title: "Delete file",
            enabled: fileId !== 0,
        },
    ];


    const _onClickItem = (itemId: string) => {
        onClickItem(fileId, itemId)
    }

  return (
    <>
				<ContextMenu
					showAt={showAt}
                    menuItems={menuItems}
					onClickItem={_onClickItem}
					onBlur={onBlur}
				/>        
    </>
  )
}
