import { PageProps } from 'gatsby';
import { FC, useEffect, useState } from 'react';
import { useWindowSize } from 'react-use';
import { paths } from '../constants';

export const CvPage: FC<PageProps> = () => {
  const [pageHeight, setPageHeight] = useState(0);
  const { width, height } = useWindowSize();

  useEffect(() => {
    setPageHeight(window.innerHeight);
  }, [width, height]);

  return (
    <div style={{ height: pageHeight }}>
      <embed
        src={
          process.env.NODE_ENV === 'development'
            ? `/${paths.CV_FILE_PATH}`
            : `${paths.GATSBY_PATH_PREFIX}/${paths.CV_FILE_PATH}`
        }
        className="tw-w-full tw-h-full"
        type="application/pdf"
      />
    </div>
  );
};

export default CvPage;
