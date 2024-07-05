import { useAppSelector } from "@/redux/hooks";
import AddtodoModal from "./AddtodoModal";
import TodoCard from "./TodoCard";
import { TodoFilter } from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";

const TodoContainer = () => {
  //from local state
  // const { todos } = useAppSelector((state) => state.todos);
  //*From server
  const { data: todos, isLoading, isError } = useGetTodosQuery(undefined);
  console.log(todos);

  if (isLoading) {
    return <p>......loading</p>;
  }

  return (
    <div className="px-2.5 py-3.5 border rounded-md">
      <div className="flex justify-between rounded-md mb-5">
        <AddtodoModal />
        <TodoFilter />
        {/* <button className="bg-primary-gradient p-2 rounded-lg text-white">
          Filter
        </button> */}
      </div>
      <div className="bg-primary-gradient w-full space-y-3 h-[500px] rounded-xl p-5">
        {/* <div className="bg-white rounded-md  items-center p-3 text-center flex justify-center">
          <p>There is task pending</p>
        </div> */}

        {todos.map((item) => (
          <TodoCard {...item} />
        ))}
      </div>
    </div>
  );
};
export default TodoContainer;
