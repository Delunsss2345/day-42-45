import { useFetchCurrentUser } from "@/features/auth/hook";

function AuthProvider() {
  useFetchCurrentUser();
  return null;
}

export default AuthProvider;
