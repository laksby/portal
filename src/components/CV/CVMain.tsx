import { Image, Link, StyleSheet, Text, View } from '@react-pdf/renderer';
import { FC, Fragment, useMemo } from 'react';
import { paths } from '../../constants';
import { CVRating } from './CVRating';
import { CVTech } from './CVTech';
import { CVTechList } from './CVTechList';
import { CVBullet } from './CVBullet';

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

      <Text style={styles.summary}>
        Seasoned software developer with <Text style={styles.strong}>{yearsExperience}+ years of experience</Text>,
        focusing on frontend development, but having experience also in backend. Profound programming acumen and a
        versatile skill set that spans across various aspects of software engineering.{' '}
        <Text style={styles.strong}>Committed to excellence</Text>. Exceptional{' '}
        <Text style={styles.strong}>problem-solving</Text> skills, capable of tackling challenges with innovative,
        efficient and elegant solutions. <Text style={styles.strong}>Leadership capabilities</Text> in guiding team
        towards project goals, mentoring junior developers, and fostering a collaborative work environment. Continuously
        exploring <Text style={styles.strong}>new technologies</Text> and methodologies to push the boundaries of what's
        possible in software creation.
      </Text>

      <View style={styles.divider} />

      <Text style={styles.heading2}>What can I do</Text>
      {[
        'Develop application of any level of complexity without requirements, tasks, analysis, design or even without backend team. Ready to work in complete chaos. I can craft this chaos into beautiful gem',
        'Migrate any frontend technology to modern React ecosystem. Migrate to TypeScript. Establish code quality and automated linting',
        'Develop frontend standards, code quality rules and corporate level tools including project templates, corporate component libraries and CLI utilities',
        'Guide, mentor and event train the frontend development team. I have training experience and even developed author course',
      ].map((summaryNote, index) => (
        <Text key={index} style={styles.summary}>
          <CVBullet /> {summaryNote}
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
            },
            {
              name: 'TypeScript Programming',
              since: 2013,
              level: 'Expert',
            },
            {
              name: 'React / React-Router / NextJS',
              since: 2016,
              level: 'Expert',
            },
            {
              name: 'React State Management: Redux / MobX / Zustand',
              since: 2016,
              level: 'Expert',
            },
            {
              name: 'React Forms: Formik / react-hook-form',
              since: 2018,
              level: 'Expert',
            },
            {
              name: 'React Components: Antd, Material, Blueprint',
              since: 2016,
              level: 'Expert',
            },
            {
              break: true,
              name: 'Styling: CSS / SCSS / LESS / PostCSS',
              since: 2010,
              level: 'Expert',
            },
            {
              name: 'Styling Libraries: Tailwind / StyledComponents / Linaria',
              since: 2014,
              level: 'Expert',
            },
            {
              name: 'Markup Languages: HTML / Pug / Handlebars',
              since: 2010,
              level: 'Expert',
            },
            {
              name: 'Markup Techniques: Semantic / Responsive / Print',
              since: 2016,
              level: 'Expert',
            },
            {
              name: 'Web Browser APIs',
              since: 2016,
              level: 'Expert',
            },
            {
              name: 'Gatsby',
              since: 2020,
              level: 'Advanced',
            },
            {
              name: 'GraphQL',
              since: 2021,
              level: 'Intermediate',
            },
            {
              name: 'Chrome DevTools / Puppeteer / Lighthouse / Profiling',
              since: 2017,
              level: 'Advanced',
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
            },
            {
              name: 'Building: Webpack, CRA, ESBuild, Rollup, Vite',
              since: 2016,
              level: 'Expert',
            },
            {
              name: 'WebGL / ThreeJS',
              since: 2013,
              level: 'Advanced',
            },
            {
              name: 'Node / Express',
              since: 2014,
              level: 'Advanced+',
            },
            {
              name: 'OOP / Design Patterns',
              since: 2010,
              level: 'Expert',
            },
            {
              name: 'Docker / Devops / AWS / Cloud / CI',
              since: 2018,
              level: 'Intermediate',
            },
            {
              name: 'git / git-flow / GitHub / GitLab',
              since: 2013,
              level: 'Expert',
            },
            {
              name: 'Networking / Hosting / DNS / Internet',
              since: 2010,
              level: 'Advanced',
            },
            {
              name: 'UI / UX Principles / UI Design',
              since: 2016,
              level: 'Intermediate',
            },
          ],
        },
      ].map(skillGroup => (
        <Fragment key={skillGroup.group}>
          <Text style={styles.heading3}>{skillGroup.group}</Text>
          <View style={styles.technologies}>
            {skillGroup.techs.map(tech => (
              <View key={tech.name} break={tech.break}>
                <View style={styles.technologyHeading}>
                  <Text>{tech.name}</Text>
                  <View style={styles.technologyHeadingFiller} />
                  <Text style={styles.technologyLevel}>
                    {Math.floor(new Date().getFullYear() - tech.since)}+ yrs exp.
                  </Text>
                </View>
                <View style={styles.technologyDetails}>
                  <Text>{tech.level} level</Text>
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
            {
              name: 'HH Global',
              description:
                'Global marketing services group, specializing in the execution of print, digital, and retail media. Renowned for delivering innovative, sustainable solutions through a unique model of collaboration and efficiency, HH Global partners with some of the world most prominent brands to optimize their marketing spend, drive down costs, and implement creative strategies that engage audiences and grow business',
              techs: ['React', 'TypeScript', 'MobX', 'Redux', 'MaterialUI'],
            },
            {
              name: 'StyleRow',
              description:
                'Innovative platform designed for the interior design industry. StyleRow offers a comprehensive suite of tools for designers, brands, and showrooms to streamline project management, product sourcing, and collaboration',
              techs: ['Angular', 'TypeScript', 'RxJS'],
            },
            {
              name: 'CREXi',
              description:
                'Commercial real estate (CRE) platform that revolutionizes property transactions and leasing processes. CREXi leverages advanced technology to provide an all-encompassing marketplace, facilitating seamless communication between buyers, sellers, and brokers',
              techs: ['Angular', 'TypeScript', 'RxJS', 'LESS', 'Pug'],
            },
            {
              name: 'Bridg',
              description:
                'Pioneering platform designed to transform customer data into actionable marketing insights for the retail and hospitality sectors',
              techs: ['React', 'Redux', 'MaterialUI', 'Styled'],
            },
            {
              name: 'DailyKARMA',
              description:
                'Platform dedicated to empowering individuals and organizations to engage in philanthropy and social impact initiatives',
              techs: ['React', 'Angular', 'Redux', 'NextJS'],
            },
          ],
        },
        {
          break: true,
          company: 'TulaCo',
          start: 'Dec 2012',
          end: 'Aug 2016',
          title: 'Senior / Lead Fullstack (.NET) Developer',
          roles: [
            'Led several .NET teams comprising up to 10 members, orchestrating development efforts, and driving the successful execution of complex projects',
            'Managed the development of an online clothing design system, spearheading the creation of a comprehensive graphic platform that enables users to customize and visualize apparel designs interactively',
            'Participated in a project for the Hollywood film industry, collaborating with a diverse team to deliver cutting-edge solutions tailored to the unique demands of entertainment professionals',
          ],
          projects: [],
        },
        {
          company: 'EPAM',
          start: 'Apr 2010',
          end: 'Nov 2012',
          title: 'Fullstack (.NET) Developer',
          roles: [
            'Worked on a project for a company providing national-level medical services in the USA, playing a key role in developing solutions aimed at enhancing healthcare delivery and patient experience',
            'Participated in the development of an Optical Character Recognition (OCR) system, contributing to the creation of advanced algorithms for accurate text detection and digitization',
          ],
          projects: [],
        },
      ].map(experience => (
        <Fragment key={`${experience.company} - ${experience.title}`}>
          <View style={styles.headingWithBookmark} break={experience.break}>
            <View style={styles.bookmark}>
              <CVBullet />
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
                <CVBullet /> {role}
              </Text>
            ))}
          </View>
          {experience.projects.length > 0 && (
            <View style={styles.companyProjects}>
              {experience.projects.map(project => (
                <View key={project.name}>
                  <Text style={styles.companyProject}>Project: {project.name}</Text>
                  <Text style={styles.companyProjectDescription}>{project.description}</Text>
                  <CVTechList>
                    {project.techs.map(tech => (
                      <CVTech key={tech} tech={tech} />
                    ))}
                  </CVTechList>
                </View>
              ))}
            </View>
          )}
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
    paddingVertical: 8,
    fontSize: 20,
    fontWeight: 'light',
    color: '#2196F3',
    textTransform: 'uppercase',
  },
  heading3: {
    paddingVertical: 16,
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
    paddingVertical: 8,
    fontSize: 12,
    alignItems: 'stretch',
    flexDirection: 'column',
    gap: 8,
  },
  link: {
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
    paddingTop: 16,
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
    paddingVertical: 4,
    fontSize: 10,
    color: '#474747',
  },
  linkRef: {
    color: '#2196F3',
  },
  divider: {
    height: 16,
  },
  highlights: {
    paddingTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  highlightDivider: {
    opacity: 0.25,
  },
  summary: {
    paddingTop: 8,
    fontSize: 12,
    textAlign: 'justify',
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
