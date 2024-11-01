interface TeamMember {
  id: string;
  name: string;
  image: string;
  github: string;
  linkedin: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 'allie',
    name: 'Allie Itczak',
    image: 'src/assets/allie-hs.png',
    github: 'https://github.com/aitczak',
    linkedin: 'https://www.linkedin.com/in/allieitczak/',
  },
  {
    id: 'qianlin',
    name: 'Qianlin Zhang',
    image: 'src/assets/qianlin-hs.jpg',
    github: 'https://github.com/QianQian1997',
    linkedin: 'https://www.linkedin.com/in/qianlin-zhang-381972191/',
  },
  {
    id: 'david',
    name: 'David Schweitzer',
    image: 'src/assets/david-hs.png',
    github: 'https://github.com/DSchweitzer314',
    linkedin: 'https://www.linkedin.com/in/david-schweitzer-b34768333/',
  },
  {
    id: 'chenao',
    name: 'Chenao Wang',
    image: 'src/assets/chenao-hs.jpeg',
    github: 'https://github.com/chenaowang-debug',
    linkedin: 'https://www.linkedin.com/in/chenao-wang-ab3b84ab/',
  },
];
