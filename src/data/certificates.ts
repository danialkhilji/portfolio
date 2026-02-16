export interface Certificate {
  title: string;
  issuer: string;
  link: string;
  isLocal: boolean;
  richIssuer?: string;
}

export interface CertificateYear {
  year: number;
  certificates: Certificate[];
}

export const certificatesByYear: CertificateYear[] = [
  {
    year: 2025,
    certificates: [
      {
        title: "Build Infrastructure with Terraform on Google Cloud",
        issuer: "Google Cloud",
        link: "/certificates/gcp_cloud_associate/GCP Build Infrastructure with Terraform on Google Cloud.png",
        isLocal: true,
      },
      {
        title: "Implement Cloud Security Fundamentals on Google Cloud",
        issuer: "Google Cloud",
        link: "/certificates/gcp_cloud_associate/GCP Implement Cloud Security Fundamentals on Google Cloud.png",
        isLocal: true,
      },
      {
        title: "Build a Secure Google Cloud Network",
        issuer: "Google Cloud",
        link: "/certificates/gcp_cloud_associate/GCP Build a Secure Google Cloud Network.png",
        isLocal: true,
      },
      {
        title: "Set Up an App Dev Environment on Google Cloud",
        issuer: "Google Cloud",
        link: "/certificates/gcp_cloud_associate/GCP Set Up an App Dev Environment on Google Cloud.png",
        isLocal: true,
      },
      {
        title: "Implementing Cloud Load Balancing for Compute Engine",
        issuer: "Google Cloud",
        link: "/certificates/gcp_cloud_associate/GCP Implementing Cloud Load Balancing for Compute Engine.png",
        isLocal: true,
      },
      {
        title: "Scaling with Google Cloud Operations",
        issuer: "Google Cloud",
        link: "/certificates/gcp_cloud_digital_leader/GCP Scaling with Google Cloud Operations.png",
        isLocal: true,
      },
      {
        title: "Trust and Security with Google Cloud",
        issuer: "Google Cloud",
        link: "/certificates/gcp_cloud_digital_leader/GCP Trust and Security with Google Cloud.png",
        isLocal: true,
      },
      {
        title: "Modernize Infrastructure and Applications with Google Cloud",
        issuer: "Google Cloud",
        link: "/certificates/gcp_cloud_digital_leader/GCP Modernize Infrastructure and Applications with Google Cloud.png",
        isLocal: true,
      },
      {
        title: "Innovating with Google Cloud Artificial Intelligence",
        issuer: "Google Cloud",
        link: "/certificates/gcp_cloud_digital_leader/GCP Innovating with Google Cloud Artificial Intelligence.png",
        isLocal: true,
      },
      {
        title: "Exploring Data Transformation with Google Cloud",
        issuer: "Google Cloud",
        link: "/certificates/gcp_cloud_digital_leader/GCP Exploring Data Transformation with Google Cloud.png",
        isLocal: true,
      },
      {
        title: "Digital Transformation with Google Cloud",
        issuer: "Google Cloud",
        link: "/certificates/gcp_cloud_digital_leader/GCP Digital Transformation with Google Cloud.png",
        isLocal: true,
      },
      {
        title: "Generative AI Leader Certificate",
        issuer: "Google Cloud",
        link: "/certificates/gcp_gen_ai_leader/Generative AI Leader certificate.pdf",
        isLocal: true,
      },
      {
        title: "Gen AI Generative AI Leader",
        issuer: "Google Cloud",
        link: "/certificates/gcp_gen_ai_leader/GCP Gen AI Generative AI Leader.pdf",
        isLocal: true,
      },
      {
        title: "Gen AI Agents: Transform Your Organization",
        issuer: "Google Cloud",
        link: "/certificates/gcp_gen_ai_leader/GCP Gen AI Agents Transform Your Organization.pdf",
        isLocal: true,
      },
      {
        title: "Gen AI Apps: Transform Your Work",
        issuer: "Google Cloud",
        link: "/certificates/gcp_gen_ai_leader/GCP Gen AI Apps Transform Your Work.pdf",
        isLocal: true,
      },
      {
        title: "Gen AI: Navigate the Landscape",
        issuer: "Google Cloud",
        link: "/certificates/gcp_gen_ai_leader/GCP Gen AI Navigate the Landscape.pdf",
        isLocal: true,
      },
      {
        title: "Gen AI: Unlock Foundational Concepts",
        issuer: "Google Cloud",
        link: "/certificates/gcp_gen_ai_leader/GCP Gen AI Unlock Foundational Concepts.pdf",
        isLocal: true,
      },
      {
        title: "Gen AI: Beyond the Chatbot",
        issuer: "Google Cloud",
        link: "/certificates/gcp_gen_ai_leader/GCP Gen AI Beyond the Chatbot.pdf",
        isLocal: true,
      },
      {
        title: "Machine Learning in Production (MLOps)",
        issuer: "DeepLearning.AI",
        link: "/certificates/Machine Learning in Production (MLOps) DeeplearningAI.pdf",
        isLocal: true,
      },
    ],
  },
  {
    year: 2024,
    certificates: [
      {
        title: "Data Science Professional",
        issuer: "Royal Statistical Society",
        link: "/certificates/rss_certificates/RSS Professional Data Science certificate.pdf",
        isLocal: true,
        richIssuer:
          '<a href="https://rss.org.uk/" class="underline">Royal Statistical Society</a> and <a href="https://alliancefordatascienceprofessionals.com/" class="underline">Alliance for Data Science Professionals</a> certified Data Science Professional. Membership ID: 235177',
      },
      {
        title: "Professional Data Analyst",
        issuer: "Royal Statistical Society",
        link: "/certificates/rss_certificates/RSS Professional Data Analyst certificate.pdf",
        isLocal: true,
        richIssuer:
          '<a href="https://rss.org.uk/" class="underline">Royal Statistical Society</a> certified Professional Data Analyst. Membership ID: 235177',
      },
      {
        title: "Building Resilient Streaming Analytics Systems on Google Cloud",
        issuer: "Google Cloud",
        link: "https://www.cloudskillsboost.google/public_profiles/5b0128f3-bdc6-47fe-8864-7fd884b226a6/badges/8859442?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
        isLocal: false,
      },
      {
        title: "Introduction to Generative AI",
        issuer: "Google Cloud",
        link: "https://www.cloudskillsboost.google/public_profiles/5b0128f3-bdc6-47fe-8864-7fd884b226a6/badges/8839057?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
        isLocal: false,
      },
      {
        title: "Level 3: GenAIus Registries",
        issuer: "Google Cloud",
        link: "https://www.cloudskillsboost.google/public_profiles/5b0128f3-bdc6-47fe-8864-7fd884b226a6/badges/8836004?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
        isLocal: false,
      },
      {
        title: "Preparing for your Professional Data Engineer Journey",
        issuer: "Google Cloud",
        link: "https://www.cloudskillsboost.google/public_profiles/5b0128f3-bdc6-47fe-8864-7fd884b226a6/badges/9103677?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
        isLocal: false,
      },
      {
        title: "Serverless Data Processing with Dataflow: Foundations",
        issuer: "Google Cloud",
        link: "https://www.cloudskillsboost.google/public_profiles/5b0128f3-bdc6-47fe-8864-7fd884b226a6/badges/9011212?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
        isLocal: false,
      },
      {
        title: "Share Data Using Google Data Cloud",
        issuer: "Google Cloud",
        link: "https://www.cloudskillsboost.google/public_profiles/5b0128f3-bdc6-47fe-8864-7fd884b226a6/badges/9050222?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
        isLocal: false,
      },
      {
        title: "Streaming Analytics into BigQuery",
        issuer: "Google Cloud",
        link: "https://www.cloudskillsboost.google/public_profiles/5b0128f3-bdc6-47fe-8864-7fd884b226a6/badges/8911241?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
        isLocal: false,
      },
      {
        title: "Build a Data Warehouse with BigQuery",
        issuer: "Google Cloud",
        link: "https://www.cloudskillsboost.google/public_profiles/5b0128f3-bdc6-47fe-8864-7fd884b226a6/badges/8737212?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
        isLocal: false,
      },
      {
        title: "Building Batch Data Pipelines on Google Cloud",
        issuer: "Google Cloud",
        link: "https://www.cloudskillsboost.google/public_profiles/5b0128f3-bdc6-47fe-8864-7fd884b226a6/badges/8701844?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
        isLocal: false,
      },
      {
        title: "Derive Insights from BigQuery Data",
        issuer: "Google Cloud",
        link: "https://www.cloudskillsboost.google/public_profiles/5b0128f3-bdc6-47fe-8864-7fd884b226a6/badges/8658274?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
        isLocal: false,
      },
      {
        title: "Modernizing Data Lakes and Data Warehouses with Google Cloud",
        issuer: "Google Cloud",
        link: "https://www.cloudskillsboost.google/public_profiles/5b0128f3-bdc6-47fe-8864-7fd884b226a6/badges/8598336?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
        isLocal: false,
      },
      {
        title: "Prepare Data for ML APIs on Google Cloud",
        issuer: "Google Cloud",
        link: "https://www.cloudskillsboost.google/public_profiles/5b0128f3-bdc6-47fe-8864-7fd884b226a6/badges/8577645?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
        isLocal: false,
      },
      {
        title: "Smart Analytics, Machine Learning, and AI on Google Cloud",
        issuer: "Google Cloud",
        link: "https://www.cloudskillsboost.google/public_profiles/5b0128f3-bdc6-47fe-8864-7fd884b226a6/badges/8567486?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
        isLocal: false,
      },
      {
        title: "Engineer Data for Predictive Modeling with BigQuery ML",
        issuer: "Google Cloud",
        link: "https://www.cloudskillsboost.google/public_profiles/5b0128f3-bdc6-47fe-8864-7fd884b226a6/badges/8489015",
        isLocal: false,
      },
    ],
  },
  {
    year: 2023,
    certificates: [],
  },
  {
    year: 2022,
    certificates: [
      {
        title: "Digital Fundamentals - WPP Future Readiness Academies",
        issuer: "WPP",
        link: "/certificates/WPP NextGen Leaders.pdf",
        isLocal: true,
      },
      {
        title: "Hands-On Essentials - Data Applications",
        issuer: "Snowflake",
        link: "https://achieve.snowflake.com/974d0ca9-5896-41c0-878d-404b6b993663#acc.2pBsJy9P",
        isLocal: false,
      },
      {
        title: "Hands-On Essentials - Data Warehouse",
        issuer: "Snowflake",
        link: "https://achieve.snowflake.com/375fe8fb-ad6b-4a6f-805c-06a409fad00d#acc.IHEjK1r0",
        isLocal: false,
      },
      {
        title: "SQL for Data Science",
        issuer: "Coursera",
        link: "https://www.coursera.org/account/accomplishments/certificate/3SS6R3ZAVNS8",
        isLocal: false,
      },
      {
        title: "Agile Software Development",
        issuer: "Coursera",
        link: "https://www.coursera.org/account/accomplishments/verify/E4X7KF2A4WF3?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
        isLocal: false,
      },
    ],
  },
  {
    year: 2021,
    certificates: [
      {
        title: "Intercultural Fluency",
        issuer: "Pagoda Projects",
        link: "/certificates/pagoda_projects/Intercultural Fluency.pdf",
        isLocal: true,
      },
      {
        title: "Digital Competency",
        issuer: "Pagoda Projects",
        link: "/certificates/pagoda_projects/Digital Competency.pdf",
        isLocal: true,
      },
      {
        title: "Employability Skills",
        issuer: "Pagoda Projects",
        link: "/certificates/pagoda_projects/Employability Skills.pdf",
        isLocal: true,
      },
      {
        title: "Workplace Basics for Graduates",
        issuer: "Pagoda Projects",
        link: "/certificates/pagoda_projects/Workplace Basics for Graduates.pdf",
        isLocal: true,
      },
    ],
  },
  {
    year: 2020,
    certificates: [
      {
        title: "Building Resilience",
        issuer: "LinkedIn",
        link: "/certificates/linkedin/Building Resilience.pdf",
        isLocal: true,
      },
      {
        title: "IoT Foundations: Fundamentals",
        issuer: "LinkedIn",
        link: "/certificates/linkedin/IoT Foundations Fundamentals.pdf",
        isLocal: true,
      },
      {
        title: "Learning Amazon Web Services (AWS) for Developers (2018)",
        issuer: "LinkedIn",
        link: "/certificates/linkedin/Learning Amazon Web Services AWS for Developers 2018 (CompTIA).pdf",
        isLocal: true,
      },
      {
        title: "Supply Chain Basics For Everyone",
        issuer: "LinkedIn",
        link: "/certificates/linkedin/Supply Chain Basics For Everyone.pdf",
        isLocal: true,
      },
      {
        title: "Introduction to TensorFlow in Python",
        issuer: "DataCamp",
        link: "/certificates/datacamp/Introduction to TensorFlow in Python.pdf",
        isLocal: true,
      },
      {
        title: "Machine Learning for Everyone",
        issuer: "DataCamp",
        link: "/certificates/datacamp/Machine Learning for Everyone.pdf",
        isLocal: true,
      },
      {
        title: "Supervised Learning with scikit-learn",
        issuer: "DataCamp",
        link: "/certificates/datacamp/Supervised Learning with scikit-learn.pdf",
        isLocal: true,
      },
      {
        title: "Basic Ladder Logic Interpretation",
        issuer: "Rockwell Automation",
        link: "/certificates/rockwell/Studio 5000 Logix Designer level 3.pdf",
        isLocal: true,
      },
      {
        title: "Basic Ladder Logic Programming",
        issuer: "Rockwell Automation",
        link: "/certificates/rockwell/Studio 5000 Logix Designer level 2.pdf",
        isLocal: true,
      },
      {
        title: "ControlLogix Logix 5000 System Fundamentals",
        issuer: "Rockwell Automation",
        link: "/certificates/rockwell/Studio 5000 Logix Designer level 1.pdf",
        isLocal: true,
      },
      {
        title: "Emotional AI: Facial Key-Points Detection",
        issuer: "Coursera",
        link: "/certificates/Emotional AI Facial Key-Points Detection.pdf",
        isLocal: true,
      },
      {
        title:
          "Challenges and Opportunities for Fresh Graduates - Ufone Master Class",
        issuer: "Ufone",
        link: "/certificates/ufone/Ufone Master Class 5.pdf",
        isLocal: true,
      },
      {
        title: "Google Cloud Essentials",
        issuer: "Google",
        link: "https://www.cloudskillsboost.google/public_profiles/59f8fc09-6fe1-42f9-941f-f5b86e964599/badges/275973",
        isLocal: false,
      },
      {
        title: "Microsoft Excel Essential - Ufone Master Class",
        issuer: "Ufone",
        link: "/certificates/ufone/Ufone Master Class 4.pdf",
        isLocal: true,
      },
      {
        title: "Work Ethics 101 - Ufone Master Class",
        issuer: "Ufone",
        link: "/certificates/ufone/Ufone Master Class 3.pdf",
        isLocal: true,
      },
      {
        title: "Straight Out of Campus - All You Need to Know",
        issuer: "Ufone",
        link: "/certificates/ufone/Ufone Master Class 2.pdf",
        isLocal: true,
      },
      {
        title: "Balancing Work and Life",
        issuer: "LinkedIn",
        link: "/certificates/linkedin/Balancing Work and Life.pdf",
        isLocal: true,
      },
      {
        title: "Data Manipulation with Pandas",
        issuer: "DataCamp",
        link: "/certificates/datacamp/Data Manipulations With Pandas.pdf",
        isLocal: true,
      },
      {
        title: "Introduction to Python",
        issuer: "DataCamp",
        link: "/certificates/datacamp/Introduction To Python.pdf",
        isLocal: true,
      },
      {
        title: "Managing Stress for Positive Change",
        issuer: "LinkedIn",
        link: "/certificates/linkedin/Managing Stress for Positive Change - Project Management Institute (PMI).pdf",
        isLocal: true,
      },
      {
        title: "The Six Morning Habits of High Performers",
        issuer: "LinkedIn",
        link: "/certificates/linkedin/The Six Morning Habits of High Performers.pdf",
        isLocal: true,
      },
    ],
  },
  {
    year: 2019,
    certificates: [
      {
        title: "Major League Hacking's Local Hack Day",
        issuer: "Major League Hacking",
        link: "/certificates/MLH Local Hack Day.pdf",
        isLocal: true,
      },
      {
        title: "3D reconstruction using 3DF ZEPHYR",
        issuer: "National University of Sciences and Technology (NUST)",
        link: "/certificates/3D Construction using 3DF ZEPHYR.pdf",
        isLocal: true,
      },
    ],
  },
];
