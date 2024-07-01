export const dbUri: string =
	process.env.NEXT_PUBLIC_APP_DB_URI ?? "mongodb://localhost:27017/nextjs";
export const jwtSecret: string =
	process.env.NEXT_PUBLIC_APP_JWT_SECRET ?? "secret";

export const baseUrl: Record<"frontend" | "backend", string> = {
	frontend:
		process.env.NEXT_PUBLIC_FRONTEND_BASE_URL || "http://localhost:3000",
	backend:
		process.env.NEXT_PUBLIC_BACKEND_BASE_URL || "http://localhost:3000/api",
};
