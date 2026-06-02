export const EXPERIENCES = [
  {
    company: 'Prime Technologies Pte Ltd',
    role: 'Full Stack Software Engineer',
    period: 'Jan 2021 – Present',
    points: [
      'Launched web & mobile fuel card platform (Rails & React Native) with transaction flows and bank API integrations.',
      'Designed and maintained CRM, logging, and access control systems for security and auditing.',
      'Implemented CI/CD pipelines, managed AWS infrastructure, and integrated third-party services (Shell, UOB Bank, BCS etc).',
      'Wrote automated tests using RSpec and maintained company website support.',
    ],
  },
  {
    company: 'Toppan Ecquaria Pte Ltd',
    role: 'Software Engineer',
    period: 'May 2019 – Dec 2020',
    points: [
      'Managed finance and warrant modules, ensuring accuracy in reporting and warrant execution.',
      'Acted as liaison between developers, clients, and external stakeholders (SPF, GovTech, Finance Team).',
      'Conducted UAT sessions with clients and provided onsite support at Family Justice Courts.',
    ],
  },
  {
    company: 'Silverlake Cloud Ecosystem Sdn Bhd',
    role: 'Software Engineer',
    period: 'Apr 2017 – Mar 2019',
    points: [
      'Developed omnichannel functionality for the Core Banking System.',
      'Integrated AWS Lambda with Amazon Alexa for chatbot functionality.',
      'Replaced existing subroutine with an enhanced workflow engine for message-based transactions.',
      'Built monitoring tools and dashboards for AS/400 subsystem status and connectivity.',
    ],
  },
  {
    company: 'Biocore',
    role: 'Freelance Developer',
    period: 'Jan 2017 – Mar 2017',
    points: ['Built eBilling system web application for a hospital.'],
  },
  {
    company: 'Dignersys Cloud Berhad',
    role: 'Intern',
    period: 'Sep 2016 – Feb 2017',
    points: [
      'Enhanced and supported existing ERP system.',
      'Implemented SEO strategies on company website.',
    ],
  },
]

export const SKILLS = [
  { label: 'Languages & Frameworks', items: ['Ruby on Rails', 'React Native', 'TypeScript', 'JavaScript', 'Java', 'JSP', 'jQuery', 'Redux'] },
  { label: 'Databases & Queues', items: ['PostgreSQL', 'MySQL', 'Redis', 'Sidekiq'] },
  { label: 'Cloud & DevOps', items: ['AWS (EC2, RDS, S3, ElastiCache, VPC etc)', 'Docker', 'CircleCI', 'Nginx', 'Cloudflare'] },
  { label: 'Tools', items: ['Git', 'RSpec', 'Postman', 'Firebase', 'Fastlane', 'Capistrano', 'Jenkins', 'Jira', 'Amazon Q Developer', 'Copilot', 'Codex'] },
]

export const PROJECTS = [
  {
    title: 'Prime Plus',
    desc: 'Prime Plus is a centralized fleet fuel management platform for the Prime Group, revamping Best Fuel Club to manage Shell fuel cards across multiple fleets with a decoupled architecture from the legacy system.It supports driver onboarding, card ordering via APIs, PayNow/eGIRO top-ups with bank callbacks, real-time balance tracking, and role-based access per fleet.',
    tags: ['Ruby on Rails', 'React Native', 'PostgreSQL', 'Redis', 'Redux', 'AWS', 'CircleCI', 'Payment'],
  },
  {
    title: 'Best Fuel Club',
    desc: 'A fuel loyalty and rewards platform, enabling driver onboarding, vouchers, referrals, gamification, location services, personalized promotions, and tier-based member engagement. Includes a comprehensive admin portal for content management, campaign administration, push notifications, and fuel usage analytics.',
    tags: ['Ruby on Rails', 'React Native', 'PostgreSQL', 'Redis', 'Redux', 'AWS', 'CircleCI'],
  },
  {
    title: 'Fleet Fuel Management System',
    desc: 'A full-stack enterprise system for managing fuel cards, driver onboarding, fuel usage analytics, rewards, commissions, and automated data integrations.',
    tags: ['Ruby on Rails', 'Rspec', 'PostgreSQL', 'Delayed Job', 'AWS', 'CircleCI'],
  },
  {
    title: 'Core Banking Omnichannel',
    desc: 'An omnichannel module for a Core Banking System that bridges legacy AS400 systems with modern banking channels using a workflow-driven integration layer.It enables end-to-end process orchestration across systems while providing a real-time dashboard to monitor AS400 system status and health.',
    tags: ['Java', 'IBM AS/400', 'HTML', 'CSS', 'jQuery', 'Bootstrap', 'CL', 'RPGLE', 'DB2'],
  },
  {
    title: 'eBilling System',
    desc: 'Freelance-built Hospital eBilling web application, re-implemented from my final year Java desktop project into a web-based system.',
    tags: ['Java', 'JSP', 'HTML', 'CSS', 'jQuery', 'Bootstrap', 'mySQL'],
  },
  {
    title: 'Billing System',
    desc: 'A Java desktop billing system developed as my final year project for my university clinic to handle patient billing and payment processing.',
    tags: ['Java', 'mySQL'],
  },
]

export const SPOKEN_LANGUAGES = ['English', 'Mandarin (中文)', 'Malay', 'Cantonese', 'Hokkien']

export const NAV_LINKS = ['About', 'Experience', 'Skills', 'Projects', 'Contact']

export const EDUCATION = [
  {
    school: 'Universiti Teknikal Malaysia Melaka (UTeM)',
    degree: 'Bachelor of Computer Science (Software Development) with Honors',
    period: 'Sep 2013 – Feb 2017',
    points: [
      'Built a billing system for the university clinic as final year project.',
      'Built prototype mobile apps for e-commerce and food ordering systems.',
    ],
  },
]

export const CONTACT = [
  { label: 'z.mike0411@gmail.com', href: 'mailto:z.mike0411@gmail.com' },
  { label: '+65 8647 4045', href: 'tel:+6586474045' },
  { label: 'github.com/mh0411', href: 'https://github.com/mh0411' },
  { label: 'linkedin.com/in/mh0411', href: 'https://linkedin.com/in/mh0411' },
]
