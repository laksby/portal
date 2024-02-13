import { StyleSheet, Text } from '@react-pdf/renderer';
import { FC } from 'react';

export const CVBullet: FC = () => {
  return <Text style={styles.root}>■</Text>;
};

const styles = StyleSheet.create({
  root: {
    color: '#2196F3',
  },
});
