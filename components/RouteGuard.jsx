import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export const RouteGuard = ({ children }) => {
  const router = useRouter();
  const user = useSelector((state) => state.userAuth.user);
  const protectedRoutes = ["/profile", "/shop", "/admin"];
  const currentPath = router.asPath;

  useEffect(() => {
    if (protectedRoutes.includes(currentPath)) {
      if (!user) {
        router.replace("/account?redirect=" + currentPath);
      } else {
        console.log(currentPath);
        router.replace(currentPath);
      }
    }
  }, [currentPath]);
  return <React.Fragment>{children}</React.Fragment>;
};
