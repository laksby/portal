import { PDFViewer } from '@react-pdf/renderer';
import { PageProps } from 'gatsby';
import { FC, useEffect, useMemo, useState } from 'react';
import { useWindowSize } from 'react-use';
import { CV } from '../CV';

export const CVPreviewPage: FC<PageProps> = () => {
  const [pageHeight, setPageHeight] = useState(0);
  const { width, height } = useWindowSize();

  const staticDir = useMemo(() => {
    const url = new URL(window.location.href);
    url.pathname = '';
    return url.href;
  }, []);

  useEffect(() => {
    setPageHeight(window.innerHeight);
  }, [width, height]);

  return (
    <div style={{ height: pageHeight }}>
      <PDFViewer className="tw-w-full tw-h-full">
        <CV staticDir={staticDir} />
      </PDFViewer>
    </div>
  );
};

export default CVPreviewPage;
