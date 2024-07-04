async function getUsers() {
  const response = await fetch("https://dummyapi.io/data/v1/user?created=1", {
    headers: {
      "app-id": "6377cc1b7f489383988982",
    },
  });
  const users = await response.json();
  console.log(users);
  console.log(users.data);
}
async function getUser() {
  const response = await fetch("https://dummyapi.io/data/v1/user/id", {
    headers: {
      "app-id": "6377cc1b7f489383988982",
    },
  });
  const user = await response.json();
  console.log(user);
}
getUser();
async function createUser() {
  const userData = {
    firstName: "Gustavo",
    lastName: "Mendes",
    email: "gustavormendess@gmail.com",
  };
  try {
    await fetch("https://dummyapi.io/data/v1/user/create", {
      method: "POST",
      headers: {
        "app-id": "6377cc1b7f489383988982",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
  } catch (error) {
    console.log(error);
  } finally {
    console.log("FINALIZANDO...");
  }
}
createUser();
