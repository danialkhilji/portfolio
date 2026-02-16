export const skills: string[] = [
  "Python",
  "Machine Learning",
  "Data Science",
  "Data Analysis",
  "Computer Vision",
  "Natural Language Processing (NLP)",
  "Language Models (LMs)",
  "Data Engineering",
  "Data Pipelines",
  "SQL",
  "BigQuery ML (GCP)",
  "Snowflake",
  "Data Clean Rooms",
  "Microsoft Azure AI",
  "Google Vertex AI",
  "Data Visualization",
  "Tableau",
  "Google Studio",
  "Flourish",
  "Git (Version Control)",
  "PySpark",
  "R (Programming Language)",
  "R Studio",
  "Flask",
  "Kubeflow",
  "Arduino IDE",
  "C++",
  "Linux OS (Flavours: Ubuntu and Garuda)",
  "Weka",
  "Matlab",
  "Matlab Simulink",
];

export const languages = [
  { flag: "\u{1F1EC}\u{1F1E7}", name: "English" },
  { flag: "\u{1F1F5}\u{1F1F0}", name: "Urdu" },
  { flag: "\u{1F1E9}\u{1F1EA}", name: "German" },
  { flag: "\u{1F1F5}\u{1F1F0}", name: "Punjabi" },
];

export interface FeaturedCertification {
  text: string;
  badgeUrl?: string;
  certificateUrl?: string;
  badgeAlt?: string;
  textSize?: string;
}

export const featuredCertifications: FeaturedCertification[] = [
  {
    text: "Google Certified Generative AI Leader",
    badgeUrl:
      "/certificates/gcp_gen_ai_leader/generative-ai-leader-certification.png",
    certificateUrl:
      "/certificates/gcp_gen_ai_leader/Generative AI Leader certificate.pdf",
    badgeAlt: "Google Generative AI Leader certification badge",
    textSize: "text-sm md:text-base", // Smaller text
  },
  {
    text: "RSS Certified Professional Data Scientist and Data Analyst",
    textSize: "text-sm md:text-base",
  },
];

export const publications = [
  {
    title: "Features matching using natural language processing",
    journal: "International Journal on Cybernetics & Informatics (IJCI)",
    date: "Mar 24, 2023",
    abstract:
      "The feature matching is a basic step in matching different datasets. This article shows a new hybrid model of a pretrained Natural Language Processing (NLP) based model called BERT used in parallel with a statistical model based on Jaccard similarity to measure the similarity between list of features from two different datasets. This reduces the time required to search for correlations or manually match each feature from one dataset to another.",
    link: "https://arxiv.org/abs/2303.12804",
  },
  {
    title:
      "Analysis Photovoltaic System in Relation to Tracking and Non-Tracking System",
    journal: "Journal of Fundamentals of Renewable Energy and Applications",
    date: "Feb 15, 2021",
    abstract:
      "The increasing demand of electricity has been a great concern in recent years. The increasing demand and environmental (global warming) issues urged scientists to evolve in the field of renewable energy. Solar energy is one of the major sources of renewable energy. Electrical energy is produced by photovoltaic cells when they allow light particles to knock free electrons from atoms. The amount of electrical output produced by the system is dependent on amount of solar energy received by PV cells. To increase solar energy output, a fixed solar panel inclined towards the optimal point is usually used. The collection of solar energy is increased by using solar tracking systems i.e. single axis or dual axis, which continuously track the sun using incidence angle of sunlight. The analysis is carried out to compare the performance between tracking and non-tracking photovoltaic systems. Data of specific solar panel systems is analysed and compared with simulations and actual outputs to compute performance ratios and deduce conclusions. The average performance ratio is found out to be 0.73 for non-tracking system and 0.90 (17% more than non-tracking systems) for tracking systems. The accuracy of estimated output of a PV system can be improved by using more accurate solar irradiance data, accurate weather conditions, exact system losses and matched inverter efficiency. The efficiency of a PV system can be improved by using solar trackers, using more efficient solar panels, installing them in a less shaded area, cleaning the panels on regular intervals, and using more efficient electrical components.",
    link: "https://clok.uclan.ac.uk/36933/1/36933%20analysis-photovoltaic-system-in-relation-to-tracking-and-nontracking-system.pdf",
  },
];
