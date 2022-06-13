// This is a Fake API
const DEFAULT_TIMEOUT_VALUE_IN_MS = 1000;
const TIMEOUT_SEQUENCES = [250, 300, 350, 500, 2000, 10000];

/**
 * 
 * @returns Number in the TIMEOUT_SEQUENCES array.
 * 
 * This allows us to mimic an async request whose response time is 
 * largely unpredictable depending on a varied amount of factors.
 * 
 */
const generateRandomTimeoutValue = () => {
    const randomIndex = Math.floor(Math.random() * TIMEOUT_SEQUENCES.length);
    return TIMEOUT_SEQUENCES[randomIndex] || DEFAULT_TIMEOUT_VALUE_IN_MS;
};

// Local user profiles store.
// Represents our database.
let userProfiles = {
    1: {
        id: '1',
        name: 'Thunder Bird',
        email: 'thunder@bird.com',
    },
    2: {
        id: '2',
        name: 'Storm Trooper',
        email: 'storm@trooper.com',
    },
    3: {
        id: '3',
        name: 'Sam BeYourself',
        email: 'sam@beyourself.com',
    },
};

/**
 * 
 * @param {*} userId 
 * @returns thenable Promise
 */

const fetchUserProfileData = (userId) => {
    return new Promise((resolve, reject) => {
        if (!userProfiles[userId]) {
            return setTimeout(
                () => reject(new Error('User profile not found.')),
                generateRandomTimeoutValue()
            )
        }
        setTimeout(() => resolve(userProfiles[userId]), generateRandomTimeoutValue());
    });
};

export {
    fetchUserProfileData
};