 export const getTasks = async () => {
      const token = window.localStorage.getItem("token");
  const res = await fetch("http://localhost:3000/api/allTask", {
    headers: {
      token,
    },
  });

  const data = await res.json();
  return data
};