import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import NavBlock from './Header/nav';
import HeaderBlock from './Header/header';
import DividerBlock from './Header/divider';
import ExpertiseBlock from './Expertise/expertise';
import StrategicBlock from './Strategic/strategic';
import TeamBlock from './Team/team';
import PortfolioBlock from './Portfolio/portfolio';
import ContactBlock from './Contact/contact';
import FooterBlock from './Footer/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBlock></NavBlock>
    <HeaderBlock></HeaderBlock>
    <DividerBlock></DividerBlock>
    <ExpertiseBlock></ExpertiseBlock>
    <StrategicBlock></StrategicBlock>
    <TeamBlock></TeamBlock>
    <PortfolioBlock></PortfolioBlock>
    <ContactBlock></ContactBlock>
    <FooterBlock></FooterBlock>
  </React.StrictMode>
);
