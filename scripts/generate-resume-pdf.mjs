import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const data = {
  name: "Ankita Kumari",
  title: "Backend & Cloud Engineer",
  email: "aanikitak91@gmail.com",
  phone: "+91 8809388345",
  summary:
    "Backend Engineer building scalable cloud-native applications using Java, Spring Boot, and AWS. Experienced designing REST APIs and microservices, automating deployments with Jenkins and Terraform, and optimizing SQL-backed systems.",
  highlights: [
    "Built cloud-native backend processing 5,000+ resumes",
    "Deployed applications using AWS, Jenkins & Terraform",
    "Designed REST APIs with Spring Boot microservices",
    "Research experience in NLP and speech analysis",
  ],
  skills: {
    Languages: "Java, Python, SQL, JavaScript, TypeScript",
    Frameworks: "Spring Boot, REST APIs, Microservices, React",
    "Cloud & DevOps":
      "AWS (EC2, S3, Lambda), Docker, Jenkins, Terraform, CI/CD",
    "Analytics & Tools": "MySQL, Firebase, Git, Postman",
  },
  certifications: [
    "AWS Academy – ML Foundations",
    "Oracle Certified Foundation",
  ],
  projects: [
    {
      title: "AI Resume Sorter",
      desc: "Microservices backend with NLP-based candidate ranking; processed 5,000+ resumes on AWS.",
    },
    {
      title: "Smart Finance Advisor",
      desc: "Rule-based financial recommendation engine; improved user savings by ~15%.",
    },
    {
      title: "VoiceShield AI",
      desc: "IEEE-style research on real-time voice threat detection using multimodal AI.",
    },
  ],
  experience: [
    {
      role: "Software Development Intern",
      company: "SAIL (Steel Authority of India Limited), India",
      bullets: [
        "Improved application usability by 30%",
        "Reduced user interaction steps by 25%",
      ],
    },
    {
      role: "Committee Head – CSI Committee",
      company: "Aaruush, SRM University, Chennai",
      bullets: [
        "Managed digital strategy for events with 5,000+ attendees",
        "Led sales, sponsorship acquisition, and budget planning",
      ],
    },
  ],
  education: {
    degree: "B.Tech in Computer Science & Engineering",
    school: "SRM Institute of Science and Technology",
    period: "2022 – 2026",
    cgpa: "8.04",
  },
};

function wrapText(text, maxLen) {
  const words = text.split(" ");
  const lines = [];
  let current = "";
  for (const word of words) {
    if ((current + word).length > maxLen) {
      lines.push(current.trim());
      current = word + " ";
    } else {
      current += word + " ";
    }
  }
  if (current.trim()) lines.push(current.trim());
  return lines;
}

async function generate() {
  const pdf = await PDFDocument.create();
  const font = await pdf.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdf.embedFont(StandardFonts.HelveticaBold);

  const page = pdf.addPage([595, 842]);
  const { width } = page.getSize();
  let y = 792;
  const margin = 50;

  const drawText = (text, x, size, bold = false, color = rgb(0.1, 0.1, 0.15)) => {
    page.drawText(text, {
      x,
      y,
      size,
      font: bold ? fontBold : font,
      color,
    });
    y -= size + 6;
  };

  const drawSection = (title) => {
    y -= 8;
    page.drawLine({
      start: { x: margin, y: y + 4 },
      end: { x: width - margin, y: y + 4 },
      thickness: 0.5,
      color: rgb(0.4, 0.3, 0.9),
    });
    y -= 6;
    drawText(title.toUpperCase(), margin, 10, true, rgb(0.4, 0.3, 0.9));
    y -= 4;
  };

  drawText(data.name, margin, 22, true);
  drawText(data.title, margin, 12, false, rgb(0.4, 0.4, 0.5));
  drawText(`${data.email}  |  ${data.phone}`, margin, 10, false, rgb(0.4, 0.4, 0.5));
  y -= 10;

  drawSection("Summary");
  for (const line of wrapText(data.summary, 85)) {
    drawText(line, margin, 10);
  }

  drawSection("Highlights");
  for (const h of data.highlights) {
    drawText(`•  ${h}`, margin, 10);
  }

  drawSection("Skills");
  for (const [cat, items] of Object.entries(data.skills)) {
    drawText(`${cat}: ${items}`, margin, 10);
  }

  drawSection("Projects");
  for (const p of data.projects) {
    drawText(p.title, margin, 11, true);
    drawText(p.desc, margin + 10, 9, false, rgb(0.35, 0.35, 0.4));
  }

  drawSection("Experience");
  for (const e of data.experience) {
    drawText(e.role, margin, 11, true);
    drawText(e.company, margin, 9, false, rgb(0.4, 0.4, 0.5));
    for (const b of e.bullets) {
      drawText(`•  ${b}`, margin + 10, 9);
    }
    y -= 4;
  }

  drawSection("Education");
  drawText(data.education.degree, margin, 11, true);
  drawText(
    `${data.education.school}  |  ${data.education.period}  |  CGPA ${data.education.cgpa}`,
    margin,
    9,
    false,
    rgb(0.4, 0.4, 0.5)
  );

  drawSection("Certifications");
  for (const c of data.certifications) {
    drawText(`•  ${c}`, margin, 10);
  }

  const bytes = await pdf.save();
  const outDir = path.join(__dirname, "..", "public", "resume");
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, "Ankita_Kumari_Resume.pdf");
  fs.writeFileSync(outPath, bytes);
  console.log(`Resume PDF generated: ${outPath}`);
}

generate().catch(console.error);
