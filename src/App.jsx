import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);
  const API_URL = 'https://protaskmanagerapi.onrender.com/api/tasks';

  // Funktion zum Laden der Daten
  const fetchTasks = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(err => console.error("API Fehler:", err));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Funktion zum Löschen (für den Profi-Eindruck)
  const deleteTask = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    fetchTasks(); // Liste neu laden
  };

  return (
    <div className="container">
      <h1>ProTaskManager Dashboard</h1>
      <div className="task-grid">
      {tasks.map(task => (
  <div key={task.id} className={`card ${task.isCompleted ? 'done' : ''}`}>
    {/* Achte auf Kleinschreibung: title statt Title */}
    <h3 style={{ color: '#333' }}>{task.title || "Kein Titel"}</h3> 
    <p style={{ color: '#666' }}>{task.description || "Keine Beschreibung"}</p>
    
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