import { useState } from 'react';
import useWeb3forms from '@web3forms/react';
import { ArrowUpRight } from 'lucide-react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');
  const onError = () => { setError('Your message could not be sent. Please try again, or email me directly.'); setIsSubmitting(false); };
  const { submit } = useWeb3forms({
    access_key: '39716599-07e6-4701-a5f1-40c441460122',
    settings: { from_name: 'Portfolio Contact Form', subject: 'New Contact Form Submission from Portfolio' },
    onSuccess: () => { setSent(true); setIsSubmitting(false); }, onError,
  });
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError('');
    try { await submit(Object.fromEntries(new FormData(event.currentTarget).entries())); }
    catch { onError(); }
  };
  return (
    <section id="contact" className="section section-inner contact-section">
      <span className="section-kicker">05 / Say hello</span>
      <h2>small talk<br /><em>optional.</em></h2>
      <div className="contact-grid">
        <div><p className="contact-intro">if there’s a good reason we should know each other, i’m all ears. hiring, building, or chasing a good idea? tell me about it.</p><a className="contact-email" href="mailto:priyanshu.txt@gmail.com">priyanshu.txt@gmail.com <ArrowUpRight size={19} /></a><div className="contact-meta"><a href="https://github.com/pkdeva" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={13} /></a><a href="https://linkedin.com/in/pkdeva" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={13} /></a><a href="https://x.com/pkdevaa" target="_blank" rel="noopener noreferrer">X <ArrowUpRight size={13} /></a></div><span className="location">Gurugram, India</span></div>
        <div className="contact-form">{sent ? <div className="form-success" role="status"><h3>the form did its part.</h3><p>your message is through. now it’s on me.</p></div> : <form onSubmit={handleSubmit} aria-label="Contact form">
          <div className="form-pair"><div className="form-field"><label htmlFor="name">Your name</label><input id="name" name="name" autoComplete="name" required placeholder="Peter Thiel?" /></div><div className="form-field"><label htmlFor="email">Email address</label><input id="email" name="email" type="email" autoComplete="email" required placeholder="peter@foundersfund.com?" /></div></div>
          <div className="form-field"><label htmlFor="subject">What's on your mind?</label><input id="subject" name="subject" required placeholder="the plot twist goes here" /></div>
          <div className="form-field"><label htmlFor="message">Your message</label><textarea id="message" name="message" required rows={3} placeholder="yes, i actually read these." /></div>
          {error && <p className="form-error" role="alert">{error}</p>}
          <button className="button-primary" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Sending…' : 'Send message'} <ArrowUpRight size={16} /></button>
        </form>}</div>
      </div>
    </section>
  );
};
export default Contact;
