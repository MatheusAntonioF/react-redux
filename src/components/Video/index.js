import React from "react";

import { connect } from "react-redux";

function Video({ activeModule, activeLesson }) {
  return (
    <div>
      <strong>Módulo {activeModule.title}</strong>
      <span>Aula {activeLesson.title}</span>
    </div>
  );
}

export default connect(state => ({
  activeModule: state.course.activeModule,
  activeLesson: state.course.activeLesson
}))(Video);
