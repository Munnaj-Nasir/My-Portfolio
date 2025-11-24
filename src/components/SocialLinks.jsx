// SocialLinks.jsx

const socialLinks = [
  { name: 'Dribbble', url: 'https://dribbble.com/olhalazarieva', icon: 'dribbble-icon' },
  { name: 'Behance', url: 'https://behance.net/olhalazarieva', icon: 'behance-icon' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/olhalazarieva', icon: 'linkedin-icon' },
];

const SocialLinks = ({ className = '' }) => (
  <ul className={`social-links ${className}`}>
    {socialLinks.map((link) => (
      <li key={link.name}>
        <a href={link.url} target="_blank" rel="noopener noreferrer">
          {/* In a real app, replace {link.icon} with an actual SVG or icon component */}
          <i className={link.icon}>{link.name}</i>
        </a>
      </li>
    ))}
  </ul>
);

export default SocialLinks;