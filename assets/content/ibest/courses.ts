// Upcoming courses + the course registration form options.
// Text taken from ibestbhutan.com/upcoming-course.

export interface Course {
  slug: string;
  title: string;
  duration: string;
  level: string;
  description: string;
  contact: string;
}

export const Courses: Course[] = [
  {
    slug: "2d-animation",
    title: "2D Animation",
    duration: "One year — certificate course",
    level: "Class 10 and above",
    description:
      "The one-year certificate course on 2D Animation registered with the Department of Occupational Standards, MoLHR is targeted for our young graduates of 10th standard and above. The course aims to equip trainees in the field of technical animation, character development, editing etc.",
    contact: "Call our office at 02 339607, or Mr. Tenzin at 1774 7213.",
  },
  {
    slug: "commercial-accounting",
    title: "Commercial Accounting",
    duration: "Three months",
    level: "Aspiring accountants",
    description:
      "The three-month course on the commercial accounting will provide trainees with all the knowledge and skills of becoming a competent accountant in accordance with the industry standards and current market needs. The trainees will also be trained in Tally ERP9 with the focus on the overview of accounting principles, rules and techniques.",
    contact: "Call Mr. Tenzin at 1774 7213 for more details.",
  },
  {
    slug: "strategic-management",
    title: "Strategic Management",
    duration: "Customized program",
    level: "Executives and managers",
    description:
      "The customized program on strategic management is intended for executives and managers in the private and corporate sectors. The program aims to enhance the managerial capacities to meet one's organizational goals with emphasis on strategic decision, establishing organizational direction, evaluating and controlling strategies besides other necessities of management aspects.",
    contact: "Call Mr. Sonam Rinchen at 1750 5657 for more details.",
  },
];

// Options offered in the "Register for course" form on the old site.
export const CourseOptions = [
  "Becoming Entrepreneur",
  "2D Animation",
  "Commercial Accounting",
  "Strategic Management",
];

export const EnquiryTypes = ["Feedback", "Suggestion", "Complaint", "Other"];
