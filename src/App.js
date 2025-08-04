import React from 'react';
import Header from './components/Header';
import UserCard from './components/UserCard';

function App() {
  return (
    <div>
      <Header />
      <UserCard name="Ayan Farooq" role="Frontend Developer" />
      <UserCard name="Salman" role="Frontend Developer" />
    </div>
  );
}
export default App;