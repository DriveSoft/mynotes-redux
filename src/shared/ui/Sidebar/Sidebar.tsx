import React from "react"
import "./Sidebar.css"
import { ISidebarButtonId, ISidebarButton } from "./types";

interface SidebarProps {
	buttons: ISidebarButton[]
	activeButton: ISidebarButtonId
	onButtonClick: (value: ISidebarButtonId) => void
	//setActiveSidebarButton: (value: ButtonId) => void;
}

export function Sidebar({ 
	buttons,
	activeButton,	
	onButtonClick,
}: SidebarProps) {
	
	const onClick = (id: ISidebarButtonId) => {
		onButtonClick(id)
		// if (activeButton === id) { 
		// 	setActiveSidebarButton('NONE');
		// } else {
		// 	setActiveSidebarButton(id);	
		// }
	};

	return (
		<div className="sidebar">
			{buttons.map((item) => (
				<button
					onClick={() => onClick(item.id)}
					className={
						activeButton === item.id ? "activeSidebarButton" : ""
					}
					key={item.id}
				>
					<i className={item.icon}></i>
				</button>
			))}
		</div>
	);
}


