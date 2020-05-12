import Link from "next/link";
import React from "React";
export default () => (
  <div>
    Hello World.{" "}
    <Link href="/about">
      <a>About</a>
    </Link>
  </div>
);
