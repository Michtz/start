import React from 'react';
import Container from '../component/container/legal/Container';
import { useLanguage } from '../CreateContent/LanguageProvider';

type LegalProps = {
  type: 'imprint' | 'privacy';
};

const LegalPage: React.FC<LegalProps> = ({ type }) => {
  const { language } = useLanguage();
  const content = language[type];

  return (
    <Container navContent={language.navigations.legal} content={content.content} title={content.title} />
  );
};

export const Impressum: React.FC = () => <LegalPage type="imprint" />;
export const Datenschutz: React.FC = () => <LegalPage type="privacy" />;
