export interface CareerEntry {
  title: string;
  organization: string;
  logo?: string;
  dateRange: string;
  project?: string;
  description?: string[];
  bullets?: string[];
  bulletPrefix?: string;
}

export const careerEntries: CareerEntry[] = [
  {
    title: "Data Scientist",
    organization: "WPP",
    logo: "logos/wpp.svg",
    dateRange: "June 2023 - Present",
    bullets: [
      "Conceived, architected, and led the development of WPP's taxonomy mapping platform — a semantic knowledge system using embedding-based similarity and weighted graph algorithms, generating 513,000+ mappings across 719 audience segments, 90 markets, and 9 ad-tech platforms including Meta, Google, Amazon, TikTok, and LinkedIn.",
      "Define and drive the end-to-end technical roadmap in collaboration with product and engineering stakeholders, prioritising model accuracy, pipeline automation, and feature development.",
      "Productionized the taxonomy mapping system as a Python library powering the Audience Translator web application — adopted by 5,000+ users across 90 markets, with configurable embedding model weighting, automated KPI generation, and modular evaluation pipelines.",
      "Led the design and integration of automated mapping pipelines with Airflow, reducing turnaround from weeks to under one week (60% reduction) and saving ~60 hours of manual effort per mapping cycle.",
      "Designed and implemented a rigorous evaluation framework using text corruption strategies and ground-truth validation, establishing a 70% precision baseline that guided subsequent model improvements.",
      "Integrated fine-tuned BERT-based models and developed a proprietary weighted similarity algorithm, improving mapping accuracy from 70% to 86% through systematic experimentation across 7+ model configurations.",
      "Architected LLM-powered features (GPT-4, Gemini 1.5 Pro) for taxonomy enrichment and lightweight RAG, increasing taxonomy utilisation in mappings by 16% without dependency on external databases.",
      "Designed an LLM supervision layer using GPT-4/4o to pre-validate mappings before human review, reducing manual validation effort by 60% and improving team throughput from days to hours.",
      "Led investigation into geo-targeted advertising data quality across 590K+ device IDs in Snowflake, improving device and email matching accuracy by 12%; designed a QA framework for partner data validation and onboarding.",
      "Evaluated Habu clean room technology for secure cross-organizational data collaboration, providing strategic technical recommendations from a data science perspective.",
      "Architected a LangGraph-based multi-agent system for automated ad-tech platform research, generating validated technical reports with API specifications, audience taxonomies, and reach estimates.",
      "Developed MCP server infrastructure to expose the taxonomy mapping system's capabilities to AI agents, enabling programmatic access across the organization.",
    ],
  },
  {
    title: "Junior Data Scientist",
    organization: "Choreograph / WPP",
    logo: "logos/wpp.svg",
    dateRange: "March 2022 - June 2023",
    bullets: [
      "Won WPP Data Challenge #5; participated in Data Challenge #4.",
      "Core contributor to the Audience Knowledge Graph (AKG) project: designed and implemented taxonomy mapping algorithms, data normalization pipelines, and entity relationship modelling to support downstream analytics and activation; built Looker Studio dashboards for pipeline monitoring.",
      "Developed the initial semantic similarity algorithms using pre-trained BERT models from Hugging Face, establishing the technical foundations for the production mapping system.",
      "Designed and applied entity resolution techniques to map and deduplicate entities across datasets, optimizing algorithms for performance and scalability.",
    ],
  },
  {
    title: "WPP NextGen Leader",
    organization: "WPP",
    logo: "logos/wpp.svg",
    dateRange: "June 2022 - August 2022",
    description: [
      "10-week internship providing cross-agency exposure to WPP's creative, media, and campaign operations across the group.",
    ],
  },
  {
    title: "Data Intern",
    organization: "Choreograph / WPP",
    logo: "logos/wpp.svg",
    dateRange: "November 2021 - March 2022",
    bullets: [
      "Identified a critical gap in the team's data fusion workflow and independently proposed an NLP-based solution for automated feature matching between datasets.",
      "Designed and prototyped the initial taxonomy mapper — the foundational project that evolved into WPP's production taxonomy mapping platform.",
      "Deployed compute-intensive model training and evaluation workloads on Kubeflow for scalable processing.",
    ],
  },
  {
    title: "Internship Program",
    organization: "Pagoda Projects",
    logo: "logos/pagoda.svg",
    dateRange: "February 2021 - March 2021",
    bulletPrefix: "Main skills focus on:",
    bullets: [
      "Digital Competency",
      "Employability Skills",
      "Intercultural Fluency",
      "Workplace Basics for Graduates",
    ],
  },
  {
    title: "Junior Data Analyst & Second Line Technical Support",
    organization: "TalkPool AG",
    logo: "logos/talkpool.svg",
    dateRange: "June 2019 - September 2019",
    description: [
      "Served as an intern for a remote monitoring system in Haiti in the field of Data Science and second line technical support. Main duties included monitoring and analyzing data of communication towers fetched from cloud system.",
    ],
  },
  {
    title: "Community Volunteer",
    organization: "Rizq",
    logo: "logos/rizq.svg",
    dateRange: "May 2019",
    description: [
      "Being a people-powered movement united to end hunger, our success truly depends on the commitment of our volunteers. For this reason, I served as a volunteer for a total of 15 hours.",
    ],
  },
  {
    title: "Community Volunteer",
    organization: "Sultan Qaboos University",
    logo: "logos/squ.svg",
    dateRange: "September 2017",
    description: [
      "Attended a clinical attachment program at the Emergency Medicine department of Sultan Qaboos University Hospital.",
    ],
  },
  {
    title: "Master's in Applied Data Science",
    organization: "University of Lancashire",
    logo: "logos/ulan.svg",
    dateRange: "September 2020 - September 2021",
    description: [
      "Thesis on Performance of Optical Flow using Spiking Neural Networks. Major courses were Artificial Intelligence & Machine Learning, Internet of Things and Big Data Technologies.",
      "Besides learning numerous data technologies and doing related projects, I learned Linux OS for configuring ESP32 for IoT applications.",
    ],
  },
  {
    title: "Bachelor's in Electrical Engineering",
    organization: "National University of Sciences and Technology",
    logo: "logos/nust.svg",
    dateRange: "October 2016 - May 2020",
    description: [
      "Participated in National Engineering Robotic Competition (NERC) for two consecutive years, in the line following category. For the most part I worked on the H-Bridge for the motors of the robot. Besides that, joined membership for horse riding club which I continued for most of my sophomore year. Joined Photography club in my freshman year and worked as an associate photographer in the EME Olympiad 2016 event.",
      "Graduated with major elective courses: Artificial Intelligence, Computer Vision, Digital System Designs and Electric Drives. The project Micro-Inverter with Lithium Ion battery was completed as a final year project.",
    ],
  },
  {
    title: "Advanced Levels",
    organization: "Pakistan School Muscat",
    logo: "logos/psm.svg",
    dateRange: "May 2014 - May 2016",
  },
  {
    title: "Ordinary Levels",
    organization: "Pakistan School Muscat",
    logo: "logos/psm.svg",
    dateRange: "May 2012 - May 2014",
  },
  {
    title: "Primary Education",
    organization: "Pakistan School Muscat",
    logo: "logos/psm.svg",
    dateRange: "",
  },
];
