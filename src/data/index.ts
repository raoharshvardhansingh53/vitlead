import { Service, FAQ, NavItem, TestimonialType } from '../types';
import { LineChart, MessageSquare, FileCheck, Layout, PenTool, BarChart, Brain } from 'lucide-react';

export const navigation: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Case Study', path: '/case-study' },
  { label: 'Resources', path: '/resources' },
  { label: 'Contact', path: '/contact' },
];

export const services: Service[] = [
  {
    id: 1,
    title: 'Vitlead Expert Ads',
    description: 'Tailored Facebook ad campaigns optimized for lead generation.',
    icon: 'LineChart',
  },
  {
    id: 2,
    title: 'Trained Sales Team',
    description: 'Professional team to manage and set appointments, ensuring high conversion rates.',
    icon: 'MessageSquare',
  },
  {
    id: 3,
    title: 'DFY Detailed Copywriting',
    description: 'Compelling copy that speaks directly to your target audience.',
    icon: 'FileCheck',
  },
  {
    id: 4,
    title: 'Expert Graphic Designing',
    description: 'Visually engaging creatives that capture attention and drive action.',
    icon: 'Layout',
  },
  {
    id: 5,
    title: '10x Growth Roadmap',
    description: 'Strategic plan outlining steps to exponentially grow your client base.',
    icon: 'BarChart',
  },
  {
    id: 6,
    title: 'Social Media Organic Growth',
    description: 'Techniques to enhance your organic reach and engagement on social platforms.',
    icon: 'PenTool',
  },
  {
    id: 7,
    title: 'AI Integration & Utilization',
    description: 'Leveraging artificial intelligence to optimize campaigns and sustain long-term growth.',
    icon: 'Brain',
  },
];

export const faqs: FAQ[] = [
  {
    id: 1,
    question: 'What if I don\'t get leads in 30 days?',
    answer: 'We stand by our promise: If you don\'t receive at least 15 high-quality leads within your first 30 days, we\'ll refund your investment in full. No questions asked, no hidden conditions.',
  },
  {
    id: 2,
    question: 'Can I keep the ad creatives and funnel after the trial?',
    answer: 'Absolutely! All ad creatives, copy, and funnel designs we develop for your campaign remain your property, even if you decide not to continue with our services after the trial period.',
  },
  {
    id: 3,
    question: 'How soon can we get started?',
    answer: 'Once your application is approved and onboarding is complete, we can typically launch your campaign within 7 business days. Our streamlined process ensures we can get your ads running quickly while still maintaining the quality and targeting precision you need.',
  },
];

export const testimonials: TestimonialType[] = [
  {
    id: 1,
    name: 'Michael Thompson',
    role: 'Senior Mortgage Broker',
    company: 'Elite Mortgage Solutions',
    content: 'Before working with Vitlead, I was spending thousands on ads with minimal returns. Within the first month, they delivered 22 highly qualified leads, resulting in 8 closed deals. Their process is streamlined and effective.',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 2,
    name: 'Sarah Williams',
    role: 'Owner',
    company: 'Premium Mortgage Services',
    content: 'Vitlead transformed our digital marketing strategy. Not only did we get quality leads, but their sales team helped convert them into appointments. Our ROI has been consistently above 300% since starting with them.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];