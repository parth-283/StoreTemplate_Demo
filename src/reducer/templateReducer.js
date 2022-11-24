const templateReducer = (state = { templates: [] }, action) => {
  // console.log(state, "STATE", action.type, action.payload, "ACTION>PAYLOAD");
  switch (action.type) {
    case "ADD_TEMPLATE":
      return { ...state, templates: [...state.templates, action.payload] };

    case "Edit_TEMPLATE":
      const dummyTemplate = state.templates;
      const findIndex = dummyTemplate.findIndex((item) => {
        return item._id === action.payload._id;
      });

      if (findIndex >= 0) {
        dummyTemplate[findIndex].html = action.payload.newTemplate;
      } else {
        console.log("indexNotFind");
      }

      return {
        ...state,
        templates: dummyTemplate,
      };

    default:
      return state;
  }
};

export default templateReducer;
