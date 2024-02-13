import { StyleSheet, Text, View } from '@react-pdf/renderer';
import { Style } from '@react-pdf/types';
import { FC } from 'react';

interface Props {
  tech: string;
  style?: StyleType;
}

type StyleType = 'normal' | 'dark';

export const CVTech: FC<Props> = props => {
  const { tech, style = 'normal' } = props;

  return (
    <View style={[styles.root, styleTypeVariants[style]]}>
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

const styleTypeVariants: Record<StyleType, Style> = {
  normal: {
    backgroundColor: '#666666',
    color: '#ffffff',
  },
  dark: {
    backgroundColor: '#2196F3',
    color: '#262626',
  },
};
