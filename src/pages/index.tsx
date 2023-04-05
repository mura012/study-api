import { useCreateUser } from "@/api/useCreateUser";
import { useGetUser } from "@/api/useGetUser";
import { useState } from "react";

export default function Home() {
  const [state, setState] = useState("");
  const { data } = useGetUser();
  const createUser = useCreateUser(state);
  console.log(data);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    createUser.mutate();
  };
  return (
    <>
      {data?.user?.map((item) => {
        return <div key={item.name}>{item.name}</div>;
      })}
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          value={state}
          onChange={(e) => {
            e.preventDefault();
            setState(e.target.value);
          }}
        />
        <button>submit</button>
      </form>
    </>
  );
}
