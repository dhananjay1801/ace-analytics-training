const doctorImages = [
    "https://static.vecteezy.com/system/resources/thumbnails/026/375/249/small/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg",
    "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9jdG9yfGVufDB8fDB8fHww",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ5eXawT78HBedzSkSCvmOH3S9jPzX9O3iDmPKbFowDOmOFFqD1iftF2Mz&s=10",
    "https://static.vecteezy.com/system/resources/thumbnails/028/287/555/small/an-indian-young-female-doctor-isolated-on-green-ai-generated-photo.jpg",
  ];

export const doctors = [
    {
      id: 1,
      name: "Harry McGuire",
      specialization: "Leading Dentist",
      certificates: 32,
      happyClients: "1,200+",
      description:
        "Harry is a leading dentist specializing in cosmetic and restorative dentistry with over 12 years of experience helping patients achieve healthier smiles.",
      availability: {
        weekdays: "Mon-Fri | 10AM-9PM",
        saturday: "Sat | 10AM-2PM",
      },
      image: doctorImages[0],
    },
    {
      id: 2,
      name: "Carlos Forbidden",
      specialization: "Leading Dentist",
      certificates: 28,
      happyClients: "980+",
      description:
        "Carlos specializes in dental implants and oral rehabilitation, providing high-quality care with advanced treatment techniques.",
      availability: {
        weekdays: "Mon-Fri | 9AM-6PM",
        saturday: "Sat | 9AM-1PM",
      },
      image: doctorImages[1],
    },
    {
      id: 3,
      name: "Austin Arment",
      specialization: "Orthodontist",
      certificates: 35,
      happyClients: "1,450+",
      description:
        "Austin focuses on braces, Invisalign, and smile alignment for children and adults using the latest orthodontic technology.",
      availability: {
        weekdays: "Mon-Fri | 10AM-8PM",
        saturday: "Sat | 10AM-3PM",
      },
      image: doctorImages[2],
    },
    {
      id: 4,
      name: "Meg Styles",
      specialization: "Pediatric Dentist",
      certificates: 24,
      happyClients: "850+",
      description:
        "Meg creates a comfortable environment for children while providing preventive and restorative pediatric dental care.",
      availability: {
        weekdays: "Mon-Fri | 8AM-5PM",
        saturday: "Sat | 9AM-12PM",
      },
      image: doctorImages[3],
    },
    {
      id: 5,
      name: "Olivia Parker",
      specialization: "Endodontist",
      certificates: 31,
      happyClients: "1,050+",
      description:
        "Olivia specializes in root canal therapy and advanced treatments to preserve natural teeth.",
      availability: {
        weekdays: "Mon-Fri | 9AM-7PM",
        saturday: "Sat | 10AM-1PM",
      },
      image: doctorImages[1],
    },
    {
      id: 6,
      name: "James Wilson",
      specialization: "Oral Surgeon",
      certificates: 40,
      happyClients: "1,700+",
      description:
        "James performs complex oral surgeries including wisdom tooth removal and jaw correction procedures.",
      availability: {
        weekdays: "Mon-Fri | 10AM-6PM",
        saturday: "Sat | 9AM-12PM",
      },
      image: doctorImages[0],
    },
    {
      id: 7,
      name: "Sophia Carter",
      specialization: "Cosmetic Dentist",
      certificates: 27,
      happyClients: "930+",
      description:
        "Sophia specializes in smile makeovers, veneers, whitening, and aesthetic dental treatments.",
      availability: {
        weekdays: "Mon-Fri | 11AM-8PM",
        saturday: "Sat | 10AM-2PM",
      },
      image: doctorImages[3],
    },
    {
      id: 8,
      name: "William Brown",
      specialization: "Periodontist",
      certificates: 29,
      happyClients: "1,080+",
      description:
        "William focuses on gum disease treatment and dental implant support procedures.",
      availability: {
        weekdays: "Mon-Fri | 9AM-6PM",
        saturday: "Sat | 9AM-1PM",
      },
      image: doctorImages[2],
    },
    {
      id: 9,
      name: "Emma Johnson",
      specialization: "General Dentist",
      certificates: 26,
      happyClients: "900+",
      description:
        "Emma provides preventive care, fillings, crowns, and routine dental checkups for families.",
      availability: {
        weekdays: "Mon-Fri | 8AM-5PM",
        saturday: "Sat | 8AM-12PM",
      },
      image: doctorImages[1],
    },
    {
      id: 10,
      name: "Daniel Lee",
      specialization: "Implant Specialist",
      certificates: 38,
      happyClients: "1,650+",
      description:
        "Daniel restores smiles through advanced implant procedures and full-mouth rehabilitation.",
      availability: {
        weekdays: "Mon-Fri | 10AM-7PM",
        saturday: "Sat | 10AM-2PM",
      },
      image: doctorImages[0],
    },
    {
      id: 11,
      name: "Charlotte Evans",
      specialization: "Orthodontist",
      certificates: 34,
      happyClients: "1,220+",
      description:
        "Charlotte specializes in modern orthodontic care for patients of all ages.",
      availability: {
        weekdays: "Mon-Fri | 9AM-6PM",
        saturday: "Sat | 9AM-1PM",
      },
      image: doctorImages[3],
    },
    {
      id: 12,
      name: "Benjamin Scott",
      specialization: "General Dentist",
      certificates: 25,
      happyClients: "890+",
      description:
        "Benjamin offers comprehensive dental services with a focus on preventive care.",
      availability: {
        weekdays: "Mon-Fri | 8AM-5PM",
        saturday: "Sat | 9AM-12PM",
      },
      image: doctorImages[2],
    },
    {
      id: 13,
      name: "Amelia Brooks",
      specialization: "Cosmetic Dentist",
      certificates: 30,
      happyClients: "1,180+",
      description:
        "Amelia creates natural-looking smile transformations using minimally invasive techniques.",
      availability: {
        weekdays: "Mon-Fri | 10AM-7PM",
        saturday: "Sat | 10AM-2PM",
      },
      image: doctorImages[3],
    },
    {
      id: 14,
      name: "Michael Adams",
      specialization: "Oral Surgeon",
      certificates: 42,
      happyClients: "1,900+",
      description:
        "Michael has extensive experience performing oral surgery and facial reconstruction.",
      availability: {
        weekdays: "Mon-Fri | 9AM-6PM",
        saturday: "Sat | 9AM-1PM",
      },
      image: doctorImages[2],
    },
    {
      id: 15,
      name: "Grace Collins",
      specialization: "Pediatric Dentist",
      certificates: 23,
      happyClients: "810+",
      description:
        "Grace ensures children receive gentle, compassionate dental care in a friendly setting.",
      availability: {
        weekdays: "Mon-Fri | 8AM-4PM",
        saturday: "Sat | 9AM-12PM",
      },
      image: doctorImages[2],
    },
    {
      id: 16,
      name: "Henry Foster",
      specialization: "Endodontist",
      certificates: 36,
      happyClients: "1,340+",
      description:
        "Henry specializes in complex root canal treatments and microsurgical endodontics.",
      availability: {
        weekdays: "Mon-Fri | 9AM-7PM",
        saturday: "Sat | 10AM-1PM",
      },
      image: doctorImages[1],
    },
    {
      id: 17,
      name: "Emily Green",
      specialization: "General Dentist",
      certificates: 28,
      happyClients: "980+",
      description:
        "Emily focuses on preventive care and personalized treatment plans for every patient.",
      availability: {
        weekdays: "Mon-Fri | 9AM-6PM",
        saturday: "Sat | 9AM-12PM",
      },
      image: doctorImages[0],
    },
    {
      id: 18,
      name: "Matthew Cooper",
      specialization: "Implant Specialist",
      certificates: 37,
      happyClients: "1,500+",
      description:
        "Matthew provides advanced implant dentistry using digital planning technologies.",
      availability: {
        weekdays: "Mon-Fri | 10AM-7PM",
        saturday: "Sat | 10AM-2PM",
      },
      image: doctorImages[2],
    },
    {
      id: 19,
      name: "Ava Turner",
      specialization: "Cosmetic Dentist",
      certificates: 29,
      happyClients: "1,060+",
      description:
        "Ava helps patients achieve brighter, more confident smiles through cosmetic procedures.",
      availability: {
        weekdays: "Mon-Fri | 9AM-6PM",
        saturday: "Sat | 9AM-1PM",
      },
      image: doctorImages[3],
    },
    {
      id: 20,
      name: "Joseph Harris",
      specialization: "Periodontist",
      certificates: 33,
      happyClients: "1,250+",
      description:
        "Joseph treats gum disease and supports long-term oral health through periodontal care.",
      availability: {
        weekdays: "Mon-Fri | 10AM-6PM",
        saturday: "Sat | 9AM-12PM",
      },
      image: doctorImages[1],
    },
    {
      id: 21,
      name: "Lily Morris",
      specialization: "Orthodontist",
      certificates: 31,
      happyClients: "1,170+",
      description:
        "Lily provides customized orthodontic treatments for beautiful, healthy smiles.",
      availability: {
        weekdays: "Mon-Fri | 9AM-7PM",
        saturday: "Sat | 10AM-2PM",
      },
      image: doctorImages[0],
    },
    {
      id: 22,
      name: "Andrew Bailey",
      specialization: "General Dentist",
      certificates: 26,
      happyClients: "940+",
      description:
        "Andrew emphasizes preventive dentistry and patient education for lifelong oral health.",
      availability: {
        weekdays: "Mon-Fri | 8AM-5PM",
        saturday: "Sat | 8AM-12PM",
      },
      image: doctorImages[1],
    },
    {
      id: 23,
      name: "Ella Richardson",
      specialization: "Cosmetic Dentist",
      certificates: 30,
      happyClients: "1,120+",
      description:
        "Ella specializes in veneers, bonding, and smile enhancement treatments.",
      availability: {
        weekdays: "Mon-Fri | 10AM-7PM",
        saturday: "Sat | 10AM-2PM",
      },
      image: doctorImages[3],
    },
    {
      id: 24,
      name: "David Bennett",
      specialization: "Oral Surgeon",
      certificates: 39,
      happyClients: "1,620+",
      description:
        "David has extensive expertise in oral surgery and facial trauma management.",
      availability: {
        weekdays: "Mon-Fri | 9AM-6PM",
        saturday: "Sat | 9AM-1PM",
      },
      image: doctorImages[2],
    },
    {
      id: 25,
      name: "Zoe Hughes",
      specialization: "Pediatric Dentist",
      certificates: 22,
      happyClients: "760+",
      description:
        "Zoe enjoys helping children develop healthy dental habits from an early age.",
      availability: {
        weekdays: "Mon-Fri | 8AM-4PM",
        saturday: "Sat | 9AM-12PM",
      },
      image: doctorImages[0],
    },
    {
      id: 26,
      name: "Nathan Reed",
      specialization: "Implant Specialist",
      certificates: 35,
      happyClients: "1,420+",
      description:
        "Nathan restores function and aesthetics using advanced implant dentistry.",
      availability: {
        weekdays: "Mon-Fri | 10AM-7PM",
        saturday: "Sat | 10AM-2PM",
      },
      image: doctorImages[3],
    },
    {
      id: 27,
      name: "Isabella Ward",
      specialization: "Endodontist",
      certificates: 34,
      happyClients: "1,310+",
      description:
        "Isabella provides comfortable root canal treatments using modern equipment.",
      availability: {
        weekdays: "Mon-Fri | 9AM-6PM",
        saturday: "Sat | 9AM-1PM",
      },
      image: doctorImages[1],
    },
    {
      id: 28,
      name: "Christopher King",
      specialization: "General Dentist",
      certificates: 27,
      happyClients: "990+",
      description:
        "Christopher offers comprehensive family dentistry with a patient-first approach.",
      availability: {
        weekdays: "Mon-Fri | 8AM-5PM",
        saturday: "Sat | 8AM-12PM",
      },
      image: doctorImages[2],
    },
    {
      id: 29,
      name: "Mia Watson",
      specialization: "Cosmetic Dentist",
      certificates: 29,
      happyClients: "1,150+",
      description:
        "Mia combines artistic precision with modern dentistry to create confident smiles.",
      availability: {
        weekdays: "Mon-Fri | 10AM-7PM",
        saturday: "Sat | 10AM-2PM",
      },
      image: doctorImages[3],
    },
    {
      id: 30,
      name: "Alexander Young",
      specialization: "Periodontist",
      certificates: 33,
      happyClients: "1,280+",
      description:
        "Alexander specializes in gum health, periodontal therapy, and implant maintenance.",
      availability: {
        weekdays: "Mon-Fri | 9AM-6PM",
        saturday: "Sat | 9AM-1PM",
      },
      image: doctorImages[0],
    },
  ];