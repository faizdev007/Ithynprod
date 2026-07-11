import { Service, CaseStudy, BlogPost, JobOpening, Metric, ExpertProfile } from './types';

export const METRICS: Metric[] = [
  {
    value: "100+",
    label: "Projects Delivered",
    description: "Successfully executed data pipelines, model deployments, and strategic initiatives."
  },
  {
    value: "50+",
    label: "Certified Experts",
    description: "Elite consultants and engineers spanning the UK and strategic delivery centers."
  },
  {
    value: "95%",
    label: "Client Retention Rate",
    description: "A testament to our transparent advisory and reliable execution partnership."
  },
  {
    value: "20+",
    label: "Industries Served",
    description: "Deep domain experience across healthcare, finance, retail, and manufacturing."
  }
];

export const SERVICES: Service[] = [
  {
    id: "data-engineering",
    title: "Data Engineering & Pipelines",
    shortDescription: "Build resilient, high-volume automated data pipelines and robust cloud streaming networks.",
    fullDescription: "A reliable AI system is built on solid data engineering. We design elite enterprise data architectures that ingest, clean, and consolidate chaotic raw systems into high-throughput automated pipeline ecosystems.",
    iconName: "Database",
    features: [
      "Data pipeline design and ingestion systems with Apache Spark and dbt",
      "Robust orchestration and data workflow automation via Airflow",
      "Real-time streaming pipelines with Kafka and cloud-native solutions",
      "Automated data lineage and lineage mapping for regulatory compliance"
    ],
    deliverables: [
      "Target State Data Architecture Blueprint",
      "Production ETL/Data Pipelines with full CI/CD deployment",
      "Automated Data Lineage & Quality Dashboards"
    ],
    useCase: "Ideal for enterprises suffering from brittle pipelines, data silos, or high cloud-compute storage costs."
  },
  {
    id: "data-etl-extraction",
    title: "Data ETL & Extraction",
    shortDescription: "Extract and transform structured and unstructured records with automated validation layers.",
    fullDescription: "We construct high-performance ETL and ELT ingestion systems designed for flawless data extraction. Our pipelines safely pull from complex relational tables, legacy systems, and public APIs, converting raw values into standardized, queryable schemas.",
    iconName: "Cloud",
    features: [
      "Custom Extraction adapters for complex relational DBs and APIs",
      "High-performance ETL pipeline architectures for structured datasets",
      "Automated schema mapping, deduplication, and anomaly filters",
      "Modern lakehouse transformation with Delta Lake and Iceberg open formats"
    ],
    deliverables: [
      "Custom Data Extraction Pipeline adapters",
      "Operational Data ETL transformations with dbt",
      "Schema-level automated validation frameworks"
    ],
    useCase: "Ideal for businesses needing to unlock data trapped in siloed legacy systems or complex third-party SaaS tools."
  },
  {
    id: "discovery-modeling",
    title: "Discovery & Modeling",
    shortDescription: "Discover hidden relation layers and build custom predictive and mathematical models.",
    fullDescription: "Unlock the physics of your business. We lead comprehensive data discovery workshops to map hidden assets, and construct advanced modeling layers that translate relational schemas into highly accurate predictive forecasts.",
    iconName: "Cpu",
    features: [
      "Data discovery mapping and legacy data cataloging processes",
      "Custom mathematical and scientific modeling of operational systems",
      "Predictive modeling and propensity scoring pipelines",
      "Machine learning models for demand forecasting and customer metrics"
    ],
    deliverables: [
      "Enterprise Data Catalog & Discovery Map",
      "Predictive Forecast and Modeling Pipelines",
      "Model Evaluation and Validation reports"
    ],
    useCase: "Ideal for companies needing to mathematically understand user churn, forecast inventory demands, or identify operational friction."
  },
  {
    id: "ai-genai",
    title: "AI & GenAI Solutions",
    shortDescription: "Deploy secure sovereign Large Language Models, cognitive agents, and custom RAG engines.",
    fullDescription: "Bridge the gap from research to production value. We build custom Artificial Intelligence (AI) and Generative AI (GenAI) engines, specializing in private Retrieval-Augmented Generation (RAG) and multi-agent orchestrations with strict privacy guardrails.",
    iconName: "Sparkles",
    features: [
      "Enterprise RAG systems with hybrid vector search and semantic re-ranking",
      "Sovereign AI agent orchestration using LangChain and LlamaIndex",
      "Secure LLM API gateways and custom enterprise prompt repositories",
      "Fine-tuning open-weight models for sensitive clinical and compliance sectors"
    ],
    deliverables: [
      "Sovereign RAG Search and GenAI Assistant",
      "Continuous Synthetic Evaluation frameworks",
      "Enterprise-wide LLM Guardrail structures"
    ],
    useCase: "Ideal for industries requiring conversational insights over private PDF corpuses, contract suites, or complex wikis."
  },
  {
    id: "insights-bi",
    title: "Insights & Business Intelligence",
    shortDescription: "Compile unified semantic layers, boardroom insights, and executive BI dashboards.",
    fullDescription: "Turn database records into strategic board decisions. We architect central semantic layers that unify your business logic, delivering high-impact Insights and modern Business Intelligence (BI) dashboards that make multi-faceted analytics simple and action-ready.",
    iconName: "BarChart3",
    features: [
      "Unified semantic modeling using dbt Semantic Layer and LookML",
      "High-fidelity executive dashboards via PowerBI and Looker",
      "Self-service BI setup and interactive custom charting",
      "Advanced cohort analysis and regulatory-audit report generation"
    ],
    deliverables: [
      "Centralized Semantic layer codebase",
      "Suite of boardroom-ready Insights dashboards",
      "KPI dictionary and training enablement logs"
    ],
    useCase: "Ideal for high-growth enterprises that require a single-source-of-truth semantic reporting setup for board members."
  },
  {
    id: "managed-delivery",
    title: "Managed Delivery (Scaled Engineering)",
    shortDescription: "Acquire scaled resource delivery supported by our certified engineering squads.",
    fullDescription: "ITHYN provides strategic direction and high-level architectural oversight, backed by our core engineering delivery squads. Through this hybrid model, we provide clients with deep technical resources, scalable sprint teams, and round-the-clock implementation support.",
    iconName: "Users",
    features: [
      "Strategic advisory paired with rapid, flexible engineering staff scaling",
      "Dedicated agile sprint pods containing solution architects, data engineers, and QAs",
      "Rigorous technical review processes backed by our certified delivery squads",
      "Seamless long-term operational handovers and post-launch maintenance plans"
    ],
    deliverables: [
      "Comprehensive Delivery Roadmap with clear sprint checkpoints",
      "Dedicated, fully-managed technical engineering pods",
      "SLA-managed operations and application support"
    ],
    useCase: "Ideal for organizations that have clear strategic vision but lack the internal engineering capacity to build and scale systems rapidly."
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "manufacturing-analytics-platform",
    title: "Enabling Scalable Manufacturing Analytics",
    client: "Global Manufacturing Analytics Leader",
    industry: "Manufacturing Analytics",
    brief: "Expanded and modernized an enterprise manufacturing analytics platform by migrating legacy infrastructure, implementing scalable data pipelines, and providing dedicated engineering support for global manufacturing customers.",
    challenge: "Rapid business growth placed significant pressure on the client's analytics platform. Legacy infrastructure limited scalability, while increasing customer demands required continuous platform enhancements, reliable data processing, and dedicated technical expertise without expanding internal engineering teams.",
    solution: "We partnered as an extended engineering team to modernize the platform by migrating core services from MongoDB to Apache Kafka and PostgreSQL. Custom manufacturing analytics solutions and prototypes were developed for enterprise customers while providing ongoing platform upgrades, troubleshooting, and client-specific customizations across Azure and Google Cloud environments.",
    results: [
      "Enabled a scalable analytics platform supporting growing manufacturing operations.",
      "Unified data pipelines across multiple factories for reliable enterprise analytics.",
      "Improved customer experience through enhanced platform performance and usability.",
      "Accelerated business expansion with a dedicated engineering partnership."
    ],
    metrics: [
      { value: "Multi-Factory", label: "Scalable Analytics" },
      { value: "24/7", label: "Engineering Support" },
      { value: "Cloud-Native", label: "Platform Modernization" }
    ],
    technologies: [
      "Apache Kafka",
      "Python",
      "PostgreSQL",
      "MongoDB",
      "Microsoft Azure",
      "Google Cloud Platform"
    ],
    imagePlaceholder: "Manufacturing analytics platform architecture with Apache Kafka streaming, cloud data pipelines, factory analytics dashboards, enterprise visualization"
  },
  {
    id: "snowflake-talend-migration",
    title: "Snowflake Cloud Data Warehouse Migration",
    client: "Leading Waste Management & Recycling Company",
    industry: "Waste Management & Recycling",
    brief: "Modernized a legacy Talend ETL environment by rebuilding data pipelines natively in Snowflake, enabling real-time analytics, cloud scalability, and significant infrastructure cost savings.",
    challenge: "The client relied on aging Talend ETL pipelines for recycling bins, fleet, and weighbridge platforms. Batch-only processing introduced multi-hour reporting delays, infrastructure costs continued to rise, and limited scalability prevented real-time operational insights. Pipeline failures also required frequent manual intervention due to the lack of monitoring and self-healing capabilities.",
    solution: "We performed a complete assessment of the existing Talend environment, mapping all ETL jobs, transformation logic, and data sources before designing a Snowflake-native architecture. Legacy Talend transformations were rebuilt using Snowflake Streams, Tasks, Snowpipe, and dbt models with integrated data quality validation and audit logging. A parallel-run migration strategy ensured row-level validation, zero data loss, and a seamless cutover with rollback capability.",
    results: [
      "Delivered 10× faster query performance with sub-second analytics on live operational data.",
      "Enabled real-time data availability using Snowpipe, providing a single live dataset for finance and operations.",
      "Reduced infrastructure and maintenance costs by 60% after migrating from on-premise Talend workloads.",
      "Completed migration with zero data loss through parallel validation and controlled cutover."
    ],
    metrics: [
      { value: "10×", label: "Query Performance" },
      { value: "60%", label: "Infrastructure Cost Reduction" },
      { value: "Real-Time", label: "Data Availability" }
    ],
    technologies: [
      "Snowflake",
      "Talend",
      "Snowpipe",
      "Snowflake Streams",
      "Snowflake Tasks",
      "dbt",
      "SQL",
      "Cloud Data Warehouse"
    ],
    imagePlaceholder: "Snowflake cloud data warehouse migration with ETL pipelines, real-time data ingestion, modern enterprise analytics architecture, blue and white cloud visualization"
  },
  {
    id: "talend-waste-data-integration",
    title: "Talend Data Integration for Commercial Waste Services",
    client: "Leading Waste Management & Recycling Company",
    industry: "Waste Management & Recycling",
    brief: "Designed and implemented an end-to-end Talend ETL platform that unified recycling bin scheduling, fleet management, and weighbridge systems, automating reconciliation, invoicing, and operational reporting.",
    challenge: "The client operated three disconnected business platforms for recycling bin scheduling, fleet management, and weighbridge operations. Manual reconciliation created frequent billing errors, finance lacked a unified data source, invoice generation took days after weighbridge closure, and there was no audit trail or automated exception handling for resolving disputes.",
    solution: "We built a centralized Talend ETL pipeline that simultaneously extracted data from SQL Server, Oracle, and flat-file sources using tSQLServerInput, tOracleInput, and tFileInputDelimited. Business rules and reconciliation logic were implemented using tMap, tFilterRow, and tAggregateRow to validate weighbridge records and reconcile fleet operations. Process orchestration was automated with tRunJob, while data was loaded into the accounting system via tSQLServerOutput. Comprehensive audit logging and exception notifications were implemented using tLogRow and tSendMail to ensure complete process visibility.",
    results: [
      "Increased total records processed automatically by 21%, significantly reducing manual intervention.",
      "Reduced reconciliation effort by 27% through fully automated Talend workflows.",
      "Accelerated invoice generation from days to minutes after weighbridge closure, improving cash flow.",
      "Established a complete audit trail with automated exception alerts for faster billing dispute resolution."
    ],
    metrics: [
      { value: "+21%", label: "Automated Record Processing" },
      { value: "-27%", label: "Reconciliation Effort" },
      { value: "Days → Minutes", label: "Invoice Processing Time" }
    ],
    technologies: [
      "Talend",
      "SQL Server",
      "Oracle",
      "ETL",
      "tMap",
      "tFilterRow",
      "tAggregateRow",
      "tRunJob",
      "tSQLServerOutput",
      "tLogRow",
      "tSendMail"
    ],
    imagePlaceholder: "Talend ETL architecture connecting fleet management, recycling bin scheduling, weighbridge systems, and accounting platform with automated data reconciliation and enterprise workflow visualization"
  },
  {
    id: "plantbot-ai-analytics",
    title: "AI-Powered Plant Operations Assistant",
    client: "Global Manufacturing Analytics Leader",
    industry: "Manufacturing AI & Industrial Automation",
    brief: "Developed an Azure OpenAI-powered Microsoft Teams chatbot that enables plant managers to retrieve production insights and KPI visualizations using natural language.",
    challenge: "Plant managers relied on manual dashboard creation and complex data analysis to monitor production performance. The absence of an intelligent conversational interface delayed operational decisions and reduced overall productivity across manufacturing facilities.",
    solution: "We developed Plantbot, an AI-powered Microsoft Teams chatbot built with Azure OpenAI, Python, and Flask. The solution supports natural language queries, retrieves equipment and facility KPIs across different time periods, and delivers embedded dashboards and real-time visualizations directly within Microsoft Teams.",
    results: [
      "Eliminated dependency on manual analysis and dashboard creation.",
      "Improved operational efficiency through AI-driven conversations and automated visualizations.",
      "Enhanced collaboration among plant managers with Microsoft Teams integration.",
      "Delivered real-time production insights within one month of implementation."
    ],
    metrics: [
      { value: "Real-Time", label: "Production Insights" },
      { value: "1 Month", label: "Solution Delivery" },
      { value: "AI-Powered", label: "Natural Language Analytics" }
    ],
    technologies: [
      "Azure OpenAI",
      "Python",
      "Flask",
      "SQL",
      "Power Automate",
      "Azure DevOps",
      "Azure Blob Storage",
      "Matplotlib",
      "Microsoft Teams"
    ],
    imagePlaceholder: "AI chatbot for manufacturing operations with Microsoft Teams, Azure OpenAI, production dashboards, industrial analytics interface"
  }
];

export const TECH_ECOSYSTEM = [
  { name: "Databricks", category: "Data Lakehouse" },
  { name: "Snowflake", category: "Modern Data Warehouse" },
  { name: "AWS", category: "Cloud Hyperscaler" },
  { name: "Azure", category: "Cloud Hyperscaler" },
  { name: "Google Cloud", category: "Cloud Hyperscaler" },
  { name: "OpenAI", category: "AI Models" },
  { name: "Anthropic", category: "AI Models" },
  { name: "LangChain", category: "Generative AI Orchestration" },
  { name: "Apache Spark", category: "Compute Engine" },
  { name: "Airflow", category: "Data Orchestration" },
  { name: "PostgreSQL", category: "Relational Database" }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "future-of-data-lakehouses",
    title: "The Future of Data Lakehouses: Standardizing on Apache Iceberg in 2026",
    author: {
      name: "Marcus Sterling",
      role: "Managing Director at ITHYN",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120"
    },
    date: "June 28, 2026",
    category: "Data Engineering",
    readTime: "7 min read",
    summary: "An in-depth look at how the battle for open table formats is resolving, and why your enterprise should plan to standardize metadata using Apache Iceberg.",
    content: [
      "The division between data warehouses and data lakes is rapidly evaporating. For years, organizations were forced to choose between the swift, structured queries of relational databases and the raw, inexpensive storage of object lakes. The Lakehouse architecture solved this, but it introduced a new friction point: table formats.",
      "Entering 2026, Apache Iceberg has achieved a critical tipping point in the enterprise. With native support from major players including both Snowflake and Databricks, Iceberg provides a truly vendor-agnostic semantic layer. This allows companies to query the exact same files from different compute engines without duplicating storage.",
      "In this article, we break down the performance trade-offs, security implications, and a tactical migration strategy designed to transition legacy parquet directories into production-grade Iceberg tables.",
      "We outline how our engineering teams have implemented this transition for global retail organizations, yielding an average of 40% reduction in compute workloads and eliminating vendor lock-in entirely."
    ],
    tags: ["Data Engineering", "Apache Iceberg", "Databricks", "Snowflake"]
  },
  {
    id: "evaluating-rag-hallucinations",
    title: "Beyond Accuracy: A Practical Guide to Evaluating RAG Hallucinations in Clinical Spaces",
    author: {
      name: "Dr. Sarah Jenkins",
      role: "Director of Cognitive Systems",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120"
    },
    date: "May 14, 2026",
    category: "Generative AI",
    readTime: "11 min read",
    summary: "How to design quantitative evaluations for sovereign LLM applications in highly regulated industries. Standard accuracy checks are no longer enough.",
    content: [
      "When deploying Retrieval-Augmented Generation (RAG) in clinical trials or pharmaceutical research, generic evaluations are not just insufficient—they are dangerous. A standard LLM evaluation might give a system a high score if it sounds convincing, but in life sciences, hallucinating a single chemical binder can compromise years of clinical study.",
      "We advocate for a multi-dimensional evaluation framework that splits RAG system performance into three distinct metrics: Context Relevance, Groundedness (Faithfulness), and Answer Relevance.",
      "By scoring each of these metrics programmatically using automated synthetic evaluation sets, we can establish continuous integration (CI) pipelines for our LLM applications, catching regressions in model behavior long before they hit researcher desktops.",
      "Discover the open-source evaluation packages we recommend, how we deploy secure guardrail gates in Azure, and how our strategic partnerships keep systems compliant with UK MHRA guidelines."
    ],
    tags: ["Generative AI", "RAG", "LLM Evaluation", "Healthcare"]
  },
  {
    id: "scaling-technical-delivery",
    title: "Strategic Advisory Meets Scaled Delivery: The ITHYN Engineering Model",
    author: {
      name: "Edward Harrison",
      role: "VP of Strategic Partnerships",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=120"
    },
    date: "April 02, 2026",
    category: "Insights",
    readTime: "5 min read",
    summary: "Why traditional consulting is broken, and how a hybrid strategic-advisory and dedicated-delivery model ensures projects actually cross the finish line.",
    content: [
      "Historically, organizations hiring Data or AI support faced an unpleasant choice. On one side stood expensive boutique advisory firms, delivering beautiful strategic slide decks that ultimately gathered dust. On the other side stood pure outsourcing resource mills, throwing bodies at codebases without strategic direction, leading to over-engineered or misaligned systems.",
      "We believe there is a better way. At ITHYN, we focus intensely on strategic design, compliance guardrails, target state data architecture, and executive alignment. Then, we coordinate directly with our certified engineering squads to bring this strategy to life.",
      "Our engineering units supply deep, certified squads that scale dynamically to meet project sprint schedules. This keeps advisory overhead low while supplying clients with the immense technical muscle required for enterprise integrations.",
      "In this post, we discuss how this dual structure operates in practice, how we maintain unified accountability, and why it consistently saves our clients up to 35% in total implementation costs."
    ],
    tags: ["Partnership", "Managed Delivery", "Strategic Advisory", "B2B Delivery"]
  }
];

export const TESTIMONIALS = [
  {
    quote: "ITHYN didn't just give us a strategy deck. Together with their engineering delivery team, they embedded a functional, certified squad that rebuilt our customer pipeline in three months. Our average order value has climbed month-over-month.",
    author: "Caroline Vance",
    role: "Chief Technology Officer",
    company: "Prestige Brands UK"
  },
  {
    quote: "Data sovereignty in medical biotech is non-negotiable. ITHYN designed a secure private RAG assistant that safely index clinical documents in our own Azure tenant. The compliance guardrails and hallucination checks are state-of-the-art.",
    author: "Dr. Alistair Vance",
    role: "Head of Computational Medicine",
    company: "BioPharma Laboratories UK"
  },
  {
    quote: "Having strategic advice paired immediately with scaled delivery meant we bypassed months of procurement. We unified 12 ledger databases into a real-time anomaly system that scans 10 million transactions a day.",
    author: "Gareth Rowe",
    role: "Director of Compliance & Security",
    company: "Capital Integrity Group"
  }
];

export const JOB_OPENINGS: JobOpening[] = [
  {
    id: "snr-data-eng",
    title: "Senior Data & Analytics Engineer",
    department: "Data Engineering",
    location: "London, UK (Hybrid - 2 Days in Office)",
    type: "Full-Time",
    compensation: "£85,000 - £105,000 + Equity & Pension",
    summary: "We are seeking an experienced Data Engineer to lead the design and implementation of modern Lakehouse structures utilizing Databricks, Snowflake, and dbt. You will work alongside our enterprise advisory team and coordinate with our certified engineering squads to deliver reliable pipelines.",
    responsibilities: [
      "Design, implement, and optimize scalable, automated ETL/ELT pipelines in AWS/Azure.",
      "Build modular dbt semantic models that represent the golden source of truth for business intelligence dashboards.",
      "Perform technical reviews of engineering plans prepared by external partners and ensure highest standards of code lineage and documentation.",
      "Mentor mid-level developers and assist in client-facing technical workshops."
    ],
    requirements: [
      "4+ years of professional experience in Data Engineering, ideally within a consulting environment.",
      "Deep expertise with SQL, Python, and modern data platforms (Snowflake or Databricks is mandatory).",
      "Demonstrated experience setting up orchestration layers using Apache Airflow, Prefect, or Dagster.",
      "Solid understanding of software engineering fundamentals (Git, CI/CD, unit testing SQL code)."
    ],
    benefits: [
      "Competitive salary and performance-linked bonus scheme.",
      "Comprehensive private medical insurance and Bupa healthcare.",
      "Generous training allowance and fully covered platform certifications (Databricks, Snowflake).",
      "Premium office space in Central London with state-of-the-art equipment."
    ]
  },
  {
    id: "lead-ai-arch",
    title: "Lead Generative AI Architect",
    department: "Cognitive Solutions",
    location: "London, UK (Remote Eligible / Hybrid Optional)",
    type: "Full-Time",
    compensation: "£100,000 - £125,000 + Performance Bonus",
    summary: "As our Lead AI Architect, you will spearhead our client engagements surrounding secure Large Language Model applications. You will design hybrid RAG patterns, agentic orchestrations, and secure enterprise API wrappers.",
    responsibilities: [
      "Serve as the primary technical authority on client Generative AI engagements, aligning business requirements with optimal model architectures.",
      "Implement production-ready RAG architectures integrating state-of-the-art vector stores, re-ranking algorithms, and tokenization techniques.",
      "Establish automated evaluation frameworks to track model safety, groundedness, and hallucination metrics.",
      "Represent ITHYN in executive-level strategic advisory workshops regarding corporate AI safety policy and vendor selection."
    ],
    requirements: [
      "Proven track record of deploying machine learning models or cognitive APIs to production.",
      "Hands-on experience with LLM orchestration tooling (LangChain, LlamaIndex, or Semantic Kernel).",
      "Strong coding proficiency in Python, including libraries like PyTorch, NumPy, and Hugging Face Ecosystem.",
      "Excellent communication skills; ability to convey advanced mathematical or architectural topics to non-technical executives."
    ],
    benefits: [
      "Substantial strategic equity allocation.",
      "Flexible, remote-first working arrangements.",
      "Access to premium compute clusters and cloud-lab environments.",
      "28 days annual leave + UK Bank Holidays."
    ]
  },
  {
    id: "delivery-lead",
    title: "Technical Delivery Lead (Engineering Support)",
    department: "Project Management",
    location: "London, UK (Hybrid - 3 Days in Office)",
    type: "Contract or Full-Time",
    compensation: "£75,000 - £90,000 or Competitive Day Rate",
    summary: "We are looking for a hybrid delivery manager who understands the technical nuances of Data & AI projects. You will act as the crucial link coordinating ITHYN's strategic consultants, our enterprise clients, and our engineering squads.",
    responsibilities: [
      "Manage project timelines, agile backlogs, and resource allocations across active data consulting projects.",
      "Coordinate directly with the engineering technical leads to monitor sprint velocity, deliverable sign-offs, and QA validation.",
      "Prepare clear, data-backed status reports for client steering committees and project sponsors.",
      "Proactively manage risks, dependencies, and potential technical blockers before they impact deliverable targets."
    ],
    requirements: [
      "3+ years managing technical software engineering or data platform projects, preferably with a consulting firm.",
      "Solid baseline familiarity with modern data stacks (you don't need to write code, but you must know what Snowflake, Spark, and APIs do).",
      "Experience working with hybrid onshore/offshore or partner-delivery teams.",
      "Certified in Scrum/Agile practices (CSM, PMI-ACP, or equivalent)."
    ],
    benefits: [
      "Engaging variety of projects with high-growth enterprise clients.",
      "Strong paths to career progression into strategic client leadership.",
      "Annual wellness grant and mental health support programs.",
      "Company-wide socials, guest-speaker events, and annual retreats."
    ]
  }
];

export const EXPERTS: ExpertProfile[] = [
  {
    id: 'exp-1',
    name: 'Dr. Evelyn Carter',
    title: 'Principal AI Architect & LLM Engineer',
    experience: '12+ Years',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150',
    location: 'London, UK (Hybrid)',
    certifications: ['AWS Certified Machine Learning', 'Google Cloud Professional ML Engineer', 'NVIDIA Deep Learning Certified'],
    skills: ['RAG Pipeline Engineering', 'Multi-Agent Orchestration', 'LLM Fine-Tuning', 'Vector Databases (Milvus, pgvector)', 'Cognitive Systems'],
    availability: 'Immediate',
    hourlyRateEst: '£165/hr',
    techStack: ['OpenAI', 'Anthropic', 'LangChain', 'LlamaIndex', 'Python', 'PostgreSQL', 'AWS']
  },
  {
    id: 'exp-2',
    name: 'James Henderson',
    title: 'Senior Data Platform Architect',
    experience: '9 Years',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150',
    location: 'London, UK (Hybrid)',
    certifications: ['Databricks Solutions Architect Champion', 'Snowflake Certified Elite Architect', 'dbt Analytics Engineering Certification'],
    skills: ['Modern Lakehouse Design', 'dbt Semantic Modeling', 'High-volume ETL/ELT pipelines', 'Apache Spark compute optimization'],
    availability: '1 Week',
    hourlyRateEst: '£145/hr',
    techStack: ['Databricks', 'Snowflake', 'dbt', 'Apache Spark', 'Airflow', 'AWS', 'Python']
  },
  {
    id: 'exp-3',
    name: 'Rajesh Nair',
    title: 'Lead MLOps & Cloud Infrastructure Specialist',
    experience: '10 Years',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
    location: 'Manchester, UK (Remote)',
    certifications: ['Kubernetes Administrator (CKA)', 'Google Cloud Professional Cloud Architect', 'Terraform Certified Associate'],
    skills: ['Kubeflow & MLflow systems', 'CI/CD Pipeline Automation', 'Infrastructure-as-Code (IaC)', 'Sovereign private tenant hardening'],
    availability: '2 Weeks',
    hourlyRateEst: '£135/hr',
    techStack: ['Google Cloud', 'AWS', 'Kubernetes', 'MLflow', 'Terraform', 'PostgreSQL', 'Python']
  },
  {
    id: 'exp-4',
    name: 'Sophia Sterling',
    title: 'Lead Analytics Engineer & BI Consultant',
    experience: '7 Years',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150',
    location: 'London, UK (Hybrid)',
    certifications: ['Snowflake SnowPro Core Certified', 'Looker Certified LookML Developer', 'PowerBI Certified Professional'],
    skills: ['Enterprise-grade semantic layouts', 'Cohort and Churn Analytics', 'Executive Dashboard design', 'dbt Core and dbt Cloud workflows'],
    availability: 'Immediate',
    hourlyRateEst: '£115/hr',
    techStack: ['Snowflake', 'dbt', 'Looker', 'PowerBI', 'PostgreSQL', 'Airflow', 'Python']
  },
  {
    id: 'exp-5',
    name: 'Markus Vance',
    title: 'Senior Big Data & Real-time Streaming Engineer',
    experience: '8 Years',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150',
    location: 'Bristol, UK (Remote)',
    certifications: ['Confluent Certified Developer for Apache Kafka', 'Databricks Certified Data Engineer Professional'],
    skills: ['Real-time Event Streaming', 'Schema Registry Governance', 'Change-Data-Capture (CDC)', 'Apache Flink Stream processing'],
    availability: '4 Weeks',
    hourlyRateEst: '£140/hr',
    techStack: ['Apache Kafka', 'Databricks', 'Apache Spark', 'AWS', 'Python', 'PostgreSQL', 'Terraform']
  }
];
