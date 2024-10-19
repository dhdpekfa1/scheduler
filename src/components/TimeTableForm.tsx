import React, { useState } from "react";
import "./TimeTableForm.css";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import { fetchSchedule } from "../apis";
import SubjectInput from "./SubjectInput";
import LoadingButton from "./LoadingButton";

const TimeTableForm = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");
  const [totalHours, setTotalHours] = useState("");
  const [subjects, setSubjects] = useState([
    { name: "", importance: "", hours: "" },
    { name: "", importance: "", hours: "" },
  ]);

  const apiKey = import.meta.env.VITE_APP_API_KEY;

  const handleGenerateSchedule = async () => {
    if (
      !totalHours ||
      subjects.some((subject) => !subject.name || !subject.importance)
    ) {
      alert("총 공부 시간과 각 과목의 이름 및 중요도를 모두 입력해주세요.");
      return;
    }

    setLoading(true);

    const totalImportance = subjects.reduce(
      (acc, subject) => acc + Number(subject.importance),
      0
    );

    const distributedSubjects = subjects.map((subject) => {
      const importanceRatio = Number(subject.importance) / totalImportance;
      const allocatedHours = (Number(totalHours) * importanceRatio).toFixed(2);
      return { ...subject, hours: allocatedHours };
    });

    const messageContent = distributedSubjects
      .map(
        (subject) =>
          `${subject.name} 과목: ${subject.hours} 시간 (중요도: ${subject.importance})`
      )
      .join(", ");

    try {
      const result = await fetchSchedule(apiKey, totalHours, messageContent);
      setResponse(result);
    } catch (error) {
      console.error(error);
      alert("시간표 생성 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    const values = [...subjects];
    values[index] = {
      ...values[index],
      [name]: value,
    };
    setSubjects(values);
  };

  const addSubject = () => {
    setSubjects([...subjects, { name: "", importance: "", hours: "" }]);
  };

  const handleRemoveSubject = (index: number) => {
    if (subjects.length > 2) {
      const updatedSubjects = subjects.filter((_, i) => i !== index);
      setSubjects(updatedSubjects);
    }
  };

  const handleTotalHoursChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTotalHours(event.target.value);
  };

  return (
    <Stack>
      <h1 className="title">시간표 작성</h1>
      <Stack className="inputContainer">
        <div className="inputWrapper">
          <input
            type="number"
            name="totalHours"
            placeholder="총 공부 시간 (시간 단위)"
            value={totalHours}
            onChange={handleTotalHoursChange}
          />
        </div>

        {subjects.map((subject, index) => (
          <SubjectInput
            key={index}
            subject={subject}
            index={index}
            handleInputChange={handleInputChange}
            handleRemoveSubject={handleRemoveSubject}
            subjectsLength={subjects.length}
          />
        ))}

        <IconButton
          className="addButton"
          aria-label="add"
          size="small"
          onClick={addSubject}
        >
          <AddIcon fontSize="small" />
        </IconButton>
      </Stack>

      <LoadingButton
        loading={loading}
        onClick={handleGenerateSchedule}
        buttonText="시간표 짜기"
      />

      {response && (
        <div>
          <h3>생성된 시간표:</h3>
          <p>{response}</p>
        </div>
      )}
    </Stack>
  );
};

export default TimeTableForm;
