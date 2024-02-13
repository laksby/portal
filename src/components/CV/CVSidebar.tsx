import { Image, StyleSheet, Text, View } from '@react-pdf/renderer';
import { FC } from 'react';
import { paths } from '../../constants';
import { CVTechList } from './CVTechList';
import { CVTech } from './CVTech';
import { CVBullet } from './CVBullet';
import { CVRating } from './CVRating';

interface Props {
  staticDir: string;
}

export const CVSidebar: FC<Props> = props => {
  const { staticDir } = props;

  return (
    <View style={styles.root}>
      <View style={styles.photoSection}>
        <View style={styles.photoContainer}>
          <Image source={`${staticDir}/${paths.IMAGES_DIR}/photo_001.jpg`} style={styles.photo} />
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.section}>
        <View style={styles.list}>
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
            <View key={contact.type} style={styles.listItem}>
              <Image source={`${staticDir}/${paths.IMAGES_DIR}/${contact.image}`} style={styles.contactImage} />
              <Text>{contact.text}</Text>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.section}>
        <CVTechList>
          {[
            'React',
            'JS',
            'TS',
            'NextJS',
            'Redux',
            'MobX',
            'Zustand',
            'Tailwind',
            'Gatsby',
            'ESBuild',
            'ThreeJS',
            'PIXI',
            'ESLint',
            'JEST',
          ].map(tech => (
            <CVTech key={tech} tech={tech} style="dark" />
          ))}
        </CVTechList>
      </View>
      <View style={styles.divider} />
      <View style={styles.section}>
        <CVTechList>
          {['Training', 'Leading', 'Mentoring', 'Help', 'TeamWork', 'Presentation'].map(skill => (
            <CVTech key={skill} tech={skill} style="dark" />
          ))}
        </CVTechList>
      </View>
      <View style={styles.divider} />
      <View style={styles.section}>
        <Text style={styles.heading}>Languages</Text>
        <View style={styles.list}>
          {[
            {
              lang: 'ENG',
              level: 'B2+/C1',
            },
          ].map(language => (
            <View key={language.lang} style={styles.listItem}>
              <Text>{language.lang}</Text>
              <View style={styles.filler} />
              <Text>{language.level}</Text>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.section}>
        <Text style={styles.heading}>Industries</Text>
        <View style={styles.list}>
          {[
            {
              industry: 'Telecom',
            },
            {
              industry: 'Money Transfer',
            },
            {
              industry: 'Automobile',
            },
            {
              industry: 'Printing',
            },
            {
              industry: 'CRE',
            },
            {
              industry: 'Marketing',
            },
            {
              industry: 'Charity',
            },
            {
              industry: 'Entertainment',
            },
            {
              industry: 'Textile Industry',
            },
            {
              industry: 'Healthcare',
            },
          ].map(industry => (
            <View key={industry.industry} style={styles.listItem}>
              <CVBullet />
              <Text>{industry.industry}</Text>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.section} break>
        <Text style={styles.heading}>Software</Text>
        <View style={styles.list}>
          {[
            {
              name: 'VSCode',
              rating: 5,
            },
            {
              name: 'GitHub',
              rating: 5,
            },
            {
              name: 'GitLab',
              rating: 4,
            },
            {
              name: 'Unix',
              rating: 4,
            },
            {
              name: 'JIRA',
              rating: 4,
            },
            {
              name: 'Confluence',
              rating: 5,
            },
            {
              name: 'Miro',
              rating: 5,
            },
            {
              name: 'Figma',
              rating: 3,
            },
            {
              name: 'VSO',
              rating: 4,
            },
          ].map(soft => (
            <View key={soft.name} style={styles.listItem}>
              <Text>{soft.name}</Text>
              <View style={styles.filler} />
              <CVRating staticDir={staticDir} rating={soft.rating} type="sidebar" />
            </View>
          ))}
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.section}>
        <Text style={styles.heading}>Education</Text>
        <View style={styles.list}>
          {[
            {
              degree: 'Master',
              field: 'Computer Science',
              graduation: 2011,
            },
          ].map(education => (
            <View key={education.field} style={styles.listMultilineItem}>
              <Text style={styles.educationDegree}>{education.degree} Degree</Text>
              <Text>{education.field}</Text>
              <Text style={styles.educationYear}>{education.graduation}</Text>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.section}>
        <Text style={styles.heading}>Hobbies</Text>
        <View style={styles.list}>
          {['History', 'Science', 'GameDev', 'Board Games', 'Cooking', 'Travel'].map(hobby => (
            <View key={hobby} style={styles.listItem}>
              <Text>{hobby}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'stretch',
    flexDirection: 'column',
    fontSize: 10,
  },
  section: {
    padding: 16,
  },
  heading: {
    fontWeight: 'medium',
    paddingBottom: 8,
    opacity: 0.75,
  },
  photoSection: {
    padding: 24,
  },
  photoContainer: {
    padding: 4,
    backgroundColor: '#ffffff',
    borderRadius: '50%',
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
    width: '80%',
    alignSelf: 'center',
  },
  list: {
    fontWeight: 'medium',
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: 8,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  listMultilineItem: {
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: 2,
  },
  educationDegree: {
    fontWeight: 'bold',
  },
  educationYear: {
    opacity: 0.75,
  },
  filler: {
    flexGrow: 1,
    borderBottom: 1,
    borderBottomStyle: 'dotted',
    borderBottomColor: '#ffffff',
    opacity: 0.75,
  },
  contactImage: {
    width: 12,
    height: 12,
  },
});
