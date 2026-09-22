export const EXPERIENCES = [
  {
    company: 'Prime Technologies Pte Ltd (Subsidiary of Best Petrol & Diesel Supply Pte Ltd)',
    role: 'Full Stack Software Engineer',
    period: 'Jan 2021 – Present',
    points: [
      'Sole developer for a multi-tenant fleet fuel card platform and driver CRM, owning full development lifecycle from architecture to production.',
    ],
    projects: [
      {
        title: 'Fleet Fuel Card & Digital Wallet Platform',
        points: [
          'Architected and built a full-stack fleet card platform named Prime Plus (Ruby on Rails, React Native, AWS), covering driver onboarding, identity/licence verification, admin approval workflows, and card issuance across web and mobile.',
          'Designed and implemented a payments integration layer connecting to multiple banking APIs, supporting real-time and batch fund transfers with webhook-based confirmation, retry/failure handling, and automated ledger updates.',
          "Designed a centralised multi-tenant architecture serving multiple fleet companies under the same corporate group, with role-based access so fleet-level admins manage their own fleet's content and incentives while super admins retain full visibility.",
          'Built a rule-based CMS for admins to manage promotional content, push notifications, and driver incentives, including a scratch-and-win reward mechanism and a tiered cashback program, without needing engineering support for every change.',
          'Designed automated daily reconciliation pipelines pulling transaction data from Shell and UOB, replacing manual finance work with a scheduled automated process.',
          'Sole engineer responsible for AWS infrastructure and CI/CD pipelines, including error logging, alerting, and RSpec test coverage.',
        ],
      },
      {
        title: 'Web-based CRM System (Driver Engagement & Sales Commission Platform)',
        points: [
          'Built a web-based CRM for driver onboarding, pulling transaction data from Shell via scheduled file transfers into automated daily reporting pipelines.',
          'Designed a rule-based commission engine to calculate salesperson payouts based on onboarding conversions, replacing manual commission tracking.',
          'Built automated SMS notifications to re-engage drivers who became inactive shortly after onboarding.',
          'Developed a customer segmentation system classifying drivers by activity status (inactive, dormant, reduced usage), surfacing at-risk users through scheduled reports for the sales team to follow up on.',
          'Integrated with Mailchimp to sync customer marketing consent preferences, keeping opt-in/opt-out audience lists accurate.',
        ],
      },
    ],
  },
  {
    company: 'Toppan Ecquaria Pte Ltd',
    role: 'Software Engineer',
    period: 'May 2019 – Dec 2020',
    points: [
      'Managed finance and warrant modules, ensuring accuracy in reporting and warrant execution.',
      'Gathered requirements and acted as technical liaison between developers, clients, and external parties (SPF, GovTech), from change request through delivery.',
      'Conducted UAT sessions and provided onsite support at Family Justice Courts, improving client adoption and satisfaction.',
    ],
  },
  {
    company: 'Silverlake Cloud Ecosystem Sdn Bhd',
    role: 'Software Engineer',
    period: 'Apr 2017 – Mar 2019',
    points: [
      'Enhanced omnichannel functionality for the Core Banking System, including a new Alexa/AWS Lambda voice channel and a redesigned workflow engine for message-based transactions.',
      'Improved performance of rule-based monitoring applications, and built monitoring dashboards for AS/400 subsystem status and connectivity.',
      'Provided remote support for banking clients CBI Dubai and RHB Cambodia.',
    ],
  },
  {
    company: 'Biocore',
    role: 'Freelance Developer',
    period: 'Jan 2017 – Mar 2017',
    points: ['Migrated a Java desktop billing system to a JSP web application for a hospital client.'],
  },
  {
    company: 'Dignersys Cloud Berhad',
    role: 'Intern',
    period: 'Sep 2016 – Feb 2017',
    points: ['Supported and improved an ERP system, and worked on SEO for the company website.'],
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
