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
    
    return <>
        <StyledListTitleForm 
            autoComplete="off"
            ref={formRef}
            onSubmit={onFormSubmit} 
            initialData={{ list_title: list.title, list_id: list.id}}
        >
            <Input type="text" name="list_title"  defaultValue={list.title} autoComplete="off"/>
            <Input type="hidden" name="list_id" defaultValue={list.id}/>
        </StyledListTitleForm>
    </>
}

export default ListTitleForm;