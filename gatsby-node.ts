import ReactPDF from '@react-pdf/renderer';
import fs from 'fs';
import type { GatsbyNode } from 'gatsby';
import path from 'path';
import React from 'react';
import { CV } from './src/components';
import { paths } from './src/constants';

const staticDir = path.join(__dirname, 'static');

export const onPreBootstrap: GatsbyNode['onPreBootstrap'] = () => {
  return generateCVFile();
};

/**
 * Generates PDF file from CV component.
 * @returns Async operation promise
 */
function generateCVFile(): Promise<void> {
  return new Promise((resolve, reject) => {
    ensureDirSync(staticDir);

    const cvDocument = React.createElement(CV);
    const cvFileName = path.join(staticDir, paths.CV_FILE_NAME);

    try {
      ReactPDF.render(cvDocument, cvFileName, () => resolve());
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
