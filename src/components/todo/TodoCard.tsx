import { removeTodo } from "@/redux/features/todoSlice";
import { Button } from "../ui/button";
import { useAppDispatch } from "@/redux/hooks";

type TTodoCardProps = {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
};
const TodoCard = ({ title, description, id, isCompleted }: TTodoCardProps) => {
  const dispatch = useAppDispatch();
  return (
    <div className="bg-white rounded-md flex justify-between items-center p-3">
      <input type="checkbox" name="" id="" />
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
      <div className="flex gap-5">
        <Button onClick={() => dispatch(removeTodo(id))}>del</Button>
        <Button>edit</Button>
      </div>
    </div>
  );
};

export default TodoCard;
