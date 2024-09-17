import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TaskBord from "./components/task/TaskBord";
import TasksProvider from "./context/tasksContext";

function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <Hero />
        <TasksProvider>
          <TaskBord />
        </TasksProvider>
      </div>
      <Footer />
    </>
  );
}

export default App;
