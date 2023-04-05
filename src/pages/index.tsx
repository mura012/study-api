import { useGetUser } from "@/api/useGetUser";

export default function Home() {
  const { data } = useGetUser();
  console.log(data);

  return (
    <>
      {data?.user?.map((item) => {
        return <div key={item.name}>{item.name}</div>;
      })}
    </>
  );
}
