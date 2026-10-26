# Buisness Case

The purpose of this document is to outline the buisness case for developing and deploying a customer facing support chatbot at scale. This document will include evaluating the available solutions, estimate their costs and benefits, identify associated risks, and recommend an appropriate approach to achieving the organisation's objectives.

The purpose of this project is to reduce operating costs and streamline the support experience for end users by providing faster assistance. We have 50 human support staff which costs us upwards of £1.15 million per annum. If we can reduce the amount of staff to 10 (80% reduction), we can lower this figure to £185k per annum, not including overhead costs such as office space, equipment and other expenses.

## Management Summary

The current support process relies heavily on manual human support via a dedicated support team, even for the most common routine inquiries. This can result in long wait periods for common questions, limits the availability of support outside of working hours and prevents us from solving more complex customer inquiries.

Through this project, we have an opportunity to reduce overhead costs by delegating the simpler routine support inquries to a lower cost AI support team. This will improve the operating efficiency of the support team and reduce the amount of human staff required.

By completing this project, we can build a working client relationship with Johnathon Jones, who operates a multi-million dollar enterprise.

Selected option:
An AI powered chatbot because it provides higher quality responses, has a lower operating margin and allows inhouse support system rather than outsourcing to another company, improving our resilience and reducing external dependencies.

## Description of the Problem and Opportunity

Jon Jones currently employs 50 customer support staff, resulting in significant ongoing staffing expenditure. The client aims to reduce this workforce to 10 employees to lower operating costs while maintaining an effective customer support service.

Many routine customer enquiries are suitable for automation, creating an opportunity to reduce the demand for human support. An AI-powered chatbot could provide faster responses to common enquiries, while directing more complex issues to the remaining support employees.

## Cost Benefit Appraisal

...

## Alternative Options

### Outsource customer support to a 3rd party call centre

- Outsourcing may introduce challenges involving service quality
- Data protection
- Higher operational costs compared to inhouse soloution.
- Call centres might be unavailable during buisness hours (timezone differences)
- customer support experience is more generic and less tailored to our company

## Asyncronous Visual/Interactive demos

- Costly to produce
- Need to be reproduced if a product has a design change
- Not accessible to impared customers
- More suitable for product tutorials rather than general customer support

### Direct customers to an FAQ page

- Too generic to accomodate the unique experience of each customer
- No way to upsell clients on additional support

### Do nothing

- opportunity cost of >~£800k

## Selected Option

Our client has decided to create an AI powered chatbot because it provides higher quality responses, has a lower operating margin and allows us to maintain an inhouse support system rather than outsourcing to another company, improving our resilience and reducing external dependencies.

## Force Field
<!-- 
| for                                         | score | against                            | score |     |
|---------------------------------------------|-------|------------------------------------|-------|-----|
| Cost Reduction                              | 4     | Poor Situation Specific Support    | 2     |     |
| 24/7 operations                             | 3     | Lack of human interaction          | 1     |     |
| reduced HR overhead and training            | 2     | possible low customer satisfaction | 2     |     |
| Faster support turn around time             | 2     | Privacy concerns                   | 4     |     |
| multilingual support (internationalisation) | 3     | development costs                  | 5     | --> |

![diagram](./diagrams/diagram-good.svg)

We can mitigate the impact of development costs by allocationg a portion of the budget as a reserve for any unexpected costs.

In order to address any privacy concerns we can audit the software for regulatory compliace with GDPR, DPA, and ensure we do not log any unnecessary information.

Low situation specific support and lack of human interaction are low impact forces during the inial project scope as we are retaining 10 fallback support staff to handle this specific situation.

## Impacts and Risks

Once the project has been completed, the impacts will be:

- Working environment
The working environment will change significantly as the number of staff will be reduced,  so the remaining staff will work closer together and the culture inside may start to feel as a family.
- Financially
From a financial aspect, there will be a significant amount of money saved, which means that John Jones can use that money in other areas to improve the business. One way could be to raise the salary's of the remaining staff to give them more responsibility, make them work harder and have more disposable income for them to enjoy.
- Quality
The quality of the customer service delivered will change in the positive. This is because any common, simple questions can be answered quickly and with a very trained answer. If there are any other more complicated questions they can be answered by the few experts that still remain, meaning again they will get quality answers.
- Efficiency
The efficiency of the answers delivered once the project is complete will improve because the chatbot will have the answers ready because of all the training that it has been through and can help a customer understand in the optimal way. Whereas if it was a random staff member from the original 50, they will be more versed in certain areas than others, so may not necessarily answer all the questions well.
- Customer satisfaction
The customer satisfaction will definitely be impacted because there will be some people that just want to get straight to the point, meaning they will be more satisfied that the chatbot can quickly answer their questions. However, there will be people that want to feel heard when they have a problem and will appreciate speaking with a human. This is not an issue as John Jones is not as concerned about this part.
- Workload on remaining staff
The workload on the remaining staff will be impacted. It will decrease because the chatbot can be used as a filter to only pass on the few complex questions, meaning that the staff won't have to deal with passing over questions to certain departments and they can just focus on answering the few questions that go to them.

Here are the likely and more important risks with ways to mitigate them:

- Risk of poor software visibility and observability.
Mitigation technique: Create grafana dashboards and utilise them during development.
- Risk of customer requirments changing as the project developes (hidden requirements or incorrect assumptions).
Mitigation technique: Create a signed project brief with scope.
- Risk of not meeting customer requirements.
Mitigation technique: Ensure client is involved in many stages of development.
- Risk of potential security concerns.
Mitigation technique: Ensure we use up to date libraries for security critical code paths and consider security during design.

## Conclusions and Recommendations

## Goals

- reduce support costs by reducing human staff headcount
- provide fast and low cost customer support service
- meet compliance goals
