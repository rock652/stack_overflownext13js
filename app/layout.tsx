import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
    >
      <html lang="en">
        <body>
          {/* Conditional rendering for authentication */}
          <header>
            <nav
              style={{
                display: "flex",
                justifyContent: "flex-end",
                padding: "10px",
              }}
            >
              {/* Show SignInButton only if user is signed out */}
              <SignedOut>
                <SignInButton mode="modal" />
              </SignedOut>

              {/* Show UserButton only if user is signed in */}
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
            </nav>
          </header>

          {/* Render the main content */}
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
