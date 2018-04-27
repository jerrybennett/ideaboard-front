// import MessagesApi from "../services/messagesApi"

// export function addMessage(message, room, userID){
//   return function(dispatch){
//     MessagesApi.addMessage(message, room, userID)
//     .then(response => {
//       console.log(response)
//       dispatch({
//         type: "ADD_MESSAGE",
//         payload: response
//       })
//     })
//   }
// }

export function addIdea(idea) {
  return function(dispatch) {
    dispatch({
      type: "ADD_IDEA",
      payload: idea
    })
  }
}
