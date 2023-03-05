import { React, useState } from 'react';
import "./Main.css";

export function Reservations() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reservation confirmed for ${name} on ${date} at ${time} for ${guests} guests. We will contact you at ${email} or ${phone} if we have any questions.`);
    setName('');
    setEmail('');
    setPhone('');
    setDate('');
    setTime('');
    setGuests('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Phone:
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </label>
      <label>
        Date:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </label>
      <label>
        Time:
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
      </label>
      <label>
        Guests:
        <input type="number" value={guests} onChange={(e) => setGuests(e.target.value)} />
      </label>
      <button type="submit">Reserve</button>
    </form>
  );
}


