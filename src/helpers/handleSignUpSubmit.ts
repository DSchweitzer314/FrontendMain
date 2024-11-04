import React from 'react';
const backend_gateway = import.meta.env.VITE_BACKEND_GATEWAY;
export const handleSignUpSubmit = async (
  e: React.FormEvent<HTMLFormElement>,
  email: string,
  password: string
): Promise<void> => {
  e.preventDefault();
  await fetch(`${backend_gateway}/api/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: email, password: password }),
  })
    .then((response) => response.json())
    .then(
      (response) => console.log(response)

      //set cookie?
    )
    .catch((error) => console.log(error));
};
