import "next-auth";

declare module "next-auth" {
    interface session {
        name: string;
        email: string;
        image: string;
        token: string;
    }
}