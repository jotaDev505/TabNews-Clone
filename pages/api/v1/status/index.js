function status(request, response) {
  response.status(200).json({ aluno: "me tornando acima da média!" });
}

export default status;
