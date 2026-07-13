// Announcements — full text from ibestbhutan.com/announcements/*.

export interface AnnouncementSection {
  heading: string;
  /** Rendered as an ordered/bulleted list. */
  items?: string[];
  /** Rendered as plain paragraphs. */
  paragraphs?: string[];
}

export interface Announcement {
  slug: string;
  title: string;
  date: string;
  /** Human-readable date shown on the card. */
  dateLabel: string;
  tag: string;
  excerpt: string;
  intro: string[];
  sections: AnnouncementSection[];
  outro?: string[];
}

export const Announcements: Announcement[] = [
  {
    slug: "2d-animation-training-re-announcement",
    title: "Re-announcement: 2D Animation Training (employment guaranteed)",
    date: "2015-11-20",
    dateLabel: "20 Nov 2015",
    tag: "Training",
    excerpt:
      "iBEST Institute, with funding support from MoLHR under the Youth Employment Skills (YES) Programme, is conducting a one-year certificate course on 2D Animation. Employment is guaranteed on successful completion.",
    intro: [
      "iBEST Institute with the funding support from the Ministry of Labour and Human Resources (MoLHR) under the Youth Employment Skills (YES) Programme is conducting the one-year certificate course on 2D Animation.",
      "Only 25 seats are available for the training for which the selection will be based on the written exam and viva-voce to confirm the competencies and interest of the participants. Employment is guaranteed after the successful completion of the training.",
      "The one-year certificate course on 2D Animation registered with the Department of Occupational Standards, MoLHR is targeted for our young graduates of 10th standard and above. The course aims to equip trainees in the field of technical animation, character development, editing etc.",
    ],
    sections: [
      {
        heading: "Minimum eligibility criteria",
        items: [
          "Should be a registered job seeker in the MoLHR Job Portal System",
          "Should be within age limit of 18-29 years",
          "Should have all relevant documents (relevant academic transcripts, CID, Security Clearance)",
          "Should have good drawing / art skills",
          "Should not have availed Direct Employment Scheme benefit and Overseas Employment Benefit",
        ],
      },
      {
        heading: "Documents required to be submitted",
        items: [
          "Duly filled pre-service form available for download on the MoLHR website",
          "Copy of academic transcripts",
          "CID copy",
          "Valid Security Clearance (online)",
          "A sample of original drawing / art (either A4 or A3 size paper on any medium, or a copy of digital art)",
        ],
      },
      {
        heading: "Important notes",
        items: [
          "All the aforementioned documents (in hard copy) must be submitted to the iBEST Institute Office, or applied for through the iBEST Institute's website with accurate contact information.",
          "The shortlisted candidates will be contacted by our office via phone call.",
          "The interested participants must report to our office for the briefing session; failing to report will lead to termination from the shortlisting.",
          "A one-hour written exam will be conducted at the iBEST Institute Office.",
          "A viva-voce exam will be conducted at our office.",
          "The result will be declared and selected candidates informed via phone call.",
          "Signing of the undertaking (contract) of the selected trainee with the Ministry of Labour and Human Resources.",
        ],
      },
      {
        heading: "How to apply",
        paragraphs: [
          "Interested, eligible and registered job seekers in the MoLHR job portal can register for the programme with all relevant documents directly with the iBEST Institute. For more information, contact our office at 02-339607, or 1786 8106, or 1771 8721, or write to us at ibestbhutan@gmail.com.",
        ],
      },
    ],
    outro: [
      "Note: Those of you who have submitted an application and registered for the course don't have to submit or register again.",
    ],
  },
  {
    slug: "2d-animation-training",
    title: "2D Animation Training",
    date: "2015-10-20",
    dateLabel: "20 Oct 2015",
    tag: "Training",
    excerpt:
      "A one-year certificate course on 2D Animation under the Youth Employment Skills (YES) Programme. Only 25 seats available, selected by written exam and viva-voce.",
    intro: [
      "iBEST Institute with the funding support from the Ministry of Labour and Human Resources (MoLHR) under the Youth Employment Skills (YES) Programme is conducting the one-year certificate course on 2D Animation. Only 25 seats are available for the training for which the selection will be based on the written exam and viva-voce to confirm the competencies and interest of the participants.",
      "The one-year certificate course on 2D Animation registered with the Department of Occupational Standards, MoLHR is targeted for our young graduates of 10th standard and above. The course aims to equip trainees in the field of technical animation, character development, editing etc.",
    ],
    sections: [
      {
        heading: "Minimum eligibility criteria",
        items: [
          "Should be a registered job seeker in the MoLHR Job Portal System",
          "Should be within age limit of 18-29 years",
          "Should have all relevant documents (relevant academic transcripts, CID, Security Clearance)",
          "Should be medically fit and mentally sound",
          "Should have good drawing / art skills",
          "Should not have availed Direct Employment Scheme benefit and Overseas Employment Benefit",
        ],
      },
      {
        heading: "Documents required to be submitted",
        items: [
          "Duly filled pre-service form available for download on the MoLHR website",
          "Copy of academic transcripts",
          "CID copy",
          "Valid Security Clearance (online)",
          "A sample of original drawing / art (either A4 or A3 size paper on any medium, or a copy of digital art)",
        ],
      },
      {
        heading: "Selection schedule",
        items: [
          "Documents (hard copy) to be submitted on or before 4 November 2015 to the iBEST Institute Office.",
          "Shortlisted candidates announced through our website and Facebook page on 6 November 2015, and contacted by phone.",
          "Briefing session at our office on 7 November 2015 at 10 am — failing to report leads to termination from the shortlisting.",
          "One-hour written exam on 8 November 2015 at our office.",
          "Viva-voce exam on 10 November 2015 at our office.",
          "Declaration of the result on 17 November 2015; selected candidates informed via phone call.",
          "Signing of the contract with MoLHR and the iBEST Institute on 23 November 2015.",
          "Training commences from 1 December 2015.",
        ],
      },
      {
        heading: "How to apply",
        paragraphs: [
          "Interested, eligible and registered job seekers in the MoLHR job portal can register for the programme with all relevant documents directly with the iBEST Institute. For more information, contact our office at 02-339607 or 1786 8106, or write to us at ibestbhutan@gmail.com.",
        ],
      },
    ],
    outro: ["Best of luck and good day!"],
  },
  {
    slug: "human-resources-planning-and-forecasting-training",
    title: "Human Resources Planning and Forecasting Training",
    date: "2015-09-25",
    dateLabel: "25 Sep 2015",
    tag: "Training",
    excerpt:
      "A two-day training programme on Human Resource Planning and Forecasting for the Gelephu Region — covering Dagana, Tsirang and Sarpang Dzongkhags.",
    intro: [
      "Under the funding support of the Ministry of Labour and Human Resources, the iBEST Institute announces the conducting of the two-day training program on \"Human Resource Planning and Forecasting\" for the Gelephu Region. The region includes three Dzongkhags, viz., Dagana, Tsirang, and Sarpang.",
      "The two-day program covers the essential aspects of human resource management and planning, and to know one's organization human resource needs. The training is targeted to all the business owners and operators in the field of the construction, production and manufacturing, and tourism industry et al.",
    ],
    sections: [
      {
        heading: "Training dates and venues",
        items: [
          "Dagana Dzongkhag — 9-10 October 2015, Tshendagang Gewog's GYT Hall (near Gozhi Bazaar)",
          "Tsirang Dzongkhag — 30-31 October 2015, in Tsirang Town (tentative)",
          "Sarpang Dzongkhag — 16-21 November 2015 (in three batches), in Gelephu Town (tentative)",
        ],
      },
      {
        heading: "Who should attend",
        paragraphs: [
          "We would like to request all the interested business owners and operators to attend the training themselves, or to send a representative to attend the training in their own region. Our office will also be calling you or your organization as per the list of tentative organizations given to us by the MoLHR.",
          "For more details, please contact our office at 02-339607 or Mr. Tenzin at 1774 7213, or write to us at ibestbhutan@gmail.com.",
        ],
      },
    ],
    outro: [
      "Remarks: If there is any change in the training date and venue, we will contact and inform accordingly.",
    ],
  },
];

export const getAnnouncement = (slug: string) =>
  Announcements.find((a) => a.slug === slug);
