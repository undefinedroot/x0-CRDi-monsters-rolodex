import React from 'react';
import './card-list.styles.css';

import { Card } from './../card/card.component';

// props has a default 'children'
// which is passed inside of the component
// props name is the property name used in
// consuming the component where value is passed

// when returning an array of components, always add a unique key value
// for performance purposes

export const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map(monster => (
      <Card key={monster.id} monster={monster}></Card>
    ))}
  </div>
);
