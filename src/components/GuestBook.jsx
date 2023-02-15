import React, { useState } from 'react';
import './GuestBook.css';

const GuestBook = () => {
  const storedEntries = JSON.parse(localStorage.getItem("guestbookEntries")) || [];
  const [guestbookEntries, setGuestbookEntries] = useState(storedEntries);
  const [newEntryName, setNewEntryName] = useState('');
  const [newEntryMessage, setNewEntryMessage] = useState('');
  const [newEntryDate, setNewEntryDate] = useState(new Date().toLocaleString());

  const handleSubmit = (e) => {
    e.preventDefault();
    setGuestbookEntries([...guestbookEntries, { name: newEntryName, message: newEntryMessage, date: newEntryDate }]);
    localStorage.setItem("guestbookEntries", JSON.stringify(guestbookEntries));
    setNewEntryName('');
    setNewEntryMessage('');
    setNewEntryDate(new Date().toLocaleString());
  };

  return (
    <div className="guestbook">   
    <h1>Sign the Guestbook</h1>
      <p>Leave a comment below. It could be anything – appreciation, information, wisdom, or even humor. Surprise me!</p>
      <form onSubmit={handleSubmit} className="form-group">
        <label>
          Name:
          <input type="text" value={newEntryName} onChange={(e) => setNewEntryName(e.target.value)} className="form-control" />
        </label>
        <br />
        <label>
          Message:
          <textarea value={newEntryMessage} onChange={(e) => setNewEntryMessage(e.target.value)} className="form-control" />
        </label>
        <br />
        <label>
          Date:
          <input type="text" value={newEntryDate} onChange={(e) => setNewEntryDate(e.target.value)} className="form-control" disabled />
        </label>
        <br />
        <button type="submit" className="btn btn-primary"
        style = {{margin: '10px'}}>Sign Guestbook</button>
      </form>
      <hr />
      {guestbookEntries.map((entry, index) => (
        <div key={index}>
          <p>Name: {entry.name}</p>
          <p>Message: {entry.message}</p>
          <p>Date: {entry.date}</p>
        </div>
      ))}
    </div>
  );
};

export default GuestBook;