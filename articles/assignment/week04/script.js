async function fetchUserList() {
  try {
    const response = await fetch("https://reqres.in/api/users");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();

    return result.data;
  } catch (error) {
    console.error("데이터를 가져오는 중 오류 발생:", error);
    return [];
  }
}

async function displayUsers() {
  const users = await fetchUserList();
  const userListContainer = document.getElementById("user-list");

  users.forEach((user) => {
    const userElement = document.createElement("div");
    userElement.classList.add("user-card");

    userElement.innerHTML = `
            <img src="${user.avatar}" alt="${user.first_name}'s avatar">
            <p><strong>이름:</strong> ${user.first_name} ${user.last_name}</p>
            <p><strong>이메일:</strong> ${user.email}</p>
        `;

    userListContainer.appendChild(userElement);
  });
}

displayUsers();
