import React from "react";

// Buscar o state desejado do reducer
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as CourseActions from "../../store/actions/course";

// dispatch é fornecida ao component pela função connect
const Sidebar = ({ modules, toggleLesson }) => (
  <aside>
    {modules.map(module => (
      <div key={module.id}>
        <strong>{module.title}</strong>
        <ul>
          {module.lessons.map(lesson => (
            <li key={lesson.key}>
              {lesson.title}
              <button onClick={() => toggleLesson(module, lesson)}>
                Selecionar
              </button>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </aside>
);

const mapStateToProps = state => ({
  modules: state.course.modules
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CourseActions, dispatch);

/**
 * connect recebe 2 parâmetros
 * 1 - O state do reducer
 * 2 - Qual dado deseja recuperar do reducer
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
