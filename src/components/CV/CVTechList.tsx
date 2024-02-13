import { StyleSheet, View } from '@react-pdf/renderer';
import { Style } from '@react-pdf/types';
import { FC, PropsWithChildren } from 'react';

interface Props {
  style?: Style;
}

export const CVTechList: FC<PropsWithChildren<Props>> = props => {
  const { style = {}, children } = props;

  return <View style={[styles.root, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
  },
});
