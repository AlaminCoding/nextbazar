import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export const RouteGuard = ({ children }) => {
  const router = useRouter();
  const user = useSelector((state) => state.userAuth.user);
  useEffect(() => {
    const protectedRoutes = ["profile", "shop", "admin"];
    const currentPath = router.asPath;
    const exactPath = currentPath.split("/")[1];

    if (protectedRoutes.includes(exactPath)) {
      if (!user) {
        router.replace("/account?redirect=" + currentPath);
      }
    }
  });
  return children;
};
