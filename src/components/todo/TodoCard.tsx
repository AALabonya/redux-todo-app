import { removeTodo } from "@/redux/features/todoSlice";
import { Button } from "../ui/button";
import { useAppDispatch } from "@/redux/hooks";

type TTodoCardProps = {
  id: string;
  title: string;
  description: string;
};
const TodoCard = ({ title, description, id }: TTodoCardProps) => {
  const dispatch = useAppDispatch();
  return (
    <div className="bg-white rounded-md flex justify-between items-center p-3">
      <input type="checkbox" name="" id="" />
      <p>{title}</p>
      {/* <p>Time</p> */}
      <p>{description}</p>
      <div className="flex gap-5">
        <Button onClick={() => dispatch(removeTodo(id))}>del</Button>
        <Button>edit</Button>
      </div>
    </div>
  );
};

export default TodoCard;
