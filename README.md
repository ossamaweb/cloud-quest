# Cloud Quest Learning Platform

A modern, interactive and gamified learning platform inspired by [Duolingo](https://www.duolingo.com), built with Next.js and AWS Amplify. Cloud Quest transforms cloud computing education into an engaging journey through interactive quizzes, rewards, and game-like progression systems.

Cloud Quest is built as a participation in the [AWS Game Builder Challenge](https://devpost.com/submit-to/22661-aws-game-builder-challenge), showcasing innovative approaches to cloud education through gamification.

## Features

- 📚 Structured Course Management
- 📝 Interactive Lessons
- ✅ Assessment System
- 📊 Progress Tracking
- 🏆 Achievement System
- 📈 Leaderboard
- 👥 User Authentication
- 🔄 Real-time Updates

## 🎮 Gaming Features

- **Interactive Quizzes**

  - Multiple Choice Questions
  - Drag and Drop Exercises
  - Short Answer Questions
  - Fill in the Blank
  - Matching Pairs
  - True/False Validation
  - Sequence Ordering
  - Image Identification
  - Scenario-Based Challenges (Not implemented yet)

- **Gamification Elements**

  - Experience points (XP) system
  - Achievement badges
  - Daily streaks
  - Level progression
  - Global leaderboards

- **Learning Paths**
  - Structured skill trees
  - Unlockable content
  - Difficulty progression

## Tech Stack

- **Frontend:**
  - Next.js
  - TypeScript
  - React
  - Taiwind
  - Tanstack React Query
- **Backend:**
  - AWS Amplify
  - AWS AppSync (GraphQL)
  - Amazon DynamoDB
  - Amazon Cognito
- **Generative AI:**
  - Amazon Q (development)
  - Gemini Flash 2.0 (questions generation)

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- AWS Account
- AWS CLI configured
- Amplify CLI installed (`npm install -g @aws-amplify/cli`)

## Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/ossamaweb/cloud-quest
cd cloud-quest
```

2. **Install dependencies**

```bash
npm instal
```

3. **Deploying to AWS**

For detailed instructions on deploying this application, refer to the [deployment section](https://docs.amplify.aws/nextjs/start/quickstart/nextjs-pages-router/#deploy-a-fullstack-app-to-aws) of Amplify documentation.

4. **Configure AWS for local development**

For detailed instructions on configuring AWS for local development, refer to the [Amplify documentation.](https://docs.amplify.aws/nextjs/start/account-setup/)

5. **Environment Setup**

Configure the following environment variables:

- ADMIN_USERNAME

- ADMIN_PASSWORD

- EMAIL_FROM

6. **Start Amplify Sandbox**

```bash
npm run sandbox
```

7. **Start the development server**

```bash
npm run dev
```

8. **Create Admin User**

- Open [http://localhost:3000/](http://localhost:3000/)
- Create Account
- Confirm Email.

The email will be sent via Amazon SES from the address email set in EMAIL_FROM env variable.

## Database Seeding

The platform includes a seeding script that populates:

- Default course (1)

- Learning modules (12)

- Lesson content (72)

- Quizz questions (864)

- Achievement data (?)

To run the seeding script:

```bash
npm run seed
```

## Future Plans

- Adaptive Learning System: Leverages Amazon Bedrock to automatically generate personalized lessons based on user performance analysis and learning patterns
- Scenario based challenges.
- More courses

## Security

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## License

This library is licensed under the MIT-0 License. See the LICENSE file.

## Credits

This repository was bootstraped from **aws-samples/amplify-next-pages-template** a starter template for creating applications using Next.js (Pages)and AWS Amplify, emphasizing easy setup for authentication, API, and database capabilities." [View Docs](https://docs.amplify.aws/nextjs/start/quickstart/nextjs-pages-router)
