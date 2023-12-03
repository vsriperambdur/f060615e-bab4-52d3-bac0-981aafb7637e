import React from 'react';

const Login = () => {
  const handleAccept = () => {
    // Redirect to OIDC provider with client id in the token
    const clientId = 'SkmbBYHx6u3weWspiPHg1Gl54nT6oZcY';
    const redirectUri = `https://oidc-provider.com/auth?client_id=${clientId}`;
    window.location.href = redirectUri;
  };

  const handleDecline = () => {
    alert('You are declined access to BluegrassID portal');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">BluegrassID Agreement</h2>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          tincidunt, nunc ac varius aliquet, ipsum orci luctus ex, non
          pellentesque velit massa sit amet ex.
        </p>
        <div className="flex justify-between">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={handleAccept}
          >
            Accept
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={handleDecline}
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;