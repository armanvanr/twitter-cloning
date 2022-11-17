// // src/redux/modules/counterSlice.js
// import { createSlice } from "@reduxjs/toolkit";

// const initialStateStories = {
//     tweets: [
//         {
//             id: "1",
//             parentId: null,
//             avatar: "https://media.hitekno.com/thumbs/2022/09/02/30698-one-piece-shanks/730x480-img-30698-one-piece-shanks.jpg",
//             displayName: "Shanks",
//             userName: "@akataro",
//             verified: true,
//             context: "Becky, is it around time to take it? The One Piece!",
//             imageUrl: "https://media.giphy.com/media/lQ1nXVifuLqyVAH2Gu/giphy.gif",
//         }
//     ],
//     tweet: {
//         id: "0",
//         parentId: null,
//         avatar: "",
//         displayName: "",
//         userName: "",
//         verified: false,
//         context: "",
//         imageUrl: "",
//     },
// }

// const counterSlice = createSlice({
//   name: "stories",
//   initialStateStories,
//   reducers: {
//     addTweet: (state, action) => {
//       state.number = state.number + action.payload;
//     },

//     minusNumber: (state, action) => {
//       state.number = state.number - action.payload;
//     },
//   },
// });

// // Action creator exports for use in components
// export const { addNumber, minusNumber } = counterSlice.actions;
// // reducer export default to register in configStore.
// export default counterSlice.reducer;