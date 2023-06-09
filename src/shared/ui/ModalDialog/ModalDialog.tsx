import React from "react";
import "./ModalDialog.css";

interface IModalDlgButton {
	idButton: string;
	caption: string;
}

interface ModalDialogProps {
	title: string;
	message: string;
	paramsObj?: {[key: string]: string}
	faIcon: string; //fa-regular fa-circle-question
	buttons: IModalDlgButton[];
	onButtonClick: (idButton: string | 'SYSCLOSE', paramObj?: {[key: string]: string}) => void;
	show: boolean;
	//setShow: (value: boolean) => void;
}

export function ModalDialog({
	title,
	message,
	faIcon,
	buttons,
	onButtonClick,
    show, 
    //setShow
}: ModalDialogProps) {

	const _onButtonClick = (idButton: string) => {
		onButtonClick(idButton)
        //setShow(false)
	};

    const onClose = () => {
        onButtonClick('SYSCLOSE')
		//setShow(false)    
    }

	return (
        <>
        {show &&
		<div className="modalDialogContainer">
			<div className="modalDialog">
				<div className="modalDialogTitle">
					<span>{title}</span>
					<div onClick={onClose}>⨉</div>
				</div>

				<div className="modalDialogContent">
					<i className={faIcon}></i>
					<span>{message}</span>
				</div>

				<div className="modalDialogButtons">
					{buttons.map((button) => (
						<button
							key={button.idButton}
							onClick={() => _onButtonClick(button.idButton)}
						>
							{button.caption}
						</button>
					))}
				</div>
			</div>
		</div>
        }
        </>
	)
}

