export interface NavLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: NavLink[];
}

export interface ContactDetail {
  address: string;
  phone: string;
  email: string;
  hours: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  iconName: 'Linkedin' | 'Twitter' | 'Instagram';
}

export interface NavigationData {
  logo: {
    brandName: string;
    subtitle: string;
    iconName: string;
  };
  headerLinks: NavLink[];
  footerSections: FooterSection[];
  contactInfo: ContactDetail;
  socialLinks: SocialLink[];
  copyright: string;
}

export const navigationData: NavigationData = {
  logo: {
    brandName: "Al Kayanat",
    subtitle: "Holding Group",
    iconName: "Palmtree"
  },
  headerLinks: [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Entities", href: "#entities" },
    { label: "Sustainability", href: "#sustainability" },
    { label: "Contact", href: "#contact" }
  ],
  footerSections: [
    {
      title: "Navigation",
      links: [
        { label: "Home", href: "#home" },
        { label: "About Us", href: "#about" },
        { label: "Sustainability", href: "#sustainability" },
        { label: "Careers", href: "#careers" }
      ]
    },
    {
      title: "Our Portfolios",
      links: [
        { label: "Heavy Machinery", href: "#machinery" },
        { label: "Smart Logistics", href: "#logistics" },
        { label: "Real Estate Development", href: "#development" },
        { label: "Tech & Investments", href: "#ventures" }
      ]
    }
  ],
  contactInfo: {
    address: "King Fahd Rd, Al Rahmaniyah, Riyadh 12341, Kingdom of Saudi Arabia",
    phone: "+966 11 456 7890",
    email: "info@alkyanat.com",
    hours: "Sunday - Thursday: 8:00 AM - 5:00 PM"
  },
  socialLinks: [
    { platform: "LinkedIn", url: "https://linkedin.com", iconName: "Linkedin" },
    { platform: "Twitter / X", url: "https://x.com", iconName: "Twitter" },
    { platform: "Instagram", url: "https://instagram.com", iconName: "Instagram" }
  ],
  copyright: "Al Kayanat Holding Group. All rights reserved."
};
