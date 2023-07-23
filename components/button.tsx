import { Button } from "./ui/button";

const Buttons = ({value, onClick}) => {
  return <>
  <Button onClick={onClick} className="bg-gray-800 text-white w-full py-3 rounded">
    {value}
  </Button>
  </>;
}
 
export default Buttons;