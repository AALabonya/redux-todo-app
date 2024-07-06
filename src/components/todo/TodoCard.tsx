import { removeTodo, toggleComplete } from "@/redux/features/todoSlice";
import { Button } from "../ui/button";
import { useAppDispatch } from "@/redux/hooks";

type TTodoCardProps = {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
  priority: string;
};
const TodoCard = ({
  title,
  description,
  id,
  isCompleted,
  priority,
}: TTodoCardProps) => {
  const dispatch = useAppDispatch();

  const toggleState = () => {
    dispatch(toggleComplete(id));
  };
  return (
    <div className="bg-white rounded-md flex justify-between items-center p-3">
      <input
        onClick={toggleState}
        type="checkbox"
        name="complete"
        id="complete"
      />
      <p>{title}</p>
      {/* <p>Time</p> */}
      <div>
        {isCompleted ? (
          <p className="text-green-600">Done</p>
        ) : (
          <p className="text-yellow-500">pending</p>
        )}
      </div>
      <p>{description}</p>
      <p>{priority}</p>
      <div className="flex gap-5">
        <Button onClick={() => dispatch(removeTodo(id))}>del</Button>
        <Button>edit</Button>
      </div>
    </div>
  );
};

export default TodoCard;
