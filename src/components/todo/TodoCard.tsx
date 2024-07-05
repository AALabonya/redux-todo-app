type TTodoCardProps = {
  title: string;
  description: string;
};
const TodoCard = ({ title, description }: TTodoCardProps) => {
  return (
    <div className="bg-white rounded-md flex justify-between items-center p-3">
      <input type="checkbox" name="" id="" />
      <p>Toto List</p>
      <p>Time</p>
      <p>Description</p>
      <div className="flex gap-5">
        <button>del</button>
        <button>edit</button>
      </div>
    </div>
  );
};

export default TodoCard;
