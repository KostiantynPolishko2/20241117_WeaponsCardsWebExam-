import React, { FC, useState, useEffect, useContext } from 'react';
import WeaponsItemsTableTitle from './WeaponsItemsTableTitle';
import WeaponsItemsTableRow from './WeaponsItemsTableRow';
import './WeaponsItemsTable.css';
import { HandleNameContext } from '../AdminPage/AdminPage';
import { WeaponsItemsTabelWrapper, BtnShowHide } from './WeaponsItemsTable.styled';

interface WeaponsItemsTableProps {
   flag: boolean
}

const WeaponsItemsTable: FC<WeaponsItemsTableProps> = (props) => {

   const [isDisplay, setIsDisplay] = useState<boolean>(false);
   const [display, setDisplay] = useState<string>('none');
   const [btnTitle, setBtnTitle] = useState<string>('SHOW');

   const _handleName = useContext(HandleNameContext);

   const handleDisplay = () => {
      setIsDisplay(!isDisplay);
   };

   useEffect(() => {
      if (!props.flag){
         setIsDisplay(!isDisplay);
      }
   }, [props.flag])

   useEffect(()=> {   
      if(isDisplay){
         setDisplay('block');
         setBtnTitle('HIDE');
      }
      else{
         setDisplay('none');
         setBtnTitle('SHOW');
         _handleName(null);
      }
   }
   , [isDisplay, _handleName]);

   return (
      <WeaponsItemsTabelWrapper className='table-container' >
         <div className="table-header">
            <h2>Список вооружений ВСУ</h2>
            <BtnShowHide className="download-button" onClick={handleDisplay} isDisable={!props.flag}>{btnTitle}</BtnShowHide>
         </div>
         <div style={{display: display}}>
            <table>
               <WeaponsItemsTableTitle/>
               <WeaponsItemsTableRow isLoad={isDisplay}/>
            </table>
         </div>
      </WeaponsItemsTabelWrapper>
   );
}

export default WeaponsItemsTable;
