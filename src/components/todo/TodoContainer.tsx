import TodoCard from "./TodoCard";
import { Button } from "@/components/ui/button";
const TodoContainer = () => {
  return (
    <div className="px-2.5 py-3.5 border rounded-md">
      <div className="flex justify-between">
        <Button>Add todo</Button>
        <Button>Filter</Button>
      </div>
      <div className="bg-primary-gradient w-full space-y-3 h-[500px] rounded-xl p-5">
        {/* <div className="bg-white rounded-md  items-center p-3 text-center flex justify-center">
          <p>There is task pending</p>
        </div> */}
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
      </div>
    </div>
  );
};
export default TodoContainer;
