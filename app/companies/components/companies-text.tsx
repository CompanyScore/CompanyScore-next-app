import { Title } from "@/ui";
import React from "react";

export function CompaniesText() {
  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col items-start gap-8">
        <div className="m-auto">
          <Title text="Краткое описание" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid fuga
          voluptas rerum veniam doloremque illum cumque reprehenderit nostrum
          quaerat harum voluptatum omnis, sapiente id quisquam hic dolor vel
          perspiciatis aut.
        </p>
      </div>
    </div>
  );
}
