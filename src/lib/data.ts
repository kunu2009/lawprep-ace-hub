npm // Centralized data for 7klawprep app

export const subjects = [
  {
    name: "Constitutional Law",
    topics: [
      {
        name: "Fundamental Rights",
        questions: [
          {
            question: "Which Article of the Indian Constitution deals with Right to Equality?",
            options: [
              "Article 19",
              "Article 14",
              "Article 21",
              "Article 32"
            ],
            correct: 1
          },
          {
            question: "Which Article is known as the 'Heart and Soul' of the Constitution?",
            options: [
              "Article 21",
              "Article 32",
              "Article 226",
              "Article 368"
            ],
            correct: 1
          },
          {
            question: "Which Article provides for the Right to Freedom of Religion?",
            options: [
              "Article 19",
              "Article 25",
              "Article 29",
              "Article 30"
            ],
            correct: 1
          },
          {
            question: "Which Article abolishes Untouchability?",
            options: [
              "Article 15",
              "Article 17",
              "Article 19",
              "Article 21"
            ],
            correct: 1
          }
        ]
      },
      {
        name: "Directive Principles",
        questions: [
          {
            question: "Directive Principles are mentioned in which part of the Constitution?",
            options: [
              "Part III",
              "Part IV",
              "Part V",
              "Part VI"
            ],
            correct: 1
          },
          {
            question: "Which Article deals with promotion of international peace and security?",
            options: [
              "Article 51",
              "Article 50",
              "Article 48A",
              "Article 44"
            ],
            correct: 0
          }
        ]
      },
      {
        name: "Mock Test",
        questions: [
          {
            question: "The Preamble of the Indian Constitution declares India to be a:",
            options: [
              "Sovereign, Socialist, Secular, Democratic Republic",
              "Federal State",
              "Unitary State",
              "None of the above"
            ],
            correct: 0
          },
          {
            question: "Which case established the Basic Structure Doctrine?",
            options: [
              "Golaknath v State of Punjab",
              "Kesavananda Bharati v State of Kerala",
              "Minerva Mills v Union of India",
              "Indira Gandhi v Raj Narain"
            ],
            correct: 1
          },
          {
            question: "Which Article deals with the Right to Constitutional Remedies?",
            options: [
              "Article 32",
              "Article 226",
              "Article 21",
              "Article 14"
            ],
            correct: 0
          },
          {
            question: "Who is known as the Father of the Indian Constitution?",
            options: [
              "Jawaharlal Nehru",
              "Dr. B.R. Ambedkar",
              "Sardar Patel",
              "Rajendra Prasad"
            ],
            correct: 1
          },
          {
            question: "Which Article deals with the protection of interests of minorities?",
            options: [
              "Article 29",
              "Article 30",
              "Article 27",
              "Article 28"
            ],
            correct: 0
          },
          {
            question: "Which of the following is NOT a Fundamental Right?",
            options: [
              "Right to Property",
              "Right to Equality",
              "Right to Freedom",
              "Right against Exploitation"
            ],
            correct: 0
          },
          {
            question: "Which schedule of the Constitution deals with the allocation of seats in the Rajya Sabha?",
            options: [
              "Fourth",
              "Fifth",
              "Sixth",
              "Seventh"
            ],
            correct: 0
          },
          {
            question: "The concept of Judicial Review in India is borrowed from:",
            options: [
              "USA",
              "UK",
              "Canada",
              "Australia"
            ],
            correct: 0
          },
          {
            question: "Which Article deals with the amendment of the Constitution?",
            options: [
              "Article 368",
              "Article 352",
              "Article 356",
              "Article 360"
            ],
            correct: 0
          },
          {
            question: "Which of the following is a justiciable right?",
            options: [
              "Fundamental Rights",
              "Directive Principles",
              "Fundamental Duties",
              "None"
            ],
            correct: 0
          },
          // ... (add 10+ more MCQs for a full mock test)
        ]
      }
    ]
  },
  {
    name: "Contract Law",
    topics: [
      {
        name: "Formation of Contract",
        questions: [
          {
            question: "A contract is formed when there is:",
            options: [
              "Offer and acceptance",
              "Consideration",
              "Legal object",
              "All of the above"
            ],
            correct: 3
          }
        ]
      }
    ]
  },
  {
    name: "Criminal Law",
    topics: [
      {
        name: "General Principles",
        questions: [
          {
            question: "The maxim 'actus non facit reum nisi mens sit rea' means:",
            options: [
              "Act alone is enough",
              "Guilty mind is irrelevant",
              "Act does not make a person guilty unless mind is also guilty",
              "None of the above"
            ],
            correct: 2
          }
        ]
      }
    ]
  },
  {
    name: "Tort Law",
    topics: [
      {
        name: "Negligence",
        questions: [
          {
            question: "The case Donoghue v Stevenson is related to:",
            options: [
              "Strict Liability",
              "Negligence",
              "Nuisance",
              "Defamation"
            ],
            correct: 1
          }
        ]
      }
    ]
  }
];

export const flashCards = [
  {
    id: 1,
    title: "Article 14 - Right to Equality",
    content: "The State shall not deny to any person equality before the law or the equal protection of the laws within the territory of India.",
    category: "Constitutional Law",
    fact: "This is the foundation of equality in Indian Constitution",
    color: "bg-gradient-to-br from-blue-500 to-blue-700"
  },
  {
    id: 2,
    title: "Basic Structure Doctrine",
    content: "Established in Kesavananda Bharati Case (1973). Parliament cannot alter the basic structure of the Constitution.",
    category: "Constitutional Law",
    fact: "This landmark case saved Indian democracy",
    color: "bg-gradient-to-br from-purple-500 to-purple-700"
  },
  {
    id: 3,
    title: "Section 375 - Rape Definition",
    content: "A man commits rape if he has sexual intercourse with a woman against her will, without her consent, or with her consent obtained by fraud.",
    category: "Criminal Law",
    fact: "Recently amended to include marital rape exceptions",
    color: "bg-gradient-to-br from-red-500 to-red-700"
  },
  {
    id: 4,
    title: "Consideration in Contracts",
    content: "An agreement without consideration is void. Consideration means something in return - it can be past, present, or future.",
    category: "Contract Law",
    fact: "Love and affection is valid consideration between near relatives",
    color: "bg-gradient-to-br from-green-500 to-green-700"
  },
  {
    id: 5,
    title: "Negligence - Donoghue v Stevenson",
    content: "You must take reasonable care to avoid acts which you can reasonably foresee would likely injure your neighbor.",
    category: "Tort Law",
    fact: "This case established the modern law of negligence",
    color: "bg-gradient-to-br from-orange-500 to-orange-700"
  },
  {
    id: 6,
    title: "Article 32 - Right to Constitutional Remedies",
    content: "Dr. Ambedkar called it the 'Heart and Soul' of the Constitution. It empowers citizens to approach Supreme Court directly.",
    category: "Constitutional Law",
    fact: "This article can never be suspended, even during emergency",
    color: "bg-gradient-to-br from-indigo-500 to-indigo-700"
  }
];

export const defaultNotes = [
  // Constitutional Law
  {
    id: 1001,
    title: "Article 14 - Right to Equality",
    content: "Article 14 guarantees equality before the law and equal protection of the laws within the territory of India.",
    subject: "Constitutional Law",
    date: "2024-01-01"
  },
  {
    id: 1002,
    title: "Basic Structure Doctrine",
    content: "The basic structure doctrine was established in Kesavananda Bharati v. State of Kerala (1973). Parliament cannot alter the basic structure of the Constitution.",
    subject: "Constitutional Law",
    date: "2024-01-01"
  },
  // Contract Law
  {
    id: 2001,
    title: "Consideration in Contracts",
    content: "Consideration is an essential element of a valid contract. It means something in return (quid pro quo).",
    subject: "Contract Law",
    date: "2024-01-01"
  },
  {
    id: 2002,
    title: "Void Agreements",
    content: "Agreements without consideration, agreements in restraint of trade, and agreements to do impossible acts are void.",
    subject: "Contract Law",
    date: "2024-01-01"
  },
  // Criminal Law
  {
    id: 3001,
    title: "Mens Rea",
    content: "Mens rea means 'guilty mind'. It is an essential element of most criminal offences.",
    subject: "Criminal Law",
    date: "2024-01-01"
  },
  {
    id: 3002,
    title: "Section 375 - Rape Definition",
    content: "Section 375 IPC defines rape and its exceptions. Recent amendments have expanded its scope.",
    subject: "Criminal Law",
    date: "2024-01-01"
  },
  // Tort Law
  {
    id: 4001,
    title: "Negligence - Donoghue v Stevenson",
    content: "This case established the modern law of negligence and the 'neighbour principle'.",
    subject: "Tort Law",
    date: "2024-01-01"
  },
  {
    id: 4002,
    title: "Strict Liability",
    content: "Established in Rylands v Fletcher. A person who uses his land in a non-natural manner is strictly liable for damage caused by escape of dangerous things.",
    subject: "Tort Law",
    date: "2024-01-01"
  }
]; 