import { Image, Link, StyleSheet, Text, View } from '@react-pdf/renderer';
import { FC, Fragment, useMemo } from 'react';
import { paths } from '../../constants';
import { CVRating } from './CVRating';
import { CVTech } from './CVTech';

interface Props {
  staticDir: string;
}

export const CVMain: FC<Props> = props => {
  const { staticDir } = props;

  const yearsExperience = useMemo(() => Math.floor(new Date().getFullYear() - 2010), []);

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Aliaksandr Savin</Text>
      <View style={styles.highlights}>
        {['Senior / Lead Software Engineer', `${yearsExperience}+ yrs experience`].map((highlight, index, arr) => (
          <Fragment key={highlight}>
            <Text>{highlight}</Text>
            {index !== arr.length - 1 && <Text style={styles.highlightDivider}>|</Text>}
          </Fragment>
        ))}
      </View>
      <View style={styles.links}>
        {[
          {
            type: 'LinkedIn',
            href: 'https://www.linkedin.com/in/aliaksandr-s-8002391bb/',
            image: 'logo_linkedin.png',
          },
          {
            type: 'GitHub',
            href: 'https://github.com/laksby',
            image: 'logo_github.png',
          },
        ].map(link => (
          <View key={link.type} style={styles.link}>
            <Image source={`${staticDir}/${paths.IMAGES_DIR}/${link.image}`} style={styles.linkImage} />
            <Text>{link.type}:</Text>
            <Link src={link.href} style={styles.linkRef}>
              {link.href}
            </Link>
          </View>
        ))}
      </View>

      <View style={styles.divider} />

      {[
        <>
          Seasoned software developer with <Text style={styles.strong}>{yearsExperience}+ years of experience</Text>,
          focusing on frontend development, but having experience also in backend
        </>,
        <>
          Profound programming acumen and a versatile skill set that spans across various aspects of software
          engineering. <Text style={styles.strong}>Committed to excellence</Text>
        </>,
        <>
          Exceptional <Text style={styles.strong}>problem-solving</Text> skills, capable of tackling challenges with
          innovative, efficient and elegant solutions
        </>,
        <>
          <Text style={styles.strong}>Leadership capabilities</Text> in guiding team towards project goals, mentoring
          junior developers, and fostering a collaborative work environment
        </>,
        <>
          Continuously exploring <Text style={styles.strong}>new technologies</Text> and methodologies to push the
          boundaries of what's possible in software creation
        </>,
      ].map((summaryNote, index) => (
        <Text key={index} style={styles.summary}>
          <Text style={styles.bullet}>■</Text> {summaryNote}
        </Text>
      ))}

      <View style={styles.divider} />

      <Text style={styles.heading2}>Skills</Text>
      {[
        {
          group: 'Frontend Technologies',
          techs: [
            {
              name: 'JavaScript Programming',
              since: 2012,
              level: 'Expert',
              experience: 'Commercial',
            },
            {
              name: 'TypeScript Programming',
              since: 2013,
              level: 'Expert',
              experience: 'Commercial',
            },
            {
              name: 'React / React-Router / NextJS',
              since: 2016,
              level: 'Expert',
              experience: 'Commercial',
            },
            {
              name: 'React State Management: Redux / MobX / Zustand',
              since: 2016,
              level: 'Expert',
              experience: 'Commercial',
            },
            {
              name: 'React Forms: Formik / react-hook-form',
              since: 2018,
              level: 'Expert',
              experience: 'Commercial',
            },
            {
              name: 'React Components: Antd, Material, Blueprint',
              since: 2016,
              level: 'Expert',
              experience: 'Commercial',
            },
            {
              name: 'Styling: CSS / SCSS / LESS / PostCSS',
              since: 2010,
              level: 'Expert',
              experience: 'Commercial',
            },
            {
              name: 'Styling Libraries: Tailwind / StyledComponents / Linaria',
              since: 2014,
              level: 'Expert',
              experience: 'Commercial',
            },
            {
              name: 'Markup Languages: HTML / Pug / Handlebars',
              since: 2010,
              level: 'Expert',
              experience: 'Commercial',
            },
            {
              name: 'Markup Techniques: Semantic / Responsive / Print',
              since: 2016,
              level: 'Expert',
              experience: 'Commercial',
            },
            {
              name: 'Web Browser APIs',
              since: 2016,
              level: 'Expert',
              experience: 'Commercial',
            },
            {
              name: 'Gatsby',
              since: 2020,
              level: 'Advanced',
              experience: 'Personal',
            },
            {
              name: 'GraphQL',
              since: 2021,
              level: 'Intermediate',
              experience: 'Commercial',
            },
            {
              name: 'Chrome DevTools / Puppeteer / Lighthouse / Profiling',
              since: 2017,
              level: 'Advanced',
              experience: 'Commercial',
            },
          ],
        },
        {
          group: 'Software Development',
          techs: [
            {
              name: 'Code Quality / Unit Testing / Linting',
              since: 2014,
              level: 'Expert',
              experience: 'Commercial',
            },
            {
              name: 'Building: Webpack, CRA, ESBuild, Rollup, Vite',
              since: 2016,
              level: 'Expert',
              experience: 'Commercial',
            },
            {
              name: 'WebGL / ThreeJS',
              since: 2013,
              level: 'Advanced',
              experience: 'Commercial',
            },
            {
              name: 'PIXI',
              since: 2019,
              level: 'Advanced',
              experience: 'Personal',
            },
            {
              name: 'Private NPM Package Management',
              since: 2021,
              level: 'Advanced',
              experience: 'Commercial',
            },
            {
              name: 'Node / Express',
              since: 2014,
              level: 'Advanced+',
              experience: 'Commercial',
            },
            {
              name: 'OOP / Design Patterns',
              since: 2010,
              level: 'Expert',
              experience: 'Commercial',
            },
            {
              name: 'Docker / Devops / AWS / Cloud / CI',
              since: 2018,
              level: 'Intermediate',
              experience: 'Commercial',
            },
            {
              name: 'git / git-flow / GitHub / GitLab',
              since: 2013,
              level: 'Expert',
              experience: 'Commercial',
            },
            {
              name: 'Networking / Hosting / DNS / Internet',
              since: 2010,
              level: 'Advanced',
              experience: 'Commercial',
            },
            {
              name: 'UI / UX Principles / UI Design',
              since: 2016,
              level: 'Intermediate',
              experience: 'Commercial',
            },
          ],
        },
      ].map(skillGroup => (
        <Fragment key={skillGroup.group}>
          <Text style={styles.heading3}>{skillGroup.group}</Text>
          <View style={styles.technologies}>
            {skillGroup.techs.map(tech => (
              <View key={tech.name}>
                <View style={styles.technologyHeading}>
                  <Text>{tech.name}</Text>
                  <View style={styles.technologyHeadingFiller} />
                  <Text style={styles.technologyLevel}>
                    {Math.floor(new Date().getFullYear() - tech.since)}+ yrs exp.
                  </Text>
                </View>
                <View style={styles.technologyDetails}>
                  <Text>{tech.level} level</Text>
                  <Text>|</Text>
                  <Text>{tech.experience} experience</Text>
                </View>
              </View>
            ))}
          </View>
        </Fragment>
      ))}

      <View style={styles.divider} />

      <Text style={styles.heading2}>Work Experience</Text>
      {[
        {
          company: 'IDT Corporation',
          start: 'Feb 2021',
          end: 'Dec 2023',
          title: 'Senior Frontend Developer',
          roles: [
            'Managed the frontend development for an entire business unit, encompassing both external applications and internal systems.',
            'Maintained a comprehensive money remittance portal utilized by tens of thousands US retailers and processing millions of transactions per day',
            'Successfully migrated several legacy applications to modern technologies, leveraging TypeScript, React, and MobX',
            'Led an internal frontend community, established corporate development standards to ensure best practices and code consistency across teams. Mentored students, guided fullstack developers, coordinated UX initiatives',
          ],
          projects: [
            {
              name: 'BOSS Revolution',
              description:
                'Leading telecom and financial services platform offering international calling, mobile communication, and money transfer solutions, enhancing connectivity and financial accessibility on a global scale',
              techs: ['React', 'TypeScript', 'MobX', 'Zustand', 'Styled', 'Tailwind', 'Linaria', 'AWS'],
            },
          ],
        },
        {
          company: 'TulaCo',
          start: 'Sep 2016',
          end: 'Jan 2021',
          title: 'Frontend Resource Manager',
          roles: [
            'Managed frontend developer pool at the regional office, conducting interviews, facilitating personal development, mentoring, and training team members',
            'Led a student laboratory, utilizing my personal author course for frontend developers',
            'Performing Frontend Lead position on multiple projects, directing the development process, coordinating  UI solutions, incorporating UI design best practices',
          ],
          projects: [
            {
              name: 'VIN Data History',
              description:
                'Vehicle history reporting service that provides detailed information on vehicle past, including ownership, accidents, repairs, and maintenance records, aiding consumers in making informed decisions on used car purchases',
              techs: ['React', 'TypeScript', 'MobX', 'Puppeteer', 'Styled', 'NextJS'],
            },
          ],
        },
      ].map(experience => (
        <Fragment key={`${experience.company} - ${experience.title}`}>
          <View style={styles.headingWithBookmark}>
            <View style={styles.bookmark}>
              <Text style={styles.bullet}>■</Text>
              <Text>
                {experience.start} - {experience.end}
              </Text>
            </View>
            <Text style={styles.heading3}>
              {experience.title} <Text style={styles.companyName}>@ {experience.company}</Text>
            </Text>
          </View>
          <View style={styles.companyRoles}>
            {experience.roles.map(role => (
              <Text key={role}>
                <Text style={styles.bullet}>■</Text> {role}
              </Text>
            ))}
          </View>
          <View style={styles.companyProjects}>
            {experience.projects.map(project => (
              <View key={project.name} break>
                <Text style={styles.companyProject}>Project: {project.name}</Text>
                <Text style={styles.companyProjectDescription}>{project.description}</Text>
                <View style={styles.companyProjectTechnologies}>
                  {project.techs.map(tech => (
                    <CVTech key={tech} tech={tech} />
                  ))}
                </View>
              </View>
            ))}
          </View>
        </Fragment>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'stretch',
    flexDirection: 'column',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2196F3',
  },
  heading2: {
    marginTop: 8,
    marginBottom: 8,
    fontSize: 20,
    fontWeight: 'light',
    color: '#2196F3',
    textTransform: 'uppercase',
  },
  heading3: {
    marginTop: 16,
    marginBottom: 16,
    fontSize: 16,
    fontWeight: 'medium',
    color: '#2196F3',
  },
  headingWithBookmark: {
    position: 'relative',
  },
  bookmark: {
    position: 'absolute',
    left: -160,
    top: 20,
    color: '#ffffff',
    fontSize: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingLeft: 2,
    paddingRight: 2,
  },
  links: {
    fontSize: 12,
    marginTop: 8,
  },
  link: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  linkImage: {
    width: 14,
    height: 14,
  },
  companyName: {
    fontWeight: 'light',
  },
  companyRoles: {
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: 8,
    fontSize: 10,
    textAlign: 'justify',
  },
  companyProjects: {
    marginTop: 16,
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: 8,
    fontSize: 10,
  },
  companyProject: {
    fontWeight: 'medium',
    fontSize: 12,
    color: '#474747',
  },
  companyProjectDescription: {
    marginTop: 4,
    fontSize: 10,
    color: '#474747',
  },
  companyProjectTechnologies: {
    marginTop: 4,
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
  },
  linkRef: {
    color: '#2196F3',
  },
  divider: {
    height: 16,
  },
  highlights: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  highlightDivider: {
    opacity: 0.25,
  },
  summary: {
    marginTop: 8,
    fontSize: 12,
    textAlign: 'justify',
  },
  bullet: {
    color: '#2196F3',
  },
  technologies: {
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: 8,
  },
  technologyHeading: {
    fontWeight: 'bold',
    fontSize: 12,
    flexDirection: 'row',
    alignItems: 'center',
    color: '#474747',
    gap: 8,
  },
  technologyHeadingFiller: {
    flexGrow: 1,
    borderBottom: 1,
    borderBottomStyle: 'dotted',
    borderBottomColor: '#474747',
    opacity: 0.75,
  },
  technologyLevel: {
    opacity: 0.75,
  },
  technologyDetails: {
    fontSize: 10,
    flexDirection: 'row',
    alignItems: 'center',
    color: '#474747',
    gap: 4,
  },
  strong: {
    fontWeight: 'bold',
  },
});
