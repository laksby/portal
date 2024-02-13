import { Image, StyleSheet, View } from '@react-pdf/renderer';
import { FC, useMemo } from 'react';
import { paths } from '../../constants';

interface Props {
  staticDir: string;
  rating: number;
  type?: Type;
}

type Type = 'default' | 'sidebar';

export const CVRating: FC<Props> = props => {
  const { staticDir, rating, type = 'default' } = props;

  const stars = useMemo(() => new Array(5).fill(0).map((_item, index) => (index < rating ? 1 : 0)), [rating]);
  const emptyStarImage = useMemo(() => `${staticDir}/${paths.IMAGES_DIR}/${typeVariants[type][0]}`, [type]);
  const filledStarImage = useMemo(() => `${staticDir}/${paths.IMAGES_DIR}/${typeVariants[type][1]}`, [type]);

  return (
    <View style={styles.root}>
      {stars.map((star, index) => (
        <Image key={index} source={star === 1 ? filledStarImage : emptyStarImage} style={styles.image} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 1,
  },
  image: {
    width: 10,
    height: 10,
  },
});

const typeVariants: Record<Type, string[]> = {
  default: ['main_icon_star_empty.png', 'main_icon_star_filled.png'],
  sidebar: ['sidebar_icon_star_empty.png', 'sidebar_icon_star_filled.png'],
};
