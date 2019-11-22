package main

import (
   "encoding/json"
   "fmt"
   "log"
   "math/rand"
   "net/http"
   "strconv"
)

func handler(w http.ResponseWriter, r *http.Request){
   fmt.Println(r.URL.Query()["servers"])
   serverRequest := 5
   if len(r.URL.Query()["servers"]) > 0 {
      serverRequest, _ = strconv.Atoi(r.URL.Query()["servers"][0])
   }

   servers := make([]map[string]interface{}, 0)
   for i := 0; i < serverRequest; i++ {
      server := map[string]interface{}{"server": rand.Intn(100)}
      servers = append(servers, server)
   }
   j := map[string]interface{}{"servers": servers}
   responseAsByteArray, _ := json.Marshal(j)

   fmt.Fprint(w, string(responseAsByteArray))
}

func main(){
   http.HandleFunc("/", handler)

   log.Fatal(http.ListenAndServe(":8082", nil))
}

