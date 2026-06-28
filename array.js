const turma1 = ["sorin", "eliege", "nescau"]
const turma2 = ["biguinin", "alemoa", "capitu", "faisca"]

console.log("Alunos Turma 1:", turma1)
console.log("Alunos Turma 2:", turma2)

turma1.push("ruiva")
console.log("Alunos Turma 1:", turma1)

console.log(turma1.length)
console.log(turma1[turma1.length - 1])
turma1[turma1.length] = "bichinho"
console.log(turma1)