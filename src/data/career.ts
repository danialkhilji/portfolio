export interface CareerEntry {
  title: string;
  organization: string;
  dateRange: string;
  project?: string;
  description?: string[];
  bullets?: string[];
  bulletPrefix?: string;
}

export const careerEntries: CareerEntry[] = [
  {
    title: "Data Scientist",
    organization: "Choreograph / WPP Media",
    dateRange: "June 2023 - Present",
    bullets: [
      "Designed and continuously improved the taxonomy mapping process for the Audience Translator project, enabling >1K users in just Q1 to map source taxonomies (mainly Audience Origin) to ad-tech platforms like Meta and Google, plus handling bespoke mappings on request.",
      "Partnered with engineers to automate mappings with Airflow, reducing turnaround time from weeks to under one week by running taxonomy similarity, calculating KPIs, storing results, and notifying users.",
      "Built and maintain a Python package for taxonomy similarity, now adopted across multiple teams. Enhanced it with taxonomy cleaning, automated KPI calculation, model evaluation, and user flexibility to adjust models and weights.",
      "Integrated pre-trained and fine-tuned BERT models, developed a weighted similarity algorithm, and continue to research optimization for mapping quality.",
      "Developed an evaluation module with text corruption strategies, ground-truth validation, and confusion matrices to test algorithmic performance.",
      "Implemented LLM-based features (GPT-4 and Gemini 1.5 Pro) including taxonomy enrichment with descriptions and lightweight RAG functionality using Python dictionaries for efficient vector storage, improving semantic accuracy without relying on external databases.",
      "Developed an automated LLM supervision layer, using GPT-4 and GPT-4o, to pre-review mapped taxonomies before human validation, significantly reducing manual review time and streamlining the overall mapping workflow.",
      "Investigated geo-targeted advertising inaccuracies with Snowflake queries, analyzing device ID matching across partners and identifying data noise. Consulted on email matching optimization for campaigns using probabilistic matching algorithms and normalization techniques. Created a comprehensive QA framework with automated validation checks and data profiling metrics to evaluate new partner data onboarding, ensuring campaign targeting accuracy and maintaining data quality standards.",
      "Investigated Habu clean rooms to enable secure and collaborative data sharing with clients from a data science perspective.",
      "Developed a multi-agent system using LangGraph and Model Context Protocol (MCP) for modular tool integration, implementing async/sync bridging to connect protocol servers with LangChain workflows. Built multi-provider LLM orchestration (Azure OpenAI for GPTs, Vertex AI for Claude models) with self-reflection loops, semantic duplicate detection for Jira automation, and comprehensive logging infrastructure for automated API research and code generation.",
    ],
  },
  {
    title: "Junior Data Scientist",
    organization: "Choreograph / WPP Media",
    dateRange: "March 2022 - June 2023",
    bullets: [
      "Participated in WPP Data Challenge #4 and #5. Winner of Data Challenge #5.",
      "Contributed to the Audience Knowledge Graph (AKG) project, developing taxonomy mapping module, data cleaning steps for data clean rooms, and Looker Studio dashboard for monitoring each module progress among other tasks.",
      "Created Python package to expose taxonomy mapping project to different teams within the company. Package uses pre-trained BERT language models from Hugging Face library to generate vector embeddings which are used to calculate cosine similarity.",
      "Focused on taxonomy mapping work, also known as Named Entity Resolution (NER). Improved the previously developed algorithm by removing loops and reducing time complexity from O(n) to O(1).",
    ],
  },
  {
    title: "WPP NextGen Leader",
    organization: "WPP",
    dateRange: "June 2022 - August 2022",
    description: [
      "10-week internship in WPP to give an understanding of how, as a group of agencies, WPP work in the creative world, help their clients grow and build advertisement campaigns.",
    ],
  },
  {
    title: "Data Intern",
    organization: "Choreograph / WPP Media",
    dateRange: "November 2021 - March 2022",
    project: "FaaS Jinx Discovery",
    bullets: [
      "Worked in Fusion as a Service (FaaS) team where I developed an algorithm using NLP to identify common features between two different datasets to allow easy data fusion.",
      "Spent time on understanding issues of the team. Figured out they required a feature matching algorithm to speed up the data fusions.",
      "Started a small project to build an NLP solution that could give the best feature matches between two datasets, which was then named taxonomy mapper.",
      "Used Kubeflow to run computationally expensive code.",
    ],
  },
  {
    title: "Internship Program",
    organization: "Pagoda Projects",
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
    dateRange: "June 2019 - September 2019",
    description: [
      "Served as an intern for a remote monitoring system in Haiti in the field of Data Science and second line technical support. Main duties included monitoring and analyzing data of communication towers fetched from cloud system.",
    ],
  },
  {
    title: "Community Volunteer",
    organization: "Rizq",
    dateRange: "May 2019",
    description: [
      "Being a people-powered movement united to end hunger, our success truly depends on the commitment of our volunteers. For this reason, I served as a volunteer for a total of 15 hours.",
    ],
  },
  {
    title: "Community Volunteer",
    organization: "Sultan Qaboos University",
    dateRange: "September 2017",
    description: [
      "Attended a clinical attachment program at the Emergency Medicine department of Sultan Qaboos University Hospital.",
    ],
  },
  {
    title: "Master's in Applied Data Science",
    organization: "University of Lancashire",
    dateRange: "September 2020 - September 2021",
    description: [
      "Thesis on Performance of Optical Flow using Spiking Neural Networks. Major courses were Artificial Intelligence & Machine Learning, Internet of Things and Big Data Technologies.",
      "Besides learning numerous data technologies and doing related projects, I learned Linux OS for configuring ESP32 for IoT applications.",
    ],
  },
  {
    title: "Bachelor's in Electrical Engineering",
    organization: "National University of Sciences and Technology",
    dateRange: "October 2016 - May 2020",
    description: [
      "Participated in National Engineering Robotic Competition (NERC) for two consecutive years, in the line following category. For the most part I worked on the H-Bridge for the motors of the robot. Besides that, joined membership for horse riding club which I continued for most of my sophomore year. Joined Photography club in my freshman year and worked as an associate photographer in the EME Olympiad 2016 event.",
      "Graduated with major elective courses: Artificial Intelligence, Computer Vision, Digital System Designs and Electric Drives. The project Micro-Inverter with Lithium Ion battery was completed as a final year project.",
    ],
  },
  {
    title: "Advanced Levels",
    organization: "Pakistan School Muscat",
    dateRange: "May 2014 - May 2016",
  },
  {
    title: "Ordinary Levels",
    organization: "Pakistan School Muscat",
    dateRange: "May 2012 - May 2014",
  },
  {
    title: "Primary Education",
    organization: "Pakistan School Muscat",
    dateRange: "",
  },
];
