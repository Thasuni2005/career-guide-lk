import json
import re

raw_careers = """
🧠 ENGINEERING & IT (25 Careers)
Software Engineer – Builds software systems
Skills: Programming, logic, problem-solving
Web Developer – Creates websites
Skills: HTML, CSS, JavaScript
Mobile App Developer – Develops mobile apps
Skills: Coding, UI design
Data Scientist – Analyzes data for insights
Skills: Statistics, Python, analysis
AI Engineer – Builds AI systems
Skills: Machine learning, coding
Cybersecurity Analyst – Protects systems from attacks
Skills: Security, risk analysis
Cloud Engineer – Manages cloud infrastructure
Skills: AWS, networking
DevOps Engineer – Handles deployment systems
Skills: Automation, scripting
Game Developer – Creates video games
Skills: Coding, creativity
Network Engineer – Maintains networks
Skills: Networking, troubleshooting
Database Administrator – Manages databases
Skills: SQL, organization
Systems Analyst – Improves IT systems
Skills: Problem-solving
IT Manager – Leads IT teams
Skills: Leadership, planning
Civil Engineer – Designs infrastructure
Skills: Math, design
Mechanical Engineer – Works on machines
Skills: Technical design
Electrical Engineer – Electrical systems
Skills: Circuit analysis
Electronics Engineer – Electronic devices
Skills: Precision
Chemical Engineer – Chemical processes
Skills: Analysis
Aerospace Engineer – Aircraft/space tech
Skills: Advanced math
Robotics Engineer – Builds robots
Skills: Coding + engineering
Biomedical Engineer – Medical technology
Skills: Biology + engineering
Environmental Engineer – Sustainability solutions
Skills: Analysis
Industrial Engineer – Improves efficiency
Skills: Optimization
Mechatronics Engineer – Combines mechanical + electronics
Skills: Multi-disciplinary
Blockchain Developer – Builds blockchain systems
Skills: Cryptography
🏥 MEDICAL & HEALTHCARE (20 Careers)
Doctor – Diagnoses/treats patients
Skills: Knowledge, empathy
Surgeon – Performs operations
Skills: Precision
Dentist – Dental care
Skills: Attention to detail
Nurse – Patient care
Skills: Compassion
Pharmacist – Medicine management
Skills: Accuracy
Physiotherapist – Physical rehabilitation
Skills: Patient care
Psychologist – Studies behavior
Skills: Analysis
Psychiatrist – Mental health treatment
Skills: Medical knowledge
Radiologist – Imaging diagnosis
Skills: Observation
Medical Lab Scientist – Lab testing
Skills: Precision
Nutritionist – Diet planning
Skills: Health science
Veterinarian – Animal healthcare
Skills: Biology
Speech Therapist – Speech disorders
Skills: Communication
Occupational Therapist – Rehabilitation
Skills: Care
Public Health Officer – Community health
Skills: Leadership
Paramedic – Emergency care
Skills: Quick decisions
Midwife – Maternal care
Skills: Care
Biomedical Scientist – Medical research
Skills: Lab skills
Health Inspector – Public safety
Skills: Observation
Clinical Researcher – Medical studies
Skills: Research
💼 BUSINESS & FINANCE (20 Careers)
Accountant – Financial records
Skills: Accuracy
Chartered Accountant – Advanced accounting
Skills: Analysis
Financial Analyst – Investment analysis
Skills: Critical thinking
Banker – Financial services
Skills: Communication
Entrepreneur – Builds businesses
Skills: Leadership
Marketing Manager – Promotes products
Skills: Creativity
HR Manager – Manages employees
Skills: Communication
Business Analyst – Improves business
Skills: Analysis
Economist – Economic research
Skills: Data analysis
Auditor – Checks financial records
Skills: Detail-oriented
Investment Banker – Finance deals
Skills: Risk analysis
Project Manager – Manages projects
Skills: Leadership
Operations Manager – Oversees operations
Skills: Efficiency
Supply Chain Manager – Logistics
Skills: Planning
Sales Manager – Leads sales
Skills: Persuasion
Digital Marketer – Online marketing
Skills: SEO, ads
Brand Manager – Brand strategy
Skills: Creativity
Risk Manager – Risk assessment
Skills: Analysis
Insurance Advisor – Insurance planning
Skills: Communication
Retail Manager – Store management
Skills: Leadership
🎨 CREATIVE & MEDIA (15 Careers)
Graphic Designer – Visual content
Animator – Animation
Video Editor – Video production
Photographer – Photography
Journalist – News reporting
Content Creator – Social media content
Film Director – Film production
Script Writer – Writing scripts
Music Producer – Music creation
Fashion Designer – Clothing design
Interior Designer – Space design
UI/UX Designer – User experience
Art Director – Creative leadership
Illustrator – Drawing
Advertising Specialist – Ad campaigns

(All require creativity, communication, and design skills)
🎓 EDUCATION & GOVERNMENT (15 Careers)
Teacher – School education
Lecturer – University teaching
Professor – Academic research
Principal – School management
Education Consultant – Education planning
Civil Servant – Government work
Diplomat – International relations
Policy Analyst – Policy development
Urban Planner – City planning
Librarian – Information management
Archaeologist – Historical research
Historian – Studies history
Sociologist – Social behavior
Political Scientist – Politics study
International Relations Specialist - Global diplomacy
🌱 AGRICULTURE & ENVIRONMENT (10 Careers)
Agricultural Scientist - Crop yield improvement
Agronomist - Soil and crop management
Forestry Officer - Forest management
Marine Biologist - Marine life study
Environmental Consultant - Eco-friendly strategies
Wildlife Biologist - Animal conservation
Fisheries Officer - Fishery management
Soil Scientist - Soil analysis
Climate Analyst - Climate change research
Sustainability Specialist - Sustainable practices
⚖️ LAW & LEGAL (10 Careers)
Lawyer / Attorney - Legal representation
Judge - Court presider
Corporate Lawyer - Business law
Criminal Lawyer - Criminal defense/prosecution
Legal Advisor - Legal counseling
Notary - Document authentication
Legal Consultant - specialized legal advice
Human Rights Lawyer - rights advocacy
Tax Lawyer - tax regulation
Compliance Officer - regulatory compliance
✈️ AVIATION & MARITIME (10 Careers)
Pilot - Aircraft operation
Air Traffic Controller - airspace management
Aircraft Engineer - aircraft maintenance
Flight Operations Officer - flight planning
Marine Engineer - ship machinery
Ship Captain - vessel command
Naval Architect - ship design
Logistics Officer - maritime supply chain
Port Manager - port operations
Aviation Safety Officer - safety protocols
"""

careers = []
current_category = ""
lines = raw_careers.strip().split('\n')
i = 0
while i < len(lines):
    line = lines[i].strip()
    if not line or line.startswith('('):
        i += 1
        continue
    
    if 'Careers)' in line or sum(1 for c in line if c.isupper()) > len(line)/2:
        cat_match = re.search(r'[A-Z &]+', line)
        if cat_match:
            current_category = cat_match.group(0).strip()
        i += 1
        continue
        
    parts = re.split(r' – | - ', line, 1)
    if len(parts) == 2:
        title = parts[0].strip()
        desc = parts[1].strip()
        skills = "General domain skills"
        
        if i + 1 < len(lines) and lines[i+1].startswith('Skills:'):
            skills = lines[i+1].replace('Skills:', '').strip()
            i += 2
        else:
            i += 1
            
        c_id = title.lower().replace(' / ', '_').replace(' ', '_').replace('/', '_')
        
        trait = 'analytical'
        if 'ENGINEERING' in current_category: trait = 'analytical'
        elif 'MEDICAL' in current_category: trait = 'care'
        elif 'BUSINESS' in current_category: trait = 'leadership'
        elif 'CREATIVE' in current_category: trait = 'creative'
        elif 'EDUCATION' in current_category: trait = 'social'
        elif 'AGRICULTURE' in current_category: trait = 'practical'
        elif 'LAW' in current_category: trait = 'organized'
        elif 'AVIATION' in current_category: trait = 'resilient'

        careers.append({
            'id': c_id,
            'category': current_category,
            'title': title,
            'description': desc,
            'skills': skills,
            'trait': trait
        })
    else:
        i += 1

print(f"Parsed {len(careers)} careers.")

swot_q = [
    { "text": "Do you enjoy solving complex problems that require deep thinking?", "trait": "analytical" },
    { "text": "Do you prefer following a clear structure rather than improvising?", "trait": "organized" },
    { "text": "Do you often think about how things work in detail?", "trait": "analytical" },
    { "text": "Do you feel energized after spending time with people?", "trait": "social" },
    { "text": "Do you enjoy leading or guiding others?", "trait": "leadership" },
    { "text": "Do you prefer working alone most of the time?", "trait": "independent" },
    { "text": "Do you like setting long-term goals and working toward them consistently?", "trait": "organized" },
    { "text": "Do you feel comfortable working under pressure or tight deadlines?", "trait": "resilient" },
    { "text": "Do you prefer tasks with clear instructions rather than open-ended ones?", "trait": "organized" },
    { "text": "Do you enjoy creative activities like writing, designing, or creating content?", "trait": "creative" },
    { "text": "Do you often come up with new ideas or alternative ways of doing things?", "trait": "creative" },
    { "text": "Do you enjoy hands-on work more than theoretical or abstract tasks?", "trait": "practical" },
    { "text": "Do you prefer learning by doing rather than reading or listening?", "trait": "practical" }
]

degree_data = [
    { "name": "MBBS (Medicine)", "requiredZScore": 1.85, "stream": "Biological Science" },
    { "name": "BDS (Dental Surgery)", "requiredZScore": 1.75, "stream": "Biological Science" },
    { "name": "BSc Engineering", "requiredZScore": 1.65, "stream": "Physical Science" },
    { "name": "BSc Computer Science", "requiredZScore": 1.50, "stream": "Physical Science / ICT" },
    { "name": "BSc Management / BBA", "requiredZScore": 1.45, "stream": "Commerce" },
    { "name": "LLB (Law)", "requiredZScore": 1.70, "stream": "Any Stream" },
    { "name": "BSc Nursing", "requiredZScore": 1.35, "stream": "Biological Science" },
    { "name": "BSc Information Technology", "requiredZScore": 1.30, "stream": "Any Stream" },
    { "name": "BSc Agriculture", "requiredZScore": 1.20, "stream": "Biological Science / Bio-Systems" },
    { "name": "BSc Physical Science", "requiredZScore": 1.10, "stream": "Physical Science" },
    { "name": "BSc Biological Science", "requiredZScore": 1.15, "stream": "Biological Science" },
    { "name": "BA Arts", "requiredZScore": 0.90, "stream": "Arts" },
    { "name": "BSc Quantity Surveying", "requiredZScore": 1.60, "stream": "Physical Science" },
    { "name": "BDes (Design)", "requiredZScore": 1.05, "stream": "Any Stream" },
    { "name": "BSc Physiotherapy", "requiredZScore": 1.40, "stream": "Biological Science" }
]

js_code = f"const careersData = {json.dumps(careers, indent=4)};\\n\\nconst swotQuestions = {json.dumps(swot_q, indent=4)};\\n\\nconst degreeData = {json.dumps(degree_data, indent=4)};\\n"

with open('c:/Users/USER/Desktop/FuturePilot/data.js', 'w', encoding='utf-8') as f:
    f.write(js_code)
