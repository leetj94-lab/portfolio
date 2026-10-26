/* Public narrative and contribution labels. Each experience appears once in the work overview. */
const contributionLabels = {
  "delivery": {
    "roles": [
      {
        "en": "Backend",
        "ko": "백엔드"
      },
      {
        "en": "Frontend",
        "ko": "프런트엔드"
      },
      {
        "en": "AWS delivery",
        "ko": "AWS 배포"
      },
      {
        "en": "Process design",
        "ko": "업무 설계"
      }
    ],
    "cardProof": {
      "en": "Direct submission → automated validation → engineering approval",
      "ko": "업체 직접 제출 → 자동 검수 → 엔지니어 승인"
    }
  },
  "master-data": {
    "roles": [
      {
        "en": "Data standards",
        "ko": "데이터 표준"
      },
      {
        "en": "Process design",
        "ko": "업무 설계"
      },
      {
        "en": "Python / SQL",
        "ko": "Python · SQL"
      },
      {
        "en": "Integration",
        "ko": "시스템 연계"
      }
    ],
    "cardProof": {
      "en": "87% less registration time · discrepancies 17% → 0%",
      "ko": "등록 업무 시간 87% 감소 · 불일치율 17% → 0%"
    }
  },
  "digital-twin": {
    "roles": [
      {
        "en": "Frontend",
        "ko": "프런트엔드"
      },
      {
        "en": "Backend",
        "ko": "백엔드"
      },
      {
        "en": "Integration",
        "ko": "시스템 연계"
      },
      {
        "en": "On-premises delivery",
        "ko": "사내 배포"
      }
    ],
    "cardProof": {
      "en": "8 systems connected · 1.5M assets & components linked",
      "ko": "8개 시스템 연결 · 설비·구성요소 150만 개 연계"
    }
  },
  "drawings": {
    "roles": [
      {
        "en": "Drawing standards",
        "ko": "작도 표준"
      },
      {
        "en": "Data modelling",
        "ko": "데이터 모델링"
      },
      {
        "en": "Process design",
        "ko": "업무 설계"
      }
    ],
    "cardProof": {
      "en": "Equipment search → relevant drawings",
      "ko": "설비 검색 → 관련 도면 조회"
    }
  },
  "data-platform": {
    "roles": [
      {
        "en": "Data governance",
        "ko": "데이터 거버넌스"
      },
      {
        "en": "ETL operations",
        "ko": "ETL 운영"
      },
      {
        "en": "Full-stack tooling",
        "ko": "풀스택 도구"
      },
      {
        "en": "User enablement",
        "ko": "현업 활용 지원"
      }
    ],
    "cardProof": {
      "en": "8 infrastructure datasets · operational monitoring & governed access",
      "ko": "인프라 데이터셋 8개 · 운영 모니터링과 접근 통제"
    }
  },
  "engineering-practices": {
    "roles": [
      {
        "en": "API standards",
        "ko": "API 표준"
      },
      {
        "en": "Testability",
        "ko": "테스트 가능성"
      },
      {
        "en": "Team guidance",
        "ko": "팀 개발 가이드"
      }
    ],
    "cardProof": {
      "en": "Shared API, UI, testing and fallback guidance",
      "ko": "API·UI·테스트·fallback 공통 가이드"
    }
  },
  "field-engineering": {
    "roles": [
      {
        "en": "Facilities operations",
        "ko": "설비 운영"
      },
      {
        "en": "Maintenance analysis",
        "ko": "보전 분석"
      },
      {
        "en": "Domain knowledge",
        "ko": "도메인 이해"
      }
    ],
    "cardProof": {
      "en": "The operational foundation behind the software work",
      "ko": "시스템 개발의 기반이 된 현장 업무 이해"
    }
  }
};
projects.forEach(p=>Object.assign(p,contributionLabels[p.id]));
const journeyStages = [
  {
    "id": "field-engineering",
    "stage": {
      "en": "Understand the work",
      "ko": "현장에서 업무를 이해하다"
    },
    "problem": {
      "en": "Equipment reliability depended on understanding quality signals, maintenance history and operating conditions.",
      "ko": "품질 신호·보전 이력·운영 조건을 이해해야 설비 신뢰성을 개선할 수 있었습니다."
    },
    "role": {
      "en": "Maintained infrastructure equipment and analysed FDC/PM data to investigate anomalies and replacement intervals.",
      "ko": "인프라 설비를 유지보수하고 FDC·PM 데이터를 분석해 이상 원인과 교체 주기를 검토했습니다."
    },
    "growth": {
      "en": "Field operations → data-informed problem definition",
      "ko": "현장 운영 → 데이터에 기반한 문제 정의"
    },
    "enabled": {
      "en": "Investigating equipment information exposed inconsistencies between the systems describing the same asset.",
      "ko": "설비 정보를 분석하는 과정에서 같은 설비가 시스템마다 다르게 관리되는 문제가 드러났습니다."
    }
  },
  {
    "id": "master-data",
    "stage": {
      "en": "Define a shared foundation",
      "ko": "데이터와 업무의 공통 기준을 설계하다"
    },
    "problem": {
      "en": "Quality, maintenance and work applications held conflicting equipment records. Analysis required repeated manual mapping.",
      "ko": "품질·보전·작업 시스템의 설비 정보가 달라 분석할 때마다 수동 매핑이 필요했습니다."
    },
    "role": {
      "en": "Moved into a domain-specialist/data-analysis role. Defined lifecycle standards and processes, developed validation and integrations, and supported users after launch.",
      "ko": "도메인 전문가·데이터 분석 역할로 전환해 생애주기 표준과 프로세스를 설계하고 검수·연계 개발과 출시 후 사용자 지원을 담당했습니다."
    },
    "growth": {
      "en": "Domain expertise → data/process design & integration",
      "ko": "도메인 이해 → 데이터·업무 설계와 연계 개발"
    },
    "enabled": {
      "en": "A common equipment reference became a foundation for linking drawings and other engineering information.",
      "ko": "공통 설비 기준은 도면과 다른 엔지니어링 정보를 연결할 기반이 됐습니다."
    }
  },
  {
    "id": "drawings",
    "stage": {
      "en": "Make documents usable as data",
      "ko": "도면을 활용 가능한 데이터로 바꾸다"
    },
    "problem": {
      "en": "A shared asset record did not make missing, outdated or unsearchable drawings useful to engineers.",
      "ko": "공통 설비 정보가 생겨도 누락·구버전·검색하기 어려운 도면 문제는 남아 있었습니다."
    },
    "role": {
      "en": "Extended process and data design to unstructured drawings: defined object libraries and conventions, extraction flows and equipment-to-drawing relationships.",
      "ko": "객체 라이브러리·작도 표준·추출 흐름·설비와 도면의 관계를 설계하며 비정형 도면 영역으로 역할을 확장했습니다."
    },
    "growth": {
      "en": "Structured records → unstructured engineering information",
      "ko": "정형 데이터 → 비정형 엔지니어링 정보"
    },
    "enabled": {
      "en": "Equipment could be connected to its documents; broader reuse also required shared operational data and access governance.",
      "ko": "설비와 도면을 연결했고, 더 넓은 활용에는 운영 데이터의 공통 공급과 접근 관리도 필요했습니다."
    }
  },
  {
    "id": "data-platform",
    "stage": {
      "en": "Enable governed reuse",
      "ko": "데이터를 공유하고 현업 활용을 지원하다"
    },
    "problem": {
      "en": "Information still lived in application databases. Wider analysis needed recurring delivery, understandable metadata and appropriate access.",
      "ko": "정보는 개별 DB에 남아 있었습니다. 조직 차원의 분석에는 주기적 공급·메타데이터·적절한 접근 권한이 필요했습니다."
    },
    "role": {
      "en": "Managed infrastructure data integration and governance, developed ETL operations tooling and taught SQL/Spotfire so engineering teams could use approved data.",
      "ko": "인프라 데이터 연계·거버넌스를 담당하고 ETL 운영 도구를 개발했으며, SQL·Spotfire 교육으로 현업의 데이터 활용을 지원했습니다."
    },
    "growth": {
      "en": "Individual integrations → shared data, operations & adoption",
      "ko": "개별 연계 → 공통 데이터·운영·조직 활용"
    },
    "enabled": {
      "en": "Shared engineering information could now support richer applications, including a spatial view of equipment and operations.",
      "ko": "공유된 엔지니어링 정보는 설비와 운영 상황을 공간에서 조회하는 애플리케이션의 기반으로 확장됐습니다."
    }
  },
  {
    "id": "digital-twin",
    "stage": {
      "en": "Deliver a connected application",
      "ko": "연결된 정보를 직접 서비스로 구현하다"
    },
    "problem": {
      "en": "Records and drawings still could not show engineers where an asset was or bring its operating context into one spatial workspace.",
      "ko": "레코드와 도면만으로는 설비 위치와 운영 상황을 하나의 공간에서 확인하기 어려웠습니다."
    },
    "role": {
      "en": "Evaluated vendor technologies, built Vue/Python application and integration layers, and delivered on premises with CI/CD.",
      "ko": "외부 기술을 평가하고 Vue·Python 애플리케이션과 데이터 연계 계층을 개발했으며 CI/CD로 사내 환경에 배포했습니다."
    },
    "growth": {
      "en": "Analysis & integration → full-stack implementation & delivery",
      "ko": "분석·연계 → 풀스택 구현과 배포"
    },
    "enabled": {
      "en": "As more workflows depended on connected data, the accuracy and freshness of incoming engineering information became increasingly important.",
      "ko": "연결된 데이터를 활용하는 업무가 늘수록 유입 데이터의 정확성과 최신성이 더 중요해졌습니다."
    }
  },
  {
    "id": "delivery",
    "stage": {
      "en": "Improve the workflow at its source",
      "ko": "데이터가 들어오는 과정부터 자동화하다"
    },
    "problem": {
      "en": "Employees still received contractor files by email, registered them internally and repeated correction handoffs.",
      "ko": "직원이 업체 파일을 메일로 받아 재등록하고 수정 요청을 반복하는 업무는 남아 있었습니다."
    },
    "role": {
      "en": "Redesigned the contractor-to-engineer workflow and built the AWS web platform and event-driven extraction/validation pipeline through to final approval.",
      "ko": "업체와 엔지니어 사이의 업무를 재설계하고 AWS 웹 플랫폼과 이벤트 기반 추출·검수 파이프라인을 최종 승인까지 구현했습니다."
    },
    "growth": {
      "en": "Connected applications → automation across organisational boundaries",
      "ko": "연결된 서비스 → 조직 경계를 잇는 업무 자동화"
    },
    "enabled": {
      "en": "The focus expanded from using engineering data to improving how that data enters the organisation.",
      "ko": "엔지니어링 데이터를 활용하는 단계를 넘어 데이터가 조직에 들어오는 과정까지 개선 범위를 넓혔습니다."
    }
  }
];
const journeyById = Object.fromEntries(journeyStages.map((stage,index)=>[stage.id,{...stage,index}]));
projects.find(p=>p.id==='engineering-practices').short=L('Engineering standards & team practices','개발 표준 · 팀 개발 방식');

// Applicable delivery dimensions, kept inside the case instead of duplicating it across role filters.
const deliverySections = {
 delivery:[
  {title:L('Software implementation','소프트웨어 구현'),text:L('Built the FastAPI/Vue web application and backend for submission, issue review and final approval. Implemented validated REST APIs, role-based access and audit logging, and delivered the application on EC2.','제출·오류 확인·최종 승인을 위한 FastAPI·Vue 웹과 백엔드를 개발했습니다. REST API 검증·역할 기반 접근·감사 로그를 구현하고 EC2에 배포했습니다.')},
  {title:L('Data extraction & integration','데이터 추출 · 연계'),text:L('Connected S3 intake, EventBridge, SQS, Lambda and RDS. Integrated APS Model Derivative and Design Automation to extract drawing information, structure records and feed the internal engineering-data workflow.','S3·EventBridge·SQS·Lambda·RDS를 연결했습니다. APS Model Derivative·Design Automation으로 도면 정보를 추출·구조화해 사내 엔지니어링 데이터 흐름에 연계했습니다.')},
  {title:L('Reliability & delivery','신뢰성 · 배포'),text:L('Used retries, duplicate detection and idempotent ingestion to support repeatable processing. Configured CodeCommit/CodeDeploy/CodePipeline delivery with automated tests, health checks and rollback procedures.','재시도·중복 감지·멱등 수집으로 반복 처리에 대응했습니다. CodeCommit·CodeDeploy·CodePipeline 배포에 자동 테스트·상태 점검·롤백 절차를 포함했습니다.')}
 ],
 'master-data':[
  {title:L('Data & process design','데이터 · 업무 설계'),text:L('Defined shared equipment identities and lifecycle standards across applications with different business rules. Designed when records should be created and distributed from ordering through commissioning and turn-on.','업무 규칙이 다른 시스템의 공통 설비 기준과 생애주기 표준을 수립했습니다. 발주·시운전·턴온 단계에 맞춰 데이터의 생성·연계 시점을 설계했습니다.')},
  {title:L('Validation & integration development','검수 · 연계 개발'),text:L('Prepared approximately one million rows across 50 columns. Developed Python/SQL pre-registration checks, ETL/EAI integrations and Spotfire reconciliation reports using SQL against participating system databases.','약 100만 행·50개 열의 초기 데이터를 정리했습니다. Python·SQL 사전 검수와 ETL/EAI 연계를 개발하고 각 DB를 조회하는 Spotfire 대사 리포트를 운영했습니다.')},
  {title:L('Production support & expansion','운영 지원 · 확장'),text:L('Supported requests, incidents and user training for approximately one year. Extended features and environmental-safety/material-registration integrations, and supported Austin/Taylor FAB adoption during the 2024 U.S. rollout.','약 1년간 VOC·오류 대응·사용자 교육을 담당했습니다. 환경안전·소재등록 시스템 연계와 기능을 확장하고 2024년 미국 Austin·Taylor FAB 전개를 지원했습니다.')}
 ],
 'digital-twin':[
  {title:L('Application implementation','애플리케이션 구현'),text:L('Developed Vue search and equipment-selection interactions, Python backend services and integrated operational-information views. The application connects the selected 3D object with its equipment context.','Vue 검색·설비 선택 기능, Python 백엔드와 운영 정보 조회 화면을 개발했습니다. 선택한 3D 객체와 해당 설비 정보를 연결했습니다.')},
  {title:L('Model & operational-data integration','모델 · 운영 데이터 연계'),text:L('Built model preprocessing and equipment mapping with APS/Revit integration. Connected eight systems through ETL/EAI so location, quality trends, maintenance history and work status could be reviewed together.','APS·Revit 연계 모델 전처리와 설비 매핑을 구현했습니다. ETL/EAI로 8개 시스템을 연결해 위치·품질 트렌드·보전 이력·작업 현황을 함께 조회하도록 했습니다.')},
  {title:L('Technical evaluation & deployment','기술 평가 · 배포'),text:L('Conducted vendor meetings and PoCs with NVIDIA, Siemens and AVEVA, assessing performance, stability and extensibility. Delivered the application on premises with Git, Jenkins and Kubernetes-based CI/CD.','NVIDIA·Siemens·AVEVA와 기술 미팅·PoC로 성능·안정성·확장성을 평가했습니다. Git·Jenkins·Kubernetes 기반 CI/CD로 사내 환경에 배포했습니다.')}
 ],
 drawings:[
  {title:L('Drawing standards & process design','작도 표준 · 업무 설계'),text:L('Analysed handover practices and redesigned submission and management workflows. Defined reusable object libraries and drawing conventions so delivered files could support consistent information extraction.','기존 납품 업무를 분석해 제출·관리 프로세스를 재설계했습니다. 공통 객체 라이브러리와 작도 표준을 정의해 일관된 정보 추출 기반을 마련했습니다.')},
  {title:L('Structured information & retrieval','정보 구조화 · 검색'),text:L('Designed P&ID/PFD extraction and equipment-to-drawing relationships. Added completeness and design-rule checks so engineers could find related drawings by equipment and identify submission issues before review.','P&ID·PFD 정보 추출과 설비·도면 관계를 설계했습니다. 완결성·설계 규칙 검수로 검토 전 제출 문제를 확인하고, 설비명으로 관련 도면을 조회할 수 있게 했습니다.')}
 ],
 'data-platform':[
  {title:L('Operational software','운영 소프트웨어'),text:L('Built a FastAPI/Oracle/Vue.js ETL dashboard with job-level logs, failure alerts and retry controls so operators could identify affected runs and support recovery.','작업별 로그·실패 알림·재시도 기능을 갖춘 FastAPI·Oracle·Vue ETL 대시보드를 개발해 문제 작업의 식별과 복구를 지원했습니다.')},
  {title:L('Data delivery & governance','데이터 공급 · 거버넌스'),text:L('Managed recurring integration from eight infrastructure systems to a shared data lake. Defined metadata, security classifications, disclosure boundaries and access rules for sensitive information.','8개 인프라 시스템에서 데이터레이크로 주기적 연계를 관리했습니다. 메타데이터·보안 등급·공개 범위·민감 정보 접근 규칙을 정의했습니다.')},
  {title:L('Engineering adoption','현업 활용 지원'),text:L('Taught SQL and Spotfire within an engineering organisation of approximately 2,000 employees, supporting self-service reporting. Contributed to defining data suitable for AI use in 2026.','약 2,000명 규모의 엔지니어링 조직에서 SQL·Spotfire 강사로 활동하며 셀프서비스 리포트 활용을 지원했습니다. 2026년에는 AI 활용 가능 데이터 정의에 참여했습니다.')}
 ],
 'engineering-practices':[
  {title:L('Reusable development standards','재사용 가능한 개발 표준'),text:L('Authored and distributed team skill documents for API specifications, interface conventions, testable code and fallback behaviour during AI-assisted implementation.','AI 활용 개발에서 API 명세·화면 기준·테스트 가능 코드·fallback 동작을 따르도록 팀 Skill 문서를 작성하고 배포했습니다.')},
  {title:L('Workflow & data prototypes','워크플로 · 데이터 프로토타입'),text:L('Prototyped integrations using external language models and Bedrock/AgentCore for schema-aware retrieval, read-only SQL/API tools and engineering-data review. My work focused on workflow and data processing.','외부 언어 모델과 Bedrock·AgentCore를 활용해 스키마 기반 조회·읽기 전용 SQL/API 도구·엔지니어링 데이터 검토 연계를 프로토타이핑했습니다. 담당 범위는 워크플로와 데이터 처리입니다.')}
 ],
 'field-engineering':[
  {title:L('Facilities operations','설비 운영'),text:L('Maintained, operated and improved infrastructure supply equipment supporting semiconductor manufacturing, building firsthand understanding of operating constraints and engineering users’ needs.','반도체 제조를 지원하는 인프라 공급 설비를 유지보수·운영·개선하며 현장 제약과 엔지니어의 요구를 직접 이해했습니다.')},
  {title:L('Quality & maintenance analysis','품질 · 보전 분석'),text:L('Worked as an FDC/PM conductor, analysing equipment quality and maintenance records to investigate abnormal behaviour and evaluate component replacement intervals.','FDC·PM conductor로 설비 품질·보전 데이터를 분석해 이상 동작의 원인을 조사하고 부품 교체 주기를 검토했습니다.')}
 ]
};
projects.forEach(p=>p.deliverySections=deliverySections[p.id]);
