use expressdemo
db.createUser(
  {
    user: "expressdemo",
    pwd: "expressdemo",
    roles: [ { role: "readWrite", db: "expressdemo" } ]
  }
)
