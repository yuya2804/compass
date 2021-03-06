import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { InputThemeType } from "../types/mainFeaturesTypes";
// 型定義
// type TagState = {
//   id: string;
//   name: string;
// };
type SolutionState = {
  isInputed: boolean;
  texts: {
    id: string;
    text: string;
  }[];
};
type FastThinkingState = {
  id: string;
  created_at: string;
  theme: InputThemeType;
  // tag: TagState;
  solutions: SolutionState;
};
type InitialState = {
  list: FastThinkingState[];
  listItem: FastThinkingState;
};

// 初期値
const initialState: InitialState = {
  list: [],
  listItem: {
    id: "",
    created_at: "",
    theme: {
      text: "",
      isInputed: false,
    },
    // tag: {
    //   id: "",
    //   name: "",
    // },
    solutions: {
      isInputed: false,
      texts: [
        {
          id: "",
          text: "",
        },
      ],
    },
  },
};

// 本体
export const fastThinkingSlice = createSlice({
  name: "fastThinking",
  initialState,
  reducers: {
    saveFastThinkingListAction: (state, action: PayloadAction<FastThinkingState>) => {
      state.list = [...state.list, action.payload];
    },
    saveFastThinkingListItemAction: (state, action: PayloadAction<FastThinkingState>) => {
      state.listItem = action.payload;
    },
    saveFastThinkingThemeAction: (state, action: PayloadAction<InputThemeType>) => {
      state.listItem.theme = action.payload;
    },
  },
});

// Actions
export const { saveFastThinkingListAction, saveFastThinkingListItemAction, saveFastThinkingThemeAction } =
  fastThinkingSlice.actions;

// Reducer
export default fastThinkingSlice.reducer;

// Selectors
export const selectFastThinkingTheme = (state: RootState): InputThemeType => state.fastThinking.listItem.theme;
export const selectFastThinkingSolutions = (state: RootState): SolutionState => state.fastThinking.listItem.solutions;
