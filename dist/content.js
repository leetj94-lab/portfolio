/* Content is intentionally separate from rendering. Update EN/KO copy and diagram nodes here. */
const L = (en, ko) => ({en, ko});
const profile = {
  email: 'leetj94@gmail.com',
  linkedin: 'https://www.linkedin.com/in/taek-jun-lee-a83160344',
  name: 'Taekjun (TJ) Lee',
  role: L('Business systems & automation engineer', '비즈니스 시스템 · 업무 자동화 엔지니어'),
};
const projects = [
{
 id:'delivery', number:'01', type:'automation', period:'2025 — 2026', category:L('WORKFLOW AUTOMATION', '업무 자동화'),
 title:L('From email chains to one approval.', '끝없는 메일에서, 한 번의 최종 승인으로.'),
 short:L('Engineering document delivery', '도면 및 데이터 납품 플랫폼'),
 summary:L('An AWS platform that turns contractor submissions into validated, structured data—before an engineer needs to intervene.', '설계·시공사의 제출물을 자동 추출·검증하고 구조화해, 임직원은 최종 확인에 집중할 수 있게 만든 AWS 플랫폼.'),
 role:L('Project owner · Process analysis · Full-stack development · AWS delivery', '프로젝트 담당 · 업무 프로세스 분석 · 풀스택 개발 · AWS 배포'),
 metrics:[['30–70k',L('drawings per FAB', 'FAB당 도면 규모')],['~10k',L('assets & components registered per FAB', 'FAB당 등록 설비·구성요소')],[L('Event-driven','이벤트 기반'),L('extraction & validation', '추출·검증 파이프라인')]],
 before:L('Drawings arrived through repeated emails. Employees uploaded them into internal systems, found errors and sent correction requests back to contractors. Every revision restarted the handoff.', '업체가 메일로 도면을 보내면 직원이 사내 시스템에 등록하고, 오류를 찾아 다시 회신했습니다. 수정본마다 같은 전달·검수 업무가 반복됐습니다.'),
 after:L('Contractors submit directly. The platform extracts and checks the data, returns issues for correction and presents completed submissions for final employee approval.', '업체가 직접 제출하면 플랫폼이 데이터를 추출하고 오류를 검수합니다. 업체가 수정하고, 검수가 끝난 제출물은 직원이 최종 확인·승인합니다.'),
 outcome:L('Moved repetitive intake and first-pass checking into a shared workflow, with a clear final approval point for engineers.', '반복적인 접수와 1차 검수를 공통 워크플로로 전환하고, 직원의 최종 확인·승인 지점을 명확히 했습니다.'),
 contribution:[L('Mapped contractor-to-employee handoffs and redesigned submission, correction and approval flows.', '업체와 임직원 사이의 전달 업무를 분석하고 제출·수정·승인 프로세스를 재설계했습니다.'),L('Built the web application, backend and AWS ingestion pipeline, including APS Model Derivative and Design Automation integrations.', '웹·백엔드와 AWS 수집 파이프라인을 개발하고 APS Model Derivative·Design Automation을 연계했습니다.'),L('Configured EC2 delivery and CodeCommit / CodeDeploy / CodePipeline CI/CD; developed a separate Bedrock-based data review prototype.', 'EC2 배포와 CodeCommit·CodeDeploy·CodePipeline 기반 CI/CD를 구성하고, 별도로 Bedrock 기반 데이터 검토 프로토타입을 개발했습니다.')],
 decisions:[L('Automate the checks; retain engineering approval.', '검수는 자동화하고, 최종 승인은 엔지니어에게.'),L('Separate ingestion events from data processing.', '업로드 이벤트와 데이터 처리 단계를 분리.')],
 decisionText:[L('Contractors can resolve rule-based errors before internal review. The employee remains responsible for the final acceptance of the engineering data.', '업체가 규칙 기반 오류를 먼저 수정하도록 하되, 엔지니어링 데이터의 최종 수용 판단은 담당 직원이 수행하도록 구성했습니다.'),L('EventBridge and SQS connect submission events to Lambda processing. Extraction and database registration become explicit stages rather than another manual upload task.', 'EventBridge·SQS로 제출 이벤트와 Lambda 처리를 연결했습니다. 추출과 DB 등록을 명확한 단계로 구성해 수동 등록 업무를 파이프라인으로 전환했습니다.')],
 stack:['Python','FastAPI','Vue.js','AWS EC2','S3','EventBridge','SQS','Lambda','RDS','Autodesk APS'],
 flowTitle:L('Submission → structured data → approval', '제출 → 구조화 데이터 → 승인'),
 flowNote:L('Select a stage to follow the data.', '단계를 선택해 데이터의 흐름을 확인하세요.'),
 nodes:[
 ['submit',80,110,L('Contractor portal','업체 제출 포털'),L('Drawings + data','도면 + 설계 데이터'),L('Design and construction partners upload drawings and related data directly to the cloud platform instead of sending them through email.', '설계·시공사가 도면과 데이터를 클라우드 플랫폼에 직접 제출합니다. 이메일을 통한 전달과 직원의 재등록을 줄이는 시작점입니다.')],
 ['events',330,110,L('Event routing','이벤트 라우팅'),'EventBridge · SQS',L('Upload events trigger the asynchronous data pipeline through EventBridge and SQS.', '업로드 이벤트를 EventBridge·SQS로 연결해 후속 데이터 처리를 시작합니다.')],
 ['extract',580,110,L('Extract & structure','추출 · 구조화'),'Lambda · APS',L('APS APIs and Python processing extract drawing information and convert it into structured records.', 'APS API와 Python 처리 로직으로 도면 정보를 추출하고 구조화된 레코드로 변환합니다.')],
 ['validate',580,320,L('Rule validation','규칙 기반 검수'),'RDS · Python',L('Predefined validation rules check extracted data. Results are returned to the responsible employee and contractor for review and correction.', '사전에 정의한 검수 규칙으로 추출 데이터를 확인합니다. 결과는 업체와 담당 직원에게 전달해 오류를 수정하도록 합니다.')],
 ['correct',330,320,L('Correct & resubmit','수정 · 재제출'),L('Issue feedback','검수 결과 피드백'),L('The contractor reviews validation issues and corrects the submission before the employee performs the final check.', '업체는 검수 결과를 확인하고 제출물을 수정합니다. 직원은 반복적인 오류 전달 대신 최종 확인에 집중합니다.')],
 ['approve',830,320,L('Final approval','최종 승인'),L('Employee review','담당 직원 확인'),L('An employee confirms the completed data and approves delivery into the internal data workflow.', '직원이 검수가 완료된 데이터를 최종 확인한 뒤 승인해 사내 데이터 흐름으로 전달합니다.')]
 ], edges:[['submit','events'],['events','extract'],['extract','validate'],['validate','correct','feedback'],['correct','submit','loop'],['validate','approve']],
 extension:L('Next: a data review agent using Bedrock and AgentCore to query records and suggest statistically plausible corrections. Prototype stage.', '확장: Bedrock·AgentCore를 활용해 데이터를 조회하고 통계에 기반한 수정 후보를 제안하는 데이터 검토 에이전트. 프로토타입 단계.')
},
{
 id:'master-data', number:'02', type:'integration', period:'2020 — 2021', category:L('SYSTEMS INTEGRATION','시스템 통합'),
 title:L('One equipment record. Every system aligned.', '하나의 설비 정보로, 모든 시스템을 일치시키다.'),
 short:L('Facility master data platform','설비 기준정보 플랫폼'),
 summary:L('A shared equipment foundation replacing repeated registration across quality, maintenance, operations and work systems.', '품질·보전·운영·작업 시스템에 반복 등록하던 설비 정보를 공통 기준과 생애주기로 통합한 플랫폼.'),
 role:L('Domain specialist · Data & process analyst · Validation and integration developer', '도메인 전문가 · 데이터·업무 분석 · 검증·연계 개발'),
 metrics:[['87%',L('less time on cross-system registration', '시스템별 등록 업무 시간 감소')],['17% → 0%',L('measured cross-system discrepancy rate', '측정한 시스템 간 불일치율')],['~1M',L('rows prepared for initial migration', '초기 정리 데이터 행 수')]],
 before:L('The same equipment existed under different records in different systems. Engineers repeated registrations and updates; managers could not reliably count assets, and analysts spent time mapping maintenance and quality histories.', '같은 설비가 시스템마다 다른 정보로 존재했습니다. 등록·수정·삭제가 반복됐고 누락이 발생했습니다. 관리자는 정확한 수량을 파악하기 어려웠고, 분석가는 품질·보전 이력을 매핑하는 데 많은 시간을 썼습니다.'),
 after:L('A master platform defines common equipment data and lifecycle rules, then supplies the right records to each legacy application at the right stage—from ordering through commissioning and turn-on.', '마스터 플랫폼에서 공통 데이터와 생애주기 규칙을 정의하고, 발주부터 시운전·가동까지 각 단계에 맞춰 필요한 시스템에 정보를 연계했습니다.'),
 outcome:L('Reduced engineer time for equivalent cross-system registration work by 87%. Reported discrepancy rates fell from 17% to 0% across the measured systems.', '동일한 시스템별 등록 업무에 필요한 엔지니어의 시간을 87% 줄였고, 측정한 시스템 간 데이터 불일치율을 17%에서 0%로 낮췄습니다.'),
 contribution:[L('Defined shared data standards and lifecycle workflows across applications with different registration timing and business rules.', '등록 시점과 업무 규칙이 서로 다른 시스템의 공통 데이터 표준과 설비 생애주기 프로세스를 수립했습니다.'),L('Prepared approximately one million rows across 50 columns; implemented Python/SQL pre-registration checks and ETL/EAI integrations.', '약 100만 행·50개 열의 초기 데이터를 정리하고 Python·SQL 사전 검수와 ETL/EAI 연계를 개발했습니다.'),L('Built Spotfire reconciliation reports, supported production for approximately one year, and extended features and integrations in response to user needs.', 'Spotfire 대사 리포트를 운영하고 약 1년간 VOC·오류 대응·사용자 교육을 담당했으며, 이후 신규 기능과 추가 시스템 연계를 개발했습니다.')],
 decisions:[L('Standardise identity, respect application differences.', '공통 식별 기준과 개별 시스템 특성을 함께 반영.'),L('Verify after distribution, not just before registration.', '등록 전 검수와 연계 후 대사를 함께 수행.')],
 decisionText:[L('A single master record is useful only when downstream applications can use it. Data definitions and lifecycle triggers account for each application’s purpose and required timing.', '하나의 마스터 데이터가 실제로 동작하려면 하위 시스템의 목적과 등록 시점도 고려해야 합니다. 각 시스템에서 필요한 데이터와 생성 시기를 함께 설계했습니다.'),L('Python/SQL checks prevent invalid registrations. Spotfire reports query and compare source and destination databases to reveal integration discrepancies.', 'Python·SQL 로직으로 잘못된 등록을 사전에 검수하고, Spotfire에서 원천·대상 DB를 조회·비교해 연계 후 불일치도 확인했습니다.')],
 stack:['Python','SQL','ETL / EAI','Spotfire','Data standards','Process design'],
 flowTitle:L('A shared foundation across legacy systems','레거시 시스템을 연결하는 공통 기준'),
 flowNote:L('Lifecycle timing determines when each system receives data.', '설비 생애주기에 맞춰 각 시스템에 데이터를 전달합니다.'),
 nodes:[
 ['lifecycle',100,215,L('Equipment lifecycle','설비 생애주기'),L('Order → commission → operate','발주 → 시운전 → 가동'),L('Defined when equipment information should be created and shared across ordering, registration, commissioning and turn-on.', '발주·등록·시운전·턴온 과정에서 언제 설비 정보가 생성되고 연계되어야 하는지 정의했습니다.')],
 ['master',360,215,L('Master platform','기준정보 플랫폼'),L('Standards + validation','표준 + 사전 검수'),L('A common equipment record, shared data standards and Python/SQL validation replace independent registrations.', '공통 설비 정보와 데이터 표준, Python·SQL 검수 로직으로 개별 시스템의 반복 등록을 통합했습니다.')],
 ['quality',660,75,L('Quality system','품질 시스템'),L('Equipment + sensors','설비 + 센서'),L('Quality records use the shared equipment foundation, enabling quality deviations to be linked with maintenance information.', '공통 설비 기준을 품질 데이터에 연결해 품질 이탈과 보전 이력의 통합 분석 기반을 마련했습니다.')],
 ['maint',660,215,L('Maintenance & work','보전 · 작업 시스템'),L('Lifecycle integration','생애주기 연계'),L('ETL/EAI supplies records to maintenance and work applications according to their business timing and data requirements.', 'ETL/EAI로 보전·작업 시스템의 업무 시점과 데이터 요건에 맞춰 기준정보를 공급했습니다.')],
 ['ops',660,355,L('Operations system','운영 시스템'),L('Consistent records','일치하는 설비 정보'),L('Operations applications receive common equipment information, reducing missing or inconsistent records.', '운영 시스템에도 동일한 설비 기준을 공급해 누락과 시스템 간 불일치를 줄였습니다.')],
 ['bi',910,215,L('Reconciliation','연계 결과 대사'),'SQL · Spotfire',L('SQL queries compare databases across systems. Spotfire reports make discrepancies visible for verification and follow-up.', '각 시스템 DB를 SQL로 조회하고 Spotfire에서 비교·분석해 연계 결과를 검증했습니다.')]
 ], edges:[['lifecycle','master'],['master','quality'],['master','maint'],['master','ops'],['quality','bi'],['maint','bi'],['ops','bi']],
 measurement:L('87% refers to time spent on equivalent registration tasks, not all engineering work. The 17% → 0% figure applies to the cross-system discrepancies measured in this project.', '87%는 전체 엔지니어 업무가 아닌 동일한 등록 업무의 소요 시간 감소입니다. 17% → 0%는 이 프로젝트에서 측정한 시스템 간 불일치율입니다.')
},
{
 id:'digital-twin', number:'03', type:'development', period:'2023 — 2024 · ongoing extensions', category:L('FULL-STACK DEVELOPMENT','풀스택 개발'),
 title:L('Find the asset. See the whole context.', '설비를 찾으면, 필요한 정보가 함께 보이도록.'),
 short:L('3D digital twin platform','3D 디지털트윈 플랫폼'),
 summary:L('A searchable 3D workspace connecting equipment locations with quality trends, maintenance history and work status.', '설비 위치와 실시간 품질 트렌드·보전 이력·작업 현황을 연결한 검색 가능한 3D 업무 공간.'),
 role:L('Project owner · Vendor PoC · Vue/Python development · On-premises delivery', '프로젝트 담당 · 벤더 PoC · Vue·Python 개발 · 사내 배포'),
 metrics:[['8',L('connected operational systems','연결된 운영 시스템')],['1.5M',L('assets & components linked','연결된 설비·구성요소')],['~1,000',L('users supported','사용자 규모')]],
 before:L('Engineers relied on separate applications, drawings and site visits to locate valves and sensors or understand an asset’s condition. High, confined and hazardous areas made even basic inspection difficult.', '엔지니어가 설비와 밸브·센서를 찾거나 상태를 확인하려면 여러 시스템과 도면을 확인하고 현장에 방문해야 했습니다. 고소·협소·위험 구간은 기본적인 위치 확인조차 어려웠습니다.'),
 after:L('Search an asset to navigate to its 3D location. Select it to view linked operational information, inspect facility context and review equipment status from the office.', '설비를 검색해 3D 위치로 이동하고, 선택하면 관련 운영 정보를 함께 조회합니다. 사무실에서 공간과 설비 상태를 확인하고 이동 경로를 검토할 수 있습니다.'),
 outcome:L('Created a shared spatial interface for engineering information, reducing the need to reconstruct asset context across disconnected screens and site visits.', '여러 화면과 현장 방문으로 흩어진 설비 정보를 하나의 공간 인터페이스로 연결해 위치·상태 파악에 필요한 반복 탐색을 줄였습니다.'),
 contribution:[L('Led technical meetings and PoCs with NVIDIA, Siemens and AVEVA, evaluating performance, stability and extensibility.', 'NVIDIA·Siemens·AVEVA와 기술 미팅·PoC를 진행하며 성능·안정성·확장성을 평가했습니다.'),L('Developed Vue.js interfaces, Python backend services and ETL/EAI connections between 3D objects and operational systems.', 'Vue.js 화면, Python 백엔드, 3D 객체와 운영 시스템을 연결하는 ETL/EAI를 개발했습니다.'),L('Delivered the application into an on-premises environment using Git, Jenkins and Kubernetes-based CI/CD.', 'Git·Jenkins·Kubernetes 기반 CI/CD로 사내 온프레미스 환경에 애플리케이션을 배포했습니다.')],
 decisions:[L('Use the model as an interface to operational data.', '3D 모델을 운영 데이터의 인터페이스로.'),L('Evaluate the foundation, own the application.', '기반 솔루션을 평가하고 업무 애플리케이션을 구현.')],
 decisionText:[L('The value comes from connecting model objects to known equipment identities. Selecting an asset becomes a route to its quality, maintenance and work context.', '모델 객체를 공통 설비 기준과 연결해, 설비 선택이 품질·보전·작업 정보에 접근하는 시작점이 되도록 했습니다.'),L('Vendor technologies provide the 3D foundation. My implementation covers the business-facing web application, data processing, system integrations and deployment.', '외부 기술을 3D 기반으로 활용하고, 업무 웹 애플리케이션·데이터 처리·시스템 연계·배포를 직접 담당했습니다.')],
 stack:['Vue.js','Python','Autodesk APS','ETL / EAI','Git','Jenkins','Kubernetes'],
 flowTitle:L('Spatial context meets operational context','공간 정보와 운영 정보의 연결'),
 flowNote:L('Select an asset to connect its location and history.', '설비의 위치와 운영 이력이 연결되는 흐름입니다.'),
 nodes:[
 ['models',100,100,L('3D models','3D 모델'),L('Delivered engineering models','납품된 엔지니어링 모델'),L('Prepared delivered models for viewing and equipment navigation in a web-based 3D workspace.', '사내에 납품된 3D 모델을 웹에서 조회하고 설비 위치로 이동할 수 있도록 구성했습니다.')],
 ['identity',350,100,L('Asset mapping','설비 매핑'),L('Model ↔ equipment IDs','모델 ↔ 설비 식별자'),L('Connected model objects to equipment records so spatial selections could retrieve the correct operational context.', '모델 객체와 설비 기준정보를 연결해 공간에서 선택한 설비의 운영 정보를 조회할 수 있게 했습니다.')],
 ['viewer',650,100,L('3D workspace','3D 업무 공간'),'Vue.js · Viewer',L('Built search, equipment navigation, spatial inspection and integrated equipment information views.', '검색·설비 이동·공간 확인과 연계 정보 조회 화면을 개발했습니다.')],
 ['sources',100,320,L('Operational systems','운영 시스템'),L('Quality · maintenance · work','품질 · 보전 · 작업'),L('Quality trends, maintenance history and work status originate from connected operational systems.', '품질 트렌드·보전 이력·작업 현황은 연계된 운영 시스템에서 가져옵니다.')],
 ['api',350,320,L('Data integration','데이터 연계'),'Python · ETL / EAI',L('Developed backend and data integration paths to make operational records available within the 3D application.', '백엔드와 데이터 연계를 개발해 3D 화면에서 운영 정보를 사용할 수 있게 했습니다.')],
 ['context',650,320,L('Equipment context','설비 통합 정보'),L('Location + status + history','위치 + 상태 + 이력'),L('The selected asset brings its operating context together, including quality, maintenance and current work information.', '선택한 설비의 품질·보전·작업 정보를 한곳에 모아 상황을 파악하도록 구성했습니다.')],
 ['engineer',910,210,L('Engineering decisions','엔지니어링 판단'),L('Inspect · locate · plan','확인 · 탐색 · 계획'),L('Engineers can inspect difficult-to-access areas from the office and review equipment locations, movement routes and facility status.', '사무실에서 접근이 어려운 구간을 확인하고 설비 위치·이동 경로·사업장 상태를 검토할 수 있습니다.')]
 ], edges:[['models','identity'],['identity','viewer'],['sources','api'],['api','context'],['viewer','context'],['viewer','engineer'],['context','engineer']],
 extension:L('In progress: model conversion for simulation teams and reuse of spatial data for AMR/AGV patrol. A separate agent extension combines alarms with operational history to support cause investigation.', '진행 중: 시뮬레이션 부서를 위한 모델 변환·연계와 AMR·AGV 패트롤을 위한 공간 데이터 활용. 별도 에이전트 확장에서는 알람과 운영 이력을 연결해 이상 원인 분석을 지원합니다.')
},
{
 id:'drawings', number:'04', type:'integration', period:'2021 — 2022', category:L('DOCUMENT & DATA SYSTEMS','도면 · 데이터 시스템'),
 title:L('Stop opening drawings. Start finding equipment.', '도면을 하나씩 여는 대신, 설비를 검색하다.'),
 short:L('Intelligent drawing management','설계도면 관리 시스템'),
 summary:L('Drawing standards, structured extraction and equipment-to-document links that make engineering drawings usable beyond handover.', '작도 표준·데이터 추출·설비와 도면의 연결로 납품된 도면을 검색하고 활용할 수 있는 정보로 전환.'),
 role:L('Process & data analyst · Standards definition · Integration design', '업무·데이터 분석 · 표준 수립 · 연계 설계'),
 metrics:[['~4,500',L('users supported','사용자 규모')],[L('Searchable','검색 가능한'),L('equipment-to-drawing relationships','설비 ↔ 도면 관계')],[L('Standardised','표준화된'),L('drawing objects & submission rules','도면 객체 · 납품 규칙')]],
 before:L('Drawing submission was treated as a settlement task. Missing or incorrect files went unnoticed, current drawings stayed on personal PCs, and engineers repeatedly searched files or returned to the field.', '정산을 위한 형식적인 도면 등록으로 누락·오등록이 발생했고 최신본이 개인 PC에 남아 있기도 했습니다. 필요한 정보를 찾기 위해 도면을 반복해서 열거나 현장을 다시 방문해야 했습니다.'),
 after:L('Redesigned handover and drawing management processes, standardised drawing objects and extracted equipment relationships. An equipment search returns the relevant drawings directly.', '납품·관리 업무를 재설계하고 도면 객체를 표준화해 설비 관계를 추출했습니다. 설비명을 검색하면 관련 도면 목록을 바로 찾을 수 있도록 구성했습니다.'),
 outcome:L('Turned engineering documents into searchable equipment context rather than a collection of files uploaded at project close.', '프로젝트 종료 시 등록하는 파일 묶음을 넘어, 설비를 기준으로 검색하고 활용할 수 있는 엔지니어링 정보로 전환했습니다.'),
 contribution:[L('Analysed existing handover practices and redesigned business processes and system integration points.', '기존 납품 업무를 분석하고 업무 프로세스·시스템 연계 지점을 재설계했습니다.'),L('Established reusable object libraries and drawing conventions to enable consistent data extraction.', '일관된 데이터 추출을 위해 객체 라이브러리와 작도 표준을 수립했습니다.'),L('Designed the unstructured-to-structured data pipeline and equipment-to-drawing relationships.', '비정형 도면을 구조화하는 데이터 파이프라인과 설비·도면 관계를 설계했습니다.')],
 decisions:[L('Make the drawing machine-readable at the source.', '원천 도면부터 데이터로 읽을 수 있게.'),L('Design retrieval around the engineering question.', '엔지니어가 찾는 대상을 중심으로 검색 설계.')],
 decisionText:[L('Common drawing objects and conventions improve the consistency of extracted information. Standards become part of the submission process.', '공통 객체와 작도 규칙으로 추출 정보의 일관성을 높이고 납품 단계부터 표준을 적용했습니다.'),L('Engineers usually know the equipment they need. Mapping that equipment to drawings removes the need to inspect files one at a time.', '엔지니어는 대개 찾고 싶은 설비를 알고 있습니다. 설비와 도면을 연결해 파일을 하나씩 열어보는 탐색을 줄였습니다.')],
 stack:['Drawing standards','Data extraction','SQL','Equipment mapping','Process design'],
 flowTitle:L('From drawing files to equipment search','도면 파일에서 설비 중심 검색으로'),flowNote:L('Standards make extraction and retrieval possible.', '표준을 기반으로 도면 정보를 추출하고 검색합니다.'),
 nodes:[
 ['standard',110,110,L('Drawing standards','작도 표준'),L('Object libraries + conventions','객체 라이브러리 + 작성 규칙'),L('Defined drawing objects and conventions that make equipment information extractable and consistent.', '설비 정보를 일관되게 추출할 수 있도록 도면 객체와 작도 규칙을 정의했습니다.')],
 ['submit',380,110,L('Controlled handover','체계적인 납품'),L('Submission workflow','도면 제출 프로세스'),L('Redesigned how drawings are delivered and registered so current information can be managed systematically.', '최신 정보가 체계적으로 관리되도록 도면의 납품과 등록 절차를 재설계했습니다.')],
 ['extract',680,110,L('Extract & map','정보 추출 · 매핑'),L('Objects → equipment records','객체 → 설비 정보'),L('Extracted drawing information and associated equipment with the drawings in which it appears.', '도면 정보를 추출하고 설비가 포함된 도면을 관계 데이터로 연결했습니다.')],
 ['catalog',680,320,L('Drawing catalogue','도면 정보 카탈로그'),L('Equipment ↔ drawings','설비 ↔ 도면'),L('Structured relationships make relevant drawings retrievable by equipment identity.', '구조화된 관계를 통해 설비 기준으로 관련 도면을 조회할 수 있게 했습니다.')],
 ['search',380,320,L('Equipment search','설비명 검색'),L('Find relevant drawings','관련 도면 조회'),L('An engineer searches for an equipment name to retrieve its related drawing list instead of opening multiple files.', '설비명을 검색하면 관련 도면 목록이 나와 여러 파일을 열어 확인하는 업무를 줄였습니다.')]
 ],edges:[['standard','submit'],['submit','extract'],['extract','catalog'],['catalog','search']]
},
{
 id:'data-platform', number:'05', type:'integration', period:'2023 — 2026', category:L('DATA PLATFORMS & GOVERNANCE','데이터 플랫폼 · 거버넌스'),
 title:L('Make data available. Make it usable.', '데이터를 열고, 스스로 활용할 수 있게.'),
 short:L('Data lake & operational data','데이터레이크 · 운영 데이터'),
 summary:L('Recurring data integration, metadata and access governance—supported by SQL and Spotfire education for engineering teams.', '주기적 데이터 연계와 메타데이터·권한 관리, SQL·Spotfire 교육을 통해 엔지니어의 데이터 활용을 지원.'),
 role:L('Infrastructure data owner · Integration developer · Governance contributor · SQL/BI instructor','인프라 데이터 담당 · 연계 개발 · 거버넌스 참여 · SQL·BI 강사'),
 metrics:[['8',L('operational datasets managed','관리한 운영 데이터셋')],[L('Governed','권한 기반'),L('metadata & data access','메타데이터 · 접근 관리')],[L('Self-service','셀프서비스'),L('SQL & Spotfire enablement','SQL · Spotfire 활용 지원')]],
 before:L('Operational information remained in individual application databases. Wider reuse needed consistent delivery, understandable metadata and an explicit boundary around sensitive information.', '운영 정보가 개별 시스템 DB에 분산돼 있었습니다. 조직에서 재사용하려면 주기적 공급과 메타데이터, 민감 정보의 공개 범위가 함께 정리되어야 했습니다.'),
 after:L('Connected infrastructure databases to the data lake, registered metadata and defined access and disclosure levels. Engineers could build their own BI reports using approved data.', '인프라 DB를 데이터레이크에 연계하고 메타데이터와 권한·공개 범위를 정의했습니다. 엔지니어는 허용된 데이터로 직접 BI 리포트를 개발할 수 있게 됐습니다.'),
 outcome:L('Combined data availability with practical adoption: shared datasets, controlled access and education that helps engineers answer their own operational questions.', '공통 데이터 공급과 접근 통제에 교육을 결합해, 엔지니어가 스스로 업무 질문을 분석할 수 있는 활용 환경을 지원했습니다.'),
 contribution:[L('Managed periodic integration from infrastructure application databases into the data lake.', '인프라 시스템 DB에서 데이터레이크로 주기적으로 연계되도록 관리했습니다.'),L('Registered metadata and defined security-based access and disclosure boundaries, including restricted HR information.', '메타데이터를 등록하고 인사 정보 등 보안성 데이터의 등급에 따라 접근 권한과 공개 범위를 설정했습니다.'),L('Taught SQL and Spotfire within an engineering organisation of approximately 2,000 employees; contributed to AI-ready data eligibility work in 2026.', '약 2,000명 규모의 인프라기술 조직에서 SQL·Spotfire 강사로 활동했으며, 2026년에는 AI 활용 가능 데이터 정의 업무에도 참여했습니다.')],
 decisions:[L('Availability includes ownership and access rules.', '적재뿐 아니라 소유·접근 기준까지.'),L('Enable the people who understand the work.', '업무를 이해하는 사람이 직접 분석하도록.')],
 decisionText:[L('Metadata and access rules are part of the delivery, so data consumers can understand and use information within defined boundaries.', '데이터를 이해하고 정해진 범위에서 활용할 수 있도록 메타데이터와 접근 규칙을 공급 과정에 포함했습니다.'),L('SQL and Spotfire training helps domain experts build reports themselves, extending the reach of shared data beyond a central development team.', 'SQL·Spotfire 교육으로 도메인 전문가가 직접 리포트를 만들도록 지원해 데이터 활용 범위를 넓혔습니다.')],
 stack:['SQL','Python','ETL','Data lake','Metadata','Access governance','Spotfire'],
 flowTitle:L('Governed data, closer to the people using it','거버넌스를 갖춘 데이터 활용 흐름'),flowNote:L('Data delivery and access control form one workflow.', '데이터 공급과 접근 통제를 함께 설계합니다.'),
 nodes:[
 ['db',110,110,L('Application databases','업무 시스템 DB'),L('Infrastructure systems','인프라 시스템'),L('Operational databases are the source of the infrastructure datasets managed for the data lake.', '인프라 업무 시스템 DB를 데이터레이크의 원천 데이터로 관리했습니다.')],
 ['etl',380,110,L('Recurring integration','주기적 데이터 연계'),'SQL · ETL',L('Managed recurring data movement from the application databases into shared data storage.', '업무 시스템 DB에서 공유 데이터 저장소로 주기적으로 데이터를 연계했습니다.')],
 ['lake',680,110,L('Data lake','데이터레이크'),L('Shared operational data','공통 운영 데이터'),L('Provided infrastructure datasets for broader analysis and reuse across the organisation.', '조직이 분석·재사용할 수 있도록 인프라 데이터를 공통 환경에 공급했습니다.')],
 ['govern',680,320,L('Metadata & access','메타데이터 · 권한'),L('Security + disclosure rules','보안 등급 + 공개 범위'),L('Registered metadata and applied access and disclosure boundaries according to data security requirements.', '메타데이터를 등록하고 보안 요구사항에 맞춰 접근 권한과 공개 범위를 설정했습니다.')],
 ['bi',380,320,L('Self-service BI','셀프서비스 BI'),'SQL · Spotfire',L('Supported approved data use through SQL and Spotfire education and report development practices.', 'SQL·Spotfire 교육과 리포트 개발 지원으로 승인된 데이터를 직접 활용하도록 도왔습니다.')],
 ['reuse',110,320,L('Further reuse','활용 확장'),L('Reports + AI-ready data','리포트 + AI-ready data'),L('Extended governance work into defining data suitable for AI use in 2026, alongside ongoing BI use.', '기존 BI 활용과 함께 2026년에는 AI 활용에 적합한 데이터를 정의하는 업무로 확장했습니다.')]
 ],edges:[['db','etl'],['etl','lake'],['lake','govern'],['govern','bi'],['bi','reuse']]
},
{
 id:'engineering-practices', number:'06', type:'development', period:'2025 — 2026', category:L('ENGINEERING PRACTICES','개발 방식 · 품질 기준'),
 title:L('Consistent delivery, even as the tools change.', '도구가 바뀌어도, 개발 기준은 일관되게.'),
 short:L('AI-assisted engineering standards','AI 활용 개발 표준'),
 summary:L('Reusable team guidance for APIs, interface design, testable code and failure handling, alongside workflow-focused agent prototypes.', 'API·화면·테스트 가능 코드·실패 대응 기준을 재사용 가능한 팀 가이드로 정리하고, 업무 흐름 중심의 에이전트 확장에 적용.'),
 role:L('Standards author · Team enablement · Workflow & data integration developer','개발 표준 작성 · 팀 내 배포 · 워크플로·데이터 연계 개발'),
 metrics:[[L('Shared','공통'),L('API & design standards','API · 디자인 기준')],[L('Testable','테스트 가능한'),L('code generation guidance','코드 생성 가이드')],[L('Workflow-led','업무 흐름 중심'),L('agent integrations','에이전트 연계')]],
 before:L('Unstructured AI-assisted coding can introduce inconsistent APIs, UI patterns and maintenance practices. Faster code generation does not automatically produce a maintainable system.', '무분별한 AI 코드 생성은 API·디자인·유지보수 방식의 불일치로 이어질 수 있습니다. 코드 생성 속도만으로 운영 가능한 시스템이 만들어지지는 않습니다.'),
 after:L('Authored reusable skill documents defining API specifications, design rules, testability and fallback expectations, and distributed them for team use.', 'API 명세·설계 규칙·테스트 가능성·실패 시 대처 기준을 Skill 문서로 작성하고, 팀에서 이를 사용해 개발하도록 배포했습니다.'),
 outcome:L('Made engineering expectations explicit and reusable during AI-assisted development, while keeping agent work grounded in existing business workflows and data.', 'AI 활용 개발에서 지켜야 할 기준을 명시적으로 재사용할 수 있게 정리하고, 기존 업무 흐름과 데이터에 기반해 에이전트 기능을 확장했습니다.'),
 contribution:[L('Authored and distributed skill documents for API consistency, UI design, testability and fallback behaviour.', 'API 일관성·UI 디자인·테스트 가능성·fallback 동작을 위한 Skill 문서를 작성하고 배포했습니다.'),L('Built workflow and data-processing integrations around external language models, rather than training the models.', '외부 언어 모델을 활용하는 워크플로와 데이터 처리·연계 부분을 개발했습니다.'),L('Contributed to data suitability definitions and structured/unstructured data preparation for AI-ready initiatives.', 'AI 활용 가능 데이터 정의와 정형·비정형 데이터 구축·관리에 참여했습니다.')],
 decisions:[L('Define the engineering contract before generation.', '코드 생성 전에 개발 기준을 정의.'),L('Integrate models into a bounded workflow.', '모델을 업무 흐름 안에 연결.')],
 decisionText:[L('API and design standards, testability requirements and fallback expectations give generated code a consistent set of constraints.', 'API·디자인 표준, 테스트 가능성, fallback 기준으로 생성 코드가 따라야 할 공통 제약을 정리했습니다.'),L('The implementation work centres on selecting business data, calling tools and processing results within existing engineering applications.', '업무 데이터 선정, 도구 호출, 결과 처리와 기존 엔지니어링 애플리케이션 연계에 구현 역량을 집중했습니다.')],
 stack:['API design','Testability','Team standards','Python','Bedrock','AgentCore'],
 flowTitle:L('From shared standards to implementation','공통 기준에서 구현까지'),flowNote:L('A reusable engineering process, supported by AI tools.', 'AI 도구와 함께 사용하는 재사용 가능한 개발 프로세스입니다.'),
 nodes:[
 ['need',110,110,L('Business requirement','업무 요구사항'),L('Purpose + constraints','목적 + 제약'),L('Start with the business task and its operating context before choosing what to generate.', '생성할 코드를 정하기 전에 업무 목적과 운영 맥락을 정의합니다.')],
 ['rules',380,110,L('Shared skill documents','공통 Skill 문서'),L('API · UI · tests · fallback','API · UI · 테스트 · fallback'),L('Reusable guidance sets API, design, testability and failure-handling expectations.', '재사용 가능한 문서에 API·디자인·테스트 가능성·실패 대응 기준을 정리했습니다.')],
 ['build',680,110,L('Assisted implementation','AI 활용 구현'),L('Code + workflow integration','코드 + 워크플로 연계'),L('Use the shared skills during development to keep implementation aligned with team standards.', '팀의 공통 기준에 맞춰 구현하도록 개발 과정에 Skill을 적용했습니다.')],
 ['review',680,320,L('Engineering review','엔지니어 검토'),L('Behaviour + maintainability','동작 + 유지보수성'),L('Use explicit standards as the basis for reviewing behaviour, consistency and maintainability.', '명시적인 기준을 동작·일관성·유지보수성을 검토하는 기반으로 활용합니다.')],
 ['deliver',380,320,L('Application delivery','애플리케이션 반영'),L('Existing engineering systems','기존 엔지니어링 시스템'),L('Apply implementations within the business system and its existing data and operational context.', '기존 업무 시스템의 데이터·운영 맥락에 맞춰 구현 결과를 반영합니다.')]
 ],edges:[['need','rules'],['rules','build'],['build','review'],['review','deliver']]
},
{
 id:'field-engineering', number:'07', type:'operations', period:'2019 — 2020', category:L('DOMAIN FOUNDATION','현장 도메인 기반'),
 title:L('Understand the work before changing the system.', '시스템을 바꾸기 전에, 업무를 이해하다.'),
 short:L('Facilities engineering & reliability','설비 엔지니어링 · 신뢰성'),
 summary:L('Hands-on maintenance, operation and optimisation of the infrastructure equipment supporting semiconductor manufacturing.', '반도체 제조를 지원하는 인프라 공급 설비의 유지보수·운영·최적화를 직접 담당한 현장 경험.'),
 role:L('Facilities engineer · FDC / PM conductor · Quality & maintenance analysis','설비 엔지니어 · FDC·PM conductor · 품질·보전 데이터 분석'),
 metrics:[[L('Field-first','현장 기반'),L('engineering context','업무 이해')],[L('Data-informed','데이터 기반'),L('maintenance decisions','보전 판단')],[L('Operational','운영 중심'),L('quality & reliability','품질 · 신뢰성')]],
 before:L('Equipment reliability depends on understanding operating conditions, maintenance history and the causes of quality deviations—not only reacting to individual alarms.', '설비 신뢰성을 높이려면 개별 알람 대응을 넘어 운영 조건·보전 이력·품질 이탈 원인을 함께 이해해야 했습니다.'),
 after:L('Used quality and maintenance data to investigate abnormal behaviour, evaluate component replacement intervals and inform maintenance improvements.', '품질·보전 데이터를 분석해 이상 발생 원인을 조사하고 부품 교체 주기를 검토하며 유지보수 개선에 활용했습니다.'),
 outcome:L('Built the operational understanding that later shaped equipment data standards, system workflows and engineering applications.', '이후 기준정보 표준·업무 프로세스·엔지니어링 애플리케이션 설계의 기반이 된 현장 이해를 쌓았습니다.'),
 contribution:[L('Maintained and operated infrastructure supply equipment for semiconductor manufacturing.', '반도체 제조를 위한 인프라 공급 설비를 유지보수하고 운영했습니다.'),L('Analysed equipment quality and maintenance data while working as an FDC and PM conductor.', 'FDC·PM conductor로 설비 품질과 보전 데이터를 분석했습니다.'),L('Investigated abnormal conditions and optimal component replacement cycles to support improvement.', '설비 이상 원인과 적정 부품 교체 주기를 분석해 개선 업무를 수행했습니다.')],
 decisions:[L('Link the symptom to the operating history.', '이상 현상과 운영 이력을 함께 분석.'),L('Use data to inform preventive maintenance.', '데이터로 예방 보전을 개선.')],
 decisionText:[L('Quality and maintenance records provide complementary views of equipment behaviour and support cause investigation.', '품질과 보전 이력을 함께 확인해 설비 상태를 이해하고 이상 원인을 분석했습니다.'),L('Replacement intervals are an engineering decision informed by equipment condition and historical maintenance data.', '설비 상태와 과거 보전 데이터를 바탕으로 부품 교체 주기를 검토했습니다.')],
 stack:['FDC','Preventive maintenance','Quality analysis','Root-cause analysis','Facilities operations'],
 flowTitle:L('From field signals to maintenance improvement','현장 데이터에서 보전 개선으로'),flowNote:L('The operational foundation behind the software work.', '시스템 개발의 기반이 된 현장 업무 흐름입니다.'),
 nodes:[
 ['equipment',110,110,L('Facility equipment','인프라 공급 설비'),L('Semiconductor infrastructure','반도체 제조 인프라'),L('Infrastructure supply equipment supports semiconductor manufacturing operations.', '반도체 제조를 지원하는 인프라 공급 설비를 담당했습니다.')],
 ['data',380,110,L('Quality & maintenance','품질 · 보전 정보'),L('FDC + PM records','FDC + PM 데이터'),L('Collected operating context through equipment quality and maintenance information.', '설비의 품질·보전 정보를 활용해 운영 상황을 파악했습니다.')],
 ['analysis',680,110,L('Cause investigation','원인 분석'),L('Patterns + equipment history','데이터 패턴 + 설비 이력'),L('Analysed abnormal behaviour and the equipment history relevant to maintenance decisions.', '이상 동작과 관련 설비 이력을 분석해 보전 판단에 활용했습니다.')],
 ['action',680,320,L('Maintenance improvement','보전 개선'),L('Parts + replacement timing','부품 + 교체 시점'),L('Used findings to evaluate component replacement intervals and equipment improvements.', '분석 결과로 적정 부품 교체 주기와 설비 개선 방향을 검토했습니다.')],
 ['operate',380,320,L('Operate & optimise','운영 · 최적화'),L('Reliability + efficiency','신뢰성 + 효율'),L('Applied maintenance and operating improvements within the infrastructure environment.', '인프라 환경에 보전·운영 개선을 적용했습니다.')]
 ],edges:[['equipment','data'],['data','analysis'],['analysis','action'],['action','operate'],['operate','equipment','loop']]
}
];

// Public case-study context. Company code, screenshots and production records are not included.
const caseNotes = {
 'delivery': {
  short:L('Engineering document delivery platform','도면 및 데이터 납품 플랫폼'),
  navLabel:L('Document delivery','납품 자동화'),status:L('Production platform','운영 플랫폼'),
  cardProof:L('Direct submission → automated validation → engineering approval','업체 직접 제출 → 자동 검수 → 엔지니어 승인'),
  metricKinds:['scope','scope','method'],
  owned:L('Process redesign, web/backend development, extraction and validation pipelines, AWS deployment and CI/CD.','업무 재설계, 웹·백엔드 개발, 추출·검수 파이프라인, AWS 배포와 CI/CD.'),
  foundation:L('AWS services and Autodesk APS provide cloud and drawing-processing capabilities. Contractors supply files; internal engineers own final acceptance.','AWS·Autodesk APS의 클라우드·도면 처리 기능을 활용합니다. 업체가 파일을 제출하고 사내 엔지니어가 최종 승인합니다.'),
  measurement:L('Drawing and asset counts describe project scope per fabrication site (FAB); they are not time savings or a processing-speed benchmark. The workflow change is direct contractor submission with automated first-pass validation.','도면·설비 수는 FAB(반도체 제조 사업장)당 프로젝트 범위이며 시간 절감률이나 처리 속도 벤치마크가 아닙니다. 업체 직접 제출과 자동 1차 검수가 업무상 변화입니다.'),
  details:[
   {title:L('Asynchronous processing and repeat submissions','비동기 처리와 중복 제출'),challenge:L('Drawing extraction and validation should not be one long web request. Repeated delivery events must not create repeated downstream registrations.','도면 추출·검수를 하나의 긴 웹 요청에서 처리하지 않고, 반복 이벤트가 하위 시스템의 중복 등록으로 이어지지 않도록 해야 했습니다.'),implementation:L('Connected S3 intake to EventBridge, SQS and Lambda. Used retries, duplicate detection and idempotent processing in the ingestion pipeline, with APS APIs for drawing extraction.','S3 수집을 EventBridge·SQS·Lambda로 연결했습니다. 수집 파이프라인에 재시도·중복 감지·멱등 처리를 적용하고 APS API로 도면 정보를 추출했습니다.'),verification:L('The operating concern is both completion and uniqueness: a retried submission must reach the intended result without registering the same engineering record again.','완료 여부와 중복 여부를 함께 관리했습니다. 제출물을 재처리하더라도 동일한 엔지니어링 정보를 반복 등록하지 않도록 구성했습니다.')},
   {title:L('Automated checks with a human acceptance boundary','자동 검수와 사람의 최종 승인'),challenge:L('Moving uploads to the cloud alone would preserve the same manual correction loop. Rule validation and engineering acceptance serve different purposes.','업로드 위치만 클라우드로 옮기면 수동 수정 업무는 남습니다. 규칙 검수와 엔지니어의 최종 수용 판단은 목적이 다릅니다.'),implementation:L('Extracted data into structured records, applied predefined validation logic and returned issues to contractors and employees. Completed submissions proceed to the employee’s final review.','도면 정보를 구조화하고 사전 정의한 검수 로직을 적용해 업체·직원에게 결과를 전달했습니다. 검수가 완료된 제출물은 직원의 최종 확인으로 연결했습니다.'),verification:L('Validation results identify what requires correction before acceptance. Final approval stays with the responsible engineer rather than being inferred from extraction success.','추출 성공만으로 납품 승인을 판단하지 않고, 검수 결과에 따라 수정할 대상을 식별한 뒤 담당 엔지니어가 최종 승인하도록 했습니다.')},
   {title:L('Delivery and operational responsibility','배포와 운영 책임'),challenge:L('A pipeline needs a usable application, controlled access and a repeatable way to deliver changes.','파이프라인을 실제 업무에 쓰려면 사용자 화면, 접근 통제, 반복 가능한 변경 배포가 필요했습니다.'),implementation:L('Built FastAPI/Vue interfaces and backend services on EC2, with validated REST APIs, role-based access and audit logging. Configured CodeCommit, CodeDeploy and CodePipeline for delivery.','EC2 환경의 FastAPI·Vue 화면과 백엔드를 개발하고 REST API 검증·역할 기반 접근·감사 로그를 구현했습니다. CodeCommit·CodeDeploy·CodePipeline으로 배포를 구성했습니다.'),verification:L('Delivery work included automated tests, health checks and rollback procedures. Operational support remained part of the application lifecycle after launch.','자동 테스트·상태 점검·롤백 절차를 배포 업무에 포함했으며, 출시 후 운영 지원도 애플리케이션 생애주기의 일부로 담당했습니다.')}
  ]
 },
 'master-data': {
  navLabel:L('Master data','기준정보'),status:L('Production platform','운영 플랫폼'),
  cardProof:L('87% less registration time · discrepancies 17% → 0%','등록 업무 시간 87% 감소 · 불일치율 17% → 0%'),
  metricKinds:['outcome','outcome','scope'],
  owned:L('Equipment-data standards, lifecycle/process design, initial data preparation, Python/SQL validation, ETL/EAI integration and reconciliation reporting.','설비 데이터 표준, 생애주기·업무 프로세스 설계, 초기 데이터 정리, Python·SQL 검수, ETL/EAI 연계와 대사 리포트.'),
  foundation:L('Existing quality, maintenance, work and operations applications retained their own business functions. The shared foundation aligned equipment information between them.','품질·보전·작업·운영 시스템의 고유 업무 기능은 유지하면서 공통 설비 정보를 시스템 사이에 연결했습니다.'),
  measurement:L('87% compares engineer time for equivalent registration work across individual systems before and after the change. The 17% → 0% result is the project’s measured cross-system discrepancy rate, not a claim that all future data is error-free.','87%는 개별 시스템에서 수행하던 동일한 등록 업무의 전후 소요 시간 비교입니다. 17% → 0%는 이 프로젝트에서 측정한 시스템 간 불일치율이며, 이후 모든 데이터의 무오류를 의미하지 않습니다.'),
  details:[
   {title:L('One identity across different system lifecycles','서로 다른 시스템 생애주기를 공통 기준으로 연결'),challenge:L('Different applications needed equipment data at different stages: ordering, registration, commissioning and turn-on. A shared record alone would not resolve timing differences.','발주·등록·시운전·턴온 단계에 따라 시스템별로 필요한 데이터와 시점이 달랐습니다. 공통 레코드만 만드는 것으로 해결되지 않았습니다.'),implementation:L('Defined common equipment identifiers and data standards, mapped application requirements and designed when each system should receive data through ETL/EAI.','공통 설비 식별 기준과 데이터 표준을 정의하고, 시스템 요구사항을 분석해 ETL/EAI로 정보를 전달할 시점을 설계했습니다.'),verification:L('Reviewed the shared data against each destination’s business requirements so standardisation supported existing operations.','표준화된 데이터가 기존 업무에서도 동작하도록 대상 시스템별 데이터 요건과 업무 시점에 맞춰 확인했습니다.')},
   {title:L('Validate before registration, reconcile after integration','등록 전 검수와 연계 후 대사'),challenge:L('Initial migration involved approximately one million rows across 50 columns. A successful transfer did not by itself prove consistency between systems.','초기 데이터는 약 100만 행·50개 열 규모였습니다. 데이터 전송 성공만으로 시스템 간 일치 여부를 확인할 수 없었습니다.'),implementation:L('Developed Python/SQL checks for missing, duplicate and inconsistent records. Created Spotfire reports using SQL queries against the participating databases to compare integration results.','누락·중복·불일치 레코드를 확인하는 Python·SQL 검수 로직을 개발했습니다. 각 시스템 DB를 SQL로 조회하고 Spotfire 리포트에서 연계 결과를 비교했습니다.'),verification:L('Used pre-registration checks alongside cross-system comparison. This separated data validity at intake from consistency after distribution.','등록 데이터 자체의 유효성과 연계 후 시스템 간 일치 여부를 구분해 사전 검수와 사후 비교를 함께 수행했습니다.')},
   {title:L('Support adoption and extend the system after launch','출시 후 정착 지원과 기능 확장'),challenge:L('Users needed a workable daily process, not just a completed migration. New requirements and additional systems continued to appear.','데이터 이관 이후에도 사용자가 일상 업무에 활용할 수 있어야 했고, 신규 요구사항과 추가 연계가 계속 발생했습니다.'),implementation:L('Supported user requests, incidents and training for approximately one year. Analysed and developed new features and integrations, including environmental safety and material-registration systems.','약 1년간 VOC·오류 대응·사용자 교육을 담당했습니다. 환경안전·소재등록 시스템 등의 추가 연계와 신규 기능을 분석·정의·개발했습니다.'),verification:L('Also supported the Austin and Taylor FAB rollouts during a U.S. assignment in September–November 2024, working with local engineering users on adoption.','2024년 9~11월 미국 출장에서는 Austin·Taylor FAB 전개와 현지 엔지니어의 활용 정착을 지원했습니다.')}
  ]
 },
 'digital-twin': {
  period:'2023 — 2024',navLabel:L('Digital twin','디지털트윈'),status:L('Production · extensions in progress','운영 중 · 확장 진행 중'),
  cardProof:L('8 systems connected · 1.5M assets & components linked','8개 시스템 연결 · 설비·구성요소 150만 개 연계'),
  metricKinds:['scope','scope','scope'],
  owned:L('Vendor evaluation and PoCs, Vue interfaces, Python backend, model-to-equipment integration, and on-premises CI/CD delivery.','벤더 평가·PoC, Vue 화면, Python 백엔드, 모델·설비 데이터 연계와 사내 CI/CD 배포.'),
  foundation:L('Vendor technologies and supplied 3D models form the foundation. My responsibility was the application and integration layers, not developing a 3D engine or authoring every model.','외부 기술과 납품된 3D 모델을 기반으로 활용했습니다. 담당 범위는 3D 엔진 자체나 모든 모델 제작이 아니라 업무 애플리케이션과 데이터 연계 계층입니다.'),
  measurement:L('System, asset/component and user counts describe deployment scope. The business benefit is remote location and context lookup; no unmeasured time-saving percentage is claimed.','시스템·설비·구성요소·사용자 수는 적용 범위입니다. 원격으로 위치와 관련 정보를 확인하는 것이 업무상 변화이며, 별도로 측정하지 않은 시간 절감률을 제시하지 않습니다.'),
  details:[
   {title:L('Link the model to an equipment identity','모델을 설비 식별 기준에 연결'),challenge:L('A visible 3D object is useful for operations only when it can be connected to the right equipment record and its history.','3D 객체를 운영 업무에 활용하려면 해당 객체를 정확한 설비 정보와 이력에 연결해야 했습니다.'),implementation:L('Built model preprocessing and equipment mapping with Autodesk APS/Revit integration, then developed search and selection interactions in the Vue application.','Autodesk APS·Revit 연계를 통한 모델 전처리와 설비 매핑을 구현하고 Vue 애플리케이션의 검색·선택 기능을 개발했습니다.'),verification:L('The engineering focus was the equipment-to-model relationship: locating an object and retrieving information had to refer to the same equipment.','모델 위치 탐색과 정보 조회가 동일한 설비를 가리키도록 모델·설비 관계를 중심으로 구현했습니다.')},
   {title:L('Combine spatial and operational information','공간 정보와 운영 정보를 통합'),challenge:L('Location alone could not answer questions about quality deviations, maintenance or work in progress. Those records lived in separate applications.','위치만으로 품질 이탈·보전·진행 중인 작업을 파악할 수 없었고, 관련 정보는 서로 다른 시스템에 있었습니다.'),implementation:L('Developed Python backend and ETL/EAI integrations across eight systems. Selecting equipment brings quality trends, maintenance history and work status into the 3D workspace.','8개 시스템의 정보를 연결하는 Python 백엔드와 ETL/EAI를 개발했습니다. 설비를 선택하면 품질 트렌드·보전 이력·작업 현황이 3D 업무 공간에 표시됩니다.'),verification:L('Kept the application layer distinct from the supplied viewer technology. Business-facing data adapters and interactions were part of my implementation.','공급된 뷰어 기술과 직접 구현한 업무 계층을 구분했습니다. 업무 데이터 어댑터와 사용자 상호작용은 직접 개발한 범위입니다.')},
   {title:L('Evaluate the foundation and deliver on premises','기반 기술 평가와 온프레미스 배포'),challenge:L('The solution had to handle engineering-model scale and fit the company’s operating environment.','엔지니어링 모델 규모를 처리하면서 회사 운영 환경에도 맞는 솔루션이 필요했습니다.'),implementation:L('Conducted technical meetings and PoCs with NVIDIA, Siemens and AVEVA, comparing performance, stability and extensibility. Delivered the web application with Git, Jenkins and Kubernetes-based CI/CD.','NVIDIA·Siemens·AVEVA와 기술 미팅·PoC를 진행해 성능·안정성·확장성을 비교했습니다. Git·Jenkins·Kubernetes 기반 CI/CD로 웹 애플리케이션을 배포했습니다.'),verification:L('Production delivery and current extensions are separate: simulation model conversion and AMR/AGV patrol integration remain ongoing development.','기존 운영 서비스와 확장 개발을 구분합니다. 시뮬레이션 모델 변환과 AMR·AGV 패트롤 연계는 현재 진행 중인 개발입니다.')}
  ]
 },
 'drawings': {
  navLabel:L('Drawing data','도면 데이터'),status:L('Production platform','운영 플랫폼'),metricKinds:['scope','capability','method'],
  details:[{title:L('Structured drawing information and completeness checks','도면 정보 구조화와 납품 검수'),challenge:L('A file could be registered without providing the drawing information engineers actually needed. Searchability depended on consistent source objects.','파일이 등록돼도 실제 업무에 필요한 도면 정보가 없을 수 있었습니다. 검색 가능한 데이터를 만들려면 원천 객체의 일관성이 필요했습니다.'),implementation:L('Defined drawing conventions and reusable libraries, structured P&ID/PFD equipment relationships and automated delivery completeness and design-rule checks.','작도 표준·공통 라이브러리를 정의하고 P&ID·PFD의 설비 관계를 구조화했으며, 납품 완결성과 설계 규칙 검수를 자동화했습니다.'),verification:L('Equipment-to-drawing relationships support retrieval by equipment name. Submission checks surface issues before engineering review.','설비명으로 관련 도면을 조회하도록 관계를 구성하고, 엔지니어 검토 전에 제출 문제를 확인할 수 있게 했습니다.')}]
 },
 'data-platform': {
  navLabel:L('Data & governance','데이터·거버넌스'),status:L('Operational data · governance','운영 데이터 · 거버넌스'),metricKinds:['scope','method','capability'],
  details:[
   {title:L('ETL monitoring and operational recovery','ETL 모니터링과 운영 복구'),challenge:L('Recurring integration needed a way to identify failed jobs and support investigation and recovery.','주기적 연계에서 실패한 작업을 식별하고 원인 조사·복구를 지원할 수단이 필요했습니다.'),implementation:L('Built a FastAPI/Oracle/Vue.js dashboard with job-level logs, failure alerts and retry controls for ETL operations.','ETL 운영을 위한 작업별 로그·실패 알림·재시도 기능을 갖춘 FastAPI·Oracle·Vue.js 대시보드를 개발했습니다.'),verification:L('Job-level visibility makes a failure actionable: operators can identify the affected run and use recovery controls rather than infer success from the schedule.','일정이 실행됐다는 사실만 확인하는 대신, 운영자가 문제가 발생한 작업을 찾아 복구할 수 있도록 가시성을 확보했습니다.')},
   {title:L('Access governance and engineering adoption','접근 거버넌스와 현업 활용 지원'),challenge:L('Sharing operational data required metadata and disclosure rules, particularly when records included sensitive information.','운영 데이터를 공유하려면 메타데이터와 공개 기준이 필요했고, 민감 정보는 접근 범위를 구분해야 했습니다.'),implementation:L('Defined metadata and security classifications and restricted access by data sensitivity. Taught SQL and Spotfire so engineering users could build reports from available data.','메타데이터·보안 등급을 정의하고 민감도에 따라 접근을 제한했습니다. 현업 사용자가 직접 리포트를 만들 수 있도록 SQL·Spotfire 교육을 진행했습니다.'),verification:L('The approximately 2,000-person figure describes the engineering organisation, not a claim that every employee attended training.','약 2,000명은 교육 활동이 이루어진 조직의 규모이며, 전원이 수강했다는 의미는 아닙니다.')}
  ]
 },
 'engineering-practices': {navLabel:L('Practices','개발 방식'),status:L('Team practices · agent prototypes','팀 개발 방식 · 에이전트 프로토타입'),metricKinds:['method','method','method']},
 'field-engineering': {navLabel:L('Field experience','현장 경험'),status:L('Engineering background','현장 경력'),metricKinds:['context','context','context']}
};
projects.forEach(p => Object.assign(p,caseNotes[p.id]));

projects.find(p=>p.id==='data-platform').stack.push('FastAPI','Oracle','Vue.js');
projects.find(p=>p.id==='delivery').measurement=L('Counts describe project scope per semiconductor fabrication site (FAB). The delivered workflow combines direct contractor submission, automated first-pass validation and final engineering approval.','수치는 반도체 제조 사업장(FAB)당 프로젝트 범위입니다. 업체 직접 제출·자동 1차 검수·엔지니어의 최종 승인을 하나의 업무 흐름으로 연결했습니다.');
projects.find(p=>p.id==='master-data').measurement=L('87% compares engineer time for equivalent registration tasks before and after integration. The 17% → 0% figure is the discrepancy rate observed in the project’s cross-system reconciliation.','87%는 연계 전후 동일한 등록 업무에 필요한 엔지니어의 시간 비교입니다. 17% → 0%는 이 프로젝트의 시스템 간 데이터 대사에서 확인한 불일치율입니다.');
projects.find(p=>p.id==='digital-twin').measurement=L('Counts describe production deployment scope. The operational change is remote equipment location and access to connected quality, maintenance and work information in one spatial workspace.','수치는 운영 서비스의 적용 범위입니다. 하나의 공간에서 원격으로 설비 위치와 품질·보전·작업 정보를 확인할 수 있게 된 것이 업무상 변화입니다.');
projects.find(p=>p.id==='data-platform').details[1].verification=L('Data availability and permission were treated together: access followed security classifications, while SQL and Spotfire education supported approved self-service use.','데이터 공급과 접근 권한을 함께 관리했습니다. 보안 등급에 맞춰 접근을 설정하고 SQL·Spotfire 교육으로 허용된 데이터의 셀프서비스 활용을 지원했습니다.');
