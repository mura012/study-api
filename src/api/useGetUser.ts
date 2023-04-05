import { supabase } from "@/supabase";
import { useQuery } from "react-query";

export const getUser = async () => {
  const { data: user, error } = await supabase.from("users").select("*");
  return { user, error };
};

export const useGetUser = () => {
  return useQuery("users", async () => getUser());
};
