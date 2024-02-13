import { Image, StyleSheet, View } from '@react-pdf/renderer';
import { FC, useMemo } from 'react';
import { paths } from '../../constants';

interface Props {
  staticDir: string;
  rating: number;
}

export const CVRating: FC<Props> = props => {
  const { staticDir, rating } = props;

  const stars = useMemo(() => new Array(5).fill(0).map((_item, index) => (index < rating ? 1 : 0)), [rating]);
  const emptyStarImage = useMemo(() => `${staticDir}/${paths.IMAGES_DIR}/main_icon_star_empty.png`, []);
  const filledStarImage = useMemo(() => `${staticDir}/${paths.IMAGES_DIR}/main_icon_star_filled.png`, []);

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
    gap: 2,
  },
  image: {
    width: 14,
    height: 14,
  },
});
