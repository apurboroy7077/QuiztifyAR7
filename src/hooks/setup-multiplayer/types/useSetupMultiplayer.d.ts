type useSetupMultiplayerSelectedOptionType =
  | "NOT_SELECTED"
  | "CREATE_ROOM"
  | "JOIN_ROOM";

type useSetupMultiplayerType = {
  selectedOption: useSetupMultiplayerSelectedOptionType;
  setSelectedOption: (state: useSetupMultiplayerSelectedOptionType) => void;
};
