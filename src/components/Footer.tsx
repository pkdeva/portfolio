import { Github, Linkedin } from 'lucide-react';

const Footer = () => <footer className="site-footer"><div className="section-inner footer-inner"><span>© {new Date().getFullYear()} Priyanshu Kumar</span><div className="footer-socials"><a href="https://github.com/pkdeva" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={16} /></a><a href="https://linkedin.com/in/pkdeva" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={16} /></a><a href="https://x.com/pkdevaa" target="_blank" rel="noopener noreferrer" aria-label="X">X</a></div><span>Stability is a myth. I simply forced this to behave.</span></div></footer>;
export default Footer;
