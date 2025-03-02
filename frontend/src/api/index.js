// src/api/api.js

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; // Change this to your backend base URL

/**
 * GET request to fetch quiz data.
 */
export async function getRandomQuestion() {
  const response = await fetch(`${API_BASE_URL}/destinations`)
  if (!response.ok) {
    throw new Error('Error fetching quiz data')
  }
  return response.json()
}


/**
 * GET request to validate the answer.
 */
export async function checkAnswer(destinationId, userAnswer) {
  const response = await fetch(`${API_BASE_URL}/destinations/check-answer?destinationId=${destinationId}&userAnswer=${userAnswer}`)
  if (!response.ok) {
    throw new Error('Error fetching the data')
  }
  return response.json()
}

/**
 * Register user if not already registered.
 */
export async function registerUser({ username, score, correctAnswers, incorrectAnswers }) {
  const response = await fetch(`${API_BASE_URL}/user/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, score, correctAnswers, incorrectAnswers }),
  });

  if (!response.ok) {
    throw new Error('Error registering user');
  }
  return response.json();
}

/**
 * Fetch challenge invite link & image.
 */
export async function getChallengeInvite(userId) {
  const response = await fetch(`${API_BASE_URL}/user/challenge-friend?userId=${userId}`);
  if (!response.ok) {
    throw new Error('Error fetching challenge invite');
  }
  return response.json();
}

/**
 * Fetch the invitor's information.
 */
export async function getInviteInfo(userId) {
  const response = await fetch(`${API_BASE_URL}/user/invite-info?userId=${userId}`);
  if (!response.ok) {
    throw new Error('Failed to fetch invite info');
  }
  return response.json();
}