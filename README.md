# Crush Lab Poker

![Crush Lab Poker Home](./src/assets/crushlabmockup.png)

## Overview

Crush Lab Poker is a web application designed to help poker players make better decisions during gameplay by providing easy-to-read poker charts. These charts are tailored for various game situations, helping players quickly determine optimal responses based on their position and the actions they are facing or taking.

### Target Audience
- **Beginners**: Players who are new to poker and need guidance.
- **Enthusiasts**: Hobbyists looking to improve their skills.
- **Mid-Level Players**: Intermediate players who want to refine their game strategy.

## Features
- **Dynamic Charts**: Displays optimal poker hand responses based on the selected position and action.
- **Multilingual Support**: Fully localized with i18n, making it accessible to users worldwide.
- **Responsive Design**: Built with Tailwind CSS for a modern and mobile-friendly user interface.
- **Stripe Integration**: Easy subscription management for premium features.
- **Firebase**: Secure user authentication.
- **Google Authentication**: Quick login and signup with Google.

## Technology Stack
- **Frontend**: React, Next.js, Tailwind CSS
- **Backend**: Next-Auth, Prisma ORM
- **Payment Processing**: Stripe
- **Validation**: React Hook Form, Zod
- **Multilingual Support**: i18next, react-i18next

## Getting Started

### Prerequisites
Ensure you have the following installed:
- Node.js (v18 or higher)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd crushlabpoker
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add the following variables:
   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
   NEXT_PUBLIC_STRIPE_PUBLIC_KEY=your_stripe_public_key
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=_firebase_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=_firebase_sender
   NEXT_PUBLIC_FIREBASE_APP_ID=_firebasse_app_id
   NEXT_PUBLOC_FIREBASE_MEASUREMENT_ID=_firebase_measurement

   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=<see documentation to your key>

   STRIPE_SECRET_KEY=_stripe_secret
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=_stripe_public
   STRIPE_WEBHOOK_SECRET=_stripe_webhook_secret

   DATABASE_URL=<your db for prisma. see documentation>
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Usage

1. **Login/Signup**:
   - Users can log in with email and password or through Google Authentication.

2. **Upgrade Subscription**:
   - Use Stripe to subscribe and unlock premium features.

3. **Select Position and Action**:
   - Choose your position (UTG, HJ, CO, BTN, SB, BB) and the action you are taking or facing.

4. **View Recommendations**:
   - The app displays a chart with the best options, color-coded for easy understanding:
     - **Red**: Fold to 3-bet
     - **Green**: Call 3-bet
     - **Blue**: 4-bet and fold vs all-in
     - **Yellow**: 4-bet and call vs all-in

## Scripts

- **Development**: `npm run dev`
- **Build**: `npm run build`
- **Start**: `npm run start`

## Dependencies

Key dependencies used in the project:

- **React**: For building the user interface.
- **Next.js**: Framework for server-side rendering and routing.
- **Tailwind CSS**: For styling.
- **Firebase**: For authentication and backend services.
- **Stripe**: For payment processing.
- **i18next**: For localization.
- **Prisma ORM**: For database management.

## Contribution

We welcome contributions from the community! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes with clear messages.
4. Open a pull request.

---

Enjoy using **Crush Lab Poker** and elevate your poker gameplay!

