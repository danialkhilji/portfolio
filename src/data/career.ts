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
      "Designed and optimized a semantic knowledge representation system, modelling relationships between audience using semantic similarity and weighted graph similarity, enabling >10K users in just one quarter to map source taxonomies to ad-tech platforms like Meta and Google.",
      "Partnered with engineers to automate mappings pipelines using Airflow, reducing turnaround time from weeks to under one week through automated similarity, KPI calculations, and reporting.",
      "Built and maintain a Python package for taxonomy similarity, adopted across teams, with features for data cleaning, KPI generation, model evaluation, results evaluation and configurable weighting of embedding models.",
      "Integrated pre-trained and fine-tuned BERT-based models, developing a weighted similarity algorithm, and continuously improving mapping performance.",
      "Developed an evaluation framework with text corruption strategies, ground-truth validation, and confusion matrices to measure model accuracy.",
      "Implemented LLM-based features (GPT-4, Gemini 1.5 Pro) for taxonomy enrichment and lightweight RAG, improving semantic accuracy without relying on external databases.",
      "Built an LLM supervision layer, using GPT-4/4o, to pre-validate mappings before human review, significantly reducing manual efforts and improving efficiency.",
      "Investigated geo-targeted advertising inaccuracies in Snowflake, improving device (Mobile, TV, etc.) and email matching via probabilistic methods; developed a QA framework for partner data validation and onboarding.",
      "Consulted on email matching optimization for campaigns using probabilistic matching algorithms and normalization techniques.",
      "Investigated Habu clean rooms to enable secure and collaborative data sharing with clients from a data science perspective.",
      "Built a LangGraph-based multi-agent system for ad-tech platform research to retrieve API details, audience taxonomies, and reach estimates, and automatically generate validated markdown reports with details and code snippets.",
      "Developed MCP server to expose semantic similarity system to AI Agents.",
    ],
  },
  {
    title: "Junior Data Scientist",
    organization: "Choreograph / WPP",
    logo: "logos/wpp.svg",
    dateRange: "March 2022 - June 2023",
    bullets: [
      "Participated in WPP Data Challenge #4 and #5. Winner of Data Challenge #5.",
      "Contributed to the Audience Knowledge Graph (AKG) project, implementing taxonomy mapping, data normalization, and relationship modelling between audience entities to support downstream analytics and activation use case and Looker Studio dashboard to monitor various tasks in the pipeline.",
      "Developed python-based package for semantic similarity to expose taxonomy mapping project to different teams within company. Package uses pre-trained BERT language models from Hugging Face library to generate vector embeddings, enabling efficient matching across large structured datasets.",
      "Applied entity resolution techniques to map and deduplicate entities across datasets, optimizing algorithms for performance and scalability (reducing complexity and improving matching efficiency).",
    ],
  },
  {
    title: "WPP NextGen Leader",
    organization: "WPP",
    logo: "logos/wpp.svg",
    dateRange: "June 2022 - August 2022",
    description: [
      "10-week internship in WPP to give an understanding of how, as a group of agencies, WPP work in the creative world, help their clients grow and build advertisement campaigns.",
    ],
  },
  {
    title: "Data Intern",
    organization: "Choreograph / WPP",
    logo: "logos/wpp.svg",
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
