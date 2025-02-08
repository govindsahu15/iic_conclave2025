import React, { useRef, useEffect } from 'react';
import { Menu, X, MapPin, Phone, Mail, Building2, GraduationCap, Calendar, Users, Ticket, Wrench, MapPinned, Handshake,Info, Lightbulb } from 'lucide-react';

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

  const NavLink = ({ section, label }: { section: keyof typeof sections, label: string }) => (
    <button
      onClick={() => scrollToSection(sections[section])}
      className="hover:text-golden transition-colors duration-200"
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
        className={`fixed w-full z-50 shadow-lg transition-colors duration-300 ${
          navBackground ? 'bg-navy/80 backdrop-blur-sm' : 'bg-navy'
        } text-white`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <GraduationCap className="h-8 w-8 text-golden" />
              <span className="ml-2 font-bold text-lg">IIT Tirupati Conclave 2025</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6">
              <NavLink section="home" label="Home" />
              <NavLink section="about" label="Benefits" />
              <NavLink section="committee" label="Committee" />
              <NavLink section="agenda" label="Agenda" />
              <NavLink section="abstract" label="Facilities" />
              <NavLink section="registration" label="Registration" />
              {/* <NavLink section="workshop" label="Workshop" /> */}
              <NavLink section="venue" label="Venue" />
              <NavLink section="sponsorship" label="Sponsorship" />
              <NavLink section="generalInfo" label="General Info" />
              <NavLink section="contact" label="Contact" />
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
                 <NavLink section="abstract" label="Facilities" />
                 <NavLink section="registration" label="Registration" />
                 {/* <NavLink section="workshop" label="Workshop" /> */}
                 <NavLink section="venue" label="Venue" />
                 <NavLink section="sponsorship" label="Sponsorship" />
                 <NavLink section="generalInfo" label="General Info" />
                 <NavLink section="contact" label="Contact" />
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Industry-Institute
              <span className="text-golden"> Conclave 2025</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8">Bridging Academia and Industry at IIT Tirupati</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <div className="flex items-center gap-2">
                <Calendar className="text-golden" />
                <span>March 15-17, 2025</span>
              </div>
              <div className="hidden md:block text-golden">|</div>
              <div className="flex items-center gap-2">
                <MapPin className="text-golden" />
                <span>IIT Tirupati, Andhra Pradesh</span>
              </div>
            </div>
            <button className="mt-8 bg-golden text-navy px-8 py-3 rounded-full font-bold hover:bg-golden-light transition-colors duration-200">
              Register Now
            </button>
          </div>
        </div>

        {/* Benefits for Industry Section */}
        <div ref={sections.about} className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-navy mb-12 text-center">Benefits for Industry</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  The Industry-Institute Conclave 2025 at IIT Tirupati offers several key benefits for industry partners:
                </p>
                <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed">
                  <li>Collaboration/Networking opportunities for Sponsored/Consultancy projects</li>
                  <li>Higher education opportunities (M.Tech./MS/PhD) for your employees</li>
                  <li>Access to ONLINE M.Tech. Program in Advanced Manufacturing</li>
                  <li>Opportunity to explore cutting-edge facilities (fabrication/testing/characterization) at IIT Tirupati</li>
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
              <div>
                <img
                  src="/meeting.jpg"
                  alt="Conference discussion"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Committee Section */}
        <div ref={sections.committee} className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-navy mb-12 text-center">Organizing Committee</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Dr. K. N. Satyanarayana",
                  role: "Patron",
                  title: "Director, IIT Tirupati",
                  image: "/director.jpg"
                },
                {
                  name: "Dr. N. Venkaiah",
                  role: "Chairman",
                  title: "Associate Professor, IIT Tirupati",
                  image: "/venkaiah.jpg"
                },
                {
                  name: "Dr. Thiyagarajan R",
                  role: "convenor",
                  title: "Assistant Professor, IIT Tirupati",
                  image: "/thiyagarajan.jpeg"
                },
                {
                  name: "Dr. Govind Narayan Sahu",
                  role: "Convenor",
                  title: "Assistant Professor, IIT Tirupati",
                  image: "/Govind_N_Sahu.jpg"
                },
                {
                  name: "Dr. Srinivasa Krishna Addepalli",
                  role: "convenor",
                  title: "Assistant Professor, IIT Tirupati",
                  image: "/as_krishna.jpg"
                },
                {
                  name: "Dr. Baburaj M",
                  role: "convenor",
                  title: "Technical Officer, IIT Tirupati",
                  image: "/baburaj.jpg"
                },
                {
                  name: "Mr. B. Ramesh Kumar",
                  role: "convenor",
                  title: "Technical Superintendent, IIT Tirupati",
                  image: "/me20d506-ramesh-kumar-b.jpg"
                },
              ].map((member, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
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
                "Faculty Presentations: Insights into the Department’s latest research and state-of-the-art facilities.",
                "Industry Professional Presentations: Showcase expertise, requirements, and explore collaboration opportunities (student internships/placements, guest lectures, etc.).",
                "Laboratory Tour: Experience our cutting-edge laboratories and research infrastructure firsthand.",
                "Panel Discussion: Engage in conversations on the future of Mechanical Engineering and its alignment with industry practices.",
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-center">
                  <Lightbulb className="text-navy mr-4" size={32} />
                  <p className="text-gray-700 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

          {/* Abstract Section */}
        {/* <div ref={sections.abstract} className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-navy mb-12 text-center">Call for Abstracts</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="bg-navy/5 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-navy mb-4">Submission Guidelines</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <BookOpen className="text-golden mt-1 flex-shrink-0" size={20} />
                      <span>Abstract length: 300-500 words</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Clock className="text-golden mt-1 flex-shrink-0" size={20} />
                      <span>Submission deadline: January 15, 2025</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Users className="text-golden mt-1 flex-shrink-0" size={20} />
                      <span>Open to both academic researchers and industry professionals</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-navy/5 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-navy mb-4">Focus Areas</h3>
                  <ul className="space-y-2">
                    <li>• Artificial Intelligence and Machine Learning</li>
                    <li>• Sustainable Technologies</li>
                    <li>• Advanced Manufacturing</li>
                    <li>• Smart Infrastructure</li>
                    <li>• Digital Transformation</li>
                    <li>• Industry 4.0</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-navy text-white p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">Important Dates</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <Calendar className="text-golden flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Abstract Submission Deadline</p>
                        <p className="text-gray-300">January 15, 2025</p>
                      </div>
                    </li>
                    <li className="flex items-center gap-3">
                      <Calendar className="text-golden flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Notification of Acceptance</p>
                        <p className="text-gray-300">February 1, 2025</p>
                      </div>
                    </li>
                    <li className="flex items-center gap-3">
                      <Calendar className="text-golden flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Final Presentation Submission</p>
                        <p className="text-gray-300">March 1, 2025</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <button className="w-full bg-golden text-navy py-3 rounded-lg font-bold hover:bg-golden-light transition-colors duration-200">
                  Submit Abstract
                </button>
              </div>
            </div>
          </div>
        </div> */}
          {/* Facilities Section */}
  <div ref={sections.abstract} className="py-20 bg-white">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-navy mb-12 text-center">Facilities</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="bg-navy/5 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-navy mb-4">Manufacturing Facilities</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Wrench className="text-golden mt-1 flex-shrink-0" size={20} />
                <span>CNC Milling Machine (DMG Mori)</span>
              </li>
              <li className="flex items-start gap-2">
                <Wrench className="text-golden mt-1 flex-shrink-0" size={20} />
                <span>Wire EDM</span>
              </li>
              <li className="flex items-start gap-2">
                <Wrench className="text-golden mt-1 flex-shrink-0" size={20} />
                <span>Metal 3D Printer (EOS M290)</span>
              </li>
               <li className="flex items-start gap-2">
                <Wrench className="text-golden mt-1 flex-shrink-0" size={20} />
                <span>Coordinate Measuring Machine</span>
              </li>
              {/* Add more manufacturing facilities from the brochure */}
            </ul>
          </div>
           <div className="bg-navy/5 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-navy mb-4">Solid Mechanics & Robotics Facilities</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Wrench className="text-golden mt-1 flex-shrink-0" size={20} />
                <span>100 kN Fatigue Universal Testing Machine</span>
              </li>
               <li className="flex items-start gap-2">
                <Wrench className="text-golden mt-1 flex-shrink-0" size={20} />
                <span>Free Field Microphone</span>
              </li>
              {/* Add more manufacturing facilities from the brochure */}
            </ul>
          </div>
        </div>
        <div className="space-y-6">
          <div className="bg-navy/5 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-navy mb-4">Fluids & Thermal Engineering Facilities</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Wrench className="text-golden mt-1 flex-shrink-0" size={20} />
                <span>Particle Image Velocimetry</span>
              </li>
               <li className="flex items-start gap-2">
                <Wrench className="text-golden mt-1 flex-shrink-0" size={20} />
                <span>High Speed Imaging Systems</span>
              </li>
              {/* Add more manufacturing facilities from the brochure */}
            </ul>
          </div>
          <div className="bg-navy text-white p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Key Research Areas</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Lightbulb className="text-golden flex-shrink-0" />
                <div>
                  <p className="font-semibold">Advanced Manufacturing</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Lightbulb className="text-golden flex-shrink-0" />
                <div>
                  <p className="font-semibold">Solid Mechanics and Design</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Lightbulb className="text-golden flex-shrink-0" />
                <div>
                  <p className="font-semibold">Fluids and Thermal Engineering</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
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
                price: "₹5000",
                features: [
                  "Access to all sessions",
                  "Conference kit",
                  "Lunch and refreshments",
                  "Access to Lab tour",
                  "Free registration, including lodging and boarding for one person",
                  "Network with industry leaders",
                ],
              },
            ].map((plan, index) => (
              <div key={index} className={`rounded-lg p-6 bg-white`}>
                <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
                <p className={`text-3xl font-bold mb-6 text-navy`}>{plan.price}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2">
                      <Ticket className={"text-navy flex-shrink-0 h-5 w-5"} size={20} /> {/* Fixed size and no shrink */}
                      <span className="text-gray-700">{feature}</span> {/* Span for the text */}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-2 rounded-lg font-bold transition-colors duration-200 bg-navy text-white hover:bg-navy-light`}
                >
                  Register Now
                </button>
              </div>
            ))}
          </div>
          {/* QR Code */}
          <div className="qr-code flex flex-col justify-center items-center bg-white rounded-lg p-4">
            <p className="text-lg font-semibold text-navy mb-2">Scan to Register</p>
            <img
              src="\Flyer_IIC_2025_ME_IIT Tirupati-1.png" // Replace with actual path to your QR code image
              alt="Registration QR Code"
              className="max-w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
        {/* Workshop Section */}
        {/* <div ref={sections.workshop} className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-navy mb-12 text-center">Workshops</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "AI in Manufacturing",
                  date: "March 15, 2025",
                  time: "9:00 AM - 1:00 PM",
                  instructor: "Dr. Sarah Johnson",
                  company: "Tech Industries",
                  image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
                },
                {
                  title: "Industry 4.0 Implementation",
                  date: "March 15, 2025",
                  time: "2:00 PM - 6:00 PM",
                  instructor: "Prof. Michael Chen",
                  company: "Smart Factory Solutions",
                  image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&q=80"
                },
                {
                  title: "Sustainable Engineering",
                  date: "March 16, 2025",
                  time: "9:00 AM - 1:00 PM",
                  instructor: "Dr. Emma Williams",
                  company: "Green Tech Corp",
                  image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80"
                },
                {
                  title: "Digital Twin Technology",
                  date: "March 16, 2025",
                  time: "2:00 PM - 6:00 PM",
                  instructor: "Prof. Robert Kumar",
                  company: "Digital Solutions Ltd",
                  image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80"
                }
              ].map((workshop, index) => (
                <div key={index} className="bg-navy/5 rounded-lg overflow-hidden">
                  <img
                    src={workshop.image}
                    alt={workshop.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-navy mb-4">{workshop.title}</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Calendar className="text-golden" size={20} />
                        <span>{workshop.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="text-golden" size={20} />
                        <span>{workshop.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="text-golden" size={20} />
                        <span>{workshop.instructor}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Building className="text-golden" size={20} />
                        <span>{workshop.company}</span>
                      </div>
                    </div>
                    <button className="mt-6 w-full bg-navy text-white py-2 rounded-lg font-bold hover:bg-navy-light transition-colors duration-200">
                      Register for Workshop
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}
        {/* Campus Tour Section */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4">  {/* Increased max-w */}
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
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-navy mb-12 text-center">Venue</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <img
                  src="/Picture1.jpg"
                  alt="IIT Tirupati Campus"
                  className="rounded-lg shadow-xl mb-6"
                />
                {/* <div className="grid grid-cols-2 gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
                    alt="Conference Hall"
                    className="rounded-lg shadow-md"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80"
                    alt="Campus View"
                    className="rounded-lg shadow-md"
                  />
                </div> */}
              </div>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold text-navy mb-4">Location</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPinned className="text-golden flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Indian Institute of Technology Tirupati</p>
                        <p className="text-gray-600">Yerpedu – Venkatagiri Road, Yerpedu Post,</p>
                        <p className="text-gray-600">Chittoor District, Andhra Pradesh - 517619</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="text-golden flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Nearest Airport</p>
                        <p className="text-gray-600">Tirupati Airport (TIR) - 15 km</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Building2 className="text-golden flex-shrink-0" />
                      <div>
                        <p className="font-semibold">Nearest Railway Station</p>
                        <p className="text-gray-600">Tirupati Railway Station - 18 km</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold text-navy mb-4">Facilities</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <Wrench className="text-golden" size={20} />
                      <span>State-of-the-art conference halls</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Wrench className="text-golden" size={20} />
                      <span>High-speed Wi-Fi connectivity</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Wrench className="text-golden" size={20} />
                      <span>Modern workshop facilities</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Wrench className="text-golden" size={20} />
                      <span>Dining and refreshment areas</span>
                    </li>
                  </ul>
                </div> */}
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
        ].map((tier, index) => (
          <div key={index} className="bg-navy/5 p-6 rounded-lg">
            <h3 className="text-2xl font-bold text-navy mb-2">{tier.title}</h3>
            <p className="text-3xl font-bold text-golden mb-6">{tier.price}</p>
            <ul className="space-y-3 mb-6">
              {tier.benefits.map((benefit, bIndex) => (
                <li key={bIndex} className="flex items-center gap-2">
                  <Handshake className="text-navy flex-shrink-0 h-5 w-5" /> {/* Fixed size and no shrink */}
                  <span className="text-gray-700">{benefit}</span> {/* Span for the text */}
                </li>
              ))}
            </ul>
            <button className="w-full bg-navy text-white py-2 rounded-lg font-bold hover:bg-navy-light transition-colors duration-200">
              Become a Sponsor
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>

        {/* General Info Section */}
        <div ref={sections.generalInfo} className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-navy mb-12 text-center">General Information</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-navy/5 p-6 rounded-lg">
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
                      <p className="text-gray-600">Shuttle service will be provided from official hotels to the venue.</p>
                    </li>
                  </ul>
                </div>
                <div className="bg-navy/5 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Info className="text-golden" size={24} />
                    <h3 className="text-2xl font-bold text-navy">Weather</h3>
                  </div>
                  <p className="text-gray-600">March in Tirupati is generally warm with average temperatures between 22°C to 35°C. Light cotton clothing is recommended.</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-navy/5 p-6 rounded-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Info className="text-golden" size={24} />
                    <h3 className="text-2xl font-bold text-navy">What to Bring</h3>
                  </div>
                  <ul className="space-y-2">
                    <li>• Business cards for networking</li>
                    <li>• Laptop/tablet for workshop sessions</li>
                    <li>• Presentation materials (if presenting)</li>
                    <li>• Government-issued ID</li>
                    <li>• Comfortable formal attire</li>
                  </ul>
                </div>
                <div className="bg-navy/5 p-6 rounded-lg">
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
                  <span>IIT Tirupati, Yerpedu – Venkatagiri Road, Chittoor District, Andhra Pradesh - 517619</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="text-golden" />
                  <span>+91 877 250 0716</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="text-golden" />
                  <span>conclave2025@iittp.ac.in</span>
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