import React from 'react';
import { Header as HeaderComponent, Icon, Header } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import './styles/Header.css';

export default function AppHeader() {
  return (
    <div className="app-header">
      <HeaderComponent as='h2' className='header-text'>
        <Icon name='glass martini' color='olive' circular inverted className='header-icon'/>
        <HeaderComponent.Content>
          Trendy Eats
          <HeaderComponent.Subheader className='sub-header-text'>
            Find trending places to eat/drink in your city.
          </HeaderComponent.Subheader>
        </HeaderComponent.Content>
      </HeaderComponent>
    </div>
  );
};