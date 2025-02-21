"use client";

import Apartment from "@/features/Apartment";
import useCommonStore from "@/store/common.store";

export const Main = () => {
  const { tab } = useCommonStore();
  if (tab === "apartment") {
    return <Apartment />;
  }
  return <>Dashboard</>;
};
