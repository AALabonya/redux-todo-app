import TodoContainer from "@/components/todo/TodoContainer";
import Container from "@/components/ui/Container";

const Todo = () => {
  return (
    <Container>
      <h3 className="text-xl font-medium py-2.5">My Todo Lists</h3>
      <TodoContainer />
    </Container>
  );
};
export default Todo;
