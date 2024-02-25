// apiService.js

import axios from "axios";

const BASE_URL = "https://5bd6-89-236-230-127.ngrok-free.app";

export const getLogin = async (username,password) => {
    try {
        const response = await axios.post(
            `${BASE_URL}/api/Auth?userName=${username}&password=${password}`,
            {
                headers: {},
                body: JSON.stringify({}),
            }
        );
        localStorage.setItem("user_jwt", response.data);
    } catch (error) {
        console.error("Error:", error);
    }
};

