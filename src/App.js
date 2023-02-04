import './App.css';
import ContactList from './components/container/contact_list';
import TaskListComponent from './components/container/task_list';

function App() {
  return (
    <div className="App">
      <TaskListComponent />
      <ContactList />
    </div>
  );
}

export default App;
