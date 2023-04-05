import { supabase } from "@/supabase";
import { useMutation } from "react-query";

export const createUser = async (name: string) => {
  const { error }: any = await supabase.from("users").insert({ name });
  if (error) {
    console.log(error);
  }
};

export const useCreateUser = (name: string) => {
  return useMutation(async () => createUser(name));
};
