import { Page, StyleSheet, View } from '@react-pdf/renderer';
import { FC, ReactNode } from 'react';

interface Props {
  sidebar: ReactNode;
  main: ReactNode;
}

export const CVLayout: FC<Props> = props => {
  const { sidebar, main } = props;

  return (
    <Page size="A4" style={styles.root}>
      <View style={styles.sidebar}>{sidebar}</View>
      <View style={styles.main}>{main}</View>
    </Page>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    fontFamily: 'Inter',
    fontSize: 14,
    color: '#262626',
    paddingVertical: 16,
  },
  sidebar: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    backgroundColor: '#333333',
    color: '#ffffff',
    width: 150,
    borderRightWidth: 4,
    borderRightStyle: 'solid',
    borderRightColor: '#666666',
  },
  main: {
    paddingLeft: 170,
    paddingRight: 16,
  },
});
