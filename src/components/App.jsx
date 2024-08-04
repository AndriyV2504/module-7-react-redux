import { AppBar } from "./AppBar/AppBar";
import { Layout } from "./Layout/Layout";
import { TaskForm } from "./TaskForm/TaskForm";

const App = () => {
  return (
    <div>
      <h1>HELLO!!!</h1>
      <Layout>
        <AppBar />
        <TaskForm />
      </Layout>
    </div>
  );
};

export default App;
