import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  
  const API_URL = 'https://protaskmanagerapi.onrender.com/api/tasks';

  const fetchTasks = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(err => console.error("API Fehler:", err));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Funktion zum Erstellen eines Tasks
  const addTask = async (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return alert("Titel darf nicht leer sein!");

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json','Accept': 'application/json' },
        body: JSON.stringify({
          Title: newTitle,
          Description: newDescription,
          IsCompleted: false
        })
      });

      if (response.ok) {
        setNewTitle("");
        setNewDescription("");
        fetchTasks(); 
      } else {
        // Das zeigt dir, was das Backend genau sagt (z.B. 400 Bad Request)
        const errorData = await response.text();
        console.error("Backend Fehler:", errorData);
        alert("Fehler vom Server: " + response.status);
      }
    } catch (err) {
      console.error("Netzwerkfehler:", err);
      alert("Konnte den Server nicht erreichen.");
    }
  };

  const deleteTask = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    fetchTasks();
  };

  return (
    <div className="container">
      <h1>ProTaskManager Dashboard</h1>

      {/* NEU: Formular zum Hinzufügen */}
      <form onSubmit={addTask} className="add-form">
        <input 
          type="text" 
          placeholder="Titel (z.B. Bewerbung abschicken)" 
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <input 
          type="text" 
          placeholder="Beschreibung (optional)" 
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
        <button type="submit" className="add-btn">Hinzufügen</button>
      </form>

      <div className="task-grid">
        {tasks.map(task => (
          <div key={task.id} className={`card ${task.isCompleted ? 'done' : ''}`}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <div className="meta">
              <span>{task.isCompleted ? '✅ Abgeschlossen' : '⏳ In Arbeit'}</span>
              <button onClick={() => deleteTask(task.id)} className="delete-btn">Löschen</button>
            </div>
            <small>Geändert: {new Date(task.updatedAt || task.createdAt).toLocaleString('de-DE')}</small>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App