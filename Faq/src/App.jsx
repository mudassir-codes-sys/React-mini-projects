import List from "./FaqList";
function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center bg-black">
        <div className="bg-gray-900 max-w-2xl w-full h-10 mt-4 rounded-xl ">
          <h1 className="text-center text-3xl text-white">FAQ</h1>
        </div>
        <List />
      </div>
    </>
  );
}

export default App;
