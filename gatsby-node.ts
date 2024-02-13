import ReactPDF, { DocumentProps } from '@react-pdf/renderer';
import fs from 'fs';
import type { GatsbyNode } from 'gatsby';
import path from 'path';
import React, { ReactElement } from 'react';
import { CV } from './src/components';
import { paths } from './src/constants';

const staticDir = path.join(__dirname, paths.STATIC_DIR);

export const onPreBootstrap: GatsbyNode['onPreBootstrap'] = () => {
  return generateCVFile();
};

export const createPages: GatsbyNode['createPages'] = args => {
  if (process.env.NODE_ENV === 'development') {
    args.actions.createPage({
      path: '/cv-dev',
      component: path.resolve('./src/components/CV/pages/CVPreviewPage.tsx'),
    });
  }
};

/**
 * Generates PDF file from CV component.
 * @returns Async operation promise
 */
function generateCVFile(): Promise<void> {
  return new Promise((resolve, reject) => {
    ensureDirSync(staticDir);

    const cvDocument = React.createElement(CV, { staticDir });
    const cvFileName = path.join(staticDir, paths.CV_FILE_PATH);

    try {
      ReactPDF.render(cvDocument as ReactElement<DocumentProps>, cvFileName, () => resolve());
    } catch (error) {
      reject(error);
    }
  });
}

/**
 * Checks the existence of directory and creates it if necessary.
 * @param dirPath Directory path
 */
function ensureDirSync(dirPath: string) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
  }
}
