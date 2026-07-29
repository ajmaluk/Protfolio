import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

async function generateResume() {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([595.28, 841.89]); // A4 dimensions in pt
  const { width, height } = page.getSize();

  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontOblique = await pdfDoc.embedFont(StandardFonts.HelveticaOblique);

  const margin = 36; // 0.5 inch margins
  let y = height - margin;

  const darkColor = rgb(0.1, 0.1, 0.1);
  const grayColor = rgb(0.35, 0.35, 0.35);

  function drawHeader() {
    // Name
    const name = 'MUHAMMED AJMAL U K';
    const nameWidth = fontBold.widthOfTextAtSize(name, 20);
    page.drawText(name, {
      x: (width - nameWidth) / 2,
      y: y - 20,
      size: 20,
      font: fontBold,
      color: darkColor,
    });
    y -= 34;

    // Contact line
    const contact = 'Kannur, Kerala, India  |  ajmaluk.me@gmail.com  |  +91 8547197122';
    const contactWidth = fontRegular.widthOfTextAtSize(contact, 9.5);
    page.drawText(contact, {
      x: (width - contactWidth) / 2,
      y: y,
      size: 9.5,
      font: fontRegular,
      color: darkColor,
    });
    y -= 14;

    // Links line
    const links = 'linkedin.com/in/ajmaluk  •  github.com/ajmaluk  •  ajmal.uthakkan.in';
    const linksWidth = fontRegular.widthOfTextAtSize(links, 9);
    page.drawText(links, {
      x: (width - linksWidth) / 2,
      y: y,
      size: 9,
      font: fontRegular,
      color: darkColor,
    });
    y -= 20;
  }

  function drawSectionHeading(title) {
    page.drawText(title.toUpperCase(), {
      x: margin,
      y: y,
      size: 10.5,
      font: fontBold,
      color: darkColor,
    });
    y -= 4;
    page.drawLine({
      start: { x: margin, y: y },
      end: { x: width - margin, y: y },
      thickness: 0.6,
      color: rgb(0.8, 0.8, 0.8),
    });
    y -= 12;
  }

  drawHeader();

  // PROFILE SUMMARY
  drawSectionHeading('PROFILE SUMMARY');
  const summaryLines = [
    'MCA student and Software Engineer passionate about designing and developing AI-powered applications and full-stack software solutions.',
    'Experienced in building production-ready web and mobile applications using Python, Flutter, Flask, Firebase, REST APIs, and LLM integrations.',
    'Strong interest in AI agents, cloud technologies, and developing innovative software products with real-world impact.'
  ];
  for (const line of summaryLines) {
    page.drawText(line, {
      x: margin,
      y: y,
      size: 8.5,
      font: fontRegular,
      color: darkColor,
    });
    y -= 11;
  }
  y -= 4;

  // TECHNICAL SKILLS
  drawSectionHeading('TECHNICAL SKILLS');
  const skillCategories = [
    ['Programming Languages', 'Python, Java, C, C++, JavaScript, SQL'],
    ['Frontend Development', 'HTML5, CSS3, React.js, Responsive Design'],
    ['Backend & APIs', 'Flask, REST APIs, Firebase'],
    ['Mobile Development', 'Flutter, Dart, Cross-platform Development'],
    ['Databases', 'MongoDB, SQL, Supabase, Firestore'],
    ['AI & ML Tools', 'Gemini API, ChatGPT, Claude, DeepFace, OCR Tools'],
    ['Cloud & Deployment', 'Cloudflare, Netlify, PythonAnywhere, Vercel, Google Cloud'],
    ['Dev Tools & IDEs', 'Git, GitHub, VS Code, Android Studio, Postman, Kiro, Cline']
  ];

  for (const [cat, val] of skillCategories) {
    page.drawText(cat, {
      x: margin,
      y: y,
      size: 8.5,
      font: fontBold,
      color: darkColor,
    });
    page.drawText(val, {
      x: margin + 140,
      y: y,
      size: 8.5,
      font: fontRegular,
      color: darkColor,
    });
    y -= 11;
  }
  y -= 4;

  // EDUCATION
  drawSectionHeading('EDUCATION');
  const eduItems = [
    {
      inst: 'College of Engineering, Trivandrum',
      degree: 'Master of Computer Applications (MCA) – APJ Abdul Kalam Technological University',
      period: '2025 – 2027',
      score: '90.9%'
    },
    {
      inst: 'Mahatma Gandhi College, Iritty',
      degree: 'Bachelor of Computer Science – Kannur University',
      period: '2022 – 2025',
      score: '89.7%'
    },
    {
      inst: 'GHSS Ulikkal',
      degree: 'Higher Secondary Education – Kerala Board of Public Examination',
      period: '2020 – 2022',
      score: '90.8%'
    }
  ];

  for (const edu of eduItems) {
    page.drawText(edu.inst, {
      x: margin,
      y: y,
      size: 9,
      font: fontBold,
      color: darkColor,
    });
    const periodWidth = fontBold.widthOfTextAtSize(edu.period, 9);
    page.drawText(edu.period, {
      x: width - margin - periodWidth,
      y: y,
      size: 9,
      font: fontBold,
      color: darkColor,
    });
    y -= 11;

    page.drawText(edu.degree, {
      x: margin,
      y: y,
      size: 8.5,
      font: fontOblique,
      color: grayColor,
    });
    const scoreWidth = fontBold.widthOfTextAtSize(edu.score, 8.5);
    page.drawText(edu.score, {
      x: width - margin - scoreWidth,
      y: y,
      size: 8.5,
      font: fontBold,
      color: darkColor,
    });
    y -= 13;
  }
  y -= 2;

  // PROJECTS
  drawSectionHeading('PROJECTS');
  const projects = [
    {
      title: 'ToolPix – AI-Powered Productivity Platform',
      tech: 'Python, Flask, Gemini API, JS, HTML, CSS',
      sub: 'Independently designed and developed a production-ready AI-powered productivity suite.',
      bullets: [
        'Link: toolpix.pythonanywhere.com',
        'Built Flask backend, integrated Gemini API, OCR tools, PDF processing utilities, image engines, online compilers, and AI web tools.',
        'Implemented AI SEO strategies generating over 600K+ organic Google Search clicks and 14M+ search impressions.'
      ]
    },
    {
      title: 'Dementia Virtual Memory Assistant',
      tech: 'Flutter, Flask, Firebase, DeepFace, Google Maps API',
      sub: 'Cognitive-support mobile app for dementia patients and caregivers featuring AI facial recognition.',
      bullets: [
        'Link: github.com/ajmaluk/dementia-virtual-memory',
        'Built AI face recognition via DeepFace (ArcFace), real-time location tracking, emergency alerts, and caregiver controls.',
        'Leveraged Agentic IDEs (Kiro/Cline) to significantly accelerate development cycles and system reliability.'
      ]
    },
    {
      title: 'Explore Together – B.Sc. Major Project',
      tech: 'Flutter, Firebase Auth, Firestore, Cloudinary, OneSignal',
      sub: 'Cross-platform travel companion app helping solo travelers connect and match trips.',
      bullets: [
        'Link: github.com/ajmaluk/explore-together',
        'Developed in a 3-member team; contributed to Flutter UI, Firebase Auth, Firestore, push notifications, and cloud media.'
      ]
    },
    {
      title: 'KallanCop – Local Multiplayer Social Deduction Game',
      tech: 'Flutter, Local Wi-Fi / Hotspot, QR Sync',
      sub: 'Privacy-first multiplayer card-style social deduction party game published on Google Play.',
      bullets: [
        'Link: play.google.com/store/apps/details?id=com.ajmal.kallancop',
        'Implemented local Wi-Fi/Hotspot multiplayer connectivity and QR room joining; managed complete Play Store release lifecycle.'
      ]
    }
  ];

  for (const p of projects) {
    page.drawText(p.title, {
      x: margin,
      y: y,
      size: 9,
      font: fontBold,
      color: darkColor,
    });
    const techWidth = fontBold.widthOfTextAtSize(p.tech, 8.5);
    page.drawText(p.tech, {
      x: width - margin - techWidth,
      y: y,
      size: 8.5,
      font: fontBold,
      color: grayColor,
    });
    y -= 10.5;

    page.drawText(p.sub, {
      x: margin,
      y: y,
      size: 8.5,
      font: fontOblique,
      color: darkColor,
    });
    y -= 10;

    for (const b of p.bullets) {
      const text = b.startsWith('Link:') ? b : `• ${b}`;
      page.drawText(text, {
        x: margin + 6,
        y: y,
        size: 8,
        font: fontRegular,
        color: darkColor,
      });
      y -= 9.5;
    }
    y -= 3;
  }

  // CERTIFICATIONS
  drawSectionHeading('CERTIFICATIONS');
  const certsCol1 = [
    '• Introduction to Artificial Intelligence – IBM / Coursera',
    '• Prompt Engineering with GitHub Copilot – Microsoft',
    '• Deloitte Data Analytics Virtual Experience – Deloitte / Forage',
    '• Maximize Productivity with AI Tools – Coursera'
  ];
  const certsCol2 = [
    '• Introduction to Software Engineering – IBM / Coursera',
    '• The Joy of Computing using Python – NPTEL',
    '• Discover the Art of Prompting – Coursera',
    '• Oracle Cloud Infrastructure 2025 AI Foundations Associate – Oracle'
  ];

  const colWidth = (width - margin * 2) / 2;
  const startYCert = y;

  let yCol1 = startYCert;
  for (const c of certsCol1) {
    page.drawText(c, { x: margin, y: yCol1, size: 8, font: fontRegular, color: darkColor });
    yCol1 -= 10;
  }

  let yCol2 = startYCert;
  for (const c of certsCol2) {
    page.drawText(c, { x: margin + colWidth, y: yCol2, size: 8, font: fontRegular, color: darkColor });
    yCol2 -= 10;
  }
  y = Math.min(yCol1, yCol2) - 4;

  // ACHIEVEMENTS
  drawSectionHeading('ACHIEVEMENTS');
  const achievements = [
    '• Built ToolPix, reaching 600K+ organic Google Search clicks and 14M+ search impressions.',
    '• Published KallanCop on Google Play, managing end-to-end product development, testing, and distribution.',
    '• Achieved Google Cloud Arcade Champion Tier by completing advanced Google Cloud infrastructure labs.'
  ];
  for (const a of achievements) {
    page.drawText(a, { x: margin, y: y, size: 8.5, font: fontRegular, color: darkColor });
    y -= 10.5;
  }
  y -= 4;

  // SOFT SKILLS
  drawSectionHeading('SOFT SKILLS');
  const softSkills = [
    ['Problem Solving', 'Team Collaboration', 'Communication'],
    ['Software Development', 'Product Thinking', 'Leadership'],
    ['Self-Learning', 'Adaptability', 'Time Management']
  ];
  const colW = (width - margin * 2) / 3;
  for (const row of softSkills) {
    row.forEach((item, idx) => {
      page.drawText(item, {
        x: margin + idx * colW,
        y: y,
        size: 8.5,
        font: fontBold,
        color: darkColor,
      });
    });
    y -= 10.5;
  }
  y -= 4;

  // LANGUAGES
  drawSectionHeading('LANGUAGES');
  const langs = 'Malayalam (Native)   |   English (Professional)   |   Hindi (Conversational)';
  page.drawText(langs, {
    x: margin,
    y: y,
    size: 8.5,
    font: fontRegular,
    color: darkColor,
  });

  const pdfBytes = await pdfDoc.save();
  const outputPath = path.join(process.cwd(), 'public', 'resume.pdf');
  fs.writeFileSync(outputPath, pdfBytes);
  console.log('Successfully generated public/resume.pdf! Size:', pdfBytes.length, 'bytes');
}

generateResume().catch(console.error);
