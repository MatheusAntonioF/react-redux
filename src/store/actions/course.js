// export sem default para um arquivo com mais de um export
export function toggleLesson(module, lesson) {
  return {
    //Indica ação que será realizada
    type: "TOGGLE_LESSON",
    module,
    lesson
  };
}
