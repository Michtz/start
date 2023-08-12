import React from 'react';
import Container from '../component/container/legal/Container';
import { useLanguage } from '../CreateContent/LanguageProvider';
import { ScrolbarRemover } from '../component/functions/function';

type LegalProps = {
  type: 'imprint' | 'privacy';
};

const LegalPage: React.FC<LegalProps> = ({ type }) => {
  const { language } = useLanguage();
  const content = language[type];
  ScrolbarRemover();
  return (
    <Container navContent={language.navigations.legal} content={content.content} title={content.title} />
  );
};

export const Impressum: React.FC = () => <LegalPage type="imprint" />;
export const Datenschutz: React.FC = () => <LegalPage type="privacy" />;
