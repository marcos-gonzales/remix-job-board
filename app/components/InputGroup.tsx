interface InputGroup {
  type?: string;
  name: string;
}

export default function InputGroup({ type, name }: InputGroup) {
  return (
    <div>
      <label htmlFor={name}>
        {name}
        <input
          type={type ?? "text"}
          name={name}
          placeholder={name[0]}
          className="input input-bordered w-full max-w-xs"
        />
      </label>
    </div>
  );
}
