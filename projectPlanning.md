# Project Planning

## All tasks
- Have a client meeting, create requirements
- Create the PID
- Create the Business Case
- Create a Cost Benefit Appraisal
- Create a MoSCoW Analysis document
- Create a Risk management document
- Create a low fidelity wire frame
- Create a high fidelity wire frame
- Create the Force field analysis
- Create the COCOMO
- Create a testing document
- Create the UI
- Create API links
- Train the AI chatbot with FAQ's
- Create a human escalation feature
- Create AI assistant and embedded AI messages
- Create chat message entry
- 
- 


## Table

| No. | Predecessor | Activity | Days |
|--------|--------|--------|--------|
| 1 | — | Client meeting and gather requirements | 0.5 |
| 2 | 1 | Create PID | 1 |
| 3 | 1 | Create Business Case | 2 |
| 4 | 3 | Create Cost Benefit Appraisal | 1 |
| 5 | 1 | Create MoSCoW Analysis | 0.5 |
| 6 | 2, 5 | Create Risk Management Plan | 0.5 |
| 7 | 5 | Create low-fidelity wireframes | 1 |
| 8 | 7 | Create high-fidelity wireframes | 2 |
| 9 | 3 | Create Force Field Analysis | 0.5 |
| 10 | 5 | Create COCOMO estimate | 0.5 |
| 11 | 5 | Create testing plan and acceptance tests | 2 |
| 12 | 8 | Develop chatbot UI | 2 |
| 13 | 5 | Develop API integrations | 1 |
| 14 | 5 | Prepare FAQs and approved knowledge sources | 2 |
| 15 | 13, 14 | Integrate and configure AI chatbot | 2 |
| 16 | 12, 15 | Create chat message entry and display | 0.5 |
| 17 | 15 | Develop human escalation feature | 1 |
| 18 | 15 | Develop AI voice call pipeline | 2 |
| 19 | 15 | Implement support category routing | 1 |
| 20 | 16, 19 | Integrate pre-recorded support videos | 1 |
| 21 | 16, 17, 18, 19, 20 | Integrate text, voice and escalation features | 1 |
| 22 | 21 | Implement security and data protection controls | 1 |
| 23 | 21 | Implement usage and cost monitoring | 1 |
| 24 | 11, 22, 23 | Conduct functional and integration testing | 2 |
| 25 | 24 | Conduct user acceptance testing and fix critical issues | 2 |
| 26 | 25 | Deploy chatbot as OCI container | 1 |
| 27 | 26 | Client demonstration, documentation and handover | 1 |


---------------------------------------------------------------
## Product Descriptions
**Format:**
- Purpose: Why is the product required?
- Composition: What makes up the product?
- Derivation: Which, if any, previous products is it based upon? Where will information needed to develop it come from?
- Quality/completion criteria

------

### 1. Project Initiation Document (PID)

**Purpose:** To define the project's objectives, scope, budget, timescale and responsibilities so that everyone understands what needs to be delivered.

**Composition:** Project objectives, scope, stakeholders, resources, budget, schedule, risks and acceptance criteria.

**Derivation:** Based on the client meeting, project requirements and information provided in the case study.

**Quality/Completion Criteria:** The PID clearly defines the project and its constraints, with the relevant information reviewed and agreed by the project team and client.

### 2. Business Case and Cost Benefit Appraisal

**Purpose:** To justify why the project should go ahead and determine whether the expected financial benefits outweigh the costs.

**Composition:** Business objectives, alternative solutions, estimated costs, expected benefits, financial calculations and identified risks.

**Derivation:** Based on the client's cost-reduction objectives, staffing estimates, project costs and available business information.

**Quality/Completion Criteria:** The calculations are accurate, assumptions are clearly identified, and the document demonstrates whether the proposed solution is financially worthwhile.

### 3. MoSCoW Analysis

**Purpose:** To prioritise the project requirements so that the most important functionality is delivered within the available time and budget.

**Composition:** Requirements separated into Must Have, Should Have, Could Have and Won't Have categories.

**Derivation:** Based on the client requirements, PID and agreed project scope.

**Quality/Completion Criteria:** All identified requirements have been considered, priorities are justified, and the Must Have requirements reflect the minimum acceptable solution.

### 4. Risk Management Plan

**Purpose:** To identify potential problems that could affect the project and establish how they will be managed.

**Composition:** Risk descriptions, likelihood, impact, mitigation strategies, responsibilities and contingency actions.

**Derivation:** Based on the project requirements, technical complexity, schedule, budget and risks identified during planning.

**Quality/Completion Criteria:** The main project risks have been identified and assessed, with realistic actions in place to reduce their likelihood or impact.

### 5. Force Field Analysis

**Purpose:** To identify the factors supporting and resisting the introduction of the AI customer-support system.

**Composition:** Driving forces, restraining forces, their relative strengths and possible actions to manage resistance.

**Derivation:** Based on the Business Case, client objectives and expected organisational changes, including the proposed reduction in support staff.

**Quality/Completion Criteria:** The analysis identifies relevant forces on both sides and explains how the project could strengthen supporting factors and reduce resistance.

### 6. COCOMO Estimate

**Purpose:** To estimate the effort and development costs involved in creating the system.

**Composition:** Estimated software size, model assumptions, effort calculations, development time and estimated staffing costs.

**Derivation:** Based on the proposed system functionality, technical requirements and assumptions about the development work.

**Quality/Completion Criteria:** The calculations use an appropriate COCOMO model, assumptions are explained, and the results can be used to support project planning.

### 7. Low-Fidelity Wireframes

**Purpose:** To provide an early visual representation of the chatbot interface before detailed design and development begin.

**Composition:** Basic layouts showing the chat interface, message entry, navigation, buttons and main user interactions.

**Derivation:** Based on the MoSCoW analysis, client requirements and intended customer interactions.

**Quality/Completion Criteria:** The wireframes demonstrate the main functionality and allow the layout and user experience to be reviewed before further development.

### 8. High-Fidelity Wireframes

**Purpose:** To show a more realistic version of the final chatbot interface, including its appearance and how customers will interact with it.

**Composition:** Detailed interface designs, business branding, colours, typography, chat messages, buttons and instructional video presentation.

**Derivation:** Based on the approved low-fidelity wireframes, client branding and feedback received during design.

**Quality/Completion Criteria:** The designs clearly demonstrate the intended final interface, follow the agreed requirements and are suitable for development.

### 9. Text Chatbot Interface

**Purpose:** To allow customers to ask questions and receive AI-generated support through a website.

**Composition:** Chat window, message input, send button, message display, loading indicators, business branding and responsive layout.

**Derivation:** Based on the high-fidelity wireframes, MoSCoW analysis and agreed customer support requirements.

**Quality/Completion Criteria:** Customers can send messages and receive readable responses, the interface works on the agreed devices and browsers, and the design matches the approved requirements.

### 10. AI Response System and Knowledge Base

**Purpose:** To provide automated answers to customer enquiries using approved information about the company's products and support procedures.

**Composition:** AI model integration, approved FAQs, knowledge sources, response instructions and support category handling.

**Derivation:** Based on existing company FAQs, product documentation, support information and the agreed enquiry topics.

**Quality/Completion Criteria:** The system provides relevant answers to supported questions, uses approved information and handles questions it cannot confidently answer through the agreed escalation process.

### 11. AI Voice Call Agent

**Purpose:** To allow customers to telephone the company and speak directly with an AI agent instead of relying entirely on human support employees.

**Composition:** Telephone service integration, speech recognition, AI response generation, text-to-speech functionality and call escalation.

**Derivation:** Based on the agreed voice-support requirements, AI knowledge base and the chosen telephone integration service.

**Quality/Completion Criteria:** The agent can receive calls through the agreed telephone route, understand spoken enquiries, provide understandable spoken responses and escalate unresolved calls appropriately.

### 12. Human Escalation System

**Purpose:** To ensure customers can receive assistance from a human employee when the AI cannot resolve their enquiry.

**Composition:** Escalation triggers, referral process, relevant conversation details and a method of directing customers to human support.

**Derivation:** Based on the client's existing support procedures, agreed escalation rules and the limitations of the AI system.

**Quality/Completion Criteria:** Complex or unresolved enquiries can be referred to human support, with the relevant information passed on where appropriate and in line with data protection requirements.

### 13. Instructional Video Support

**Purpose:** To help customers resolve specific problems by providing relevant pre-recorded instructional videos through the chatbot.

**Composition:** Existing instructional videos, video links or embedded playback, and functionality for selecting and sharing relevant videos.

**Derivation:** Based on the company's existing support videos, FAQs and agreed customer support topics.

**Quality/Completion Criteria:** The chatbot can identify when a relevant video is available, share the correct video and allow customers to access it successfully.

### 14. API Integrations and Support Category Routing

**Purpose:** To connect the different parts of the system and ensure customer enquiries are handled by the appropriate functionality.

**Composition:** API connections, communication between the interface and AI services, category identification and routing logic.

**Derivation:** Based on the technical design, selected services, approved support categories and project requirements.

**Quality/Completion Criteria:** The required services communicate successfully, enquiries are routed correctly, and integration errors are handled appropriately.

### 15. Security and Data Protection

**Purpose:** To protect customer information and reduce security and privacy risks when using the AI customer-support system.

**Composition:** Secure communications, access controls, data handling rules, appropriate storage arrangements and protection of sensitive information.

**Derivation:** Based on the project's security requirements, the types of customer information being processed and applicable data protection obligations.

**Quality/Completion Criteria:** The agreed security controls have been implemented and tested, customer information is handled appropriately, and identified critical security issues are resolved before deployment.

### 16. Usage and Cost Monitoring

**Purpose:** To measure how the AI customer-support system is being used and evaluate whether it is helping reduce support costs.

**Composition:** Enquiry counts, usage records, estimated cost per enquiry and relevant operational information.

**Derivation:** Based on the project's financial objectives, Business Case and available usage information from the AI and telephone services.

**Quality/Completion Criteria:** The system can record the agreed usage measures and produce information that can be used to compare support costs against the established baseline.

### 17. Testing Plan and Test Results

**Purpose:** To confirm that the system works correctly, meets the agreed requirements and is suitable for deployment.

**Composition:** Test cases, expected results, actual results, identified defects, functional testing, integration testing and user acceptance testing.

**Derivation:** Based on the MoSCoW requirements, product descriptions, acceptance criteria and implemented system functionality.

**Quality/Completion Criteria:** The agreed tests have been completed, results have been recorded, critical defects have been resolved and the system meets the agreed acceptance criteria.

### 18. Deployed AI Customer Support System

**Purpose:** To deliver a working AI customer-support solution that can be used by the company to handle customer enquiries.

**Composition:** Integrated chatbot interface, AI response system, voice agent, escalation functionality, supporting services and OCI-compatible container deployment.

**Derivation:** Based on the completed and tested system components, technical design and agreed deployment requirements.

**Quality/Completion Criteria:** The system is successfully deployed in the agreed environment, the required features operate correctly, and the client can access and use the solution.

### 19. Documentation and Client Handover

**Purpose:** To provide the client with the information needed to operate, maintain and manage the AI customer-support system after delivery.

**Composition:** User guidance, technical documentation, deployment information, support procedures, known limitations and handover records.

**Derivation:** Based on the completed system, testing results, deployment configuration and agreed operational procedures.

**Quality/Completion Criteria:** The documentation is complete and understandable, the client has received the necessary information, and the agreed handover and acceptance activities have been completed.

----------------------------------------------------------------

## Work Packages

| Package No. | Product Description | Estimated Effort | Due Date | Responsibility |
|---|---|---|---|---|
| 1 | Client meeting and requirements document | 0.5 days | Week 1 | Project Manager / Business Analyst |
| 2 | Project Initiation Document (PID) | 1 day | Week 1 | Project Manager |
| 3 | Business Case | 2 days | Week 1 | Business Analyst |
| 4 | Cost Benefit Appraisal | 1 day | Week 1 | Business Analyst |
| 5 | MoSCoW Analysis document | 0.5 days | Week 1 | Business Analyst |
| 6 | Risk Management Plan | 0.5 days | Week 1 | Project Manager |
| 7 | Low-fidelity wireframes | 1 day | Week 2 | UI/UX Designer |
| 8 | High-fidelity wireframes | 2 days | Week 2 | UI/UX Designer |
| 9 | Force Field Analysis | 0.5 days | Week 1 | Project Manager / Business Analyst |
| 10 | COCOMO estimation document | 0.5 days | Week 1 | Technical Lead |
| 11 | Testing plan and acceptance criteria | 2 days | Week 2 | Tester / Business Analyst |
| 12 | Chatbot user interface | 2 days | Week 3 | Frontend Developer |
| 13 | API connections and integrations | 1 day | Week 3 | Backend Developer |
| 14 | Approved FAQ knowledge base | 2 days | Week 3 | Business Analyst / AI Developer |
| 15 | AI chatbot configuration and response system | 2 days | Week 3 | AI Developer |
| 16 | Chat message entry and display functionality | 0.5 days | Week 3 | Frontend Developer |
| 17 | Human escalation feature | 1 day | Week 4 | Backend Developer |
| 18 | AI voice-call agent and telephone integration | 2 days | Week 4 | AI Developer |
| 19 | Customer enquiry category routing | 1 day | Week 4 | Backend Developer |
| 20 | Pre-recorded instructional video integration | 1 day | Week 4 | Frontend Developer |
| 21 | Integrated text, voice and escalation system | 1 day | Week 4 | Technical Lead / Developers |
| 22 | Security and data protection controls | 1 day | Week 4 | Backend Developer |
| 23 | Usage and cost monitoring functionality | 1 day | Week 4 | Backend Developer |
| 24 | Functional and integration testing results | 2 days | Week 5 | Tester / Developers |
| 25 | User acceptance testing and critical defect fixes | 2 days | Week 5 | Tester / Client / Developers |
| 26 | Deployed chatbot system using an OCI container | 1 day | Week 5 | Technical Lead |
| 27 | Client handover and supporting documentation | 1 day | Week 5 | Project Manager / Technical Lead |

