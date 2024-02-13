import { Image, StyleSheet, Text, View } from '@react-pdf/renderer';
import { FC } from 'react';
import { paths } from '../../constants';

interface Props {
  staticDir: string;
}

export const CVSidebar: FC<Props> = props => {
  const { staticDir } = props;

  return (
    <View style={styles.root}>
      <View style={styles.section}>
        <View style={styles.photoContainer}>
          <Image source={`${staticDir}/${paths.IMAGES_DIR}/photo_001.jpg`} style={styles.photo} />
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.section}>
        <View style={styles.contacts}>
          {[
            {
              type: 'Location',
              text: 'Warsaw, Poland',
              image: 'sidebar_icon_location.png',
            },
            {
              type: 'Phone',
              text: '+48 514-502-121',
              image: 'sidebar_icon_phone.png',
            },
            {
              type: 'Email',
              text: 'laksby@icloud.com',
              image: 'sidebar_icon_email.png',
            },
          ].map(contact => (
            <View key={contact.type} style={styles.contactItem}>
              <Image source={`${staticDir}/${paths.IMAGES_DIR}/${contact.image}`} style={styles.contactImage} />
              <Text>{contact.text}</Text>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.divider} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'stretch',
    flexDirection: 'column',
  },
  section: {
    padding: 16,
  },
  photoContainer: {
    padding: 4,
    backgroundColor: '#ffffff',
    borderRadius: '50%',
    marginTop: 8,
    marginBottom: 8,
    marginLeft: 16,
    marginRight: 16,
  },
  photo: {
    borderRadius: '50%',
    width: '100%',
    height: 'auto',
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomStyle: 'dotted',
    borderBottomColor: '#666666',
    marginLeft: 8,
    marginRight: 8,
  },
  contacts: {
    fontSize: 10,
    fontWeight: 'medium',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 8,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  contactImage: {
    width: 12,
    height: 12,
  },
});
