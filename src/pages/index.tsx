import { useGetChatResponse } from "../utils/api";

export default function Home() {
  const { data, error, isLoading } = useGetChatResponse();

  if (isLoading) {
    return <></>;
  } else if (error) {
    return <></>;
  } else {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        Hello World!
      </main>
    );
  }
}
