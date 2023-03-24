import React from 'react'
import Sidebar from '../../common/Sidebar/Sidebar'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { clicked } from "./sidebarMenuSlice";
import { IButtonId, ISidebarButton } from '../../types'

export const SidebarMenu = () => {
  const activeButton = useAppSelector((state) => state.sidebarMenu.activeSidebarMenuButton)
  const dispatch = useAppDispatch()

  const sidebarButtons: ISidebarButton[] = [
    {
      id: "FILES",
      icon: "fa-regular fa-file",
    },
    {
      id: "SEARCH",
      icon: "fa-solid fa-magnifying-glass",
    },
    {
      id: "PROFILE",
      icon: "fa-regular fa-user",
    },
  ];
  
  const onButtonClick = (id: IButtonId) => {
    dispatch(clicked(id))
  }
  
  return (
    <div>
				<Sidebar
					buttons={sidebarButtons}
          activeButton={activeButton}
					onButtonClick={onButtonClick}
				/>      
    </div>
  )
}
