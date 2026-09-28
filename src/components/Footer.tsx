import { ArrowUpRight } from 'lucide-react';

const Footer = () => <footer className="site-footer section-inner"><span>© {new Date().getFullYear()} Priyanshu Kumar</span><span>this is where the inspiring quote goes.</span><a href="#home">Back to top <ArrowUpRight size={14} /></a></footer>;
export default Footer;
