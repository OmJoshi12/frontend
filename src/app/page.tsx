import Image from "next/image";
import {Chatbot} from "@/components/component/chatbot"
 
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Chatbot/>
    </main>
  );
}
