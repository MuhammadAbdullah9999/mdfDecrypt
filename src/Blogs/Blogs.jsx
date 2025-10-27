import burpSuiteImage from './images/burpsuite.jpg'
import owasp from './images/owasp.jpeg'
import nordvpn from './images/nordvpn.png'

import BlogCard from './utilities/BlogCard';
const Blogs = () => {
  return (
    <div className='flex flex-wrap justify-center lg:justify-start gap-x-6 mt-4'>
      
      <BlogCard img={burpSuiteImage} title="How to Use Burp Suite for scanning Websites"></BlogCard>
      <BlogCard img={owasp} title="What is OWASP top 10"></BlogCard>
      <BlogCard img={nordvpn} title="NordVPN Review 2025 Is It The Best VPN for Privacy and Security"></BlogCard>

    </div>
  );
};
export default Blogs;
