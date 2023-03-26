import React, { useEffect, useRef } from "react";
import "./ContextMenu.css";

export interface IMenuItems {
	id: string
	title: string
	enabled: boolean
}

export interface IPointXY {
	x: number
	y: number
}

interface ContexMenuProps {
	menuItems: IMenuItems[]
	//showMenu: { show: boolean; x: number; y: number; fileId: number };
	showAt: IPointXY;
	onClickItem: (itemId: string) => void;	
	onBlur: () => void;
	//setShowMenu: any;
}

export const ContextMenu = ({
	menuItems,
	showAt,
	onClickItem,
	onBlur,
	//setShowMenu,
}: ContexMenuProps) => {
	// const menuData = [
	// 	{
	// 		id: "NEW_FILE",
	// 		title: "New file",
	// 		enabled: true,
	// 	},
	// 	{
	// 		id: "EDIT_FILE",
	// 		title: "Edit file",
	// 		enabled: true,
	// 	},
	// 	{
	// 		id: "DELETE_FILE",
	// 		title: "Delete file",
	// 		enabled: true,
	// 	},
	// ];

	const ref = useRef<HTMLDivElement>(null)
	useEffect(() => {		
		ref?.current?.focus();
	}, []);

	return (
		<div
			className="containerMenu"
			style={{ left: showAt.x, top: showAt.y }}
			onBlur={onBlur}
			tabIndex={0}
			ref={ref}
		>            
			<ul>
				{menuItems.map((item) => (
					<li
						key={item.id}
                        className={!item.enabled ? "menuItem menuItemDisabled" : "menuItem" }  						
						onClick={() => item.enabled && onClickItem(item.id)}
					>
						{item.title}                        
					</li>
				))}
				{/* {menuData.map((item) => (
					<li
						key={item.id}
                        className={item.fileReq && showMenu.fileId === 0 ? "menuItem menuItemDisabled" : "menuItem" }  						
						onClick={() => !(item.fileReq && showMenu.fileId === 0) && onClickItem(showMenu.fileId, item.id)}
					>
						{item.title}                        
					</li>
				))}				 */}
			</ul>
		</div>
	);
};
