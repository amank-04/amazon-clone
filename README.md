# Full-Featured E-Commerce Platform

This project is a full-featured e-commerce platform inspired by Amazon. Built with a modern stack, it provides a user-friendly shopping experience with a seamless interface and smooth data flow. The platform includes secure user authentication, product management, and the ability to make secure payments through Stripe.

## Technologies Used

- **Frontend**: React, Next.js
- **State Management**: Redux
- **Authentication**: Firebase & NextAuth.js
- **Payments**: Stripe
- **Hosting & Deployment**: Firebase Hosting (optional)

## Features

- **Responsive Design**: Optimized for both desktop and mobile devices.
- **User Authentication**: Users can sign up, log in, and manage their accounts securely.
- **Product Management**: Admin can add, update, and delete products.
- **Shopping Cart**: Users can easily add items to their cart and modify quantities.
- **Checkout**: Secure checkout with Stripe integration for payment processing.
- **Order History**: Users can view their past orders and statuses.

## Installation

To set up this project locally, follow the steps below:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/amank-04/amazon-clone.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd amazon-clone
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Set up environment variables**  
   Create a `.env.local` file in the root of the project with the following configuration:
   - `NEXT_PUBLIC_FIREBASE_API_KEY`: Firebase API key.
   - `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`: Firebase Auth domain.
   - `NEXT_PUBLIC_FIREBASE_PROJECT_ID`: Firebase project ID.
   - `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`: Firebase storage bucket.
   - `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`: Firebase messaging sender ID.
   - `NEXT_PUBLIC_FIREBASE_APP_ID`: Firebase app ID.
   - `NEXT_PUBLIC_STRIPE_PUBLIC_KEY`: Stripe public API key.

5. **Run the development server:**

   ```bash
   npm run dev
   ```

   The application will be running at `http://localhost:3000`.

## Features in Detail

- **Authentication**:  
  The app uses Firebase Authentication for secure user registration and login. NextAuth.js is integrated to streamline the authentication process.

- **State Management**:  
  Redux is used for global state management, ensuring a smooth data flow between components, such as the shopping cart and user authentication state.

- **Performance Optimization**:  
  Next.js provides server-side rendering (SSR) and static site generation (SSG) for fast performance and SEO optimization.

- **Payments**:  
  Stripe is integrated for secure online payments, allowing users to complete their purchases with ease.

## Contributing

Feel free to fork the repository, submit issues, or create pull requests to contribute to the project. Please make sure to follow the coding conventions used in the project.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add feature'`).
5. Push to your forked repository (`git push origin feature/your-feature-name`).
6. Create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- **React** and **Next.js** for providing the foundation for a modern web app.
- **Firebase** for easy-to-use authentication and data storage.
- **Stripe** for secure and simple payment integration.
