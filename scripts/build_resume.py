"""Build the public PDF and HTML résumé from one content source. Requires reportlab."""
from pathlib import Path
from html import escape
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak, KeepTogether
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
pdfmetrics.registerFont(TTFont('ResumeSans','/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'))
pdfmetrics.registerFont(TTFont('ResumeSans-Bold','/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'))
pdfmetrics.registerFont(TTFont('ResumeSans-Oblique','/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'))
pdfmetrics.registerFontFamily('ResumeSans',normal='ResumeSans',bold='ResumeSans-Bold',italic='ResumeSans-Oblique',boldItalic='ResumeSans-Bold')
ROOT=Path(__file__).resolve().parents[1]
OUT=ROOT/'dist/assets/Taekjun_Lee_Resume.pdf'
INK='#263027'; MUTED='#5e6b57'; ACCENT='#496735'
styles=getSampleStyleSheet()
styles.add(ParagraphStyle(name='NameTJ',fontName='ResumeSans-Bold',fontSize=24,leading=28,textColor=HexColor(INK),spaceAfter=5))
styles.add(ParagraphStyle(name='RoleTJ',fontName='ResumeSans',fontSize=12,leading=16,textColor=HexColor(ACCENT),spaceAfter=9))
styles.add(ParagraphStyle(name='ContactTJ',fontName='ResumeSans',fontSize=9,leading=13,textColor=HexColor(MUTED),spaceAfter=7))
styles.add(ParagraphStyle(name='SectionTJ',fontName='ResumeSans-Bold',fontSize=10,leading=14,textColor=HexColor(ACCENT),spaceBefore=15,spaceAfter=7,keepWithNext=True))
styles.add(ParagraphStyle(name='HeadingTJ',fontName='ResumeSans-Bold',fontSize=10,leading=14,textColor=HexColor(INK),spaceBefore=8,spaceAfter=4,keepWithNext=True))
styles.add(ParagraphStyle(name='BodyTJ',fontName='ResumeSans',fontSize=9,leading=13,textColor=HexColor(INK),spaceAfter=5))
styles.add(ParagraphStyle(name='BulletTJ',fontName='ResumeSans',fontSize=9,leading=13,textColor=HexColor(INK),leftIndent=10,firstLineIndent=-8,spaceAfter=4))
portfolio='https://leetj94-lab.github.io/portfolio/'
linkedin='https://www.linkedin.com/in/taek-jun-lee-a83160344'
blocks=[
('name','TAEKJUN (TJ) LEE'),
('role','Business Systems & Automation Engineer'),
('contact','Seoul, Republic of Korea | Open to relocation: New Zealand & Australia | Employer sponsorship required'),
('contact',f'<a href="mailto:leetj94@gmail.com">leetj94@gmail.com</a> | <a href="{linkedin}">LinkedIn</a> | <a href="{portfolio}">Portfolio & case studies</a>'),
('section','PROFILE'),
('body','Business systems engineer at Samsung Electronics, combining firsthand facilities engineering experience with hands-on software delivery. Translates operational needs into data standards, integrated workflows and Python/Vue applications. Develops across AWS and on-premises environments, with responsibility for requirements, implementation, deployment and production support.'),
('section','PROFESSIONAL EXPERIENCE'),
('heading','Samsung Electronics | Device Solutions | Jan 2019 - Present'),
('body','<b>Systems Engineer | 2020 - Present</b>'),
('bullet','Analyse engineering workflows and develop business systems, data integrations and automation for semiconductor infrastructure operations.'),
('bullet','Develop Python/FastAPI backends, Vue.js interfaces and ETL/EAI integrations; deliver and support applications on AWS and on-premises infrastructure.'),
('bullet','Work with engineering users and vendors on requirements, technical evaluation and adoption. Supported Austin and Taylor FAB rollouts during a U.S. assignment, Sep-Nov 2024.'),
('body','<b>Facilities Engineer | 2019 - 2020</b>'),
('bullet','Maintained and operated infrastructure supply equipment. Analysed equipment quality and maintenance data as an FDC/PM conductor to investigate anomalies and component replacement intervals.'),
('section','SELECTED SOFTWARE & AUTOMATION WORK'),
('heading','Engineering Document Delivery Platform | 2025 - 2026'),
('body','<i>Project owner, process analysis, full-stack development and AWS delivery</i>'),
('bullet','Replaced email-based contractor handoffs with direct submission, automated extraction and rule validation, correction feedback and final employee approval.'),
('bullet','Built FastAPI/Vue web and backend services. Connected S3, EventBridge, SQS, Lambda and RDS; integrated Autodesk APS Model Derivative and Design Automation APIs.'),
('bullet','Implemented retries, duplicate detection and idempotent ingestion. Configured EC2 delivery and CodeCommit/CodeDeploy/CodePipeline CI/CD with operational checks and rollback procedures.'),
('bullet','Project scope: approximately 30,000-70,000 drawings and 10,000 registered assets/components per FAB.'),
('heading','3D Digital Twin Platform | 2023 - 2024; ongoing extensions'),
('body','<i>Project owner, vendor evaluation, Vue/Python development and on-premises deployment</i>'),
('bullet','Built application and integration layers connecting eight operational systems in a searchable 3D workspace, linking approximately 1.5 million assets/components for approximately 1,000 users.'),
('bullet','Connected equipment location to quality trends, maintenance history and work status. Evaluated NVIDIA, Siemens and AVEVA technologies through meetings and PoCs.'),
('bullet','Developed Vue interfaces, Python backend and ETL/EAI; delivered with Git, Jenkins and Kubernetes-based CI/CD. Current extensions include simulation model conversion and AMR/AGV spatial-data integration.'),
('page',''),
('section','SELECTED WORK CONTINUED'),
('heading','Facility Master Data Platform | 2020 - 2021'),
('body','<i>Domain specialist, data/process analyst, validation and integration developer</i>'),
('bullet','Defined common equipment data standards and lifecycle workflows across quality, maintenance, operations and work systems, accounting for different registration timing and business requirements.'),
('bullet','Prepared approximately one million rows across 50 columns. Developed Python/SQL pre-registration checks, ETL/EAI integrations and Spotfire reconciliation reports using SQL across system databases.'),
('bullet','Reduced engineer time for equivalent cross-system registration work by 87%; measured cross-system discrepancy rates fell from 17% to 0%.'),
('bullet','Supported production requests, incidents and training for approximately one year; extended features and integrations, including environmental safety and material-registration systems.'),
('heading','Drawing Management & Search | 2021 - 2022'),
('bullet','Redesigned drawing handover processes, standardised drawing objects and conventions, and structured equipment-to-drawing relationships so engineers could search by equipment instead of opening files individually.'),
('bullet','Designed extraction and integration workflows and automated completeness/design-rule checks for a platform serving approximately 4,500 users.'),
('heading','Data Platforms, Governance & Operational Automation | 2023 - 2026'),
('bullet','Managed data from eight infrastructure systems for a data lake initiative. Defined metadata, security classifications and disclosure/access rules.'),
('bullet','Built a FastAPI/Oracle/Vue.js ETL operations dashboard with job-level logs, failure alerts and retry controls. Taught SQL and Spotfire within an engineering organisation of approximately 2,000 employees.'),
('bullet','Contributed to AI-ready data eligibility work in 2026. Authored reusable team guidance for API standards, UI design, testability and fallback behaviour; prototyped workflow/data integrations using external language models.'),
('section','TECHNICAL SKILLS'),
('body','<b>Development:</b> Python, SQL, JavaScript, FastAPI, Vue.js, REST APIs, Pydantic, pytest'),
('body','<b>Data & integration:</b> Oracle, PostgreSQL, MySQL/MariaDB, SQL Server, ETL/EAI, data modelling and quality, Spotfire'),
('body','<b>Delivery & operations:</b> AWS EC2/S3/Lambda/SQS/EventBridge/RDS, Linux, Nginx, Git, Jenkins, Kubernetes, CI/CD'),
('body','<b>Engineering systems:</b> MES/MIS, Autodesk APS/ACC, Revit/BIM, equipment data standards, process analysis'),
('section','EDUCATION & LANGUAGES'),
('body','<b>M.S., Industrial Engineering</b> | Sungkyunkwan University | Feb 2026 | GPA 4.38/4.5'),
('body','<b>B.S., Mechanical Engineering</b> | Sungkyunkwan University | Feb 2019'),
('body','Korean: native | English: TOEFL iBT 107/120 (Apr 2025)'),
('section','RECOGNITION'),
('body','Samsung Best Contributor/Performer (2022, 2023). Project Incentive Awards: Master Data (2021), Drawings (2022), Digital Twin (2023), 3D Integration (2024).')]
kind={'name':'NameTJ','role':'RoleTJ','contact':'ContactTJ','section':'SectionTJ','heading':'HeadingTJ','body':'BodyTJ','bullet':'BulletTJ'}
def footer(canvas,doc):
 canvas.saveState();canvas.setStrokeColor(HexColor('#d8dfd0'));canvas.line(43,35,A4[0]-43,35);canvas.setFillColor(HexColor(MUTED));canvas.setFont('Helvetica',8);canvas.drawString(43,23,'TAEKJUN (TJ) LEE | leetj94@gmail.com');canvas.drawRightString(A4[0]-43,23,f'{doc.page} / 2');canvas.restoreState()
story=[]
for t,value in blocks:
 if t=='page':story.append(PageBreak())
 else:story.append(Paragraph(('- '+value) if t=='bullet' else value,styles[kind[t]]))
OUT.parent.mkdir(parents=True,exist_ok=True)
doc=SimpleDocTemplate(str(OUT),pagesize=A4,rightMargin=43,leftMargin=43,topMargin=35,bottomMargin=45,title='Taekjun (TJ) Lee - Business Systems & Automation Engineer',author='Taekjun Lee')
doc.build(story,onFirstPage=footer,onLaterPages=footer)
html=[]
for t,v in blocks:
 if t=='page':html.append('<div class="page-break"></div>');continue
 tag={'name':'h1','role':'p','contact':'p','section':'h2','heading':'h3','body':'p','bullet':'p'}[t]
 html.append(f'<{tag} class="{t}">{"<span class=bullet-dot>•</span> " if t=="bullet" else ""}{v}</{tag}>')
(ROOT/'dist/resume.html').write_text('''<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Taekjun (TJ) Lee - Résumé</title><link rel="icon" href="assets/favicon.svg"><style>body{max-width:850px;margin:45px auto;padding:0 25px;color:#263027;font:14px/1.65 Arial,sans-serif}h1{font-size:32px;margin:0}h2{font-size:14px;color:#496735;letter-spacing:.06em;border-bottom:1px solid #d8dfd0;padding-bottom:7px;margin-top:28px}h3{font-size:15px;margin-bottom:6px}p{margin:8px 0}.role{font-size:18px;margin-top:2px;color:#496735}.contact{font-size:12px;color:#5e6b57}.bullet{padding-left:15px;position:relative}.bullet-dot{position:absolute;left:0}a{color:#496735}.toolbar{display:flex;justify-content:space-between;margin-bottom:25px;gap:15px}.toolbar>a:last-child{background:#263027;color:white;border-radius:5px;padding:9px 14px;text-decoration:none}@media print{body{font-size:10px;margin:0}h1{font-size:25px}h2{font-size:12px;margin-top:17px}h3{font-size:12px}.contact{font-size:10px}.toolbar{display:none}.page-break{break-before:page}@page{size:A4;margin:15mm}}</style></head><body><div class="toolbar"><a href="../">← Portfolio</a><a href="assets/Taekjun_Lee_Resume.pdf">Download PDF ↗</a></div>'''+''.join(html)+'</body></html>')
print(OUT)
