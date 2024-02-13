import { Document, Font } from '@react-pdf/renderer';
import { FC, useEffect } from 'react';
import { CVLayout } from './CVLayout';
import { CVSidebar } from './CVSidebar';
import { paths } from '../../constants';
import { CVMain } from './CVMain';

interface Props {
  staticDir: string;
}

export const CV: FC<Props> = props => {
  const { staticDir } = props;

  useEffect(() => {
    Font.register({
      family: 'Inter',
      src: `${staticDir}/${paths.FONTS_DIR}/Inter/static/Inter-Light.ttf`,
      fontWeight: 'light',
    });
    Font.register({
      family: 'Inter',
      src: `${staticDir}/${paths.FONTS_DIR}/Inter/static/Inter-Regular.ttf`,
      fontWeight: 'normal',
    });
    Font.register({
      family: 'Inter',
      src: `${staticDir}/${paths.FONTS_DIR}/Inter/static/Inter-Medium.ttf`,
      fontWeight: 'medium',
    });
    Font.register({
      family: 'Inter',
      src: `${staticDir}/${paths.FONTS_DIR}/Inter/static/Inter-Bold.ttf`,
      fontWeight: 'bold',
    });
  }, []);

  return (
    <Document>
      <CVLayout sidebar={<CVSidebar staticDir={staticDir} />} main={<CVMain staticDir={staticDir} />} />
    </Document>
  );
};
