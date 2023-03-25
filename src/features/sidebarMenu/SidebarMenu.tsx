import React from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { Sidebar } from '../../shared/ui/Sidebar'
import { ISidebarButtonId, ISidebarButton } from '../../shared/ui/Sidebar'
import { clicked } from "./sidebarMenuSlice";


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
  
  const onButtonClick = (id: ISidebarButtonId) => {
    dispatch(clicked(id))
  }
  
  return (
    <>
				<Sidebar
					buttons={sidebarButtons}
          activeButton={activeButton}
					onButtonClick={onButtonClick}
				/>      
    </>
  )
}
