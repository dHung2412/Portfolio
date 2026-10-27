export interface ProjectItem {
  id: string;
  setNumber: string;
  title: string;
  description: string;
  piecesCount: number;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  color: "red" | "blue" | "yellow" | "green" | "black";
  highlights: string[];
}

export interface SkillItem {
  name: string;
  category: "data" | "cloud" | "backend" | "frontend" | "tools";
  level: number; // 1 to 4 studs
  color: "red" | "blue" | "yellow" | "green" | "orange";
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  description: string;
  achievements: string[];
  techStack?: string[];
  color: "red" | "blue" | "yellow" | "green";
}

export interface CertificateItem {
  id: string;
  name: string;
  issuer: string;
  issuedDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  badgeNumber: string;
  badgeImage?: string;
  color: "red" | "blue" | "yellow" | "green" | "orange" | "gray";
  skillsCovered?: string[];
}

export const portfolioData = {
  profile: {
    name: "Đặng Ngọc Hưng",
    role: "Data Engineer",
    tagline: "Thiết kế, triển khai và vận hành hạ tầng dữ liệu, pipeline ETL/ELT và nền tảng phân tích đám mây.",
    status: "Looking for work",
    location: "Ha Noi, Viet Nam",
    experienceYears: 1,
    completedProjects: 4,
    cloudCertifications: 3,
    bio: "... (Khu vực nội dung giới thiệu bản thân: Bạn có thể điền thông tin chi tiết về định hướng nghề nghiệp, quá trình học tập và thế mạnh kỹ thuật tại đây trong file src/data/portfolioData.ts)",
    github: "",
    linkedin: "https://www.linkedin.com/in/hưng-đặng-09423a352",
    email: "danghung241204@gmail.com",
  },
  certificates: [
    {
      id: "cert-aws-01",
      name: "AWS Certified Solutions Architect - Associate (SAA-C03)",
      issuer: "Amazon Web Services",
      issuedDate: "19 tháng 10, 2026",
      credentialUrl: "/certificates/AWS%20Certified%20Solutions%20Architect%20-%20Associate%20certificate.pdf",
      badgeNumber: "CERT #AWS-SAA-C03",
      badgeImage: "/certificates/aws-saa-c03-badge.png",
      color: "blue",
    },
    {
      id: "cert-confluent-01",
      name: "Confluent Certified: Data Streaming Engineer Foundations",
      issuer: "Confluent",
      issuedDate: "13 tháng 9, 2026",
      credentialUrl: "https://certificates.confluent.io/3faf7532-2d67-4e8d-8518-5d0546a245c5#acc.B56dXfK4",
      badgeNumber: "CERT #CONFLUENT-01",
      badgeImage: "/certificates/data-streaming-badge.png",
      color: "gray",
    },
    {
      id: "cert-confluent-02",
      name: "Confluent Certified: Data Streaming Engineer - Apache Flink®",
      issuer: "Confluent",
      issuedDate: "13 tháng 9, 2026",
      credentialUrl: "https://certificates.confluent.io/5b275965-5bab-4c30-ad21-0ad69415d055#acc.3GVHkFqa",
      badgeNumber: "CERT #CONFLUENT-02",
      badgeImage: "/certificates/data-streaming-flink-badge.png",
      color: "gray",
    },
  ] as CertificateItem[],
  skills: [
    { name: "Python / PySpark", category: "data", level: 4, color: "yellow" },
    { name: "SQL (Advanced)", category: "data", level: 4, color: "blue" },
    { name: "Apache Spark", category: "data", level: 3, color: "orange" },
    { name: "Apache Airflow", category: "data", level: 3, color: "green" },
    { name: "dbt (data build tool)", category: "data", level: 3, color: "orange" },
    { name: "Delta Lake / Iceberg", category: "data", level: 3, color: "blue" },

    { name: "AWS Glue & Athena", category: "cloud", level: 3, color: "orange" },
    { name: "Amazon S3 Lakehouse", category: "cloud", level: 4, color: "red" },
    { name: "AWS Redshift", category: "cloud", level: 3, color: "blue" },
    { name: "AWS Lambda & EventBridge", category: "cloud", level: 3, color: "orange" },
    { name: "AWS Amplify", category: "cloud", level: 3, color: "yellow" },

    { name: "PostgreSQL", category: "backend", level: 4, color: "blue" },
    { name: "FastAPI / REST API", category: "backend", level: 3, color: "green" },
    { name: "Kafka (Streaming)", category: "backend", level: 2, color: "red" },

    { name: "Next.js 15", category: "frontend", level: 3, color: "blue" },
    { name: "TypeScript", category: "frontend", level: 3, color: "yellow" },
    { name: "Tailwind CSS", category: "frontend", level: 3, color: "blue" },

    { name: "Docker", category: "tools", level: 3, color: "blue" },
    { name: "Git / GitHub Actions", category: "tools", level: 4, color: "red" },
    { name: "Terraform (IaC)", category: "tools", level: 2, color: "green" },
  ] as SkillItem[],
  projects: [
    // Template: duplicate this object for each real project
    {
      id: "set-01",
      setNumber: "SET #0001",
      title: "Tên dự án",
      description: "Mô tả ngắn gọn bài toán, giải pháp và kết quả của dự án.",
      piecesCount: 0,
      tags: ["Python", "Apache Spark", "Airflow"],
      // demoUrl: "https://...",
      // githubUrl: "https://github.com/dHung2412/...",
      color: "blue",
      highlights: [
        "Điểm nổi bật 1 của dự án.",
        "Điểm nổi bật 2 của dự án.",
        "Điểm nổi bật 3 của dự án."
      ]
    }
  ] as ProjectItem[],
  experiences: [
    {
      period: "03/2026 - Hiện tại",
      role: "Data Engineer",
      company: "Công ty TNHH Ami Group",
      description: "Xây dựng, vận hành và tối ưu hóa nền tảng hạ tầng dữ liệu phân tán (Lakehouse), triển khai các pipeline xử lý dữ liệu và hệ thống truy vấn phân tích hiệu năng cao.",
      techStack: ["HDFS", "MinIO", "Iceberg", "Polaris", "Doris", "Airflow", "K8s", "Spark"],
      achievements: [
        "Xây dựng kiến trúc dữ liệu Lakehouse sử dụng Apache Iceberg và Polaris Catalog trên tầng lưu trữ MinIO / HDFS.",
        "Thiết lập và vận hành các tác vụ xử lý dữ liệu phân tán với Apache Spark chạy trên cụm Kubernetes (K8s).",
        "Tự động hóa lịch trình điều phối pipeline qua Apache Airflow và phục vụ truy vấn OLAP hiệu năng cao bằng Apache Doris."
      ],
      color: "blue"
    }
  ] as ExperienceItem[]
};
