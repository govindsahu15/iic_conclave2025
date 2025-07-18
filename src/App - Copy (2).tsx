import React, { useRef, useEffect } from 'react';
import { Menu, X, MapPin, Phone, Mail, Building2, Calendar, Users, Ticket, MapPinned, Handshake, Info, Lightbulb } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [navBackground, setNavBackground] = React.useState(false);

  const sections = {
    home: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    committee: useRef<HTMLDivElement>(null),
    agenda: useRef<HTMLDivElement>(null),
    abstract: useRef<HTMLDivElement>(null),
    registration: useRef<HTMLDivElement>(null),
    workshop: useRef<HTMLDivElement>(null),
    venue: useRef<HTMLDivElement>(null),
    sponsorship: useRef<HTMLDivElement>(null),
    generalInfo: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    setIsMenuOpen(false);
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const NavLink = ({ section, label, highlight }: { section: keyof typeof sections, label: string, highlight?: boolean }) => (
    <button
      onClick={() => scrollToSection(sections[section])}
      className={`transition-colors duration-200 ${highlight ? 'bg-golden text-navy px-4 py-2 rounded-lg font-bold hover:bg-golden-light' : 'hover:text-golden'}`}
    >
      {label}
    </button>
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavBackground(true);
      } else {
        setNavBackground(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav
        className={`fixed w-full z-50 shadow-lg transition-colors duration-300 ${navBackground ? 'bg-navy/80 backdrop-blur-sm' : 'bg-navy'} text-white`}
      >
        <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img
                src="logo.jpg"
                alt="IIC 2025 Logo"
                className="h-12 w-13"
              />
              <span className="ml-2 font-bold text-4xl">IIC 2025</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              <NavLink section="home" label="Home" />
              <NavLink section="about" label="Benefits" />
              <NavLink section="committee" label="Committee" />
              <NavLink section="agenda" label="Agenda" />
              <NavLink section="venue" label="Venue" />
              <NavLink section="sponsorship" label="Sponsorship" />
              <NavLink section="generalInfo" label="General Info" />
              <NavLink section="contact" label="Contact" />
              <NavLink section="registration" label="Register Now" highlight={true} />

            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-navy-light">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <div className="flex flex-col space-y-3 p-4">
                <NavLink section="home" label="Home" />
                <NavLink section="about" label="Benefits" />
                <NavLink section="committee" label="Committee" />
                <NavLink section="agenda" label="Agenda" />
                <NavLink section="venue" label="Venue" />
                <NavLink section="sponsorship" label="Sponsorship" />
                <NavLink section="generalInfo" label="General Info" />
                <NavLink section="contact" label="Contact" />
                <NavLink section="registration" label="Register Now" highlight={true} />
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="pt-16">
        {/* Hero Section */}
        <div ref={sections.home} className="min-h-screen bg-navy text-white flex items-center justify-center relative">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
              alt="Conference hall"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative z-10 text-center px-4">
            <p className="text-xl md:text-3xl font-bold mb-2 text-golden">Department of Mechanical Engineering</p>
            <p className="text-xl md:text-2xl mb-2">cordially invites you to</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Industry-Academia
              <span className="text-golden"> Conclave 2025</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8">Bridging Academia and Industry</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <div className="flex items-center gap-2">
                <Calendar className="text-golden" />
                <span>September 25, 2025</span>
              </div>
              <div className="hidden md:block text-golden">|</div>
              <div className="flex items-center gap-2">
                <MapPin className="text-golden" />
                <span>IIT Tirupati, Andhra Pradesh</span>
              </div>
            </div>
            {/* Container for buttons with spacing */}
            <div className="flex flex-col space-y-4 mt-8 md:flex-row md:space-x-4 md:space-y-0 justify-center">
              <a
                href="https://www.iittp.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-golden text-navy px-8 py-3 rounded-lg font-bold hover:bg-golden-light transition-colors duration-200 block"
              >
                About IIT Tirupati
              </a>
              <a
                href="https://mech.iittp.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-golden text-navy px-8 py-3 rounded-lg font-bold hover:bg-golden-light transition-colors duration-200 block"
              >
                About Department
              </a>
              <a
                href="ME Department Brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-golden text-navy px-8 py-3 rounded-lg font-bold hover:bg-golden-light transition-colors duration-200 block"
              >
                Department Brochure
              </a>
              <a
                href="Flyer_IAC_2025_ME_IIT Tirupati.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-golden text-navy px-8 py-3 rounded-lg font-bold hover:bg-golden-light transition-colors duration-200 block"
              >
                Flyer
              </a>
            </div>
          </div>
        </div>

        {/* Benefits for Industry Section */}
        <div ref={sections.about} className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-navy mb-12 text-center">Benefits for Industry</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <ul className="list-disc text-lg text-gray-700 leading-relaxed pl-8">
                  <li className="mb-4">
                    Sponsored/Consultancy projects
                    <ul className="list-disc ml-8 mt-2">
                      <li>Inviting problem statements from the Industry</li>
                    </ul>
                  </li>
                  <li className="mb-4">
                    Executive (online) M. Tech. Programs in Manufacturing &amp; Energy storage
                    <ul className="list-disc ml-8 mt-2">
                      <li>Curriculum, Fee, and other modalities will be discussed during the program</li>
                    </ul>
                  </li>
                  <li className="mb-4">
                    MS/PhD degree without GATE score
                    <ul className="list-disc ml-8 mt-2">
                      <li>Curriculum, Fee, and other modalities will be discussed during the program</li>
                    </ul>
                  </li>
                  <li className="mb-4">
                    Facilities (fabrication/testing/characterization) at IIT Tirupati
                    <ul className="list-disc ml-8 mt-2">
                      <li>for the industry's needs</li>
                      <li>for conducting the training programs</li>
                    </ul>
                  </li>
                  <li className="mb-4">
                    Internships/Placements
                    <ul className="list-disc ml-8 mt-2">
                      <li>Internships for a duration of 2 to 10 months for the UG/PG students at the Industry</li>
                    </ul>
                  </li>
                  <li className="mb-4">
                    Participation of Mechanical Engineering students from IIT Tirupati.
                  </li>
                </ul>
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="flex flex-col items-center p-4 bg-navy/5 rounded-lg">
                    <Users className="text-navy mb-2" size={32} />
                    <span className="text-2xl font-bold text-navy">500+</span>
                    <span className="text-gray-600">Attendees</span>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-navy/5 rounded-lg">
                    <Handshake className="text-navy mb-2" size={32} />
                    <span className="text-2xl font-bold text-navy">50+</span>
                    <span className="text-gray-600">Industry Partners</span>
                  </div>
                </div>
              </div>
              <div className="flex items-start justify-end h-full">
                <img
                  src="/meeting.jpg"
                  alt="Conference discussion"
                  className="rounded-lg shadow-xl"
                  style={{ objectFit: 'cover', transform: 'scale(1.1)', transformOrigin: 'top right', marginTop: '20mm', marginLeft: '30mm' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Committee Section */}
        <div ref={sections.committee} className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-navy mb-12 text-center">Organizing Committee</h2>
            {/* First row: Chairman and Convenor */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
              {[
                {
                  name: "Dr. N. Venkaiah",
                  role: "Chairman",
                  title: "Associate Professor, IIT Tirupati",
                  image: "/venkaiah.jpg"
                },
                {
                  name: "Dr. Baburaj M",
                  role: "Convenor",
                  title: "Technical Officer, IIT Tirupati",
                  image: "/baburaj.jpg"
                }
              ].map((member, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold text-navy text-center">{member.name}</h3>
                  <p className="text-golden font-semibold text-center">{member.role}</p>
                  <p className="text-gray-600 text-center">{member.title}</p>
                </div>
              ))}
            </div>
            {/* Second row: Only Members */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
              {[
                {
                  name: "Dr. Thiyagarajan R",
                  role: "Member",
                  title: "Assistant Professor, IIT Tirupati",
                  image: "/thiyagarajan.jpeg"
                },
                {
                  name: "Dr. Srinivasa Krishna Addepalli",
                  role: "Member",
                  title: "Assistant Professor, IIT Tirupati",
                  image: "/as_krishna.jpg"
                },
                {
                  name: "Dr. Govind Narayan Sahu",
                  role: "Member",
                  title: "Assistant Professor, IIT Tirupati",
                  image: "/Govind_N_Sahu.jpg"
                }
              ].map((member, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold text-navy text-center">{member.name}</h3>
                  <p className="text-golden font-semibold text-center">{member.role}</p>
                  <p className="text-gray-600 text-center">{member.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Agenda Section */}
        <div ref={sections.agenda} className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-navy mb-12 text-center">Event Agenda</h2>
            <div className="grid md:grid-cols-1 gap-8">
              {[
                "Faculty Presentations: Gain insights into our Department’s latest research initiatives and projects, highlighting our expertise and state-of-the-art facilities.",
                "Industry Professionals’ Presentations: Showcase your expertise and challenges faced by the industry while exploring collaboration opportunities, including: Student internships/placements; Guest lectures and other industrial engagements.",
                "Laboratory Tour: Experience our cutting-edge laboratories and research infrastructure firsthand.",
                "Panel Discussion: Participate in engaging conversations on the future of Mechanical Engineering and its alignment with industry practices, fostering future collaborations between the Institute and Industry.",
              ].map((item, index) => {
                const parts = item.split(':');
                const title = parts[0];
                const description = parts.slice(1).join(':');

                return (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-start">
                    <Lightbulb className="text-navy mr-4" size={32} />
                    <p className="text-gray-700 leading-relaxed">
                      <span className="font-bold">{title}:</span> {description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Registration Section */}
        <div ref={sections.registration} className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-navy mb-12 text-center">Registration</h2>
            {/* Centered Container */}
            <div className="mx-auto max-w-4xl">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="registration-details">
                  {[
                    {
                      title: "Industry Professionals",
                      price: "₹500",
                      features: [
                        "Access to all sessions",
                        "Conclave kit",
                        "Lunch and refreshments",
                        "Access to Lab tour",
                        "Network with industry leaders",
                      ],
                    },
                  ].map((plan, index) => (
                    <div key={index} className={`rounded-lg p-6 bg-white`}>
                      <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
                      <p className={`text-3xl font-bold mb-6 text-navy`}>
                        ₹500
                        <span className="text-golden text-2xl"></span>
                      </p>
                      <ul className="space-y-3 mb-8">
                        {plan.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-center gap-2">
                            <Ticket className={"text-navy flex-shrink-0 h-5 w-5"} size={20} />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <a
                        href="https://forms.gle/V3FyxbckerFYjQDq9"
                        className={`w-full py-2 rounded-lg font-bold transition-colors duration-200 bg-navy text-white hover:bg-navy-light block text-center`} //Important block text-center for width and text
                        target="_blank" // Optional: Open in a new tab
                        rel="noopener noreferrer" // Optional: Security best practice
                      >
                        Register Now
                      </a>
                    </div>
                  ))}
                </div>
                {/* QR Code */}
                <div className="flex flex-col items-center justify-center bg-white rounded-lg p-6">
                  <p className="text-lg font-semibold text-navy text-center mb-8">
                    Scan to Register
                  </p>
                  <div className="flex justify-center w-full">
                    <img
                      src="\QR Code For Registration.png"
                      alt="Registration QR Code"
                      className="rounded-lg shadow-md"
                      style={{ width: '290px', height: '290px', objectFit: 'contain' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Campus Tour Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-navy mb-8 text-center">Campus Tour</h2>
            <div className="flex justify-center items-center">
              <iframe
                width="860" height="475"
                src="https://www.youtube.com/embed/32GeyCGMeQY?si=v2bY71Js0wkviCiP"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen></iframe>
            </div>
          </div>
        </div>

        {/* Venue Section */}
        <div ref={sections.venue} className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-navy mb-12 text-center">Venue</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex justify-center">
                <img
                  src="/Picture1.jpg"
                  alt="IIT Tirupati Campus"
                  className="rounded-lg shadow-xl mb-6 w-full max-w-4xl h-[285px] object-cover"
                />
              </div>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-navy mb-3">Location</h3>
                  <div className="space-y-3">
                    <a
                      href="https://maps.app.goo.gl/uMUjNBLaRLT95fdy9"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open IIT Tirupati in Google Maps"
                      className="flex items-start gap-3 hover:text-golden transition-colors duration-200"
                    >
                      <MapPinned className="text-golden flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Academic Building 2 (AB2, CR-104)</p>
                        <p className="text-gray-600">IIT Tirupati</p>
                        <p className="text-gray-600">Yerpedu – Venkatagiri Road, Yerpedu Post,</p>
                        <p className="text-gray-600">Chittoor District, Andhra Pradesh - 517619</p>
                      </div>
                    </a>
                    <a
                      href="https://maps.app.goo.gl/GFi2iSbhghmDiG3w5"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open Tirupati Airport in Google Maps"
                      className="flex items-center gap-3 hover:text-golden transition-colors duration-200"
                    >
                      <MapPin className="text-golden flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Nearest Airport</p>
                        <p className="text-gray-600">Tirupati International Airport - 12 km</p>
                      </div>
                    </a>
                    <a
                      href="https://maps.app.goo.gl/zaqr26nS7zc3pzsP8"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open Renigunta Railway Station in Google Maps"
                      className="flex items-center gap-3 hover:text-golden transition-colors duration-200"
                    >
                      <Building2 className="text-golden flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Nearest Railway Station</p>
                        <p className="text-gray-600">Renigunta Railway Station - 14 km</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sponsorship Section */}
        <div ref={sections.sponsorship} className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-navy mb-12 text-center">Sponsorship Opportunities</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Diamond Sponsor",
                  price: "₹75,000",
                  benefits: [
                    "The chief guest for the inauguration program",
                    "Stall (2 m x 2 m)",
                    "Company logo on banners",
                    "Free registration, including lodging and boarding for two people",
                  ]
                },
                {
                  title: "Platinum Sponsor",
                  price: "₹50,000",
                  benefits: [
                    "Guest of honour for the inauguration program",
                    "Stall (2 m x 2 m)",
                    "Company logo on banners",
                    "Free registration, including lodging and boarding for one person",
                  ]
                },
                {
                  title: "Gold Sponsor",
                  price: "₹25,000",
                  benefits: [
                    "Company logo on banners",
                    "Free registration, including lodging and boarding for one person",
                  ]
                }
              ].map((tier, index, array) => (
                <div
                  key={index}
                  className={`bg-navy/5 p-6 rounded-lg ${index !== array.length - 1 ? 'border-b border-gray-300 pb-8' : ''}`}
                >
                  <h3 className="text-2xl font-bold text-navy mb-2">{tier.title}</h3>
                  <p className="text-3xl font-bold text-golden mb-6">{tier.price}</p>
                  <ul className="space-y-3 mb-6">
                    {tier.benefits.map((benefit, bIndex) => (
                      <li key={bIndex} className="flex items-center gap-2">
                        <Handshake className="text-navy flex-shrink-0 h-5 w-5" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <br></br>
            <div className="flex justify-center">
              <button className="w-full max-w-md bg-navy text-white py-2 rounded-lg font-bold hover:bg-navy-light transition-colors duration-200">
                Become a Sponsor
              </button>
            </div>        
          </div>
        </div>

        {/* General Info Section */}
        <div ref={sections.generalInfo} className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-navy mb-12 text-center">General Information</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Flex container for equal height and width */}
              <div className="flex flex-col">
                <div className="bg-navy/5 p-6 rounded-lg flex-1 overflow-hidden">
                  <div className="flex items-center gap-3 mb-4">
                    <Info className="text-golden" size={24} />
                    <h3 className="text-2xl font-bold text-navy">Travel Information</h3>
                  </div>
                  <ul className="space-y-4">
                    <li>
                      <p className="font-semibold">From Airport:</p>
                      <p className="text-gray-600">Pre-paid taxis and cab services available at the airport. Journey time approximately 30 minutes.</p>
                    </li>
                    <li>
                      <p className="font-semibold">From Railway Station:</p>
                      <p className="text-gray-600">Regular bus service and taxis available. Journey time approximately 45 minutes.</p>
                    </li>
                    <li>
                      <p className="font-semibold">Local Transportation:</p>
                      <p className="text-gray-600">Shuttle service will be available to the venue on charge bases.</p>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Flex container for equal height and width */}
              <div className="flex flex-col">
                <div className="bg-navy/5 p-6 rounded-lg flex-1 overflow-hidden">
                  <div className="flex items-center gap-3 mb-4">
                    <Info className="text-golden" size={24} />
                    <h3 className="text-2xl font-bold text-navy">Local Attractions</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <MapPin className="text-golden mt-1 flex-shrink-0" size={20} />
                      <div>
                        <p className="font-semibold">Tirumala Temple</p>
                        <p className="text-gray-600">World's richest temple, 20 km from venue</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <MapPin className="text-golden mt-1 flex-shrink-0" size={20} />
                      <div>
                        <p className="font-semibold">Sri Venkateswara Museum</p>
                        <p className="text-gray-600">Cultural heritage museum, 15 km from venue</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <MapPin className="text-golden mt-1 flex-shrink-0" size={20} />
                      <div>
                        <p className="font-semibold">Chandragiri Fort</p>
                        <p className="text-gray-600">Historical monument, 25 km from venue</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div>
                        <a href="https://tourism.ap.gov.in/assets/img/Brochures/Tirupati%20Places.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-golden hover:underline">
                          More Attractions ...
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div ref={sections.contact} className="py-20 bg-navy text-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Contact Us</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Building2 className="text-golden" />
                  <span>IIT Tirupati, Yerpedu – Venkatagiri Road, Chittoor District, Andhra Pradesh - 517619
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="text-golden" />
                  <span>+91 94454 81096</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="text-golden" />
                  <span>iac_me@iittp.ac.in</span>
                </div>
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <button className="text-left hover:text-golden transition-colors duration-200">FAQ</button>
                    <button className="text-left hover:text-golden transition-colors duration-200">Terms & Conditions</button>
                    <button className="text-left hover:text-golden transition-colors duration-200">Privacy Policy</button>
                    <button className="text-left hover:text-golden transition-colors duration-200">Cancellation Policy</button>
                  </div>
                </div>
              </div>
              <div>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 rounded bg-navy-light border border-golden/30 text-white"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 rounded bg-navy-light border border-golden/30 text-white"
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full p-3 rounded bg-navy-light border border-golden/30 text-white"
                  ></textarea>
                  <button className="w-full bg-golden text-navy px-6 py-3 rounded font-bold hover:bg-golden-light transition-colors duration-200">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;