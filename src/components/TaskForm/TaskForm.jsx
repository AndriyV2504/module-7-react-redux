import { useDispatch } from "react-redux";
import { Button } from "../Button/Button";
import css from "./TaskForm.module.css";

export const TaskForm = () => {
  const dispatch = useDispatch();

  const handlSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handlSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <Button type="submit">Add task</Button>
    </form>
  );
};
