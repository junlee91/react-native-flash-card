import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  header: {
    flex: 1
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  innerContainer: {
    alignItems: "center"
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center"
  },
  formRow: {
    flexDirection: "row",
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth,
    padding: 15
  },
  input: {
    flex: 0.5
  },
  uploadBtn: {
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 40,
    width: 150,
    height: 50,
    backgroundColor: "#3E99EE",
    borderRadius: 25,
    overflow: "hidden"
  },
  calcelBtn: {
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 20,
    width: 150,
    height: 50,
    backgroundColor: "#ee553d",
    borderRadius: 25,
    overflow: "hidden"
  },
  uploadText: {
    color: "white",
    fontWeight: "600",
    textAlign: "center"
  },
  dialog: {
    justifyContent: "center"
  }
});

export default styles;
