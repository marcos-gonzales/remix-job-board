// import { FaEnvelope } from "react-icons/fa";
import { ReactNode } from "react";
interface InputGroup {
  type?: string;
  name: string;
  children?: ReactNode;
}

export default function InputGroup({ type, name, children }: InputGroup) {
  console.log(children);
  return (
    <div className="m-2">
      <label className="input input-bordered flex items-center gap-2">
        {children}
        <input
          type={type ?? "text"}
          name={name}
          placeholder={name[0].toUpperCase() + name.slice(1)}
          className="grow"
        ></input>
      </label>
    </div>
  );
}
