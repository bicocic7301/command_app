import type { Route } from "./+types/home";
import { Leftside } from "../leftside/leftside";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Left() {
  return <Leftside />;
}
