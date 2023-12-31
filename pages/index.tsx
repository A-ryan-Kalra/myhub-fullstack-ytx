import Image from "next/image";
import { Inter } from "next/font/google";
import Sidebar from "@/components/layout/Sidebar";
import Form from "@/components/Form";
import Modal from "@/components/Modal";
import PostFeed from "@/components/posts/PostFeed";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Form label="What's happening?" />
      <PostFeed />
    </div>
  );
}
