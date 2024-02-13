import { StyleSheet, Text, View } from '@react-pdf/renderer';
import { FC } from 'react';

interface Props {
  tech: string;
}

export const CVTech: FC<Props> = props => {
  const { tech } = props;

  return (
    <View style={styles.root}>
      <Text>{tech}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    fontSize: 10,
    fontWeight: 'medium',
    backgroundColor: '#666666',
    color: '#ffffff',
    padding: '1px 4px',
    borderRadius: 4,
  },
});
