package main

import (
	"encoding/json"
	"fmt"
	"io"
	"net/http"

	"github.com/gorilla/mux"
)

func main() {
	router := mux.NewRouter()

	router.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		json.NewEncoder(w).Encode(getRandomGithubUsers())
	}).Methods("GET")

	fmt.Println("Server listening on port 8000")
	http.ListenAndServe(":8000", router)
}

type Person struct {
	Username string `json:"login"`
	Avatar   string `json:"avatar_url"`
	UserType string `json:"type"`
	Url      string `json:"url"`
}

func getRandomGithubUsers() []Person {
	resp, err := http.Get("https://api.github.com/users")
	if err != nil {
		fmt.Println("Error:", err)
		return nil
	}
	defer resp.Body.Close()

	body, err := io.ReadAll(resp.Body)
	if err != nil {
		fmt.Println("Error reading data:", err)
		return nil
	}

	var people []Person
	err = json.Unmarshal(body, &people)
	if err != nil {
		fmt.Println("Error unmarshaling JSON data:", err)
		return nil
	}

	return people
}
