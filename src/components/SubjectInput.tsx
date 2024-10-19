import React from "react";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";
import { SubjectInputProps } from "../types/Home";

const SubjectInput: React.FC<SubjectInputProps> = ({
  subject,
  index,
  handleInputChange,
  handleRemoveSubject,
  subjectsLength,
}) => {
  return (
    <div className="inputWrapper" key={index}>
      <input
        name="name"
        placeholder="과목명"
        value={subject.name}
        onChange={(event) => handleInputChange(index, event)}
      />
      <input
        name="importance"
        placeholder="중요도 (숫자로 입력)"
        value={subject.importance}
        onChange={(event) => handleInputChange(index, event)}
      />
      <IconButton
        className="removeButton"
        aria-label="remove"
        size="small"
        onClick={() => handleRemoveSubject(index)}
        disabled={subjectsLength <= 2}
      >
        <RemoveIcon fontSize="small" />
      </IconButton>
    </div>
  );
};

export default SubjectInput;
