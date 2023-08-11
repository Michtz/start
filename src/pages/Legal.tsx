import React, { useContext } from 'react';
import Container from '../component/system/Container';
import { HeaderProps, NavContent } from '../component/types';
import { ContentLegalDE, Headers, NavContentLegal } from '../CreateContent/de/content/CreateContext';

export const Impressum: React.FC = () => {
  const contentDE = useContext(ContentLegalDE);
  const navContent = useContext(NavContentLegal);

  return <Container navContent={navContent} content={contentDE.impressum} title={'Impressum'}/>;
};

export const Datenschutz: React.FC = () => {
  const contentDE = useContext(ContentLegalDE);
  const navContent = useContext(NavContentLegal);

  return <Container navContent={navContent} content={contentDE.datenschutz} title={'Datenschutz'} />;
};


