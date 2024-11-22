export const handleSubmit = async (formData, setStatus) => {
    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        setStatus({ success: true, message: 'Message sent successfully!' });
      } else {
        setStatus({ success: false, message: data.error || 'Failed to send message.' });
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus({ success: false, message: 'Network error.' });
    }
  };
  