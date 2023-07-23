const Display = ({value}) => {
  return <>
  <div className="flex justify-end col-span-4 h-20 w-full bg-gray-800 text-white text-right py-6 px-10 rounded">
    {value}
  </div>
  </>;
}
 
export default Display;