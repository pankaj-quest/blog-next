import { imageConfig } from './ImageConfig';

export interface DocQuestion {
    question: string;
    description: string;
    link: string;
    docId: string;
    banner: string;
}

export interface DocCategory {
    category: string;
    questions: DocQuestion[];
}

export const data: DocCategory[] = [
    {
        category: "Getting Started with Greta",
        questions: [
            {
                question: "Why We're Building Greta: Engineering Growth from Day One?",
                description: "When we set out to build Greta (Growth Engineering Tech Agent), we identified a critical gap in the market. There are countless AI code generation tools emerging, but they're optimized for general software development—not for growth.",
                link: "/learninghub/learn-more",
                docId: "Doc26",
                banner: imageConfig.Doc26Banner
            },
            {
                question: "How to create your first project using Greta?",
                description: "Follow a step-by-step guide to setting up your first project in Greta, from registration to creating a working prototype.",
                link: "/learninghub/create-first-project",
                docId: "Doc1",
                banner: imageConfig.Doc1Banner
            },
            {
                question: "How do you navigate through Greta?",
                description: "Get familiar with Greta's interface, dashboard, and tools to efficiently navigate and manage your projects.",
                link: "/learninghub/navigation",
                docId: "Doc2",
                banner: imageConfig.Doc2Banner
            },
        ]
    },
    {
        category: "Building & Deploying a Website with Greta",
        questions: [
            {
                question: "How do you create a new website using Greta?",
                description: "Learn how to quickly set up a new website using Greta's intuitive builder, selecting templates and adding key components.",
                link: "/learninghub/create-website",
                docId: "Doc3",
                banner: imageConfig.Doc3Banner
            },
            {
                question: "How do you choose a template in Greta?",
                description: "Explore Greta's collection of website templates and learn how to pick the one that best suits your project needs.",
                link: "/learninghub/choose-template",
                docId: "Doc4",
                banner: imageConfig.Doc4Banner
            },
            {
                question: "How can you customize the design and layout of your website?",
                description: "Modify styles, adjust colors, update fonts, and refine the layout to create a visually appealing and functional website.",
                link: "/learninghub/customize-design",
                docId: "Doc5",
                banner: imageConfig.Doc5Banner
            },
            {
                question: "What components and modules can you use in Greta?",
                description: "Discover a variety of pre-built components and modules that you can integrate into your website to enhance functionality.",
                link: "/learninghub/components-modules",
                docId: "Doc6",
                banner: imageConfig.Doc6Banner
            },
            {
                question: "How do you preview your website before deployment?",
                description: "Ensure your website looks and functions as expected by previewing changes before publishing it live.",
                link: "/learninghub/preview-website",
                docId: "Doc7",
                banner: imageConfig.Doc7Banner
            },
            {
                question: "How can I add and customize the components on my website using Greta?",
                description: "Find out how to add and customize a components on your website using Greta's authentication features.",
                link: "/learninghub/customize-components",
                docId: "Doc24",
                banner: imageConfig.Doc24Banner
            },
            {
                question: "How can I add a help hub and customize the components on my website using Greta?",
                description: "Find out how to add and customize a help hub on your website using Greta's authentication features.",
                link: "/learninghub/help-hub",
                docId: "Doc25",
                banner: imageConfig.Doc25Banner
            },
            {
                question: "How to Change Project Name on Greta?",
                description: "Learn how to change the name of your project on Greta.",
                link: "/learninghub/change-project-name",
                docId: "Doc27",
                banner: imageConfig.Doc27Banner
            },
            {
                question: "How to Delete Your Project on Greta?",
                description: "Learn how to delete your project on Greta.",
                link: "/learninghub/delete-project",
                docId: "Doc28",
                banner: imageConfig.Doc28Banner
            },
            {
                question: "How to Remove Your Project from Netlify on Greta?",
                description: "Learn how to remove your project from Netlify on Greta.",
                link: "/learninghub/remove-project-from-netlify",
                docId: "Doc29",
                banner: imageConfig.Doc29Banner
            }
        ]
    },
    {
        category: "Deployment & Hosting",
        questions: [
            {
                question: "How do you deploy your website with Greta?",
                description: "Learn how to seamlessly publish your website online with Greta's easy-to-use deployment features.",
                link: "/learninghub/deploy-website",
                docId: "Doc8",
                banner: imageConfig.Doc8Banner
            },
            {
                question: "How can you publish updates and changes to your deployed website?",
                description: "Understand how to make modifications to your live site and ensure all updates are correctly published.",
                link: "/learninghub/publish-updates",
                docId: "Doc9",
                banner: imageConfig.Doc9Banner
            },
            {
                question: "What third-party services can I integrate with my Greta project?",
                description: "Extend your website's capabilities by integrating with various third-party services like analytics, databases, and hosting platforms.",
                link: "/learninghub/third-party-integrations",
                docId: "Doc10",
                banner: imageConfig.Doc10Banner
            },
            {
                question: "How to integrate GitHub with my Greta project?",
                description: "Connect your Greta project to GitHub for version control, collaborative development, and automated deployments.",
                link: "/learninghub/integrate-github",
                docId: "Doc11",
                banner: imageConfig.Doc11Banner
            },
            {
                question: "How to integrate Supabase with my Greta project?",
                description: "Set up Supabase with Greta to manage databases, authentication, and backend services efficiently.",
                link: "/learninghub/integrate-supabase",
                docId: "Doc12",
                banner: imageConfig.Doc12Banner
            },
            {
                question: "How to integrate Netlify with my Greta project?",
                description: "Deploy your Greta project using Netlify, leveraging its hosting, continuous deployment, and serverless functions.",
                link: "/learninghub/integrate-netlify",
                docId: "Doc13",
                banner: imageConfig.Doc13Banner
            }
        ]
    },
    {
        category: "Collaboration & Team Management",
        questions: [
            {
                question: "What is Team feature?",
                description: "Team feature in Greta allows project owners to collaborate seamlessly with others while maintaining full control over the project.",
                link: "/learninghub/team-feature",
                docId: "Doc48",
                banner: imageConfig.Doc15Banner
            },
            {
                question: "How to invite team members and manage access?",
                description: "Learn how to invite team members, assign roles, transfer contribution access to editors, and take back control in Greta.",
                link: "/learninghub/invite-team-and-manage-access",
                docId: "Doc49",
                banner: imageConfig.Doc14Banner
            },
            {
                question: "Why is my project locked?",
                description: "Understand why your project appears locked, what it means when someone else has control, and how the owner can unlock it in Greta.",
                link: "/learninghub/why-is-my-project-locked",
                docId: "Doc50",
                banner: imageConfig.Doc50Banner
            }
        ]
    },
    {
        category: "Troubleshooting & Support",
        questions: [
            {
                question: "What should you do if your website fails to deploy?",
                description: "Identify common deployment errors and follow troubleshooting steps to resolve issues quickly.",
                link: "/learninghub/fix-deployment-issues",
                docId: "Doc17",
                banner: imageConfig.Doc17Banner
            },
            {
                question: "What are credits in Greta, and how can I earn them?",
                description: "Learn about Greta's credit system, how they are used, and ways to earn more through various activities.",
                link: "/learninghub/greta-credits",
                docId: "Doc18",
                banner: imageConfig.Doc18Banner
            },
            {
                question: "How do I contact Greta's support team for personalized assistance?",
                description: "Explore the available support channels to get help from Greta's team whenever you encounter an issue.",
                link: "/learninghub/contact-support",
                docId: "Doc19",
                banner: imageConfig.Doc19Banner
            }
        ]
    },
    {
        category: "Pricing and Integration",
        questions: [
            {
                question: "What are the different subscription plans offered by Greta?",
                description: "Compare Greta's various subscription plans, their pricing, and the features included in each package.",
                link: "/learninghub/subscription-plans",
                docId: "Doc20",
                banner: imageConfig.Doc20Banner
            },
            {
                question: "Is there a free trial available, and what features are accessible during the trial period?",
                description: "Find out what features are included in Greta's free trial and how long you can test the platform before committing.",
                link: "/learninghub/free-trial",
                docId: "Doc21",
                banner: imageConfig.Doc21Banner
            },
            {
                question: "Are there specific actions or tasks that reward tokens?",
                description: "Discover how to earn tokens in Greta by completing specific tasks, actions, or contributions to the platform.",
                link: "/learninghub/reward-tokens",
                docId: "Doc22",
                banner: imageConfig.Doc22Banner
            },
            {
                question: "How can I integrate Stripe payments into my website using Greta?",
                description: "Learn how to set up and integrate Stripe payments into your website using Greta's payment integration features.",
                link: "/learninghub/integrate-stripe",
                docId: "Doc23",
                banner: imageConfig.Doc23Banner
            }
        ]
    },
    {
        category: "Project Management & Organization",
        questions: [
            {
                question: "How do I organize my projects using folders?",
                description: "Learn how to create and manage folders to keep your projects organized and easily accessible.",
                link: "/learninghub/organize-projects",
                docId: "Doc31",
                banner: imageConfig.Doc31Banner
            },
            {
                question: "How do you manage multiple projects within Greta?",
                description: "Find out how to organize and switch between multiple projects effectively using Greta's project management features.",
                link: "/learninghub/manage-projects",
                docId: "Doc16",
                banner: imageConfig.Doc16Banner
            },
            {
                question: "How do I rename or delete a project?",
                description: "Learn how to rename or delete a project.",
                link: "/learninghub/rename-delete-project",
                docId: "Doc32",
                banner: imageConfig.Doc32Banner
            },
            {
                question: "How do I duplicate or clone an existing project?",
                description: "Learn how to duplicate or clone an existing project.",
                link: "/learninghub/duplicate-project",
                docId: "Doc33",
                banner: imageConfig.Doc33Banner
            },
            {
                question: "What is the project rollback feature and how do I use it?",
                description: "Learn how to use the project rollback feature to revert to a previous version of your project.",
                link: "/learninghub/project-rollback",
                docId: "Doc34",
                banner: imageConfig.Doc34Banner
            },
            {
                question: "Open router BYOK",
                description: "Learn how to use open router byok (Bring Your Own Key).",
                link: "/learninghub/open-router-byok",
                docId: "Doc35",
                banner: imageConfig.Doc35Banner
            },
            {
                question: "Project setting in greta",
                description: "Learn how to manage your project settings in greta.",
                link: "/learninghub/project-setting",
                docId: "Doc36",
                banner: imageConfig.Doc36Banner
            },
            {
                question: "What is the Knowledge Base?",
                description: "Learn how to use the knowledge base to add custom instructions to your project.",
                link: "/learninghub/knowledge-base",
                docId: "Doc37",
                banner: imageConfig.Doc37Banner
            }
        ]
    },
    {
        category: "Agent Mode: Building Complex Applications",
        questions: [
            {
                question: "What is Agent Mode and how do I use the toggle feature?",
                description: "Learn about Agent Mode and how to use the toggle feature to switch between Agent Mode and Normal Mode.",
                link: "/learninghub/agent-mode",
                docId: "Doc38",
                banner: imageConfig.Doc38Banner
            }
        ]
    },
    {
        category: "Direct Editing: Saving Credits",
        questions: [
            {
                question: "How do I use the Code Editor to make changes without prompts?",
                description: "Learn how to use the Code Editor to make changes to your project without using any prompts.",
                link: "/learninghub/code-editor",
                docId: "Doc39",
                banner: imageConfig.Doc39Banner
            },
            {
                question: "How do I use the Text Editor to change text, colors, and styles visually?",
                description: "Learn how to use the Text Editor to change text, colors, and styles visually.",
                link: "/learninghub/text-editor",
                docId: "Doc40",
                banner: imageConfig.Doc40Banner
            }
        ]
    },
    {
        category: "GitHub Integration & Deployment",
        questions: [
            {
                question: "How do I select specific files to commit to GitHub?",
                description: "Learn how to select specific files to commit to GitHub.",
                link: "/learninghub/select-files-github",
                docId: "Doc41",
                banner: imageConfig.Doc41Banner
            }
        ]
    },
    {
        category: "Adding Advanced Features",
        questions: [
            {
                question: "How do I add a Google Analytics 4 (GA4) tracking to my project?",
                description: "Learn how to add a Google Analytics 4 (GA4) tracking to your project.",
                link: "/learninghub/add-ga4-tracking",
                docId: "Doc42",
                banner: imageConfig.Doc42Banner
            },
            {
                question: "How do I use the Model Selector to switch between different AI models?",
                description: "Learn how to use the Model Selector to switch between different AI models.",
                link: "/learninghub/model-selector",
                docId: "Doc43",
                banner: imageConfig.Doc43Banner
            }
        ]
    },
    {
        category: "Collaboration & Brainstorming",
        questions: [
            {
                question: "What is Discussion Mode and how do I use it to brainstorm ideas?",
                description: "Learn how to use Discussion Mode to brainstorm ideas.",
                link: "/learninghub/discussion-mode",
                docId: "Doc44",
                banner: imageConfig.Doc44Banner
            },
            {
                question: "How can I paste a screenshot into the chat to give Greta visual context?",
                description: "Learn how to paste a screenshot into the chat to give Greta visual context.",
                link: "/learninghub/paste-screenshot",
                docId: "Doc45",
                banner: imageConfig.Doc45Banner
            }
        ]
    },
    {
        category: "Marketplace",
        questions: [
            {
                question: "What is the Greta Marketplace?",
                description: "Learn about the Greta Marketplace.",
                link: "/learninghub/greta-marketplace",
                docId: "Doc51",
                banner: imageConfig.Doc51Banner
            }
        ]
    },
    {
        category: "Account & Resources",
        questions: [
            {
                question: "credits roll out and expiry policy?",
                description: "Learn about Greta's credits roll out and expiry policy.",
                link: "/learninghub/credits-rollout",
                docId: "Doc46",
                banner: imageConfig.Doc46Banner
            },
            {
                question: "How can I get involved with the Greta community and access learning resources?",
                description: "Learn how to access learning resources and engage with the community.",
                link: "/learninghub/greta-community",
                docId: "Doc47",
                banner: imageConfig.Doc47Banner
            },
            {
                question: "Greta vs Rocket.new and how Greta is better?",
                description: "Compare Greta and Rocket.new to see why Greta stands out for long-term growth.",
                link: "/learninghub/greta-vs-rocket-new",
                docId: "Doc52",
                banner: imageConfig.Doc52Banner
            }
        ]
    }
];

// Helper function to get doc by link
export function getDocByLink(linkPath: string): { doc: DocQuestion; category: string } | null {
    for (const cat of data) {
        for (const q of cat.questions) {
            if (q.link === linkPath || q.link === `/learninghub/${linkPath}`) {
                return { doc: q, category: cat.category };
            }
        }
    }
    return null;
}

// Helper function to get all doc links
export function getAllDocLinks(): string[] {
    return data.flatMap(cat => cat.questions.map(q => q.link.replace('/learninghub/', '')));
}

