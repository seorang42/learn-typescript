import { useState } from "react";

interface Props {
  onClickAdd: (text: string) => void;
}

export default function Editor({ onClickAdd }: Props) {
  const [text, setText] = useState("");

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onClickButton = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    onClickAdd(text);
    setText("");
  };

  return (
    <div>
      <input value={text} onChange={onChangeInput} />
      <button type="submit" onClick={onClickButton}>
        추가
      </button>
    </div>
  );
}
