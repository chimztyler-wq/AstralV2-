import React, { useState, useEffect, useRef } from 'react';
import {
  Shield,
  Zap,
  Globe,
  Lock,
  Users,
  Headphones,
  Star,
  TrendingUp,
  Clock,
  X,
  Menu,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ArrowUp,
  ExternalLink,
  Check,
  MessageCircle,
  HelpCircle,
  MessageSquare,
} from 'lucide-react';

interface SiteItem {
  rank: string;
  name: string;
  url: string;
  isNew: boolean;
  note?: string;
}

interface ServiceItem {
  icon: 'Shield' | 'Zap' | 'Globe' | 'Lock' | 'Users' | 'Headphones';
  title: string;
  description: string;
}

interface StepItem {
  number: string;
  title: string;
  description: string;
}

interface FeatureCardItem {
  icon: 'Star' | 'TrendingUp' | 'Clock' | 'Shield';
  title: string;
  description: string;
}

interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

const siteConfig = {
  name: 'ASTRAL BEAMS',
  tagline: '',
  badge: '#1 BEAMING SERVER',
  description:
    'The best beaming server with premium non-hooked sites. Join thousands of satisfied users and experience the difference.',
  mascotImage: '/images/favicon.ico',
  discordInvite: 'https://discord.gg/nKz5m8zSt7',
  supportTicketUrl:
    'https://discord.com/channels/1487458937140809811/1493283448142561493',
  stats: [
    { value: 'Unavailable', label: 'Members' },
    { value: '5', label: 'Premium Sites' },
    { value: 'Unavailable', label: 'Uptime' },
  ],
  navLinks: [
    { label: 'Home', id: 'home' },
    { label: 'Sites', id: 'sites' },
    { label: 'Services', id: 'services' },
    { label: 'How It Works', id: 'how-it-works' },
    { label: 'Features', id: 'features' },
    { label: 'Reviews', id: 'testimonials' },
    { label: 'FAQ', id: 'faq' },
  ],
  sites: [
    {
      rank: 'BEST',
      name: 'INJURIES',
      url: 'https://www.logged.tg/auth/realnoctrya',
      isNew: false,
    },
    {
      rank: '2ND BEST',
      name: 'SPLUNK',
      url: 'https://app.beamers.si/u/Noctrya1',
      isNew: true,
    },
    {
      rank: '3RD BEST',
      name: 'IMMORTAL',
      url: 'https://immortal.st/?code=NjM0NTgxMTEyNTAxODM2Njc1Mg==',
      isNew: false,
    },
    {
      rank: '4TH BEST',
      name: 'SHOCKIFY',
      url: 'https://shockify.st/?code=NjM0NTgxMTEyNTAxODM2Njc1Mg==',
      isNew: false,
    },
    {
      rank: '5TH BEST',
      name: 'ULTIMA',
      url: 'https://app.beamse.pro/gen/Noctrya1',
      isNew: true,
    },
    {
      rank: 'BEST HYPERLINK SITE!',
      name: 'HYPERLINK',
      url: 'https://aslv2h.vvzx.workers.dev/',
      isNew: true,
      note: 'REWORKED',
    },
    {
      rank: 'BEST BYPASSER!',
      name: 'COOKIE BYPASSER',
      url: 'https://www.noctrya-bypasser.freeddns.org/',
      isNew: false,
    },
  ] as SiteItem[],
  services: [
    {
      icon: 'Shield',
      title: 'Premium Sites',
      description:
        'Access to the best non-hooked beaming sites with guaranteed quality and reliability.',
    },
    {
      icon: 'Zap',
      title: 'Fast & Reliable',
      description:
        'High speed performance and reliability across all our services.',
    },
    {
      icon: 'Globe',
      title: 'Global Access',
      description:
        'Connect from anywhere in the world with our distributed network infrastructure.',
    },
    {
      icon: 'Lock',
      title: 'Protected & Verified',
      description:
        'Quality is our priority. All sites are thoroughly vetted and verified.',
    },
    {
      icon: 'Users',
      title: 'Active Community',
      description:
        'Join thousands of members in our Discord for tips, updates, and support.',
    },
    {
      icon: 'Headphones',
      title: '24/7 Support',
      description:
        'Get help anytime with our dedicated support team via Discord tickets.',
    },
  ] as ServiceItem[],
  steps: [
    {
      number: '01',
      title: 'Join Our Discord',
      description:
        'Click the Discord button and join our community server to get started.',
    },
    {
      number: '02',
      title: 'Browse Our Sites',
      description:
        'Explore our collection of premium non-hooked beaming sites with status updates.',
    },
    {
      number: '03',
      title: 'Start Beaming',
      description:
        'Select your preferred site and begin your beaming experience with our reliable services.',
    },
  ] as StepItem[],
  featureChecklist: [
    'Non-hooked premium sites',
    'Status monitoring',
    'Active Discord community',
    '24/7 ticket support',
    'Regular site updates',
    'Cookie bypasser included',
    'Multiple site options',
    'Free access for all',
  ],
  featureCards: [
    {
      icon: 'Star',
      title: 'Top Rated',
      description: 'Highest rated beaming server with 5 star reviews',
    },
    {
      icon: 'TrendingUp',
      title: 'Growing Fast',
      description: 'Active members in community',
    },
    {
      icon: 'Clock',
      title: 'Always Online',
      description: 'High uptime across all services',
    },
    {
      icon: 'Shield',
      title: 'Trusted',
      description: 'Verified and curated sites only',
    },
  ] as FeatureCardItem[],
  testimonials: [
    {
      quote:
        "Best beaming server I've ever used. The sites are always online and the community is super helpful.",
      name: 'Alex R.',
      role: 'Member since 2024',
    },
    {
      quote:
        'The support team is amazing. Got help within minutes through Discord tickets. Highly recommend!',
      name: 'Jordan M.',
      role: 'Premium Member',
    },
    {
      quote:
        'Non-hooked sites that actually work. This is the real deal. Been using it for months with no issues.',
      name: 'Chris T.',
      role: 'Active Member',
    },
    {
      quote:
        'The cookie bypasser is a game changer. Everything just works perfectly. 10/10 would recommend.',
      name: 'Sam K.',
      role: 'Community Member',
    },
    {
      quote:
        'Finally found a reliable server with trustworthy sites. The quality is unmatched.',
      name: 'Taylor P.',
      role: 'Long-time Member',
    },
  ] as TestimonialItem[],
  trustedBy: ['IMMORTAL', 'INJURIES', 'SPLUNK', 'SHOCKIFY', 'ULTIMA'],
  faq: [
    {
      question: 'What is ASTRAL BEAMS?',
      answer:
        'ASTRAL BEAMS is the #1 beaming server providing premium, non hooked beaming sites with dedicated support and an active community.',
    },
    {
      question: 'Is it really free?',
      answer:
        'Yes! All of our sites and services are completely free to access. Just join our Discord and get started.',
    },
    {
      question: 'How do I get started?',
      answer:
        'Simply click the Join Discord button, join our server, and browse the available beaming sites.',
    },
    {
      question: 'Are the sites safe to use?',
      answer:
        'All sites are thoroughly vetted, verified, and monitored for usability.',
    },
    {
      question: 'What if a site goes offline?',
      answer:
        'We monitor all sites and update statuses as soon as possible. If a site goes down, we work to restore it ASAP.',
    },
    {
      question: 'How can I get support?',
      answer:
        'Open a support ticket in our Discord server and our team will help you within minutes.',
    },
    {
      question: 'What is the Cookie Bypasser?',
      answer:
        'The Cookie Bypasser is a special tool that allows you to bypass cookie-based protections for a smoother experience.',
    },
    {
      question: 'Can I suggest new features or sites?',
      answer:
        "Of course! We love community feedback. Drop your suggestions in our Discord and we'll review them.",
    },
  ] as FaqItem[],
};

// Discord Icon Component
const DiscordIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

// Canvas Particle Starfield Background
const BackgroundCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    interface Star {
      x: number;
      y: number;
      size: number;
      sx: number;
      sy: number;
      o: number;
      isWhite: boolean;
    }
    const stars: Star[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const init = () => {
      stars.length = 0;
      const count = Math.min(100, Math.floor((canvas.width * canvas.height) / 16000));
      for (let i = 0; i < count; i++) {
        const seed = (i * 9301 + 49297) % 233280;
        const norm = seed / 233280;
        stars.push({
          x: (i * 137.5) % canvas.width,
          y: (i * 293.7) % canvas.height,
          size: norm * 1.8 + 0.5,
          sx: (norm - 0.5) * 0.3,
          sy: (((norm * 3.1) % 1) - 0.5) * 0.3,
          o: norm * 0.5 + 0.1,
          isWhite: i % 2 === 0,
        });
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const s of stars) {
        s.x += s.sx;
        s.y += s.sy;
        if (s.x < 0) s.x = canvas.width;
        if (s.x > canvas.width) s.x = 0;
        if (s.y < 0) s.y = canvas.height;
        if (s.y > canvas.height) s.y = 0;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = s.isWhite
          ? `rgba(255, 255, 255, ${s.o * 0.6})`
          : `rgba(168, 85, 247, ${s.o})`;
        ctx.fill();
      }
      animId = requestAnimationFrame(render);
    };

    resize();
    init();
    render();

    const handleResize = () => {
      resize();
      init();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 w-full h-full"
    />
  );
};

// Active section observer
const useActiveSection = (sectionIds: string[]) => {
  const [active, setActive] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 150;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActive(sectionIds[i]);
          return;
        }
      }
      if (window.scrollY < 200) {
        setActive('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds]);

  return active;
};

// Navbar
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navIds = siteConfig.navLinks.map((l) => l.id);
  const activeId = useActiveSection(navIds);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <button
          onClick={() => scrollTo('home')}
          className="flex items-center gap-2 cursor-pointer text-left"
        >
          <img
            src={siteConfig.mascotImage}
            alt="Logo"
            className="w-8 h-8 rounded-full object-cover border border-[#8c3cdd]/50"
          />
          <span className="font-bold text-white text-lg tracking-wide">
            {siteConfig.name}
          </span>
        </button>

        <div className="hidden lg:flex items-center gap-1">
          {siteConfig.navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`px-4 py-2 text-sm font-medium transition-all cursor-pointer ${
                activeId === link.id
                  ? 'text-[#a855f7] border-b-2 border-[#a855f7]'
                  : 'text-[#9c91aa] hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => scrollTo('sites')}
            className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-[#8c3cdd] text-white text-sm font-medium hover:bg-[#7b2cce] transition-all cursor-pointer shadow-[0_0_15px_rgba(140,60,221,0.3)]"
          >
            See Sites
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2 cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-16 left-4 right-4 bg-[#0d0d0d] border border-white/10 rounded-2xl p-4 shadow-2xl">
          <div className="flex flex-col gap-1">
            {siteConfig.navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`text-left px-4 py-3 rounded-xl text-base font-medium transition-all cursor-pointer ${
                  activeId === link.id
                    ? 'bg-[#8c3cdd]/20 text-[#a855f7]'
                    : 'text-[#9c91aa] hover:bg-white/5 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

// Stat Card
const StatCard = ({ value, label }: { value: string; label: string }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);

  const numMatch = value.match(/^([\d,]+)/);
  const targetNum = numMatch
    ? parseInt(numMatch[1].replace(/,/g, ''), 10)
    : null;
  const suffix = numMatch ? value.slice(numMatch[0].length) : '';

  useEffect(() => {
    const el = ref.current;
    if (!el || targetNum === null) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [targetNum]);

  useEffect(() => {
    if (!isVisible || targetNum === null) return;
    const start = performance.now();
    const duration = 2000;
    const animate = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * targetNum));
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(targetNum);
      }
    };
    requestAnimationFrame(animate);
  }, [isVisible, targetNum]);

  const displayVal =
    targetNum !== null
      ? (targetNum >= 1000 ? count.toLocaleString() : count) + suffix
      : value;

  return (
    <div
      ref={ref}
      className="p-4 rounded-2xl bg-white/[0.05] border border-white/10"
    >
      <div className="text-xl md:text-3xl font-semibold text-white mb-1">
        {displayVal}
      </div>
      <div className="text-xs md:text-sm text-[#9c91aa]">{label}</div>
    </div>
  );
};

// Hero Section
const HeroSection = () => {
  const scrollToSites = () => {
    document.getElementById('sites')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 pt-24 pb-12"
    >
      <div className="container mx-auto text-center max-w-4xl">
        <div className="mb-6 animate-fade-in-down">
          <img
            src={siteConfig.mascotImage}
            alt="Mascot"
            className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full object-cover border-2 border-[#8c3cdd]/50 animate-pulse-glow shadow-[0_0_30px_rgba(140,60,221,0.5)]"
          />
        </div>

        <div className="section-badge mb-6 animate-fade-in-up">
          <span className="section-badge-text">{siteConfig.badge}</span>
        </div>

        <h1 className="font-bold mb-4 animate-fade-in-up">
          <span className="text-white text-6xl md:text-7xl lg:text-8xl block tracking-tight">
            ASTRAL
          </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8c3cdd] via-purple-400 to-[#8c3cdd] text-5xl md:text-6xl lg:text-7xl block tracking-tight">
            BEAMS
          </span>
        </h1>

        <p className="text-lg md:text-xl text-[#9c91aa] mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in-up">
          {siteConfig.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up">
          <a
            href={siteConfig.discordInvite}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#8c3cdd] hover:bg-[#7b2cce] text-white px-8 py-4 text-lg font-bold rounded-md transition-all shadow-[0_0_30px_rgba(140,60,221,0.5)] cursor-pointer">
              <DiscordIcon />
              Join Discord
            </button>
          </a>
          <button
            onClick={scrollToSites}
            className="w-full sm:w-auto px-8 py-4 text-lg font-bold rounded-md border border-white/20 text-white hover:bg-white/10 transition-all bg-transparent cursor-pointer"
          >
            View Sites
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 md:gap-8 mb-12 animate-fade-in-up">
          {siteConfig.stats.map((stat) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>

        <button
          onClick={scrollToSites}
          className="inline-flex flex-col items-center gap-2 text-[#9c91aa] hover:text-white transition-colors group animate-fade-in-up cursor-pointer"
        >
          <span className="text-sm font-medium tracking-wider">
            SCROLL TO EXPLORE
          </span>
          <ChevronDown className="w-6 h-6 animate-bounce group-hover:text-[#a855f7] transition-colors" />
        </button>
      </div>
    </section>
  );
};

// Sites Section
const SitesSection = () => {
  return (
    <section id="sites" className="relative py-16 md:py-24 px-4 z-10">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-8">
          <div className="section-badge">
            <span className="section-badge-text">PREMIUM SITES</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Our Beaming Sites
          </h2>
          <p className="text-sm text-[#9c91aa] max-w-lg mx-auto">
            All sites are verified and monitored for uptime.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {siteConfig.sites.map((site) => (
            <a
              key={site.name}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative p-4 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-between gap-2 group cursor-pointer hover:border-[#8c3cdd]/50 hover:bg-white/[0.08] transition-all duration-150"
            >
              {site.isNew && (
                <span className="absolute -top-2 -right-2 text-[10px] font-bold bg-[#8c3cdd] text-white px-2 py-0.5 rounded-md z-10 shadow-sm">
                  NEW!
                </span>
              )}
              <div className="flex flex-col gap-0.5 min-w-0">
                <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-md w-fit bg-[#8c3cdd]/20 text-[#a855f7]">
                  {site.rank === 'BEST' && (
                    <Star className="w-3 h-3 fill-[#a855f7] text-[#a855f7]" />
                  )}
                  {site.rank}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-white font-bold text-sm tracking-wide">
                    {site.name}
                  </span>
                  <ExternalLink className="w-3 h-3 text-[#9c91aa] group-hover:text-[#a855f7] transition-colors" />
                </div>
                {site.note && (
                  <span className="text-[10px] text-[#9c91aa]">
                    ({site.note})
                  </span>
                )}
              </div>
              <span className="flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-full flex-shrink-0 bg-green-500/20 text-green-400 border border-green-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Live
              </span>
            </a>
          ))}
        </div>

        <div className="section-divider mt-16 mx-auto max-w-xs" />
      </div>
    </section>
  );
};

// Services Section ("Why Choose Us?")
const ServicesSection = () => {
  const iconMap = {
    Shield,
    Zap,
    Globe,
    Lock,
    Users,
    Headphones,
  };

  return (
    <section id="services" className="relative py-20 md:py-32 px-4 z-10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="section-badge">
            <span className="section-badge-text">SERVICES</span>
          </div>
          <h2 className="section-title">Why Choose Us?</h2>
          <p className="section-subtitle">
            We provide the best beaming experience with premium features and dedicated support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.services.map((item) => {
            const IconComp = iconMap[item.icon] || Shield;
            return (
              <div key={item.title} className="glass-card group">
                <div className="icon-box">
                  <IconComp className="w-7 h-7 text-[#a855f7]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-[#9c91aa] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="section-divider mt-20 mx-auto max-w-md" />
    </section>
  );
};

// How It Works Section
const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="relative py-20 md:py-32 px-4 z-10">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <div className="section-badge">
            <span className="section-badge-text">HOW IT WORKS</span>
          </div>
          <h2 className="section-title">Get Started in 3 Easy Steps</h2>
          <p className="section-subtitle">
            Join thousands of users who trust {siteConfig.name} for their beaming needs.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#8c3cdd]/40 to-transparent -translate-x-1/2" />
          <div className="space-y-8 md:space-y-0">
            {siteConfig.steps.map((step, idx) => (
              <div
                key={step.number}
                className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-12 animate-fade-in-up ${
                  idx % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <div
                  className={`flex-1 ${
                    idx % 2 === 1
                      ? 'text-center md:text-left'
                      : 'text-center md:text-right'
                  }`}
                >
                  <div className="inline-block p-6 rounded-2xl bg-white/[0.05] border border-white/10 hover:border-[#8c3cdd]/30 transition-colors max-w-md">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[#9c91aa] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="relative z-10 flex-shrink-0">
                  <div
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#8c3cdd]/20 border-2 border-[#8c3cdd] flex items-center justify-center shadow-[0_0_30px_rgba(140,60,221,0.4)]"
                  >
                    <span className="text-2xl md:text-3xl font-bold text-[#a855f7]">
                      {step.number}
                    </span>
                  </div>
                </div>

                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="section-divider mt-20 mx-auto max-w-md" />
    </section>
  );
};

// Features Section
const FeaturesSection = () => {
  const iconMap = {
    Star,
    TrendingUp,
    Clock,
    Shield,
  };

  return (
    <section id="features" className="relative py-20 md:py-32 px-4 z-10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="section-badge">
            <span className="section-badge-text">FEATURES</span>
          </div>
          <h2 className="section-title">Everything You Need</h2>
          <p className="section-subtitle">
            Packed with features designed to give you the best beaming experience possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Key Benefits</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {siteConfig.featureChecklist.map((item, idx) => (
                <div
                  key={item}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.05] border border-white/10 hover:border-[#8c3cdd]/30 transition-colors animate-fade-in-up"
                  style={{ animationDelay: `${idx * 0.05}s` }}
                >
                  <div className="w-6 h-6 rounded-full bg-[#8c3cdd]/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-[#a855f7]" />
                  </div>
                  <span className="text-white/80 text-sm font-medium">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {siteConfig.featureCards.map((card, idx) => {
              const IconComp = iconMap[card.icon] || Star;
              return (
                <div
                  key={card.title}
                  className="glass-card group animate-fade-in-up"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#8c3cdd]/20 flex items-center justify-center mb-4 group-hover:bg-[#8c3cdd]/30 transition-colors">
                    <IconComp className="w-6 h-6 text-[#a855f7]" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1">
                    {card.title}
                  </h4>
                  <p className="text-sm text-[#9c91aa]">{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-[#8c3cdd]/10 via-[#8c3cdd]/5 to-[#8c3cdd]/10 border border-[#8c3cdd]/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <Zap className="w-10 h-10 text-[#a855f7]" />
              <div>
                <h4 className="text-xl font-bold text-white">
                  Performance Badge
                </h4>
                <p className="text-[#9c91aa]">
                  Verified fast and reliable service
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={siteConfig.discordInvite}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-6 py-3 rounded-xl bg-[#8c3cdd] hover:bg-[#7b2cce] text-white text-sm font-bold transition-all shadow-[0_0_20px_rgba(140,60,221,0.4)] cursor-pointer">
                  Get Started
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="section-divider mt-20 mx-auto max-w-md" />
    </section>
  );
};

// Reviews / Testimonials Section
const ReviewsSection = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const items = siteConfig.testimonials;

  const prev = () => {
    setCurrentIdx((i) => (i === 0 ? items.length - 1 : i - 1));
  };

  const next = () => {
    setCurrentIdx((i) => (i === items.length - 1 ? 0 : i + 1));
  };

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [items.length]);

  return (
    <section id="testimonials" className="relative py-20 md:py-32 px-4 z-10">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <div className="section-badge">
            <span className="section-badge-text">TESTIMONIALS</span>
          </div>
          <h2 className="section-title">What Our Members Say</h2>
          <p className="section-subtitle">
            Join thousands of satisfied members who trust {siteConfig.name}.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-2xl bg-white/[0.05] border border-white/10 p-8 md:p-12">
            <div className="text-[#8c3cdd]/30 text-5xl font-serif mb-4 leading-none">
              “
            </div>
            <div className="relative min-h-[180px]">
              {items.map((item, idx) => (
                <div
                  key={idx}
                  className={`transition-all duration-500 ${
                    idx === currentIdx
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 absolute inset-0 translate-x-8 pointer-events-none'
                  }`}
                >
                  <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                    "{item.quote}"
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h4 className="text-lg font-bold text-white">
                        {item.name}
                      </h4>
                      <p className="text-[#9c91aa] text-sm">{item.role}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-500 fill-yellow-500"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center gap-2">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIdx(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    idx === currentIdx
                      ? 'w-8 bg-[#8c3cdd]'
                      : 'w-2 bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-white/20 hover:bg-white/10 flex items-center justify-center transition-all cursor-pointer text-white"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-white/20 hover:bg-white/10 flex items-center justify-center transition-all cursor-pointer text-white"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <p className="text-center text-[#9c91aa]/60 text-sm mb-6 tracking-wider font-semibold">
            TRUSTED BY THE COMMUNITY
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            {siteConfig.trustedBy.map((name) => (
              <div
                key={name}
                className="px-6 py-3 rounded-xl bg-white/[0.05] border border-white/10 hover:border-[#8c3cdd]/30 transition-colors"
              >
                <span className="text-lg font-bold text-[#9c91aa] tracking-wider">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="section-divider mt-20 mx-auto max-w-md" />
    </section>
  );
};

// FAQ Section
const FaqSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-20 md:py-32 px-4 z-10">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <div className="section-badge">
            <span className="section-badge-text">FAQ</span>
          </div>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Got questions? We've got answers. If you can't find what you're looking for, reach out on Discord.
          </p>
        </div>

        <div className="space-y-4">
          {siteConfig.faq.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`bg-white/[0.05] border rounded-xl px-6 transition-all duration-200 ${
                  isOpen ? 'border-[#8c3cdd]/50 bg-white/[0.08]' : 'border-white/10'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between py-5 text-left text-white hover:text-[#a855f7] text-base md:text-lg font-medium transition-colors cursor-pointer"
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 transition-transform duration-200 text-[#9c91aa] ${
                      isOpen ? 'rotate-180 text-[#a855f7]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="pb-5 text-[#9c91aa] leading-relaxed text-sm md:text-base border-t border-white/5 pt-3 animate-fade-in-down">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[#9c91aa] mb-4">Still have questions?</p>
          <a
            href={siteConfig.supportTicketUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#a855f7] hover:text-[#c084fc] font-medium transition-colors cursor-pointer"
          >
            Open a support ticket <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
      <div className="section-divider mt-20 mx-auto max-w-md" />
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="relative z-10 py-8 border-t border-white/10">
      <div className="container mx-auto text-center">
        <p className="text-sm text-[#9c91aa] tracking-widest font-medium">
          © 2026 ASTRAL BEAMS. ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  );
};

// Floating Help Widget & Back to Top
const FloatingWidgets = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {helpOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
          onClick={() => setHelpOpen(false)}
        />
      )}

      {/* Help Popup */}
      <div
        className={`fixed bottom-20 right-4 z-[70] w-80 rounded-2xl bg-[#0d0d0d] border border-white/15 shadow-2xl transition-all duration-300 origin-bottom-right ${
          helpOpen
            ? 'scale-100 opacity-100 translate-y-0'
            : 'scale-90 opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-white">Need Help?</h3>
            <button
              onClick={() => setHelpOpen(false)}
              className="text-[#9c91aa] hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className="text-sm text-[#9c91aa] mb-6 leading-relaxed">
            Join our Discord for instant support and community access!
          </p>
          <div className="flex flex-col gap-3">
            <a
              href={siteConfig.discordInvite}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#8c3cdd] hover:bg-[#7b2cce] text-white px-4 py-3 text-sm font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(140,60,221,0.5)] cursor-pointer"
            >
              <DiscordIcon className="w-5 h-5" /> Join Discord
            </a>
            <a
              href={siteConfig.supportTicketUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 border border-white/20 text-white hover:bg-white/10 px-4 py-3 text-sm font-bold rounded-xl transition-all cursor-pointer"
            >
              <MessageSquare className="w-5 h-5" /> Open Ticket
            </a>
          </div>
        </div>
      </div>

      {/* Floating Action Button (Help) */}
      <button
        onClick={() => setHelpOpen(!helpOpen)}
        className={`fixed bottom-4 right-4 z-[70] w-14 h-14 rounded-full bg-[#8c3cdd] hover:bg-[#7b2cce] text-white flex items-center justify-center transition-all shadow-[0_0_30px_rgba(140,60,221,0.5)] cursor-pointer ${
          helpOpen ? 'rotate-90' : ''
        }`}
        aria-label="Help"
      >
        {helpOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-4 left-4 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all duration-300 cursor-pointer ${
          showBackToTop
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </>
  );
};

export default function App() {
  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-[#8c3cdd] selection:text-white">
      <BackgroundCanvas />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <SitesSection />
        <ServicesSection />
        <HowItWorksSection />
        <FeaturesSection />
        <ReviewsSection />
        <FaqSection />
      </main>
      <Footer />
      <FloatingWidgets />
    </div>
  );
}
