import { Button } from "./ui/button";

const Buttons = ({ value, onClick }: { value: string, onClick: () => void }) => {
  return (
    <>
      <Button onClick={onClick} className="bg-gray-800 text-white w-20 py-3 rounded">
        {value}
      </Button>
    </>
  );
};
 
export default Buttons;