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
  color: "red" | "blue" | "yellow" | "green" | "orange";
  skillsCovered?: string[];
}

export const portfolioData = {
  profile: {
    name: "Đặng Ngọc Hưng (Deck)",
    role: "Data Platform Engineer",
    tagline: "Thiết kế, triển khai và vận hành hạ tầng dữ liệu, pipeline ETL/ELT và nền tảng phân tích đám mây.",
    status: "Đang nhận dự án mới",
    location: "Hà Nội, Việt Nam",
    experienceYears: 1,
    completedProjects: 8,
    cloudCertifications: 2,
    bio: "... (Khu vực nội dung giới thiệu bản thân: Bạn có thể điền thông tin chi tiết về định hướng nghề nghiệp, quá trình học tập và thế mạnh kỹ thuật tại đây trong file src/data/portfolioData.ts)",
    github: "",
    linkedin: "https://www.linkedin.com/in/hưng-đặng-09423a352",
    email: "danghung241204@gmail.com",
  },
  certificates: [
    {
      id: "cert-confluent-01",
      name: "Confluent Certified: Data Streaming Engineer Foundations",
      issuer: "Confluent",
      issuedDate: "13 tháng 9, 2026",
      credentialUrl: "https://certificates.confluent.io/3faf7532-2d67-4e8d-8518-5d0546a245c5#acc.B56dXfK4",
      badgeNumber: "CERT #CONFLUENT-01",
      badgeImage: "/certificates/data-streaming-badge.png",
      color: "blue",
    },
    {
      id: "cert-confluent-02",
      name: "Confluent Certified: Data Streaming Engineer - Apache Flink®",
      issuer: "Confluent",
      issuedDate: "13 tháng 9, 2026",
      credentialUrl: "https://certificates.confluent.io/5b275965-5bab-4c30-ad21-0ad69415d055#acc.3GVHkFqa",
      badgeNumber: "CERT #CONFLUENT-02",
      badgeImage: "/certificates/data-streaming-flink-badge.png",
      color: "blue",
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
    {
      id: "set-01",
      setNumber: "SET #1021",
      title: "Hạ Tầng Lakehouse & Pipeline Xử Lý Dữ Liệu Tự Động",
      description: "Hệ thống thu thập dữ liệu đa nguồn, chuẩn hóa và lưu trữ theo định dạng Parquet/Delta Lake trên Amazon S3 điều phối bằng Apache Airflow.",
      piecesCount: 420,
      tags: ["Python", "Apache Spark", "AWS S3", "Airflow", "Delta Lake"],
      demoUrl: "https://example.com/demo1",
      githubUrl: "https://github.com/example/data-lakehouse",
      color: "blue",
      highlights: [
        "Xử lý hơn 5 triệu bản ghi giao dịch mỗi ngày với Spark batch jobs.",
        "Thiết lập cơ chế kiểm tra chất lượng dữ liệu (Data Quality Checks) qua Great Expectations.",
        "Tối ưu chi phí lưu trữ S3 Lifecycle Policies."
      ]
    },
    {
      id: "set-02",
      setNumber: "SET #2045",
      title: "Hệ Thống Phân Tích Dữ Liệu Thời Gian Thực",
      description: "Pipeline xử lý luồng dữ liệu log hệ thống và sự kiện người dùng sử dụng AWS Lambda, Kinesis Data Streams và lưu trữ trên AWS OpenSearch.",
      piecesCount: 310,
      tags: ["AWS Lambda", "Kinesis", "Python", "OpenSearch", "CloudWatch"],
      demoUrl: "https://example.com/demo2",
      githubUrl: "https://github.com/example/realtime-pipeline",
      color: "red",
      highlights: [
        "Độ trễ xử lý luồng sự kiện dưới 1.5 giây từ nguồn phát.",
        "Thiết lập cảnh báo tự động qua Amazon SNS khi phát hiện dữ liệu dị biệt.",
        "Quản lý hạ tầng bằng mã nguồn Terraform."
      ]
    },
    {
      id: "set-03",
      setNumber: "SET #3089",
      title: "Data Mart & Báo Cáo Phân Tích với dbt & PostgreSQL",
      description: "Mô hình hóa dữ liệu dạng Star Schema phục vụ báo cáo BI doanh nghiệp, tự động hóa kiểm thử tính toàn vẹn dữ liệu.",
      piecesCount: 280,
      tags: ["dbt", "PostgreSQL", "SQL", "Metabase", "GitHub Actions"],
      demoUrl: "https://example.com/demo3",
      githubUrl: "https://github.com/example/dbt-analytics",
      color: "yellow",
      highlights: [
        "Xây dựng hơn 30 data models phục vụ phân tích các chỉ số doanh thu và retention.",
        "Tích hợp dbt test vào pipeline CI/CD trước khi cập nhật dữ liệu sản xuất.",
        "Tự động sinh tài liệu Data Catalog và Data Lineage."
      ]
    },
    {
      id: "set-04",
      setNumber: "SET #4012",
      title: "Cổng Quản Trị & Giám Sát Dữ Liệu Nội Bộ",
      description: "Ứng dụng web nội bộ cho phép đội ngũ phân tích theo dõi trạng thái các luồng dữ liệu (Data Pipelines) và tra cứu siêu dữ liệu (Metadata).",
      piecesCount: 350,
      tags: ["Next.js", "TypeScript", "AWS Amplify", "Tailwind CSS", "FastAPI"],
      demoUrl: "https://example.com/demo4",
      githubUrl: "https://github.com/example/data-portal",
      color: "green",
      highlights: [
        "Triển khai trên AWS Amplify Hosting với quy trình CI/CD tích hợp GitHub.",
        "Giao diện trực quan hóa trạng thái DAG của Airflow qua REST API.",
        "Xác thực người dùng nội bộ an toàn."
      ]
    }
  ] as ProjectItem[],
  experiences: [
    {
      period: "2025 - Hiện tại",
      role: "Data Platform Engineer",
      company: "Data & Cloud Engineering Group",
      description: "Thiết kế, xây dựng và vận hành các pipeline dữ liệu quy mô lớn, tối ưu hóa kho dữ liệu và hỗ trợ đội ngũ Business Intelligence.",
      achievements: [
        "Xây dựng pipeline ingestion tự động thu thập dữ liệu từ 6 nguồn cơ sở dữ liệu về S3 Data Lake.",
        "Tối ưu thời gian chạy các truy vấn SQL phân tích giảm trung bình 35% trên PostgreSQL/Athena.",
        "Đóng gói các tác vụ xử lý dữ liệu bằng Docker container và quản lý luồng bằng Airflow."
      ],
      color: "blue"
    },
    {
      period: "2024 - 2025",
      role: "Associate Data Engineer / Cloud Intern",
      company: "Tech Solutions Vietnam",
      description: "Tham gia phát triển các script ETL xử lý dữ liệu với Python, viết các câu lệnh SQL biến đổi dữ liệu và hỗ trợ vận hành dịch vụ đám mây AWS.",
      achievements: [
        "Viết hơn 20 script Python xử lý và làm sạch dữ liệu tự động thay thế quy trình thủ công.",
        "Đạt chứng chỉ AWS Certified Data Engineer và Databricks Spark Developer.",
        "Phối hợp xây dựng dashboard giám sát dữ liệu nội bộ bằng Next.js."
      ],
      color: "yellow"
    }
  ] as ExperienceItem[],
  assemblySteps: [
    {
      step: 1,
      title: "Thu Thập Dữ Liệu (Data Ingestion)",
      content: "Thu thập dữ liệu từ các hệ thống nguồn (RDBMS, NoSQL, API bên thứ ba, Event Logs) vào vùng lưu trữ thô (Raw / Bronze Zone) trên Amazon S3."
    },
    {
      step: 2,
      title: "Làm Sạch & Chuẩn Hóa (Processing & Transformation)",
      content: "Sử dụng Apache Spark, PySpark và dbt để làm sạch, loại bỏ bản ghi lỗi, chuẩn hóa kiểu dữ liệu và chuyển đổi sang vùng Silver Zone."
    },
    {
      step: 3,
      title: "Mô Hình Hóa Dữ Liệu (Data Modeling / Gold Zone)",
      content: "Tổ chức dữ liệu theo mô hình hình sao (Star Schema) hoặc Data Mart, phục vụ cho các truy vấn phân tích nghiệp vụ với độ trễ thấp."
    },
    {
      step: 4,
      title: "Giám Sát & Quản Trị (Governance & Monitoring)",
      content: "Theo dõi trạng thái các luồng dữ liệu, kiểm soát chất lượng dữ liệu (Data Quality), và bảo mật truy cập dữ liệu theo vai trò."
    }
  ]
};
