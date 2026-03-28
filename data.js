const careersData = [
    {
        "id": "software_engineer",
        "category": "ENGINEERING & IT",
        "title": "Software Engineer",
        "description": "Builds software systems",
        "skills": "Programming, logic, problem-solving",
        "trait": "analytical"
    },
    {
        "id": "web_developer",
        "category": "ENGINEERING & IT",
        "title": "Web Developer",
        "description": "Creates websites",
        "skills": "HTML, CSS, JavaScript",
        "trait": "analytical"
    },
    {
        "id": "mobile_app_developer",
        "category": "ENGINEERING & IT",
        "title": "Mobile App Developer",
        "description": "Develops mobile apps",
        "skills": "Coding, UI design",
        "trait": "analytical"
    },
    {
        "id": "data_scientist",
        "category": "ENGINEERING & IT",
        "title": "Data Scientist",
        "description": "Analyzes data for insights",
        "skills": "Statistics, Python, analysis",
        "trait": "analytical"
    },
    {
        "id": "ai_engineer",
        "category": "ENGINEERING & IT",
        "title": "AI Engineer",
        "description": "Builds AI systems",
        "skills": "Machine learning, coding",
        "trait": "analytical"
    },
    {
        "id": "cybersecurity_analyst",
        "category": "ENGINEERING & IT",
        "title": "Cybersecurity Analyst",
        "description": "Protects systems from attacks",
        "skills": "Security, risk analysis",
        "trait": "analytical"
    },
    {
        "id": "cloud_engineer",
        "category": "ENGINEERING & IT",
        "title": "Cloud Engineer",
        "description": "Manages cloud infrastructure",
        "skills": "AWS, networking",
        "trait": "analytical"
    },
    {
        "id": "devops_engineer",
        "category": "ENGINEERING & IT",
        "title": "DevOps Engineer",
        "description": "Handles deployment systems",
        "skills": "Automation, scripting",
        "trait": "analytical"
    },
    {
        "id": "game_developer",
        "category": "ENGINEERING & IT",
        "title": "Game Developer",
        "description": "Creates video games",
        "skills": "Coding, creativity",
        "trait": "analytical"
    },
    {
        "id": "network_engineer",
        "category": "ENGINEERING & IT",
        "title": "Network Engineer",
        "description": "Maintains networks",
        "skills": "Networking, troubleshooting",
        "trait": "analytical"
    },
    {
        "id": "database_administrator",
        "category": "ENGINEERING & IT",
        "title": "Database Administrator",
        "description": "Manages databases",
        "skills": "SQL, organization",
        "trait": "analytical"
    },
    {
        "id": "systems_analyst",
        "category": "ENGINEERING & IT",
        "title": "Systems Analyst",
        "description": "Improves IT systems",
        "skills": "Problem-solving",
        "trait": "analytical"
    },
    {
        "id": "it_manager",
        "category": "ENGINEERING & IT",
        "title": "IT Manager",
        "description": "Leads IT teams",
        "skills": "Leadership, planning",
        "trait": "analytical"
    },
    {
        "id": "civil_engineer",
        "category": "ENGINEERING & IT",
        "title": "Civil Engineer",
        "description": "Designs infrastructure",
        "skills": "Math, design",
        "trait": "analytical"
    },
    {
        "id": "mechanical_engineer",
        "category": "ENGINEERING & IT",
        "title": "Mechanical Engineer",
        "description": "Works on machines",
        "skills": "Technical design",
        "trait": "analytical"
    },
    {
        "id": "electrical_engineer",
        "category": "ENGINEERING & IT",
        "title": "Electrical Engineer",
        "description": "Electrical systems",
        "skills": "Circuit analysis",
        "trait": "analytical"
    },
    {
        "id": "electronics_engineer",
        "category": "ENGINEERING & IT",
        "title": "Electronics Engineer",
        "description": "Electronic devices",
        "skills": "Precision",
        "trait": "analytical"
    },
    {
        "id": "chemical_engineer",
        "category": "ENGINEERING & IT",
        "title": "Chemical Engineer",
        "description": "Chemical processes",
        "skills": "Analysis",
        "trait": "analytical"
    },
    {
        "id": "aerospace_engineer",
        "category": "ENGINEERING & IT",
        "title": "Aerospace Engineer",
        "description": "Aircraft/space tech",
        "skills": "Advanced math",
        "trait": "analytical"
    },
    {
        "id": "robotics_engineer",
        "category": "ENGINEERING & IT",
        "title": "Robotics Engineer",
        "description": "Builds robots",
        "skills": "Coding + engineering",
        "trait": "analytical"
    },
    {
        "id": "biomedical_engineer",
        "category": "ENGINEERING & IT",
        "title": "Biomedical Engineer",
        "description": "Medical technology",
        "skills": "Biology + engineering",
        "trait": "analytical"
    },
    {
        "id": "environmental_engineer",
        "category": "ENGINEERING & IT",
        "title": "Environmental Engineer",
        "description": "Sustainability solutions",
        "skills": "Analysis",
        "trait": "analytical"
    },
    {
        "id": "industrial_engineer",
        "category": "ENGINEERING & IT",
        "title": "Industrial Engineer",
        "description": "Improves efficiency",
        "skills": "Optimization",
        "trait": "analytical"
    },
    {
        "id": "mechatronics_engineer",
        "category": "ENGINEERING & IT",
        "title": "Mechatronics Engineer",
        "description": "Combines mechanical + electronics",
        "skills": "Multi-disciplinary",
        "trait": "analytical"
    },
    {
        "id": "blockchain_developer",
        "category": "ENGINEERING & IT",
        "title": "Blockchain Developer",
        "description": "Builds blockchain systems",
        "skills": "Cryptography",
        "trait": "analytical"
    },
    {
        "id": "doctor",
        "category": "MEDICAL & HEALTHCARE",
        "title": "Doctor",
        "description": "Diagnoses/treats patients",
        "skills": "Knowledge, empathy",
        "trait": "care"
    },
    {
        "id": "surgeon",
        "category": "MEDICAL & HEALTHCARE",
        "title": "Surgeon",
        "description": "Performs operations",
        "skills": "Precision",
        "trait": "care"
    },
    {
        "id": "dentist",
        "category": "MEDICAL & HEALTHCARE",
        "title": "Dentist",
        "description": "Dental care",
        "skills": "Attention to detail",
        "trait": "care"
    },
    {
        "id": "nurse",
        "category": "MEDICAL & HEALTHCARE",
        "title": "Nurse",
        "description": "Patient care",
        "skills": "Compassion",
        "trait": "care"
    },
    {
        "id": "pharmacist",
        "category": "MEDICAL & HEALTHCARE",
        "title": "Pharmacist",
        "description": "Medicine management",
        "skills": "Accuracy",
        "trait": "care"
    },
    {
        "id": "physiotherapist",
        "category": "MEDICAL & HEALTHCARE",
        "title": "Physiotherapist",
        "description": "Physical rehabilitation",
        "skills": "Patient care",
        "trait": "care"
    },
    {
        "id": "psychologist",
        "category": "MEDICAL & HEALTHCARE",
        "title": "Psychologist",
        "description": "Studies behavior",
        "skills": "Analysis",
        "trait": "care"
    },
    {
        "id": "psychiatrist",
        "category": "MEDICAL & HEALTHCARE",
        "title": "Psychiatrist",
        "description": "Mental health treatment",
        "skills": "Medical knowledge",
        "trait": "care"
    },
    {
        "id": "radiologist",
        "category": "MEDICAL & HEALTHCARE",
        "title": "Radiologist",
        "description": "Imaging diagnosis",
        "skills": "Observation",
        "trait": "care"
    },
    {
        "id": "medical_lab_scientist",
        "category": "MEDICAL & HEALTHCARE",
        "title": "Medical Lab Scientist",
        "description": "Lab testing",
        "skills": "Precision",
        "trait": "care"
    },
    {
        "id": "nutritionist",
        "category": "MEDICAL & HEALTHCARE",
        "title": "Nutritionist",
        "description": "Diet planning",
        "skills": "Health science",
        "trait": "care"
    },
    {
        "id": "veterinarian",
        "category": "MEDICAL & HEALTHCARE",
        "title": "Veterinarian",
        "description": "Animal healthcare",
        "skills": "Biology",
        "trait": "care"
    },
    {
        "id": "speech_therapist",
        "category": "MEDICAL & HEALTHCARE",
        "title": "Speech Therapist",
        "description": "Speech disorders",
        "skills": "Communication",
        "trait": "care"
    },
    {
        "id": "occupational_therapist",
        "category": "MEDICAL & HEALTHCARE",
        "title": "Occupational Therapist",
        "description": "Rehabilitation",
        "skills": "Care",
        "trait": "care"
    },
    {
        "id": "public_health_officer",
        "category": "MEDICAL & HEALTHCARE",
        "title": "Public Health Officer",
        "description": "Community health",
        "skills": "Leadership",
        "trait": "care"
    },
    {
        "id": "paramedic",
        "category": "MEDICAL & HEALTHCARE",
        "title": "Paramedic",
        "description": "Emergency care",
        "skills": "Quick decisions",
        "trait": "care"
    },
    {
        "id": "midwife",
        "category": "MEDICAL & HEALTHCARE",
        "title": "Midwife",
        "description": "Maternal care",
        "skills": "Care",
        "trait": "care"
    },
    {
        "id": "biomedical_scientist",
        "category": "MEDICAL & HEALTHCARE",
        "title": "Biomedical Scientist",
        "description": "Medical research",
        "skills": "Lab skills",
        "trait": "care"
    },
    {
        "id": "health_inspector",
        "category": "MEDICAL & HEALTHCARE",
        "title": "Health Inspector",
        "description": "Public safety",
        "skills": "Observation",
        "trait": "care"
    },
    {
        "id": "clinical_researcher",
        "category": "MEDICAL & HEALTHCARE",
        "title": "Clinical Researcher",
        "description": "Medical studies",
        "skills": "Research",
        "trait": "care"
    },
    {
        "id": "accountant",
        "category": "BUSINESS & FINANCE",
        "title": "Accountant",
        "description": "Financial records",
        "skills": "Accuracy",
        "trait": "leadership"
    },
    {
        "id": "chartered_accountant",
        "category": "BUSINESS & FINANCE",
        "title": "Chartered Accountant",
        "description": "Advanced accounting",
        "skills": "Analysis",
        "trait": "leadership"
    },
    {
        "id": "financial_analyst",
        "category": "BUSINESS & FINANCE",
        "title": "Financial Analyst",
        "description": "Investment analysis",
        "skills": "Critical thinking",
        "trait": "leadership"
    },
    {
        "id": "banker",
        "category": "BUSINESS & FINANCE",
        "title": "Banker",
        "description": "Financial services",
        "skills": "Communication",
        "trait": "leadership"
    },
    {
        "id": "entrepreneur",
        "category": "BUSINESS & FINANCE",
        "title": "Entrepreneur",
        "description": "Builds businesses",
        "skills": "Leadership",
        "trait": "leadership"
    },
    {
        "id": "marketing_manager",
        "category": "BUSINESS & FINANCE",
        "title": "Marketing Manager",
        "description": "Promotes products",
        "skills": "Creativity",
        "trait": "leadership"
    },
    {
        "id": "hr_manager",
        "category": "BUSINESS & FINANCE",
        "title": "HR Manager",
        "description": "Manages employees",
        "skills": "Communication",
        "trait": "leadership"
    },
    {
        "id": "business_analyst",
        "category": "BUSINESS & FINANCE",
        "title": "Business Analyst",
        "description": "Improves business",
        "skills": "Analysis",
        "trait": "leadership"
    },
    {
        "id": "economist",
        "category": "BUSINESS & FINANCE",
        "title": "Economist",
        "description": "Economic research",
        "skills": "Data analysis",
        "trait": "leadership"
    },
    {
        "id": "auditor",
        "category": "BUSINESS & FINANCE",
        "title": "Auditor",
        "description": "Checks financial records",
        "skills": "Detail-oriented",
        "trait": "leadership"
    },
    {
        "id": "investment_banker",
        "category": "BUSINESS & FINANCE",
        "title": "Investment Banker",
        "description": "Finance deals",
        "skills": "Risk analysis",
        "trait": "leadership"
    },
    {
        "id": "project_manager",
        "category": "BUSINESS & FINANCE",
        "title": "Project Manager",
        "description": "Manages projects",
        "skills": "Leadership",
        "trait": "leadership"
    },
    {
        "id": "operations_manager",
        "category": "BUSINESS & FINANCE",
        "title": "Operations Manager",
        "description": "Oversees operations",
        "skills": "Efficiency",
        "trait": "leadership"
    },
    {
        "id": "supply_chain_manager",
        "category": "BUSINESS & FINANCE",
        "title": "Supply Chain Manager",
        "description": "Logistics",
        "skills": "Planning",
        "trait": "leadership"
    },
    {
        "id": "sales_manager",
        "category": "BUSINESS & FINANCE",
        "title": "Sales Manager",
        "description": "Leads sales",
        "skills": "Persuasion",
        "trait": "leadership"
    },
    {
        "id": "digital_marketer",
        "category": "BUSINESS & FINANCE",
        "title": "Digital Marketer",
        "description": "Online marketing",
        "skills": "SEO, ads",
        "trait": "leadership"
    },
    {
        "id": "brand_manager",
        "category": "BUSINESS & FINANCE",
        "title": "Brand Manager",
        "description": "Brand strategy",
        "skills": "Creativity",
        "trait": "leadership"
    },
    {
        "id": "risk_manager",
        "category": "BUSINESS & FINANCE",
        "title": "Risk Manager",
        "description": "Risk assessment",
        "skills": "Analysis",
        "trait": "leadership"
    },
    {
        "id": "insurance_advisor",
        "category": "BUSINESS & FINANCE",
        "title": "Insurance Advisor",
        "description": "Insurance planning",
        "skills": "Communication",
        "trait": "leadership"
    },
    {
        "id": "retail_manager",
        "category": "BUSINESS & FINANCE",
        "title": "Retail Manager",
        "description": "Store management",
        "skills": "Leadership",
        "trait": "leadership"
    },
    {
        "id": "graphic_designer",
        "category": "CREATIVE & MEDIA",
        "title": "Graphic Designer",
        "description": "Visual content",
        "skills": "General domain skills",
        "trait": "creative"
    },
    {
        "id": "animator",
        "category": "CREATIVE & MEDIA",
        "title": "Animator",
        "description": "Animation",
        "skills": "General domain skills",
        "trait": "creative"
    },
    {
        "id": "video_editor",
        "category": "CREATIVE & MEDIA",
        "title": "Video Editor",
        "description": "Video production",
        "skills": "General domain skills",
        "trait": "creative"
    },
    {
        "id": "photographer",
        "category": "CREATIVE & MEDIA",
        "title": "Photographer",
        "description": "Photography",
        "skills": "General domain skills",
        "trait": "creative"
    },
    {
        "id": "journalist",
        "category": "CREATIVE & MEDIA",
        "title": "Journalist",
        "description": "News reporting",
        "skills": "General domain skills",
        "trait": "creative"
    },
    {
        "id": "content_creator",
        "category": "CREATIVE & MEDIA",
        "title": "Content Creator",
        "description": "Social media content",
        "skills": "General domain skills",
        "trait": "creative"
    },
    {
        "id": "film_director",
        "category": "CREATIVE & MEDIA",
        "title": "Film Director",
        "description": "Film production",
        "skills": "General domain skills",
        "trait": "creative"
    },
    {
        "id": "script_writer",
        "category": "CREATIVE & MEDIA",
        "title": "Script Writer",
        "description": "Writing scripts",
        "skills": "General domain skills",
        "trait": "creative"
    },
    {
        "id": "music_producer",
        "category": "CREATIVE & MEDIA",
        "title": "Music Producer",
        "description": "Music creation",
        "skills": "General domain skills",
        "trait": "creative"
    },
    {
        "id": "fashion_designer",
        "category": "CREATIVE & MEDIA",
        "title": "Fashion Designer",
        "description": "Clothing design",
        "skills": "General domain skills",
        "trait": "creative"
    },
    {
        "id": "interior_designer",
        "category": "CREATIVE & MEDIA",
        "title": "Interior Designer",
        "description": "Space design",
        "skills": "General domain skills",
        "trait": "creative"
    },
    {
        "id": "ui_ux_designer",
        "category": "CREATIVE & MEDIA",
        "title": "UI/UX Designer",
        "description": "User experience",
        "skills": "General domain skills",
        "trait": "creative"
    },
    {
        "id": "art_director",
        "category": "CREATIVE & MEDIA",
        "title": "Art Director",
        "description": "Creative leadership",
        "skills": "General domain skills",
        "trait": "creative"
    },
    {
        "id": "illustrator",
        "category": "CREATIVE & MEDIA",
        "title": "Illustrator",
        "description": "Drawing",
        "skills": "General domain skills",
        "trait": "creative"
    },
    {
        "id": "advertising_specialist",
        "category": "CREATIVE & MEDIA",
        "title": "Advertising Specialist",
        "description": "Ad campaigns",
        "skills": "General domain skills",
        "trait": "creative"
    },
    {
        "id": "teacher",
        "category": "EDUCATION & GOVERNMENT",
        "title": "Teacher",
        "description": "School education",
        "skills": "General domain skills",
        "trait": "social"
    },
    {
        "id": "lecturer",
        "category": "EDUCATION & GOVERNMENT",
        "title": "Lecturer",
        "description": "University teaching",
        "skills": "General domain skills",
        "trait": "social"
    },
    {
        "id": "professor",
        "category": "EDUCATION & GOVERNMENT",
        "title": "Professor",
        "description": "Academic research",
        "skills": "General domain skills",
        "trait": "social"
    },
    {
        "id": "principal",
        "category": "EDUCATION & GOVERNMENT",
        "title": "Principal",
        "description": "School management",
        "skills": "General domain skills",
        "trait": "social"
    },
    {
        "id": "education_consultant",
        "category": "EDUCATION & GOVERNMENT",
        "title": "Education Consultant",
        "description": "Education planning",
        "skills": "General domain skills",
        "trait": "social"
    },
    {
        "id": "civil_servant",
        "category": "EDUCATION & GOVERNMENT",
        "title": "Civil Servant",
        "description": "Government work",
        "skills": "General domain skills",
        "trait": "social"
    },
    {
        "id": "diplomat",
        "category": "EDUCATION & GOVERNMENT",
        "title": "Diplomat",
        "description": "International relations",
        "skills": "General domain skills",
        "trait": "social"
    },
    {
        "id": "policy_analyst",
        "category": "EDUCATION & GOVERNMENT",
        "title": "Policy Analyst",
        "description": "Policy development",
        "skills": "General domain skills",
        "trait": "social"
    },
    {
        "id": "urban_planner",
        "category": "EDUCATION & GOVERNMENT",
        "title": "Urban Planner",
        "description": "City planning",
        "skills": "General domain skills",
        "trait": "social"
    },
    {
        "id": "librarian",
        "category": "EDUCATION & GOVERNMENT",
        "title": "Librarian",
        "description": "Information management",
        "skills": "General domain skills",
        "trait": "social"
    },
    {
        "id": "archaeologist",
        "category": "EDUCATION & GOVERNMENT",
        "title": "Archaeologist",
        "description": "Historical research",
        "skills": "General domain skills",
        "trait": "social"
    },
    {
        "id": "historian",
        "category": "EDUCATION & GOVERNMENT",
        "title": "Historian",
        "description": "Studies history",
        "skills": "General domain skills",
        "trait": "social"
    },
    {
        "id": "sociologist",
        "category": "EDUCATION & GOVERNMENT",
        "title": "Sociologist",
        "description": "Social behavior",
        "skills": "General domain skills",
        "trait": "social"
    },
    {
        "id": "political_scientist",
        "category": "EDUCATION & GOVERNMENT",
        "title": "Political Scientist",
        "description": "Politics study",
        "skills": "General domain skills",
        "trait": "social"
    },
    {
        "id": "international_relations_specialist",
        "category": "EDUCATION & GOVERNMENT",
        "title": "International Relations Specialist",
        "description": "Global diplomacy",
        "skills": "General domain skills",
        "trait": "social"
    },
    {
        "id": "agricultural_scientist",
        "category": "AGRICULTURE & ENVIRONMENT",
        "title": "Agricultural Scientist",
        "description": "Crop yield improvement",
        "skills": "General domain skills",
        "trait": "practical"
    },
    {
        "id": "agronomist",
        "category": "AGRICULTURE & ENVIRONMENT",
        "title": "Agronomist",
        "description": "Soil and crop management",
        "skills": "General domain skills",
        "trait": "practical"
    },
    {
        "id": "forestry_officer",
        "category": "AGRICULTURE & ENVIRONMENT",
        "title": "Forestry Officer",
        "description": "Forest management",
        "skills": "General domain skills",
        "trait": "practical"
    },
    {
        "id": "marine_biologist",
        "category": "AGRICULTURE & ENVIRONMENT",
        "title": "Marine Biologist",
        "description": "Marine life study",
        "skills": "General domain skills",
        "trait": "practical"
    },
    {
        "id": "environmental_consultant",
        "category": "AGRICULTURE & ENVIRONMENT",
        "title": "Environmental Consultant",
        "description": "Eco-friendly strategies",
        "skills": "General domain skills",
        "trait": "practical"
    },
    {
        "id": "wildlife_biologist",
        "category": "AGRICULTURE & ENVIRONMENT",
        "title": "Wildlife Biologist",
        "description": "Animal conservation",
        "skills": "General domain skills",
        "trait": "practical"
    },
    {
        "id": "fisheries_officer",
        "category": "AGRICULTURE & ENVIRONMENT",
        "title": "Fisheries Officer",
        "description": "Fishery management",
        "skills": "General domain skills",
        "trait": "practical"
    },
    {
        "id": "soil_scientist",
        "category": "AGRICULTURE & ENVIRONMENT",
        "title": "Soil Scientist",
        "description": "Soil analysis",
        "skills": "General domain skills",
        "trait": "practical"
    },
    {
        "id": "climate_analyst",
        "category": "AGRICULTURE & ENVIRONMENT",
        "title": "Climate Analyst",
        "description": "Climate change research",
        "skills": "General domain skills",
        "trait": "practical"
    },
    {
        "id": "sustainability_specialist",
        "category": "AGRICULTURE & ENVIRONMENT",
        "title": "Sustainability Specialist",
        "description": "Sustainable practices",
        "skills": "General domain skills",
        "trait": "practical"
    },
    {
        "id": "lawyer_attorney",
        "category": "LAW & LEGAL",
        "title": "Lawyer / Attorney",
        "description": "Legal representation",
        "skills": "General domain skills",
        "trait": "organized"
    },
    {
        "id": "judge",
        "category": "LAW & LEGAL",
        "title": "Judge",
        "description": "Court presider",
        "skills": "General domain skills",
        "trait": "organized"
    },
    {
        "id": "corporate_lawyer",
        "category": "LAW & LEGAL",
        "title": "Corporate Lawyer",
        "description": "Business law",
        "skills": "General domain skills",
        "trait": "organized"
    },
    {
        "id": "criminal_lawyer",
        "category": "LAW & LEGAL",
        "title": "Criminal Lawyer",
        "description": "Criminal defense/prosecution",
        "skills": "General domain skills",
        "trait": "organized"
    },
    {
        "id": "legal_advisor",
        "category": "LAW & LEGAL",
        "title": "Legal Advisor",
        "description": "Legal counseling",
        "skills": "General domain skills",
        "trait": "organized"
    },
    {
        "id": "notary",
        "category": "LAW & LEGAL",
        "title": "Notary",
        "description": "Document authentication",
        "skills": "General domain skills",
        "trait": "organized"
    },
    {
        "id": "legal_consultant",
        "category": "LAW & LEGAL",
        "title": "Legal Consultant",
        "description": "specialized legal advice",
        "skills": "General domain skills",
        "trait": "organized"
    },
    {
        "id": "human_rights_lawyer",
        "category": "LAW & LEGAL",
        "title": "Human Rights Lawyer",
        "description": "rights advocacy",
        "skills": "General domain skills",
        "trait": "organized"
    },
    {
        "id": "tax_lawyer",
        "category": "LAW & LEGAL",
        "title": "Tax Lawyer",
        "description": "tax regulation",
        "skills": "General domain skills",
        "trait": "organized"
    },
    {
        "id": "compliance_officer",
        "category": "LAW & LEGAL",
        "title": "Compliance Officer",
        "description": "regulatory compliance",
        "skills": "General domain skills",
        "trait": "organized"
    },
    {
        "id": "pilot",
        "category": "AVIATION & MARITIME",
        "title": "Pilot",
        "description": "Aircraft operation",
        "skills": "General domain skills",
        "trait": "resilient"
    },
    {
        "id": "air_traffic_controller",
        "category": "AVIATION & MARITIME",
        "title": "Air Traffic Controller",
        "description": "airspace management",
        "skills": "General domain skills",
        "trait": "resilient"
    },
    {
        "id": "aircraft_engineer",
        "category": "AVIATION & MARITIME",
        "title": "Aircraft Engineer",
        "description": "aircraft maintenance",
        "skills": "General domain skills",
        "trait": "resilient"
    },
    {
        "id": "flight_operations_officer",
        "category": "AVIATION & MARITIME",
        "title": "Flight Operations Officer",
        "description": "flight planning",
        "skills": "General domain skills",
        "trait": "resilient"
    },
    {
        "id": "marine_engineer",
        "category": "AVIATION & MARITIME",
        "title": "Marine Engineer",
        "description": "ship machinery",
        "skills": "General domain skills",
        "trait": "resilient"
    },
    {
        "id": "ship_captain",
        "category": "AVIATION & MARITIME",
        "title": "Ship Captain",
        "description": "vessel command",
        "skills": "General domain skills",
        "trait": "resilient"
    },
    {
        "id": "naval_architect",
        "category": "AVIATION & MARITIME",
        "title": "Naval Architect",
        "description": "ship design",
        "skills": "General domain skills",
        "trait": "resilient"
    },
    {
        "id": "logistics_officer",
        "category": "AVIATION & MARITIME",
        "title": "Logistics Officer",
        "description": "maritime supply chain",
        "skills": "General domain skills",
        "trait": "resilient"
    },
    {
        "id": "port_manager",
        "category": "AVIATION & MARITIME",
        "title": "Port Manager",
        "description": "port operations",
        "skills": "General domain skills",
        "trait": "resilient"
    },
    {
        "id": "aviation_safety_officer",
        "category": "AVIATION & MARITIME",
        "title": "Aviation Safety Officer",
        "description": "safety protocols",
        "skills": "General domain skills",
        "trait": "resilient"
    }
];

const swotQuestions = [
    {
        "text": "Do you enjoy solving complex problems that require deep thinking?",
        "trait": "analytical"
    },
    {
        "text": "Do you prefer following a clear structure rather than improvising?",
        "trait": "organized"
    },
    {
        "text": "Do you often think about how things work in detail?",
        "trait": "analytical"
    },
    {
        "text": "Do you feel energized after spending time with people?",
        "trait": "social"
    },
    {
        "text": "Do you enjoy leading or guiding others?",
        "trait": "leadership"
    },
    {
        "text": "Do you prefer working alone most of the time?",
        "trait": "independent"
    },
    {
        "text": "Do you like setting long-term goals and working toward them consistently?",
        "trait": "organized"
    },
    {
        "text": "Do you feel comfortable working under pressure or tight deadlines?",
        "trait": "resilient"
    },
    {
        "text": "Do you prefer tasks with clear instructions rather than open-ended ones?",
        "trait": "organized"
    },
    {
        "text": "Do you enjoy creative activities like writing, designing, or creating content?",
        "trait": "creative"
    },
    {
        "text": "Do you often come up with new ideas or alternative ways of doing things?",
        "trait": "creative"
    },
    {
        "text": "Do you enjoy hands-on work more than theoretical or abstract tasks?",
        "trait": "practical"
    },
    {
        "text": "Do you prefer learning by doing rather than reading or listening?",
        "trait": "practical"
    }
];

const degreeData = [
    {
        "name": "MBBS (Medicine)",
        "requiredZScore": 1.85,
        "stream": "Biological Science"
    },
    {
        "name": "BDS (Dental Surgery)",
        "requiredZScore": 1.75,
        "stream": "Biological Science"
    },
    {
        "name": "BSc Engineering",
        "requiredZScore": 1.65,
        "stream": "Physical Science"
    },
    {
        "name": "BSc Computer Science",
        "requiredZScore": 1.5,
        "stream": "Physical Science / ICT"
    },
    {
        "name": "BSc Management / BBA",
        "requiredZScore": 1.45,
        "stream": "Commerce"
    },
    {
        "name": "LLB (Law)",
        "requiredZScore": 1.7,
        "stream": "Any Stream"
    },
    {
        "name": "BSc Nursing",
        "requiredZScore": 1.35,
        "stream": "Biological Science"
    },
    {
        "name": "BSc Information Technology",
        "requiredZScore": 1.3,
        "stream": "Any Stream"
    },
    {
        "name": "BSc Agriculture",
        "requiredZScore": 1.2,
        "stream": "Biological Science / Bio-Systems"
    },
    {
        "name": "BSc Physical Science",
        "requiredZScore": 1.1,
        "stream": "Physical Science"
    },
    {
        "name": "BSc Biological Science",
        "requiredZScore": 1.15,
        "stream": "Biological Science"
    },
    {
        "name": "BA Arts",
        "requiredZScore": 0.9,
        "stream": "Arts"
    },
    {
        "name": "BSc Quantity Surveying",
        "requiredZScore": 1.6,
        "stream": "Physical Science"
    },
    {
        "name": "BDes (Design)",
        "requiredZScore": 1.05,
        "stream": "Any Stream"
    },
    {
        "name": "BSc Physiotherapy",
        "requiredZScore": 1.4,
        "stream": "Biological Science"
    }
];