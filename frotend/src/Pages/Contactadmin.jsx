import React, { useState, useEffect } from 'react';

const ContactAdmin = () => {
  const [contacts, setContacts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/contacts_read');
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  const handleDelete = async (_id) => {
    if (!window.confirm("Are you sure you want to delete this contact?")) return;
    try {
      const response = await fetch(`http://localhost:8000/api/contacts_delete/${_id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setContacts((prev) => prev.filter(contact => contact._id !== _id));
        alert('Contact deleted successfully!');
      } else {
        alert('Failed to delete the contact');
      }
    } catch (error) {
      console.error('Error deleting contact:', error);
      alert('Failed to delete the contact');
    }
  };

  const handleViewContact = (contact) => {
    setSelectedContact(contact);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedContact(null);
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial' }}>
      <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '20px' }}>Contact Admin Panel</h2>

      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#007bff', color: 'white' }}>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Email</th>
              <th style={thStyle}>Subject</th>
              <th style={thStyle}>Message</th>
              <th style={thStyle}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact._id} style={{ borderBottom: '1px solid #ccc' }}>
                <td style={tdStyle}>{contact.name}</td>
                <td style={tdStyle}>{contact.email}</td>
                <td style={tdStyle}>{contact.subject}</td>
                <td style={tdStyle}>{contact.message}</td>
                <td style={tdStyle}>
                  <button style={viewBtn} onClick={() => handleViewContact(contact)}>View</button>
                  <button style={deleteBtn} onClick={() => handleDelete(contact._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && selectedContact && (
        <div style={modalBackdrop}>
          <div style={modalBox}>
            <h3>Contact Details</h3>
            <p><strong>Name:</strong> {selectedContact.name}</p>
            <p><strong>Email:</strong> {selectedContact.email}</p>
            <p><strong>Subject:</strong> {selectedContact.subject}</p>
            <p><strong>Message:</strong> {selectedContact.message}</p>
            <button onClick={closeModal} style={closeBtn}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

// Styles
const thStyle = {
  padding: '10px',
  border: '1px solid #ccc',
  textAlign: 'left'
};

const tdStyle = {
  padding: '10px',
  border: '1px solid #eee'
};

const viewBtn = {
  backgroundColor: '#28a745',
  color: 'white',
  padding: '6px 10px',
  marginRight: '8px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer'
};

const deleteBtn = {
  backgroundColor: '#dc3545',
  color: 'white',
  padding: '6px 10px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer'
};

const closeBtn = {
  marginTop: '15px',
  backgroundColor: '#007bff',
  color: 'white',
  padding: '10px 15px',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer'
};

const modalBackdrop = {
  position: 'fixed',
  top: '0',
  left: '0',
  height: '100%',
  width: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000
};

const modalBox = {
  backgroundColor: 'white',
  padding: '25px',
  borderRadius: '10px',
  width: '400px',
  maxWidth: '90%',
};

export default ContactAdmin;
