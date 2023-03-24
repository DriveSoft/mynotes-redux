import React from "react"
import "./Sidebar.css"
import { IButtonId, ISidebarButton } from "../../types";

interface SidebarProps {
	buttons: ISidebarButton[]
	activeButton: IButtonId
	onButtonClick: (value: IButtonId) => void
	//setActiveSidebarButton: (value: ButtonId) => void;
}

function Sidebar({ 
	buttons,
	activeButton,	
	onButtonClick,
}: SidebarProps) {
	
	const onClick = (id: IButtonId) => {
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

export default Sidebar;
