import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import { getUserByEmail } from "@/database/user";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Email and password",
      async authorize(credentials) {
        const { email, password } = credentials;

        const user = await getUserByEmail(email);

        const isValidPassword = await compare(password, user.password);

        if (!isValidPassword) {
          throw new Error("Invalid email or password");
        }

        return { id: user.id, username: user.username, email: user.email };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.username = user.username;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      session.user.username = token.username;
      return session;
    },
  },
  pages: {
    signIn: "/login",
    signOut: "/",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
