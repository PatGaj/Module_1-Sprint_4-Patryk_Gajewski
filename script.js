document.getElementById("addTaskButton").addEventListener("click", function () {
  // Funkcja pobiera z input text, następnie tworzy w ul(taskList) nowe li(task) w którym znajdują się:
  //     span(taskText) zawierający text z input
  //     button(editButton) służączy do edycji span
  //     button(deleteButton) do usuwania li(task)
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  const task = document.createElement("li");
  const taskText = document.createElement("span");
  // Sprawdzenie czy taskInput nie jest pusty, jeśli:
  //     true: przypisuje wartość taskInput do task oraz czyści taskInput,
  //     false: wywołuje alert o braku wartości
  if (taskInput.value) {
    taskText.textContent = taskInput.value;
    taskInput.value = "";
  } else {
    return alert("Nazwa zadania nie może być pusta.");
  }
  // Logika editButton
  const editButton = createButton("Edytuj", function () {
    // Utworzenie input(editInput) do wprowadzania zmian, oraz przypisanie wartości z span(taskText) i jego wyczyszczenie
    let editInput = document.createElement("input");
    editInput.value = taskText.textContent;
    taskText.textContent = "";
    // Logika confirmButton
    const confirmButton = createButton("Zatwierdź zmiany", function () {
      // Sprawdzenie czy pole nie jest puste, jeśli:
      //     true: przypisuje wartość editInput do taskText
      //     false: wywołuje alert o braku wartości
      if (editInput.value) {
        taskText.textContent = editInput.value;
      } else {
        return alert("Nazwa zadania nie może być pusta.");
      }
      // Usunięcie editInput oraz confirmButton, wyświetlenie editButton
      task.removeChild(editInput);
      editButton.style.display = "inline";
      task.removeChild(confirmButton);
    });
    // Wstawienie editInput na początku li(task), wstawienie confirmButton oraz ukrywa editButton
    task.prepend(editInput);
    task.insertBefore(confirmButton, editButton);
    editButton.style.display = "none";
  });
  // Logika deleteButton
  const deleteButton = createButton("Usuń", function () {
    taskList.removeChild(task);
  });
  // Dodanie do li(task) spana oraz dwóch button
  task.appendChild(taskText);
  task.appendChild(editButton);
  task.appendChild(deleteButton);
  // Dodanie li(task) do ul(taskList)
  taskList.appendChild(task);
});

// Funkcja służąca do tworzenia Button, przyjmuje parametry:
//     text: String jako Etykieta buttona
//     buttonFunction: Funkcja która zostanie uruchomiona po wciśnięciu
function createButton(text, buttonFunction) {
  const button = document.createElement("button");
  button.textContent = text;
  button.addEventListener("click", buttonFunction);
  return button;
}
