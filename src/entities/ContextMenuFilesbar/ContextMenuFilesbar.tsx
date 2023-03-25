import React from 'react'
import { ContextMenu } from '../../shared/ui/ContextMenu'

interface ContextMenuFilesbar {
    
}

export const ContextMenuFilesbar = () => {
  return (
    <>
				<ContextMenu
					showMenu={showMenu}
					onClickItem={onClickItem}
					setShowMenu={setShowMenu}
				/>        
    </>
  )
}
