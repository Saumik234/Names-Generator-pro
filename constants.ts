import { PageView } from './types';

export const CATEGORY_GROUPS = [
  {
    label: "Creative & Personal",
    categories: [
      "Character Names (for creative writing)",
      "Baby Names",
      "Pet Names",
      "Business Names",
      "Band Names",
      "Rap Names",
      "Pen Names",
      "Fake/Privacy Names",
      "Fantasy Video Game",
      "Mysterious Detective Novel",
    ],
  },
  {
    label: "Business & Branding",
    categories: [
      "Modern Tech Startup",
      "Artisan Coffee Shop",
      "Eco-Friendly Brand",
      "Luxury Fashion Label",
      "Catchy YouTube Channel",
      "Fitness & Wellness App",
    ],
  },
];

export const USE_CASES = [
  {
    title: "For Creative Writers & Storytellers",
    description: "Generate unique names for characters, places, and concepts in your next novel. Overcome writer's block and bring your world to life.",
  },
  {
    title: "For New Parents",
    description: "Discover the perfect baby name. Filter by cultural origin and historical style to find a name that's truly special for your little one.",
  },
  {
    title: "For Privacy-Conscious Users",
    description: "Create realistic-sounding aliases, fake identities, or usernames for online accounts, protecting your privacy without raising suspicion.",
  },
  {
    title: "For Developers & Designers",
    description: "Tired of 'Lorem Ipsum'? Populate your mockups, demos, and prototypes with meaningful placeholder names for users and projects.",
  },
  {
    title: "For Entrepreneurs & Brands",
    description: "Find a catchy and memorable name for your new business, product, or app. Get a head start with creative ideas that resonate.",
  },
  {
    title: "For Fun & Inspiration",
    description: "Explore name ideas for your pets, gaming characters, or just for entertainment. Spark your creativity for any project, big or small.",
  },
];

export const STATIC_PAGE_CONTENT: Record<PageView, { title: string; content: string[] }> = {
  [PageView.GENERATOR]: { title: '', content: [] }, // Not used for generator
  [PageView.ABOUT]: {
    title: "About Us",
    content: [
      "Welcome to Multiple Names Generator Pro, your ultimate partner in the creative process of finding the perfect name. We believe that a great name is the cornerstone of any successful venture, whether it's a groundbreaking startup, a beloved pet, or the protagonist of your next novel. Our platform was born from a simple idea: to make the often-challenging task of naming simple, fast, and inspiring.",
      "Our mission is to harness the power of advanced artificial intelligence, specifically Google's Gemini model, to spark your imagination and provide you with unique, memorable, and relevant name suggestions. We've designed our platform to be intuitive and efficient, helping creators, entrepreneurs, and dreamers like you overcome the first major hurdle in any project: finding a name that resonates and stands out.",
      "Built by a team of passionate developers and creatives, our tool is constantly evolving. We are dedicated to improving our algorithms, expanding our categories, and refining the user experience to ensure we provide the best possible suggestions for your needs. We are committed to providing a powerful tool that feels both magical and practical, turning a difficult task into an enjoyable moment of discovery. Thank you for choosing us to be a part of your creative journey."
    ]
  },
  [PageView.CONTACT]: {
    title: "Contact Us",
    content: [
      "We'd love to hear from you! Whether you have a question about our services, feedback on how we can improve, or a suggestion for a new category, our team is ready to listen. Your insights are invaluable in helping us grow and enhance the Multiple Names Generator Pro experience.",
      "For general inquiries, technical support, or feedback, please email us at: support@multiplenamesgeneratorpro.com",
      "For partnership opportunities, media inquiries, or other business-related matters, please contact our partnerships team at: partnerships@multiplenamesgeneratorpro.com",
      "We strive to respond to all inquiries within 24-48 business hours. Please note that our support hours are Monday to Friday, 9:00 AM to 5:00 PM (UTC). We appreciate your patience and look forward to connecting with you."
    ]
  },
  [PageView.TERMS]: {
    title: "Terms & Conditions",
    content: [
      "Please read these Terms and Conditions ('Terms') carefully before using the Multiple Names Generator Pro website ('Service'). Your access to and use of the Service is conditioned upon your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who wish to access or use the Service.",
      "1. Use of Service: The Service is provided for personal and commercial use to generate name ideas. You agree not to use the Service for any illegal or unauthorized purpose, nor may you, in the use of the Service, violate any laws in your jurisdiction.",
      "2. Intellectual Property & Responsibility: The names generated by our AI are suggestions. We do not claim any ownership over these names. It is your sole responsibility to conduct due diligence and ensure that any name you choose does not infringe on existing trademarks, copyrights, or other intellectual property rights. We recommend consulting with a legal professional before finalizing a name for commercial use.",
      "3. Limitation of Liability: Multiple Names Generator Pro and its operators are not liable for any damages, losses, or legal disputes resulting from your use of the Service or your choice of a name generated by it. The Service is provided on an 'as is' and 'as available' basis without any warranties, express or implied.",
      "4. Termination: We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.",
      "5. Changes to Terms: We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on this page. Your continued use of the site after such changes constitutes your acceptance of the new Terms."
    ]
  },
  [PageView.PRIVACY]: {
    title: "Privacy Policy",
    content: [
      "Your privacy is critically important to us. This Privacy Policy outlines how Multiple Names Generator Pro ('we', 'us', or 'our') handles information.",
      "1. Information Collection: We are committed to user privacy. We do not collect, store, or request any personally identifiable information (PII) such as your name, email address, or IP address. Your use of the generator is anonymous.",
      "2. Usage Data: To improve our Service, we may collect anonymous, non-personal usage data. This includes the categories selected and the keywords entered. This data is aggregated and used solely for analytical purposes, such as identifying popular categories or refining our AI's performance. This information cannot be used to identify any individual user.",
      "3. API and Data Processing: Your requests (category and keywords) are sent to the Google Gemini API to generate names. We do not log the specifics of these requests on our servers. We encourage you to review Google's API Privacy Policy for information on how they handle data.",
      "4. Data Sharing: Since we do not collect any personal information, we do not sell, trade, or otherwise transfer your information to outside parties.",
      "5. Cookies: We may use essential cookies for basic site functionality. These cookies do not track your activity or store personal information. You can configure your browser to decline cookies, but it may affect your experience on the site.",
      "6. Policy Changes: We may update this Privacy Policy from time to time. Any changes will be posted on this page. By using our site, you consent to our privacy policy."
    ]
  },
  [PageView.DISCLAIMER]: {
    title: "Disclaimer",
    content: [
      "The names and descriptions generated by Multiple Names Generator Pro are created by a sophisticated artificial intelligence model. They are provided for creative inspiration and suggestion purposes only and should not be considered as professional or legal advice.",
      "We make no warranties, express or implied, regarding the availability, uniqueness, accuracy, or suitability of any name suggested by our service. The AI may generate names that are already in use, trademarked, or otherwise unavailable for your intended purpose.",
      "It is solely and entirely the user's responsibility to conduct thorough research before adopting any name for business, personal, or any other use. This includes, but is not limited to, conducting comprehensive trademark searches, domain name availability checks, and business name registration inquiries in all relevant jurisdictions.",
      "Multiple Names Generator Pro and its creators shall not be held liable for any legal issues, financial losses, damages, or costs of any type arising from the use, or inability to use, a name generated by our platform. Your use of this service constitutes your full agreement to these terms and your acknowledgment of your personal responsibility in the name selection process."
    ]
  },
};

export const FAQ_CONTENT = [
  {
    question: "How does the AI Name Generator work?",
    answer: "Our tool utilizes Google's advanced Gemini artificial intelligence to analyze your selected category and keywords. Unlike simple random generators, it understands context, culture, and creativity to produce unique, meaningful, and catchy name suggestions tailored to your specific needs."
  },
  {
    question: "Is this Name Generator free to use?",
    answer: "Yes, Multiple Names Generator Pro is completely free. You can generate as many names as you like for businesses, babies, pets, characters, and brands without any cost or subscription."
  },
  {
    question: "Can I use the generated names for my business?",
    answer: "Absolutely! The names generated are for your inspiration and use. However, we strongly recommend conducting a trademark search and checking domain availability before finalizing any business name to ensure it doesn't infringe on existing rights."
  },
  {
    question: "What makes this better than other name generators?",
    answer: "Most name generators combine random words from a database. Our AI-powered engine actually 'thinks' creatively, offering explanations for meanings, cultural relevance, and stylistic matching (e.g., modern, vintage, fantasy) that traditional scripts cannot match."
  },
  {
    question: "How can I get the best results?",
    answer: "For the best name ideas, provide specific keywords that describe the 'vibe' or core offering of your project. Use the 'Advanced Options' to filter by gender, country, religion, or birth year to refine the style of names generated."
  }
];