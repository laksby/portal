import { Document, PDFViewer, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import { PageProps } from 'gatsby';
import { FC } from 'react';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

export const CvPage: FC<PageProps> = () => {
  return (
    <PDFViewer className="tw-w-full tw-h-full">
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>Section #1</Text>
          </View>
          <View style={styles.section}>
            <Text>Section #2</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};

export default CvPage;
