export interface SubjectInputProps {
  subject: { name: string; importance: string; hours: string };
  index: number;
  handleInputChange: (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleRemoveSubject: (index: number) => void;
  subjectsLength: number;
}
