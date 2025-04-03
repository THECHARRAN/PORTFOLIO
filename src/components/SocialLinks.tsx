import { Github, Linkedin, Instagram } from 'lucide-react';

export default function SocialLinks() {
  const socials = [
    {
      icon: Github,
      href: 'https://github.com/THECHARRAN',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/shree-charran-395534358/',
      label: 'LinkedIn',
    },
    {
      icon: Instagram,
      href: 'https://instagram.com',
      label: 'Instagram',
    },
  ];

  return (
    <div className="flex space-x-6">
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 transition-colors"
          aria-label={social.label}
        >
          <social.icon className="w-6 h-6" />
        </a>
      ))}
    </div>
  );
}