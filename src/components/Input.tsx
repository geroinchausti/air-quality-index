import React from "react";

interface InputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

export function Input({ value, onChange, placeholder }: InputProps) {
  return (
    <div className='my-10'>
      <input
        className='w-full p-4'
        type='text'
        value={value}
        onChange={onChange}
        placeholder={placeholder || "placeholder"}
      />
    </div>
  );
}
