import Head from "next/head";
import { useSpring, animated } from 'react-spring';
import { v4 as uuidv4 } from 'uuid';
import { useCallback, useEffect, useState } from "react";

import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { AiOutlineDelete } from "react-icons/ai";
import { FaRegHandPointUp, FaRegHandPointDown } from "react-icons/fa";

import Input from "../../components/Input";
import { Container, NavBar, Body, List, ListHeader, Actions, AddToListForm, ToDo, DeleteButton, Button, EmptyLists, Info } from '../../styles/donext/styles';
import ListTitleForm from '../../styles/donext/components/ListTitleForm';
import BackToHomeButton from "../../components/BackToHomeButton";

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

const TodoApp: React.FC = () => {
  // Array that contains all the lists, each list has its own TODOs.
  const [lists, setLists] = useState<IList[]>([]);

  // Load lists from local storage if it exists.
  useEffect((): void =>{
    console.log("Loading lists from local storage")
    // Check if the lists exists on local storage.
    const savedLists = localStorage.getItem("DoNext@Lists");
    
    // Creates a empty initial value for lists state.
    let initialValue = [];

    // If the lists exists, the initial value will be set.
    if(savedLists){
      initialValue = JSON.parse(savedLists);
    }

    // Set initial value to lists state.
    setLists(initialValue);
  }, [])

  // Save lists state to browser local storage.
  const saveLists = useCallback((newListsState: IList[]): void => {
    setLists([...newListsState]);

    localStorage.setItem("DoNext@Lists", JSON.stringify(newListsState));

  },[lists])

  // Creates a new list inside lists state
  const createNewList = useCallback((): void => {
    
    // Creates a new list structure
    const newList: IList = {
      id:uuidv4(),
      title:"List name",
      items: []
    };

    // Copy existing lists
    let listsCopy = lists;

    // Add the new list to the array in the first position. The last created list will display first.
    listsCopy.unshift(newList);

    saveLists([...listsCopy]);

  },[lists])

  // Changes list name. It receives the list_id and the new list_title
  const changeListTitle = useCallback((data)=>{

    

    const {list_id, list_title} = data;

    // Find the list_id index
    let listIndex = lists.findIndex(list => list.id === list_id )

    if(list_title===lists[listIndex].title){
        console.log('Title did not change')
        return;
    }

    // Copy existing lists
    let listsCopy = lists;

    if(listIndex>=0){
      
      listsCopy[listIndex].title = list_title;
    
      saveLists([...listsCopy]);
    }

  },[lists])

  // Remove a list from the lists array. It receives only the list id.
  const removeList = useCallback(( list_id: string ) => {

    // Find the list_id index
    const listIndex = lists.findIndex(list => list.id == list_id )

    // Creates a copy of the lists state
    let listsCopy = lists;
    console.log(listsCopy)

    // Remove the selected list from listsCopy.
    listsCopy.splice(listIndex, 1)

    console.log('aaaa',listsCopy)

    saveLists([...listsCopy]);
  },[lists])

  // Add item to a list. Receives the list_id and new item value.
  const addToList = useCallback((data:any,{ reset }) => {
    // Clear new item form.
    reset();

    const { new_item, list_id } = data;

    // Find the list_id index.
    const listIndex = lists.findIndex(list => list.id == list_id )

    // Creates a copy of the lists state
    let listsCopy = lists;

    if(listIndex!==-1){
      // Create the item structure.
      const newListItem = {
        id:uuidv4(),
        checked: false,
        value: new_item
      }

      listsCopy[listIndex].items.push(newListItem);

      saveLists([...listsCopy]);
    }
    
  },[lists]);

  // Removes item from a list. It receives the item id and the list id.
  const removeItemFromList = useCallback((item_id, list_id): void => {
    
    // Find list_id index 
    const listIndex = lists.findIndex(list => list.id == list_id);

    // Creates a copy of the lists state
    let listsCopy = lists;

    // If list exists will remove the item with the item_id
    if(listIndex!==-1){

      listsCopy[listIndex].items.filter((item, index, arr)=>{

        if(item.id === item_id){
          arr.splice(index,1)
        }

        return item;
      });
      
      saveLists([...listsCopy]);
    }
  },[lists])

  // Toggle item checked
  const toggleItemChecked = useCallback((item_id, list_id) => {

    // Find list_id index 
    const listIndex = lists.findIndex(list => list.id == list_id);

    // Creates a copy of the lists state
    let listsCopy = lists;

    if(listIndex!==-1){

      listsCopy[listIndex].items.filter((item, index, arr)=>{
        if(item.id === item_id){
          item.checked = !item.checked;
        }
      });
      
      saveLists([...listsCopy]);
    }
  },[lists])

  return (<>
    <Head>
        <title>Do Next</title>
        <meta name="description" content="Do next. Todo aplication that you can create how many lists you want. They are stored in the browser local storage."/>
    </Head>
    
    <Container>
      <NavBar> 
        <svg  viewBox="0 0 166 94" xmlns="http://www.w3.org/2000/svg">
          <mask id="path-1-outside-1_21_23" maskUnits="userSpaceOnUse" x="29.2798" y="45.5002" width="128" height="40" fill="black">
          <rect fill="white" x="29.2798" y="45.5002" width="128" height="40"/>
          <path d="M47.2412 79.2152C48.1136 78.3093 48.8015 77.2691 49.3048 76.0947C49.8417 74.9203 50.1101 73.6453 50.1101 72.2696C50.1101 70.9274 49.8417 69.6524 49.3048 68.4444C48.8015 67.2365 48.1136 66.1796 47.2412 65.2736C46.3353 64.4012 45.2616 63.7133 44.0201 63.21C42.8121 62.6732 41.5203 62.4047 40.1446 62.4047C38.7689 62.4047 37.4771 62.6732 36.2692 63.21C35.0612 63.7133 34.021 64.4012 33.1487 65.2736C32.2427 66.1796 31.5381 67.2365 31.0348 68.4444C30.5315 69.6524 30.2798 70.9274 30.2798 72.2696C30.2798 73.6453 30.5315 74.9371 31.0348 76.145C31.5381 77.3194 32.2427 78.3428 33.1487 79.2152C34.021 80.1212 35.0444 80.8258 36.2188 81.3291C37.4268 81.8324 38.7354 82.0841 40.1446 82.0841C41.5203 82.0841 42.8121 81.8324 44.0201 81.3291C45.2616 80.8258 46.3353 80.1212 47.2412 79.2152ZM34.6082 77.7556C33.9036 77.0845 33.35 76.2792 32.9473 75.3397C32.5447 74.4002 32.3434 73.3768 32.3434 72.2696C32.3434 71.1958 32.5447 70.1892 32.9473 69.2497C33.35 68.3102 33.9036 67.4714 34.6082 66.7332C35.3129 66.0286 36.1349 65.4749 37.0744 65.0723C38.014 64.6696 39.0206 64.4683 40.0943 64.4683C41.168 64.4683 42.1746 64.6696 43.1141 65.0723C44.0872 65.4749 44.926 66.0286 45.6307 66.7332C46.3688 67.4714 46.9393 68.327 47.3419 69.3001C47.7446 70.2396 47.9459 71.2294 47.9459 72.2696C47.9459 73.3768 47.7446 74.4002 47.3419 75.3397C46.9393 76.2792 46.3688 77.0845 45.6307 77.7556C44.926 78.4938 44.0872 79.0642 43.1141 79.4669C42.1746 79.8695 41.168 80.0708 40.0943 80.0708C39.0206 80.0708 38.014 79.8695 37.0744 79.4669C36.1349 79.0642 35.3129 78.4938 34.6082 77.7556Z"/>
          <path d="M88.4542 48.4631H92.682V46.5002H82.5655V48.4631H86.3907V77.1013L86.5417 78.7119L85.5854 77.4033L59.0611 46.5002H53.6254V48.4631H57.7022V79.7688H53.6254V81.7317H63.7419V79.7688H59.7657V51.4327L59.6651 49.9731L60.571 51.1307L88.4542 83.3423V48.4631Z"/>
          <path d="M106.055 64.4683C107.364 64.4683 108.538 64.8374 109.578 65.5756C110.652 66.2802 111.491 67.2029 112.095 68.3438C109.813 69.2497 107.531 70.1557 105.25 71.0616C103.002 71.934 100.737 72.8232 98.4551 73.7292C98.2202 72.5883 98.237 71.4811 98.5054 70.4073C98.7739 69.3001 99.2436 68.3102 99.9147 67.4378C100.619 66.5319 101.492 65.8105 102.532 65.2736C103.606 64.7367 104.78 64.4683 106.055 64.4683ZM112.648 79.4669L111.39 77.9569C110.685 78.628 109.88 79.1481 108.974 79.5172C108.068 79.8863 107.095 80.0708 106.055 80.0708C104.478 80.0708 103.069 79.6682 101.827 78.8629C100.586 78.0576 99.663 77.0007 99.0591 75.6921C101.676 74.6183 104.277 73.5782 106.86 72.5716C109.478 71.5649 112.095 70.5415 114.712 69.5014C114.376 68.4948 113.94 67.572 113.403 66.7332C112.866 65.8608 112.246 65.1226 111.541 64.5186C110.803 63.8476 109.964 63.3443 109.025 63.0087C108.085 62.6396 107.095 62.4551 106.055 62.4551C104.679 62.4551 103.388 62.7235 102.18 63.2604C101.005 63.7637 99.965 64.4515 99.0591 65.3239C98.1531 66.1963 97.4485 67.2365 96.9452 68.4444C96.4419 69.6524 96.1902 70.9274 96.1902 72.2696C96.1902 73.6453 96.4419 74.9203 96.9452 76.0947C97.4485 77.2691 98.1531 78.3093 99.0591 79.2152C99.965 80.1212 101.005 80.8258 102.18 81.3291C103.388 81.8324 104.679 82.0841 106.055 82.0841C107.364 82.0841 108.572 81.8492 109.679 81.3794C110.786 80.9097 111.776 80.2721 112.648 79.4669Z"/>
          <path d="M127.667 81.7317V79.7688H124.698C125.402 78.7622 126.107 77.7724 126.812 76.7993C127.55 75.7927 128.271 74.7693 128.976 73.7292C129.714 74.7358 130.436 75.7424 131.14 76.749C131.878 77.7221 132.633 78.7287 133.405 79.7688H130.486V81.7317H140.2V79.7688H135.972C135.066 78.5609 134.177 77.3697 133.304 76.1954C132.466 75.021 131.61 73.8298 130.738 72.6219L136.324 64.8206H140.2V62.8577H130.939V64.8206H133.858L129.429 71.0113L124.949 64.8206H128.12V62.8577H118.407V64.8206H122.433C123.305 66.0621 124.178 67.27 125.05 68.4444C125.956 69.6188 126.845 70.81 127.718 72.0179C126.778 73.3265 125.839 74.6183 124.899 75.8934C123.993 77.1684 123.07 78.4602 122.131 79.7688H118.407V81.7317H127.667Z"/>
          <path d="M154.289 81.7317V79.7688H150.162V64.871H156V62.8577H150.162V50.577H148.098V62.8577H143.719V64.871H148.098V81.7317H154.289Z"/>
          </mask>
          <path d="M47.2412 79.2152C48.1136 78.3093 48.8015 77.2691 49.3048 76.0947C49.8417 74.9203 50.1101 73.6453 50.1101 72.2696C50.1101 70.9274 49.8417 69.6524 49.3048 68.4444C48.8015 67.2365 48.1136 66.1796 47.2412 65.2736C46.3353 64.4012 45.2616 63.7133 44.0201 63.21C42.8121 62.6732 41.5203 62.4047 40.1446 62.4047C38.7689 62.4047 37.4771 62.6732 36.2692 63.21C35.0612 63.7133 34.021 64.4012 33.1487 65.2736C32.2427 66.1796 31.5381 67.2365 31.0348 68.4444C30.5315 69.6524 30.2798 70.9274 30.2798 72.2696C30.2798 73.6453 30.5315 74.9371 31.0348 76.145C31.5381 77.3194 32.2427 78.3428 33.1487 79.2152C34.021 80.1212 35.0444 80.8258 36.2188 81.3291C37.4268 81.8324 38.7354 82.0841 40.1446 82.0841C41.5203 82.0841 42.8121 81.8324 44.0201 81.3291C45.2616 80.8258 46.3353 80.1212 47.2412 79.2152ZM34.6082 77.7556C33.9036 77.0845 33.35 76.2792 32.9473 75.3397C32.5447 74.4002 32.3434 73.3768 32.3434 72.2696C32.3434 71.1958 32.5447 70.1892 32.9473 69.2497C33.35 68.3102 33.9036 67.4714 34.6082 66.7332C35.3129 66.0286 36.1349 65.4749 37.0744 65.0723C38.014 64.6696 39.0206 64.4683 40.0943 64.4683C41.168 64.4683 42.1746 64.6696 43.1141 65.0723C44.0872 65.4749 44.926 66.0286 45.6307 66.7332C46.3688 67.4714 46.9393 68.327 47.3419 69.3001C47.7446 70.2396 47.9459 71.2294 47.9459 72.2696C47.9459 73.3768 47.7446 74.4002 47.3419 75.3397C46.9393 76.2792 46.3688 77.0845 45.6307 77.7556C44.926 78.4938 44.0872 79.0642 43.1141 79.4669C42.1746 79.8695 41.168 80.0708 40.0943 80.0708C39.0206 80.0708 38.014 79.8695 37.0744 79.4669C36.1349 79.0642 35.3129 78.4938 34.6082 77.7556Z" fill="white"/>
          <path d="M88.4542 48.4631H92.682V46.5002H82.5655V48.4631H86.3907V77.1013L86.5417 78.7119L85.5854 77.4033L59.0611 46.5002H53.6254V48.4631H57.7022V79.7688H53.6254V81.7317H63.7419V79.7688H59.7657V51.4327L59.6651 49.9731L60.571 51.1307L88.4542 83.3423V48.4631Z" fill="white"/>
          <path d="M106.055 64.4683C107.364 64.4683 108.538 64.8374 109.578 65.5756C110.652 66.2802 111.491 67.2029 112.095 68.3438C109.813 69.2497 107.531 70.1557 105.25 71.0616C103.002 71.934 100.737 72.8232 98.4551 73.7292C98.2202 72.5883 98.237 71.4811 98.5054 70.4073C98.7739 69.3001 99.2436 68.3102 99.9147 67.4378C100.619 66.5319 101.492 65.8105 102.532 65.2736C103.606 64.7367 104.78 64.4683 106.055 64.4683ZM112.648 79.4669L111.39 77.9569C110.685 78.628 109.88 79.1481 108.974 79.5172C108.068 79.8863 107.095 80.0708 106.055 80.0708C104.478 80.0708 103.069 79.6682 101.827 78.8629C100.586 78.0576 99.663 77.0007 99.0591 75.6921C101.676 74.6183 104.277 73.5782 106.86 72.5716C109.478 71.5649 112.095 70.5415 114.712 69.5014C114.376 68.4948 113.94 67.572 113.403 66.7332C112.866 65.8608 112.246 65.1226 111.541 64.5186C110.803 63.8476 109.964 63.3443 109.025 63.0087C108.085 62.6396 107.095 62.4551 106.055 62.4551C104.679 62.4551 103.388 62.7235 102.18 63.2604C101.005 63.7637 99.965 64.4515 99.0591 65.3239C98.1531 66.1963 97.4485 67.2365 96.9452 68.4444C96.4419 69.6524 96.1902 70.9274 96.1902 72.2696C96.1902 73.6453 96.4419 74.9203 96.9452 76.0947C97.4485 77.2691 98.1531 78.3093 99.0591 79.2152C99.965 80.1212 101.005 80.8258 102.18 81.3291C103.388 81.8324 104.679 82.0841 106.055 82.0841C107.364 82.0841 108.572 81.8492 109.679 81.3794C110.786 80.9097 111.776 80.2721 112.648 79.4669Z" fill="white"/>
          <path d="M127.667 81.7317V79.7688H124.698C125.402 78.7622 126.107 77.7724 126.812 76.7993C127.55 75.7927 128.271 74.7693 128.976 73.7292C129.714 74.7358 130.436 75.7424 131.14 76.749C131.878 77.7221 132.633 78.7287 133.405 79.7688H130.486V81.7317H140.2V79.7688H135.972C135.066 78.5609 134.177 77.3697 133.304 76.1954C132.466 75.021 131.61 73.8298 130.738 72.6219L136.324 64.8206H140.2V62.8577H130.939V64.8206H133.858L129.429 71.0113L124.949 64.8206H128.12V62.8577H118.407V64.8206H122.433C123.305 66.0621 124.178 67.27 125.05 68.4444C125.956 69.6188 126.845 70.81 127.718 72.0179C126.778 73.3265 125.839 74.6183 124.899 75.8934C123.993 77.1684 123.07 78.4602 122.131 79.7688H118.407V81.7317H127.667Z" fill="white"/>
          <path d="M154.289 81.7317V79.7688H150.162V64.871H156V62.8577H150.162V50.577H148.098V62.8577H143.719V64.871H148.098V81.7317H154.289Z" fill="white"/>
          <path d="M47.2412 79.2152C48.1136 78.3093 48.8015 77.2691 49.3048 76.0947C49.8417 74.9203 50.1101 73.6453 50.1101 72.2696C50.1101 70.9274 49.8417 69.6524 49.3048 68.4444C48.8015 67.2365 48.1136 66.1796 47.2412 65.2736C46.3353 64.4012 45.2616 63.7133 44.0201 63.21C42.8121 62.6732 41.5203 62.4047 40.1446 62.4047C38.7689 62.4047 37.4771 62.6732 36.2692 63.21C35.0612 63.7133 34.021 64.4012 33.1487 65.2736C32.2427 66.1796 31.5381 67.2365 31.0348 68.4444C30.5315 69.6524 30.2798 70.9274 30.2798 72.2696C30.2798 73.6453 30.5315 74.9371 31.0348 76.145C31.5381 77.3194 32.2427 78.3428 33.1487 79.2152C34.021 80.1212 35.0444 80.8258 36.2188 81.3291C37.4268 81.8324 38.7354 82.0841 40.1446 82.0841C41.5203 82.0841 42.8121 81.8324 44.0201 81.3291C45.2616 80.8258 46.3353 80.1212 47.2412 79.2152ZM34.6082 77.7556C33.9036 77.0845 33.35 76.2792 32.9473 75.3397C32.5447 74.4002 32.3434 73.3768 32.3434 72.2696C32.3434 71.1958 32.5447 70.1892 32.9473 69.2497C33.35 68.3102 33.9036 67.4714 34.6082 66.7332C35.3129 66.0286 36.1349 65.4749 37.0744 65.0723C38.014 64.6696 39.0206 64.4683 40.0943 64.4683C41.168 64.4683 42.1746 64.6696 43.1141 65.0723C44.0872 65.4749 44.926 66.0286 45.6307 66.7332C46.3688 67.4714 46.9393 68.327 47.3419 69.3001C47.7446 70.2396 47.9459 71.2294 47.9459 72.2696C47.9459 73.3768 47.7446 74.4002 47.3419 75.3397C46.9393 76.2792 46.3688 77.0845 45.6307 77.7556C44.926 78.4938 44.0872 79.0642 43.1141 79.4669C42.1746 79.8695 41.168 80.0708 40.0943 80.0708C39.0206 80.0708 38.014 79.8695 37.0744 79.4669C36.1349 79.0642 35.3129 78.4938 34.6082 77.7556Z" stroke="white" mask="url(#path-1-outside-1_21_23)"/>
          <path d="M88.4542 48.4631H92.682V46.5002H82.5655V48.4631H86.3907V77.1013L86.5417 78.7119L85.5854 77.4033L59.0611 46.5002H53.6254V48.4631H57.7022V79.7688H53.6254V81.7317H63.7419V79.7688H59.7657V51.4327L59.6651 49.9731L60.571 51.1307L88.4542 83.3423V48.4631Z" stroke="white" mask="url(#path-1-outside-1_21_23)"/>
          <path d="M106.055 64.4683C107.364 64.4683 108.538 64.8374 109.578 65.5756C110.652 66.2802 111.491 67.2029 112.095 68.3438C109.813 69.2497 107.531 70.1557 105.25 71.0616C103.002 71.934 100.737 72.8232 98.4551 73.7292C98.2202 72.5883 98.237 71.4811 98.5054 70.4073C98.7739 69.3001 99.2436 68.3102 99.9147 67.4378C100.619 66.5319 101.492 65.8105 102.532 65.2736C103.606 64.7367 104.78 64.4683 106.055 64.4683ZM112.648 79.4669L111.39 77.9569C110.685 78.628 109.88 79.1481 108.974 79.5172C108.068 79.8863 107.095 80.0708 106.055 80.0708C104.478 80.0708 103.069 79.6682 101.827 78.8629C100.586 78.0576 99.663 77.0007 99.0591 75.6921C101.676 74.6183 104.277 73.5782 106.86 72.5716C109.478 71.5649 112.095 70.5415 114.712 69.5014C114.376 68.4948 113.94 67.572 113.403 66.7332C112.866 65.8608 112.246 65.1226 111.541 64.5186C110.803 63.8476 109.964 63.3443 109.025 63.0087C108.085 62.6396 107.095 62.4551 106.055 62.4551C104.679 62.4551 103.388 62.7235 102.18 63.2604C101.005 63.7637 99.965 64.4515 99.0591 65.3239C98.1531 66.1963 97.4485 67.2365 96.9452 68.4444C96.4419 69.6524 96.1902 70.9274 96.1902 72.2696C96.1902 73.6453 96.4419 74.9203 96.9452 76.0947C97.4485 77.2691 98.1531 78.3093 99.0591 79.2152C99.965 80.1212 101.005 80.8258 102.18 81.3291C103.388 81.8324 104.679 82.0841 106.055 82.0841C107.364 82.0841 108.572 81.8492 109.679 81.3794C110.786 80.9097 111.776 80.2721 112.648 79.4669Z" stroke="white" mask="url(#path-1-outside-1_21_23)"/>
          <path d="M127.667 81.7317V79.7688H124.698C125.402 78.7622 126.107 77.7724 126.812 76.7993C127.55 75.7927 128.271 74.7693 128.976 73.7292C129.714 74.7358 130.436 75.7424 131.14 76.749C131.878 77.7221 132.633 78.7287 133.405 79.7688H130.486V81.7317H140.2V79.7688H135.972C135.066 78.5609 134.177 77.3697 133.304 76.1954C132.466 75.021 131.61 73.8298 130.738 72.6219L136.324 64.8206H140.2V62.8577H130.939V64.8206H133.858L129.429 71.0113L124.949 64.8206H128.12V62.8577H118.407V64.8206H122.433C123.305 66.0621 124.178 67.27 125.05 68.4444C125.956 69.6188 126.845 70.81 127.718 72.0179C126.778 73.3265 125.839 74.6183 124.899 75.8934C123.993 77.1684 123.07 78.4602 122.131 79.7688H118.407V81.7317H127.667Z" stroke="white" mask="url(#path-1-outside-1_21_23)"/>
          <path d="M154.289 81.7317V79.7688H150.162V64.871H156V62.8577H150.162V50.577H148.098V62.8577H143.719V64.871H148.098V81.7317H154.289Z" stroke="white" mask="url(#path-1-outside-1_21_23)"/>
          <path d="M17.75 65.4844L16.25 66.5229V25.4756L17.75 26.5082V65.4844Z" fill="white" stroke="white" strokeWidth="0.5"/>
          <path d="M13.9436 10.2505L43.9671 45.8808L41.5889 45.8808L10.5475 10.2647L13.9436 10.2505ZM41.5889 46.6499L43.9671 46.6498L13.9436 82.2801L10.5475 82.2659L41.5889 46.6499Z" fill="white" stroke="white" strokeWidth="0.5"/>
        </svg>
        <span>List What You Are Going To DoNext</span>
      </NavBar>
      
      <Actions> 
        <Button onClick={createNewList}>+ New List</Button>
      </Actions>

      <Body>
        {lists.length > 0 ? lists.map(list =>(
            <List key={list.id}>
              <ListHeader>
                <ListTitleForm list={list} onFormSubmit={changeListTitle}/>
                  <span>({list.items.length} {list.items.length===1?'item':'items'})</span>
                <DeleteButton onClick={()=>removeList(list.id)}><AiOutlineDelete/></DeleteButton>
              </ListHeader>
              
              <ul>
                {list.items.length>0 ? list.items.map(item =>(
                  <ToDo key={item.id} checked={item.checked}>
                      <div onClick={()=> toggleItemChecked(item.id, list.id)}>
                        {item.checked ? <ImCheckboxChecked color='#007E34'/>:<ImCheckboxUnchecked/>}
                      </div>
                      <p>{item.value}</p>
                      <DeleteButton onClick={()=>removeItemFromList(item.id, list.id)}><AiOutlineDelete/></DeleteButton>
                  </ToDo>
                )): <div>

                  <span>Tip: You can edit the list name by clicking it. After editing just press ENTER to save.</span>
                  <p>Empty list, add a new item:</p>
                  <FaRegHandPointDown/>
                </div>
                }
                
              </ul>
              <AddToListForm onSubmit={addToList} initialData={{ list_id: list.id}}>
                  <Input name="new_item" type="text" placeholder="Add item to list" autoComplete="off"/>
                  <button type="submit">+</button>
                  <Input type="hidden" name="list_id" defaultValue={list.id} />
              </AddToListForm>
            </List>
        )) :
          <EmptyLists>
            <FaRegHandPointUp/>
            <p>Click here to create a new list. </p>
          </EmptyLists>}
      </Body>
      <Info>
        <span>Tips:</span>
        <p>- Create your first list by clicking at "New List" button.</p>
        <p>- Edit the list name by clicking at the list name. Press Enter to save.</p>
        <p>- Add a new item to the list in the "Add Item to list" input.</p>
        <p>- Delete items or lists by clicking on trash icon (<AiOutlineDelete color='red'/>)</p>

      </Info>
      
    </Container>
    <BackToHomeButton backgroundColor='#8D708E' textColor='#000'/>
  </>);
}

export default TodoApp;