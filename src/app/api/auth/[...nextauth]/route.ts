import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";

const users = [
  // Data user hardcoded, bisa diganti dengan database
  { id: "1", name: "Raka", username: "raka", password: "123456" },
  { id: "2", name: "Budi", username: "budi", password: "password" }
];

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const user = users.find(
          u =>
            u.username === credentials?.username &&
            u.password === credentials?.password
        );
        if (user) {
          return { id: user.id, name: user.name, username: user.username };
        }
        // Jika tidak cocok, return null
        return null;
      }
    })
  ],
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: "/login"
  }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };