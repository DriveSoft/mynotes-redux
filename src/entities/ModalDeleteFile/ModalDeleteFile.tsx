import React from 'react'
import { ModalDialog } from '../../shared/ui/ModalDialog'

export type IModalDlgBntResult = 'DELETE' | 'CANCEL' | 'SYSCLOSE'

interface ModalDeleteFileProps {
    fileName: string
    show: boolean
    onButtonClick: (idButton: IModalDlgBntResult, paramObj?: {[key: string]: string}) => void
}

export const ModalDeleteFile = ( {fileName, show, onButtonClick}: ModalDeleteFileProps) => {
    
    const _onButtonClick = (idButton: string | 'SYSCLOSE', paramObj?: {[key: string]: string}) => {
        switch(idButton) {
            case 'DELETE': onButtonClick('DELETE', paramObj) 
            case 'CANCEL': onButtonClick('CANCEL', paramObj) 
            case 'SYSCLOSE': onButtonClick('SYSCLOSE', paramObj) 
        }                
    }
    
    return (
    <>
        <ModalDialog
            title="Confirm"
            message={`Are you sure you want to delete '${fileName}'?`}
            faIcon="fa-regular fa-circle-question"
            buttons={[
                { idButton: "DELETE", caption: "Delete" },					
                { idButton: "CANCEL", caption: "Cancel" },
            ]}
            onButtonClick={(idButton, paramObj) => _onButtonClick(idButton, paramObj)}
            show={show}				
        />
    </>
  )
}
