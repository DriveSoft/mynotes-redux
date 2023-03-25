import React, { useEffect, useRef } from "react";
import "./ContextMenu.css";

interface IMenuItems {
	id: string
	title: string
	fileReq: boolean
}

interface ContexMenuProps {
	//menuItems: IMenuItems[]
	//showMenu: { show: boolean; x: number; y: number; fileId: number };
	showMenu: { x: number; y: number; fileId: number };
	onClickItem: (fileId: number, itemId: string) => void;	
	onBlur: () => void;
	//setShowMenu: any;
}

export const ContextMenu = ({
	showMenu,
	onClickItem,
	onBlur,
	//setShowMenu,
}: ContexMenuProps) => {
	const menuData = [
		{
			id: "NEW_FILE",
			title: "New file",
			fileReq: false,
		},
		{
			id: "EDIT_FILE",
			title: "Edit file",
			fileReq: true,
		},
		{
			id: "DELETE_FILE",
			title: "Delete file",
			fileReq: true,
		},
	];

	const ref = useRef<HTMLDivElement>(null)
	useEffect(() => {		
		ref?.current?.focus();
	}, []);

	return (
		<div
			className="containerMenu"
			style={{ left: showMenu.x, top: showMenu.y }}
			onBlur={onBlur}
			tabIndex={0}
			ref={ref}
		>            
			<ul>
				{menuData.map((item) => (
					<li
						key={item.id}
                        className={item.fileReq && showMenu.fileId === 0 ? "menuItem menuItemDisabled" : "menuItem" }  						
						onClick={() => !(item.fileReq && showMenu.fileId === 0) && onClickItem(showMenu.fileId, item.id)}
					>
						{item.title}                        
					</li>
				))}
			</ul>
		</div>
	);
};
