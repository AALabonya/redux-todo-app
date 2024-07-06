import { useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAppDispatch } from "@/redux/hooks";
import { addTodo } from "@/redux/features/todoSlice";
import { useAddTodoMutation } from "@/redux/api/api";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
const AddtodoModal = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");

  //for local state
  // const dispatch = useAppDispatch();

  //for server
  const [addTodo, { isLoading, isError, isSuccess }] = useAddTodoMutation();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    // const randomId = Math.random().toString(36).split(".")[1];
    // const randomId = Math.random().toString(36).substring(2, 10);
    const taskDetails = {
      title: title,
      isCompleted: false,
      description: description,
      priority,
    };
    addTodo(taskDetails);
    //for local state
    // dispatch(addTodo(taskDetails));
    console.log(taskDetails);
  };

  const handleValueChange = (value: string) => {
    setPriority(value);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary-gradient p-2 rounded-lg text-white">
          Create Todo
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
          <DialogDescription>
            Add Task that you want to finish.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4 bg-white">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input
              id="title"
              onBlur={(e) => setTitle(e.target.value)}
              required
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input
              id="description"
              onBlur={(e) => setDescription(e.target.value)}
              required
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Priority
            </Label>
            <Select onValueChange={handleValueChange}>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Select Priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Priority</SelectLabel>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex justify-end">
            <Button type="submit" className="bg-black text-white">
              {" "}
              Save changes
            </Button>
            {/* <Label htmlFor="description" className="text-right"></Label> */}
          </div>
        </form>
        <DialogFooter></DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default AddtodoModal;
