import { lazy } from "react";

export default function importDemo(file) {
  return () => import(`../components/${file}`); // returns a promise
}
