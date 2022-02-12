import React, { useCallback, useRef, useState } from 'react';

import { ListTitleForm as StyledListTitleForm } from '../../styles/todoapp';
import { BiSave } from "react-icons/bi";
import Input from '../../../components/Input';

interface IItem{
    id: string;
    checked: boolean;
    value:string;
}

interface IList{
    id: string;
    title:string;
    items:IItem[];
}
  
interface IListTitleFormProps {
    list: IList;
    onFormSubmit:any;
}

const ListTitleForm: React.FC<IListTitleFormProps> = ({list, onFormSubmit}) => {
    const formRef = useRef(null);
    
    const handleSubmit = useCallback((data) =>{
        const {list_id, list_title} = data;

        // Checks if list title changed, if not, it will not send the change to localstorage
        if(list_title===list.title){
            console.log('Title did not change')
            return;
        }
        
        onFormSubmit(list_id, list_title);
    },[])

    return <>
        <StyledListTitleForm 
            ref={formRef}
            onSubmit={handleSubmit} 
            initialData={{ list_title: list.title, list_id: list.id}}
        >
            <Input type="text" name="list_title"  defaultValue={list.title}/>
            <Input type="hidden" name="list_id" defaultValue={list.id}/>
        </StyledListTitleForm>
    </>
}

export default ListTitleForm;