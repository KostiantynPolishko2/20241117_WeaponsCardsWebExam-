import React, { FC } from 'react';
import './WeaponsItemsTable.css';

interface WeaponsTableTitleProps {}

const WeaponsTableTitle: FC<WeaponsTableTitleProps> = () => (
   <thead>
      <tr>
         <th style={{width: 'auto'}}>№</th>
         <th style={{width: '20%'}}>Model</th>
         <th style={{width: '40%'}}>Name</th>
         <th style={{width: '40%'}}>Type</th>
      </tr>
   </thead>
);

export default WeaponsTableTitle;
