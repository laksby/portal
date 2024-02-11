import { PageProps } from 'gatsby';
import { FC, useEffect, useState } from 'react';
import { useWindowSize } from 'react-use';

export const CvPage: FC<PageProps> = () => {
  const [pageHeight, setPageHeight] = useState(0);
  const { width, height } = useWindowSize();

  useEffect(() => {
    setPageHeight(window.innerHeight);
  }, [width, height]);

  return (
    <div style={{ height: pageHeight }}>
      <embed src="/cv.pdf" className="tw-w-full tw-h-full" type="application/pdf" />
    </div>
  );
};

export default CvPage;
