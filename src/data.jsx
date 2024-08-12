import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.jpeg';
import Work2 from './assets/project-2.jpg';
import Work3 from './assets/project-3.jpeg';
import Work4 from './assets/project-4.jpeg';
import Work5 from './assets/project-5.jpg';
import Work6 from './assets/project-6.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Balaji',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Selvam',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '19 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Indian',
  },

  {
    id: 5,
    title: 'Designation : ',
    description: 'Engineer',
  },

  {
    id: 6,
    title: 'State : ',
    description: 'Tamilnadu',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+91 6382910 520',
  },

  {
    id: 8,
    title: 'Gmail : ',
    description: 'balajiselvam245@gmail.com',
  },

  {
    id: 9,
    title: 'LinkedIn : ',
    description: 'https://tinyurl.com/balajiSelvam',
  },

  {
    id: 10,
    title: 'Langages : ',
    description: 'Tamil, English',
  },
];

export const stats = [
  {
    id: 1,
    no: '0+',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '0+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '0+',
    title: 'Happy <br /> Customers',
  },

  {
    id: 4,
    no: '0+',
    title: ' Awards <br /> Won',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'null',
    title: 'role <span> Company </span>',
    desc: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ...',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: 'null',
    title: 'role <span> Company </span>',
    desc: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ...',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '0',
    title: 'role <span>  </span>',
    desc: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ...',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '0',
    title: 'Engineering Degree <span> college </span>',
    desc: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ...',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '0',
    title: 'Master Degree <span> college </span>',
    desc: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ...',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '0',
    title: 'Bachelor Degree <span> school </span>',
    desc: 'blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ...',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '30',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '40',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '60',
  },

  {
    id: 4,
    title: 'C',
    percentage: '70',
  },

  {
    id: 5,
    title: 'Python',
    percentage: '50',
  },

  {
    id: 6,
    title: 'React',
    percentage: '40',
  },

  {
    id: 7,
    title: 'SQL',
    percentage: '60',
  },

  {
    id: 8,
    title: 'Flutter',
    percentage: '45',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Null-1',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'null',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'null',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'null',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'null',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Null-2',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'null',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'null',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'null',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'null',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Null-3',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'null',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'null',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'null',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'null',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Null-4',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'null',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'null',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'null',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'null',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Null-5',
    details: [
      {
        title: 'Project : ',
        desc: 'null',
      },
      {
        title: 'Client : ',
        desc: 'null',
      },
      {
        title: 'Language : ',
        desc: 'null',
      },
      {
        title: 'Preview : ',
        desc: 'null',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Null-6',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'null',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'null',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'null',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'null',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
