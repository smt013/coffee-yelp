package main

import (
	"controller"
	//"model"
	"log"
	"net/http"
	"fmt"
	"github.com/gorilla/mux"
)

func main() {
	r := mux.NewRouter()
	r.HandleFunc("/register", controller.RegisterHandler).
		Methods("POST")
	r.HandleFunc("/login", controller.LoginHandler).
		Methods("POST", "OPTIONS")
	r.HandleFunc("/profile", controller.ProfileHandler).
		Methods("GET")

	log.Fatal(http.ListenAndServe("0.0.0.0:8080", r))
	fmt.Println("In main.go")
}
