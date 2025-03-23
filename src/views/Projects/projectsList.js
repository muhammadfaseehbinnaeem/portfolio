import fitHitImage from '../../assets/images/fit_hit.png';
import montroiImage from '../../assets/images/montroi.png';
import courseAiImage from '../../assets/images/course_ai.png';
import flower800Image from '../../assets/images/800_flower.png';
import diligentsiaImage from '../../assets/images/diligentsia.png';
import frangranceXImage from '../../assets/images/fragrance_x.png';
import smartRecruitImage from '../../assets/images/smart_recruit.png';
import wildflowerWellnessImage from '../../assets/images/wildflower_wellness.png';

const projectsList = [
    {
        title: 'Course AI',
        image: courseAiImage,
        description: 'Empowers tutors to effortlessly upload their courses, making their expertise accessible to a wide audience of eager learners. Users can register for courses at specific prices, providing an opportunity to expand their knowledge and skills. Built with React.js for the frontend and Express.js for the backend, the platform is integrated with Stripe for secure payments. Deployed on Azure, it ensures optimal performance and reliable version control through GitHub.',
        url: 'https://courseai.com/',
    },
    {
        title: 'Montroi',
        image: montroiImage,
        description: 'Introducing our versatile eCommerce platform built with React.js and Node.js (Express.js), offering a diverse range of services including travel guides, perfumes, travel accessories, bags, crafts, and furniture. The platform ensures fast and reliable access with AWS hosting, while Stripe integration enables a secure and hassle-free payment experience. The backend is powered by RESTful APIs, JWT authentication, and MongoDB, ensuring robust data management and security. Explore a world of unique products and services designed to enhance your lifestyle!',
        url: 'https://www.montroi.com/',
    },
    {
        title: 'Diligentsia',
        image: diligentsiaImage,
        description: 'The online evaluation platform, built with React.js and Node.js, enables companies to register, subscribe to tailored plans, and receive comprehensive assessments based on various criteria. The platform performs in-depth analyses, including SWOT, and generates diverse investment and advisory reports based on current factors and resources. Utilizing React.js, Material UI (MUI), Node.js (Express.js), and MongoDB, with Stripe for secure payments, our solution is deployed on AWS to ensure optimal performance and reliability.',
        url: 'https://diligentsia.co.uk/',
    },
    {
        title: 'WildFlower Wellness',
        image: wildflowerWellnessImage,
        description: 'A holistic website dedicated to spa services, massage therapies, skincare, and nutritional supplements, crafted using the MERN stack. Our platform offers a seamless user experience, allowing customers to explore a range of wellness products and services tailored to their needs. Deployed on DigitalOcean, we ensure fast and reliable access, making it easier than ever to prioritize your health and well-being with quality vitamins and minerals.',
        url: 'https://wildflowerwellnessaz.com/',
    },
    {
        title: 'SmartRecruit',
        image: smartRecruitImage,
        description: 'A comprehensive hiring platform designed for seamless recruitment, featuring three distinct sides: the organization side for HRs to create accounts and manage job postings, the HR side for overseeing recruitment processes, and the candidate side for job seekers to apply for available positions. This robust solution, built with React.js for the frontend and Node.js (Express.js) with MongoDB for the backend, is deployed on Azure for reliable performance, while Azure DevOps ensures efficient version control and collaboration throughout the development process.',
        url: 'https://smartrecruit.ai/',
    },
    {
        title: '800 Flower',
        image: flower800Image,
        description: 'A flower-selling platform developed using React.js, Material-UI for the frontend and Node.js with MongoDB for data management. Integrated with Stripe for secure online payments, users can search for specific flowers, add them to the cart, and complete purchases seamlessly. The project is deployed on AWS with version control via GitHub, offering a reliable and scalable eCommerce solution.',
        url: 'https://www.800flower.ae/',
    },
    {
        title: 'Fit Hit',
        image: fitHitImage,
        description: 'A dynamic eCommerce platform specializing in stylish watches, built with React.js, Material-UI (MUI), and React Query for a smooth user experience. Powered by Express.js and MySQL, the site offers secure payments through Stripe, while Hotjar integration provides insights into user traffic and behavior. Discover the perfect timepiece with confidence on a site designed for performance and reliability.',
        url: 'https://fithit.store/',
    },
    {
        title: 'FragranceX',
        image: frangranceXImage,
        description: 'A dynamic eCommerce platform specializing in stylish watches, built with React.js, Material-UI (MUI), and React Query for a smooth user experience. Powered by Node.js and MySQL, the site offers secure payments through Stripe, while Hotjar integration provides insights into user traffic and behavior. Deployed for optimal performance and reliability, this platform ensures a seamless shopping experience for watch enthusiasts.',
        url: 'https://www.fragrancex.com/',
    },
];

export default projectsList;